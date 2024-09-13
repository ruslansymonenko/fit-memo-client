'use client';

import { FC } from 'react';
import WorkoutTypesList from '@/components/app/workout-types-list/WorkoutTypesList';
import { useGetAllWorkoutsTypes } from '@/hooks/workout-types/useGetWokoutsTypes';
import Loader from '@/components/common/loader/Loader';
import AddButton from '@/components/common/add-button/AddButton';
import Modal from '@/components/app/modals/Modal';
import AddWorkoutType from '@/components/app/modals/add-workout-type/AddWorkoutType';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/store/slices/modalSlice';

const WorkoutTypes: FC = () => {
  const { data, isLoading, error } = useGetAllWorkoutsTypes();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch: AppDispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <section className="py-4 px-8 relative h-full">
        <h3 className="font-bold mb-2">Workout types</h3>
        {isLoading ? <Loader /> : ''}
        {data ? <WorkoutTypesList workoutTypes={data.data} /> : ''}
        <AddButton onClick={handleOpenModal} />
      </section>
      <Modal children={<AddWorkoutType />} isVisible={isModalOpen} />
    </>
  );
};

export default WorkoutTypes;
