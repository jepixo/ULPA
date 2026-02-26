import React, { useState } from 'react';
import { ADVICE_CONTENT } from '../data/content';
import type { AdviceItem } from '../types';

const AdviceAccordion: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>('when-to-apply');

    const toggleItem = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    // Split items into official clarifications and research-based advice
    const officialItems = ADVICE_CONTENT.filter(item =>
        ['when-to-apply', 'rolling-vs-lottery', 'application-fee', 'deposit', 'confirmation-docs', 'visa-accommodation'].includes(item.id)
    );
    const researchItems = ADVICE_CONTENT.filter(item =>
        ['51-week', 'ensuite', 'strategy', 'off-campus'].includes(item.id)
    );

    return (
        <section id="advice" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">Official Guidance + Research</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Key Questions Answered</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Official clarifications from UL Accommodation (Evie, Feb 2026) combined with research-based advice for postgraduate applicants.</p>
                </div>

                {/* Official Clarifications */}
                <div className="mb-4">
                    <div className="flex items-center gap-3 mb-4 px-1">
                        <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">✅ From UL Accommodation (Evie)</span>
                        <div className="flex-1 h-px bg-emerald-200" />
                    </div>
                    <div className="space-y-3">
                        {officialItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                onToggle={() => toggleItem(item.id)}
                                isOfficial
                            />
                        ))}
                    </div>
                </div>

                {/* Research-Based Advice */}
                <div className="mt-10 mb-4">
                    <div className="flex items-center gap-3 mb-4 px-1">
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-500">📘 Research-Based Guidance</span>
                        <div className="flex-1 h-px bg-blue-200" />
                    </div>
                    <div className="space-y-3">
                        {researchItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                onToggle={() => toggleItem(item.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* Useful Links */}
                <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                        <span>🔗</span> Helpful Links
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            { label: "UL Accommodation (Official Site)", url: "https://www.ul.ie/accommodation", official: true },
                            { label: "UL Accommodation Portal (Apply)", url: "https://campuslifeweb.ul.ie/apply/Pages/Registration/Lander.aspx", official: true },
                            { label: "UL Postgrad Accommodation Page", url: "https://www.ul.ie/accommodation/postgraduate-students", official: true },
                            { label: "UL Fees & Payment Info", url: "https://www.ul.ie/accommodation/applying/fees-and-payment-information", official: true },
                            { label: "Threshold (Tenant Rights)", url: "https://www.threshold.ie/" },
                            { label: "RTB (Dispute Resolution)", url: "https://www.rtb.ie/tenants" },
                            { label: "UL Students' Union", url: "https://ulsu.ie/ulwolves" },
                            { label: "Daft.ie — Castletroy", url: "https://www.daft.ie/sharing/castletroy-limerick" },
                        ].map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 p-3 rounded-xl transition-colors text-sm font-medium group ${link.official
                                        ? 'hover:bg-primary/5 hover:text-primary text-gray-700 border border-transparent hover:border-primary/10'
                                        : 'hover:bg-gray-50 hover:text-gray-900 text-gray-500'
                                    }`}
                            >
                                <span className={`transition-colors ${link.official ? 'text-primary group-hover:text-primary' : 'text-gray-400 group-hover:text-gray-600'}`}>
                                    {link.official ? '🏛️' : '↗'}
                                </span>
                                {link.label}
                                {link.official && (
                                    <span className="ml-auto text-[9px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-1.5 py-0.5 rounded-full">
                                        Official
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Source attribution */}
                <p className="text-center text-[11px] text-gray-400 mt-6 leading-relaxed">
                    Official clarifications sourced from UL Accommodation staff communications via CampusConnect (Feb 2026).<br />
                    Always verify with <a href="https://www.ul.ie/accommodation" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ul.ie/accommodation</a> for the latest information.
                </p>
            </div>
        </section>
    );
};

import FormattedText from './FormattedText';

interface AccordionItemProps {
    item: AdviceItem;
    isOpen: boolean;
    onToggle: () => void;
    isOfficial?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle, isOfficial }) => {
    return (
        <div className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen
                ? isOfficial
                    ? 'border-emerald-200 shadow-lg shadow-emerald-500/5'
                    : 'border-primary/20 shadow-lg shadow-primary/5'
                : 'border-gray-100 shadow-sm'
            }`}>
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
            >
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">{item.title}</h3>
                </div>
                <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 animate-fadeIn">
                    <div className={`border-t pt-4 ${isOfficial ? 'border-emerald-100' : 'border-gray-100'}`}>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            <FormattedText text={item.content} />
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdviceAccordion;
