'use client';

import React, { FC, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { closeAddNewElementModal } from '@/store/slices/modals/addNewElementModalSlice';
import Button from '@/components/common/button/Button';
import Dropdown from '@/components/common/dropdown/Dropdown';
import { IExerciseTypeResponse } from '@/types/server-response-types/exercise-type-response';
import { useGetAllExerciseTypes } from '@/hooks/exercise-types/useGetExerciseTypes';
import toast from 'react-hot-toast';

interface IProps {
  onAddElement: (exerciseTypeId: number, workoutId?: number) => void;
}

const AddExercise: FC<IProps> = ({ onAddElement }) => {
  const dispatch: AppDispatch = useDispatch();
  const [exerciseTypeId, setExerciseTypeId] = useState<number>();
  const [exerciseTypes, setExerciseTypes] = useState<IExerciseTypeResponse[]>([]);
  const [selectedExerciseName, setSelectedExerciseName] = useState<string | null>(null);
  const exerciseTypesRequest = useGetAllExerciseTypes();

  const handleCloseModal = (e: React.FormEvent) => {
    e.preventDefault();
    setExerciseTypeId(undefined);
    setSelectedExerciseName(null);
    dispatch(closeAddNewElementModal());
  };

  const handleSetExercise = (name: string) => {
    setSelectedExerciseName(name);
    const chosenExerciseType = exerciseTypes.filter((item) => item.name === name);
    if (chosenExerciseType[0]) {
      setExerciseTypeId(chosenExerciseType[0].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (exerciseTypeId) {
      onAddElement(exerciseTypeId);
      handleCloseModal(e);
    } else {
      toast.error('Please choose an exercise type');
    }
  };

  useEffect(() => {
    if (exerciseTypesRequest.data) {
      setExerciseTypes(exerciseTypesRequest.data.data);
    }
  }, [exerciseTypesRequest.data]);

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
      <div className="flex items-center">
        <h3 className="text-primary text-xl font-bold flex-1">Add New</h3>
        <button onClick={handleCloseModal}>
          <X className="hover:bg-secondaryLight rounded-md cursor-pointer transition-all" />
        </button>
      </div>

      <form className="space-y-4 mt-8">
        <div>
          <Dropdown
            options={exerciseTypes.map((obj) => obj.name)}
            onSelect={handleSetExercise}
            selected={selectedExerciseName}
          />
        </div>

        <div className="flex justify-end gap-4 !mt-8">
          <Button
            children={'Submit'}
            addClasses="bg-secondaryLight"
            onClick={(e) => handleSubmit(e)}
          />
          <Button children={'Cancel'} onClick={(e) => handleCloseModal(e)} />
        </div>
      </form>
    </div>
  );
};

export default AddExercise;
