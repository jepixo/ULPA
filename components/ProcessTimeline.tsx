import React from 'react';
import { APPLICATION_PROCESS, IMPORTANT_NOTICE } from '../data/content';
import type { ProcessStep } from '../types';

const ProcessTimeline: React.FC = () => {
    return (
        <section id="how-it-works" className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">Step by Step</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">How Accommodation Works</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">The UL accommodation process is centrally managed. Here's exactly what happens.</p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Vertical Line (desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent -translate-x-1/2" />

                    <div className="space-y-8 md:space-y-0">
                        {APPLICATION_PROCESS.map((step, index) => (
                            <StepCard key={step.step} step={step} index={index} isLast={index === APPLICATION_PROCESS.length - 1} />
                        ))}
                    </div>
                </div>

                {/* Important Notice */}
                <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
                    <div className="flex items-start gap-4">
                        <span className="text-2xl flex-shrink-0">⚠️</span>
                        <div>
                            <h4 className="font-bold text-amber-900 text-lg mb-1">Important</h4>
                            <p className="text-amber-800 leading-relaxed">{IMPORTANT_NOTICE}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface StepCardProps {
    step: ProcessStep;
    index: number;
    isLast: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex flex-col md:flex-row items-center md:gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
            {/* Content Card */}
            <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-2xl">{step.icon}</span>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/).map((part, i) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={i} className="text-gray-900 font-bold">{part.slice(2, -2)}</strong>;
                            }
                            if (part.startsWith('[') && part.includes('](')) {
                                const label = part.match(/\[(.*?)\]/)?.[1];
                                const url = part.match(/\((.*?)\)/)?.[1];
                                return (
                                    <a
                                        key={i}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline font-medium"
                                    >
                                        {label}
                                    </a>
                                );
                            }
                            return part;
                        })}
                    </p>
                </div>
            </div>

            {/* Center Dot */}
            <div className="hidden md:flex items-center justify-center w-2/12">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30 z-10">
                    {step.step}
                </div>
            </div>

            {/* Mobile Step Number */}
            <div className="md:hidden absolute -left-2 top-6 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md z-10">
                {step.step}
            </div>

            {/* Empty space on the other side */}
            <div className="hidden md:block w-5/12" />
        </div>
    );
};

export default ProcessTimeline;
