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
      { name: "Jennifer Fox", role: "Wife / Mom", notes: "Travel stress triggers easily — chill vibe is the priority. Park job: monitor Universal app for wait times and show schedules." },
      { name: "Jasper Fox", role: "Son, age 13", notes: 'Height: 4\'9" (57") — clears all rides' },
      { name: "Sterling Fox", role: "Son, age 10", notes: 'Height: 4\'6" (54") — at Hulk minimum; wear thick-soled sneakers Saturday' }
    ],
    chillRules: [
      { number: 1, title: "Rest Rule", text: "If someone is tired, stop. No pushing through. Midday retreat is mandatory, not optional." },
      { number: 2, title: "Food/Drink Rule", text: "Stop and eat/drink before anyone is starving or dehydrated. Don't wait until it's a problem." },
      { number: 3, title: "Bathroom Rule", text: "Proactive group stops every ~90 min. Everyone goes every time, whether they think they need to or not." },
      { number: 4, title: "No FOMO Rule", text: "3 must-dos and 4–6 nice-to-dos per day. Everything else is a bonus. No guilt about skipping anything." },
      { number: 5, title: "Daily Rhythm", text: "Arrive early at park open → leave by ~12:30pm → eat/rest/pool → return ~2:30pm when crowds thin." }
    ],
    philosophy: [
      "Identify 3 must-dos and 4–6 nice-to-dos per day",
      "If you hit all 3 must-dos, the day is a success — everything else is gravy",
      "Resist the urge to schedule every hour",
      "Jennifer's app monitoring replaces rigid scheduling with real-time decision-making",
      "No ride is worth a meltdown or a burned-out afternoon"
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
          { time: "4:05pm", activity: "Flight departs HPN (JetBlue 0495)" },
          { time: "6:59pm", activity: "Arrive MCO. Pick up Budget car (conf. 37111644US3)." },
          { time: "~8:00pm", activity: "Stop at Publix or Walmart en route to timeshare. Full grocery run." },
          { time: "~9:00pm", activity: "Check into Hilton Grand Vacations SeaWorld (RCI 559466785)." },
          { time: "Evening", activity: "Easy dinner from groceries. Early bedtime — target 9:30–10pm." }
        ],
        mustDos: [],
        niceToDos: [],
        notes: "Grocery run covers all timeshare breakfasts, lunches, snacks, and Monday morning. Don't skip this stop."
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
          { time: "7:15am", activity: "Drive to Epic (~10 min). Queue at turnstiles before open." },
          { time: "Rope drop", activity: "Sprint to Super Nintendo World → Mario Kart: Bowser's Challenge first" },
          { time: "Morning", activity: "Yoshi's Adventure → Stardust Racers → Isle of Berk → Hiccup's Wing Gliders" },
          { time: "11:30am", activity: "Snack + bathroom stop" },
          { time: "12:00pm", activity: "Leave Epic. Timeshare lunch + pool + rest." },
          { time: "2:30pm", activity: "Return to Epic: Wizarding World (Battle at the Ministry) → Le Cirque Arcanus show → Dark Universe" },
          { time: "5:30pm", activity: "Dinner at Mead Hall (Isle of Berk)" },
          { time: "After dinner", activity: "The Untrainable Dragon show → Dragon Racer's Rally → re-rides" },
          { time: "8:30pm", activity: "Drive back to timeshare" }
        ],
        mustDos: ["Mario Kart", "Battle at the Ministry", "Stardust Racers"],
        niceToDos: ["Yoshi's Adventure", "Wing Gliders", "Monsters Unchained", "Dragon Racer's Rally", "Shows"],
        dining: { name: "Mead Hall", time: "~5:30pm", location: "Isle of Berk, Epic Universe", confirmed: false }
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
          { time: "7:00am", activity: "Check out of timeshare. Drive-through or grab-and-go breakfast en route." },
          { time: "7:45am", activity: "Arrive Hard Rock. Drop bags with bell desk. Get room keys (= Express Pass + EPA activated)." },
          { time: "8:00am", activity: "IOA turnstiles for EPA. Straight to Hagrid's (no Express Pass — rope drop only)" },
          { time: "Morning", activity: "VelociCoaster → Hulk → Dr. Doom's → Kong → Spider-Man (all Express Pass)" },
          { time: "12:00pm", activity: "Leave IOA. Walk to Hard Rock. Check in / pool / lunch." },
          { time: "2:30pm", activity: "Return to IOA: Hogsmeade (Forbidden Journey · Flight of the Hippogriff · wands · Butterbeer)" },
          { time: "4:15pm", activity: "Mythos dinner ✅ reservation confirmed" },
          { time: "6:30pm", activity: "Water rides: Dudley Do-Right → Bilge-Rat Barges → Jurassic River Adventure" },
          { time: "8:30pm", activity: "Walk back to Hard Rock" }
        ],
        mustDos: ["Hagrid's (rope drop)", "VelociCoaster", "Hogsmeade / Forbidden Journey"],
        niceToDos: ["Hulk", "Dr. Doom's", "Flight of the Hippogriff", "Water rides", "Spider-Man"],
        dining: { name: "Mythos", time: "4:15pm", location: "Islands of Adventure", confirmed: true }
      },
      {
        dayNumber: 4,
        date: "2026-05-24",
        label: "Universal Studios Florida",
        park: "Universal Studios Florida",
        parkEmoji: "🎬",
        perks: { epa: true, expressPass: true },
        perkNote: "EPA + Unlimited Express Pass via Hard Rock room key",
        schedule: [
          { time: "7:30am", activity: "Check out of Hard Rock. Leave bags with bell desk. Breakfast at hotel." },
          { time: "8:00am", activity: "USF turnstiles for EPA. Straight to Diagon Alley → Gringotts" },
          { time: "Morning", activity: "Despicable Me → Villain-Con → Transformers → Revenge of the Mummy (all Express Pass)" },
          { time: "12:00pm", activity: "Leave USF. Walk to CityWalk for midday lunch + rest." },
          { time: "2:30pm", activity: "Return to USF: Hogwarts Express USF → IOA (then back — two different stories)" },
          { time: "4:30pm", activity: "Simpsons Ride + Springfield" },
          { time: "5:30pm", activity: "Dinner: Jasper's choice — Cowfish or Antojitos at CityWalk" },
          { time: "8:30pm", activity: "Collect bags from Hard Rock bell desk. Drive to Hilton Grand Vacations SeaWorld." }
        ],
        mustDos: ["Gringotts (rope drop)", "Hogwarts Express (both directions)", "Revenge of the Mummy"],
        niceToDos: ["Villain-Con Minion Blast", "Transformers", "Simpsons Ride", "Diagon Alley wand spots"],
        dining: { name: "Jasper's Choice (Cowfish or Antojitos)", time: "~5:30pm", location: "CityWalk", confirmed: false }
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
          { time: "Optional", activity: "1 hr at CityWalk for last-minute souvenirs." },
          { time: "9:00am", activity: "Leave timeshare." },
          { time: "~10:00am", activity: "Return Budget car at MCO." },
          { time: "~10:15am", activity: "Enter MCO. Clear security 2.5+ hrs before 12:05pm departure." },
          { time: "12:05pm", activity: "JetBlue 0194 departs MCO → HPN (arrives 2:57pm)." }
        ],
        mustDos: [],
        niceToDos: ["CityWalk souvenirs"],
        notes: "Timeshare checkout is Tuesday 5/26 — bags and room are still yours Monday morning, no rush."
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
        "⚠️ REAL ID or passport required",
        "⚠️ MCO has two separate terminals — confirm JetBlue's terminal before Monday drop-off"
      ]
    },
    car: {
      confirmation: "37111644US3",
      vendor: "Budget",
      vehicle: "Kia Soul or similar · compact · automatic · unlimited mileage",
      pickup: "Thu 5/21 at 6:59pm · Budget at MCO, 1 Jeff Fuqua Blvd, Orlando FL 32827",
      dropoff: "Mon 5/25 at ~10:00am · same location",
      total: "$243.20 (pay at pick-up — not prepaid)",
      notes: ["⚠️ Leave timeshare by 9:00am Monday at the latest"]
    },
    timeshare: {
      confirmation: "RCI 559466785",
      name: "Hilton Grand Vacations at SeaWorld",
      checkin: "Thu 5/21",
      checkout: "Tue 5/26 (one day after flight — no Monday morning rush)",
      unit: "3-bedroom · max 8 guests · full kitchen",
      location: "South Orlando — 5–10 min drive to Epic Universe",
      notes: ["No hotel breakfast — all meals at timeshare are in-room", "Pool available for midday retreats"]
    },
    hardRock: {
      confirmation: "OI-7A8VR8F7T6",
      name: "Hard Rock Hotel",
      checkin: "Sat 5/23",
      checkout: "Sun 5/24 (one night only)",
      room: "Standard 2 Queen Beds · 2 adults + 2 children",
      keyPerk: "Unlimited Express Pass for IOA + USF — activated on room key",
      location: "Walking distance to both parks via CityWalk (~5 min)",
      notes: ["⚠️ Call ahead to confirm room keys can be issued when bags are dropped Saturday morning before room is ready"]
    },
    tickets: {
      confirmation: "OI-7A8VR8F7T6",
      type: "3-Day Park-to-Park",
      guests: "Julian · Jennifer · Jasper · Sterling",
      startDate: "Fri 5/22",
      window: "Valid any 3 days within a 7-day window",
      includes: "Hogwarts Express both directions (requires park-to-park)",
      notes: ["⚠️ Verify whether tickets cover Epic Universe — check ticket attachment email"]
    }
  },

  dining: {
    confirmed: [
      { name: "Mythos", date: "Saturday 5/23", time: "4:15pm", location: "Islands of Adventure", status: "✅ Confirmed" },
      { name: "Mead Hall", date: "Friday 5/22", time: "~5:30pm", location: "Epic Universe (Isle of Berk)", status: "No reservation needed" }
    ],
    planned: [
      { name: "Jasper's Choice: Cowfish or Antojitos", date: "Sunday 5/24", time: "~5:30pm", location: "CityWalk", note: "Jasper decides" },
      { name: "CityWalk midday (flexible)", date: "Sunday 5/24", time: "~12:00pm", location: "CityWalk", note: "Voodoo Doughnut · Bread Box · Five Guys · Antojitos · Toothsome Chocolate Emporium" }
    ],
    inRoom: [
      "All timeshare breakfasts (Friday + Monday at minimum)",
      "Midday lunches on retreat days",
      "Stock from Publix/Walmart run Thursday night"
    ],
    butterBeer: {
      bestFormat: "Frozen > cold > hot",
      alsoAvailable: "Ice cream (cup or float) · crêpe",
      indoorLocations: [
        { name: "Three Broomsticks", location: "Hogsmeade, IOA", note: "Shorter lines than outdoor carts" },
        { name: "Leaky Cauldron", location: "Diagon Alley, USF", note: "Shorter lines than outdoor carts" },
        { name: "Hog's Head pub", location: "Behind Leaky Cauldron", note: "Quieter, darker, great for a calmer stop" }
      ],
      budget: "~$8–12 per person per Wizarding World visit"
    },
    tips: [
      "Mobile order via Universal app 15–20 min before you want to eat — skips the line",
      "Avoid peak hours: 12–1pm and 5–7pm at quick service get slammed",
      "Budget: ~$65/person/day quick service; ~$85–100 with one sit-down",
      "Leaky Cauldron: Good quality for a theme park — try the Butterbeer-glazed chicken tenders",
      "Mead Hall: Full themed dining experience, part of the HTTYD world — worth the time",
      "Mythos: Considered the best full-service restaurant in any theme park. Go slow, enjoy it."
    ]
  },

  perks: {
    byDay: [
      { day: "Fri 5/22", park: "Epic Universe", epa: false, expressPass: false },
      { day: "Sat 5/23", park: "Islands of Adventure", epa: true, epaNote: "Hard Rock (1 hr early)", expressPass: true, expressPassNote: "Unlimited (room key)" },
      { day: "Sun 5/24", park: "Universal Studios Florida", epa: true, epaNote: "Hard Rock (1 hr early)", expressPass: true, expressPassNote: "Unlimited (room key)" }
    ],
    quickRef: [
      { label: "Epic Universe", day: "Friday 5/22", firstRide: "Mario Kart", midday: "Timeshare (pool)", dinner: "Mead Hall ~5:30pm", travel: "5–10 min drive" },
      { label: "Islands of Adventure", day: "Saturday 5/23", firstRide: "Hagrid's Motorbike", midday: "Hard Rock Hotel", dinner: "Mythos 4:15pm ✅", travel: "Walk from Hard Rock" },
      { label: "Universal Studios FL", day: "Sunday 5/24", firstRide: "Escape from Gringotts", midday: "CityWalk", dinner: "CityWalk (Jasper's choice)", travel: "Walk from Hard Rock" }
    ],
    epaRules: [
      "Express Pass does NOT cover Epic Universe",
      "Hard Rock EPA may or may not cover Epic Universe — verify with resort",
      "Ministry of Magic at Epic does NOT offer EPA",
      "For EPA days (Sat + Sun): Arrive at Hard Rock gates 1 full hour before EPA start time — not at EPA start"
    ],
    campusGeography: [
      { label: "CityWalk Campus", note: "USF + IOA — walking distance from Hard Rock Hotel" },
      { label: "Epic Universe Campus", note: "Separate location, ~5 miles away — budget 45–60 min total travel time, not 15–20 min" },
      { label: "Epic from Timeshare", note: "~10 min drive" }
    ],
    bagStorage: "Leave bags at Hard Rock bell desk all day Sunday rather than driving to the timeshare. Keeps the day car-free. Collect bags before driving back Sunday evening."
  },

  heights: {
    sterling: {
      heightInches: 54,
      heightDisplay: "4'6\" (54\")",
      note: "Measure Sterling in the shoes he'll wear — thick-soled sneakers can add ~½ inch. The height boards at each ride entrance are the official measurement.",
      byPark: {
        epicUniverse: [
          { ride: "Mario Kart: Bowser's Challenge", min: 40, status: "ok" },
          { ride: "Yoshi's Adventure", min: 36, status: "ok" },
          { ride: "Hiccup's Wing Gliders", min: 40, status: "ok" },
          { ride: "Battle at the Ministry of Magic", min: 40, status: "ok" },
          { ride: "Stardust Racers", min: 48, status: "ok" },
          { ride: "Dragon Racer's Rally", min: 48, status: "ok" },
          { ride: "Monsters Unchained", min: 48, status: "ok" }
        ],
        islandsOfAdventure: [
          { ride: "Hagrid's Motorbike Adventure", min: 48, status: "ok" },
          { ride: "Forbidden Journey", min: 48, status: "ok" },
          { ride: "Flight of the Hippogriff", min: 36, status: "ok" },
          { ride: "VelociCoaster", min: 51, status: "warn", warnNote: "Measure him in park shoes" },
          { ride: "Incredible Hulk", min: 54, status: "danger", warnNote: "Exactly at minimum — thick-soled sneakers required" },
          { ride: "Dr. Doom's Fearfall", min: 52, status: "warn", warnNote: "Measure him in park shoes" }
        ],
        universalStudios: [
          { ride: "Escape from Gringotts", min: 42, status: "ok" },
          { ride: "Revenge of the Mummy", min: 48, status: "ok" },
          { ride: "Transformers", min: 40, status: "ok" },
          { ride: "Despicable Me / Villain-Con", min: 40, status: "ok" }
        ]
      },
      borderlineRides: [
        { ride: "VelociCoaster", min: 51, park: "IOA", action: "Measure Sterling at home in his park sneakers" },
        { ride: "Incredible Hulk", min: 54, park: "IOA", action: "He's exactly at minimum. Thick-soled sneakers are non-negotiable on Saturday." },
        { ride: "Dr. Doom's Fearfall", min: 52, park: "IOA", action: "Measure Sterling at home in his park sneakers" }
      ],
      childSwap: "Available at all three borderline rides. One adult rides while the other waits with Sterling; then they swap without waiting in the full line again. Ask a team member at the ride entrance."
    }
  },

  weather: {
    overview: "Florida in May = afternoon thunderstorms, almost daily. They typically build 2–4pm, last 30–60 min, then clear. The midday retreat rhythm already dodges the worst of it — the main risk is the 2:30pm return getting caught in the tail end of a storm.",
    reality: [
      "Temps: 85–92°F highs, very humid",
      "Memorial Day weekend is the very start of Florida's rainy season",
      "Pattern: morning is almost always fine — storms build in the afternoon",
      "Lightning is the bigger issue than rain — it will close outdoor rides and sometimes evacuate sections of the park",
      "Storms are usually short. Wait them out; the park doesn't go away."
    ],
    whatToPack: [
      "Lightweight ponchos ×4 — buy at Target/Walmart before trip (~$5 each); in-park is ~$15 each",
      "Small handheld fans",
      "Cooling towels",
      "Sunscreen (reapply after rain)",
      "Small dry bag or waterproof pouch for phones/wallets — especially Saturday water rides"
    ],
    byDay: [
      {
        dayLabel: "Friday 5/22 — Epic Universe",
        retreatOption: "Timeshare is 5–10 min away — easy. Head back, wait it out, return when it clears.",
        note: "Epic Universe is mostly outdoors — 8 of 11 rides close in lightning. If there's a long storm or all-day rain, consider swapping Friday and Sunday (USF has the most indoor rides).",
        contingencies: [
          { planned: "Mario Kart: Bowser's Challenge", ifRaining: "✅ Indoor — ride it regardless" },
          { planned: "Stardust Racers (outdoor)", ifRaining: "Swap to Battle at the Ministry of Magic (indoor)" },
          { planned: "Hiccup's Wing Gliders (outdoor)", ifRaining: "Swap to Monsters Unchained (indoor) — or shelter in Mead Hall early" },
          { planned: "Dragon Racer's Rally (outdoor coaster)", ifRaining: "Wait it out under Mead Hall cover; re-ride after storm clears" },
          { planned: "The Untrainable Dragon show (outdoor)", ifRaining: "Show likely cancelled — swap to Le Cirque Arcanus (check if indoor/covered)" },
          { planned: "Dark Universe (outdoor elements)", ifRaining: "Focus on Monsters Unchained (indoor) and character meet-and-greets" }
        ]
      },
      {
        dayLabel: "Saturday 5/23 — Islands of Adventure",
        retreatOption: "Hard Rock Hotel is a 5-min walk — ideal. Duck in, grab lunch, wait it out, return when clear. This is the easiest rain day of the three.",
        note: "Hard Rock is your ace card Saturday. If it's a real storm, walk back, grab lunch early, let the kids swim in the hotel pool, and return at 2:30pm as planned.",
        contingencies: [
          { planned: "Hagrid's Motorbike (outdoor, EPA)", ifRaining: "⚠️ May close in lightning — if it does, go to VelociCoaster or Forbidden Journey (indoor). Return to Hagrid's when weather clears — this is the one you need." },
          { planned: "VelociCoaster (outdoor)", ifRaining: "Swap to Forbidden Journey (indoor, same Wizarding World area)" },
          { planned: "Incredible Hulk (outdoor)", ifRaining: "Swap to Spider-Man (indoor) or Kong (indoor)" },
          { planned: "Dr. Doom's Fearfall (outdoor)", ifRaining: "Skip — shelter nearby; come back after storm" },
          { planned: "Water rides — Dudley, Bilge-Rat, Jurassic (Sat evening)", ifRaining: "✅ You're getting wet anyway — rain makes these more fun. Only skip if lightning is active." },
          { planned: "Hogsmeade exploration", ifRaining: "Duck into Three Broomsticks for Butterbeer — heavily covered inside" }
        ]
      },
      {
        dayLabel: "Sunday 5/24 — Universal Studios Florida",
        retreatOption: "No Hard Rock room. Options: (1) Stay in park — USF is most indoor-friendly. (2) Duck into Diagon Alley — fills 45–60 min. (3) CityWalk — covered dining and shops. (4) Timeshare ~20 min drive — use only for longer all-afternoon storm.",
        note: "Sunday is your most rain-resilient day. Between Gringotts, Mummy, Transformers, Villain-Con, and Diagon Alley, you can fill a full morning with indoor rides even in a downpour — all on Express Pass.",
        contingencies: [
          { planned: "Escape from Gringotts (indoor)", ifRaining: "✅ Indoor — ride it regardless. Perfect rain opener." },
          { planned: "Revenge of the Mummy (indoor)", ifRaining: "✅ Indoor — ride it regardless" },
          { planned: "Transformers (indoor)", ifRaining: "✅ Indoor — ride it regardless" },
          { planned: "Despicable Me / Villain-Con (indoor)", ifRaining: "✅ Indoor — ride it regardless" },
          { planned: "Hollywood Rip Ride Rockit (outdoor)", ifRaining: "Skip during active rain — ride later if it clears" },
          { planned: "Hogwarts Express", ifRaining: "✅ Fine in rain — the ride itself is indoors" },
          { planned: "Simpsons Ride + Springfield", ifRaining: "Duck into Simpsons Ride (indoor) then shelter in Fast Food Boulevard (covered food hall)" },
          { planned: "Diagon Alley exploration", ifRaining: "✅ Heavily covered — ideal rain shelter. Do your wand interactions here." }
        ]
      }
    ],
    generalRules: [
      "Ponchos on before leaving the midday retreat — don't wait until you're already wet",
      "Lightning = wait it out. Parks typically need 30 min clear before reopening outdoor attractions",
      "Water rides in rain: Fine to do — you're wet either way. Skip only during active lightning.",
      "Check the Universal app — Jennifer's job. Ride closures and reopenings show up in real time.",
      "Storms are usually short. A 45-min shelter break in Three Broomsticks or Diagon Alley with a Butterbeer is not a loss. It's part of the day."
    ]
  },

  accessories: {
    wands: {
      type: "Gen 2 interactive wands (~$85 each) — recommended",
      whereToBuy: "Ministry of Magic at Epic Universe (Cosme Acajor's shop) — buy Friday to maximize use across all 3 Wizarding Worlds",
      worksIn: ["Epic Universe (Ministry of Magic)", "IOA (Hogsmeade)", "USF (Diagon Alley)"],
      otherOptions: ["Standard interactive wands: ~$65", "Non-interactive: ~$55"],
      spellLocations: "Look for bronze medallions embedded in the ground near shop windows to find spell locations — the wand box includes a map"
    },
    powerUpBands: {
      price: "~$45 + tax each",
      who: "Jasper and Sterling only (2 bands = ~$90 + tax)",
      warnings: [
        "⚠️ Purchase online before the trip at shopuniversal.com",
        "⚠️ Set up Universal app accounts at home (not on park Wi-Fi)",
        "Link to Universal app before arriving"
      ],
      usedFor: "Coin-collecting, interactive challenges, digital leaderboard throughout Nintendo World"
    },
    costTable: [
      { item: "Parking (3 days)", est: "~$90–$105", notes: "~$30–35/day general · Preferred is $50+/day" },
      { item: "Gen 2 Wands", est: "~$85 each", notes: "Buy Friday at Epic's Ministry of Magic" },
      { item: "Power-Up Bands (×2)", est: "~$90", notes: "For Jasper + Sterling; buy online before trip" },
      { item: "Butterbeer", est: "~$8–12/person", notes: "Per Wizarding World visit" },
      { item: "Quick service meals", est: "~$65–100/person/day", notes: "Higher end includes one sit-down" },
      { item: "In-park photos", est: "$20–60/image", notes: "MyUniversalPhotos pass = unlimited" },
      { item: "Merchandise/souvenirs", est: "Budget separately", notes: "1 big + 1 small per kid = cleaner" },
      { item: "Ride lockers", est: "~$3–5/use", notes: "Belt bag hack avoids most of this" },
      { item: "Ponchos (×4)", est: "~$15 each in-park", notes: "Buy at Target/Walmart before leaving NYC" }
    ],
    beltBagHack: "A standard belt/fanny bag fits in your lap on most rides and stays with you — avoiding locker fees entirely on most attractions. Confirm at each ride entrance. Saves $10–20/day easily.",
    souvenirStrategy: "Set expectations before entering the parks: each kid gets one big item (wand is already planned) and one smaller souvenir. Knowing this upfront prevents the 'can I get this?' loop at every shop — a known Jennifer stress trigger worth getting ahead of."
  },

  tips: {
    categories: [
      {
        title: "Universal App",
        items: [
          "Download before leaving NYC — do not rely on park Wi-Fi",
          "Jennifer's job: monitor wait times and show schedules throughout the day",
          "Use for mobile ordering (place order 15–20 min before you want to eat)",
          "Set up accounts at home for all four family members, including linking Power-Up Bands",
          "Check app 1–2 weeks before the trip — Universal updates hours and EPA ride eligibility frequently"
        ]
      },
      {
        title: "EPA Strategy (Sat + Sun)",
        items: [
          "Arrive at Hard Rock gates 1 full hour before EPA start time — not at EPA start",
          "Pick up room keys Saturday morning when bags are dropped (call Hard Rock ahead to confirm)",
          "EPA opens the entire park early — but lines still form fast on the biggest rides"
        ]
      },
      {
        title: "Hagrid's Motorbike (IOA)",
        items: [
          "No Express Pass ever — rope drop Saturday is the only strategy",
          "Single rider line moves fast if Jasper and Julian want to go separately",
          "Worth every minute — widely considered the best themed ride in the world",
          "If it's down at rope drop, pivot to VelociCoaster and return to Hagrid's when it reopens"
        ]
      },
      {
        title: "Hogwarts Express",
        items: [
          "Two completely different theatrical experiences, one per direction",
          "USF → IOA: Escape from London story",
          "IOA → USF: Return to Hogwarts story",
          "Characters appear in your compartment — not just a train ride",
          "Requires Park-to-Park ticket; budget 45–60 min round trip including boarding",
          "Do both directions on Sunday"
        ]
      },
      {
        title: "Ride Backup Plans",
        items: [
          "Tech-heavy rides go down — especially newer ones at Epic Universe",
          "If Hagrid's is down: VelociCoaster first, return to Hagrid's",
          "If Ministry of Magic is down: go to Nintendo World first, pivot back",
          "If multiple Epic rides are down: The Untrainable Dragon show is an easy, reliable crowd-pleaser"
        ]
      },
      {
        title: "Butterbeer & Drinks",
        items: [
          "Three Broomsticks (inside) — Hogsmeade, IOA — shorter lines",
          "Leaky Cauldron (inside) — Diagon Alley, USF — shorter lines",
          "Hog's Head pub — quieter, darker, behind Leaky Cauldron; great calmer stop",
          "Outdoor carts have longer lines — skip them",
          "Freestyle soda machines have secret flavors — scroll all the way through before choosing"
        ]
      },
      {
        title: "Hidden Finds",
        items: [
          "Dark Universe roaming characters: Frankenstein's Monster & the Bride (coffin photo-op), Igor, The Invisible Man",
          "Bronze medallions in the ground near shop windows = wand spell locations",
          "Men in Black improv agents roam USF — unscripted, genuinely memorable for kids",
          "Wands bought Friday at Epic work in IOA and USF Wizarding Worlds too"
        ]
      },
      {
        title: "Money-Saving Hacks",
        items: [
          "Belt bag / fanny pack fits in your lap on most rides — avoids $3–5 locker fees per ride",
          "Indoor Butterbeer locations have shorter lines than outdoor carts",
          "Mobile order 15–20 min before eating — skips counter queues",
          "Each kid: one big item (wand) + one smaller souvenir — set expectation before entering parks"
        ]
      }
    ]
  },

  actionItems: {
    todo: [
      { id: "ai-1", text: "Verify park tickets cover Epic Universe — check ticket attachment email (OI-7A8VR8F7T6)" },
      { id: "ai-2", text: "Call Hard Rock Hotel — confirm room keys can be issued when bags are dropped Saturday morning before room is ready" },
      { id: "ai-3", text: 'Measure Sterling\'s height in the sneakers he\'ll wear at the parks — check: VelociCoaster (51"), Hulk (54"), Dr. Doom\'s (52")' },
      { id: "ai-4", text: "Purchase Power-Up Bands online for Jasper and Sterling at shopuniversal.com" },
      { id: "ai-5", text: "Set up Universal app accounts at home for all four family members" },
      { id: "ai-6", text: "Link Power-Up Bands to Universal app accounts before departure" },
      { id: "ai-7", text: "Download Universal app and explore mobile ordering ahead of time" },
      { id: "ai-8", text: "Order 4 ponchos from Amazon, or buy at Target/Walmart before leaving NYC" },
      { id: "ai-9", text: "Confirm JetBlue's terminal at MCO for Monday drop-off and departure (MCO has two separate terminals)" },
      { id: "ai-10", text: "Plan grocery list for Publix/Walmart run Thursday night (covers all timeshare breakfasts, lunches, and Monday)" }
    ],
    done: [
      { id: "ad-1", text: "Book Mythos restaurant — Saturday 5/23 at 4:15pm ✅" },
      { id: "ad-2", text: "Book Hard Rock Hotel — OI-7A8VR8F7T6, Sat 5/23 ✅" },
      { id: "ad-3", text: "Book JetBlue flights — KNREIZ ✅" },
      { id: "ad-4", text: "Book Budget car rental — 37111644US3 ✅" },
      { id: "ad-5", text: "Book Hilton Grand Vacations timeshare — RCI 559466785 ✅" },
      { id: "ad-6", text: "Purchase 3-Day Park-to-Park tickets ✅" }
    ]
  }

};
