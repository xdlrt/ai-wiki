interface FilterButtonProps {
  label: string;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
  dataName?: string;
  ariaLabel?: string;
}

export const FilterButton = ({
  label,
  value,
  isActive,
  onClick,
  dataName,
  ariaLabel,
}: FilterButtonProps) => {
  const handleClick = () => {
    onClick(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(value);
    }
  };

  const baseClasses =
    'px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors';
  const activeClasses = isActive
    ? 'bg-indigo-600 text-white border-indigo-600'
    : 'bg-white text-gray-700 border-gray-300';

  const dataProps = dataName ? { [`data-${dataName}`]: value } : {};

  return (
    <button
      className={`${baseClasses} ${activeClasses}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...dataProps}
      aria-pressed={isActive}
      aria-label={ariaLabel || label}
      tabIndex={0}
    >
      {label}
    </button>
  );
};

