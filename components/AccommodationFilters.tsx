import React from 'react';
import type { FilterState } from '../types';

interface AccommodationFiltersProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    resultCount: number;
}

const AccommodationFilters: React.FC<AccommodationFiltersProps> = ({ filters, onFilterChange, resultCount }) => {
    const toggleFilter = (key: keyof FilterState) => {
        if (typeof filters[key] === 'boolean') {
            onFilterChange({ ...filters, [key]: !filters[key] });
        }
    };

    const setLocation = (loc: FilterState['locationType']) => {
        onFilterChange({ ...filters, locationType: loc });
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
                {/* Location Toggle */}
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider hidden sm:block mr-2">Location</span>
                    <div className="flex p-1 bg-gray-50 rounded-xl">
                        {(['all', 'on-campus', 'off-campus'] as const).map((loc) => (
                            <button
                                key={loc}
                                onClick={() => setLocation(loc)}
                                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 capitalize ${filters.locationType === loc
                                        ? 'bg-primary text-white shadow-md'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {loc === 'all' ? 'All' : loc.replace('-', ' ')}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Toggle Filters */}
                <div className="flex flex-wrap items-center gap-2">
                    <FilterPill
                        active={filters.show51WeekOnly}
                        onClick={() => toggleFilter('show51WeekOnly')}
                        icon="📅"
                        label="51 Weeks"
                    />
                    <FilterPill
                        active={filters.ensuiteOnly}
                        onClick={() => toggleFilter('ensuiteOnly')}
                        icon="🚿"
                        label="Ensuite"
                    />
                    <FilterPill
                        active={filters.ulManagedOnly}
                        onClick={() => toggleFilter('ulManagedOnly')}
                        icon="🟢"
                        label="UL Managed"
                    />
                    <FilterPill
                        active={filters.postgradFocused}
                        onClick={() => toggleFilter('postgradFocused')}
                        icon="🎓"
                        label="Postgrad Focus"
                    />
                </div>

                {/* Result Count */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 whitespace-nowrap">
                    <span className="font-bold text-primary text-xl">{resultCount}</span>
                    <span>results</span>
                </div>
            </div>
        </div>
    );
};

interface FilterPillProps {
    active: boolean;
    onClick: () => void;
    icon: string;
    label: string;
}

const FilterPill: React.FC<FilterPillProps> = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl border transition-all duration-200 ${active
                ? 'bg-primary/10 text-primary border-primary/30 shadow-sm'
                : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100 hover:text-gray-700'
            }`}
    >
        <span className="text-base">{icon}</span>
        <span>{label}</span>
    </button>
);

export default AccommodationFilters;
