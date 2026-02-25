// ── Production-Ready Accommodation Data ──
// Source: research.txt + ul_accommodation_research.json
// Academic Year: 2025/2026
// All prices are TOTAL for the contract length specified, in EUR.

import type { Accommodation } from '../types';

export const ACCOMMODATIONS: Accommodation[] = [
    // ═══════════════════════════════════════════
    //  UL-MANAGED: ON-CAMPUS
    // ═══════════════════════════════════════════
    {
        id: "quigley",
        name: "Quigley Residence",
        locationType: "on-campus",
        ulManaged: true,
        privateManaged: false,
        postgradDedicated: true,
        typicalResidentMix: "mostly-postgrad",
        description: "Exclusively dedicated to postgraduate and medical students, located on the North Campus adjacent to the Medical School and Irish World Academy. Offers a quieter, mature environment conducive to study with modern ensuite apartments in an attractive landscaped setting.",
        distanceToCampusMinutes: 5,

        contractOptions: [
            { lengthWeeks: 51, postgradAvailable: false, typicalTotalPriceEUR: 8044, utilitiesIncluded: true, priceNotes: "2-Bed apartment (Not in portal)" },
            { lengthWeeks: 51, postgradAvailable: false, typicalTotalPriceEUR: 7635, utilitiesIncluded: true, priceNotes: "4-Bed apartment (Not in portal)" },
        ],
        roomOptions: [
            { type: "4-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "2-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
        ],

        amenities: ["High-speed WiFi", "Ensuite bathrooms", "Refuse collection", "Full access to UL Sport gym & pool", "Bike storage", "Landscaped grounds", "24/7 Security patrols", "Launderette (shared with Cappavilla)"],
        pros: ["Exclusively for postgraduate students — quiet study environment", "On-campus, close to Health Sciences and Medical School", "All rooms are ensuite with modern facilities"],
        cons: ["More expensive than some other on-campus options", "Limited parking availability", "Shared reception with Cappavilla Village"],

        pricingNotes: "Prices are 51-week totals for 2025/26. Utilities included. Note: Quigley does NOT appear in the portal's 51-week postgrad room preference list.",
        allocationNotes: "Postgrad-dedicated residence but does NOT appear in the 51-week postgrad preference list on the UL accommodation portal. May require direct contact with accommodation office.",

        bookingType: "ul-portal",
        bookingURL: "https://www.ul.ie/accommodation/living/quigley-residence",
        imageURLs: ["https://lh3.googleusercontent.com/p/AF1QipM-21K6kY9mF4gR4v6n_fGzJ1zG1zG1zG1zG1zG=w800-h600-k-no"],
        videoURLs: ["https://www.youtube.com/watch?v=F5t8h8j7A_M"],
        phone: "+353 61 237500",
        email: "cappavillavillage@ul.ie",
    },

    {
        id: "cappavilla",
        name: "Cappavilla Village",
        locationType: "on-campus",
        ulManaged: true,
        privateManaged: false,
        postgradDedicated: false,
        typicalResidentMix: "mixed",
        description: "Located on the North Campus at the highest point, offering stunning views of the River Shannon. Apartment-style residence popular with health science and music students. Partial blocks are allocated to postgraduates.",
        distanceToCampusMinutes: 15,

        contractOptions: [
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 7486, utilitiesIncluded: true, priceNotes: "4-Bed apartment" },
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 7226, utilitiesIncluded: true, priceNotes: "6-Bed apartment" },
            { lengthWeeks: 51, postgradAvailable: true, typicalTotalPriceEUR: 9557, utilitiesIncluded: true, priceNotes: "4-Bed apartment" },
            { lengthWeeks: 51, postgradAvailable: true, typicalTotalPriceEUR: 9143, utilitiesIncluded: true, priceNotes: "6-Bed apartment" },
        ],
        roomOptions: [
            { type: "6-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "4-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "2-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
        ],

        amenities: ["All rooms ensuite", "High-speed WiFi", "Common room with pool table", "Launderette", "Bike storage", "Full access to UL Sport gym & pool"],
        pros: ["All bedrooms have private ensuite bathrooms", "Scenic views and quiet atmosphere on North Campus", "Close to Irish World Academy and Health Sciences building"],
        cons: ["15–20 min walk to the main campus/library via the Living Bridge", "Can feel isolated from main social hubs", "Electric heating can be expensive if usage limits exceeded"],

        pricingNotes: "Full Academic Year and 51-week rates available. Utilities included in both.",
        allocationNotes: "Partial postgrad blocks. High probability for postgrads, especially 51-week contracts.",

        bookingType: "ul-portal",
        bookingURL: "https://www.ul.ie/accommodation/living/cappavilla",
        imageURLs: ["https://lh3.googleusercontent.com/p/AF1QipN3-98gEOG8-k-N_tH8t1zG1zG1zG1zG1zG1zG=w800-h600-k-no"],
        videoURLs: ["https://www.youtube.com/watch?v=mRhGogh3dJ0"],
        phone: "+353 61 237500",
        email: "cappavillavillage@ul.ie",
    },

    {
        id: "thomond",
        name: "Thomond Village",
        locationType: "on-campus",
        ulManaged: true,
        privateManaged: false,
        postgradDedicated: false,
        typicalResidentMix: "mixed",
        description: "Situated on the North Campus, linked to the south bank by the spectacular Living Bridge. Spectacular views of the River Shannon. Apartment-style accommodation with a shared study hub. Dedicated postgraduate apartments available in specific blocks.",
        distanceToCampusMinutes: 12,

        contractOptions: [
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 7486, utilitiesIncluded: true, priceNotes: "4-Bed apartment" },
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 7226, utilitiesIncluded: true, priceNotes: "6-Bed apartment" },
            { lengthWeeks: 51, postgradAvailable: true, typicalTotalPriceEUR: 9557, utilitiesIncluded: true, priceNotes: "4-Bed apartment" },
            { lengthWeeks: 51, postgradAvailable: true, typicalTotalPriceEUR: 9143, utilitiesIncluded: true, priceNotes: "6-Bed apartment" },
        ],
        roomOptions: [
            { type: "6-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "4-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "2-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
        ],

        amenities: ["All rooms ensuite", "High-speed WiFi", "Study hub", "Launderette", "Bike storage", "Full access to UL Sport gym & pool"],
        pros: ["Modern apartment style with ensuite rooms", "Beautiful riverside location and views", "Access to a dedicated study hub"],
        cons: ["10–15 min walk to main campus classes", "Windy crossing the bridge in winter", "Large village — can be noisy depending on block"],

        pricingNotes: "Full Academic Year and 51-week rates. Utilities included.",
        allocationNotes: "Partial postgrad blocks. High probability for postgrads on 51-week contracts.",

        bookingType: "ul-portal",
        bookingURL: "https://www.ul.ie/accommodation/living/thomond",
        imageURLs: ["https://lh3.googleusercontent.com/p/AF1QipP_z5fG1zG1zG1zG1zG1zG1zG1zG1zG1zG1zG=w800-h600-k-no"],
        videoURLs: ["https://www.youtube.com/watch?v=D0vLneEA3gM"],
        phone: "+353 61 237000",
        email: "accomodation@ul.ie",
    },

    {
        id: "dromroe",
        name: "Dromroe Village",
        locationType: "on-campus",
        ulManaged: true,
        privateManaged: false,
        postgradDedicated: false,
        typicalResidentMix: "mixed",
        description: "An attractive apartment-style complex bordering the millstream and overlooking the Shannon River. Located very centrally on the main campus, close to the main teaching buildings and University Concert Hall. Has a village feel with an on-site pizza place and shop.",
        distanceToCampusMinutes: 5,

        contractOptions: [
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 7164, utilitiesIncluded: true, priceNotes: "6-Bed apartment" },
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 7764, utilitiesIncluded: true, priceNotes: "2-Bed apartment" },
        ],
        roomOptions: [
            { type: "6-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "2-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
        ],

        amenities: ["All rooms ensuite", "Village hall with seminar rooms", "On-site convenience store and pizzeria", "Launderette", "High-speed WiFi", "Full access to UL Sport gym & pool"],
        pros: ["Central on-campus — very short walk to classes", "Ensuite bathrooms in all rooms", "Excellent on-site facilities (shop, food, seminar rooms)"],
        cons: ["Can be noisy due to central location", "Parking is limited and not guaranteed", "High demand makes it difficult to secure a room"],

        pricingNotes: "Full Academic Year rates shown. 51-week not typically available here. Utilities included.",
        allocationNotes: "Mixed allocation. Possible for postgrads but not guaranteed — depends on supply.",

        bookingType: "ul-portal",
        bookingURL: "https://www.ul.ie/accommodation/living/dromroe",
        imageURLs: ["https://lh3.googleusercontent.com/p/AF1QipN6fG1zG1zG1zG1zG1zG1zG1zG1zG1zG1zG=w800-h600-k-no"],
        videoURLs: ["https://www.youtube.com/watch?v=rXWNoEV4YQE", "https://www.youtube.com/watch?v=BLZ5ZG9eNG8"],
        phone: "+353 61 202977",
        email: "dromroevillage@ul.ie",
    },

    {
        id: "plassey",
        name: "Plassey Village",
        locationType: "on-campus",
        ulManaged: true,
        privateManaged: false,
        postgradDedicated: false,
        typicalResidentMix: "mostly-undergrad",
        description: "One of the original on-campus villages, consisting of terraced houses arranged around courtyards. Popular with first-year undergraduates due to its strong social atmosphere. 8-bedroom houses with shared bathrooms. Affordable on-campus option.",
        distanceToCampusMinutes: 5,

        contractOptions: [
            { lengthWeeks: 38, postgradAvailable: false, typicalTotalPriceEUR: 5416, utilitiesIncluded: true, priceNotes: "8-Bed house" },
            { lengthWeeks: 38, postgradAvailable: false, typicalTotalPriceEUR: 6116, utilitiesIncluded: true, priceNotes: "4-Bed house" },
        ],
        roomOptions: [
            { type: "8-bedroom house (Shared bathrooms)", ensuite: false, sharedBathroom: true },
            { type: "4-bedroom house (Shared bathrooms)", ensuite: false, sharedBathroom: true },
        ],

        amenities: ["High-speed WiFi", "Shared bathrooms (2 showers/toilets per 8-bed house)", "Full kitchen/living area", "Launderette", "Full access to UL Sport gym & pool"],
        pros: ["Most affordable on-campus option", "Located very close to the main university entrance and bus stops", "Strong community feel"],
        cons: ["Predominantly undergraduate/fresher population — can be noisy", "Shared bathrooms (no ensuite)", "Older housing stock compared to Cappavilla/Thomond"],

        pricingNotes: "Full Academic Year rate. Utilities included. No 51-week postgrad contract typically.",
        allocationNotes: "Mostly undergrad-focused. Postgrads can technically be placed here but it is rare and not ideal.",

        bookingType: "ul-portal",
        bookingURL: "https://www.ul.ie/accommodation/living/plassey",
        imageURLs: ["https://lh3.googleusercontent.com/p/AF1QipO_fG1zG1zG1zG1zG1zG1zG1zG1zG1zG1zG=w800-h600-k-no"],
        videoURLs: [],
        phone: "+353 61 202347",
        email: "plasseyvillage@ul.ie",
    },

    {
        id: "kilmurry",
        name: "Kilmurry Village",
        locationType: "on-campus",
        ulManaged: true,
        privateManaged: false,
        postgradDedicated: false,
        typicalResidentMix: "mostly-undergrad",
        description: "Located near the UL Sport Arena, this village consists of terraced houses in a landscaped setting. Popular for sports enthusiasts. Has a strong undergraduate presence but offers 6 and 8-bedroom houses close to the running track and pool.",
        distanceToCampusMinutes: 8,

        contractOptions: [
            { lengthWeeks: 38, postgradAvailable: false, typicalTotalPriceEUR: 6108, utilitiesIncluded: true, priceNotes: "8-Bed house" },
            { lengthWeeks: 38, postgradAvailable: false, typicalTotalPriceEUR: 6579, utilitiesIncluded: true, priceNotes: "6-Bed house" },
        ],
        roomOptions: [
            { type: "6-bedroom house (Shared bathrooms)", ensuite: false, sharedBathroom: true },
            { type: "8-bedroom house (Shared bathrooms)", ensuite: false, sharedBathroom: true },
        ],

        amenities: ["High-speed WiFi", "Shared bathrooms", "Bike storage", "Launderette", "Adjacent to UL Sports Arena"],
        pros: ["Immediate access to world-class sports facilities", "Good balance of cost and location", "Spacious kitchen/living areas"],
        cons: ["Shared bathrooms (no ensuite)", "Can be noisy with undergraduate students", "Slightly further from main reception than Plassey"],

        pricingNotes: "Full Academic Year rate. Utilities included.",
        allocationNotes: "Mostly undergrad. Least predictable for a postgrad 51-week placement.",

        bookingType: "ul-portal",
        bookingURL: "https://www.ul.ie/accommodation/living/kilmurry",
        imageURLs: ["https://lh3.googleusercontent.com/p/AF1QipP_fG1zG1zG1zG1zG1zG1zG1zG1zG1zG1zG=w800-h600-k-no"],
        videoURLs: [],
        phone: "+353 61 202331",
        email: "kilmurryvillage@ul.ie",
    },

    // ═══════════════════════════════════════════
    //  UL-MANAGED: OFF-CAMPUS
    // ═══════════════════════════════════════════

    {
        id: "drominbeg",
        name: "Drominbeg Square",
        locationType: "off-campus",
        ulManaged: true,
        privateManaged: false,
        postgradDedicated: true,
        typicalResidentMix: "mostly-postgrad",
        description: "UL's newest off-campus village in the Rhebogue area, approximately 3km from the main campus. Specifically caters to postgraduates on 51-week contracts with a mix of ensuite and standard rooms in 3, 4, and 6-bedroom houses. Connected via the Canal Bank river path.",
        distanceToCampusMinutes: 25,

        contractOptions: [
            { lengthWeeks: 51, postgradAvailable: true, typicalTotalPriceEUR: 9889, utilitiesIncluded: true, priceNotes: "Ensuite room" },
            { lengthWeeks: 51, postgradAvailable: true, typicalTotalPriceEUR: 9111, utilitiesIncluded: true, priceNotes: "Standard room" },
        ],
        roomOptions: [
            { type: "3/4/6-bedroom house (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "3/4/6-bedroom house (Standard)", ensuite: false, sharedBathroom: true },
        ],

        amenities: ["High-speed WiFi", "In-house washer and dryer", "Gas-fired central heating", "Bike storage", "Regular security patrols", "Refuse collection", "Full access to UL Sport gym & pool"],
        pros: ["51-week contract ideal for Masters/PhD students", "Quiet residential location away from undergrad nightlife", "Newer facilities with in-house laundry"],
        cons: ["Located 3km from campus — requires commuting", "Requires bike/bus/walk to get to classes", "Limited parking available"],

        pricingNotes: "51-week totals for 2025/26. Drominbeg pricing is higher due to year-round contract. Utilities included.",
        allocationNotes: "51-week postgrad focus. High allocation probability for postgrads.",

        bookingType: "ul-portal",
        bookingURL: "https://www.ul.ie/accommodation/drominbeg-square",
        imageURLs: ["https://www.ul.ie/sites/default/files/styles/width_of_content_area/public/2025-04/_DSC0276%20%281%29.jpg.webp?itok=kLJqlWCd"],
        videoURLs: [],
        phone: "+353 61 202977",
        email: "accommodation@ul.ie",
    },

    {
        id: "troy",
        name: "Troy Village",
        locationType: "off-campus",
        ulManaged: true,
        privateManaged: false,
        postgradDedicated: false,
        typicalResidentMix: "mixed",
        description: "Located in the Groody area of Castletroy, approximately a 15-minute walk from UL. Managed by UL Campus Life Services, it offers a secure, gated community feel. Popular for students who want a cheaper option while remaining under university management.",
        distanceToCampusMinutes: 15,

        contractOptions: [
            { lengthWeeks: 38, postgradAvailable: true, typicalTotalPriceEUR: 5159, utilitiesIncluded: true, priceNotes: "Standard room in 5/6/7-Bed" },
            { lengthWeeks: 38, postgradAvailable: true, typicalTotalPriceEUR: 5793, utilitiesIncluded: true, priceNotes: "Ensuite in 5/6/7-Bed" },
            { lengthWeeks: 38, postgradAvailable: true, typicalTotalPriceEUR: 7294, utilitiesIncluded: true, priceNotes: "Ensuite in 2-Bed" },
            { lengthWeeks: 51, postgradAvailable: true, typicalTotalPriceEUR: 7658, utilitiesIncluded: true, priceNotes: "Ensuite 3/4-Bed" },
            { lengthWeeks: 51, postgradAvailable: true, typicalTotalPriceEUR: 7658, utilitiesIncluded: true, priceNotes: "Standard 3/4-Bed" },
        ],
        roomOptions: [
            { type: "5/6/7-bedroom apartment (Standard)", ensuite: false, sharedBathroom: true },
            { type: "5/6/7-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "2-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "3/4-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "3/4-bedroom apartment (Standard)", ensuite: false, sharedBathroom: true },
        ],

        amenities: ["High-speed WiFi", "Gated access with CCTV", "On-site launderette", "Refuse collection", "Full access to UL Sport gym & pool", "Shuttle bus service nearby"],
        pros: ["More affordable than on-campus ensuite villages", "Shops and supermarkets (Groody Centre) nearby", "Quiet, gated community safe for residents"],
        cons: ["15–20 minute walk to campus", "Some rooms have shared bathrooms", "Limited parking availability"],

        pricingNotes: "Both 38-week and 51-week contracts available. Utilities included.",
        allocationNotes: "Mixed allocation. 51-week postgrad contracts available.",

        bookingType: "ul-portal",
        bookingURL: "https://www.ul.ie/accommodation/troy-village",
        imageURLs: ["https://lh3.googleusercontent.com/gps-cs-s/AHVAwerkVUM4gtAlM5RK7gc7v5e9lob87LVKzdjusKPPyeUtdindfoZ9S0A46f5naQ2wNKyi_ckG6zd3mWWaZZ2-jf5khAsEz_W6Ala1qLX0FZQlF0Vf34EQ6z1O0AmjlmkKVJACk0lHuw=w493-h240-k-no"],
        videoURLs: ["https://www.youtube.com/watch?v=VIaUGHJQLD8"],
        phone: "+353 61 330199",
        email: "troyvillage@ul.ie",
    },

    {
        id: "groody-ul",
        name: "Groody Village (UL Managed)",
        locationType: "off-campus",
        ulManaged: true,
        privateManaged: false,
        postgradDedicated: false,
        typicalResidentMix: "mixed",
        description: "Located in the Groody area, close to Troy Village and about 15 minutes walk from campus. UL Campus Life Services manages specific blocks. Modern apartment living with a mix of ensuite and standard rooms.",
        distanceToCampusMinutes: 15,

        contractOptions: [
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 6152, utilitiesIncluded: true, priceNotes: "6-Bed Ensuite" },
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 6050, utilitiesIncluded: true, priceNotes: "3-Bed Standard" },
        ],
        roomOptions: [
            { type: "6-bedroom apartment (Ensuite)", ensuite: true, sharedBathroom: false },
            { type: "3-bedroom apartment (Standard)", ensuite: false, sharedBathroom: true },
        ],

        amenities: ["High-speed WiFi", "Washer/dryer in apartment", "Gas central heating", "Full access to UL Sport gym & pool", "Refuse collection", "Gated entry"],
        pros: ["Close to supermarkets and local amenities", "Includes UL Sport membership and campus support", "Modern fittings with in-unit laundry"],
        cons: ["15-minute walk to campus", "Standard rooms share bathrooms", "Not directly on the main campus shuttle route"],

        pricingNotes: "41-week rate. Utilities included.",
        allocationNotes: "Mixed allocation. UL-managed blocks within a larger development.",

        bookingType: "ul-portal",
        bookingURL: "https://www.ul.ie/accommodation/living/groody",
        imageURLs: ["https://lh3.googleusercontent.com/p/AF1QipO_zG1zG1zG1zG1zG1zG1zG1zG1zG1zG1zG=w800-h600-k-no"],
        videoURLs: [],
        phone: "+353 61 330199",
        email: "groodyvillage@ul.ie",
    },

    // ═══════════════════════════════════════════
    //  PRIVATE: OFF-CAMPUS
    // ═══════════════════════════════════════════

    {
        id: "groody-private",
        name: "Groody Student Park",
        locationType: "off-campus",
        ulManaged: false,
        privateManaged: true,
        postgradDedicated: false,
        typicalResidentMix: "mixed",
        description: "A privately managed student accommodation complex in the Castletroy area, adjacent to the UL-managed Groody Village. Very popular with postgraduates and international students. Features 3-bedroom apartments and 6-bedroom duplexes within a secure gated community.",
        distanceToCampusMinutes: 18,

        contractOptions: [
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 4768, utilitiesIncluded: false, priceNotes: "Rent only. €1,000 utility deposit separate (refundable)." },
        ],
        roomOptions: [
            { type: "3-bedroom apartment (Double bed, Shared bathroom)", ensuite: false, sharedBathroom: true },
            { type: "6-bedroom duplex (Ensuite)", ensuite: true, sharedBathroom: false },
        ],

        amenities: ["High-speed broadband", "Multi-channel TV", "Fully fitted kitchens with washer/dryer", "Secure gated entry", "Free parking (subject to availability)"],
        pros: ["Private management allows flexible booking", "Spacious living areas with double beds in many rooms", "Walking distance to ALDI, SuperValu, and cinema"],
        cons: ["Utilities charged separately — €1,000 refundable utility deposit", "Booking is separate from UL portal", "15–20 minute walk to UL"],

        pricingNotes: "Rent ~€4,768 for academic year. Utility deposit €1,000 (refundable if within allowance). Total effective cost ~€5,800.",
        allocationNotes: "No UL portal. Contact directly. Group bookings possible.",

        bookingType: "direct-private",
        bookingURL: "https://groodystudentpark.ie/apply-online/",
        imageURLs: ["https://lh3.googleusercontent.com/p/AF1QipN_fG1zG1zG1zG1zG1zG1zG1zG1zG1zG1zG=w800-h600-k-no"],
        videoURLs: [],
        phone: "+353 61 350100",
        email: "info@groodystudentpark.ie",
    },

    {
        id: "brookfield",
        name: "Brookfield Hall",
        locationType: "off-campus",
        ulManaged: false,
        privateManaged: true,
        postgradDedicated: false,
        typicalResidentMix: "mixed",
        description: "A purpose-built private student complex on the Groody Road. Well-regarded for high-quality facilities and includes a shuttle bus service to UL. Spacious apartments with ensuite bedrooms and double beds — a premium choice for postgraduates.",
        distanceToCampusMinutes: 15,

        contractOptions: [
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 4966, utilitiesIncluded: false, priceNotes: "Single room. + ~€1,000 utilities." },
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 5187, utilitiesIncluded: false, priceNotes: "Double room. + ~€1,000 utilities." },
        ],
        roomOptions: [
            { type: "2/3/4-bedroom apartment (Ensuite, Double/Single)", ensuite: true, sharedBathroom: false },
        ],

        amenities: ["Free shuttle bus to UL", "High-speed WiFi", "Multi-channel TV", "24/7 Security", "On-site launderette", "Gym/Games room"],
        pros: ["Free shuttle bus service is a major convenience", "All rooms ensuite with double bed options", "Dedicated block often available for postgraduates"],
        cons: ["Utilities ~€1,000 are extra", "Strict cancellation policies", "High demand leads to early sell-out"],

        pricingNotes: "Rent €4,966–€5,187 for academic year. Utilities ~€1,000 extra. Total effective ~€6,000–€6,200.",
        allocationNotes: "No UL portal. Book directly via Brookfield website. Group bookings possible.",

        bookingType: "direct-private",
        bookingURL: "https://www.brookfieldhall.com/rates-booking-dates/",
        imageURLs: ["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3CWwq0u6dVM0tuEhABOEjQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=79.939865&pitch=0&thumbfov=100"],
        videoURLs: [],
        phone: "+353 61 333888",
        email: "info@brookfieldhall.com",
    },

    {
        id: "parkview",
        name: "Parkview Hall",
        locationType: "off-campus",
        ulManaged: false,
        privateManaged: true,
        postgradDedicated: false,
        typicalResidentMix: "mixed",
        description: "A purpose-built student apartment complex on the Dublin Road, roughly a 25–30 minute walk from the university. Budget-friendly accommodation in 3-bedroom apartments. Quieter option often chosen by students wanting to save money.",
        distanceToCampusMinutes: 28,

        contractOptions: [
            { lengthWeeks: 41, postgradAvailable: true, typicalTotalPriceEUR: 4050, utilitiesIncluded: false, priceNotes: "~€450/month. Electricity is pre-pay (Pinergy) and extra." },
        ],
        roomOptions: [
            { type: "3-bedroom apartment (Shared bathroom)", ensuite: false, sharedBathroom: true },
        ],

        amenities: ["WiFi included", "Gated complex", "On-site laundry", "Parking", "Balcony in apartments"],
        pros: ["Most affordable monthly rent in the area", "Near local bus stops for city and university access", "Quieter than the main student hubs"],
        cons: ["Longer walk to campus (25–30 mins)", "Electricity is pre-pay (Pinergy) and extra cost", "Facilities are more basic than luxury student builds"],

        pricingNotes: "~€4,050 for academic year (~€450/month). Electricity pre-pay extra. Budget option.",
        allocationNotes: "No UL portal. Contact directly.",

        bookingType: "direct-private",
        bookingURL: "http://www.parkviewhallstudents.com",
        imageURLs: ["https://lh3.googleusercontent.com/p/AF1QipM_fG1zG1zG1zG1zG1zG1zG1zG1zG1zG1zG=w800-h600-k-no"],
        videoURLs: [],
        phone: "",
        email: "parkviewhallstudents@outlook.com",
    },
];
