'use client';

import { FC, useEffect, useState } from 'react';
import ExerciseTypesList from '@/components/app/exercise-types-list/ExerciseTypesList';
import { IExerciseTypeResponse } from '@/types/server-response-types/exercise-type-response';
import { useGetAllExerciseTypes } from '@/hooks/exercise-types/useGetExerciseTypes';
import AddButton from '@/components/common/add-button/AddButton';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeAddNewElementModal,
  openAddNewElementModal,
} from '@/store/slices/modals/addNewElementModalSlice';
import Modal from '@/components/app/modals/Modal';
import AddExerciseType from '@/components/app/forms/add-exercise-type/AddExerciseType';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import { exerciseTypeService } from '@/services/exercise-type/exercise-type.service';
import { closeDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import DeleteCheck from '@/components/common/modals/delete-check/DeleteCheck';
import { closeUpdateElementModal } from '@/store/slices/modals/updateElementModalSlice';
import UpdateExerciseType from '@/components/app/forms/update-exercise-type/UpdateExerciseType';

const ExerciseTypes: FC = () => {
  const { data, isLoading, error } = useGetAllExerciseTypes();
  const [exerciseTypes, setExerciseTypes] = useState<IExerciseTypeResponse[]>(
    data ? data.data : [],
  );
  const isModalDeleteCheckOpen = useSelector((state: RootState) => state.deleteCheckModal.isOpen);
  const isModalAddExerciseTypeOpen = useSelector(
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

  const addNewExerciseType = async (name: string, measureId: number | null) => {
    if (!name || !measureId) {
      toast.error('Please provide both a name and select a measure');
      return;
    }

    try {
      const newExerciseType = await exerciseTypeService.create({
        name,
        measureId,
      });

      dispatch(closeAddNewElementModal());
      setExerciseTypes((prevTypes) => [...prevTypes, newExerciseType.data]);
      toast.success('Workout type created successfully!');
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const deleteExerciseType = async () => {
    try {
      if (elementToDelete) {
        await exerciseTypeService.delete(elementToDelete);
      }
      closeDeleteCheck();
      setExerciseTypes((prevTypes) => prevTypes.filter((type) => type.id !== elementToDelete));
      toast.success(`Exercise type was successfully deleted`);
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const updateExerciseType = async (name: string, measureId: number | null) => {
    if (!name || !measureId) {
      toast.error('Please provide both a name and select a measure.');
      return;
    }

    const data = {
      name: name,
      measureId: measureId,
    };

    try {
      if (elementToUpdate) {
        const updatedExerciseType = await exerciseTypeService.update(elementToUpdate, data);

        setExerciseTypes((prevTypes) => {
          return prevTypes.map((type) =>
            type.id === elementToUpdate ? updatedExerciseType.data : type,
          );
        });

        dispatch(closeUpdateElementModal());
        toast.success('Exercise type updated successfully!');
      } else {
        toast.error('Wrong item id');
      }
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (data) {
      setExerciseTypes(data.data);
    }
  }, [data]);

  return (
    <>
      <section className="py-4 px-8 relative h-full">
        <h3 className="font-bold mb-2">Exercises</h3>
        <ExerciseTypesList exerciseTypes={exerciseTypes} />
        <AddButton onClick={handleOpenModal} />
      </section>
      <Modal isVisible={isModalAddExerciseTypeOpen}>
        <AddExerciseType onAddExerciseType={addNewExerciseType} />
      </Modal>
      <Modal isVisible={isModalUpdateElementOpen}>
        <UpdateExerciseType onUpdateExerciseType={updateExerciseType} />
      </Modal>
      <Modal isVisible={isModalDeleteCheckOpen}>
        <DeleteCheck
          onConfirm={deleteExerciseType}
          onClose={closeDeleteCheck}
          onCancel={closeDeleteCheck}
          message={'Do you want to delete workout type?'}
        />
      </Modal>
    </>
  );
};

export default ExerciseTypes;
