import React, { useState } from 'react';
import { ALLOCATION_FACTS } from '../data/content';
import FormattedText from './FormattedText';

// ── Key Q&A items incorporating official UL Accommodation guidance (Evie, Feb 2026)
// and original research findings
const KEY_QA = [
    {
        id: "when-to-apply",
        icon: "🗓️",
        q: "When do applications open?",
        a: "Applications for 2026/27 open on **March 1st**. You can register an account on [ul.ie/accommodation](https://www.ul.ie/accommodation) right now, but the 2026/27 application tab won't appear until the portal officially opens. If you applied during the brief early-opening window for returning students, your application is honoured — don't reapply.",
        official: true,
    },
    {
        id: "rolling-vs-lottery",
        icon: "🎲",
        q: "Is it a lottery or first-come-first-served?",
        a: "Depends on your student type:\n\n**International full-degree postgrads & undergrads (most of us):** Rolling basis — NOT a lottery. Apply as soon as the portal opens on March 1st, ideally as soon as you have a student ID or application number starting with **26**.\n\n**CAO students (Irish / some EU undergrads):** Lottery process. You would know if this applies — you applied through the CAO. When applying, select **'International'**, NOT 'CAO'.\n\n**Erasmus / Exchange students:** Separate lottery with dedicated communications — you won't miss out.",
        official: true,
    },
    {
        id: "application-fee",
        icon: "💳",
        q: "Is there an application fee?",
        a: "**No — there is no application fee for 2026/27.** UL Accommodation has officially confirmed this. If you already paid a fee via Transfermate, UL will hold it: if you receive a room your deposit reduces from €500 to **€450**; if you don't get a room (or no longer want one) you get a **full refund**.\n\n⚠️ The application fee option has been **removed from Transfermate**. Do not make any accommodation payments via Transfermate until you have received an **official room offer**.",
        official: true,
    },
    {
        id: "deposit",
        icon: "💰",
        q: "When do I pay the deposit?",
        a: "Only **after** you receive an official room offer — never before. The deposit is **€500** (or €450 if you already paid via Transfermate). You have until **July** to pay it; there's no rush. Paying then cancelling means you **forfeit** the deposit.\n\n⚠️ Do NOT pay rent, deposits, or any accommodation fees via Transfermate until you have a formal offer with the rental fees outlined.",
        official: true,
    },
    {
        id: "confirmation-docs",
        icon: "📄",
        q: "Can I get accommodation confirmation for my visa now?",
        a: "No — UL Accommodation **cannot issue confirmation documents** until you have applied on the portal and received a room offer (only possible from March 1st). Any Transfermate payments held will be applied to your account once you apply and are processed.\n\nFor the visa itself, you need to have paid **50% of your tuition fee** to receive a visa support letter from UL Global. Visa applications are recommended **12 weeks before** your studies start.",
        official: true,
    },
    {
        id: "visa-accommodation",
        icon: "🛂",
        q: "Do I need on-campus accommodation for my visa?",
        a: "**No.** The visa office requires proof of accommodation for the duration of your studies, but it does NOT have to be on-campus. Acceptable options:\n\n- On-campus UL villages\n- Off-campus private rental\n- With family or friends\n\nIf staying with family/friends: provide (1) a letter from them confirming you'll reside there, and (2) a utility bill in their name proving that address.",
        official: true,
    },
    {
        id: "51-week",
        icon: "📅",
        q: "Do postgrads need a 51-week contract?",
        a: "Usually yes — Masters and PhD students typically need year-round housing. A 51-week contract runs late August to mid-August the following year. Only **four villages** appear in the UL portal for 51-week postgrad contracts: Cappavilla, Thomond, Troy Village, and Drominbeg Square. If your course ends in May it may be worth comparing a Full Academic Year contract (which opens up more villages).",
        official: false,
    },
    {
        id: "strategy",
        icon: "🎯",
        q: "What's the best strategy for postgraduates?",
        a: "Apply the moment the portal opens on **March 1st**. Rank realistically — put your genuinely preferred villages first. For 51-week contracts, only Cappavilla, Thomond, Troy, and Drominbeg are available; rank Cappavilla and Thomond first if you want ensuite on-campus. For guaranteed same-apartment with friends, consider a private complex. Keep off-campus options as a backup.",
        official: false,
    },
];

