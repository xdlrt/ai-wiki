import { ReactNode } from 'react';

interface FilterGroupProps {
  title: string;
  children: ReactNode;
}

export const FilterGroup = ({ title, children }: FilterGroupProps) => {
  return (
    <div className="mb-2.5">
      <h3 className="text-xs font-medium text-gray-700 mb-1">{title}</h3>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
};

