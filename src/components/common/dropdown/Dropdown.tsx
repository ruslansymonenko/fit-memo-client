'use client';

import { FC, useState } from 'react';
import { ChevronsDown } from 'lucide-react';

interface IDropDownProps {
  options: string[];
  placeholder?: string;
  onSelect: (option: string) => void;
}

const Dropdown: FC<IDropDownProps> = ({ options, onSelect, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative font-[sans-serif] w-max mx-auto">
      <button
        type="button"
        className="px-5 py-2.5 border border-gray-300 text-gray-800 bg-gray-100 text-sm rounded-md outline-none hover:bg-gray-50 flex items-center"
        onClick={handleToggle}
      >
        <span className="mr-2">{selectedOption || placeholder}</span>
        <ChevronsDown />
      </button>

      <ul
        id="dropdownMenu"
        className={`absolute ${isOpen ? 'block' : 'hidden'} shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-gray-50 py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto grid grid-cols-2 grid-rows-auto`}
      >
        {options.map((option, index) => (
          <li
            className="py-2 px-5 hover:bg-gray-100 text-gray-800 text-sm cursor-pointer"
            key={index}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
