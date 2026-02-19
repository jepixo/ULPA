import React, { useState } from 'react';

/**
 * Visual depiction of the UL Accommodation Portal flow
 */
const PortalPreview: React.FC = () => {
    const [step, setStep] = useState(1);

    const steps = [
        { id: 1, label: "Personal Info" },
        { id: 2, label: "Applicant Type" },
        { id: 3, label: "Preferences" },
        { id: 4, label: "Sharing" },
        { id: 5, label: "Declaration" }
    ];

    return (
        <section id="portal-preview" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">Portal Preview</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">What the Portal Looks Like</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">A depictive walkthrough of the UL application sequence.</p>
                </div>

                {/* Portal Container */}
                <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
                    {/* Fake Browser Toolbar */}
                    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="bg-gray-100 rounded-lg px-4 py-1.5 text-xs text-gray-400 font-mono w-1/2 text-center truncate">
                            campuslifeweb.ul.ie/apply
                        </div>
                        <button className="bg-[#007dba] text-white text-[10px] font-bold px-3 py-1 rounded">Log out</button>
                    </div>

                    {/* Portal Header */}
                    <div className="p-6 md:p-10">
                        <h3 className="text-[#006a3d] font-bold text-xl mb-8">Applying for accommodation</h3>

                        {/* Progress Bar */}
                        <div className="relative mb-12 px-4">
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2" />
                            <div
                                className="absolute top-1/2 left-0 h-1 bg-[#6ea204] -translate-y-1/2 transition-all duration-500"
                                style={{ width: `${(step / 6) * 100}%` }}
                            />
                            <div className="relative flex justify-between">
                                {[1, 2, 3, 4, 5, 6].map((it) => (
                                    <div key={it} className="flex flex-col items-center">
                                        <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 z-10 ${step >= it ? 'bg-[#6ea204] border-[#6ea204]' : 'bg-white border-gray-300'
                                            }`} />
                                        <span className={`text-[10px] font-bold uppercase mt-2 tracking-tighter ${step === it ? 'text-gray-900' : 'text-gray-400'
                                            }`}>
                                            {it === 6 ? 'Finish' : `Step ${it}`}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 min-h-[400px] animate-fadeIn">
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-[#005a8a] to-[#007dba] p-4 rounded-lg text-white mb-6">
                                        <h4 className="font-bold text-lg uppercase tracking-wider">Hello Student</h4>
                                    </div>
                                    <h5 className="text-[#006a3d] font-bold text-lg">New Incoming Students</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { label: "CAO or Student Number *", val: "12345678" },
                                            { label: "Forename *", val: "JANE" },
                                            { label: "Surname *", val: "DOE" },
                                            { label: "Nationality *", val: "Country Name" },
                                            { label: "Address Line 1 *", val: "123 Sample Avenue, Apartment 4B" },
                                            { label: "Town *", val: "Limerick City" }
                                        ].map((f, i) => (
                                            <div key={i} className="space-y-1">
                                                <label className="text-[11px] font-bold text-gray-600 uppercase">{f.label}</label>
                                                <div className="border border-gray-300 rounded p-2 text-sm text-gray-500 bg-gray-50">{f.val}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 border border-blue-600 bg-blue-600 flex items-center justify-center text-white text-[10px]">✓</div>
                                            <span className="text-[11px] font-bold text-gray-700">Not from Ireland? Please tick here</span>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-gray-600 uppercase">PPS Number</label>
                                            <div className="border border-gray-300 rounded p-2 text-sm text-gray-400 bg-gray-50 italic">Leave blank</div>
                                        </div>
                                    </div>
                                    <div className="bg-[#f0f9ff] p-4 border-l-4 border-[#007dba] text-[11px] text-gray-600 italic leading-relaxed">
                                        <strong>Advice:</strong> PPS number is not required for international students. If you are not an Irish resident, leave this field blank and make sure the checkbox above is selected.<br></br> CAO applies only to undergraduate applicants. If a warning message appears, close it and enter your UL student ID.
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-8">
                                    <h4 className="text-[#005a8a] font-bold text-2xl">What type of applicant are you?</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Postgraduate", "Non EU Postgrad / Undergrad",
                                            "Returner Undergraduate", "New Incoming Undergraduate"
                                        ].map((type) => (
                                            <div key={type} className={`border p-4 rounded-lg flex items-center gap-3 transition-colors ${type === "Non EU Postgrad / Undergrad" ? 'border-[#006a3d] bg-[#006a3d]/5' : 'border-gray-200'
                                                }`}>
                                                <div className={`w-4 h-4 rounded-full border-2 ${type === "Non EU Postgrad / Undergrad" ? 'border-[#006a3d] bg-[#006a3d]' : 'border-gray-300'
                                                    }`} />
                                                <span className="text-sm font-medium">{type}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-gray-100 pt-8">
                                        <h5 className="text-[#006a3d] font-bold text-lg mb-4">Let Length 2026/27</h5>
                                        <div className="space-y-3">
                                            {[
                                                { l: "51 Week Stay", active: true },
                                                { l: "Full Academic Year (Sep to May)", active: false }
                                            ].map((it) => (
                                                <div key={it.l} className={`border p-4 rounded-lg flex items-center justify-between ${it.active ? 'border-[#006a3d] bg-[#006a3d]/5' : 'border-gray-200'
                                                    }`}>
                                                    <span className="text-sm font-medium">{it.l}</span>
                                                    <div className={`w-4 h-4 rounded-full border-2 ${it.active ? 'border-[#006a3d] bg-[#006a3d]' : 'border-gray-300'
                                                        }`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h4 className="text-[#005a8a] font-bold text-2xl">Select your room preferences</h4>
                                        <div className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase inline-block border border-red-100 mb-2">Compulsory: Minimum 6 selections required</div>
                                        <p className="text-xs text-gray-500 italic leading-relaxed">Please rank your preferred accommodation choices (1 = highest preference). You must select at least 6 choices to proceed.</p>
                                    </div>

                                    <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                                        {[
                                            { name: "Cappavilla Village", length: "51 Week", type: "Ensuite Room", rank: 1 },
                                            { name: "Thomond Village", length: "51 Week", type: "Ensuite Room", rank: 2 },
                                            { name: "Cappavilla Village", length: "51 Week", type: "Standard Room", rank: 3 },
                                            { name: "Thomond Village", length: "51 Week", type: "Standard Room", rank: 4 },
                                            { name: "Drominbeg Square", length: "51 Week", type: "Ensuite Room", rank: 5 },
                                            { name: "Troy Village", length: "51 Week", type: "Ensuite Room", rank: 6 }
                                        ].map((p) => (
                                            <div key={p.rank} className="border border-gray-200 rounded-xl p-3 flex items-center justify-between hover:border-[#007dba]/30 transition-colors bg-white shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-7 h-7 rounded-full bg-[#005a8a] flex items-center justify-center font-bold text-xs text-white shadow-sm">{p.rank}</div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 text-sm">{p.name}</p>
                                                        <div className="flex items-center gap-2">
                                                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">{p.length} Contract</p>
                                                            <span className="text-[8px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200">{p.type}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="text-[#007dba] text-[10px] font-bold hover:underline">Edit</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="space-y-8">
                                    <h4 className="text-[#005a8a] font-bold text-2xl">Would you like to share your accommodation with a friend?</h4>
                                    <div className="flex gap-4">
                                        {["Yes", "No"].map((opt) => (
                                            <div key={opt} className={`flex-1 border p-4 rounded-lg flex items-center gap-3 transition-colors ${opt === "Yes" ? 'border-[#006a3d] bg-[#006a3d]/5' : 'border-gray-200'}`}>
                                                <div className={`w-4 h-4 rounded-full border-2 ${opt === "Yes" ? 'border-[#006a3d] bg-[#006a3d]' : 'border-gray-300'}`} />
                                                <span className="text-sm font-medium">{opt}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-bold text-gray-700">Please enter their name(s) here:</p>
                                        <div className="border border-gray-200 rounded p-4 h-32 text-gray-400 text-sm bg-gray-50 italic">
                                            Enter name(s) here...
                                        </div>
                                    </div>
                                    <div className="bg-[#f0f9ff] p-4 text-[11px] text-gray-600 leading-relaxed border-l-4 border-blue-400">
                                        Please note when requesting to share with a friend, your friend must also include your name on their application. All preferences are requests only and cannot be guaranteed.
                                    </div>
                                </div>
                            )}

                            {step === 5 && (
                                <div className="space-y-6">
                                    <h4 className="text-[#005a8a] font-bold text-2xl">License Agreement & Terms</h4>
                                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                                        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 text-[10px] font-bold uppercase text-gray-500">Document Review</div>
                                        <div className="p-6 h-48 overflow-y-auto text-xs text-gray-500 leading-relaxed space-y-4">
                                            <p>This License Agreement is made between the University of Limerick (the "University") and the Student.</p>
                                            <p>1. The University agree to provide the Accommodation to the Student for the duration of the Let Length selected in Step 2.</p>
                                            <p>2. The Student agrees to pay the License Fee in accordance with the payment schedule provided upon offer.</p>
                                            <p>3. The Student acknowledges that the Deposit is non-refundable upon cancellation after the specified deadline.</p>
                                            <p>4. The Student agrees to abide by the Village Rules and University Code of Conduct.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                                        <div className="w-5 h-5 border-2 border-amber-600 bg-amber-600 flex items-center justify-center text-white text-[10px] shrink-0 mt-0.5">✓</div>
                                        <p className="text-sm text-amber-900 font-medium">I confirm that I have read, understood and accept the terms and conditions of the license agreement and village rules.</p>
                                    </div>
                                </div>
                            )}

                            {step === 6 && (
                                <div className="space-y-8 animate-fadeIn">
                                    <div className="space-y-2">
                                        <h4 className="text-[#005a8a] font-bold text-3xl">Application Status 2026-27</h4>
                                        <p className="text-[#6ea204] font-bold text-xl">Completed Application</p>
                                    </div>

                                    <div className="text-gray-600 text-sm leading-relaxed space-y-4">
                                        <p>Thank you for your application for accommodation at the University of Limerick. We will endeavour to process your application as soon as possible.</p>
                                        <p className="border-y border-gray-100 py-4 font-mono text-gray-300 tracking-widest whitespace-nowrap overflow-hidden">********************************************************************************</p>
                                        <p>Please ensure to check your <strong>spam/junk mail</strong> & check all email addresses associated with your student profiles at the University of Limerick.</p>
                                        <p className="text-gray-900 font-medium pt-4 border-t border-gray-50">
                                            <span className="font-bold">Please note:</span> While we endeavour to accommodate all requests we <span className="underline italic">do not guarantee</span> these.
                                        </p>
                                    </div>

                                    <div className="flex justify-center pt-8">
                                        <button
                                            onClick={() => setStep(1)}
                                            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all hover:bg-black active:scale-[0.98]"
                                        >
                                            Back to Start
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Portal Buttons */}
                        <div className="flex justify-between items-center mt-8">
                            <button
                                onClick={() => setStep(Math.max(1, step - 1))}
                                className={`text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors ${step > 1 ? 'bg-[#7e3f98] text-white hover:bg-[#6a3580]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                &lt; Back
                            </button>
                            <button
                                onClick={() => setStep(Math.min(6, step + 1))}
                                className={`text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors ${step < 6 ? 'bg-[#6ea204] text-white hover:bg-[#5a8203]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                {step === 6 ? 'Application Finished' : 'Continue >'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footnote */}
                <p className="text-center mt-8 text-xs text-gray-400 max-w-md mx-auto">
                    This interface is a stylized mock-up based on standard UL Accommodation Portal layouts for guidance purposes only.
                </p>
            </div>
        </section >
    );
};

export default PortalPreview;
