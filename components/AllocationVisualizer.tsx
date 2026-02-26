import React, { useState } from 'react';
import FormattedText from './FormattedText';

// ── All information items in one flat list, grouped by type ──
const ALL_INFO: {
    id: string;
    icon: string;
    q: string;
    a: string;
    group: 'allocation' | 'official' | 'research';
}[] = [
        // ── How allocation works ──
        {
            id: 'category',
            icon: '👤',
            q: 'Does my student category affect allocation?',
            a: 'Yes — UL allocates based on whether you\'re undergraduate, postgraduate, or international. **Non-EU postgraduates** are processed on a rolling basis and prioritised for specific villages. CAO students (Irish/EU undergrads) go through a lottery. Make sure you select the correct category when applying.',
            group: 'allocation',
        },
        {
            id: '51week-limit',
            icon: '📋',
            q: 'Does choosing a 51-week contract limit my village options?',
            a: 'Yes, significantly. Only **4 villages** appear in the UL portal when a postgraduate selects a 51-week contract: **Cappavilla, Thomond, Troy Village**, and **Drominbeg Square**. A Full Academic Year contract opens up more villages (Groody, Dromroe, Plassey, etc.) but only covers semester time — not summer.',
            group: 'allocation',
        },
        {
            id: 'no-guarantee',
            icon: '⚠️',
            q: 'Are postgrads guaranteed their preferred village?',
            a: 'No. Village pages like [Groody](https://www.ul.ie/accommodation/living/groody), [Dromroe](https://www.ul.ie/accommodation/living/dromroe), and [Plassey](https://www.ul.ie/accommodation/living/plassey) mention postgrads can stay, but they primarily offer Full Academic Year stays. **If you are doing a dissertation, you will likely need 51 weeks** — even if lectures end in May. Allocation is based on category, contract length, and availability at the time of your application.',
            group: 'allocation',
        },
        {
            id: 'apply-early',
            icon: '⏰',
            q: 'Does it matter when I apply?',
            a: 'Yes — for international full-degree students, applications are processed on a **rolling basis**, not a lottery. The earlier you apply after the portal opens on **March 1st**, the better your chances of getting your top preference. Apply as soon as you have a student ID or application number starting with **26**.',
            group: 'allocation',
        },
        {
            id: 'ul-vs-private',
            icon: '🏢',
            q: 'UL-managed vs private — what\'s the difference?',
            a: 'UL-managed properties are booked through the central portal and include utilities in the contract. **Private** properties (Troy Village, Groody Student Park, etc.) allow **direct booking**, are more flexible for group bookings, and sometimes have more availability — but budget for **extra utility charges** and travel overhead if off-campus.',
            group: 'allocation',
        },
        // ── Official guidance from UL Accommodation (Evie, Feb 2026) ──
        {
            id: 'when-to-apply',
            icon: '🗓️',
            q: 'When do applications open?',
            a: 'Applications for 2026/27 open on **March 1st**. You can register an account on [ul.ie/accommodation](https://www.ul.ie/accommodation) right now, but the 2026/27 application tab won\'t appear until the portal officially opens. If you applied during the brief early-opening window for returning students, your application is honoured — don\'t reapply.',
            group: 'official',
        },
        {
            id: 'rolling-vs-lottery',
            icon: '🎲',
            q: 'Is it a lottery or rolling basis?',
            a: 'Depends on your student type:\n\n**International full-degree postgrads & undergrads (most of us):** Rolling basis — NOT a lottery. Apply as soon as the portal opens.\n\n**CAO students (Irish / some EU undergrads):** Lottery process — you would know if this applies. Select **\'International\'**, NOT \'CAO\' when applying.\n\n**Erasmus / Exchange students:** Separate lottery with dedicated communications — you won\'t miss out.',
            group: 'official',
        },
        {
            id: 'application-fee',
            icon: '💳',
            q: 'Is there an application fee?',
            a: '**No — there is no application fee for 2026/27.** UL Accommodation has officially confirmed this. If you already paid a fee via Transfermate, UL will hold it: if you receive a room your deposit reduces from €500 to **€450**; if you don\'t get a room (or no longer want one) you get a **full refund**.\n\n⚠️ The application fee option has been **removed from Transfermate**. Do not make any accommodation payments via Transfermate until you have received an **official room offer**.',
            group: 'official',
        },
        {
            id: 'deposit',
            icon: '💰',
            q: 'When do I pay the deposit?',
            a: 'Only **after** you receive an official room offer — never before. The deposit is **€500** (or **€450** if you already paid via Transfermate). You have until **July** to pay it; there\'s no rush. Paying then cancelling means you **forfeit** the deposit.\n\n⚠️ Do NOT pay rent, deposits, or any accommodation fees via Transfermate until you have a formal offer with the rental fees outlined.',
            group: 'official',
        },
        {
            id: 'confirmation-docs',
            icon: '📄',
            q: 'Can I get accommodation confirmation for my visa now?',
            a: 'No — UL cannot issue confirmation documents until you have applied on the portal and received a room offer (only possible after March 1st). Any Transfermate payments held will be applied to your account once you apply and are processed.\n\nFor the visa itself, you need to have paid **50% of your tuition fee** to receive a visa support letter from UL Global. Visa applications are recommended **12 weeks before** your studies start.',
            group: 'official',
        },
        {
            id: 'visa-accommodation',
            icon: '🛂',
            q: 'Do I need on-campus accommodation for my visa?',
            a: '**No.** The visa office requires proof of accommodation for the duration of your studies, but it does NOT have to be on-campus. Acceptable options:\n\n- On-campus UL villages\n- Off-campus private rental\n- With family or friends\n\nIf staying with family/friends: provide (1) a letter from them confirming you\'ll reside there, and (2) a utility bill in their name proving that address.',
            group: 'official',
        },
        // ── Research-based practical tips ──
        {
            id: '51-week-detail',
            icon: '📅',
            q: 'What are 51-week contracts and do I need one?',
            a: 'A 51-week contract runs late August to mid-August the following year. Masters and PhD students typically need this to cover dissertation/research periods. The only UL portal villages for 51-week postgrads are Cappavilla, Thomond, Troy Village, and Drominbeg Square. If your course ends in May with no dissertation, a Full Academic Year contract may suit you better and opens up more village options.',
            group: 'research',
        },
        {
            id: 'ensuite',
            icon: '🚿',
            q: 'Shared vs ensuite rooms — what\'s the difference?',
            a: 'Ensuite rooms have a private bathroom. Standard rooms mean sharing a bathroom with 2–4 housemates. Ensuite rooms cost significantly more (often **€400–€800 extra per year**). Villages like Plassey and Kilmurry only offer shared bathrooms. Cappavilla, Thomond, Quigley, and Dromroe are fully ensuite.',
            group: 'research',
        },
        {
            id: 'strategy',
            icon: '🎯',
            q: 'What\'s the smartest strategy for postgrads?',
            a: 'Apply the moment the portal opens on **March 1st**. Rank realistically — your genuinely preferred villages first. For 51-week contracts only Cappavilla, Thomond, Troy, and Drominbeg are available; rank Cappavilla and Thomond first for ensuite on-campus. For guaranteed same-apartment with friends, consider a private complex. Always keep off-campus options as a backup.',
            group: 'research',
        },
        {
            id: 'off-campus',
            icon: '🏠',
            q: 'Tips for renting off-campus privately',
            a: 'Check for dampness, ventilation, heating, and working appliances. Areas within walking/cycling distance: Castletroy, Monaleen, Annacotty, Golf Links Road. Always get a written lease. Take timestamped photos on move-in and move-out. Your landlord must be registered with the RTB — you can refer disputes to the PRTB.',
            group: 'research',
        },
    ];

