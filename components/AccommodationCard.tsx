import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Accommodation } from '../types';
import { ChevronDownIcon } from './Icons';
import VideoPlayer from './VideoPlayer';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation }) => {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const acc = accommodation;

  const handleCardClick = () => {
    navigate(`/property/${acc.id}`);
  };

  // Fallback image logic
  const isApartment = acc.name.toLowerCase().includes('apartment') || acc.name.toLowerCase().includes('residence') || acc.name.toLowerCase().includes('hall') || acc.name.toLowerCase().includes('park');
  const fallbackImg = isApartment ? '/ULPA/images/apartment.svg' : '/ULPA/images/village.svg';
  const mainImg = imgError ? fallbackImg : (acc.imageURLs[0] || fallbackImg);

  const toggleSection = (section: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Price range calculation
  const prices = acc.contractOptions.map(c => c.typicalTotalPriceEUR);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceDisplay = minPrice === maxPrice
    ? `€${minPrice.toLocaleString()}`
    : `€${minPrice.toLocaleString()} – €${maxPrice.toLocaleString()}`;

  const has51Week = acc.contractOptions.some(c => c.lengthWeeks === 51 && c.postgradAvailable);
  const contractLengths = [...new Set(acc.contractOptions.map(c => c.lengthWeeks))].sort();

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      {/* Header with gradient */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <img
          src={mainImg}
          alt={acc.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imgError ? 'opacity-40' : 'opacity-50'}`}
          onError={() => !imgError && setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <Badge
            text={acc.locationType === 'on-campus' ? 'On Campus' : 'Off Campus'}
            color={acc.locationType === 'on-campus' ? 'bg-white/90 text-primary' : 'bg-gray-800/90 text-white'}
          />
          {acc.ulManaged && <Badge text="UL Managed" color="bg-green-500/90 text-white" />}
          {acc.privateManaged && <Badge text="Private" color="bg-blue-500/90 text-white" />}
        </div>

        {/* Bottom Badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10">
          {acc.postgradDedicated && <Badge text="🎓 Postgrad Focused" color="bg-purple-500/90 text-white" />}
          {has51Week && <Badge text="📅 51 Weeks" color="bg-amber-500/90 text-white" />}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title & Price */}
        <div className="mb-3">
          <h2 className="text-xl font-bold text-gray-900 leading-tight mb-1 group-hover:text-primary transition-colors">{acc.name}</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>🚶 {acc.distanceToCampusMinutes} min walk</span>
            <span className="text-gray-300">•</span>
            <span className="capitalize">{acc.typicalResidentMix.replace(/-/g, ' ')}</span>
          </div>
        </div>

        {/* Price Block */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 mb-4">
          <p className="text-primary font-bold text-lg">{priceDisplay}</p>
          <p className="text-xs text-gray-500 mt-0.5">
            {contractLengths.map(w => w === 38 || w === 41 ? 'Full Acad. Year' : `${w} weeks`).join(' / ')} contract{contractLengths.length > 1 ? 's' : ''} • {acc.contractOptions[0]?.utilitiesIncluded ? 'Utils included' : 'Utils extra'}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{acc.description}</p>

        {/* Contract Details Accordion */}
        <div className="space-y-2 mt-auto">
          {/* Pricing Breakdown */}
          <AccordionSection
            title="💶 Pricing Breakdown"
            isOpen={expandedSection === 'pricing'}
            onToggle={(e) => toggleSection('pricing', e)}
          >
            <div className="space-y-2">
              {acc.contractOptions.map((opt, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg text-sm">
                  <div>
                    <span className="font-semibold text-gray-800">{opt.lengthWeeks === 38 || opt.lengthWeeks === 41 ? 'Full Acad. Year' : `${opt.lengthWeeks} weeks`}</span>
                    {opt.priceNotes && <span className="text-gray-500 ml-1.5 text-xs">({opt.priceNotes})</span>}
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-primary">€{opt.typicalTotalPriceEUR.toLocaleString()}</span>
                    <span className="text-gray-400 text-xs ml-1">
                      (€{Math.round(opt.typicalTotalPriceEUR / opt.lengthWeeks)}/wk)
                    </span>
                  </div>
                </div>
              ))}
              {acc.pricingNotes && (
                <p className="text-xs text-gray-500 italic mt-2 px-1">{acc.pricingNotes}</p>
              )}
            </div>
          </AccordionSection>

          {/* Room Types */}
          <AccordionSection
            title="🏠 Room Types"
            isOpen={expandedSection === 'rooms'}
            onToggle={(e) => toggleSection('rooms', e)}
          >
            <div className="space-y-2">
              {acc.roomOptions.map((room, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg text-sm">
                  <span className="text-gray-800 font-medium">{room.type}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${room.ensuite ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                    {room.ensuite ? 'Ensuite' : 'Shared'}
                  </span>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* Pros & Cons */}
          <AccordionSection
            title="📊 Pros & Cons"
            isOpen={expandedSection === 'analysis'}
            onToggle={(e) => toggleSection('analysis', e)}
          >
            <div className="space-y-3">
              <div className="bg-green-50/50 border border-green-100 rounded-lg p-3">
                <h4 className="text-xs uppercase tracking-wide font-bold text-green-800 mb-2">Pros</h4>
                <ul className="space-y-1.5">
                  {acc.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50/50 border border-red-100 rounded-lg p-3">
                <h4 className="text-xs uppercase tracking-wide font-bold text-red-800 mb-2">Cons</h4>
                <ul className="space-y-1.5">
                  {acc.cons.map((con, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✗</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionSection>

          {/* Video Tour */}
          {acc.videoURLs && acc.videoURLs.length > 0 && acc.videoURLs[0] && (
            <AccordionSection
              title="🎥 Video Tour"
              isOpen={expandedSection === 'video'}
              onToggle={(e) => toggleSection('video', e)}
            >
              <VideoPlayer url={acc.videoURLs[0]} />
            </AccordionSection>
          )}

          {/* Allocation Notes */}
          {acc.allocationNotes && (
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mt-2">
              <p className="text-blue-800 text-xs leading-relaxed"><span className="font-bold">📋 Allocation: </span>{acc.allocationNotes}</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-4 bg-white border-t border-gray-50 shrink-0 grid grid-cols-2 gap-3">
        <Link
          to={`/property/${acc.id}`}
          className="w-full bg-gray-100 text-gray-700 font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-200"
        >
          Full Details
        </Link>
        <a
          href={acc.bookingURL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full bg-primary text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:shadow-lg active:scale-[0.98]"
        >
          {acc.bookingType === 'ul-portal' ? 'UL Portal' : 'Book Direct'} ↗
        </a>
      </div>
    </div>
  );
};

// ── Sub-components ──

const Badge: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <span className={`text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-md ${color}`}>
    {text}
  </span>
);

interface AccordionSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, isOpen, onToggle, children }) => (
  <div className="border border-gray-100 rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
    >
      <span className="font-bold text-gray-800 text-sm">{title}</span>
      <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDownIcon />
      </div>
    </button>
    {isOpen && (
      <div className="p-3 bg-white border-t border-gray-100 animate-fadeIn">
        {children}
      </div>
    )}
  </div>
);

export default AccommodationCard;
