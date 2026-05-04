window.TRIP_DATA = {

  meta: {
    tripName: "Universal Orlando — Fox Family Trip",
    dates: "May 21–25, 2026",
    startDate: "2026-05-21",
    endDate: "2026-05-25"
  },

  family: {
    members: [
      { name: "Julian Fox", role: "Dad / Trip Planner", notes: "Experienced Disney/Universal traveler" },
      { name: "Jennifer Fox", role: "Wife / Mom", notes: "Monitors Universal app in-park for wait times — co-pilot, not passenger" },
      { name: "Jasper Fox", role: "Son, age 13", notes: "4'9\" (57\") — clears every ride at all three parks" },
      { name: "Sterling Fox", role: "Son, age 10", notes: "4'6\" (54\") — clears most rides; see height chart for Hulk note" }
    ],
    chillRules: [
      { number: 1, title: "Rest Rule", text: "If someone is tired, stop. No pushing through. Midday park retreat is mandatory, not optional." },
      { number: 2, title: "Food/Drink Rule", text: "Stop and eat/drink whenever anyone needs it. Nobody waits until they're starving or dehydrated." },
      { number: 3, title: "Bathroom Rule", text: "Proactive group stops every ~90 min. Everyone goes every time." },
      { number: 4, title: "No FOMO Rule", text: "Top 3 priorities per day. Everything else is a bonus. No guilt about skipping things." },
      { number: 5, title: "Daily Rhythm", text: "Arrive early at park open → leave by ~12:30pm → eat/rest/pool → return ~2:30pm when crowds thin." }
    ],
    philosophy: [
      "Anchor-based, not schedule-based — identify 1–3 must-dos and 4–6 nice-to-dos per day",
      "Resist over-scheduling. Everything beyond the anchors is a bonus.",
      "Memorial Day weekend (Sat–Sun) means peak crowds — midday retreat is not optional those days",
      "Jennifer's app monitoring replaces rigid scheduling with real-time decision-making"
    ]
  },

  itinerary: {
    days: [
      {
        dayNumber: 1,
        date: "2026-05-21",
        label: "Travel Day",
        park: null,
        parkEmoji: "✈️",
        perks: { epa: false, expressPass: false },
        schedule: [
          { time: "4:05pm", activity: "Depart HPN (JetBlue Flight 0495)" },
          { time: "6:59pm", activity: "Arrive MCO. Pick up Budget rental car (conf. 37111644US3)." },
          { time: "Evening", activity: "Stop at Publix or Walmart en route — stock groceries for the full stay." },
          { time: "~9pm", activity: "Check into Hilton Grand Vacations SeaWorld. Easy dinner nearby." },
          { time: "9:30–10pm", activity: "Lights out. Tomorrow is a full day." }
        ],
        mustDos: [],
        niceToDos: [],
        notes: "Grocery run covers all timeshare breakfasts, midday lunches, and Monday morning. Don't skip this stop."
      },
      {
        dayNumber: 2,
        date: "2026-05-22",
        label: "Epic Universe",
        park: "Epic Universe",
        parkEmoji: "🎮",
        perks: { epa: false, expressPass: false },
        perkNote: "No EPA. No Express Pass. Rope drop is the only strategy.",
        schedule: [
          { time: "6:45am", activity: "Cook breakfast at timeshare. Everyone eats + bathrooms." },
          { time: "7:15am", activity: "Drive to Epic Universe. Queue at turnstiles before open." },
          { time: "Rope drop", activity: "Sprint to Wizarding World — Battle at the Ministry (lowest waits at open, fills fast)" },
          { time: "Morning", activity: "Hiccup's Wing Gliders → Stardust Racers → Le Cirque Arcanus show → Dark Universe" },
          { time: "11:30am", activity: "Snack + bathroom stop" },
          { time: "12:00pm", activity: "Leave Epic. Drive to timeshare. Lunch + pool + rest." },
          { time: "2:30pm", activity: "Return to Epic — Super Nintendo World (Mario Kart → Yoshi's → DK area) — crowds thin out by evening, best time for Nintendo World" },
          { time: "4:30pm", activity: "Wizarding World: Ministry of Magic — 🪄 Buy interactive wands at Cosme Acajor's shop, then Battle at the Ministry again / explore spell locations" },
          { time: "5:30pm", activity: "Snack break + bathroom stop" },
          { time: "7:00pm", activity: "Dinner at Atlantic (Celestial Park, Epic Universe) · Booking #639120252710358272" },
          { time: "8:30pm", activity: "Untrainable Dragon show → Dragon Racer's Rally → re-rides" },
          { time: "9:30pm", activity: "Drive back to timeshare" }
        ],
        mustDos: ["Battle at the Ministry (rope drop)", "Super Nintendo World / Mario Kart", "Atlantic dinner 7pm"],
        niceToDos: ["Stardust Racers", "Wing Gliders", "Le Cirque Arcanus show", "Dragon Racer's Rally", "Wand spells"],
        dining: { name: "Atlantic", time: "7:00pm", location: "Celestial Park, Epic Universe", confirmed: true, bookingId: "#639120252710358272" }
      },
      {
        dayNumber: 3,
        date: "2026-05-23",
        label: "Islands of Adventure",
        park: "Islands of Adventure",
        parkEmoji: "⚡",
        perks: { epa: true, expressPass: true },
        perkNote: "EPA + Unlimited Express Pass via Hard Rock room key",
        schedule: [
          { time: "7:00am", activity: "Breakfast at timeshare. Leave bags packed for Hard Rock." },
          { time: "7:45am", activity: "Arrive Hard Rock. Drop bags with bell desk. Get room keys (= Express Pass activated)." },
          { time: "8:00am", activity: "IOA turnstiles for EPA. Straight to Hagrid's Magical Creatures Motorbike Adventure (no Express Pass — early is the only way)" },
          { time: "Morning", activity: "Kong → Spider-Man → Dr. Doom's Fearfall → VelociCoaster → Incredible Hulk (all Express Pass)" },
          { time: "12:00pm", activity: "Leave IOA. Walk to Hard Rock. Check into room / pool / lunch." },
          { time: "2:30pm", activity: "Return to IOA — Hogsmeade: Forbidden Journey · Flight of the Hippogriff · wands · Butterbeer" },
          { time: "4:15pm", activity: "Dinner at Mythos · Booking #639120237617647104 ✅" },
          { time: "6:30pm", activity: "Water rides: Dudley Do-Right → Bilge-Rat Barges → Jurassic River Adventure (bring dry bag)" },
          { time: "8:30pm", activity: "Walk back to Hard Rock" }
        ],
        mustDos: ["Hagrid's (EPA, rope drop)", "VelociCoaster", "Hogsmeade / Forbidden Journey"],
        niceToDos: ["Hulk", "Dr. Doom's", "Flight of the Hippogriff", "Water rides", "Spider-Man", "Kong"],
        dining: { name: "Mythos", time: "4:15pm", location: "Islands of Adventure", confirmed: true, bookingId: "#639120237617647104" }
      },
      {
        dayNumber: 4,
        date: "2026-05-24",
        label: "Universal Studios Florida",
        park: "Universal Studios Florida",
        parkEmoji: "🎬",
        perks: { epa: true, expressPass: true },
        perkNote: "EPA + Unlimited Express Pass via Hard Rock room key (key remains valid after checkout)",
        schedule: [
          { time: "7:30am", activity: "Breakfast at Hard Rock hotel." },
          { time: "8:00am", activity: "Check out of Hard Rock. Leave bags with bell desk." },
          { time: "8:00am", activity: "USF turnstiles for EPA. Straight to Diagon Alley → Escape from Gringotts (highest demand at open)" },
          { time: "Morning", activity: "Despicable Me → Villain-Con Minion Blast → Transformers → Revenge of the Mummy (all Express Pass)" },
          { time: "12:00pm", activity: "Leave USF. Walk to CityWalk. Lunch + rest." },
          { time: "2:30pm", activity: "Return to USF — Hogwarts Express USF→IOA then back (both directions — different stories each way)" },
          { time: "4:30pm", activity: "Simpsons Ride + re-rides" },
          { time: "5:30pm", activity: "Dinner at Leaky Cauldron (Diagon Alley) — or Jasper's pick: Cowfish or Antojitos at CityWalk" },
          { time: "8:30pm", activity: "Collect bags from Hard Rock bell desk. Drive back to Hilton SeaWorld timeshare." }
        ],
        mustDos: ["Gringotts (EPA, rope drop)", "Hogwarts Express (both directions)", "Revenge of the Mummy"],
        niceToDos: ["Villain-Con Minion Blast", "Transformers", "Simpsons Ride", "Diagon Alley wand spells"],
        dining: { name: "Leaky Cauldron or Jasper's pick (Cowfish / Antojitos)", time: "~5:30pm", location: "Diagon Alley or CityWalk", confirmed: false }
      },
      {
        dayNumber: 5,
        date: "2026-05-25",
        label: "Travel Home",
        park: null,
        parkEmoji: "🏠",
        perks: { epa: false, expressPass: false },
        schedule: [
          { time: "Morning", activity: "Relaxed breakfast at timeshare from remaining groceries." },
          { time: "9:00am", activity: "Leave timeshare." },
          { time: "~10:00am", activity: "Return Budget car at MCO." },
          { time: "~10:15am", activity: "Enter MCO. Clear security 2.5+ hrs before 12:05pm departure." },
          { time: "12:05pm", activity: "Depart MCO (JetBlue Flight 0194) → arrives HPN 2:57pm." }
        ],
        mustDos: [],
        niceToDos: [],
        notes: "⚠️ MCO has two separate terminals — confirm which one JetBlue uses before driving in. Timeshare checkout is Tue 5/26 — no Monday morning rush."
      }
    ]
  },

  bookings: {
    flights: {
      confirmation: "KNREIZ",
      airline: "JetBlue",
      outbound: {
        date: "Thursday 5/21",
        flight: "JetBlue 0495",
        route: "HPN → MCO",
        departs: "4:05pm",
        arrives: "6:59pm",
        seats: "Julian 20D · Jennifer 20B · Jasper 20C · Sterling 20A (Row 20)"
      },
      return: {
        date: "Monday 5/25",
        flight: "JetBlue 0194",
        route: "MCO → HPN",
        departs: "12:05pm",
        arrives: "2:57pm",
        seats: "Julian 21B · Jennifer 21D · Jasper 21C · Sterling 21A (Row 21)"
      },
      notes: [
        "Fare: Blue — changeable, no change fee",
        "First checked bag from $40",
        "⚠️ REAL ID or passport required for domestic travel",
        "⚠️ MCO has two separate terminals — confirm JetBlue's terminal before Monday drop-off"
      ]
    },
    car: {
      confirmation: "37111644US3",
      vendor: "Budget",
      vehicle: "Compact — Kia Soul or similar · automatic · unlimited mileage",
      pickup: "Thu 5/21 at 6:59pm · Budget at MCO, 1 Jeff Fuqua Blvd, Orlando FL 32827",
      dropoff: "Mon 5/25 · same location · leave timeshare by 9:00am",
      total: "$243.20 (pay at pick-up — not prepaid)",
      notes: ["⚠️ Leave timeshare by 9:00am Monday at the latest to make the flight"]
    },
    timeshare: {
      confirmation: "RCI 559466785",
      name: "Hilton Grand Vacations at SeaWorld Orlando",
      checkin: "Thu 5/21",
      checkout: "Tue 5/26 (one day after flight — no Monday morning rush)",
      unit: "3-bedroom · max 8 guests · full kitchen",
      location: "South Orlando — 5–10 min drive to Epic Universe",
      notes: [
        "No hotel breakfast — stock groceries Thursday on the way from MCO",
        "Family stays Thu–Fri nights, returns after Hard Rock checkout Saturday night, stays through departure Monday",
        "Pool available for midday retreats"
      ]
    },
    hardRock: {
      confirmation: "OI-7A8VR8F7T6",
      name: "Hard Rock Hotel at Universal Orlando",
      checkin: "Sat 5/23",
      checkout: "Sun 5/24 (one night only)",
      room: "Standard 2 Queen Beds · 2 adults + 2 children",
      keyPerk: "Unlimited Express Pass for IOA + USF — activated on room key",
      location: "Walking distance to IOA and USF via CityWalk (~5 min)",
      notes: [
        "⚠️ Call ahead to confirm room keys can be issued when bags are dropped Saturday morning before room is ready",
        "Bags stored with bell desk Sunday after checkout — collect Sunday evening before driving to timeshare"
      ]
    },
    tickets: {
      confirmation: "OI-7A8VR8F7T6",
      type: "3-Day Park-to-Park",
      guests: "Julian · Jennifer · Jasper · Sterling Fox",
      startDate: "5/22/2026",
      window: "Valid any 3 days within a 7-day window",
      includes: "Covers Hogwarts Express both directions (requires park-to-park)",
      notes: ["⚠️ Verify whether tickets cover Epic Universe — standard 3-Day Park-to-Park may only cover USF + IOA. Epic Universe may require separate admission. Check the ticket attachment email."]
    }
  },

  dining: {
    confirmed: [
      { name: "Atlantic", date: "Friday 5/22", time: "7:00pm", location: "Celestial Park, Epic Universe", status: "✅ Confirmed", bookingId: "#639120252710358272" },
      { name: "Mythos", date: "Saturday 5/23", time: "4:15pm", location: "Islands of Adventure", status: "✅ Confirmed", bookingId: "#639120237617647104" }
    ],
    planned: [
      { name: "Leaky Cauldron (primary) or Cowfish / Antojitos (Jasper's pick)", date: "Sunday 5/24", time: "~5:30pm", location: "Diagon Alley or CityWalk", note: "No reservation — arrive by 5:30pm on Memorial Day weekend" },
      { name: "Timeshare / grocery meals", date: "Thu–Mon", time: "All breakfasts + midday lunches", location: "Timeshare", note: "Stock at Publix or Walmart Thursday on the way from MCO" }
    ],
    snacks: [
      { park: "Epic Universe (Fri)", items: ["Butterbeer Crêpe — Ministry of Magic, exclusive to Epic", "DK Crush Float — Donkey Kong Country, Nintendo World", "Yoshi's Smoothie — Nintendo World", "Yaknog — Mead Hall, Isle of Berk"] },
      { park: "Islands of Adventure (Sat)", items: ["Butterbeer (frozen) — Hogsmeade indoor bar (skip outdoor carts)", "WHO HASH loaded tots — Seuss Landing"] },
      { park: "Universal Studios Florida (Sun)", items: ["Butterbeer fudge — Diagon Alley (USF exclusive)", "Butterbeer (frozen) — Diagon Alley indoor bar"] }
    ],
    butterBeer: {
      bestFormat: "Frozen > cold > hot",
      alsoAvailable: "Ice cream · cold · hot · crêpe (Epic Universe only)",
      indoorLocations: [
        { name: "Three Broomsticks / Hog's Head", location: "Hogsmeade, IOA", note: "Indoor bar — significantly shorter lines than outdoor carts" },
        { name: "Leaky Cauldron bar", location: "Diagon Alley, USF", note: "Indoor — avoid outdoor carts" },
        { name: "Ministry of Magic area", location: "Epic Universe", note: "Butterbeer Crêpe exclusive to Epic" }
      ],
      budget: "~$8–12 per person per Wizarding World visit"
    },
    tips: [
      "Mobile order via Universal app 15–20 min before you want to eat — skips the counter line",
      "Avoid peak hours: 12–1pm and 5–7pm at quick service",
      "Atlantic (Epic, Fri): Full-service, upscale but family-friendly, wide menu — reservation at 7pm",
      "Mythos (IOA, Sat): Considered the best theme park restaurant in the world — go slow, enjoy it",
      "Leaky Cauldron (USF, Sun): Great quick-service option inside the park if already in Diagon Alley"
    ]
  },

  perks: {
    byDay: [
      { day: "Fri 5/22", park: "Epic Universe", epa: false, expressPass: false },
      { day: "Sat 5/23", park: "Islands of Adventure", epa: true, epaNote: "Hard Rock (1 hr early)", expressPass: true, expressPassNote: "Unlimited (room key)" },
      { day: "Sun 5/24", park: "Universal Studios Florida", epa: true, epaNote: "Hard Rock (1 hr early)", expressPass: true, expressPassNote: "Unlimited (room key)" }
    ],
    quickRef: [
      { label: "Epic Universe", day: "Friday 5/22", firstRide: "Battle at the Ministry (rope drop)", midday: "Timeshare (pool)", dinner: "Atlantic 7:00pm ✅", travel: "5–10 min drive" },
      { label: "Islands of Adventure", day: "Saturday 5/23", firstRide: "Hagrid's Motorbike (EPA)", midday: "Hard Rock Hotel", dinner: "Mythos 4:15pm ✅", travel: "Walk from Hard Rock" },
      { label: "Universal Studios FL", day: "Sunday 5/24", firstRide: "Escape from Gringotts (EPA)", midday: "CityWalk", dinner: "Leaky Cauldron / CityWalk", travel: "Walk from Hard Rock" }
    ],
    epaRules: [
      "Express Pass does NOT exist at Epic Universe — it is not offered at this park at all",
      "Hard Rock EPA: Arrive at IOA/USF turnstiles 1 full hour before general public",
      "Arrive at Hard Rock by 7:45am on Sat, drop bags, get room keys, walk to IOA by 8:00am",
      "On Sunday: check out at 8:00am, leave bags with bell desk, walk directly to USF turnstiles",
      "Express Pass does NOT work on Hagrid's Motorbike — EPA is the only edge",
      "Confirm with hotel that room key Express Pass remains valid on Sunday after checkout"
    ],
    campusGeography: [
      { label: "CityWalk Campus", note: "USF + IOA — walking distance from Hard Rock Hotel (~5 min)" },
      { label: "Epic Universe Campus", note: "Separate location, ~5 miles south — budget 15–20 min drive, not a quick walk" },
      { label: "Epic from Timeshare", note: "~5–10 min drive (timeshare is in south Orlando)" }
    ],
    bagStorage: "Leave bags at Hard Rock bell desk all day Sunday. Keeps the day car-free. Collect bags Sunday evening before driving back to timeshare.",
    epicNintendoNote: "Save Super Nintendo World for the 2:30pm+ afternoon return — crowds drop significantly later in the day and the land has great nighttime atmosphere. Rope drop is better spent at Ministry of Magic."
  },

  heights: {
    sterling: {
      heightInches: 54,
      heightDisplay: "4'6\" (54\")",
      note: "Jasper (57\") clears every ride. Sterling (54\") clears all but one — Incredible Hulk is exactly at his minimum.",
      rides: [
        { ride: "Mario Kart: Bowser's Challenge", park: "Epic Universe", min: 40, status: "ok" },
        { ride: "Yoshi's Adventure", park: "Epic Universe", min: 40, status: "ok" },
        { ride: "Hiccup's Wing Gliders", park: "Epic Universe", min: 40, status: "ok" },
        { ride: "Battle at the Ministry", park: "Epic Universe", min: 40, status: "ok" },
        { ride: "Escape from Gringotts", park: "USF", min: 42, status: "ok" },
        { ride: "Stardust Racers", park: "Epic Universe", min: 48, status: "ok" },
        { ride: "Dragon Racer's Rally", park: "Epic Universe", min: 48, status: "ok" },
        { ride: "Monsters Unchained", park: "Epic Universe", min: 48, status: "ok" },
        { ride: "Hagrid's Motorbike Adventure", park: "IOA", min: 48, status: "ok" },
        { ride: "Forbidden Journey", park: "IOA", min: 48, status: "ok" },
        { ride: "Revenge of the Mummy", park: "USF", min: 48, status: "ok" },
        { ride: "Despicable Me Minion Mayhem", park: "USF", min: 40, status: "ok" },
        { ride: "Transformers: The Ride", park: "USF", min: 40, status: "ok" },
        { ride: "VelociCoaster", park: "IOA", min: 51, status: "ok", warnNote: "54\" > 51\" — clears" },
        { ride: "Dr. Doom's Fearfall", park: "IOA", min: 52, status: "ok", warnNote: "54\" > 52\" — clears" },
        { ride: "Incredible Hulk Coaster", park: "IOA", min: 54, status: "danger", warnNote: "Exactly at minimum — thick-soled sneakers required Saturday" }
      ],
      borderlineRides: [
        { ride: "Incredible Hulk Coaster", min: 54, park: "IOA", action: "Sterling is exactly at minimum (54\"). Thick-soled sneakers are non-negotiable on Saturday. Operators measure at the gate with no flexibility." }
      ],
      childSwap: "Available at borderline rides. One adult rides while the other waits with Sterling; then swap without waiting in the full line again. Ask a team member at the ride entrance."
    }
  },

  weather: {
    overview: "Late May = beginning of Florida's rainy season. Afternoon thunderstorms are common (2–5pm), but the midday retreat plan already sidesteps the worst of it. Morning park sessions are almost always clear.",
    reality: [
      "Temps: 85–92°F highs, very humid",
      "Rain is typically afternoon thunderstorms, not all-day downpours — most clear within 1–2 hours",
      "Morning park sessions are almost always fine",
      "The midday retreat (leave by noon, return at 2:30pm) naturally sidesteps peak storm window",
      "Re-entry timing at 2:30pm may need to flex based on conditions"
    ],
    whatToPack: [
      "Ponchos ×4 — buy at home before the trip (in-park ponchos are expensive)",
      "Dry bag / waterproof pouch for phones and wallets (essential for water rides regardless)",
      "Spare socks — wet socks kill morale fast",
      "Change of clothes accessible for water ride days"
    ],
    scenarios: [
      {
        label: "Light rain / drizzle",
        plan: "Keep going. Most rides operate in light rain. Ponchos on. Hands-free beats umbrellas in theme parks."
      },
      {
        label: "Heavy afternoon storm (typical Florida pattern)",
        plan: "Already planned to be at midday retreat during peak storm window. If storm catches you in-park, duck into an indoor ride, show, or restaurant and wait it out.",
        indoorOptions: [
          "Epic Universe: Le Cirque Arcanus show, Ministry of Magic rides, Dark Universe indoor attractions",
          "IOA: Forbidden Journey, Spider-Man, Jurassic World indoor queue areas",
          "USF: Gringotts, Despicable Me, Transformers, Mummy — all fully indoor"
        ]
      },
      {
        label: "Storm delays / ride closures",
        plan: "Outdoor coasters close in lightning (VelociCoaster, Hulk, Dragon Racer's Rally, Stardust Racers). Wait it out indoors — Florida storms usually clear within 30–60 min. Check Universal app for real-time ride status. Use time for a sit-down snack, show, or wand spell hunting."
      },
      {
        label: "All-day rain (rare but possible)",
        plan: "Chill-vibe rules apply: if the family is miserable, leave. Indoor-heavy day is still possible — all three parks have significant covered/indoor content. Water rides become irrelevant — simplifies the day. Atlantic, Mythos, and Leaky Cauldron all work fine in rain."
      }
    ],
    generalRules: [
      "Ponchos on before leaving the midday retreat — don't wait until you're already wet",
      "Lightning = wait it out. Parks typically need 30 min clear before reopening outdoor attractions",
      "Water rides in rain: fine to do — you're wet either way. Skip only during active lightning.",
      "Check the Universal app — Jennifer's job. Ride closures show up in real time.",
      "Storms are usually short. A shelter break in Three Broomsticks or Diagon Alley with a Butterbeer is not a loss."
    ]
  },

  accessories: {
    wands: {
      type: "Gen 2 interactive wands (recommended)",
      price: "~$85 each",
      whereToBuy: "Epic Universe — Cosme Acajor's shop, Ministry of Magic area",
      buyWhen: "Friday afternoon during the Wizarding World block (~4:30pm)",
      whyThen: "Buying Friday gives the family all 3 park days to use them across all Wizarding World locations",
      worksIn: ["Epic Universe (Ministry of Magic)", "IOA (Hogsmeade)", "USF (Diagon Alley)"],
      spellLocations: "Look for bronze medallions embedded in the ground near shop windows — the wand box includes a map",
      who: "Family decision — Jasper and Sterling are the primary users"
    },
    powerUpBands: {
      price: "~$45 each",
      who: "Jasper and Sterling (2 bands = ~$90)",
      warnings: [
        "⚠️ Purchase online at shopuniversal.com before the trip",
        "⚠️ Set up Universal app accounts at home before departure — avoids in-park Wi-Fi friction",
        "Link bands to Universal app accounts before arriving"
      ],
      usedFor: "Coin-collecting and interactive play throughout Super Nintendo World at Epic Universe"
    },
    costTable: [
      { item: "Parking (Epic Universe, Fri)", est: "~$30/day", notes: "IOA/USF parking covered by Hard Rock stay" },
      { item: "Lockers (if needed)", est: "$10–20/day", notes: "Belt bag hack avoids most of this" },
      { item: "Wands (2 at ~$85)", est: "~$170", notes: "Buy Friday at Epic's Ministry of Magic" },
      { item: "Power-Up Bands (×2)", est: "~$90", notes: "For Jasper + Sterling; buy online before trip" },
      { item: "Grocery run (Thu)", est: "~$150–200", notes: "Covers full stay — breakfasts, lunches, Monday" },
      { item: "Merchandise / souvenirs", est: "Budget separately", notes: "1 big + 1 small per kid recommended" },
      { item: "In-park photos", est: "Variable", notes: "MyUniversalPhotos pass = unlimited option" },
      { item: "Ponchos (×4)", est: "~$5–10 each at home", notes: "Buy before leaving NYC — in-park is ~$15 each" }
    ],
    beltBagHack: "A small belt bag / fanny pack worn on the front slides under lap bars and between shoulder harnesses on most rides — accepted on most attractions, avoids locker fees entirely. One per adult recommended.",
    souvenirStrategy: "Set expectations before entering any park: each kid gets one big item (wand is already planned) and one smaller souvenir. Prevents the 'can I get this?' loop at every shop.",
    universalApp: [
      "Download and set up before the trip — in-park Wi-Fi is unreliable for initial account setup",
      "Live wait times, show schedules, mobile ordering, real-time ride status",
      "Jennifer monitors wait times in-park for afternoon return planning",
      "Mobile ordering: place order 15–20 min before you want to eat"
    ]
  },

  tips: {
    categories: [
      {
        title: "Epic Universe — Fri 5/22",
        items: [
          "Target Ministry of Magic first at rope drop — lowest waits at open, fills fast",
          "Battle at the Ministry is the anchor ride; hit it before lines build",
          "Save Super Nintendo World for the 2:30pm+ return — waits drop significantly, great nighttime atmosphere",
          "Epic Universe is brand new (opened May 2025) — ride downtime can be unpredictable. If a ride is down, move to the next anchor and check back.",
          "Epic's nighttime atmosphere is a highlight — lighting, projections, and ambiance change after dark. Worth staying for part of the evening.",
          "Dragon Racer's Rally and the Untrainable Dragon show are solid evening anchors"
        ]
      },
      {
        title: "Islands of Adventure — Sat 5/23",
        items: [
          "Arrive at Hard Rock by 7:45am, get room keys, be at IOA turnstiles by 8:00am",
          "Go straight to Hagrid's Motorbike — no Express Pass exists for this ride, ever. EPA is the only way to get a short wait.",
          "After Hagrid's, the rest of the morning is Express Pass territory (Kong, Spider-Man, Dr. Doom's, VelociCoaster, Hulk)",
          "Hogsmeade: get Butterbeer at the indoor bar (Three Broomsticks / Hog's Head) — significantly shorter lines than outdoor carts",
          "Wand spells: look for bronze medallions in the ground near shop windows",
          "Forbidden Journey and Flight of the Hippogriff are both Express Pass eligible"
        ]
      },
      {
        title: "Universal Studios Florida — Sun 5/24",
        items: [
          "Check out of Hard Rock at 8:00am, leave bags with bell desk, walk directly to USF",
          "Go straight to Diagon Alley: Escape from Gringotts — highest demand ride at open",
          "Hogwarts Express: do BOTH directions — USF→IOA and IOA→USF tell completely different stories. Requires Park-to-Park ticket.",
          "Best to do Hogwarts Express in the afternoon when Gringotts waits have settled",
          "Butterbeer fudge in Diagon Alley is a USF exclusive — worth picking up",
          "Indoor Diagon Alley Butterbeer bar avoids outdoor cart lines"
        ]
      },
      {
        title: "Ride Backup Plans",
        items: [
          "Tech-heavy rides go down — especially newer ones at Epic Universe",
          "If Hagrid's is down at rope drop: pivot to VelociCoaster, return to Hagrid's when it reopens",
          "If Ministry of Magic is down: go to Nintendo World first, check back",
          "If multiple Epic rides are down: The Untrainable Dragon show is an easy, reliable crowd-pleaser",
          "Universal app shows real-time ride status — check before committing to a long walk"
        ]
      },
      {
        title: "Money & Logistics",
        items: [
          "Belt bag / fanny pack worn on front: fits under lap bars on most rides, avoids $10–20/day in locker fees",
          "One locker for the group (not one per person) if needed — keeps costs down",
          "Butterbeer: always go to the indoor bar location, not the outdoor cart — dramatically shorter lines",
          "Mobile order 15–20 min before eating — skips counter queues",
          "Freestyle Soda machines have unlisted secret flavors — hold the home button and tap the Coke logo for access",
          "Ride wait timing: first 90 min = shortest waits; 11am–2pm = peak; after 4pm waits start dropping again"
        ]
      }
    ]
  },

  actionItems: {
    todo: [
      { id: "ai-1", text: "Verify park tickets cover Epic Universe — standard 3-Day Park-to-Park may only cover USF + IOA; Epic Universe may require separate admission. Check ticket attachment email (OI-7A8VR8F7T6)." },
      { id: "ai-2", text: "Call Hard Rock Hotel — confirm early room key / Express Pass issuance on Saturday morning bag drop (before room is ready)" },
      { id: "ai-3", text: "Measure Sterling's height — confirm he clears Incredible Hulk (54\" minimum, he is exactly at minimum). Wear thick-soled sneakers on IOA day." },
      { id: "ai-4", text: "Purchase Power-Up Bands for Jasper and Sterling at shopuniversal.com (~$45 each)" },
      { id: "ai-5", text: "Download Universal app and set up accounts for the family at home (not in-park)" },
      { id: "ai-6", text: "Confirm JetBlue terminal at MCO — MCO has two separate terminals, confirm before driving in on Monday" },
      { id: "ai-7", text: "Buy ponchos before leaving NYC (cheaper than in-park)" },
      { id: "ai-8", text: "Plan grocery list for Publix/Walmart run Thursday night (covers all timeshare breakfasts, lunches, and Monday)" }
    ],
    done: [
      { id: "ad-1", text: "Book Mythos restaurant ✅ Sat 5/23 at 4:15pm · Booking #639120237617647104" },
      { id: "ad-2", text: "Book Atlantic restaurant ✅ Fri 5/22 at 7:00pm · Booking #639120252710358272" },
      { id: "ad-3", text: "Book Hard Rock Hotel ✅ OI-7A8VR8F7T6 · Sat 5/23–Sun 5/24" },
      { id: "ad-4", text: "Book JetBlue flights ✅ KNREIZ · HPN↔MCO" },
      { id: "ad-5", text: "Book Budget car rental ✅ 37111644US3" },
      { id: "ad-6", text: "Book Hilton Grand Vacations timeshare ✅ RCI 559466785" }
    ]
  }

};
