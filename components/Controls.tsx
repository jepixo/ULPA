
import React from 'react';

type FilterType = 'all' | 'On-Campus' | 'Off-Campus';
type SortType = 'price-asc' | 'price-desc';

interface ControlsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  currentSort: SortType;
  onSortChange: (sort: SortType) => void;
  resultCount: number;
}

const Controls: React.FC<ControlsProps> = ({
  currentFilter,
  onFilterChange,
  currentSort,
  onSortChange,
  resultCount
}) => {
  const filterOptions: { value: FilterType, label: string }[] = [
    { value: 'all', label: 'All Locations' },
    { value: 'On-Campus', label: 'On-Campus' },
    { value: 'Off-Campus', label: 'Off-Campus' },
  ];

  return (
    <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider hidden sm:block">Filter</span>
        <div className="flex p-1 bg-gray-50 rounded-xl w-full sm:w-auto">
          {filterOptions.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onFilterChange(value)}
              className={`flex-1 sm:flex-none px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${currentFilter === value
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <div className="flex items-center gap-3">
          <label htmlFor="sort-select" className="text-sm font-bold text-gray-400 uppercase tracking-wider hidden sm:block">Sort</label>
          <div className="relative">
            <select
              id="sort-select"
              value={currentSort}
              onChange={(e) => onSortChange(e.target.value as SortType)}
              className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer min-w-[180px]"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>

        <div className="h-8 w-px bg-gray-200 mx-2 hidden md:block"></div>

        <div className="text-sm font-medium text-gray-500 whitespace-nowrap">
          <span className="font-bold text-primary text-lg">{resultCount}</span> Results
        </div>
      </div>
    </div>
  );
};

export default Controls;
