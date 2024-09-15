'use client';

import { FC, useEffect, useState } from 'react';
import WorkoutTypesList from '@/components/app/workout-types-list/WorkoutTypesList';
import { useGetAllWorkoutsTypes } from '@/hooks/workout-types/useGetWokoutsTypes';
import Loader from '@/components/common/loader/Loader';
import AddButton from '@/components/common/add-button/AddButton';
import Modal from '@/components/app/modals/Modal';
import AddWorkoutType from '@/components/app/forms/add-workout-type/AddWorkoutType';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  openAddNewElementModal,
  closeAddNewElementModal,
} from '@/store/slices/modals/addNewElementModalSlice';
import { workoutTypesService } from '@/services/workout-types/workout-types.service';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import DeleteCheck from '@/components/common/modals/delete-check/DeleteCheck';
import { closeDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';
import UpdateWorkoutType from '@/components/app/forms/update-workout-type/UpdateWorkoutType';
import { closeUpdateElementModal } from '@/store/slices/modals/updateElementModalSlice';

const WorkoutTypes: FC = () => {
  const { data, isLoading, error } = useGetAllWorkoutsTypes();
  const [workoutTypes, setWorkoutTypes] = useState<IWorkoutTypeResponse[]>(data ? data.data : []);
  const isModalDeleteCheckOpen = useSelector((state: RootState) => state.deleteCheckModal.isOpen);
  const isModalAddWorkoutTypeOpen = useSelector(
    (state: RootState) => state.addNewElementModal.isOpen,
  );
  const isModalUpdateElementOpen = useSelector(
    (state: RootState) => state.updateElementModal.isOpen,
  );
  const elementToDelete = useSelector((state: RootState) => state.deleteCheckModal.elementId);
  const elementToUpdate = useSelector((state: RootState) => state.updateElementModal.elementId);
  const dispatch: AppDispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openAddNewElementModal());
  };

  const closeDeleteCheck = () => {
    dispatch(closeDeleteCheckModal());
  };

  const deleteWorkoutType = async () => {
    try {
      if (elementToDelete) {
        await workoutTypesService.delete(elementToDelete);
      }
      closeDeleteCheck();
      setWorkoutTypes((prevTypes) => prevTypes.filter((type) => type.id !== elementToDelete));
      toast.success(`Workout type was successfully deleted`);
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const addNewWorkoutType = async (name: string, iconId: number | null) => {
    if (!name || !iconId) {
      toast.error('Please provide both a name and select an icon.');
      return;
    }

    try {
      const newWorkoutType = await workoutTypesService.create({
        name,
        iconId: iconId,
      });

      dispatch(closeAddNewElementModal());
      setWorkoutTypes((prevTypes) => [...prevTypes, newWorkoutType.data]);
      toast.success('Workout type created successfully!');
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const updateWorkoutType = async (name: string, iconId: number | null) => {
    if (!name || !iconId) {
      toast.error('Please provide both a name and select an icon.');
      return;
    }

    const data = {
      name: name,
      iconId: iconId,
    };

    try {
      if (elementToUpdate) {
        const updatedWorkoutType = await workoutTypesService.update(elementToUpdate, data);

        setWorkoutTypes((prevTypes) => {
          return prevTypes.map((type) =>
            type.id === elementToUpdate ? updatedWorkoutType.data : type,
          );
        });

        dispatch(closeUpdateElementModal());
        toast.success('Workout type updated successfully!');
      } else {
        toast.error('Wrong item id');
      }
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (data) {
      setWorkoutTypes(data.data);
    }
  }, [data]);

  return (
    <>
      <section className="py-4 px-8 relative h-full">
        <h3 className="font-bold mb-2">Workout types</h3>
        {isLoading ? <Loader /> : ''}
        {data ? <WorkoutTypesList workoutTypes={workoutTypes} /> : ''}
        <AddButton onClick={handleOpenModal} />
      </section>
      <Modal isVisible={isModalAddWorkoutTypeOpen}>
        <AddWorkoutType onAddWorkoutType={addNewWorkoutType} />
      </Modal>
      <Modal isVisible={isModalUpdateElementOpen}>
        <UpdateWorkoutType onUpdateWorkoutType={updateWorkoutType} />
      </Modal>
      <Modal isVisible={isModalDeleteCheckOpen}>
        <DeleteCheck
          onConfirm={deleteWorkoutType}
          onClose={closeDeleteCheck}
          onCancel={closeDeleteCheck}
          message={'Do you want to delete workout type?'}
        />
      </Modal>
    </>
  );
};

export default WorkoutTypes;
