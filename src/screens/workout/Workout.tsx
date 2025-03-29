'use client';

import { FC, useEffect, useState } from 'react';
import { useGetWorkoutById } from '@/hooks/workout/useGetWorkouts';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import WorkoutHeader from '@/components/app/workout-header/WorkoutHeader';
import WorkoutData from '@/components/app/workout-data/WorkoutData';
import {
  closeAddNewElementModal,
  openAddNewElementModal,
} from '@/store/slices/modals/addNewElementModalSlice';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { IUpdateWorkout, workoutService } from '@/services/workout/workout.service';
import { closeUpdateElementModal } from '@/store/slices/modals/updateElementModalSlice';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import { closeDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import { useRouter } from 'next/navigation';
import { PRIVATE_URL } from '@/config/url.config';
import Modal from '@/components/app/modals/Modal';
import UpdateWorkout from '@/components/app/forms/update-workout/UpdateWorkout';
import DeleteCheck from '@/components/common/modals/delete-check/DeleteCheck';
import { setService } from '@/services/set/set.service';
import AddSet from '@/components/app/forms/add-set/AddSet';
import Button from '@/components/common/button/Button';
import AddExercise from '@/components/app/forms/add-exercise/AddExercise';
import AddRepeat from '@/components/app/forms/add-repeat/AddRepeat';
import { exerciseService } from '@/services/exercise/exercise.service';
import { useQueryClient } from '@tanstack/react-query';
import Loader from '@/components/common/loader/Loader';

interface IProps {
  id: number;
}

enum ModalContent {
  Exercise = 'exercise',
  Set = 'set',
  Repeat = 'repeat',
  None = 'none',
}

const Workout: FC<IProps> = ({ id }) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useGetWorkoutById(id);
  const [workoutData, setWorkoutData] = useState<IWorkoutResponse | null>(null);
  const [modalContent, setModalContent] = useState<ModalContent>(ModalContent.None);

  const isModalAddSet = useSelector((state: RootState) => state.addNewElementModal.isOpen);

  const elementToUpdate = useSelector((state: RootState) => state.updateElementModal.elementId);

  const isModalUpdateElementOpen = useSelector(
    (state: RootState) => state.updateElementModal.isOpen,
  );

  const isModalDeleteCheckOpen = useSelector((state: RootState) => state.deleteCheckModal.isOpen);
  const elementToDelete = useSelector((state: RootState) => state.deleteCheckModal.elementId);
  const queryClient = useQueryClient();

  const updateWorkout = async (updatedData: IUpdateWorkout) => {
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

        if (Object.keys(data).length !== 0) {
          const updatedWorkout = await workoutService.update(elementToUpdate, data);

          if (updatedWorkout) {
            setWorkoutData(updatedWorkout.data);
          }

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

  const closeDeleteCheck = () => {
    dispatch(closeDeleteCheckModal());
  };

  const deleteWorkout = async () => {
    try {
      if (elementToDelete) {
        await workoutService.delete(elementToDelete);
      }
      closeDeleteCheck();
      toast.success(`Workout was successfully deleted`);
      setTimeout(() => {
        router.push(PRIVATE_URL.home());
      }, 1000);
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const handleOpenAddElementModal = (content: ModalContent) => {
    setModalContent(content);
    dispatch(openAddNewElementModal());
  };

  const addNewSet = async (exerciseId: number | null) => {
    if (!exerciseId) {
      toast.error('Please provide exercise');
      return;
    }

    try {
      await setService.create({
        exerciseId,
      });

      dispatch(closeAddNewElementModal());
      await refetch();
      toast.success('Workout type created successfully!');
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const addNewExercise = async (exerciseTypeId: number, workoutId?: number) => {
    if (!exerciseTypeId && !workoutId) {
      toast.error('Please provide all data');
      return;
    }

    try {
      await exerciseService.create({
        exerciseTypeId: exerciseTypeId,
        workoutId: id,
      });

      dispatch(closeAddNewElementModal());
      await refetch();
      toast.success('Element created successfully!');
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case ModalContent.Exercise:
        return <AddExercise onAddElement={addNewExercise} />;
      case ModalContent.Set:
        return <AddSet onAddSet={addNewSet} />;
      case ModalContent.Repeat:
        return <AddRepeat />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (data) {
      setWorkoutData(data.data);
    }
  }, [data]);

  return (
    <>
      <section className="py-4 px-8">
        <WorkoutHeader workout={workoutData} />
        <div className="flex items-center gap-8 h-12 mt-6">
          <Button
            addClasses={'bg-primaryLight'}
            onClick={() => handleOpenAddElementModal(ModalContent.Exercise)}
          >
            Add Exercise
          </Button>
          <Button
            addClasses={'bg-primaryLight'}
            onClick={() => handleOpenAddElementModal(ModalContent.Set)}
          >
            Add Set
          </Button>
          <Button
            addClasses={'bg-primaryLight'}
            onClick={() => handleOpenAddElementModal(ModalContent.Repeat)}
          >
            Add Repeat
          </Button>
        </div>
        {isLoading ? <Loader /> : <WorkoutData workout={workoutData} />}
      </section>
      <Modal isVisible={isModalAddSet}>{renderModalContent()}</Modal>
      <Modal isVisible={isModalUpdateElementOpen}>
        <UpdateWorkout onUpdateWorkout={updateWorkout} />
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

export default Workout;
