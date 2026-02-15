
import React from 'react';
import type { Source } from '../types';
import { LinkIcon } from './Icons';

interface SourceListProps {
  sources: Source[];
}

const SourceList: React.FC<SourceListProps> = ({ sources }) => {
  if (sources.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl border border-gray-100 shadow-sm mt-16">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
        <div className="bg-primary/10 p-2 rounded-lg mr-3 text-primary">
          <LinkIcon />
        </div>
        Research Sources
      </h3>
      <ul className="space-y-3">
        {sources.map((source, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-primary mt-1">•</span>
            <a
              href={source.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm break-all leading-relaxed"
            >
              {source.title || source.uri}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourceList;
