import React, { useState } from 'react';
import { ADVICE_CONTENT } from '../data/content';
import type { AdviceItem } from '../types';

const AdviceAccordion: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="advice" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">Essential Reading</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Advice for Postgraduates</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Key things you need to know before making your accommodation decision.</p>
                </div>

                {/* Accordion Items */}
                <div className="space-y-3">
                    {ADVICE_CONTENT.map((item) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openId === item.id}
                            onToggle={() => toggleItem(item.id)}
                        />
                    ))}
                </div>

                {/* Useful Links */}
                <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                        <span>🔗</span> Useful Links
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            { label: "UL Accommodation Portal", url: "https://campuslifeweb.ul.ie/apply/Pages/Registration/Lander.aspx" },
                            { label: "UL Postgrad Accommodation Page", url: "https://www.ul.ie/accommodation/postgraduate-students" },
                            { label: "UL Fees & Payment Info", url: "https://www.ul.ie/accommodation/applying/fees-and-payment-information" },
                            { label: "Threshold (Tenant Rights)", url: "https://www.threshold.ie/" },
                            { label: "RTB (Dispute Resolution)", url: "https://www.rtb.ie/tenants" },
                            { label: "UL Students' Union", url: "https://ulsu.ie/ulwolves" },
                        ].map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-gray-600 text-sm font-medium group"
                            >
                                <span className="text-gray-400 group-hover:text-primary transition-colors">↗</span>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

import FormattedText from './FormattedText';

interface AccordionItemProps {
    item: AdviceItem;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
    return (
        <div className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-primary/20 shadow-lg shadow-primary/5' : 'border-gray-100 shadow-sm'
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
                    <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                            <FormattedText text={item.content} />
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdviceAccordion;
