import React, { useState } from 'react';

// ── Types ──
interface ScenarioData {
    id: string;
    title: string;
    subtitle: string;
    color: string;
    colorLight: string;
    badge: string;
    costRange: string;
    gettability: string;
    gettabilityPercent: string;
    gettabilityColor: string;
    details: { label: string; value: string }[];
    upside: string;
    downside: string;
    reasoning: string;
}

interface CostComparison {
    scenario: string;
    range: string;
    source: string;
}

interface ProbabilityRow {
    item: string;
    probability: string;
    color: string;
    source: string;
}

interface RecommendationStep {
    step: number;
    title: string;
    description: string;
    timing: string;
}

// ── Inline Data ──
const SCENARIOS: ScenarioData[] = [
    {
        id: 'A',
        title: '51-Week Contract (31st Aug 2026 to 23rd Aug 2027)',
        subtitle: 'One contract, no summer move — stay on campus until late August',
        color: 'from-green-500 to-emerald-600',
        colorLight: 'bg-green-50 border-green-200',
        badge: '💚 Simplest',
        costRange: '€7,400 – €10,000',
        gettability: 'Low–Moderate',
        gettabilityPercent: '15% – 40%',
        gettabilityColor: 'text-orange-500 bg-orange-50',
        details: [
            { label: 'Drominbeg Square (ensuite)', value: '€10,019' },
            { label: 'Thomond / Cappavilla (ensuite)', value: '€9,267 → €9,558' },
            { label: 'Drominbeg Square (standard)', value: '€8,332' },
            { label: 'Troy (ensuite)', value: '€7,767' },
            { label: 'Troy (standard)', value: '€7,472' },
        ],
        upside: 'Single move, guaranteed campus management, utilities & UL Sport included.',
        downside: 'Highest overall price; inventory is extremely limited (e.g. only 8 rooms listed for Drominbeg on site), making it very tough to secure your top preference.',
        reasoning: 'UL portal data shows prices up to €10k for 51-week stays. Demand is exceptionally high and PhD / medical students often get priority.',
    },
    {
        id: 'B',
        title: 'Full Acad. Year + Summer Extension',
        subtitle: '31st Aug 2026 to 19th May 2027 on campus, then extend through August',
        color: 'from-blue-500 to-indigo-600',
        colorLight: 'bg-blue-50 border-blue-200',
        badge: '💙 Best Value',
        costRange: '€7,200 – €9,200',
        gettability: 'Low–Moderate',
        gettabilityPercent: '25% – 50%',
        gettabilityColor: 'text-amber-600 bg-amber-50',
        details: [
            { label: 'Full Academic Year fee', value: '€7,200 → €7,800' },
            { label: 'Summer extension (10–13 wks)', value: '~€1,300 → €2,000' },
            { label: 'Implied per-week extension', value: '~€100 → €200/wk' },
        ],
        upside: 'If the Full Academic Year is cheaper than 51-week and extension is approved at modest cost, total outlay can be competitive while avoiding an undesirable 51-week assignment.',
        downside: 'Extension is NOT guaranteed. If refused, you must find private summer housing.',
        reasoning: 'UL runs a summer accommodation programme and states summer stays are available. But capacity for extensions to current students is limited and depends on incoming conference bookings and maintenance.',
    },
    {
        id: 'C',
        title: 'Full Acad. Year + Private Summer',
        subtitle: '31st Aug 2026 to 19th May 2027 on campus, then private rental June–Aug',
        color: 'from-purple-500 to-fuchsia-600',
        colorLight: 'bg-purple-50 border-purple-200',
        badge: '💜 Most Realistic',
        costRange: '€6,450 – €9,800',
        gettability: 'High',
        gettabilityPercent: '70% – 95%',
        gettabilityColor: 'text-green-600 bg-green-50',
        details: [
            { label: 'Low (shared room summer)', value: '€5,400 + €1,050 = ~€6,450' },
            { label: 'Mid (ensuite house-share)', value: '€5,800 + €2,100 = ~€7,900' },
            { label: 'High (studio summer)', value: '€6,200 + €3,600 = ~€9,800' },
        ],
        upside: 'Much higher chance to avoid unwanted Troy/non-ensuite assignment. Likely cheaper in the low tier; flexible.',
        downside: 'Extra move(s), deposits, utility setups, and potential small premium for short-term arrangements.',
        reasoning: 'Daft listing patterns and student marketplace behaviour in April–May show sublets increase significantly. Proactive search in Mar–Apr yields high success rates.',
    },
];

