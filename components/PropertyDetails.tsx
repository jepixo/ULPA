import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Accommodation } from '../types';
import { CheckIcon, CrossIcon, InfoIcon, PriceIcon, VideoIcon, WorldIcon, PinIcon, PhoneIcon, EmailIcon } from './Icons';
import VideoPlayer from './VideoPlayer';

interface PropertyDetailsProps {
    accommodations: Accommodation[];
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ accommodations }) => {
    const { slug } = useParams<{ slug: string }>();
    const accommodation = accommodations.find(acc =>
        acc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
    );

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

    const priceParts = accommodation.pricing.split(';');

    return (
        <div className="bg-white min-h-screen animate-fadeIn">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
                <img
                    src={accommodation.imageURLs[0]}
                    alt={accommodation.name}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                            ← Back to Results
                        </Link>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 backdrop-blur-md ${accommodation.location === 'On-Campus' ? 'bg-white/20 text-white' : 'bg-primary/90 text-white'
                                    }`}>
                                    {accommodation.location}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{accommodation.name}</h1>
                                <div className="flex items-center text-white/90 text-lg">
                                    <PinIcon className="w-5 h-5 mr-2" />
                                    {accommodation.location === 'On-Campus' ? 'University of Limerick, Castletroy' : 'Castletroy, Limerick'}
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 min-w-[300px]">
                                <p className="text-white/70 text-sm uppercase tracking-wider mb-1">Starting From</p>
                                <p className="text-3xl font-bold text-white">{priceParts[0].split(':')[1] || priceParts[0]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <InfoIcon className="w-6 h-6 mr-3 text-primary" />
                            Overview
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {accommodation.description}
                        </p>

                        {/* Key Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {accommodation.amenities.map((amenity, idx) => (
                                <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                                    <span className="text-gray-700 font-medium">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Image Gallery Grid */}
                    {accommodation.imageURLs.length > 1 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {accommodation.imageURLs.slice(1).map((url, idx) => (
                                    <img
                                        key={idx}
                                        src={url}
                                        alt={`${accommodation.name} view ${idx + 2}`}
                                        className="rounded-2xl shadow-sm hover:shadow-md transition-shadow h-64 w-full object-cover"
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Room Types */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <PinIcon className="w-6 h-6 mr-3 text-primary" />
                            Room Configurations
                        </h2>
                        <div className="space-y-4">
                            {accommodation.roomTypes.map((type, idx) => (
                                <div key={idx} className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                                    <span className="font-bold text-gray-800 text-lg">{type}</span>
                                    <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-sm font-bold">Available</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Video Tour */}
                    {accommodation.videoURLs && accommodation.videoURLs.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <VideoIcon className="w-6 h-6 mr-3 text-primary" />
                                Video Tour
                            </h2>
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <VideoPlayer url={accommodation.videoURLs[0]} />
                            </div>
                        </section>
                    )}

                    {/* Analysis */}
                    <section className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <CheckIcon className="w-5 h-5 mr-2 text-green-500" /> Pros
                            </h3>
                            <ul className="space-y-3">
                                {accommodation.pros.map((pro, idx) => (
                                    <li key={idx} className="flex items-start text-gray-600 bg-green-50/50 p-3 rounded-lg border border-green-100">
                                        <span className="mr-2 text-green-500">✓</span> {pro}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <CrossIcon className="w-5 h-5 mr-2 text-red-500" /> Cons
                            </h3>
                            <ul className="space-y-3">
                                {accommodation.cons.map((con, idx) => (
                                    <li key={idx} className="flex items-start text-gray-600 bg-red-50/50 p-3 rounded-lg border border-red-100">
                                        <span className="mr-2 text-red-500">•</span> {con}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        {/* Booking Card */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Book?</h3>
                            <p className="text-gray-500 text-sm mb-6">Secure your spot for the academic year 2025/2026.</p>

                            <div className="mb-8">
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Pricing</p>
                                <div className="text-2xl font-bold text-primary leading-tight">
                                    {accommodation.pricing}
                                </div>
                            </div>

                            <a
                                href={accommodation.bookingURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-primary text-white font-bold text-lg py-4 px-6 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] group"
                            >
                                <WorldIcon className="w-5 h-5 mr-2" />
                                Visit Official Booking Page
                            </a>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <p className="text-center text-sm font-bold text-gray-900 mb-4">Contact Property</p>
                                <div className="space-y-3">
                                    {accommodation.phone && (
                                        <a href={`tel:${accommodation.phone}`} className="flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                                            <PhoneIcon className="w-4 h-4 mr-2" />
                                            {accommodation.phone}
                                        </a>
                                    )}
                                    {accommodation.email && (
                                        <a href={`mailto:${accommodation.email}`} className="flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                                            <EmailIcon className="w-4 h-4 mr-2" />
                                            Email Us
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
