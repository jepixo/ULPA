
import React from 'react';
import type { Accommodation, Source } from '../types';
import AccommodationCard from './AccommodationCard';
import SourceList from './SourceList';

interface ResultsDisplayProps {
  accommodations: Accommodation[];
  sources: Source[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ accommodations, sources }) => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {accommodations.map((acc, index) => (
          <AccommodationCard key={`${acc.name}-${index}`} accommodation={acc} />
        ))}
      </div>
      <SourceList sources={sources} />
    </div>
  );
};

export default ResultsDisplay;
