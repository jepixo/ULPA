import React, { useState, useMemo } from 'react';
import ProcessTimeline from './ProcessTimeline';
import AllocationVisualizer from './AllocationVisualizer';
import AccommodationFilters from './AccommodationFilters';
import AccommodationCard from './AccommodationCard';

import ScenarioPlanner from './ScenarioPlanner';
import PortalPreview from './PortalPreview';
import { ACCOMMODATIONS } from '../data/accommodations';
import type { Accommodation, FilterState, SortOption } from '../types';

const HomePage: React.FC = () => {
    const [filters, setFilters] = useState<FilterState>({
        show51WeekOnly: false,
        ensuiteOnly: false,
        ulManagedOnly: false,
        postgradFocused: false,
        maxWalkMinutes: null,
        locationType: 'all',
    });

    const [sortOption, setSortOption] = useState<SortOption>('price-asc');

    const filteredAccommodations = useMemo(() => {
        return ACCOMMODATIONS.filter(acc => {
            // Location filter
            if (filters.locationType !== 'all' && acc.locationType !== filters.locationType) return false;

            // 51-week filter
            if (filters.show51WeekOnly) {
                const has51 = acc.contractOptions.some(c => c.lengthWeeks === 51 && c.postgradAvailable);
                if (!has51) return false;
            }

            // Ensuite filter
            if (filters.ensuiteOnly) {
                const hasEnsuite = acc.roomOptions.some(r => r.ensuite);
                if (!hasEnsuite) return false;
            }

            // UL Managed
            if (filters.ulManagedOnly && !acc.ulManaged) return false;

            // Postgrad focused
            if (filters.postgradFocused && !acc.postgradDedicated && acc.typicalResidentMix !== 'mostly-postgrad') return false;

            return true;
        });
    }, [filters]);

    const sortedAccommodations = useMemo(() => {
        const sorted = [...filteredAccommodations];
        sorted.sort((a, b) => {
            const minPrice = (acc: Accommodation) => Math.min(...acc.contractOptions.map(c => c.typicalTotalPriceEUR));
            switch (sortOption) {
                case 'price-asc': return minPrice(a) - minPrice(b);
                case 'price-desc': return minPrice(b) - minPrice(a);
                case 'distance': return a.distanceToCampusMinutes - b.distanceToCampusMinutes;
                case 'name': return a.name.localeCompare(b.name);
                default: return 0;
            }
        });
        return sorted;
    }, [filteredAccommodations, sortOption]);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            {/* ── Hero Section ── */}
            <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0,148,115,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0,148,115,0.2) 0%, transparent 50%)',
                    }} />
                </div>

                <div className="relative container mx-auto px-4 py-20 md:py-28 max-w-5xl text-center">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/20 px-4 py-1.5 rounded-full mb-6 animate-fadeIn">
                        2026 / 2027 Guide
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight animate-fadeIn">
                        Postgraduate Accommodation<br />
                        <span className="text-primary">at University of Limerick</span>
                    </h1>
                    <p className="text-lg md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeIn">
                        Understand how allocation works, compare your options, and choose strategically.

                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn">
                        <button
                            onClick={() => scrollTo('portal-preview')}
                            className="bg-primary text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] w-full sm:w-auto"
                        >
                            Portal Preview
                        </button>
                        <button
                            onClick={() => scrollTo('how-it-works')}
                            className="bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-xl text-base border border-white/20 transition-all duration-300 hover:bg-white/20 active:scale-[0.98] w-full sm:w-auto"
                        >
                            How It Works
                        </button>
                        <button
                            onClick={() => scrollTo('villages')}
                            className="bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-xl text-base border border-white/20 transition-all duration-300 hover:bg-white/20 active:scale-[0.98] w-full sm:w-auto"
                        >
                            Compare Villages
                        </button>
                        <button
                            onClick={() => scrollTo('scenarios')}
                            className="bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-xl text-base border border-white/20 transition-all duration-300 hover:bg-white/20 active:scale-[0.98] w-full sm:w-auto"
                        >
                            Your 3 Paths
                        </button>

                    </div>

                    {/* ── Disclaimer / About Banner ── */}
                    <div className="mt-10 max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 text-left">
                        <div className="flex items-start gap-3">
                            <span className="text-xl shrink-0 mt-0.5">📋</span>
                            <div className="space-y-2">
                                <p className="text-sm font-bold text-white">
                                    Personal Research Site — No University Affiliation
                                </p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    I'm <span className="text-primary font-semibold">jepixo</span> — a student applying to UL for postgraduate study. I built this site for <strong className="text-gray-300">myself and my friends</strong> to make sense of the accommodation process, condensing weeks of research into one place. <strong className="text-gray-300">I have no affiliation with the University of Limerick, Campus Life, or any housing organisation.</strong> This is not an official resource.
                                </p>
                                <div className="pt-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Sources used in this research</p>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            { label: 'UL Accommodation Fees', url: 'https://www.ul.ie/accommodation/applying/fees-and-payment-information' },
                                            { label: 'UL Postgrad Page', url: 'https://www.ul.ie/accommodation/postgraduate-students' },
                                            { label: 'UL Summer Bookings', url: 'https://www.ul.ie/campus-life-services/conferences-sports-events/news/summer-accommodation-2026-bookings' },
                                            { label: 'UL Campus Life Portal', url: 'https://campuslifeweb.ul.ie/apply/Pages/Registration/Lander.aspx' },
                                            { label: 'Daft.ie — Castletroy', url: 'https://www.daft.ie/sharing/castletroy-limerick' },
                                        ].map(({ label, url }) => (
                                            <a
                                                key={label}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary/80 bg-primary/10 hover:bg-primary/20 border border-primary/20 px-2.5 py-1 rounded-full transition-colors"
                                            >
                                                {label} ↗
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {[
                            { value: '12', label: 'Accommodations' },
                            { value: '9', label: 'UL Managed' },
                            { value: '5', label: '51-Week Options' },
                            { value: '3', label: 'Private Options' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                                <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* ── Section 1: Portal Preview ── */}
            <PortalPreview />

            {/* ── Section 2: How It Works ── */}
            <ProcessTimeline />

            {/* ── Section 3: Allocation Logic ── */}
            <AllocationVisualizer />

            {/* ── Section 4: Where Can You Stay? ── */}
            <section id="villages" className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">Explore</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Where Can You Stay?</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Filter by what matters to you. Click any card to explore details, pricing, and videos.</p>
                    </div>

                    {/* Filters */}
                    <div className="mb-8">
                        <AccommodationFilters
                            filters={filters}
                            onFilterChange={setFilters}
                            resultCount={sortedAccommodations.length}
                        />
                    </div>

                    {/* Sort */}
                    <div className="flex items-center justify-end mb-6 gap-3">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sort</label>
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as SortOption)}
                            className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                        >
                            <option value="price-asc">Price: Low → High</option>
                            <option value="price-desc">Price: High → Low</option>
                            <option value="distance">Distance: Nearest</option>
                            <option value="name">Name: A → Z</option>
                        </select>
                    </div>

                    {/* Grid */}
                    {sortedAccommodations.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {sortedAccommodations.map(acc => (
                                <AccommodationCard key={acc.id} accommodation={acc} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                            <p className="text-4xl mb-4">🔍</p>
                            <p className="text-gray-500 text-lg font-medium">No accommodations match your filters.</p>
                            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters above.</p>
                        </div>
                    )}
                </div>
            </section>



            {/* ── Section 6: Scenarios & Strategy ── */}
            <ScenarioPlanner />



            {/* ── Footer ── */}
            <footer className="text-center py-12 text-sm text-gray-400 border-t border-gray-100 bg-white">
                <p className="font-bold text-gray-700 text-base mb-1">
                    UL Postgraduate Accommodation Guide
                </p>
                <p className="text-gray-500 text-sm mb-4">
                    Built by <span className="text-primary font-semibold">jepixo</span> · Personal research, unofficial resource
                </p>

                <div className="max-w-2xl mx-auto px-4 space-y-3">
                    <p className="text-xs text-gray-400 leading-relaxed">
                        I'm a student applying to study at UL. I built this to help myself and my friends navigate the accommodation system — consolidating everything I found across multiple platforms into one clear guide. <strong>I have zero affiliation with the University of Limerick, Campus Life Services, or any housing provider.</strong> All views and analyses are my own based on publicly available information.
                    </p>
                    <div className="border-t border-gray-100 pt-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Data sourced from</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {[
                                { label: 'UL Accommodation Fees', url: 'https://www.ul.ie/accommodation/applying/fees-and-payment-information' },
                                { label: 'UL Postgrad Accommodation', url: 'https://www.ul.ie/accommodation/postgraduate-students' },
                                { label: 'UL Summer Bookings', url: 'https://www.ul.ie/campus-life-services/conferences-sports-events/news/summer-accommodation-2026-bookings' },
                                { label: 'UL Campus Life Portal', url: 'https://campuslifeweb.ul.ie/apply/Pages/Registration/Lander.aspx' },
                                { label: 'Daft.ie Castletroy', url: 'https://www.daft.ie/sharing/castletroy-limerick' },
                            ].map(({ label, url }) => (
                                <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-gray-400 hover:text-primary underline underline-offset-2 transition-colors"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-300 pt-2">
                        All content, fees, and availability data belong to their respective original sources. This guide is for informational purposes only.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
