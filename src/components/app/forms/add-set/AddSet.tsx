'use client';

import React, { FC, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { closeAddNewElementModal } from '@/store/slices/modals/addNewElementModalSlice';
import Button from '@/components/common/button/Button';
import Dropdown from '@/components/common/dropdown/Dropdown';
import { useGetAllWorkoutsTypes } from '@/hooks/workout-types/useGetWokoutsTypes';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';

interface IAddSetProps {
  onAddSet: (exerciseId: number | null) => void;
}

const AddSet: FC<IAddSetProps> = ({ onAddSet }) => {
  const dispatch: AppDispatch = useDispatch();
  const [exerciseId, setExerciseId] = useState<number | null>(null);
  const [workoutTypes, setWorkoutTypes] = useState<IWorkoutTypeResponse[]>([]);
  const { data, isLoading, error } = useGetAllWorkoutsTypes();

  const handleCloseModal = (e: React.FormEvent) => {
    e.preventDefault();
    setExerciseId(null);
    dispatch(closeAddNewElementModal());
  };

  useEffect(() => {
    if (data) {
      setWorkoutTypes(data.data);
    }
  }, [data]);

  const handleSetExercise = (name: string) => {
    const chosenExercise = workoutTypes.filter((item) => item.name === name);
    if (chosenExercise[0]) {
      setExerciseId(chosenExercise[0].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAddSet(exerciseId);
    handleCloseModal(e);
  };

  useEffect(() => {
    if (data) {
      setWorkoutTypes(data.data);
    }
  }, [data]);

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
      <div className="flex items-center">
        <h3 className="text-primary text-xl font-bold flex-1">Add New Workout</h3>
        <button onClick={handleCloseModal}>
          <X className="hover:bg-secondaryLight rounded-md cursor-pointer transition-all" />
        </button>
      </div>

      <form className="space-y-4 mt-8">
        <div>
          <Dropdown options={workoutTypes.map((obj) => obj.name)} onSelect={handleSetExercise} />
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

export default AddSet;
