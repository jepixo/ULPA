import React, { useState, useEffect, useMemo } from 'react';
import Header from './Header';
import Controls from './Controls';
import ResultsDisplay from './ResultsDisplay';
import { Accommodation, FilterState, SortOption } from '../types';
import researchData from '../ul_accommodation_research.json';

const HomePage: React.FC = () => {
    const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Filter & Sort State
    const [filters, setFilters] = useState<FilterState>({
        location: [],
        roomType: [],
        amenities: [],
    });
    const [sortOption, setSortOption] = useState<SortOption>('price-asc');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate network delay for better UX
                await new Promise(resolve => setTimeout(resolve, 800));
                setAccommodations(researchData.accommodations);
                setLoading(false);
            } catch (err) {
                console.error("Error loading data:", err);
                setError("Failed to load accommodation data. Please try again later.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filtering Logic
    const filteredAccommodations = useMemo(() => {
        return accommodations.filter(acc => {
            if (filters.location.length > 0 && !filters.location.includes(acc.location)) return false;
            // Add more complex filtering logic here if needed (e.g., matching partial room types)
            return true;
        });
    }, [accommodations, filters]);

    // Sorting Logic
    const sortedAccommodations = useMemo(() => {
        const sorted = [...filteredAccommodations];
        sorted.sort((a, b) => {
            // Helper to extract numeric price (very rough heuristic for demo)
            const getPrice = (p: string) => {
                const match = p.match(/€([\d,]+)/);
                return match ? parseInt(match[1].replace(/,/g, '')) : 0;
            };

            const priceA = getPrice(a.pricing);
            const priceB = getPrice(b.pricing);

            switch (sortOption) {
                case 'price-asc': return priceA - priceB;
                case 'price-desc': return priceB - priceA;
                case 'name-asc': return a.name.localeCompare(b.name);
                case 'name-desc': return b.name.localeCompare(a.name);
                default: return 0;
            }
        });
        return sorted;
    }, [filteredAccommodations, sortOption]);


    const handleFilterChange = (newFilters: FilterState) => {
        setFilters(newFilters);
    };

    const handleSortChange = (newSort: SortOption) => {
        setSortOption(newSort);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 font-medium animate-pulse">Loading amazing places...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-50 text-red-600 p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Oops!</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-primary/20 selection:text-primary">
            <Header />

            <main className="container mx-auto px-4 py-8 max-w-7xl flex-grow flex flex-col">
                <Controls
                    onFilterChange={handleFilterChange}
                    onSortChange={handleSortChange}
                    totalResults={sortedAccommodations.length}
                />

                <div className="mt-8">
                    <ResultsDisplay
                        accommodations={sortedAccommodations}
                        sources={researchData.sources}
                    />
                </div>
            </main>

            <footer className="text-center py-8 text-sm text-gray-400 border-t border-gray-100 mt-12 bg-white">
                <p>© 2026 UL Postgraduate Accommodation Guide. Unofficial Research Tool.</p>
            </footer>
        </div>
    );
};

export default HomePage;
