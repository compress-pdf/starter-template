import React, { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

import { SectionContainerType } from '@/types/SectionContainer';

interface ExtendedSectionContainerType extends SectionContainerType {
  as?: ElementType; // Optional prop to specify the HTML tag
  id?: string; // Optional
}

const FullAvailableWidthContainer = ({
  children,
  className,
  as: Component = 'div', // Default to 'div' if not provided
  id,
}: ExtendedSectionContainerType) => {
  return (
    <Component
      id={id}
      className={twMerge(
        'w-[90.40vw] md:w-[95.31vw] lg:w-[96.48vw] xl:w-[56.77vw] mx-auto max-w-[1090px]',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default FullAvailableWidthContainer;