const GROUP_META = {
    allocation: {
        label: 'How Allocation Works',
        badge: '📐 Allocation System',
        badgeClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
        openBorder: 'border-blue-400/30 bg-blue-400/5',
    },
    official: {
        label: 'Official Guidance',
        badge: '✅ From UL Accommodation (Evie, Feb 2026)',
        badgeClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
        openBorder: 'border-emerald-500/30 bg-emerald-500/5',
    },
    research: {
        label: 'Research & Tips',
        badge: '📘 Research-Based Tips',
        badgeClass: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
        openBorder: 'border-violet-400/30 bg-violet-400/5',
    },
};

const GROUPS = ['allocation', 'official', 'research'] as const;

const AllocationVisualizer: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>('when-to-apply');

    return (
        <section id="allocation" className="py-16 md:py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* ── Header ── */}
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/20 px-4 py-1.5 rounded-full mb-4">Key Question</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Can Postgraduates Choose Any Village?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Yes, technically. No, not guaranteed. Here's the reality.</p>
                </div>

                {/* ── Flow Diagram ── */}
                <div className="max-w-md mx-auto mb-12">
                    <div className="space-y-1">
                        {[
                            { label: 'Your Category', value: 'Non EU Postgrad / Undergrad', color: 'bg-primary' },
                            { label: 'Contract Length', value: 'Full Acad. Year / 51 weeks', color: 'bg-blue-500' },
                        ].map((item, i, arr) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`w-full ${item.color}/10 border border-white/10 rounded-xl p-4 text-center`}>
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

                {/* ── Village Portal Table ── */}
                <div className="mb-14 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-white/10">
                        <h3 className="font-bold text-xl">What Actually Appears in the UL Portal (51-Week Postgrad)</h3>
                        <p className="text-gray-400 text-sm mt-1">The only villages listed when a postgraduate selects a 51-week contract.</p>
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
                                    { name: 'Cappavilla Village', level: '✅ Listed', color: 'text-green-400 bg-green-400/10', note: 'Ensuite 4 & 6 bed — listed for 51-week postgrads' },
                                    { name: 'Thomond Village', level: '✅ Listed', color: 'text-green-400 bg-green-400/10', note: 'Ensuite 4 & 6 bed — listed for 51-week postgrads' },
                                    { name: 'Troy Village', level: '✅ Listed', color: 'text-green-400 bg-green-400/10', note: '3/4-bed off-campus — ensuite & standard options' },
                                    { name: 'Drominbeg Square', level: '✅ Listed', color: 'text-green-400 bg-green-400/10', note: 'Rhebogue — ensuite & standard, postgrad focused' },
                                    { name: 'Quigley Residence', level: '❌ Not Listed', color: 'text-red-400 bg-red-400/10', note: 'Does not appear for 51-week postgrad selection' },
                                    { name: 'Dromroe Village', level: '❌ Not Listed', color: 'text-red-400 bg-red-400/10', note: 'Not available as a 51-week option for postgrads' },
                                    { name: 'Plassey / Kilmurry', level: '❌ Not Listed', color: 'text-red-400 bg-red-400/10', note: 'Full Academic Year undergrad only' },
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
                        <p className="text-amber-300 text-sm">
                            <span className="font-bold">⚠️ Source:</span> Actual UL accommodation portal screenshot — "Select your room preferences" page for postgraduate 51-week contracts.
                        </p>
                    </div>
                </div>

                {/* ── Unified Info Accordion, grouped ── */}
                <div className="space-y-10">
                    {GROUPS.map((group) => {
                        const items = ALL_INFO.filter(item => item.group === group);
                        const meta = GROUP_META[group];
                        return (
                            <div key={group}>
                                {/* Group divider */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${meta.badgeClass}`}>
                                        {meta.badge}
                                    </span>
                                    <div className="flex-1 h-px bg-white/10" />
                                </div>

                                <div className="space-y-2">
                                    {items.map((item) => {
                                        const isOpen = openId === item.id;
                                        const m = GROUP_META[item.group];
                                        return (
                                            <div
                                                key={item.id}
                                                className={`rounded-2xl border transition-all duration-300 ${isOpen ? m.openBorder : 'border-white/10 bg-white/5 hover:bg-white/[0.07]'
                                                    }`}
                                            >
                                                <button
                                                    onClick={() => setOpenId(isOpen ? null : item.id)}
                                                    className="w-full flex items-center justify-between p-5 text-left gap-4"
                                                >
                                                    <div className="flex items-center gap-3 min-w-0">
                                                        <span className="text-xl shrink-0">{item.icon}</span>
                                                        <span className="font-semibold text-white text-sm md:text-base leading-snug">{item.q}</span>
                                                    </div>
                                                    <div className={`text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </button>

                                                {isOpen && (
                                                    <div className="px-5 pb-5">
                                                        <div className={`border-t pt-4 ${group === 'official' ? 'border-emerald-500/20' :
                                                                group === 'allocation' ? 'border-blue-400/20' :
                                                                    'border-violet-400/20'
                                                            }`}>
                                                            <FormattedText text={item.a} darkMode />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Helpful Links ── */}
                <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
                        <span>🔗</span> Helpful Links
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {[
                            { label: 'UL Accommodation (Official)', url: 'https://www.ul.ie/accommodation', official: true },
                            { label: 'UL Accommodation Portal', url: 'https://campuslifeweb.ul.ie/apply/Pages/Registration/Lander.aspx', official: true },
                            { label: 'UL Postgrad Accommodation', url: 'https://www.ul.ie/accommodation/postgraduate-students', official: true },
                            { label: 'UL Fees & Payment Info', url: 'https://www.ul.ie/accommodation/applying/fees-and-payment-information', official: true },
                            { label: 'Threshold (Tenant Rights)', url: 'https://www.threshold.ie/' },
                            { label: 'RTB (Dispute Resolution)', url: 'https://www.rtb.ie/tenants' },
                            { label: 'UL Students\' Union', url: 'https://ulsu.ie/ulwolves' },
                            { label: 'Daft.ie — Castletroy', url: 'https://www.daft.ie/sharing/castletroy-limerick' },
                        ].map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group ${link.official
                                        ? 'text-gray-300 hover:text-primary hover:bg-primary/10 border border-white/5 hover:border-primary/20'
                                        : 'text-gray-500 hover:text-white hover:bg-white/10 border border-white/5'
                                    }`}
                            >
                                <span className={link.official ? 'text-primary' : 'text-gray-600 group-hover:text-gray-400'}>
                                    {link.official ? '🏛️' : '↗'}
                                </span>
                                <span className="flex-1 truncate">{link.label}</span>
                                {link.official && (
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary/60 bg-primary/10 px-1.5 py-0.5 rounded-full shrink-0">
                                        Official
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-5 text-center">
                        Official Q&As sourced from UL Accommodation staff (Evie) via CampusConnect, Feb 2026. Always verify at{' '}
                        <a href="https://www.ul.ie/accommodation" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ul.ie/accommodation</a>.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AllocationVisualizer;
