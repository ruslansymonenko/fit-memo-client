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

interface IAddWorkoutProps {
  onAddWorkout: (name: string, workoutTypeId: number | null) => void;
}

const AddWorkout: FC<IAddWorkoutProps> = ({ onAddWorkout }) => {
  const dispatch: AppDispatch = useDispatch();
  const [workoutTypeId, setWorkoutTypeId] = useState<number | null>(null);
  const [workoutTypes, setWorkoutTypes] = useState<IWorkoutTypeResponse[]>([]);
  const { data, isLoading, error } = useGetAllWorkoutsTypes();
  const [name, setName] = useState('');

  const handleCloseModal = (e: React.FormEvent) => {
    e.preventDefault();
    setName('');
    setWorkoutTypeId(null);
    dispatch(closeAddNewElementModal());
  };

  useEffect(() => {
    if (data) {
      setWorkoutTypes(data.data);
    }
  }, [data]);

  const handleSetChosenWorkoutType = (name: string) => {
    const chosenWorkoutType = workoutTypes.filter((item) => item.name === name);
    if (chosenWorkoutType[0]) {
      setWorkoutTypeId(chosenWorkoutType[0].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAddWorkout(name, workoutTypeId);
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
          <label className="text-gray-800 text-sm mb-2 block">Workout name</label>
          <input
            type="text"
            placeholder="Enter type name"
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
          />
        </div>
        <div>
          <Dropdown
            options={workoutTypes.map((obj) => obj.name)}
            onSelect={handleSetChosenWorkoutType}
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

export default AddWorkout;
