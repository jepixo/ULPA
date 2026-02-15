import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Accommodation } from '../types';
import { CheckIcon, CrossIcon, InfoIcon, PriceIcon, VideoIcon, WorldIcon, PinIcon, PhoneIcon, EmailIcon, ChevronDownIcon, ChevronUpIcon } from './Icons';
import Gallery from './Gallery';
import VideoPlayer from './VideoPlayer';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Header Image & Badge */}
      <div className="relative shrink-0 h-56">
        <Gallery imageURLs={accommodation.imageURLs} name={accommodation.name} />
        <div className="absolute top-4 left-4 z-10">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-md ${accommodation.location === 'On-Campus'
            ? 'bg-white/90 text-primary'
            : 'bg-gray-900/80 text-white'
            }`}>
            {accommodation.location}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title & Price */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors">{accommodation.name}</h2>
          <div className="flex items-start text-primary bg-primary/5 p-3 rounded-xl border border-primary/10">
            <div className="mt-1 mr-2"><PriceIcon /></div>
            <span className="font-bold text-base leading-snug">{accommodation.pricing}</span>
          </div>
        </div>

        {/* Description (Truncated visually if too long, or just concise) */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{accommodation.description}</p>

        {/* Contact Info */}
        {(accommodation.phone || accommodation.email) && (
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
            {accommodation.phone && (
              <a href={`tel:${accommodation.phone}`} className="flex items-center hover:text-primary transition-colors">
                <span className="mr-2"><PhoneIcon /></span>{accommodation.phone}
              </a>
            )}
            {accommodation.email && (
              <a href={`mailto:${accommodation.email}`} className="flex items-center hover:text-primary transition-colors">
                <span className="mr-2"><EmailIcon /></span>Email Us
              </a>
            )}
          </div>
        )}


        {/* Accordion Sections */}
        <div className="space-y-3 mt-auto">

          {/* Details Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('details')}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center font-bold text-gray-800 text-sm">
                <InfoIcon />
                <span className="ml-2">Room Types & Amenities</span>
              </div>
              <div className={`text-gray-400 transform transition-transform duration-300 ${expandedSection === 'details' ? 'rotate-180' : ''}`}>
                <ChevronDownIcon />
              </div>
            </button>
            {expandedSection === 'details' && (
              <div className="p-4 bg-white border-t border-gray-100 animate-fadeIn">
                <InfoSection icon={<PinIcon />} title="Room Types" items={accommodation.roomTypes} />
                <div className="mt-4"><InfoSection icon={<InfoIcon />} title="Amenities" items={accommodation.amenities} /></div>
              </div>
            )}
          </div>

          {/* Video Accordion (Conditional) */}
          {accommodation.videoURLs && accommodation.videoURLs.length > 0 && (
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('video')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center font-bold text-gray-800 text-sm">
                  <VideoIcon />
                  <span className="ml-2">Video Tour</span>
                </div>
                <div className={`text-gray-400 transform transition-transform duration-300 ${expandedSection === 'video' ? 'rotate-180' : ''}`}>
                  <ChevronDownIcon />
                </div>
              </button>
              {expandedSection === 'video' && (
                <div className="p-4 bg-white border-t border-gray-100 animate-fadeIn">
                  <VideoPlayer url={accommodation.videoURLs[0]} />
                </div>
              )}
            </div>
          )}

          {/* Analysis Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('analysis')}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center font-bold text-gray-800 text-sm">
                <CheckIcon />
                <span className="ml-2">Pros & Cons Analysis</span>
              </div>
              <div className={`text-gray-400 transform transition-transform duration-300 ${expandedSection === 'analysis' ? 'rotate-180' : ''}`}>
                <ChevronDownIcon />
              </div>
            </button>
            {expandedSection === 'analysis' && (
              <div className="p-4 bg-white border-t border-gray-100 animate-fadeIn space-y-4">
                <InfoSection
                  icon={<CheckIcon />}
                  title="Pros"
                  items={accommodation.pros}
                  iconClass="text-green-500"
                  bgClass="bg-green-50/50 border-green-100 rounded-lg p-3"
                />
                <InfoSection
                  icon={<CrossIcon />}
                  title="Cons"
                  items={accommodation.cons}
                  iconClass="text-red-500"
                  bgClass="bg-red-50/50 border-red-100 rounded-lg p-3"
                />
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Footer Action (Always Visible) */}
      <div className="p-4 bg-white border-t border-gray-50 shrink-0 grid grid-cols-2 gap-3">
        <Link
          to={`/property/${accommodation.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
          className="w-full bg-gray-100 text-gray-700 font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-200"
        >
          View Details
        </Link>
        <a
          href={accommodation.bookingURL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary text-white font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] group/btn"
        >
          <WorldIcon />
          <span className="ml-2">Book Now</span>
        </a>
      </div>
    </div>
  );
};

interface InfoSectionProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  itemClass?: string;
  iconClass?: string;
  bgClass?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ icon, title, items, itemClass = 'text-gray-600', iconClass = 'text-primary', bgClass = '' }) => (
  <div className={`group/section ${bgClass}`}>
    <div className="flex items-center mb-2">
      {!bgClass && <div className={`${iconClass} mr-2.5`}>{icon}</div>}
      <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wide">{title}</h4>
    </div>
    <ul className="space-y-2 pl-1">
      {items.map((item, index) => (
        <li key={index} className={`text-sm leading-snug ${itemClass} flex items-start`}>
          <span className={`mr-2.5 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${bgClass ? iconClass?.replace('text-', 'bg-') : 'bg-gray-300'}`}></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default AccommodationCard;
