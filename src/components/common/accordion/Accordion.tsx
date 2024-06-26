'use client';

import { FC, useState } from 'react';
import { Plus } from 'lucide-react';
import styles from './Accordion.module.scss';
import cn from 'clsx';

export interface IAccordionItem {
  title: string;
  text: string;
}

export interface IAccordionProps {
  items: IAccordionItem[];
}

const Accordion: FC<IAccordionProps> = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(Array(items.length).fill(false));

  const toggleItem = (index: number): void => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.map((isOpen, i): boolean => (i === index ? !isOpen : isOpen)),
    );
  };

  return (
    <div className={styles.accordion}>
      <ul>
        {items.map((item, index) => (
          <li className="mb-4 shadow transition hover:shadow-lg p-2" key={index}>
            <button
              className="w-full flex justify-between items-center"
              onClick={() => toggleItem(index)}
            >
              <span>{item.title}</span>
              <Plus size={20} />
            </button>
            <div
              className={cn(
                'bg-mediumBg p-2 rounded-md cursor-default transition-all flex justify-center items-center',
                openIndexes[index]
                  ? 'h-20 --tw-translate-y:0 opacity-100'
                  : '--tw-translate-y:-100 h-0 opacity-0',
              )}
            >
              <span>{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