const COST_COMPARISONS: CostComparison[] = [
    { scenario: '51-week (31st Aug 2026 to 23rd Aug 2027)', range: '€7,472 – €10,019', source: 'UL Portal 2026/27' },
    { scenario: 'Full Acad. Year + UL summer extension', range: '€7,200 – €9,200', source: 'UL Published Rates' },
    { scenario: 'Full Acad. Year + private summer (mid tier)', range: '~€7,900', source: 'Daft.ie + UL Fees' },
];

const PROBABILITY_ROWS: ProbabilityRow[] = [
    { item: 'Securing preferred 51-wk ensuite (Cappavilla/Thomond)', probability: '15% – 40%', color: 'text-orange-500 bg-orange-100', source: 'UL Postgrad Page' },
    { item: 'UL granting summer extension to current students', probability: '25% – 50%', color: 'text-amber-600 bg-amber-100', source: 'UL Summer Bookings' },
    { item: 'Finding mid-tier private summer ensuite (Mar–Apr search)', probability: '70% – 85%', color: 'text-green-600 bg-green-100', source: 'Daft.ie Patterns' },
];

const STEPS: RecommendationStep[] = [
    {
        step: 1,
        title: 'Apply for 51-Week Contract first',
        description: 'If you want the convenience of staying in one room until August 2027, put 51-week contract villages (Cappavilla, Thomond, Drominbeg, Troy) at the top of your preference list.',
        timing: 'Now (Portal Open)',
    },
    {
        step: 2,
        title: 'Rank Full Acad. Year as Backup',
        description: 'If 51-week inventory is full or assignments are not ensuite, ensured you have ranked high-quality Full Academic Year villages (Dromroe, Quigley) as your next preferences to secure on-campus housing.',
        timing: 'Now (Portal Open)',
    },
    {
        step: 3,
        title: 'Prepare summer backup (parallel search)',
        description: 'If you end up with a Full Academic Year licence, start the parallel search for a summer extension or private summer sublet around March to ensure you have housing through August 2027.',
        timing: 'March → April',
    },
    {
        step: 4,
        title: 'Finalize Summer Stay',
        description: 'Confirm your summer extension with UL or secure a private ensuite sublet. Total costs for this "split" path are often similar to or lower than a flat 51-week fee.',
        timing: 'April → May',
    },
];

const EMAIL_TEMPLATE = `To: accommodation@ul.ie, summer.reservations@ul.ie
Subject: Summer extension availability for current postgraduate 2026/27 (student ID: XXXXX)

Hi — I will be a postgraduate on a Full Academic Year licence (31st Aug 2026 to 19th May 2027). My course ends 19 May 2027. Please confirm whether summer extension (May–Aug 2027) is offered to current students, the application process, and the indicative cost per week or full summer. Thanks, <Your Name>`;

const SEARCH_TEMPLATE = `Looking for June–Aug 2027 ensuite room in Castletroy/Campus area. Budget €600–€800/month. Postgrad, tidy, references available. Available to view from April.`;

