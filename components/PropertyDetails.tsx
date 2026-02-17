import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ACCOMMODATIONS } from '../data/accommodations';
import type { Accommodation } from '../types';
import { CheckIcon, CrossIcon, InfoIcon, VideoIcon, PinIcon, PhoneIcon, EmailIcon } from './Icons';
import VideoPlayer from './VideoPlayer';

const PropertyDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [imgError, setImgError] = useState(false);
    const accommodation = ACCOMMODATIONS.find(acc => acc.id === slug);

    if (!accommodation) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Not Found</h1>
                    <Link to="/" className="text-primary hover:underline">Return to Home</Link>
                </div>
            </div>
        );
    }

    const acc = accommodation;
    const prices = acc.contractOptions.map(c => c.typicalTotalPriceEUR);
    const minPrice = Math.min(...prices);

    // Fallback image logic
    const isApartment = acc.name.toLowerCase().includes('apartment') || acc.name.toLowerCase().includes('residence') || acc.name.toLowerCase().includes('hall') || acc.name.toLowerCase().includes('park');
    const fallbackImg = isApartment ? '/ULPA/images/apartment.svg' : '/ULPA/images/village.svg';
    const mainImg = imgError ? fallbackImg : (acc.imageURLs[0] || fallbackImg);

    return (
        <div className="bg-white min-h-screen animate-fadeIn">
            {/* Hero Section */}
            <div className="relative h-[50vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                <img
                    src={mainImg}
                    alt={acc.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imgError ? 'opacity-40' : 'opacity-30'}`}
                    onError={() => !imgError && setImgError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto max-w-6xl">
                        <button
                            onClick={() => navigate(-1)}
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors cursor-pointer"
                        >
                            ← Back to All Accommodations
                        </button>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-md ${acc.locationType === 'on-campus' ? 'bg-white/20 text-white' : 'bg-primary/90 text-white'
                                        }`}>
                                        {acc.locationType === 'on-campus' ? 'On Campus' : 'Off Campus'}
                                    </span>
                                    {acc.ulManaged && <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-green-500/90 text-white">UL Managed</span>}
                                    {acc.privateManaged && <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-blue-500/90 text-white">Private</span>}
                                    {acc.postgradDedicated && <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-purple-500/90 text-white">🎓 Postgrad Focused</span>}
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{acc.name}</h1>
                                <div className="flex items-center text-white/90">
                                    <PinIcon />
                                    <span className="ml-2">🚶 {acc.distanceToCampusMinutes} min walk to campus</span>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 min-w-[280px]">
                                <p className="text-white/70 text-sm uppercase tracking-wider mb-1">Starting From</p>
                                <p className="text-3xl font-bold text-white">€{minPrice.toLocaleString()}</p>
                                <p className="text-white/60 text-xs mt-1">{acc.contractOptions[0]?.utilitiesIncluded ? 'Utilities included' : 'Utilities extra'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">

                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="text-primary mr-3"><InfoIcon /></span>
                            Overview
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">{acc.description}</p>

                        {/* Key Amenities */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {acc.amenities.map((amenity, idx) => (
                                <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                                    <span className="text-gray-700 font-medium text-sm">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contract Options */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">💶 Pricing & Contracts</h2>
                        <div className="space-y-3">
                            {acc.contractOptions.map((opt, idx) => (
                                <div key={idx} className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                                    <div>
                                        <span className="font-bold text-gray-800 text-lg">{opt.lengthWeeks === 38 || opt.lengthWeeks === 41 ? 'Full Academic Year' : `${opt.lengthWeeks} weeks`}</span>
                                        {opt.priceNotes && <span className="text-gray-500 ml-2 text-sm">({opt.priceNotes})</span>}
                                        <div className="text-xs text-gray-400 mt-0.5">
                                            {opt.utilitiesIncluded ? '✅ Utilities included' : '⚠️ Utilities extra'}
                                            {opt.postgradAvailable ? ' • Postgrad eligible' : ''}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-primary">€{opt.typicalTotalPriceEUR.toLocaleString()}</p>
                                        <p className="text-sm text-gray-400">€{Math.round(opt.typicalTotalPriceEUR / opt.lengthWeeks)}/week</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {acc.pricingNotes && (
                            <p className="text-sm text-gray-500 italic mt-4 px-2">{acc.pricingNotes}</p>
                        )}
                    </section>

                    {/* Room Types */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="text-primary mr-3"><PinIcon /></span>
                            Room Configurations
                        </h2>
                        <div className="space-y-3">
                            {acc.roomOptions.map((room, idx) => (
                                <div key={idx} className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                                    <span className="font-bold text-gray-800">{room.type}</span>
                                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${room.ensuite ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                        }`}>
                                        {room.ensuite ? 'Ensuite' : 'Shared Bathroom'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Video Tour */}
                    {acc.videoURLs && acc.videoURLs.length > 0 && acc.videoURLs[0] && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="text-primary mr-3"><VideoIcon /></span>
                                Video Tour
                            </h2>
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <VideoPlayer url={acc.videoURLs[0]} />
                            </div>
                        </section>
                    )}

                    {/* Pros & Cons */}
                    <section className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="text-green-500 mr-2"><CheckIcon /></span> Pros
                            </h3>
                            <ul className="space-y-3">
                                {acc.pros.map((pro, idx) => (
                                    <li key={idx} className="flex items-start text-gray-600 bg-green-50/50 p-3 rounded-lg border border-green-100">
                                        <span className="mr-2 text-green-500">✓</span> {pro}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="text-red-500 mr-2"><CrossIcon /></span> Cons
                            </h3>
                            <ul className="space-y-3">
                                {acc.cons.map((con, idx) => (
                                    <li key={idx} className="flex items-start text-gray-600 bg-red-50/50 p-3 rounded-lg border border-red-100">
                                        <span className="mr-2 text-red-500">✗</span> {con}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Allocation Notes */}
                    {acc.allocationNotes && (
                        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                            <h3 className="font-bold text-blue-900 text-lg mb-2">📋 Allocation Notes</h3>
                            <p className="text-blue-800 leading-relaxed">{acc.allocationNotes}</p>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8 space-y-6">
                        {/* Booking Card */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Apply?</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                {acc.bookingType === 'ul-portal'
                                    ? 'Apply through the UL Accommodation Portal and rank your preferences.'
                                    : 'Book directly with this property — group bookings may be available.'
                                }
                            </p>

                            <div className="mb-6 bg-gray-50 rounded-xl p-4">
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Typical Resident Mix</p>
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold capitalize ${acc.typicalResidentMix === 'mostly-postgrad' ? 'bg-purple-100 text-purple-700' :
                                    acc.typicalResidentMix === 'mixed' ? 'bg-blue-100 text-blue-700' :
                                        'bg-orange-100 text-orange-700'
                                    }`}>
                                    {acc.typicalResidentMix.replace(/-/g, ' ')}
                                </span>
                            </div>

                            <a
                                href={acc.bookingURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-primary text-white font-bold text-lg py-4 px-6 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:shadow-lg active:scale-[0.98]"
                            >
                                {acc.bookingType === 'ul-portal' ? 'Go to UL Portal' : 'Book Directly'} ↗
                            </a>

                            {/* Contact */}
                            {(acc.phone || acc.email) && (
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-center text-sm font-bold text-gray-900 mb-4">Contact</p>
                                    <div className="space-y-3">
                                        {acc.phone && (
                                            <a href={`tel:${acc.phone}`} className="flex items-center justify-center text-gray-600 hover:text-primary transition-colors text-sm">
                                                <PhoneIcon />
                                                <span className="ml-2">{acc.phone}</span>
                                            </a>
                                        )}
                                        {acc.email && (
                                            <a href={`mailto:${acc.email}`} className="flex items-center justify-center text-gray-600 hover:text-primary transition-colors text-sm">
                                                <EmailIcon />
                                                <span className="ml-2">{acc.email}</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
