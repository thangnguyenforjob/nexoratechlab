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
  {
    slug: "chatgpt-gpt-5-6-review",
    title: "ChatGPT Review 2026: Is GPT-5.6 Still the AI Assistant to Beat?",
    dek: "OpenAI's GPT-5.6 update sharpens ChatGPT's writing, reasoning, and coding output — but the gap between the Free, Go, Plus, and Pro tiers keeps getting wider.",
    excerpt:
      "We spent two weeks with ChatGPT's GPT-5.6 update, testing style matching, agentic coding, image generation, and the pricing ladder from Free to Pro.",
    category: "Reviews",
    topic: "AI Software",
    author: "James Whitfield",
    date: "2026-08-28",
    readTime: "8 min read",
    gradient: ["#10a37f", "#0b6b57"],
    emoji: "🤖",
    images: [
      {
        src: "https://images.ctfassets.net/kftzwdyauwt9/5uOBQ9CN3HA6yzWugjzzYZ/b5fe018bce4814a145bb9c8e57422db6/gpt-5-6-poster.png",
        alt: "OpenAI GPT-5.6 announcement poster",
        credit: "OpenAI Newsroom",
        creditUrl: "https://openai.com/index/gpt-5-6/",
      },
    ],
    rating: 8.7,
    pros: [
      "Noticeably better at matching a user's own writing style and tone",
      "Agent mode can browse, run code, and complete multi-step tasks unattended",
      "Native image generation and voice mode are genuinely useful, not gimmicks",
      "Free tier is still one of the most capable no-cost AI assistants available",
    ],
    cons: [
      "Pro tier costs $200 a month, putting real agentic power behind a steep paywall",
      "Free and Go tiers hit usage limits fast during heavy multi-turn sessions",
      "Occasional over-confident answers still need fact-checking on niche topics",
    ],
    sources: [
      {
        title: "Introducing GPT-5.6 — OpenAI",
        url: "https://openai.com/index/gpt-5-6/",
      },
      {
        title: "ChatGPT Pricing — OpenAI",
        url: "https://chatgpt.com/pricing/",
      },
    ],
    content: [
      {
        body: [
          "ChatGPT has spent the past year fending off faster-moving competitors from Anthropic, Google, and a wave of specialized coding assistants, and OpenAI's answer has mostly been to keep shipping incremental model updates rather than a flashy rebrand. GPT-5.6, the latest of those updates, is a good example: it doesn't change what ChatGPT looks like, but it noticeably changes how it feels to use day to day.",
        ],
      },
      {
        heading: "What's new in GPT-5.6",
        body: [
          "OpenAI's own comparison slides for the release focus heavily on style matching — feeding the model a sample of a user's writing and asking it to continue in that voice. Where GPT-5.5 tended to flatten everything into a recognizable 'ChatGPT voice,' GPT-5.6 holds onto quirks like sentence length, punctuation habits, and vocabulary choices much more consistently across long responses.",
          "That sounds like a small thing, but it matters for anyone using ChatGPT to draft emails, reports, or social posts that need to sound like they came from a specific person rather than a generic assistant.",
        ],
      },
      {
        heading: "Reasoning and everyday use",
        image: {
          src: "https://images.ctfassets.net/kftzwdyauwt9/3oH3WSMMfaXAjUMh6DcIue/f594bb00b0711acda032f16240f2fe32/input-slide.png",
          alt: "OpenAI style-matching example showing an input writing sample fed to GPT-5.6",
          credit: "OpenAI Newsroom",
          creditUrl: "https://openai.com/index/gpt-5-6/",
        },
        body: [
          "In day-to-day use, GPT-5.6's 'thinking' mode remains the setting worth reaching for on anything that involves multiple steps — trip planning, comparing options, or working through a coding bug. Left on its default fast mode, ChatGPT still occasionally jumps to conclusions on ambiguous questions, but toggling extended reasoning on consistently produces more carefully reasoned, better-sourced answers, at the cost of a few extra seconds of wait time.",
          "Memory across conversations continues to be one of ChatGPT's quiet advantages over rivals: it remembers preferences, ongoing projects, and past corrections without needing to be reminded, which makes long-running use noticeably less repetitive than starting fresh with a stateless assistant.",
        ],
      },
      {
        heading: "Coding and agentic tasks",
        body: [
          "ChatGPT's agent mode can now browse the web, execute code in a sandboxed environment, and chain several tools together to complete a task like 'research three competitors and put the pricing in a spreadsheet' with minimal hand-holding. It's not flawless — it can still misread a paywalled page or mis-time a multi-step workflow — but it completes far more of these tasks end-to-end than it did a year ago, and it explains its steps clearly enough to spot-check the work.",
          "For programming specifically, ChatGPT remains a strong generalist rather than a dedicated coding tool: it's excellent for explaining unfamiliar code, drafting boilerplate, and debugging isolated functions, though developers working inside large codebases still tend to reach for editor-native tools for the heaviest lifting.",
        ],
      },
      {
        heading: "Image generation and multimodal input",
        body: [
          "Native image generation inside ChatGPT continues to be genuinely good — accurate text rendering, believable lighting, and enough prompt adherence that it's usable for real design work, not just novelty images. Voice mode and photo/document uploads round out a multimodal experience that feels cohesive rather than bolted together, which is still not true of every competing assistant.",
        ],
      },
      {
        heading: "Pricing: Free, Go, Plus, and Pro",
        image: {
          src: "https://images.ctfassets.net/kftzwdyauwt9/1zwyfsJQbQ7yIffWJKKSN1/a7e0644dbd618284b3b62eeb5111bb1a/42a52ba1-4fd9-470e-9083-b2e8bc00629e.png",
          alt: "OpenAI comparison slide showing GPT-5.6 output quality",
          credit: "OpenAI Newsroom",
          creditUrl: "https://openai.com/index/gpt-5-6/",
        },
        body: [
          "The free tier remains capable enough for casual use, and the lower-cost Go plan fills the gap for people who want higher limits without committing to a full subscription. Plus, at $20 a month, is where most regular users land, unlocking GPT-5.6's thinking mode, image generation, and higher usage caps. Pro, at $200 a month, is aimed squarely at professionals leaning on agent mode and extended reasoning throughout the workday — it's a real expense, and casual users have no reason to pay it.",
        ],
      },
      {
        heading: "Verdict",
        body: [
          "GPT-5.6 isn't a reinvention of ChatGPT, and OpenAI clearly isn't trying to make it one — it's a refinement of a product that already works, focused on making responses sound less like an AI and more like the person who asked for them. For most people, the free tier or Plus subscription remains the sensible entry point; Pro is a tool for people whose work already depends on agentic AI, not a plan to buy on a whim.",
        ],
      },
    ],
  },
  {
    slug: "claude-opus-4-6-review",
    title: "Claude Opus 4.6 Review: Anthropic's Best Coding and Reasoning Model Yet",
    dek: "A beta 1-million-token context window, four adjustable effort levels, and benchmark-topping agentic coding scores make Opus 4.6 the most capable Claude model Anthropic has shipped.",
    excerpt:
      "Anthropic's Claude Opus 4.6 brings a beta 1M-token context window, adaptive effort levels, and class-leading scores on Terminal-Bench and Humanity's Last Exam.",
    category: "Reviews",
    topic: "AI Software",
    author: "Ryan Bennett",
    date: "2026-08-24",
    readTime: "8 min read",
    gradient: ["#d97757", "#a8481f"],
    emoji: "🧠",
    images: [
      {
        src: "https://cdn.sanity.io/images/4zrzovbb/website/01d06528567e4bd22c3ddedc87f609ee5716a009-2400x1260.png",
        alt: "Claude Opus 4.6 announcement",
        credit: "Anthropic",
        creditUrl: "https://www.anthropic.com/news/claude-opus-4-6",
      },
    ],
    rating: 9.0,
    pros: [
      "Leads rival models on Terminal-Bench 2.0 and Humanity's Last Exam",
      "1M-token context window (beta) makes it viable for large codebases and long documents",
      "Four effort levels let users trade speed for depth on a per-task basis",
      "Context compaction keeps long agentic sessions from losing track of earlier steps",
    ],
    cons: [
      "1M-token context is API-only and still in beta",
      "Premium 200k+ context pricing ($10/$37.50 per million tokens) adds up fast at scale",
      "Max plan usage limits can still be reached during intensive agentic workdays",
    ],
    sources: [
      {
        title: "Claude Opus 4.6 — Anthropic",
        url: "https://www.anthropic.com/news/claude-opus-4-6",
      },
      {
        title: "Claude Pricing — Anthropic",
        url: "https://claude.com/pricing",
      },
    ],
    content: [
      {
        body: [
          "Anthropic has built its reputation on shipping models that punch above their marketing, and Claude Opus 4.6 continues that pattern. Rather than leading with a flashy demo, Anthropic's own announcement leans on benchmark tables — and on the specific claim that Opus 4.6 'plans more carefully, sustains agentic tasks for longer, and can operate more reliably in larger codebases' than any Claude model before it.",
        ],
      },
      {
        heading: "What's new in Opus 4.6",
        body: [
          "The headline feature is a 1-million-token context window, currently in beta and available through the API only, alongside support for up to 128,000 tokens of output. For context, that's roughly enough input space to hold several full codebases or a small book at once — a meaningful jump for anyone doing large-scale document analysis or working across sprawling engineering projects.",
          "Opus 4.6 also introduces four adjustable 'effort levels' — low, medium, high, and max — that let a user or a connected application trade response speed for depth of reasoning on a per-request basis, plus a new context compaction system that summarizes earlier steps in a long agentic task so the model doesn't lose the thread as a session grows.",
        ],
      },
      {
        heading: "Agentic coding and long-running tasks",
        image: {
          src: "https://cdn.sanity.io/images/4zrzovbb/website/5ac72c2c6509b4b6c41ac8f742636fe123b0ba1a-1920x1080.png",
          alt: "Claude Opus 4.6 agentic coding benchmark visualization",
          credit: "Anthropic",
          creditUrl: "https://www.anthropic.com/news/claude-opus-4-6",
        },
        body: [
          "Anthropic reports that Opus 4.6 posts the highest score of any current model on Terminal-Bench 2.0, an evaluation built around real agentic coding workflows in a terminal environment, and a 90.2% result on BigLaw Bench, a legal-reasoning benchmark. In our own testing inside Claude Code, Opus 4.6 held onto context noticeably better through multi-hour refactoring sessions than earlier Claude models, and it was more willing to stop and ask a clarifying question rather than guessing at an ambiguous instruction.",
          "On long-context retrieval, Anthropic cites a 76% score on the MRCR v2 benchmark, compared with 18.5% for Claude Sonnet 4.5 — a large enough gap to matter for anyone regularly feeding the model very long documents or transcripts.",
        ],
      },
      {
        heading: "Reasoning and knowledge work",
        body: [
          "Opus 4.6 also leads all current models on Humanity's Last Exam, a benchmark specifically designed to be difficult for language models across a wide range of expert-level subjects, and Anthropic claims it outperforms OpenAI's GPT-5.2 by roughly 144 Elo points on GDPval-AA, a benchmark focused on realistic financial and legal task performance. Outside of formal benchmarks, Opus 4.6 was noticeably more careful than previous Claude versions about flagging uncertainty in financial and spreadsheet analysis rather than stating a confident but wrong number.",
        ],
      },
      {
        heading: "Where it fits: Claude Code, Cowork, and the API",
        body: [
          "Opus 4.6 is available across Anthropic's own surfaces — Claude.ai, Claude Code, and the newer Cowork multitasking mode — as well as through the API for developers building it into their own products. Cowork in particular benefits from the model's improved autonomous multitasking, letting it manage several parallel threads of work with less supervision than earlier Claude releases needed.",
        ],
      },
      {
        heading: "Pricing",
        image: {
          src: "https://cdn.sanity.io/images/4zrzovbb/website/6d4a0d28992ade92d6fa63646fd9c9d318245c6c-2400x1260.jpg",
          alt: "Anthropic Claude branding image",
          credit: "Anthropic",
          creditUrl: "https://www.anthropic.com/news/claude-opus-4-6",
        },
        body: [
          "API pricing for Opus 4.6 holds steady at $5 per million input tokens and $25 per million output tokens for contexts under 200,000 tokens, rising to $10 and $37.50 respectively once a request crosses that threshold. On the consumer side, Claude remains free to try, with Pro starting at $20 a month and Max plans starting at $100 a month for 5x the usage of Pro, or more for the 20x tier — pricing that puts Opus 4.6's heaviest agentic use cases squarely in professional-budget territory.",
        ],
      },
      {
        heading: "Verdict",
        body: [
          "Claude Opus 4.6 is the clearest evidence yet that Anthropic's bet on agentic coding and long-context reasoning is paying off — the benchmark leads are real, and they translate into a model that's genuinely more trustworthy on long, multi-step work than what came before it. It's not the cheapest option, and the flagship 1M-token context window isn't available to everyday chat users yet, but for developers and knowledge workers already living inside Claude Code or Cowork, it's an easy recommendation.",
        ],
      },
    ],
  },
  {
    slug: "midjourney-v8-review",
    title: "Midjourney V8 Review: Faster, Sharper, and Finally Easy to Steer",
    dek: "Midjourney's V8 and V8.1 updates bring roughly 5x faster rendering, better text, and an HD mode that's now both quicker and cheaper than before.",
    excerpt:
      "We tested Midjourney's V8 alpha and the follow-up V8.1 release across speed, prompt accuracy, personalization, and price.",
    category: "Reviews",
    topic: "AI Software",
    author: "Emily Carter",
    date: "2026-08-20",
    readTime: "7 min read",
    gradient: ["#312e81", "#1e1b4b"],
    emoji: "🎨",
    images: [
      {
        src: "https://storage.ghost.io/c/95/61/95616ddb-b827-4269-ad22-ff4a6b368a1f/content/images/2026/04/V8.1bannerv2.jpg",
        alt: "Midjourney V8.1 announcement banner",
        credit: "Midjourney",
        creditUrl: "https://updates.midjourney.com/v8-1-alpha/",
      },
    ],
    rating: 8.5,
    pros: [
      "Roughly 5x faster generation than V7, with noticeably better prompt coherence",
      "HD mode is now the default, and Midjourney says it's 3x faster and 3x cheaper to run",
      "Personalization profiles, style references, and moodboards carry over from V7",
      "Improved text rendering finally makes in-image text usable more often than not",
    ],
    cons: [
      "Still in alpha, with access limited to Midjourney's alpha site during testing",
      "Relax mode isn't supported yet on the new model",
      "Discord and web-app workflow still has a learning curve for newcomers",
    ],
    sources: [
      {
        title: "V8 Alpha — Midjourney",
        url: "https://updates.midjourney.com/v8-alpha/",
      },
      {
        title: "V8.1 Alpha — Midjourney",
        url: "https://updates.midjourney.com/v8-1-alpha/",
      },
    ],
    content: [
      {
        body: [
          "Midjourney has quietly become the default answer to 'which AI image generator is actually the best,' and the V8 line of updates is aimed squarely at removing the two biggest complaints users have had for years: generation speed and unpredictable text rendering. Having tested both the initial V8 alpha and the follow-up V8.1 release, the improvements are real, even if the rollout has been a slower, more staggered process than past version jumps.",
        ],
      },
      {
        heading: "What's new in V8",
        body: [
          "Midjourney says V8 generates images roughly 5x faster than V7, and in practice that speed increase is obvious — batches that used to take a couple of minutes now land in well under a minute in Fast mode. Alongside the speed bump, V8 brings noticeably better prompt following, improved text rendering inside images, support for multiple aspect ratios in a single job, and new parameter flags including --chaos, --weird, --exp, --raw, and an --hd flag for native 2K output.",
        ],
      },
      {
        heading: "V8.1: HD by default",
        image: {
          src: "https://storage.ghost.io/c/95/61/95616ddb-b827-4269-ad22-ff4a6b368a1f/content/images/2026/03/image.png",
          alt: "Midjourney V8 alpha sample generation grid",
          credit: "Midjourney",
          creditUrl: "https://updates.midjourney.com/v8-alpha/",
        },
        body: [
          "The follow-up V8.1 release, which shipped in April 2026, made HD mode the default rendering setting and made it, in Midjourney's own words, '3x faster and 3x cheaper' to generate, while standard resolution jobs got 50% faster and 25% cheaper on top of that. V8.1 also restored image prompts and image weights — features that were temporarily missing from the initial V8 alpha — and added a prompt shortener for anyone hitting the character limit, along with a more detailed version of the Describe function.",
        ],
      },
      {
        heading: "Personalization and moodboards carrying over from V7",
        body: [
          "One of the smartest decisions in the V8 rollout is backward compatibility: existing personalization profiles, style references (srefs), and moodboards built up under V7 carry straight over, so switching versions doesn't mean starting your visual identity from scratch. Midjourney describes V8's overall aesthetic as directly inspired by V7, which shows — outputs feel like a sharper, faster version of the same visual language rather than a jarring style reset.",
        ],
      },
      {
        heading: "The web app and workflow",
        body: [
          "Midjourney's web interface continues to mature alongside the model itself, now including a conversation mode, a grid-based job view, and a sidebar for adjusting settings without typing parameter flags by hand. Discord remains fully supported and is still where a lot of the community lives, but the web app is clearly where Midjourney wants new users to land first.",
        ],
      },
      {
        heading: "Pricing: Basic to Mega",
        image: {
          src: "https://storage.ghost.io/c/95/61/95616ddb-b827-4269-ad22-ff4a6b368a1f/content/images/2025/04/launch_banner_v7_b-1.png",
          alt: "Midjourney subscription and generation showcase banner",
          credit: "Midjourney",
          creditUrl: "https://updates.midjourney.com/v7-alpha/",
        },
        body: [
          "Midjourney's four subscription tiers are unchanged by the V8 rollout: Basic at $10 a month (3.3 Fast GPU hours, no Relax mode), Standard at $30 a month (15 Fast hours plus unlimited Relax-mode image generation), Pro at $60 a month (30 Fast hours and Stealth Mode for private generations), and Mega at $120 a month (60 Fast hours for high-volume teams). Standard remains the sweet spot for most hobbyists and professionals, since unlimited Relax generation covers casual use without burning through Fast hours.",
        ],
      },
      {
        heading: "Verdict",
        body: [
          "V8 and V8.1 don't reinvent what Midjourney is — they make the existing experience meaningfully faster and cheaper to run while fixing the text-rendering complaint that's dogged the platform for years. With relax mode and the upscaler, editing, and inpainting tools for V8 still on the roadmap, this is clearly a mid-rollout snapshot rather than a finished release, but even at this stage it's an easy recommendation for anyone already paying for Midjourney.",
        ],
      },
    ],
  },
  {
    slug: "github-copilot-review-2026",
    title: "GitHub Copilot Review 2026: Agent Mode Grows Up",
    dek: "Parallel agent sessions, a built-in agentic browser, and per-session cost tracking make Copilot feel less like autocomplete and more like a junior engineer you can actually delegate to.",
    excerpt:
      "GitHub Copilot's 2026 agent-mode updates add parallel sessions, an agentic browser, and clearer usage tracking across Free, Pro, Pro+, and Max plans.",
    category: "Reviews",
    topic: "AI Software",
    author: "James Whitfield",
    date: "2026-08-14",
    readTime: "7 min read",
    gradient: ["#161b22", "#238636"],
    emoji: "🧑‍💻",
    images: [
      {
        src: "https://github.blog/wp-content/uploads/2026/08/Changelog_NewRelease_Header_CopilotWeeklyReleases_d215e4.jpg",
        alt: "GitHub Copilot weekly release announcement header",
        credit: "GitHub Blog",
        creditUrl:
          "https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10/",
      },
    ],
    rating: 8.4,
    pros: [
      "Parallel agent sessions let you run several coding tasks side by side",
      "Agentic browser tools can now navigate, screenshot, and validate web work directly",
      "Full session cost tracking makes it much easier to see where usage credits go",
      "Core autocomplete and inline chat remain fast and reliable for everyday coding",
    ],
    cons: [
      "Pro+ and Max plans get expensive fast for teams running heavy agent workloads",
      "Autonomous agent runs still need spot-checking on unfamiliar codebases",
      "Model provider marketplace adds a layer of choice that can overwhelm new users",
    ],
    sources: [
      {
        title: "GitHub Copilot weekly releases — August 10 — GitHub Changelog",
        url: "https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10/",
      },
      {
        title: "GitHub Copilot in Visual Studio Code, June 2026 releases — GitHub Changelog",
        url: "https://github.blog/changelog/2026-07-08-github-copilot-in-visual-studio-code-june-2026-releases/",
      },
    ],
    content: [
      {
        body: [
          "GitHub Copilot started life as a glorified autocomplete, and it's easy to forget how far it's come until you sit down with the current agent-mode workflow. The 2026 releases push Copilot further from 'suggests the next line' and closer to 'hand it a ticket and check back later,' with parallel sessions, a real agentic browser, and cost tracking that finally makes the whole thing legible.",
        ],
      },
      {
        heading: "Agent mode, now with parallel sessions",
        body: [
          "The biggest workflow change is the ability to run multiple agent tasks side by side in a split view, each with its own chat thread, so you can kick off a refactor in one pane while reviewing a bug fix in another. Sessions can be grouped and rearranged by dragging them around, which sounds minor until you're juggling four or five in-flight tasks and need to find the one that just finished.",
        ],
      },
      {
        heading: "The agentic browser",
        image: {
          src: "https://github.blog/wp-content/uploads/2026/07/615396768-e058369f-6fd7-4e7f-b1c9-68b288b56ca2.jpg",
          alt: "GitHub Copilot Vision browser feature announcement",
          credit: "GitHub Blog",
          creditUrl: "https://github.blog/changelog/2026-07-01-copilot-vision-is-generally-available/",
        },
        body: [
          "Copilot's agentic browser tools reached general availability this year, letting an agent navigate a live web page, take a screenshot for context, and validate that a change actually rendered correctly — genuinely useful for front-end work, where 'does this look right' is impossible to answer from code alone. A remote workspace browsing mode, still in public preview, proxies HTTP(S) traffic so an agent can interact with an internal staging environment rather than just the public web.",
        ],
      },
      {
        heading: "Cost visibility and model choice",
        body: [
          "Previous Copilot updates made it hard to tell where your usage credits actually went; the latest release fixes that with full session-level cost tracking across an entire chat rather than individual requests, plus a breakdown of how much a delegated subagent task consumed. A model provider marketplace, accessible directly inside VS Code, lets developers bring in alternative model extensions rather than being locked to GitHub's default lineup, alongside a unified picker for context size and reasoning effort.",
        ],
      },
      {
        heading: "Everyday autocomplete still holds up",
        body: [
          "It's easy to get distracted by agent mode and forget that Copilot's original job — fast, accurate inline suggestions while typing — remains genuinely solid, and arguably still its best feature for developers who don't want to hand off entire tasks. Suggestion latency stayed low throughout testing, even with an agent session running in the background, which wasn't always true of earlier Copilot releases.",
        ],
      },
      {
        heading: "Pricing: Free, Pro, Pro+, and Max",
        image: {
          src: "https://github.blog/wp-content/uploads/2026/07/vscode-changelog-june-2026.jpg",
          alt: "GitHub Copilot in VS Code June 2026 release changelog header",
          credit: "GitHub Blog",
          creditUrl:
            "https://github.blog/changelog/2026-07-08-github-copilot-in-visual-studio-code-june-2026-releases/",
        },
        body: [
          "Copilot's individual pricing runs Free ($0, 2,000 completions a month), Pro ($10 a month, unlimited completions and everyday agent use), Pro+ ($39 a month, access to premium models for more complex work), and Max ($100 a month, built for sustained high-volume agent workflows and marketed as the best value for power users). Copilot Business and Enterprise plans remain available for organizations, priced per seat through GitHub sales.",
        ],
      },
      {
        heading: "Verdict",
        body: [
          "GitHub Copilot's 2026 updates make a strong case that agent-based coding assistants are past the novelty stage — parallel sessions and the agentic browser in particular solve real friction points rather than adding features for their own sake. Free and Pro remain the right starting point for most individual developers; Pro+ and Max are worth it only once you're genuinely delegating substantial chunks of work to Copilot's agents on a daily basis.",
        ],
      },
    ],
  },
  {
    slug: "perplexity-comet-browser-review",
    title: "Perplexity Comet Review: An AI Browser That Actually Gets Things Done",
    dek: "Perplexity's Comet browser turns everyday browsing into an assistant that reads pages, compares prices, and drafts emails — when it isn't tripping over unfamiliar sites.",
    excerpt:
      "We spent two weeks with Perplexity's Comet browser, testing its research, shopping, and email-drafting agent features across desktop and mobile.",
    category: "Reviews",
    topic: "AI Software",
    author: "Ryan Bennett",
    date: "2026-08-06",
    readTime: "7 min read",
    gradient: ["#20808d", "#123236"],
    emoji: "🔎",
    images: [
      {
        src: "https://framerusercontent.com/images/gIzwIp40XiQ2WjnJNpHRNJfZy0c.png",
        alt: "Perplexity Comet browser interface",
        credit: "Perplexity",
        creditUrl: "https://www.perplexity.ai/comet",
      },
    ],
    rating: 8.2,
    pros: [
      "Genuinely useful for comparing how different outlets cover the same story",
      "Shopping assistant finds competitive prices without manually opening a dozen tabs",
      "Can draft email replies and organize your inbox directly inside the browser",
      "Available across Mac, Windows, iOS, and Android with a consistent experience",
    ],
    cons: [
      "Task automation occasionally stalls on sites with unusual layouts or logins",
      "Free tier limits daily agentic actions, pushing regular users toward Pro",
      "Still a young product — expect rough edges compared to a mature browser",
    ],
    sources: [
      {
        title: "Comet — Perplexity",
        url: "https://www.perplexity.ai/comet",
      },
      {
        title: "Perplexity Pricing 2026 — ScreenApp",
        url: "https://screenapp.io/blog/perplexity-pricing",
      },
    ],
    content: [
      {
        body: [
          "Perplexity built its name on being a better search engine than Google for anyone who wants a direct, sourced answer instead of ten blue links. Comet is the company's attempt to take that same idea and wrap an entire browser around it, and after two weeks of using it as a daily driver, it's clear Comet is less about replacing Chrome and more about turning the browser itself into an assistant that can act, not just answer.",
        ],
      },
      {
        heading: "What Comet actually does",
        body: [
          "At its core, Comet is a Chromium-based browser with Perplexity's assistant built into the sidebar, able to see and act on whatever page is currently open. Ask it to summarize a long article, compare how different news outlets are framing the same story, or pull the key numbers out of a PDF, and it responds using the actual page content rather than a generic web search — which noticeably improves accuracy on anything time-sensitive.",
        ],
      },
      {
        heading: "Research and shopping assistant",
        image: {
          src: "https://framerusercontent.com/images/TvmuNZu7x8PstI45zSmeZCCB4.png",
          alt: "Perplexity Comet assistant sidebar performing a research task",
          credit: "Perplexity",
          creditUrl: "https://www.perplexity.ai/comet",
        },
        body: [
          "Comet's shopping mode is one of its strongest features: point it at a product and ask it to find the same item elsewhere for less, and it will genuinely cross-reference multiple retailers and return a real comparison rather than a list of sponsored links. For research tasks — building a study plan, gathering sources for a report, or fact-checking a claim across several sites — it behaves like a research assistant that already has every relevant tab open, rather than one you have to walk through the process manually.",
        ],
      },
      {
        heading: "Email and task automation",
        body: [
          "Beyond research, Comet can draft email replies, help build a simple website, and generally handle multi-step busywork inside the browser itself. It's genuinely convenient for repetitive tasks, though it's noticeably more reliable on well-structured, mainstream sites than on smaller or unusually designed ones, where it can misclick or get stuck mid-task.",
        ],
      },
      {
        heading: "Where it stumbles",
        body: [
          "Comet is still a young product, and it shows in small ways: page load quirks, occasional confusion about which browser tab it should be acting on, and task automation that sometimes needs a manual restart rather than recovering on its own. None of these are dealbreakers, but they're a reminder that Comet is closer to an ambitious first generation than a fully polished daily driver for everyone.",
        ],
      },
      {
        heading: "Pricing and availability",
        image: {
          src: "https://framerusercontent.com/images/bMdgun0DJXnkXnN6WQGxfYhjQ.png",
          alt: "Perplexity Comet browser shown across desktop and mobile devices",
          credit: "Perplexity",
          creditUrl: "https://www.perplexity.ai/comet",
        },
        body: [
          "Comet is free to download for Mac, Windows, iOS, and Android, and works with a free Perplexity account, though daily agentic actions are capped on the free tier. Subscribing to Perplexity Pro at $20 a month raises those limits substantially and adds access to more capable underlying models for research tasks, which is where Comet starts to feel less like a novelty and more like a genuine daily tool.",
        ],
      },
      {
        heading: "Verdict",
        body: [
          "Comet is one of the more convincing arguments yet that the browser itself, not just a sidebar extension, is where AI assistants make the most sense — it has access to exactly what you're looking at and can act on it directly. It's not ready to fully replace Chrome for everyone, but for research-heavy work and online shopping, it's already saving real time, and it's only going to get more capable from here.",
        ],
      },
    ],
  },
  {
        slug: "google-pixel-11-series-launch",
        title: "Google Pixel 11 Series Launches With Tensor G6 and a Redesigned Camera Bar",
        dek: "The Pixel 11, Pixel 11 Pro, and Pixel 11 Pro XL bring Google's first 2-nanometer chip, a 40% thinner camera bar, and deeper Gemini integration, starting at $899.",
        excerpt:
                "Google's Pixel 11 lineup debuts the Tensor G6 chip, upgraded cameras, and Pro-only HiLight notifications, with US pricing starting at $899.",
        category: "News",
        topic: "Phones",
        author: "Emily Carter",
        date: "2026-08-12",
        readTime: "5 min read",
        gradient: ["#4285f4", "#34a853"],
        emoji: "📱",
        images: [
          {
                    src: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_11_Family_Shot.width-1200.format-webp.webp",
                    alt: "The Google Pixel 11 family lineup shown together",
                    credit: "Google",
                    creditUrl: "https://blog.google/products-and-platforms/devices/pixel/google-pixel-11-pro-xl/",
          },
              ],
        sources: [
          {
                    title: "Google introduces Pixel 11, Pixel 11 Pro and Pixel 11 Pro XL — Google Blog",
                    url: "https://blog.google/products-and-platforms/devices/pixel/google-pixel-11-pro-xl/",
          },
          {
                    title: "Introducing new Pixel 11 phones, Pixel Watch 5, and Pixel Tag — Google Blog",
                    url: "https://blog.google/products-and-platforms/devices/pixel/new-pixel-devices-2026/",
          },
              ],
        content: [
          {
                    body: [
                                "Google used its Made by Google event on August 12, 2026 to introduce the Pixel 11 series: the standard Pixel 11, the Pixel 11 Pro, and the Pixel 11 Pro XL, alongside the Pixel Watch 5 and a new Pixel Tag item tracker. All three phones ship with Android 17 and are built, Google says, specifically 'for Gemini Intelligence' rather than treating on-device AI as an add-on feature bolted onto last year's hardware.",
                              ],
          },
          {
                    heading: "Tensor G6: Google's first 2-nanometer chip",
                    image: {
                                src: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/TensorChip.width-1200.format-webp.webp",
                                alt: "Google Tensor G6 chip",
                                credit: "Google",
                                creditUrl: "https://blog.google/products-and-platforms/devices/pixel/google-pixel-11-pro-xl/",
                    },
                    body: [
                                "The headline upgrade across all three phones is Tensor G6, which Google describes as the first 2-nanometer chip to ship in a smartphone. Google claims 25% faster web browsing and 15% quicker app launches than Tensor G5, alongside 50% more TPU compute for on-device Gemini Nano tasks — which Google says now run up to 3.5 times faster while using up to 3.5 times less energy. A new Titan M3 security chip handles on-device encryption, and the Pro models pair the chip with 12GB or 16GB of RAM depending on configuration.",
                              ],
          },
          {
                    heading: "Cameras and a slimmer camera bar",
                    body: [
                                "The standard Pixel 11 gets a new 48-megapixel main sensor Google says captures 56% more light than its predecessor, plus a 5x telephoto supporting 30x Super Res Zoom and a Night Sight mode that Google claims processes images four and a half times faster. The Pixel 11 Pro and Pro XL step up to what Google calls its best camera system yet, with an upgraded 48-megapixel telephoto (30% more light sensitivity), Portrait Mode at 5x zoom, and Pro Zoom reaching up to 120x.",
                                "Visually, the most obvious change across the lineup is a camera bar that Google says is 40% thinner than before, paired with a satin metal frame and a polished glass back. All three phones carry an IP68 rating for dust and water resistance.",
                              ],
          },
          {
                    heading: "Gemini Nano and the Pro-only HiLight feature",
                    body: [
                                "Beyond raw specs, Google is leaning hard on Gemini as the differentiator. Gemini Nano now runs faster directly on the phone thanks to Tensor G6's added TPU headroom, and the Pro and Pro XL models add a feature called HiLight — small LED notifications built around the camera flash that surface calls, messages, and Gemini interactions without waking the full display. Every Pixel 11 model ships with seven years of guaranteed OS, security, and Pixel Drop feature updates, and Pro buyers get six months of Google AI Pro included, which bundles 5TB of cloud storage and Google Health Premium.",
                              ],
          },
          {
                    heading: "Price, colors, and availability",
                    image: {
                                src: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel-11ProXL_Family-Shot.width-1200.format-webp.webp",
                                alt: "Google Pixel 11 Pro and Pixel 11 Pro XL shown in their launch colors",
                                credit: "Google",
                                creditUrl: "https://blog.google/products-and-platforms/devices/pixel/google-pixel-11-pro-xl/",
                    },
                    body: [
                                "US pricing starts at $899 for the Pixel 11 (Pistachio, Hibiscus, Frost, or Obsidian), $1,099 for the Pixel 11 Pro, and $1,299 for the Pixel 11 Pro XL, with the Pro models offered in Canyon, Fog, Olive, or an all-matte Obsidian finish. Every model starts at 256GB of storage — Google has dropped the smaller base tier it offered on some past-generation Pixels. Pre-orders opened alongside the announcement, with retail availability following on August 20, 2026.",
                                "Combined with the Pixel Watch 5's own new health-tracking and Gemini features, the Pixel 11 launch is Google's clearest statement yet that its hardware roadmap and its AI roadmap are now effectively the same roadmap — a bet that will only look smarter or shakier as Gemini's on-device capabilities keep shifting month to month.",
                              ],
          },
              ],
  },
  {
        slug: "anthropic-model-hardware-standard-news",
        title: "Anthropic Opens a Research Preview Letting Claude Operate Lab Robots and Scientific Instruments",
        dek: "The Model Hardware Standard gives AI agents a common way to talk to lab equipment, cutting integration time from weeks to minutes — with early results from Genentech, Carnegie Mellon, and other research partners.",
        excerpt:
                "Anthropic's Model Hardware Standard research preview lets Claude safely operate lab robots and scientific instruments, with early partners reporting dramatic speedups.",
        category: "News",
        topic: "AI Software",
        author: "James Whitfield",
        date: "2026-08-27",
        readTime: "6 min read",
        gradient: ["#cc785c", "#3d3929"],
        emoji: "🦾",
        images: [
          {
                    src: "https://cdn.sanity.io/images/4zrzovbb/website/5008271abbababe59f4fbb01998697f7dd0b5b60-1280x720.jpg",
                    alt: "Anthropic Model Hardware Standard announcement",
                    credit: "Anthropic",
                    creditUrl: "https://www.anthropic.com/news/model-hardware-standard-research-preview",
          },
              ],
        sources: [
          {
                    title: "Model Hardware Standard: a research preview — Anthropic",
                    url: "https://www.anthropic.com/news/model-hardware-standard-research-preview",
          },
          {
                    title: "Anthropic Unveils MHS to Let Claude AI Work With Robots, Lab Equipment — Bloomberg",
                    url: "https://www.bloomberg.com/news/articles/2026-08-27/anthropic-tests-new-way-for-claude-to-work-with-robots-and-scientific-lab-tools",
          },
              ],
        content: [
          {
                    body: [
                                "Anthropic announced on August 27, 2026 that it's opening a research preview of the Model Hardware Standard, or MHS — a shared specification that lets AI agents like Claude safely operate physical lab and manufacturing equipment. The pitch is straightforward: most scientific instruments and industrial devices don't share a common software interface, so wiring an AI agent up to a liquid handler, a robotic arm, or a plate reader has historically meant weeks or months of bespoke, one-off integration work. MHS is Anthropic's attempt to turn that into a standardized, hours-or-minutes job.",
                              ],
          },
          {
                    heading: "How it works",
                    image: {
                                src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/0aa7623ba0e545ce39e0de725583c0445ce6b76d-1999x1250.png",
                                alt: "Diagram of the Model Hardware Standard connecting AI agents to lab hardware",
                                credit: "Anthropic",
                                creditUrl: "https://www.anthropic.com/news/model-hardware-standard-research-preview",
                    },
                    body: [
                                "MHS provides a standardized driver layer that translates between an operating system and a piece of hardware using simple 'read' and 'write' primitives, documented with natural-language metadata describing each device's characteristics, safety limits, and operational parameters. It's designed to be model-agnostic — any agent harness can reach it through the Model Context Protocol — and hardware-flexible, working with any device that exposes a programmable interface, whether that's through MCP itself, a command-line interface, or a code-level API.",
                                "Anthropic is explicit about the limits here: 'Claude learns about the physical world through text and images, meaning its spatial and physical reasoning have limitations that still require expert oversight,' the company wrote, positioning MHS as a tool that still needs a human in the loop rather than a fully autonomous lab technician.",
                              ],
          },
          {
                    heading: "Early results from research partners",
                    body: [
                                "Anthropic is launching MHS with a first group of research organizations and manufacturers, including Genentech, the University of Washington's Baker and Pinglay Labs, Carnegie Mellon University, HHMI's Janelia Research Campus, QuEra Computing, and Tetsuwan Scientific, alongside hardware and software partners like Amazon Web Services, Universal Robots, Doosan Robotics, Tecan, QIAGEN, and Hugging Face's LeRobot project.",
                                "The reported early results are striking. At QuEra Computing, an agent using MHS improved laser recovery success from 58% to 99.3% and cut recovery time from 150 seconds to roughly 6 seconds by autonomously tuning PID parameters. At Carnegie Mellon, dose-response experiments ran about three times faster, with the agent re-running trials on its own after spotting poor curve quality. HHMI Janelia used MHS to unify seven separate vendor programs into a single interface for real-time microscopy monitoring, and Genentech had Claude autonomously optimize flow rates across a liquid handler, robotic arm, and plate reader to run a protein assay with minimal manual intervention.",
                              ],
          },
          {
                    heading: "What comes next",
                    image: {
                                src: "https://www-cdn.anthropic.com/images/4zrzovbb/website/943af4b43644ab0d213ba362eabd609c98cd8887-1999x1125.jpg",
                                alt: "A robotic arm working alongside lab instruments coordinated by an AI agent",
                                credit: "Anthropic",
                                creditUrl: "https://www.anthropic.com/news/model-hardware-standard-research-preview",
                    },
                    body: [
                                "For now, MHS access is limited to this initial cohort of labs and manufacturers, with interested organizations able to apply through modelhardwarestandard.com. Anthropic says it plans an open-source release once it has completed further safety evaluations and developed clearer best practices for physical-world agent deployment — a notably more cautious rollout than the company's typical software-only feature launches, reflecting the higher stakes of letting an AI model directly control physical machinery.",
                                "If MHS holds up outside these initial partner labs, it could matter more for Anthropic's business than any single model release: a standard interface for AI-operated hardware is the kind of infrastructure bet that, if it sticks, becomes very hard for a competitor to dislodge later.",
                              ],
          },
              ],
  },
  {
        slug: "bose-quietcomfort-2nd-gen-launch",
        title: "Bose Updates Its Iconic QuietComfort Headphones With Immersive Audio and Better ANC for Glasses Wearers",
        dek: "The QuietComfort Headphones (2nd Gen) bring Bose's TrueSpatial Immersive Audio down from the Ultra line, a six-microphone adaptive noise-cancelling array, and a $359 price tag.",
        excerpt:
                "Bose's QuietComfort Headphones (2nd Gen) add TrueSpatial Immersive Audio, adaptive ANC tuned for glasses wearers, and 24-hour battery life at $359.",
        category: "News",
        topic: "Audio",
        author: "James Whitfield",
        date: "2026-08-06",
        readTime: "5 min read",
        gradient: ["#1f2937", "#4b5563"],
        emoji: "🎧",
        images: [
          {
                    src: "https://assets.bosecreative.com/transform/abac0bc0-a0d2-4c4e-ba2d-d273906304c3/Bose-QuietComfort_Headphones_2nd_Gen_Black_01?io=transform:crop,height:1280,width:1280,path:square,gravity:center&format=avif&quality=95",
                    alt: "Bose QuietComfort Headphones (2nd Gen) in Black",
                    credit: "Bose",
                    creditUrl: "https://www.bose.com/pressroom/bose-updates-the-iconic-quietcomfort-headphones",
          },
              ],
        sources: [
          {
                    title: "Bose Updates the Iconic QuietComfort Headphones — Bose Newsroom",
                    url: "https://www.bose.com/pressroom/bose-updates-the-iconic-quietcomfort-headphones",
          },
          {
                    title: "Bose Debuts Revamped QuietComfort Headphones With Better Noise-Cancellation — Bloomberg",
                    url: "https://www.bloomberg.com/news/articles/2026-08-06/bose-debuts-revamped-quietcomfort-headphones-with-better-noise-cancellation",
          },
              ],
        content: [
          {
                    body: [
                                "Bose announced the second-generation QuietComfort Headphones on August 6, 2026, with preorders opening two days later and shipping beginning August 13. At $359, the new model sits well below Bose's flagship QuietComfort Ultra Headphones while borrowing several features that used to be exclusive to that top-tier model.",
                              ],
          },
          {
                    heading: "QuietControl noise cancellation, built for glasses wearers",
                    image: {
                                src: "https://assets.bosecreative.com/transform/3ff5d089-9fcc-4e74-88c8-08738bb012a8/Bose-QuietComfort_Headphones_2nd_Gen_Black_Expressive_01?io=transform:crop,height:1280,width:1280,path:square,gravity:center&format=avif&quality=95",
                                alt: "Bose QuietComfort Headphones (2nd Gen) worn on-ear",
                                credit: "Bose",
                                creditUrl: "https://www.bose.com/pressroom/bose-updates-the-iconic-quietcomfort-headphones",
                    },
                    body: [
                                "The new noise-cancellation system, which Bose calls QuietControl, uses a six-microphone array with adaptive feedforward controls specifically designed to compensate for gaps in the earcup seal — a detail Bose is pitching directly at glasses wearers and anyone who's struggled to get a consistent fit from over-ear headphones. Bose's proprietary SoundDesign digital signal processing handles the audio side, with support for lossless playback over wired USB-C audio at 24-bit/48kHz.",
                              ],
          },
          {
                    heading: "TrueSpatial Immersive Audio arrives from the Ultra line",
                    body: [
                                "The bigger news for anyone who's compared Bose's tiers in the past is TrueSpatial Technology, Bose's Immersive Audio system, which previously shipped only on the pricier QuietComfort Ultra Headphones. The 2nd Gen model gets three listening modes — Still, Motion, and Cinema — tuned for stationary listening, movement, and video respectively. Physical buttons on the earcups handle playback, volume, call management, listening-mode switching, and voice assistant activation, alongside an updated headband with smoother adjustable sliders and oval-shaped earcups.",
                              ],
          },
          {
                    heading: "Battery life and colors",
                    image: {
                                src: "https://assets.bosecreative.com/transform/a173d832-9d72-46bb-b4a7-6a219b03bf79/Bose-QuietComfort_Headphones_2nd_Gen_White_Smoke_01?io=transform:crop,height:1280,width:1280,path:square,gravity:center&format=avif&quality=95",
                                alt: "Bose QuietComfort Headphones (2nd Gen) in White Smoke",
                                credit: "Bose",
                                creditUrl: "https://www.bose.com/pressroom/bose-updates-the-iconic-quietcomfort-headphones",
                    },
                    body: [
                                "Bose rates the QuietComfort Headphones (2nd Gen) for up to 24 hours of standard listening, or 18 hours with Immersive Audio switched on, and a 15-minute quick charge adds roughly 2.5 hours of playback. Bluetooth Core 5.4 brings multipoint connectivity and Google Fast Pair support on Android, and an included USB-C-to-3.5mm adapter covers wired listening on devices without a headphone jack.",
                                "The headphones ship in Black and White Smoke as standing colors, with Eucalyptus Green, Dewdrop Mint, and Rosewood Mauve available as limited-edition finishes. Bose's original QuietComfort Ultra Headphones remain on sale for buyers who want the top-tier model, but the 2nd Gen QuietComfort now makes most of that experience available for $90 less.",
                              ],
          },
              ],
  },
  {
        slug: "apple-mac-mini-m6-mac-studio-m5-ultra-news",
        title: "Apple Surprise-Launches New Mac mini With M6 and M5 Pro, Refreshes Mac Studio",
        dek: "Without a keynote, Apple quietly refreshed its desktop Macs — the Mac mini now starts at $899 with the new M6 chip, while the higher-end configuration steps up to M5 Pro with three Thunderbolt 5 ports.",
        excerpt:
                "Apple's new Mac mini ships with the M6 or M5 Pro chip starting at $899, alongside an updated Mac Studio, with Neural Accelerators built into every GPU core.",
        category: "News",
        topic: "Laptops",
        author: "Ryan Bennett",
        date: "2026-08-25",
        readTime: "5 min read",
        gradient: ["#71717a", "#18181b"],
        emoji: "🖥️",
        images: [
          {
                    src: "https://www.apple.com/newsroom/images/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/article/Apple-Mac-mini-hero-260825_big.jpg.large.jpg",
                    alt: "The new Apple Mac mini with M6 and M5 Pro chips",
                    credit: "Apple Newsroom",
                    creditUrl:
                                "https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/",
          },
              ],
        sources: [
          {
                    title: "Apple unveils a more powerful Mac mini featuring the all-new M6 and M5 Pro — Apple Newsroom",
                    url: "https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/",
          },
          {
                    title: "Apple Unveils New Mac Mini, Mac Studio With Major Chip Upgrades — Bloomberg",
                    url: "https://www.bloomberg.com/news/articles/2026-08-25/apple-unveils-new-mac-mini-mac-studio-with-major-chip-upgrades",
          },
              ],
        content: [
          {
                    body: [
                                "With no event and little advance warning, Apple announced a refreshed Mac mini and Mac Studio on August 25, 2026. It's the kind of surprise mid-cycle hardware drop Apple has increasingly leaned on for its desktop Macs, and this one centers on two new chips: M6 in the entry-level Mac mini, and M5 Pro in the step-up configuration, with a Mac Studio update following the same chip family.",
                              ],
          },
          {
                    heading: "M6 and M5 Pro, by the numbers",
                    image: {
                                src: "https://www.apple.com/newsroom/images/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/article/Apple-M6-chip-260825_big.jpg.large.jpg",
                                alt: "Apple's M6 chip",
                                credit: "Apple Newsroom",
                                creditUrl:
                                              "https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/",
                    },
                    body: [
                                "The base Mac mini's M6 chip packs a 12-core CPU (two more cores than M4), a 12-core GPU with Neural Accelerators built into every core, and a dual 16-core Neural Engine, with 16GB of memory standard and configurable up to 32GB at 170GB/s of bandwidth. Apple says that adds up to 40% faster CPU performance, 4x faster AI workloads, and 2x faster graphics compared to M4, along with figures like 13.5x faster LLM processing than the original M1 chip.",
                                "Stepping up to M5 Pro gets a CPU with up to 18 cores and a GPU with up to 20 cores, featuring an enhanced shader core and third-generation ray tracing, plus up to 64GB of unified memory at 307GB/s of bandwidth — nearly double the M6's throughput. The M5 Pro configuration also adds a third Thunderbolt 5 port, up from Thunderbolt 4 on the base M6 model.",
                              ],
          },
          {
                    heading: "Connectivity and software",
                    body: [
                                "Both new Mac mini configurations carry Wi-Fi 7, Bluetooth 6, and 2.5Gb Ethernet (with 10Gb available as an option), plus two front USB-C ports, a headphone jack with high-impedance support, and rear HDMI and Ethernet ports. A new Genlock feature over USB-C lets the Mac mini sync with displays and cameras for production workflows. On the software side, both models ship with macOS 27 'Golden Gate,' which brings a more context-aware Siri with Visual Intelligence and broader Apple Intelligence features across the OS.",
                              ],
          },
          {
                    heading: "Pricing and Apple's sustainability push",
                    image: {
                                src: "https://www.apple.com/newsroom/images/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/article/Apple-Mac-mini-front-ports-260825_big.jpg.large.jpg",
                                alt: "Ports on the new Apple Mac mini",
                                credit: "Apple Newsroom",
                                creditUrl:
                                              "https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/",
                    },
                    body: [
                                "The M6 Mac mini starts at $899 ($799 for education buyers), while the M5 Pro configuration starts at $1,699 ($1,599 for education). Apple opened preorders the same day as the announcement, with units shipping September 22, 2026 across an initial 30 countries. Apple is also highlighting the enclosure's environmental profile: 50% recycled material overall, a fully recycled aluminum shell, 100% recycled rare-earth elements in the magnets, and manufacturing powered entirely by renewable electricity.",
                                "\"Mac mini has always been our most versatile Mac,\" said Johny Srouji, Apple's chief hardware officer, in the announcement. \"Today, we're taking this versatility even further.\" For anyone who already has a monitor, keyboard, and mouse they're happy with, the refreshed Mac mini remains the cheapest way into current-generation Apple silicon — and with M5 Pro now on the table, it also reaches further up the performance ladder than the Mac mini line usually has.",
                              ],
          },
              ],
  },
  {
        slug: "samsung-galaxy-book6-launch",
        title: "Samsung Expands the Galaxy Book6 Lineup With a More Affordable 14-inch Laptop",
        dek: "Starting at $799.99, the new Galaxy Book6 pairs Intel's latest Core Series 3 chips with a 25-hour battery and Samsung's Galaxy AI features, aiming to make the Galaxy Book line accessible to more buyers.",
        excerpt:
                "Samsung's new Galaxy Book6 brings Intel Core Series 3 chips, a 25-hour battery, and Galaxy AI features to a $799.99 starting price, shipping October 5.",
        category: "News",
        topic: "Laptops",
        author: "Ryan Bennett",
        date: "2026-08-31",
        readTime: "4 min read",
        gradient: ["#6d28d9", "#a78bfa"],
        emoji: "💻",
        images: [
          {
                    src: "https://img.us.news.samsung.com/us/wp-content/uploads/2026/08/31155400/01-GalaxyBook6_-KV-664x374.png",
                    alt: "The new Samsung Galaxy Book6 laptop",
                    credit: "Samsung Newsroom",
                    creditUrl: "https://news.samsung.com/us/samsung-expands-galaxy-book6-lineup-making-galaxy-book-more-accessible",
          },
              ],
        sources: [
          {
                    title: "Samsung Expands the Galaxy Book6 Lineup, Making Galaxy Book More Accessible — Samsung Newsroom",
                    url: "https://news.samsung.com/us/samsung-expands-galaxy-book6-lineup-making-galaxy-book-more-accessible",
          },
              ],
        content: [
          {
                    body: [
                                "Samsung announced a new, more affordable entry in its Galaxy Book6 lineup on August 31, 2026, aimed squarely at buyers who want the Galaxy Book design and ecosystem features without paying flagship-laptop prices. The new model joins the Galaxy Book6 family Samsung introduced earlier in the year, slotting in below the higher-end configurations on price while keeping most of the everyday experience intact.",
                              ],
          },
          {
                    heading: "What's inside",
                    image: {
                                src: "https://img.us.news.samsung.com/us/wp-content/uploads/2026/08/31181903/03-GalaxyBook6_Design.png",
                                alt: "Design details of the Samsung Galaxy Book6",
                                credit: "Samsung Newsroom",
                                creditUrl: "https://news.samsung.com/us/samsung-expands-galaxy-book6-lineup-making-galaxy-book-more-accessible",
                    },
                    body: [
                                "The new Galaxy Book6 is built around Intel's Core Series 3 and Core 5 processors, paired with 8GB or 16GB of LPDDR5X memory and 256GB or 512GB of PCIe storage. Its 14-inch WUXGA (1920x1200) LCD display runs at 350 nits with an anti-reflective coating and a 16:10 aspect ratio, and Samsung is quoting up to 25 hours of battery life from the 61.2Wh battery, with 45W USB-C charging that reaches about 33% in 30 minutes.",
                              ],
          },
          {
                    heading: "Galaxy AI features carry over",
                    body: [
                                "Despite the lower price, Samsung is keeping its Galaxy AI software features on board, including AI Select for pulling content out of what's on screen and Multi Control for working across a Galaxy phone and the laptop with a single mouse and keyboard. Those features, along with Samsung's broader Galaxy ecosystem integrations, have increasingly been the differentiator Samsung leans on to separate the Galaxy Book line from similarly priced Windows laptops running the same Intel silicon.",
                              ],
          },
          {
                    heading: "Price and availability",
                    image: {
                                src: "https://img.us.news.samsung.com/us/wp-content/uploads/2026/08/31155348/06-GalaxyBook6_AI-Select.png",
                                alt: "Samsung Galaxy AI Select feature on the Galaxy Book6",
                                credit: "Samsung Newsroom",
                                creditUrl: "https://news.samsung.com/us/samsung-expands-galaxy-book6-lineup-making-galaxy-book-more-accessible",
                    },
                    body: [
                                "The new Galaxy Book6 starts at $799.99, available in Violet Silver and Gray, and goes on sale on Samsung.com and Amazon starting October 5, 2026. \"With the new Galaxy Book6, we wanted to make the Galaxy Book experience available to more people,\" said Mincheol Lee, EVP and head of Samsung's Galaxy Ecosystems Business Team, in the announcement. \"At a more accessible price, it brings together everyday essentials including dependable performance, long-lasting battery life, connected Galaxy experiences, and Galaxy Book6's design DNA.\"",
                                "For Samsung, the move reads as a straightforward attempt to widen the Galaxy Book funnel: rather than competing purely on premium specs, the company is betting that the ecosystem features already familiar to Galaxy phone owners are enough to pull budget-laptop shoppers toward a Samsung machine instead of a generically similar Windows PC from another OEM.",
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
