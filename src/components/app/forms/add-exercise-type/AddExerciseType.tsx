'use client';

import React, { FC, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddNewElementModal } from '@/store/slices/modals/addNewElementModalSlice';
import Button from '@/components/common/button/Button';
import { useGetAllMeasures } from '@/hooks/measures/useGetMeasures';
import { IMeasure } from '@/types/data-types/measure.interface';
import Dropdown from '@/components/common/dropdown/Dropdown';

interface IAddExerciseTypeProps {
  onAddExerciseType: (name: string, measureId: number | null) => void;
}

const AddExerciseType: FC<IAddExerciseTypeProps> = ({ onAddExerciseType }) => {
  const dispatch: AppDispatch = useDispatch();
  const [measureId, setMeasureId] = useState<number | null>(null);
  const [measures, setMeasures] = useState<IMeasure[]>([]);
  const { data, isLoading, error } = useGetAllMeasures();
  const [name, setName] = useState('');

  const handleCloseModal = (e: React.FormEvent) => {
    e.preventDefault();
    setName('');
    setMeasureId(null);
    dispatch(closeAddNewElementModal());
  };

  const handleSetChosenMeasure = (name: string) => {
    const chosenMeasure = measures.filter((item) => item.type === name);
    if (chosenMeasure[0]) {
      setMeasureId(chosenMeasure[0].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAddExerciseType(name, measureId);
    handleCloseModal(e);
  };

  useEffect(() => {
    if (data) {
      setMeasures(data.data);
    }
  }, [data]);

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
      <div className="flex items-center">
        <h3 className="text-primary text-xl font-bold flex-1">Add New Exercise Type</h3>
        <button onClick={handleCloseModal}>
          <X className="hover:bg-secondaryLight rounded-md cursor-pointer transition-all" />
        </button>
      </div>

      <form className="space-y-4 mt-8">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Exercise type name</label>
          <input
            type="text"
            placeholder="Enter type name"
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
          />
        </div>
        <div>
          <Dropdown options={measures.map((obj) => obj.type)} onSelect={handleSetChosenMeasure} />
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

export default AddExerciseType;
