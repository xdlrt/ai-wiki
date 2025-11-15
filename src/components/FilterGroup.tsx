import { ReactNode } from 'react';

interface FilterGroupProps {
  title: string;
  children: ReactNode;
}

export const FilterGroup = ({ title, children }: FilterGroupProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
};