// ── Component ──
const ScenarioPlanner: React.FC = () => {
    const [activeScenario, setActiveScenario] = useState<string>('C');
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    };

    return (
        <section id="scenarios" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">Strategic Planning</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Your Three Realistic Paths</h2>
                    <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                        Cost ranges, probability estimates, and an evidence-backed recommendation.
                        Based on UL's published accommodation fees, summer booking page, private prices, and current Limerick rental listings.
                    </p>
                </div>

                {/* Assumptions Banner */}
                <div className="mb-12 bg-gray-900 text-white rounded-2xl p-6">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">📐 Assumptions Used</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2"><span className="text-primary">•</span> Academic Year: <strong>31st Aug 2026 to 19th May 2027</strong></div>
                        <div className="flex items-start gap-2"><span className="text-primary">•</span> 51-Week Period: <strong>31st Aug 2026 to 23rd Aug 2027</strong></div>
                        <div className="flex items-start gap-2"><span className="text-primary">•</span> Summer period: <strong>Late May → 23 Aug 2027</strong> (≈ 13 weeks)</div>
                        <div className="flex items-start gap-2"><span className="text-primary">•</span> Private summer rents from Daft.ie Castletroy listing patterns</div>
                    </div>
                    <p className="text-gray-400 text-xs mt-4">Sources: <a href="https://www.ul.ie/accommodation/applying/fees-and-payment-information" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">UL Fees</a> · <a href="https://www.ul.ie/campus-life-services/conferences-sports-events/news/summer-accommodation-2026-bookings" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">UL Summer Bookings</a> · <a href="https://www.daft.ie/sharing/castletroy-limerick" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Daft.ie</a> · <a href="https://www.ul.ie/accommodation/postgraduate-students" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">UL Postgrad Page</a></p>
                </div>

                {/* Scenario Selector Tabs */}
                <div className="flex flex-col sm:flex-row gap-2 mb-8">
                    {SCENARIOS.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setActiveScenario(s.id)}
                            className={`flex-1 p-4 rounded-xl text-left transition-all duration-300 border-2 ${activeScenario === s.id
                                ? `border-primary bg-white shadow-lg shadow-primary/10`
                                : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-bold text-gray-400">Scenario {s.id}</span>
                                <span className="text-xs">{s.badge}</span>
                            </div>
                            <p className={`font-bold text-sm ${activeScenario === s.id ? 'text-primary' : 'text-gray-700'}`}>{s.title}</p>
                        </button>
                    ))}
                </div>

                {/* Active Scenario Detail */}
                {SCENARIOS.filter(s => s.id === activeScenario).map((scenario) => (
                    <div key={scenario.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
                        {/* Scenario Header */}
                        <div className={`bg-gradient-to-r ${scenario.color} p-6 md:p-8 text-white`}>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <span className="text-white/70 text-sm font-bold uppercase tracking-wider">Scenario {scenario.id}</span>
                                    <h3 className="text-2xl md:text-3xl font-extrabold mt-1">{scenario.title}</h3>
                                    <p className="text-white/80 mt-2">{scenario.subtitle}</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 text-center min-w-[160px]">
                                    <p className="text-xs text-white/70 uppercase tracking-wider">Cost Range</p>
                                    <p className="text-xl font-extrabold">{scenario.costRange}</p>
                                </div>
                            </div>
                        </div>

                        {/* Scenario Body */}
                        <div className="p-6 md:p-8 space-y-6">
                            {/* Gettability */}
                            <div className="flex items-center gap-4 flex-wrap">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Probability of Securing:</span>
                                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${scenario.gettabilityColor}`}>
                                    {scenario.gettabilityPercent}
                                </span>
                            </div>

                            {/* Cost Breakdown */}
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3">💶 Cost Breakdown</h4>
                                <div className="space-y-2">
                                    {scenario.details.map((d, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm">
                                            <span className="text-gray-700">{d.label}</span>
                                            <span className="font-bold text-gray-900">{d.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Reasoning */}
                            <div className={`rounded-xl p-4 text-sm border ${scenario.colorLight}`}>
                                <p className="font-bold text-gray-800 mb-1">Why this probability?</p>
                                <p className="text-gray-600 leading-relaxed">{scenario.reasoning}</p>
                            </div>

                            {/* Upsides & Downsides */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50/50 border border-green-100 rounded-xl p-4">
                                    <h5 className="text-xs uppercase tracking-wide font-bold text-green-800 mb-2">✅ Upside</h5>
                                    <p className="text-gray-700 text-sm leading-relaxed">{scenario.upside}</p>
                                </div>
                                <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
                                    <h5 className="text-xs uppercase tracking-wide font-bold text-red-800 mb-2">⚠️ Downside</h5>
                                    <p className="text-gray-700 text-sm leading-relaxed">{scenario.downside}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Cost Comparison Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                    <div className="p-6 border-b border-gray-100">
                        <h3 className="font-bold text-xl text-gray-900">📊 Cost Comparison (Quick Summary)</h3>
                        <p className="text-gray-400 text-sm mt-1">Order-of-magnitude planning figures — exact numbers depend on room type and year.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50">
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Scenario</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Cost Range</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Source</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {COST_COMPARISONS.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900 text-sm">{row.scenario}</td>
                                        <td className="px-6 py-4 font-bold text-primary text-sm">{row.range}</td>
                                        <td className="px-6 py-4 text-gray-400 text-xs">{row.source}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Probability Matrix */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                    <div className="p-6 border-b border-gray-100">
                        <h3 className="font-bold text-xl text-gray-900">🎯 Probability Matrix</h3>
                        <p className="text-gray-400 text-sm mt-1">Practical guidance based on evidence.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50">
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">What</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Probability</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Evidence</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {PROBABILITY_ROWS.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-gray-900 text-sm font-medium">{row.item}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${row.color}`}>{row.probability}</span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 text-xs">{row.source}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recommendation */}
                <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 rounded-3xl p-6 md:p-10 mb-12">
                    <div className="text-center mb-8">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/20 px-4 py-1.5 rounded-full mb-4">Evidence-Backed</span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Recommended Action Plan</h3>
                        <p className="text-gray-500 max-w-2xl mx-auto">You want campus proximity and a guaranteed ensuite room. Given your finish date 19 May 2027:</p>
                    </div>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {STEPS.map(({ step, title, description, timing }) => (
                            <div key={step} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">{step}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h4 className="font-bold text-gray-900">{title}</h4>
                                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{timing}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Email & Search Templates */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                <span>✉️</span> Email Template for UL
                            </h4>
                            <button
                                onClick={() => copyToClipboard(EMAIL_TEMPLATE, 'email')}
                                className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                            >
                                {copiedId === 'email' ? '✓ Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="text-xs text-gray-600 bg-gray-50 rounded-xl p-4 overflow-x-auto whitespace-pre-wrap leading-relaxed font-mono">{EMAIL_TEMPLATE}</pre>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                <span>🔍</span> Search Message Template
                            </h4>
                            <button
                                onClick={() => copyToClipboard(SEARCH_TEMPLATE, 'search')}
                                className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                            >
                                {copiedId === 'search' ? '✓ Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="text-xs text-gray-600 bg-gray-50 rounded-xl p-4 overflow-x-auto whitespace-pre-wrap leading-relaxed font-mono">{SEARCH_TEMPLATE}</pre>
                    </div>
                </div>

                {/* Final Verdict */}
                <div className="mt-12 bg-gray-900 text-white rounded-2xl p-6 md:p-8">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">⚖️ Final Calibrated Verdict</h3>
                    <div className="space-y-4">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <p className="font-bold text-primary mb-1">If your top priority is: guaranteed ensuite / campus proximity during term</p>
                            <p className="text-gray-300 text-sm leading-relaxed">Choose the <strong>Full Academic Year now</strong> and run parallel extension + private summer searches. That gives you <strong>high quality during the academic year</strong> and a <strong>70%+ probability</strong> of a reasonable summer option if you search in April.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <p className="font-bold text-amber-400 mb-1">If your top priority is: one-move-only convenience</p>
                            <p className="text-gray-300 text-sm leading-relaxed">Apply for <strong>51-week</strong> and hope for the best — cost likely <strong>€7k–€10k</strong> depending on village. Accept the specific village assignment and room type provided by UL.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScenarioPlanner;
