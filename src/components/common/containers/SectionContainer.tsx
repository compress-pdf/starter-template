import React from 'react';
import { twMerge } from 'tailwind-merge';

import { SectionContainerType } from '@/types/SectionContainer';

const SectionContainer = ({ children, className }: SectionContainerType) => {
  return (
    <div className={twMerge('container my-[10px] md:my-[20px]', className)}>
      {children}
    </div>
  );
};

export default SectionContainer;
