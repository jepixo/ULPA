import React, { useState } from 'react';

/**
 * Visual depiction of the UL Accommodation Portal flow — viewport-fit layout
 */
const PortalPreview: React.FC = () => {
    const [step, setStep] = useState(1);

    const stepLabels = ['Personal Info', 'Let Length', 'Preferences', 'Sharing', 'Declaration', 'Done'];

    return (
        <section
            id="portal-preview"
            className="bg-white flex flex-col"
            style={{ minHeight: '100svh', paddingTop: '4rem', paddingBottom: '2rem' }}
        >
            <div className="container mx-auto px-4 max-w-4xl flex flex-col flex-1 gap-4">

                {/* ── Compact Header ── */}
                <div className="text-center shrink-0">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                        Portal Preview
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
                        What the Portal Looks Like
                    </h2>
                    <p className="text-gray-500 text-sm max-w-xl mx-auto mb-3">
                        A depictive walkthrough of the UL application sequence.
                    </p>
                    <a
                        href="https://campuslifeweb.ul.ie/apply/Pages/Registration/Lander.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#006a3d] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all duration-300 hover:bg-[#005530] hover:shadow-lg hover:shadow-[#006a3d]/30 active:scale-[0.98]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        Login to UL Accommodation Portal
                        <span className="ml-1 opacity-60 font-normal">↗</span>
                    </a>
                </div>

                {/* ── Mock Browser / Portal Container ── */}
                <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-xl overflow-hidden flex flex-col flex-1 min-h-0">

                    {/* Fake Browser Toolbar */}
                    <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center justify-between shrink-0">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                        <a
                            href="https://campuslifeweb.ul.ie/apply/Pages/Registration/Lander.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 rounded-md px-3 py-1 text-[11px] text-[#007dba] font-mono w-1/2 text-center truncate hover:bg-blue-50 hover:underline transition-colors"
                        >
                            campuslifeweb.ul.ie/apply
                        </a>
                        <button className="bg-[#007dba] text-white text-[9px] font-bold px-2.5 py-1 rounded">
                            Log out
                        </button>
                    </div>

                    {/* Portal Body — scrollable if content overflows */}
                    <div className="flex flex-col flex-1 min-h-0 overflow-hidden p-4 md:p-6">
                        <h3 className="text-[#006a3d] font-bold text-base mb-3 shrink-0">Applying for accommodation</h3>

                        {/* Progress Bar */}
                        <div className="relative mb-4 px-2 shrink-0">
                            <div className="absolute top-2 left-0 w-full h-0.5 bg-gray-200" />
                            <div
                                className="absolute top-2 left-0 h-0.5 bg-[#6ea204] transition-all duration-500"
                                style={{ width: `${((step - 1) / 5) * 100}%` }}
                            />
                            <div className="relative flex justify-between">
                                {stepLabels.map((label, idx) => {
                                    const it = idx + 1;
                                    return (
                                        <div key={it} className="flex flex-col items-center">
                                            <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 z-10 bg-white ${step >= it ? 'border-[#6ea204] bg-[#6ea204]' : 'border-gray-300 bg-white'}`} />
                                            <span className={`text-[8px] font-bold uppercase mt-1 tracking-tight hidden sm:block ${step === it ? 'text-gray-800' : 'text-gray-400'}`}>
                                                {label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Content Area — fills remaining space, scrolls internally */}
                        <div className="bg-white border border-gray-200 rounded-xl flex-1 min-h-0 overflow-y-auto p-4 md:p-5">

                            {/* ── Step 1: Personal Info ── */}
                            {step === 1 && (
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-[#005a8a] to-[#007dba] p-3 rounded-lg text-white">
                                        <h4 className="font-bold text-base uppercase tracking-wider">Hello Student</h4>
                                    </div>
                                    <h5 className="text-[#006a3d] font-bold">New Incoming Students</h5>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { label: "CAO or Student Number *", val: "12345678" },
                                            { label: "Forename *", val: "JANE" },
                                            { label: "Surname *", val: "DOE" },
                                            { label: "Nationality *", val: "Country Name" },
                                            { label: "Address Line 1 *", val: "123 Sample Avenue, Apt 4B" },
                                            { label: "Town *", val: "Limerick City" }
                                        ].map((f, i) => (
                                            <div key={i} className="space-y-0.5">
                                                <label className="text-[10px] font-bold text-gray-600 uppercase">{f.label}</label>
                                                <div className="border border-gray-200 rounded p-1.5 text-xs text-gray-500 bg-gray-50">{f.val}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                                        <div className="w-4 h-4 border border-blue-600 bg-blue-600 flex items-center justify-center text-white text-[9px] shrink-0">✓</div>
                                        <span className="text-[10px] font-bold text-gray-700">Not from Ireland? Please tick here</span>
                                    </div>
                                    <div className="space-y-0.5">
                                        <label className="text-[10px] font-bold text-gray-600 uppercase">PPS Number</label>
                                        <div className="border border-gray-200 rounded p-1.5 text-xs text-gray-400 bg-gray-50 italic">Leave blank</div>
                                    </div>
                                    <div className="bg-[#f0f9ff] p-3 border-l-4 border-[#007dba] text-[10px] text-gray-600 italic leading-relaxed">
                                        <strong>Advice:</strong> PPS number is not required for international students — leave blank and tick the checkbox above. CAO applies to undergrads only; if a warning appears, close it and enter your UL student ID instead.
                                    </div>
                                </div>
                            )}

                            {/* ── Step 2: Let Length (course-duration guidance) ── */}
                            {step === 2 && (
                                <div className="space-y-4">
                                    <h4 className="text-[#005a8a] font-bold text-lg">What type of applicant are you?</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            "Postgraduate",
                                            "Non EU Postgrad / Undergrad",
                                            "Returner Undergraduate",
                                            "New Incoming Undergraduate"
                                        ].map((type) => (
                                            <div key={type} className={`border p-3 rounded-lg flex items-center gap-2 text-xs transition-colors ${type === "Non EU Postgrad / Undergrad" ? 'border-[#006a3d] bg-[#006a3d]/5' : 'border-gray-200'}`}>
                                                <div className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${type === "Non EU Postgrad / Undergrad" ? 'border-[#006a3d] bg-[#006a3d]' : 'border-gray-300'}`} />
                                                <span className="font-medium">{type}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-100 pt-4">
                                        <h5 className="text-[#006a3d] font-bold mb-1">Let Length 2026/27</h5>
                                        {/* ── Course-duration tip ── */}
                                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3 flex gap-2 items-start">
                                            <span className="text-amber-500 text-base leading-none mt-0.5">💡</span>
                                            <p className="text-[10px] text-amber-900 leading-relaxed">
                                                <strong>Choose based on your course end date, not just lectures.</strong>{' '}
                                                For most postgrads, taught modules finish in May — but your dissertation or thesis submission can extend well into <strong>August or September</strong>. If you leave before your work is done, you lose on-campus access and study environment. The <strong>51-week contract</strong> covers the full academic year through to late August, making it the safer choice for most postgrad students. But be sure to confirm the duration before making a choice.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                { l: "51 Week Stay", sub: "Late Aug 2026 → Late Aug 2027 · Recommended for postgrads", active: true },
                                                { l: "Full Academic Year (Sep to May)", sub: "Sep 2026 → May 2027 · Suits undergrads or courses with no summer component", active: false }
                                            ].map((it) => (
                                                <div key={it.l} className={`border p-3 rounded-lg flex items-start justify-between gap-3 ${it.active ? 'border-[#006a3d] bg-[#006a3d]/5' : 'border-gray-200'}`}>
                                                    <div>
                                                        <span className="text-xs font-bold text-gray-800">{it.l}</span>
                                                        <p className="text-[9px] text-gray-400 mt-0.5">{it.sub}</p>
                                                    </div>
                                                    <div className={`w-4 h-4 rounded-full border-2 shrink-0 mt-0.5 ${it.active ? 'border-[#006a3d] bg-[#006a3d]' : 'border-gray-300'}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ── Step 3: Room Preferences ── */}
                            {step === 3 && (
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="text-[#005a8a] font-bold text-lg">Select your room preferences</h4>
                                        <div className="bg-red-50 text-red-600 px-2 py-1 rounded text-[9px] font-bold uppercase inline-block border border-red-100 mt-1 mb-1">
                                            Compulsory: Minimum 6 selections required
                                        </div>
                                        <p className="text-[10px] text-gray-500 italic">Rank your choices (1 = highest preference).</p>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { name: "Cappavilla Village", length: "51 Week", type: "Ensuite Room", rank: 1 },
                                            { name: "Thomond Village", length: "51 Week", type: "Ensuite Room", rank: 2 },
                                            { name: "Cappavilla Village", length: "51 Week", type: "Standard Room", rank: 3 },
                                            { name: "Thomond Village", length: "51 Week", type: "Standard Room", rank: 4 },
                                            { name: "Drominbeg Square", length: "51 Week", type: "Ensuite Room", rank: 5 },
                                            { name: "Troy Village", length: "51 Week", type: "Ensuite Room", rank: 6 }
                                        ].map((p) => (
                                            <div key={p.rank} className="border border-gray-200 rounded-lg p-2.5 flex items-center justify-between bg-white shadow-sm">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-6 h-6 rounded-full bg-[#005a8a] flex items-center justify-center font-bold text-[10px] text-white shrink-0">{p.rank}</div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 text-xs">{p.name}</p>
                                                        <div className="flex items-center gap-1 mt-0.5">
                                                            <p className="text-[8px] text-gray-400 font-bold uppercase">{p.length}</p>
                                                            <span className="text-[8px] bg-gray-100 text-gray-500 px-1 rounded border border-gray-200">{p.type}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="text-[#007dba] text-[9px] font-bold hover:underline">Edit</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ── Step 4: Sharing ── */}
                            {step === 4 && (
                                <div className="space-y-4">
                                    <h4 className="text-[#005a8a] font-bold text-lg">Share with a friend?</h4>
                                    <div className="flex gap-3">
                                        {["Yes", "No"].map((opt) => (
                                            <div key={opt} className={`flex-1 border p-3 rounded-lg flex items-center gap-2 text-xs ${opt === "Yes" ? 'border-[#006a3d] bg-[#006a3d]/5' : 'border-gray-200'}`}>
                                                <div className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${opt === "Yes" ? 'border-[#006a3d] bg-[#006a3d]' : 'border-gray-300'}`} />
                                                <span className="font-medium">{opt}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-gray-700">Enter their name(s):</p>
                                        <div className="border border-gray-200 rounded p-3 h-20 text-gray-400 text-xs bg-gray-50 italic">
                                            Enter name(s) here...
                                        </div>
                                    </div>
                                    <div className="bg-[#f0f9ff] p-3 text-[10px] text-gray-600 leading-relaxed border-l-4 border-blue-400">
                                        Your friend must also list your name on their application. All preferences are requests only and cannot be guaranteed.
                                    </div>
                                </div>
                            )}

                            {/* ── Step 5: Declaration ── */}
                            {step === 5 && (
                                <div className="space-y-4">
                                    <h4 className="text-[#005a8a] font-bold text-lg">License Agreement & Terms</h4>
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200 text-[9px] font-bold uppercase text-gray-500">Document Review</div>
                                        <div className="p-4 h-32 overflow-y-auto text-[10px] text-gray-500 leading-relaxed space-y-2">
                                            <p>This License Agreement is made between the University of Limerick (the "University") and the Student.</p>
                                            <p>1. The University agrees to provide Accommodation for the duration of the Let Length selected in Step 2.</p>
                                            <p>2. The Student agrees to pay the License Fee per the payment schedule provided upon offer.</p>
                                            <p>3. The Deposit is non-refundable upon cancellation after the specified deadline.</p>
                                            <p>4. The Student agrees to abide by the Village Rules and the University Code of Conduct.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                        <div className="w-4 h-4 border-2 border-amber-600 bg-amber-600 flex items-center justify-center text-white text-[9px] shrink-0 mt-0.5">✓</div>
                                        <p className="text-xs text-amber-900 font-medium">I confirm that I have read, understood and accept the terms and conditions of the license agreement and village rules.</p>
                                    </div>
                                </div>
                            )}

                            {/* ── Step 6: Submitted ── */}
                            {step === 6 && (
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-[#005a8a] font-bold text-2xl">Application Status 2026-27</h4>
                                        <p className="text-[#6ea204] font-bold text-lg mt-1">Completed Application</p>
                                    </div>
                                    <div className="text-gray-600 text-xs leading-relaxed space-y-3">
                                        <p>Thank you for your application for accommodation at the University of Limerick. We will endeavour to process your application as soon as possible.</p>
                                        <p className="border-y border-gray-100 py-3 font-mono text-gray-200 tracking-widest overflow-hidden whitespace-nowrap">
                                            ************************************
                                        </p>
                                        <p>Please ensure to check your <strong>spam/junk mail</strong> and all email addresses associated with your UL student profile.</p>
                                        <p className="text-gray-900 font-medium pt-2 border-t border-gray-100">
                                            <span className="font-bold">Please note:</span> While we endeavour to accommodate all requests we <span className="underline italic">do not guarantee</span> these.
                                        </p>
                                    </div>
                                    <div className="flex justify-center pt-2">
                                        <button
                                            onClick={() => setStep(1)}
                                            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-bold text-xs transition-all hover:bg-black active:scale-[0.98]"
                                        >
                                            ↩ Back to Start
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ── Portal Nav Buttons ── */}
                        <div className="flex justify-between items-center mt-3 shrink-0">
                            <button
                                onClick={() => setStep(Math.max(1, step - 1))}
                                className={`text-[9px] font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors ${step > 1 ? 'bg-[#7e3f98] text-white hover:bg-[#6a3580]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                            >
                                &lt; Back
                            </button>
                            <span className="text-[9px] text-gray-400 font-mono">Step {step} / 6</span>
                            <button
                                onClick={() => setStep(Math.min(6, step + 1))}
                                className={`text-[9px] font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors ${step < 6 ? 'bg-[#6ea204] text-white hover:bg-[#5a8203]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                            >
                                {step === 6 ? 'Finished ✓' : 'Continue >'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footnote */}
                <p className="text-center text-[10px] text-gray-300 shrink-0">
                    Stylized mock-up based on the UL Accommodation Portal — for guidance purposes only.
                </p>
            </div>
        </section>
    );
};

export default PortalPreview;
