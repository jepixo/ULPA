// ── Application Process & Advice Content ──
// Source: research.txt

import type { ProcessStep, AdviceItem } from '../types';

export const APPLICATION_PROCESS: ProcessStep[] = [
    {
        step: 1,
        title: "Receive Your UL Offer",
        description: "You must have a valid UL student ID or offer letter before you can apply for accommodation.",
        icon: "🎓",
    },
    {
        step: 2,
        title: "Create Accommodation Portal Account",
        description: "Register on the UL Campus Life portal at campuslifeweb.ul.ie with your student details.",
        icon: "📝",
    },
    {
        step: 3,
        title: "Select Contract Length",
        description: "Choose **Full Academic Year** (31/8/26 to 19/5/27) or **51 weeks** (31/8/26 to 23/8/27).",
        icon: "📅",
    },
    {
        step: 4,
        title: "Rank Village Preferences",
        description: "You do NOT book a specific village. You rank your preferences in order and submit one application.",
        icon: "🏘️",
    },
    {
        step: 5,
        title: "Allocation & Offer",
        description: "UL allocates based on student category, application timing, and availability. Accept quickly if offered.",
        icon: "✉️",
    },
];

export const IMPORTANT_NOTICE = "Submitting an application does NOT guarantee your first choice. You do NOT apply to a specific village — you rank preferences and UL allocates centrally based on category, contract length, and availability.";

export const ALLOCATION_FACTS = [
    {
        title: "Category Matters",
        description: "UL allocates based on whether you're undergraduate, postgraduate, or international. Postgraduates are prioritised for specific villages.",
        icon: "👤",
    },
    {
        title: "51-Week Contracts Limit Options",
        description: "Only 4 villages actually appear in the UL portal for 51-week postgrad contracts: Cappavilla, Thomond, Troy, and Drominbeg. Choosing 51 weeks narrows your village pool significantly.",
        icon: "📋",
    },
    {
        title: "No Village Is Guaranteed",
        description: "Village pages like [Groody](https://www.ul.ie/accommodation/living/groody), [Dromroe](https://www.ul.ie/accommodation/living/dromroe), and [Plassey](https://www.ul.ie/accommodation/living/plassey) mention postgrads can stay, but they primarily offer Full Academic stays. Note: Lectures might end by May, but if you are doing a dissertation, you will need **51 weeks**.",
        icon: "⚠️",
    },
    {
        title: "Apply Early",
        description: "Application timing matters. The earlier you apply when the portal opens, the better your chances of getting your top preference.",
        icon: "⏰",
    },
    {
        title: "UL-Managed vs Private",
        description: "UL-managed properties use the central portal. Private properties allow direct booking and are more flexible for group bookings, but you should budget for **extra utility charges** and **traveling overhead**.",
        icon: "🏢",
    },
];

export const ADVICE_CONTENT: AdviceItem[] = [
    {
        id: "51-week",
        title: "Understanding 51-Week Contracts",
        content: "Postgraduates typically require year-round housing — especially Masters and PhD students who don't follow the standard academic calendar. A 51-week contract runs from late August to mid-August the following year. The villages that actually appear in the UL portal for 51-week postgrad contracts are: Cappavilla, Thomond, Troy Village, and Drominbeg Square. The 51-week rate is higher than a 38 or 41-week rate, but avoids the hassle of finding summer accommodation separately.",
        icon: "📅",
    },
    {
        id: "deposit",
        title: "Deposit & Payment Structure",
        content: "UL requires a **€500 booking deposit** when you accept your accommodation offer. This is held as security against damages or unpaid rent. **Important:** If you accept an offer and pay the deposit, cancelling later would mean you do **NOT** get a refund of the €500. Additionally, the first installment of your rent would typically need to be paid before **28th July 2026**. For private accommodations, deposits vary — Groody Student Park charges a €1,000 utility deposit. Always request receipts for all payments and note that your deposit does NOT cover rent during your notice period. Read all the Terms and Conditions before making any payments.",
        icon: "💰",
    },
    {
        id: "ensuite",
        title: "Shared vs Ensuite Rooms",
        content: "Ensuite rooms have a private bathroom in your bedroom. Standard/shared rooms mean you share a bathroom with 2–4 other housemates. Ensuite rooms cost significantly more (often €400 – €800 extra per year). Villages like Plassey and Kilmurry only offer shared bathrooms. Cappavilla, Thomond, Quigley, and Dromroe are fully ensuite. Consider your priorities — privacy vs budget.",
        icon: "🚿",
    },
    {
        id: "strategy",
        title: "Strategy for Postgraduates",
        content: "Apply as early as possible when the portal opens. Rank realistically — put your genuinely preferred villages first. For a 51-week postgrad contract, only Cappavilla, Thomond, Troy, and Drominbeg appear as options in the portal. Rank Cappavilla and Thomond first if you want on-campus ensuite. If you need guaranteed same-apartment with friends, consider a private complex instead. Email the accommodation office stating your postgrad status and preferences — this can sometimes help if there's allocation flexibility. Keep private options as a backup.",
        icon: "🎯",
    },
    {
        id: "off-campus",
        title: "Off-Campus Renting Tips",
        content: "If you're renting privately off-campus, check for dampness, ventilation, heating systems, and working appliances. Areas within walking distance include Castletroy, Monaleen, Annacotty, and Golf Links Road. Always get a written lease agreement. Take photos of all rooms before moving in and when moving out (with dates). Your landlord must be registered with the RTB. You can refer disputes to the Private Residential Tenancy Board (PRTB).",
        icon: "🏠",
    },
];
