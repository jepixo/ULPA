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
    // ── Official Clarifications from UL Accommodation (Evie, Feb 2026) ──
    {
        id: "when-to-apply",
        title: "When Do Applications Open? (2026/27)",
        content: "Applications for 2026/27 accommodation open on **March 1st**. You can register an account on the portal now at [ul.ie/accommodation](https://www.ul.ie/accommodation) — but the application section for 2026/27 won't be visible until the portal officially opens. A small number of returning students were able to apply early (when the portal was briefly open) — those applications will be honoured. **Watch this space for the official opening announcement.**",
        icon: "🗓️",
    },
    {
        id: "rolling-vs-lottery",
        title: "Lottery or Rolling Basis — Which Applies to You?",
        content: "This depends on your student type:\n\n**International full-degree postgrads & undergrads (most of us):** Applications are processed on a **rolling basis** — NOT a lottery. This means the earlier you apply after March 1st, the better your chances. You should apply as soon as you have a student ID or application number starting with **26**.\n\n**CAO students (Irish and some EU undergrads):** These go through a **lottery** process. If you're not sure which you are — you would know if you applied through the CAO. When applying, make sure you select **'International'** and NOT 'CAO'.\n\n**Erasmus / Exchange students:** Separate lottery process. You will receive dedicated information directly, so you won't miss out.",
        icon: "🎲",
    },
    {
        id: "application-fee",
        title: "Is There an Application Fee?",
        content: "**No — there is no application fee for 2026/27.** UL Accommodation has confirmed this. If you previously paid an application fee via Transfermate, UL will receive that payment. If you are then offered a room, your booking deposit reduces from €500 to **€450** (the €50 you paid offsets it). If you are not offered a room, or no longer want one, that payment will be **fully refunded**.\n\n⚠️ The application fee option has since been **removed from Transfermate**. Do not make any accommodation-related payments via Transfermate until you have an **official room offer**.",
        icon: "💳",
    },
    {
        id: "deposit",
        title: "Deposit & Payment Structure",
        content: "Once you receive a room offer, a **€500 booking deposit** is required to secure it (or **€450** if you already paid a fee via Transfermate). You have until **July** to pay the deposit — there is no rush. The deposit is held as security against damages or unpaid rent.\n\n⚠️ **Do NOT pay any deposit, rental fees, or other accommodation payments via Transfermate until you have an official room offer** with rental fees outlined. Cancelling after paying the deposit means you will **NOT** get a refund.\n\nFor private accommodations, deposits vary — e.g., Groody Student Park charges a €1,000 utility deposit. Always request receipts and read all Terms and Conditions.",
        icon: "💰",
    },
    {
        id: "confirmation-docs",
        title: "Can I Get Accommodation Confirmation Before Applying?",
        content: "No — UL Accommodation **cannot issue any confirmation documentation** until you have applied on the portal and received a room offer. This will only be possible after March 1st. If you made a Transfermate payment earlier, those funds will be held and applied to your account once you apply and are processed.",
        icon: "📄",
    },
    {
        id: "visa-accommodation",
        title: "Do I Need Campus Accommodation for My Visa?",
        content: "**No — on-campus accommodation is not a requirement for an Irish student visa.** You will need to demonstrate to the visa office that you have **secured accommodation for the duration of your studies**, but that accommodation can be:\n\n- On-campus (UL managed villages)\n- Off-campus private rental\n- With family or friends\n\nIf living with family/friends, you'll need: (1) a letter from them confirming you'll reside there for your studies, and (2) a utility bill in their name proving their address.\n\nFor the visa application itself, you need to have paid **50% of your tuition fee** to receive a visa support letter from UL Global. Students are recommended to submit visa applications **12 weeks before** their studies commence. You have plenty of time to secure accommodation before submitting your visa application — don't rush.",
        icon: "🛂",
    },
    // ── Original Research-Based Advice ──
    {
        id: "51-week",
        title: "Understanding 51-Week Contracts",
        content: "Postgraduates typically require year-round housing — especially Masters and PhD students who don't follow the standard academic calendar. A 51-week contract runs from late August to mid-August the following year. The villages that actually appear in the UL portal for 51-week postgrad contracts are: Cappavilla, Thomond, Troy Village, and Drominbeg Square. The 51-week rate is higher than a 38 or 41-week rate, but avoids the hassle of finding summer accommodation separately.",
        icon: "📅",
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
        content: "Apply as early as possible when the portal opens on March 1st. Rank realistically — put your genuinely preferred villages first. For a 51-week postgrad contract, only Cappavilla, Thomond, Troy, and Drominbeg appear as options in the portal. Rank Cappavilla and Thomond first if you want on-campus ensuite. If you need guaranteed same-apartment with friends, consider a private complex instead. Email the accommodation office stating your postgrad status and preferences — this can sometimes help if there's allocation flexibility. Keep private options as a backup.",
        icon: "🎯",
    },
    {
        id: "off-campus",
        title: "Off-Campus Renting Tips",
        content: "If you're renting privately off-campus, check for dampness, ventilation, heating systems, and working appliances. Areas within walking distance include Castletroy, Monaleen, Annacotty, and Golf Links Road. Always get a written lease agreement. Take photos of all rooms before moving in and when moving out (with dates). Your landlord must be registered with the RTB. You can refer disputes to the Private Residential Tenancy Board (PRTB).",
        icon: "🏠",
    },
];
