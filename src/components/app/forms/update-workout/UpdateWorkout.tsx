'use client';

import React, { FC, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import Button from '@/components/common/button/Button';
import { closeUpdateElementModal } from '@/store/slices/modals/updateElementModalSlice';
import { EnumWorkoutStatus } from '@/types/data-types/workout.interface';
import Dropdown from '@/components/common/dropdown/Dropdown';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';
import { useGetAllWorkoutsTypes } from '@/hooks/workout-types/useGetWokoutsTypes';
import { IUpdateWorkout } from '@/services/workout/workout.service';

interface IProps {
  onUpdateWorkout: (updatedData: IUpdateWorkout) => void;
}

const UpdateWorkout: FC<IProps> = ({ onUpdateWorkout }) => {
  const dispatch: AppDispatch = useDispatch();
  const { data, isLoading, error } = useGetAllWorkoutsTypes();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState<EnumWorkoutStatus | null>(null);
  const [tags, setTags] = useState<number[] | null>(null);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [milliseconds, setMilliseconds] = useState<number | null>(null);
  const [workoutTypeId, setWorkoutTypeId] = useState<number | null>(null);
  const [workoutTypes, setWorkoutTypes] = useState<IWorkoutTypeResponse[] | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSetStatus = (status: string) => {
    const checkStatus = Object.values(EnumWorkoutStatus).includes(status as EnumWorkoutStatus);

    if (checkStatus) {
      setStatus(status as EnumWorkoutStatus);
    }
  };

  const handleCalculateMilliseconds = (e: React.FormEvent) => {
    e.preventDefault();

    const totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;
    setMilliseconds(totalMilliseconds);
  };

  const handleSetChosenWorkoutType = (name: string) => {
    if (workoutTypes) {
      const chosenWorkoutType = workoutTypes.filter((item) => item.name === name);
      if (chosenWorkoutType[0]) {
        setWorkoutTypeId(chosenWorkoutType[0].id);
      }
    }
  };

  const handleCloseModal = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(closeUpdateElementModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let selectedDate: string | null = date ? new Date(date).toISOString() : null;
    let selectedDuration: number = milliseconds ? milliseconds : 0;
    console.log(selectedDuration);

    const dataForUpdating: Record<string, any> = {};

    if (name !== undefined && name !== '') dataForUpdating.name = name;
    if (date !== undefined) dataForUpdating.date = selectedDate;
    if (status !== undefined) dataForUpdating.status = status;
    if (milliseconds !== undefined) dataForUpdating.duration = selectedDuration;
    if (tags !== undefined) dataForUpdating.tagsIds = tags;

    onUpdateWorkout({
      name: dataForUpdating.name,
      date: dataForUpdating.date,
      duration: dataForUpdating.duration,
      status: dataForUpdating.status,
      workoutTypeId: workoutTypeId !== null ? workoutTypeId : undefined,
      tagIds: dataForUpdating.tagsIds,
    });
  };

  useEffect(() => {
    if (data) {
      setWorkoutTypes(data.data);
    }
  }, [data]);

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
      <div className="flex items-center">
        <h3 className="text-primary text-xl font-bold flex-1">Update Workout Type</h3>
        <button onClick={handleCloseModal}>
          <X className="hover:bg-secondaryLight rounded-md cursor-pointer transition-all" />
        </button>
      </div>

      <form className="space-y-4 mt-8">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">
            Updated workout name (optional)
          </label>
          <input
            type="text"
            placeholder="Enter type name"
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
          />
        </div>

        <div>
          <label className="text-gray-800 text-sm mb-2 block" htmlFor="date">
            Select the date (optional):
          </label>
          <input
            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg mb-2"
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>

        <div>
          <label className="text-gray-800 text-sm mb-2 block" htmlFor="date">
            Select the status (optional):
          </label>
          <Dropdown options={Object.values(EnumWorkoutStatus)} onSelect={handleSetStatus} />
        </div>

        <div>
          <label className="text-gray-800 text-sm mb-2 block">
            Updated workout duration (optional)
          </label>
          <div>
            <div className="flex gap-2 flex-col">
              <label className="shadow-md p-2">
                <input
                  type="number"
                  placeholder="hours"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="px-2 py-1 border rounded-md mr-2 focus:outline-none outline-none"
                />
                <span>Write hours</span>
              </label>
              <label className="shadow-md p-2">
                <input
                  type="number"
                  placeholder="minutes"
                  value={minutes}
                  onChange={(e) => setMinutes(Number(e.target.value))}
                  className="px-2 py-1 border rounded-md mr-2 focus:outline-none outline-none"
                />
                <span>Write minutes</span>
              </label>
              <label className="shadow-md p-2">
                <input
                  type="number"
                  placeholder="seconds"
                  value={seconds}
                  onChange={(e) => setSeconds(Number(e.target.value))}
                  className="px-2 py-1 border rounded-md mr-2 focus:outline-none outline-none"
                />
                <span>Write seconds</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <Button
                onClick={(e) => handleCalculateMilliseconds(e)}
                className="mt-3 px-4 py-2 bg-secondaryLight rounded-md"
              >
                Save
              </Button>
              {milliseconds !== null && <p className="mt-2">Duration selected</p>}
            </div>
          </div>
        </div>

        <div>
          {workoutTypes ? (
            <Dropdown
              options={workoutTypes.map((obj) => obj.name)}
              onSelect={handleSetChosenWorkoutType}
              placeholder={'Change workout type (optional)'}
            />
          ) : (
            ''
          )}
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

export default UpdateWorkout;
