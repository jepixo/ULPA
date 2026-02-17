import React from 'react';
import { ALLOCATION_FACTS } from '../data/content';

const AllocationVisualizer: React.FC = () => {
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

                {/* Postgrad Probability Table */}
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
            </div>
        </section>
    );
};

export default AllocationVisualizer;
