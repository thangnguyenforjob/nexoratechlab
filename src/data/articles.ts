import { Article } from "@/lib/types";

export const articles: Article[] = [
  {
    slug: "best-laptops-2026",
    title: "Best Laptops 2026: Our Top Picks for Every Budget and Use Case",
    dek: "From the MacBook Air M5 to budget Chromebooks, here are the laptops actually worth your money this year.",
    excerpt:
      "We rounded up the best laptops of 2026 across every category — overall pick, Windows, gaming, budget, Chromebook, high-end, and 2-in-1.",
    category: "Best Picks",
    topic: "Laptops",
    author: "Ryan Bennett",
    date: "2026-08-24",
    readTime: "9 min read",
    gradient: ["#4f46e5", "#0ea5e9"],
    emoji: "💻",
    images: [
      {
        src: "https://www.apple.com/newsroom/images/2026/03/apple-introduces-the-new-macbook-air-with-m5/article/Apple-MacBook-Air-hero-260303_big.jpg.large.jpg",
        alt: "Apple MacBook Air with M5",
        credit: "Apple Newsroom",
        creditUrl:
          "https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5/",
      },
      {
        src: "https://press.asus.com/assets/w_3840,h_2160/47f31b6b-3fd5-4d38-8a7b-2fc2df922760/Zephyrus%20G1416_Scenario%20Rendering01.jpg",
        alt: "Asus ROG Zephyrus G14 gaming laptop",
        credit: "ASUS Pressroom",
        creditUrl: "https://press.asus.com/news/press-releases/rog-zephyrus-g14-g16-2026/",
      },
    ],
    sources: [
      {
        title: "Best laptops for 2026 — Engadget",
        url: "https://www.engadget.com/computing/laptops/best-laptops-120008636.html",
      },
    ],
    featured: true,
    content: [
      {
        body: [
          "Buying a laptop in 2026 means picking your way through more genuinely good options than at any point in the last decade. Apple's M5 chips have widened the gap with entry-level Windows machines, AMD and Intel have both pushed thin-and-light gaming laptops into genuinely portable territory, and Chromebooks have quietly become good enough that we stopped treating them as an afterthought.",
          "We tested across categories rather than crowning a single \"best laptop,\" because the honest answer to \"what's the best laptop\" is always \"it depends what you're doing with it.\" Here's where we landed.",
        ],
      },
      {
        heading: "Best overall: Apple MacBook Air M5",
        body: [
          "The MacBook Air M5 remains the easiest laptop to recommend to almost anyone. It's built around Apple's 10-core M5 chip, comes with 16GB to 24GB of unified memory and 512GB to 4TB of storage, and is available in 13.6-inch and 15-inch sizes.",
          "What makes it the pick isn't any single spec — it's that Apple has made a genuinely silent, fanless laptop that is powerful enough for light video editing, coding, and heavy multitasking, weighs 2.7 pounds, and lasts up to 18 hours on a charge. Starting price is $1,299 for the 13-inch model and $1,499 for the 15-inch.",
        ],
      },
      {
        heading: "Best Windows laptop: HP Omnibook Ultra",
        body: [
          "If you need Windows, the HP Omnibook Ultra is the one to get. It pairs Intel's Core Ultra 7 (up to Core Ultra X9) with a 14-inch, 4K OLED panel running at 120Hz, and HP quotes 28 to 34 hours of battery life depending on configuration.",
          "It's fast, the screen is genuinely gorgeous for both content creation and movie-watching, and the chassis stays impressively light. The one miss is the absence of an SD card reader, which will matter to photographers who'd rather not carry a dongle.",
        ],
      },
      {
        heading: "Best gaming laptop: Asus ROG Zephyrus G14",
        body: [
          "The Zephyrus G14 continues to be the gaming laptop we point people to when they want performance without hauling around a brick. This year's model runs an AMD Ryzen 9 8945HS alongside an RTX 4070, with 32GB of RAM and a 14-inch, 2,880 x 1,800 OLED display at 120Hz.",
          "Battery life on a gaming laptop is never going to compete with an ultrabook, but 10 hours of non-gaming use is respectable, and the unibody aluminum chassis and strong speakers make it feel like a premium machine rather than a gamer-aesthetic box.",
        ],
      },
      {
        heading: "Best budget pick: MacBook Neo",
        body: [
          "Apple's budget-tier MacBook Neo, built around the A18 Pro chip with 8GB of RAM and 256GB to 512GB of storage, starts at $699 and undercuts most comparably-priced Windows laptops on build quality and performance. The 13-inch Liquid Retina LCD panel isn't mini-LED, but at this price that's a reasonable trade for up to 16 hours of battery life.",
        ],
      },
      {
        heading: "Best Chromebook: Lenovo IdeaPad Flex 5",
        body: [
          "For anyone who lives mostly in a browser, the IdeaPad Flex 5 remains tremendous value: a 13th-gen Intel Core i3, 8GB of RAM, 128GB of storage, a 14-inch FHD touchscreen, and a 360-degree hinge that flips into tablet mode. Ten hours of battery life and a keyboard that doesn't feel like an afterthought round it out.",
        ],
      },
      {
        heading: "Best high-end pick: Apple MacBook Pro M5",
        body: [
          "For creative professionals, the MacBook Pro M5 — available in 14-inch and 16-inch sizes with up to 128GB of unified memory and a 120Hz Liquid Retina XDR display — is the machine to beat. The revamped GPU is noticeably faster in both benchmarks and real gaming performance than last year's model, and battery life stretches up to 24 hours.",
        ],
      },
      {
        heading: "Best 2-in-1: MSI Prestige 14 Flip AI+",
        body: [
          "MSI's Prestige 14 Flip AI+ pairs an Intel Core Ultra Series 3 chip with a 14-inch LCD or OLED panel, up to 64GB of RAM, and up to 30 hours of battery life, all in a 3-pound convertible chassis. It has enough graphical headroom for light gaming, which is unusual in this category.",
        ],
      },
      {
        heading: "How we picked",
        body: [
          "These recommendations reflect current-generation hardware and pricing as of late August 2026, based on our own testing and benchmarking as well as reporting from Engadget's laptop team. Prices and configurations shift often, so treat the numbers here as a starting point for comparison shopping rather than gospel.",
        ],
      },
    ],
  },
  {
    slug: "iphone-17-pro-max-review",
    title: "iPhone 17 Pro Max Review: The New Best iPhone, With One Big Trade-off",
    dek: "Apple's A19 Pro chip and a genuinely upgraded camera system make this the best iPhone yet — but the switch away from titanium is a real change in what you're paying for.",
    excerpt:
      "The iPhone 17 Pro Max brings a faster A19 Pro chip, a 48MP triple-camera system, and a bigger battery — but Apple swapped titanium for aluminum.",
    category: "Reviews",
    topic: "Phones",
    author: "Emily Carter",
    date: "2026-08-15",
    readTime: "7 min read",
    gradient: ["#f97316", "#db2777"],
    emoji: "📱",
    images: [
      {
        src: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg",
        alt: "iPhone 17 Pro Max camera system close-up",
        credit: "Apple Newsroom",
        creditUrl:
          "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
      },
      {
        src: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg",
        alt: "iPhone 17 Pro and Pro Max color lineup",
        credit: "Apple Newsroom",
        creditUrl:
          "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
      },
    ],
    rating: 8.6,
    pros: [
      "A19 Pro chip is a meaningful jump over the A18 Pro",
      "48MP main, telephoto, and ultra-wide cameras all shoot at full resolution",
      "4832mAh battery with genuinely fast 42W wired charging",
      "6.9-inch LTPO display hits 3000 nits peak brightness",
    ],
    cons: [
      "Aluminum replaces titanium, a downgrade in perceived premium-ness",
      "Starting price has crept up again",
      "42W wired charging still trails the fastest Android phones",
    ],
    sources: [
      {
        title: "Apple iPhone 17 Pro Max Review — GSMArena",
        url: "https://gsmarena.com/apple_iphone_17_pro_max-review-2884.php",
      },
    ],
    featured: true,
    content: [
      {
        body: [
          "Every iPhone Pro review for the last three years has opened the same way: titanium this, titanium that. This year Apple ended that streak by moving the iPhone 17 Pro Max back to an aluminum unibody frame, and it's the single biggest story about a phone that is, in almost every other respect, a genuine step forward.",
        ],
      },
      {
        heading: "Design and display",
        body: [
          "The iPhone 17 Pro Max carries a 6.9-inch LTPO Super Retina XDR OLED display running at 120Hz, with peak brightness rated at 3000 nits — enough to stay readable in direct sunlight, which is where most flagship phones still struggle. The aluminum build is lighter and manages heat better than titanium did, which matters more than it sounds during sustained gaming or 4K video capture, but it's a harder sell to anyone who bought into Apple's premium-materials pitch on the last two generations.",
        ],
      },
      {
        heading: "Cameras",
        body: [
          "The rear camera system is a genuine upgrade: a 48MP main sensor at f/1.6, a 48MP telephoto with 4x optical zoom at f/2.8, and a 48MP ultra-wide at f/2.2 — meaning, for the first time, all three rear lenses shoot at full 48MP resolution rather than defaulting to smaller binned outputs on the secondary lenses. The front camera moves to 18MP with multi-aspect capture, which noticeably helps selfie framing without having to rotate the phone.",
        ],
      },
      {
        heading: "Performance and battery",
        body: [
          "Apple's A19 Pro chip, built on a 3nm process with a 6-core GPU, is the expected generational bump — comfortably ahead of the A18 Pro in sustained workloads, and it's paired with 12GB of RAM across every storage tier.",
          "The 4832mAh battery is the largest Apple has put in an iPhone, and 42W wired charging gets you to 50% in about 20 minutes. Wireless MagSafe charging tops out at 25W, reaching the same 50% mark in roughly 30 minutes. Neither number leads the industry, but real-world battery life through a full day of heavy use was consistently strong in our testing.",
        ],
      },
      {
        heading: "Price and verdict",
        body: [
          "Storage options run from 256GB up to 2TB, with US pricing starting at $1,199 for the base 256GB Pro Max configuration. That's a premium price for a phone that, materially speaking, is no longer using the most premium material Apple has offered on this line.",
          "Taken as a whole, though, the iPhone 17 Pro Max is the best iPhone Apple has made: faster, better cameras, brighter screen, bigger battery. Whether the aluminum frame bothers you is a personal question — for most buyers upgrading from a two- or three-year-old iPhone, it won't be the deciding factor.",
        ],
      },
    ],
  },
  {
    slug: "sony-wf-1000xm6-review",
    title: "Sony WF-1000XM6 Review: The Noise-Cancelling Earbuds to Beat",
    dek: "Sony's new QN3e chip pushes active noise cancellation further ahead of the competition, and battery life gets a meaningful bump too.",
    excerpt:
      "Sony's WF-1000XM6 earbuds bring a faster QN3e noise-cancelling chip, 8 hours of earbud playback, and 24 hours total with the case.",
    category: "Reviews",
    topic: "Audio",
    author: "James Whitfield",
    date: "2026-07-30",
    readTime: "6 min read",
    gradient: ["#0f172a", "#1e293b"],
    emoji: "🎧",
    images: [
      {
        src: "https://s3.amazonaws.com/pr-prd-live-dolphin-upload-cfn/sites/268/2026/02/12162441/9.-WF-1000XM6-Platinum-Silver-and-Black-1024x683.jpg",
        alt: "Sony WF-1000XM6 earbuds in Platinum Silver and Black",
        credit: "Sony Electronics press materials",
        creditUrl:
          "https://www.sony.com.sg/pressrelease?prName=sony-launches-wf-1000xm6-truly-wireless-earbuds-the-best-noise-cancelling-with-premium-sound",
      },
      {
        src: "https://s3.amazonaws.com/pr-prd-live-dolphin-upload-cfn/sites/268/2026/02/12162524/21.-WF-1000XM6-Platinum-Silver-Wearability-1024x683.jpg",
        alt: "Sony WF-1000XM6 earbuds worn in-ear",
        credit: "Sony Electronics press materials",
        creditUrl:
          "https://www.sony.com.sg/pressrelease?prName=sony-launches-wf-1000xm6-truly-wireless-earbuds-the-best-noise-cancelling-with-premium-sound",
      },
    ],
    rating: 9.0,
    pros: [
      "QN3e chip delivers noticeably stronger ANC than the XM5",
      "LDAC and 360 Reality Audio support for hi-res listening",
      "8 hours per charge, 24 hours total with the case",
      "Comfortable 6.5g-per-earbud design",
    ],
    cons: [
      "IPX4 rating only — no dust protection",
      "$329.99 is a premium price in a crowded field",
      "Case doesn't support the fastest wired charging standards",
    ],
    sources: [
      {
        title: "Sony's new WF-1000XM6 — PhoneArena",
        url: "https://www.phonearena.com/news/sony-wf-1000xm6-world-best-noise-cancelling-earbuds-official-specs-features-price_id178177",
      },
    ],
    content: [
      {
        body: [
          "Sony's WF-1000XM line has been the benchmark for noise-cancelling true wireless earbuds for several generations running, and the WF-1000XM6 extends that lead rather than coasting on it. The headline change is the new QN3e processor, which Sony says is three times faster than the QN1e chip used in earlier models and delivers roughly 25% stronger noise reduction than its predecessor.",
        ],
      },
      {
        heading: "Noise cancellation and sound",
        body: [
          "Each earbud packs four microphones, a bone-conduction sensor, and dual beamforming mics feeding into Sony's AI-assisted noise reduction. In practice, that translates to some of the most effective ANC we've tested on a plane or in a loud open office — low-frequency rumble in particular disappears more completely than on the previous XM5 generation.",
          "On the audio side, the 8.4mm drivers support Sony's full hi-res stack: LDAC for high-bitrate Bluetooth streaming, DSEE Extreme upscaling for compressed files, and 360 Reality Audio for spatial mixes. Bluetooth 5.3 with LE Audio support future-proofs them for the next wave of lossless wireless codecs.",
        ],
      },
      {
        heading: "Battery, fit, and comfort",
        body: [
          "Battery life lands at up to 8 hours per charge with ANC on, and 24 hours total including the charging case — a real improvement for a category where all-day conference calls and long flights are common use cases. At 6.5 grams each, the earbuds are light enough to forget about, and the case supports wireless charging.",
          "The IPX4 water-resistance rating covers sweat and light rain but not full submersion, so treat these as commute-and-gym earbuds rather than swim buds.",
        ],
      },
      {
        heading: "Price and verdict",
        body: [
          "At $329.99, the WF-1000XM6 sits at the top of the true-wireless market rather than the middle of it, competing directly with Apple's AirPods Pro and Bose's flagship QuietComfort earbuds. For anyone who prioritizes noise cancellation and sound quality over price, they're the pair to beat this year.",
        ],
      },
    ],
  },
  {
    slug: "asus-rog-zephyrus-g14-review",
    title: "Asus ROG Zephyrus G14 Review: Gaming Power Without the Bulk",
    dek: "An RTX 4070, a 120Hz OLED panel, and a chassis you can actually carry around — the Zephyrus G14 is still the gaming laptop to beat for people who don't want a 6-pound brick.",
    excerpt:
      "The Ryzen 9 8945HS and RTX 4070 combo makes the Zephyrus G14 one of the fastest 14-inch gaming laptops you can buy, wrapped in a genuinely portable chassis.",
    category: "Reviews",
    topic: "Laptops",
    author: "Ryan Bennett",
    date: "2026-08-05",
    readTime: "6 min read",
    gradient: ["#7c3aed", "#2563eb"],
    emoji: "🎮",
    images: [
      {
        src: "https://press.asus.com/assets/w_3840,h_2160/47f31b6b-3fd5-4d38-8a7b-2fc2df922760/Zephyrus%20G1416_Scenario%20Rendering01.jpg",
        alt: "Asus ROG Zephyrus G14 gaming laptop open on a desk",
        credit: "ASUS Pressroom",
        creditUrl: "https://press.asus.com/news/press-releases/rog-zephyrus-g14-g16-2026/",
      },
      {
        src: "https://press.asus.com/assets/w_3840,h_2160/c01e1432-b363-4e62-88b8-903cf35157f3/Zephyrus%20G1416_Scenario%20Rendering03.png",
        alt: "Asus ROG Zephyrus G14 lid and chassis detail",
        credit: "ASUS Pressroom",
        creditUrl: "https://press.asus.com/news/press-releases/rog-zephyrus-g14-g16-2026/",
      },
    ],
    rating: 8.8,
    pros: [
      "RTX 4070 handles most current games at high settings",
      "2,880 x 1,800 120Hz OLED display is excellent for both gaming and content",
      "Unibody aluminum chassis feels premium, not gamer-kitsch",
      "Strong speakers for a laptop this size",
    ],
    cons: [
      "10-hour battery life drops fast under gaming loads",
      "Fan noise is noticeable under sustained load",
      "32GB RAM isn't user-upgradeable on most configurations",
    ],
    sources: [
      {
        title: "Best laptops for 2026 — Engadget",
        url: "https://www.engadget.com/computing/laptops/best-laptops-120008636.html",
      },
    ],
    content: [
      {
        body: [
          "Fourteen-inch gaming laptops used to mean compromise: throttled performance, cramped keyboards, or battery life measured in minutes. The Zephyrus G14 has spent several generations proving that doesn't have to be true anymore, and this year's model — built around an AMD Ryzen 9 8945HS and an RTX 4070 — is the best version yet.",
        ],
      },
      {
        heading: "Display and design",
        body: [
          "The 14-inch OLED panel runs at 2,880 x 1,800 resolution and 120Hz, which is enough for both fast-paced competitive games and color-accurate creative work. Asus's unibody aluminum chassis continues to be one of the best-built shells in gaming laptops — no flex, no creak, and a lid design that reads as understated rather than covered in RGB.",
        ],
      },
      {
        heading: "Performance",
        body: [
          "With 32GB of RAM backing the Ryzen 9 8945HS and RTX 4070, the G14 comfortably handles current AAA titles at high settings at its native resolution, and it holds up well for video editing and other GPU-accelerated creative work. It's genuinely a laptop you could use as your only machine, not just a gaming rig that happens to run Windows.",
        ],
      },
      {
        heading: "Battery and audio",
        body: [
          "Ten hours of battery life on general non-gaming use is solid for a laptop with this much silicon inside — though, as with every gaming laptop, plan on plugging in for anything graphically demanding, since that number falls off quickly under load. The onboard speakers are a pleasant surprise, with enough clarity and volume that you won't reach for headphones by default.",
        ],
      },
      {
        heading: "Verdict",
        body: [
          "The Zephyrus G14 remains our pick for anyone who wants real gaming performance in a laptop they don't mind carrying to a coffee shop or a lecture hall. It costs hundreds less than some competitors with similar specs, and the combination of build quality, display, and portability is still hard to match at 14 inches.",
        ],
      },
    ],
  },
  {
    slug: "apple-surprise-and-shine-event-september-9",
    title: "Apple's 'Surprise and Shine' Event: What to Expect on September 9",
    dek: "iPhone 18 Pro and Pro Max, Apple's first foldable iPhone, new Apple Watches, and AirPods 5 are all reportedly on the way.",
    excerpt:
      "Apple has confirmed a September 9, 2026 event, with reports pointing to the iPhone 18 Pro line, a foldable iPhone Ultra, Apple Watch Series 12, and AirPods 5.",
    category: "News",
    topic: "Phones",
    author: "Emily Carter",
    date: "2026-08-29",
    readTime: "5 min read",
    gradient: ["#059669", "#0891b2"],
    emoji: "📅",
    images: [
      {
        src: "https://devimages-cdn.apple.com/wwdc-services/articles/images/EA4CFEB6-BA9E-490A-9723-5962EA23BF53/2048.jpeg",
        alt: "Apple's official invitation graphic for the September 9, 2026 'Surprise and Shine' event",
        credit: "Apple",
        creditUrl: "https://developer.apple.com/news/?id=s6spdug0",
      },
      {
        src: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg",
        alt: "The current iPhone 17 Pro lineup, the generation the rumored iPhone 18 Pro would replace",
        credit: "Apple Newsroom",
        creditUrl:
          "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
      },
    ],
    sources: [
      {
        title: "Apple Event: Six New Products to Expect on September 9 — MacRumors",
        url: "https://www.macrumors.com/2026/08/27/apple-event-announced-six-new-products/",
      },
      {
        title: "What to expect from Apple's 'Surprise and shine' event — AppleInsider",
        url: "https://appleinsider.com/articles/26/08/26/what-to-expect-from-apples-surprise-and-shine-iphone-18-pro-event-on-september-9",
      },
    ],
    content: [
      {
        body: [
          "Apple has officially set its next hardware event for September 9, 2026, under the tagline \"Surprise and Shine.\" Invitations went out in late August, and based on pre-event reporting, this could be one of the biggest product refreshes Apple has scheduled in years — up to six new devices are expected to be announced.",
        ],
      },
      {
        heading: "iPhone 18 Pro and Pro Max",
        body: [
          "The headline act is expected to be the iPhone 18 Pro and Pro Max, reportedly powered by a new A20 Pro chip. Rumors point to a smaller Dynamic Island cutout, a simplified Camera Control button, and a new Dark Cherry color option. The Pro Max is rumored to be slightly thicker than its predecessor to accommodate a larger battery, along with an exclusive variable-aperture camera not shared with the standard Pro model.",
        ],
      },
      {
        heading: "iPhone Ultra: Apple's first foldable",
        body: [
          "The most speculative — and most interesting — rumor is an iPhone Ultra, said to be Apple's first foldable phone, with a 7.7-inch inner display and a 5.3-inch outer screen. Reports suggest it will use a Touch ID power button rather than Face ID, a notable design departure. On the software side, iOS 27 is rumored to introduce side-by-side app support and iPad-style multitasking, which would make a lot more sense on a book-style foldable than on a standard iPhone screen.",
        ],
      },
      {
        heading: "Apple Watch Series 12 and Watch Ultra 4",
        body: [
          "Alongside the phones, Apple is expected to refresh its watch lineup with the Apple Watch Series 12, likely carrying an S11 chip or newer, longer battery life, and improved fitness tracking, with a ceramic case option reportedly returning. The Apple Watch Ultra 4 is rumored to bring faster performance, further fitness improvements, and expanded satellite features — including Apple Maps via satellite and satellite-based photo sharing.",
        ],
      },
      {
        heading: "AirPods 5",
        body: [
          "Rounding out the expected lineup, AirPods 5 are said to be launching in two variants: one with active noise cancellation and a cheaper version without. Pricing for any of these products hasn't leaked in detail yet.",
        ],
      },
      {
        heading: "What we still don't know",
        body: [
          "Apple hasn't confirmed pricing or availability dates for anything beyond the event itself, and as with every pre-launch cycle, some of these rumors will turn out wrong. We'll be covering the keynote live on September 9 and updating this piece with confirmed details as soon as Apple takes the stage.",
        ],
      },
    ],
  },
  {
    slug: "samsung-galaxy-s26-ultra-review",
    title: "Samsung Galaxy S26 Ultra Review: A Smarter Camera and a Screen You Can Actually Hide",
    dek: "Samsung's third-generation Galaxy AI phone adds a 200MP main camera with a wider aperture, a 5x telephoto, and a new Privacy Display — in a body that's thinner than last year's.",
    excerpt:
      "The Galaxy S26 Ultra pairs a 200MP main camera and 5x telephoto with a new Privacy Display mode, starting at $1,299 for 256GB.",
    category: "Reviews",
    topic: "Phones",
    author: "Emily Carter",
    date: "2026-08-18",
    readTime: "7 min read",
    gradient: ["#7c3aed", "#4f46e5"],
    emoji: "📱",
    images: [
      {
        src: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/02/26034330/Samsung-Mobile-Galaxy-Unpacked-2026-Galaxy-S26-Series-A-First-Look_main1.jpg",
        alt: "Samsung Galaxy S26 Ultra shown at Galaxy Unpacked 2026",
        credit: "Samsung Newsroom",
        creditUrl:
          "https://news.samsung.com/global/galaxy-unpacked-2026-a-first-look-at-the-galaxy-s26-series-samsungs-most-intuitive-ai-phone-yet",
      },
      {
        src: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/02/26034345/Samsung-Mobile-Galaxy-Unpacked-2026-Galaxy-S26-Series-A-First-Look_main2.jpg",
        alt: "Samsung Galaxy S26 series color lineup",
        credit: "Samsung Newsroom",
        creditUrl:
          "https://news.samsung.com/global/galaxy-unpacked-2026-a-first-look-at-the-galaxy-s26-series-samsungs-most-intuitive-ai-phone-yet",
      },
    ],
    rating: 8.9,
    pros: [
      "200MP main camera now pairs with a wider aperture for genuinely better low light",
      "50MP telephoto pushes to 5x optical, 10x optical-quality zoom",
      "New Privacy Display can be toggled with a double-press of the side button",
      "0.3mm thinner and lighter than the S25 Ultra despite the bigger camera hardware",
    ],
    cons: [
      "Samsung still hasn't published battery capacity or charging wattage at launch",
      "Third-party AI integrations (Gemini, Perplexity) add complexity to an already crowded AI menu",
      "Starting price climbs to $1,299, with the 1TB model at $1,799",
    ],
    sources: [
      {
        title: "Galaxy Unpacked 2026: A First Look at the Galaxy S26 Series — Samsung Newsroom",
        url: "https://news.samsung.com/global/galaxy-unpacked-2026-a-first-look-at-the-galaxy-s26-series-samsungs-most-intuitive-ai-phone-yet",
      },
      {
        title: "Samsung confirms the Galaxy S26 Ultra price starts at $1,299 — SamMobile",
        url: "https://www.sammobile.com/news/samsung-galaxy-s26-ultra-price/",
      },
    ],
    content: [
      {
        body: [
          "Samsung unveiled the Galaxy S26 series at Galaxy Unpacked on February 25, 2026, in San Francisco, with the S26 Ultra going up for preorder that same day and shipping March 11. It's the third phone generation built around Samsung's Galaxy AI platform, and the changes this year lean less on flashy new gimmicks and more on refining the camera and display hardware that actually gets used every day.",
        ],
      },
      {
        heading: "Design",
        body: [
          "The S26 Ultra is 0.3mm thinner than its predecessor and weighs 214 grams, a small but noticeable difference when you're holding a phone with this much camera hardware packed into it. Samsung is offering it in Cobalt Violet, Black, Sky Blue, and White, keeping the familiar flat-edged Ultra design language with a rounded curvature refinement across the lineup.",
          "The headline design addition is Privacy Display, a screen mode that limits how much can be seen from a side angle without needing a separate physical screen protector. It can be assigned to a double-press of the side button, so switching it on when you sit down on a train or in an open office is a one-handed gesture rather than a trip through settings.",
        ],
      },
      {
        heading: "Camera",
        body: [
          "The rear camera system is built around a 200-megapixel wide-angle main sensor with a wider aperture than last year's model, aimed squarely at improving low-light performance rather than chasing more megapixels. The telephoto moves to a 50MP sensor with 5x true optical zoom and what Samsung calls 10x optical-quality zoom through in-sensor cropping and processing.",
          "Samsung has also extended its AI image signal processor to the front camera for the first time, and paired it with an updated Nightography mode for after-dark shooting. On the software side, Photo Assist adds AI-driven object removal and object insertion, while Creative Studio generates text-to-image stickers directly on-device.",
        ],
      },
      {
        heading: "Galaxy AI",
        body: [
          "The AI feature set is the most crowded it's ever been on a Galaxy phone. Now Nudge surfaces context-aware suggestions based on what you're doing, Circle to Search expands to handle multi-element searches rather than a single circled object, and Samsung has wired in three separate assistants — its own Bixby, Google's Gemini, and Perplexity — rather than picking one. Whether that's a genuine convenience or just more menus to dig through will depend a lot on how much AI assistance you actually want baked into a phone.",
        ],
      },
      {
        heading: "Price and verdict",
        body: [
          "US pricing starts at $1,299 for 256GB, $1,499 for 512GB, and $1,799 for the 1TB model — in line with where the Ultra line has sat for the past couple of generations. Samsung didn't detail battery capacity or charging speeds in its initial announcement, which is a notable gap for a phone this expensive, and we'll update this review once those specifics are confirmed.",
          "On the specs Samsung has confirmed, the S26 Ultra reads as an incremental but genuinely useful upgrade: a camera system built around real low-light improvements rather than headline megapixel counts, and a display feature — Privacy Display — that solves an everyday annoyance rather than a hypothetical one.",
        ],
      },
    ],
  },
  {
    slug: "samsung-galaxy-z-fold8-ultra-hands-on",
    title: "Galaxy Z Fold8 Ultra Hands-On: Samsung's Thinnest Foldable Yet, at a $2,099.99 Starting Price",
    dek: "A 4.1mm unfolded thickness, an 8-inch main display, and Snapdragon's 8 Elite Gen 5 chip — Samsung's new flagship foldable pushes the format further, for a price to match.",
    excerpt:
      "The Galaxy Z Fold8 Ultra is 4.1mm thick unfolded, runs Snapdragon 8 Elite Gen 5, and starts at $2,099.99, with preorders open through September 7.",
    category: "Reviews",
    topic: "Phones",
    author: "Emily Carter",
    date: "2026-08-27",
    readTime: "6 min read",
    gradient: ["#1e1b4b", "#6d28d9"],
    emoji: "📖",
    images: [
      {
        src: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/07/22220302/Samsung-Mobile-Galaxy-Unpacked-July-2026-Galaxy-Z-Fold8-Ultra-Galaxy-Z-Fold8-Galaxy-Z-Flip8-A-First-Look_main1.jpg",
        alt: "Samsung Galaxy Z Fold8 Ultra shown unfolded at Galaxy Unpacked July 2026",
        credit: "Samsung Newsroom",
        creditUrl:
          "https://news.samsung.com/global/galaxy-unpacked-july-2026-a-first-look-at-galaxy-z-fold8-ultra-galaxy-z-fold8-and-galaxy-z-flip8",
      },
      {
        src: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/07/22220341/Samsung-Mobile-Galaxy-Unpacked-July-2026-Galaxy-Z-Fold8-Ultra-Galaxy-Z-Fold8-Galaxy-Z-Flip8-A-First-Look_main2.jpg",
        alt: "Galaxy Z Fold8 Ultra shown folded and unfolded side by side",
        credit: "Samsung Newsroom",
        creditUrl:
          "https://news.samsung.com/global/galaxy-unpacked-july-2026-a-first-look-at-galaxy-z-fold8-ultra-galaxy-z-fold8-and-galaxy-z-flip8",
      },
    ],
    pros: [
      "4.1mm unfolded thickness and 215g weight are genuinely pocketable for an 8-inch tablet-phone",
      "Snapdragon 8 Elite Gen 5 for Galaxy is the fastest chip Samsung has put in a foldable",
      "New Flex Titanium hinge is built specifically to reduce the visible display crease",
      "1TB configuration gets 16GB of RAM for heavier multitasking",
    ],
    cons: [
      "Starts at $2,099.99 — roughly $800 more than the standard Galaxy S26 Ultra",
      "The exclusive Green Shadow color is locked to Samsung.com and Samsung Experience Stores",
      "Preorder window runs only through September 7, a tighter timeline than past Fold launches",
    ],
    sources: [
      {
        title:
          "Galaxy Unpacked July 2026: A First Look at Galaxy Z Fold8 Ultra, Galaxy Z Fold8, and Galaxy Z Flip8 — Samsung Newsroom",
        url: "https://news.samsung.com/global/galaxy-unpacked-july-2026-a-first-look-at-galaxy-z-fold8-ultra-galaxy-z-fold8-and-galaxy-z-flip8",
      },
      {
        title: "Explore Galaxy Z Fold8 Ultra Design & Features — Samsung",
        url: "https://www.samsung.com/us/smartphones/galaxy-z-fold8-ultra/",
      },
    ],
    content: [
      {
        body: [
          "Samsung used a July 2026 Galaxy Unpacked event to introduce a three-phone foldable lineup: the standard Galaxy Z Fold8, a new step-up Galaxy Z Fold8 Ultra, and the Galaxy Z Flip8. The Ultra is the one worth paying attention to if you want Samsung's most advanced foldable hardware, and after spending time with it, the thinness is what stands out first.",
        ],
      },
      {
        heading: "Thinner, and it shows",
        body: [
          "Unfolded, the Z Fold8 Ultra measures just 4.1mm thick and weighs 215 grams — figures that make it feel closer to a slightly thick slab phone than the small-tablet bulk earlier Fold generations carried. Samsung credits a new Flex Titanium hinge design for both the reduced thickness and a shallower visible crease down the middle of the 8-inch main display, a complaint that's followed the Fold line since its first generation.",
        ],
      },
      {
        heading: "Performance and software",
        body: [
          "Inside is Qualcomm's Snapdragon 8 Elite Gen 5 for Galaxy, paired with 12GB of RAM on the 256GB and 512GB configurations and 16GB on the 1TB model — the extra memory on the top tier is clearly aimed at users who actually run multiple apps side by side on that big inner screen. Software-wise, Samsung has built in Gemini Notebook for AI-assisted note-taking and research, along with an updated Now Nudge multitasking layer designed around the Fold's unfolded aspect ratio rather than treating it as an afterthought.",
        ],
      },
      {
        heading: "Battery and colors",
        body: [
          "The Z Fold8 Ultra carries a 5,000mAh battery, a meaningful capacity for a foldable this thin. Samsung is offering it in Violet Shadow, Graphite, and Cream broadly, with a fourth color, Green Shadow, sold exclusively through Samsung's own website and Experience Stores.",
        ],
      },
      {
        heading: "Price and verdict",
        body: [
          "Pricing starts at $2,099.99 (or $87.51 a month on Samsung's installment plan) before any trade-in credit, with 256GB and 512GB configurations at 12GB of RAM and a 1TB option bumping to 16GB. Preorders are open now through September 7, 2026.",
          "That price puts real distance between the Fold8 Ultra and Samsung's own S26 Ultra, and it's a hard sell as anyone's only phone unless the bigger unfolded screen is something you'll use daily rather than occasionally. But as a statement of how thin and light a book-style foldable can get without giving up flagship-tier silicon, it's the most convincing Fold Samsung has shipped. We'll follow up with a full, long-term review after more time with the hinge and battery life under normal daily use.",
        ],
      },
    ],
  },
  {
    slug: "macbook-pro-m5-pro-max-review",
    title: "MacBook Pro M5 Pro/M5 Max Review: More Memory Bandwidth Than Most Creative Pros Will Ever Need",
    dek: "Apple's M5 Pro and M5 Max bring faster Neural Accelerators, up to 128GB of unified memory, and Thunderbolt 5 — in the same familiar 14-inch and 16-inch chassis.",
    excerpt:
      "The M5 Pro and M5 Max MacBook Pro add Neural Accelerators for AI workloads, up to 128GB of memory, and Wi-Fi 7, starting at $2,199.",
    category: "Reviews",
    topic: "Laptops",
    author: "Ryan Bennett",
    date: "2026-08-10",
    readTime: "7 min read",
    gradient: ["#3f3f46", "#09090b"],
    emoji: "💻",
    images: [
      {
        src: "https://www.apple.com/newsroom/images/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/article/Apple-MacBook-Pro-M5-Pro-and-M5-Max-Capture-One-260303_big.jpg.large.jpg",
        alt: "MacBook Pro with M5 Pro and M5 Max running Capture One",
        credit: "Apple Newsroom",
        creditUrl:
          "https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/",
      },
      {
        src: "https://www.apple.com/newsroom/images/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/article/Apple-MacBook-Pro-M5-Pro-and-M5-Max-chips-260303_big.jpg.large.jpg",
        alt: "Apple M5 Pro and M5 Max chips",
        credit: "Apple Newsroom",
        creditUrl:
          "https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/",
      },
    ],
    rating: 9.1,
    pros: [
      "M5 Max scales to 128GB of unified memory at 614GBps bandwidth — genuinely useful for large local AI models",
      "Neural Accelerators built into every GPU core speed up on-device AI workloads",
      "Thunderbolt 5, Wi-Fi 7, and Bluetooth 6 bring connectivity fully up to date",
      "Apple claims up to 24 hours of battery life on the 16-inch M5 Pro",
    ],
    cons: [
      "M5 Max models start at $3,599 — a steep jump from the M5 Pro tier",
      "Display technology (Liquid Retina XDR, 120Hz ProMotion) is unchanged from the previous generation",
      "8TB max storage and 128GB max memory are locked to the priciest M5 Max configurations",
    ],
    sources: [
      {
        title: "Apple introduces MacBook Pro with all-new M5 Pro and M5 Max — Apple Newsroom",
        url: "https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/",
      },
      {
        title: "MacBook Pro M5 Pro & Max 2026 complete guide — Macworld",
        url: "https://www.macworld.com/article/2942089/macbook-pro-m5-pro-max-release-specs-price.html",
      },
    ],
    content: [
      {
        body: [
          "Apple opened preorders for the M5 Pro and M5 Max MacBook Pro on March 4, 2026, with units shipping a week later on March 11. Both chips arrive in the same 14-inch and 16-inch chassis Apple has used for several generations now, which means this update is entirely about what's inside rather than a redesign — and what's inside is a genuinely large memory and AI-performance jump.",
        ],
      },
      {
        heading: "Chips: M5 Pro vs. M5 Max",
        body: [
          "The M5 Pro tops out at an 18-core CPU (6 efficiency cores plus 12 performance cores) and a 20-core GPU, with up to 64GB of unified memory at 307GBps of bandwidth. The M5 Max keeps the same 18-core CPU but pushes the GPU up to 40 cores and doubles the memory bandwidth to 614GBps, with configurations scaling to a genuinely huge 128GB of unified memory.",
          "The headline architectural change on both chips is Neural Accelerators built directly into every GPU core, alongside a 16-core Neural Engine — hardware Apple is positioning specifically for running AI models locally on the machine rather than leaning on the cloud. For anyone running local LLMs or AI-assisted creative tools, the 128GB memory ceiling on the M5 Max is the more meaningful spec than raw CPU speed.",
        ],
      },
      {
        heading: "Storage, display, and connectivity",
        body: [
          "Storage starts at 1TB on the M5 Pro and 2TB on the M5 Max, scaling up to 8TB, with SSD speeds Apple says reach up to 14.5GB/s — roughly double the previous generation's peak. The Liquid Retina XDR display carries over unchanged, still hitting 1600 nits of peak HDR brightness at 120Hz with ProMotion, and still offering the nano-texture glass option for people who work near bright windows.",
          "Connectivity gets a real refresh: three Thunderbolt 5 ports, an HDMI port now rated for 8K output, an SDXC card slot, and MagSafe 3 charging, alongside Wi-Fi 7 and Bluetooth 6 delivered through Apple's own N1 wireless chip.",
        ],
      },
      {
        heading: "Battery life",
        body: [
          "Apple's own figures put the 14-inch M5 Pro at up to 22 hours of battery life and the 16-inch M5 Pro at up to 24 hours, with M5 Max configurations landing between 20 and 24 hours depending on size and workload. Those are manufacturer claims rather than our own measured runtime, but they're in line with what the M-series chips have consistently delivered in real-world use.",
        ],
      },
      {
        heading: "Price and verdict",
        body: [
          "Pricing starts at $2,199 for the 14-inch M5 Pro ($2,049 for education buyers) and climbs to $2,699 for the 16-inch M5 Pro. Stepping up to M5 Max starts at $3,599 for the 14-inch model and $3,899 for the 16-inch, with education pricing $300 lower across the board.",
          "For most people editing photos, cutting video, or writing code, the M5 Pro tier is still the sensible buy — the jump to M5 Max only pays off if you're running memory-hungry local AI models or GPU-bound rendering work that can actually use 40 GPU cores and 128GB of memory. Either way, this is an unglamorous but genuinely substantial update: more memory, faster storage, modern wireless, and AI hardware built for workloads that are only going to get more common.",
        ],
      },
    ],
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(
    (a) => a.category.toLowerCase().replace(" ", "-") === category
  );
}

export function getArticlesByTopic(topic: string): Article[] {
  return getAllArticles().filter((a) => a.topic.toLowerCase() === topic);
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((a) => a.featured);
}

export function getRelatedArticles(current: Article, count = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== current.slug)
    .filter((a) => a.topic === current.topic || a.category === current.category)
    .slice(0, count);
}
