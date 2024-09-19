'use client';

import { FC, useEffect, useState } from 'react';
import Greeting from '@/components/app/greeting/Greeting';
import WorkoutsList from '@/components/app/workouts-list/WorkoutsList';
import { useGetAllWorkouts } from '@/hooks/workout/useGetWorkouts';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import ErrorBlock from '@/components/common/error-block/ErrorBlock';
import Modal from '@/components/app/modals/Modal';
import DeleteCheck from '@/components/common/modals/delete-check/DeleteCheck';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { IUpdateWorkout, workoutService } from '@/services/workout/workout.service';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import { closeDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import { closeAddNewElementModal } from '@/store/slices/modals/addNewElementModalSlice';
import { closeUpdateElementModal } from '@/store/slices/modals/updateElementModalSlice';
import AddWorkout from '@/components/app/forms/add-workout/AddWorkout';
import UpdateWorkout from '@/components/app/forms/update-workout/UpdateWorkout';

const Main: FC = () => {
  const { data, isLoading, error } = useGetAllWorkouts();
  const [workoutsData, setWorkoutsData] = useState<IWorkoutResponse[]>([]);
  const elementToUpdate = useSelector((state: RootState) => state.updateElementModal.elementId);
  const isModalAddWorkoutOpen = useSelector((state: RootState) => state.addNewElementModal.isOpen);
  const isModalUpdateElementOpen = useSelector(
    (state: RootState) => state.updateElementModal.isOpen,
  );
  const isModalDeleteCheckOpen = useSelector((state: RootState) => state.deleteCheckModal.isOpen);
  const elementToDelete = useSelector((state: RootState) => state.deleteCheckModal.elementId);
  const dispatch: AppDispatch = useDispatch();

  const deleteWorkout = async () => {
    try {
      if (elementToDelete) {
        await workoutService.delete(elementToDelete);
      }
      closeDeleteCheck();
      setWorkoutsData((prevTypes) => prevTypes.filter((workout) => workout.id !== elementToDelete));
      toast.success(`Workout was successfully deleted`);
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const closeDeleteCheck = () => {
    dispatch(closeDeleteCheckModal());
  };

  const addNewWorkout = async (name: string, workoutTypeId: number | null) => {
    if (!name || !workoutTypeId) {
      toast.error('Please provide both a name and select a workout type');
      return;
    }

    try {
      const newExerciseType = await workoutService.create({
        name,
        workoutTypeId,
      });

      dispatch(closeAddNewElementModal());
      setWorkoutsData((prevTypes) => [...prevTypes, newExerciseType.data]);
      toast.success('Workout type created successfully!');
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const updateExerciseType = async (updatedData: IUpdateWorkout) => {
    try {
      if (elementToUpdate) {
        const data: Record<string, any> = {};

        if (updatedData.name !== undefined && updatedData.name !== '' && updatedData.name)
          data.name = updatedData.name;
        if (updatedData.date !== undefined && updatedData.date)
          data.date = new Date(updatedData.date);
        if (updatedData.status !== undefined && updatedData.status)
          data.status = updatedData.status;
        if (updatedData.duration !== undefined && updatedData.duration)
          data.duration = updatedData.duration;
        if (updatedData.workoutTypeId !== undefined && updatedData.workoutTypeId)
          data.workoutTypeId = updatedData.workoutTypeId;
        if (updatedData.tagIds !== undefined && updatedData.tagIds)
          data.tagsIds = updatedData.tagIds;

        console.log(updatedData, data);

        if (Object.keys(data).length !== 0) {
          const updatedWorkout = await workoutService.update(elementToUpdate, data);

          setWorkoutsData((prevWorkouts) => {
            return prevWorkouts.map((workout) =>
              workout.id === elementToUpdate ? updatedWorkout.data : workout,
            );
          });

          dispatch(closeUpdateElementModal());
          toast.success('Workout updated successfully!');
        } else {
          toast.error('No data to update');
        }
      } else {
        toast.error('Wrong item id');
      }
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (data) {
      const workouts = data.data;

      if (workouts.length > 2) {
        setWorkoutsData(workouts.slice(0, 3));
      } else {
        setWorkoutsData(workouts);
      }
    }
  }, [data]);

  return (
    <>
      <section className="py-4 px-8">
        <Greeting />
        <h3 className="font-bold mb-2">Latest workouts</h3>
        {error ? <ErrorBlock /> : <WorkoutsList data={workoutsData} isLoading={isLoading} />}
      </section>
      <Modal isVisible={isModalAddWorkoutOpen}>
        <AddWorkout onAddWorkout={addNewWorkout} />
      </Modal>
      <Modal isVisible={isModalUpdateElementOpen}>
        <UpdateWorkout onUpdateWorkout={updateExerciseType} />
      </Modal>
      <Modal isVisible={isModalDeleteCheckOpen}>
        <DeleteCheck
          onConfirm={deleteWorkout}
          onClose={closeDeleteCheck}
          onCancel={closeDeleteCheck}
          message={'Do you want to delete workout?'}
        />
      </Modal>
    </>
  );
};

export default Main;
