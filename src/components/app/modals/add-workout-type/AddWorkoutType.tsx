'use client';

import React, { FC, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/store/slices/modalSlice';
import Button from '@/components/common/button/Button';
import { useGetAllWorkoutsTypeIcons } from '@/hooks/workout-types-icons/useGetWorkoutTypesIcons';
import { IWorkoutTypeIcons } from '@/types/data-types/workout-type-icons.interface';
import { SERVER_URL_WITHOUT_API_PREFIX } from '@/config/api.config';
import { toast } from 'react-hot-toast';
import { workoutTypesService } from '@/services/workout-types/workout-types.service';

const AddWorkoutType: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [selectedIconId, setSelectedIconId] = useState<number | null>(null);
  const { data, isLoading, error } = useGetAllWorkoutsTypeIcons();
  const [name, setName] = useState('');
  const [workoutTypesIcons, setWorkoutTypesIcons] = useState<IWorkoutTypeIcons[] | null>(null);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const addNewWorkoutType = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !selectedIconId) {
      toast.error('Please provide both a name and select an icon.');
      return;
    }

    try {
      console.log(selectedIconId);

      await workoutTypesService.create({
        name,
        iconId: selectedIconId,
      });

      toast.success('Workout type created successfully!');
      handleCloseModal();
    } catch (error) {
      toast.error(`Failed to create workout type: ${error}`);
    }
  };

  useEffect(() => {
    if (data) {
      setWorkoutTypesIcons(data.data);
    }
  }, [data]);

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
      <div className="flex items-center">
        <h3 className="text-blue-600 text-xl font-bold flex-1">Add New Workout Type</h3>
        <button onClick={handleCloseModal}>
          <X className="hover:bg-secondaryLight rounded-md cursor-pointer transition-all" />
        </button>
      </div>

      <form className="space-y-4 mt-8">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Workout type name</label>
          <input
            type="text"
            placeholder="Enter type name"
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
          />
        </div>

        <div>
          <label className="text-gray-800 text-sm mb-2 block">Select Icon</label>
          <div className="shadow-md p-2 h-40 max-h-40 overflow-y-scroll bg-mediumBg scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
            <div className="grid grid-cols-4 gap-4">
              {workoutTypesIcons ? (
                <>
                  {workoutTypesIcons.map((icon) => (
                    <label
                      key={icon.id}
                      className={`cursor-pointer flex flex-col items-center bg-lightBg rounded-md p-2 border-2 shadow-sm hover:shadow-md transition-all ${
                        selectedIconId === icon.id ? 'border-blue-600' : 'border-transparent'
                      }`}
                    >
                      <input
                        type="radio"
                        name="workoutIcon"
                        value={icon.id}
                        checked={selectedIconId === icon.id}
                        onChange={() => setSelectedIconId(icon.id)}
                        className="hidden"
                      />
                      <img
                        src={`${SERVER_URL_WITHOUT_API_PREFIX}/${icon.icon}`}
                        alt="Workout Icon"
                        className={`w-8 h-8 rounded-lg`}
                      />
                    </label>
                  ))}
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 !mt-8">
          <Button
            children={'Submit'}
            addClasses="bg-secondaryLight"
            onClick={(e) => addNewWorkoutType(e)}
          />
          <Button children={'Cancel'} onClick={handleCloseModal} />
        </div>
      </form>
    </div>
  );
};

export default AddWorkoutType;