const AllocationVisualizer: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>('when-to-apply');

    return (
        <section id="allocation" className="py-16 md:py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/20 px-4 py-1.5 rounded-full mb-4">Key Question</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Can Postgraduates Choose Any Village?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Yes, technically. No, not guaranteed. Here's the reality.</p>
                </div>

                {/* Flow Diagram */}
                <div className="max-w-md mx-auto mb-16">
                    <div className="space-y-1">
                        {[
                            { label: "Your Category", value: "Non EU Postgrad / Undergrad", color: "bg-primary" },
                            { label: "Contract Length", value: "Full Acad. Year / 51 weeks", color: "bg-blue-500" },
                        ].map((item, i, arr) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`w-full ${item.color}/10 border border-white/10 backdrop-blur rounded-xl p-4 text-center`}>
                                    <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
                                    <p className="font-bold text-white text-lg">{item.value}</p>
                                </div>
                                {i < arr.length - 1 && (
                                    <div className="w-0.5 h-6 bg-gradient-to-b from-white/30 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Allocation Facts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ALLOCATION_FACTS.map((fact, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
                        >
                            <span className="text-3xl mb-4 block">{fact.icon}</span>
                            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-primary transition-colors">{fact.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {fact.description.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/).map((part, i) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
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
                    ))}
                </div>

                {/* Portal Village Table */}
                <div className="mt-16 bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-white/10">
                        <h3 className="font-bold text-xl">What Actually Appears in the UL Portal (51-Week Postgrad)</h3>
                        <p className="text-gray-400 text-sm mt-1">These are the only villages listed when a postgraduate selects a 51-week contract in the UL accommodation portal.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Village</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Available</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { name: "Cappavilla Village", level: "✅ Listed", color: "text-green-400 bg-green-400/10", note: "Ensuite 4 & 6 bed — appears in portal for 51-week postgrads" },
                                    { name: "Thomond Village", level: "✅ Listed", color: "text-green-400 bg-green-400/10", note: "Ensuite 4 & 6 bed — appears in portal for 51-week postgrads" },
                                    { name: "Troy Village", level: "✅ Listed", color: "text-green-400 bg-green-400/10", note: "3/4-bed Off-Campus — multiple room types listed (ensuite & standard)" },
                                    { name: "Drominbeg Square", level: "✅ Listed", color: "text-green-400 bg-green-400/10", note: "Rhebogue — ensuite & standard rooms, 51-week postgrad focused" },
                                    { name: "Quigley Residence", level: "❌ Not Listed", color: "text-red-400 bg-red-400/10", note: "Does NOT appear in the 51-week postgrad portal selections" },
                                    { name: "Dromroe Village", level: "❌ Not Listed", color: "text-red-400 bg-red-400/10", note: "Not available as a 51-week option for postgrads" },
                                    { name: "Plassey / Kilmurry", level: "❌ Not Listed", color: "text-red-400 bg-red-400/10", note: "Full Academic Year undergrad only — not offered for 51-week postgrads" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{row.name}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${row.color}`}>{row.level}</span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-amber-500/10">
                        <p className="text-amber-300 text-sm"><span className="font-bold">⚠️ Source:</span> Actual UL accommodation portal screenshot — "Select your room preferences" page for postgraduate 51-week contracts.</p>
                    </div>
                </div>

                {/* ── Key Questions & Answers ── */}
                <div className="mt-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-white/10" />
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">Questions & Answers</h3>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* Official badge strip */}
                    <div className="flex items-center gap-2 mb-6 px-1">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                            ✅ Official — from UL Accommodation (Evie, Feb 2026)
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full">
                            📘 Research-based
                        </span>
                    </div>

                    <div className="space-y-3">
                        {KEY_QA.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className={`rounded-2xl border transition-all duration-300 ${isOpen
                                            ? item.official
                                                ? 'border-emerald-500/30 bg-emerald-500/5'
                                                : 'border-primary/30 bg-primary/5'
                                            : 'border-white/10 bg-white/5 hover:bg-white/8'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenId(isOpen ? null : item.id)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl shrink-0">{item.icon}</span>
                                            <span className="font-bold text-white text-base md:text-lg">{item.q}</span>
                                        </div>
                                        <div className="flex items-center gap-3 shrink-0 ml-4">
                                            {item.official ? (
                                                <span className="hidden sm:inline text-[9px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                                                    Official
                                                </span>
                                            ) : (
                                                <span className="hidden sm:inline text-[9px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-0.5 rounded-full">
                                                    Research
                                                </span>
                                            )}
                                            <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                                            <div className={`border-t pt-4 text-gray-300 text-sm leading-relaxed ${item.official ? 'border-emerald-500/20' : 'border-white/10'}`}>
                                                <FormattedText
                                                    text={item.a}
                                                    darkMode
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                    <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                        <span>🔗</span> Helpful Links
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { label: "UL Accommodation (Official)", url: "https://www.ul.ie/accommodation", official: true },
                            { label: "UL Accommodation Portal", url: "https://campuslifeweb.ul.ie/apply/Pages/Registration/Lander.aspx", official: true },
                            { label: "UL Postgrad Accommodation", url: "https://www.ul.ie/accommodation/postgraduate-students", official: true },
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
                                        ? 'hover:bg-primary/10 text-gray-300 hover:text-primary border border-white/5 hover:border-primary/20'
                                        : 'hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                                    }`}
                            >
                                <span className={`transition-colors text-base ${link.official ? 'text-primary' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                    {link.official ? '🏛️' : '↗'}
                                </span>
                                <span className="flex-1">{link.label}</span>
                                {link.official && (
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70 bg-primary/10 px-1.5 py-0.5 rounded-full">
                                        Official
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-5 text-center">
                        Q&As sourced from UL Accommodation staff (Evie) via CampusConnect, Feb 2026. Always verify at{' '}
                        <a href="https://www.ul.ie/accommodation" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ul.ie/accommodation</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AllocationVisualizer;
