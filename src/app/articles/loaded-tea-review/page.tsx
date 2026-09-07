import type { Metadata } from "next";
import { Fragment } from "react";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryPill from "@/components/CategoryPill";
import RatingBadge from "@/components/RatingBadge";
import { ArticleCard } from "@/components/ArticleCard";

const SLUG = "loaded-tea-review";
const CTA_URL = "https://www.theloadedteashop.com/PROFOLIMP58749";

export function generateMetadata(): Metadata {
  const article = getArticleBySlug(SLUG)!;
  const image = article.images?.[0]?.src;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${SLUG}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/articles/${SLUG}`,
      publishedTime: article.date,
      authors: [article.author],
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: image ? [image] : undefined,
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

type Reason = {
  n: string;
  tag: string;
  side: "left" | "right";
  photo: { src: string; alt: string };
  title: string;
  body: string[];
  highlightLabel: string;
  highlight: string;
};

const REASONS: Reason[] = [
  {
    n: "01",
    tag: "The Real Problem",
    side: "left",
    photo: {
      src: "https://www.theloadedteashop.com/cdn/shop/files/drink1.png",
      alt: "The Loaded Tea Shop energy drink packet mixed into a glass",
    },
    title: "The “Energy Crash” Usually Isn’t From Caffeine — It’s From Sugar",
    body: [
      "Most loaded teas and energy drinks lean on flavored syrups to make them taste good. That's where the 2 p.m. crash actually comes from: a fast sugar spike followed by an even faster drop, which feels a lot like “the caffeine wearing off” even though caffeine had very little to do with it.",
      "The Loaded Tea Shop's packets skip the sugar entirely. Each one is built around 200mg of green tea caffeine plus a B-vitamin complex with K2 and D3 — the kind of steady-release combination that supports energy rather than spiking it.",
      "The first time I noticed the difference was on a Wednesday afternoon when 3 p.m. came and went and I hadn't reached for a second drink out of habit. That's when I started paying attention.",
    ],
    highlightLabel: "What's in it:",
    highlight:
      "0g sugar, 0g carbs, 200mg green tea caffeine per packet — the lift, without the follow-up crash.",
  },
  {
    n: "02",
    tag: "What I Tried First",
    side: "right",
    photo: {
      src: "https://www.theloadedteashop.com/cdn/shop/files/drink4.png",
      alt: "The Loaded Tea Shop loaded tea served in a cup at home",
    },
    title: "I Tried Energy Drinks, Coffee, and the $9 Tea Bar Cup. None Of Them Stuck.",
    body: [
      "Canned energy drinks gave me the jitters and left an aftertaste I never got used to. Coffee after 1 p.m. meant I'd be staring at the ceiling at midnight. And the nutrition club loaded tea, while genuinely delicious, meant a drive, a wait in line, and store hours that didn't always match mine.",
      "What made the at-home version different wasn't just convenience — it's made in a facility in Mississippi and third-party tested, the same quality bar you'd expect from a walk-up counter, minus the walk-up.",
      "I still remember doing the math in my head the first week: no drive, no line, no “sorry, we're closed” sign. Just a packet and a cup of water at my own counter.",
    ],
    highlightLabel: "Cost of a habit:",
    highlight:
      "A tea bar loaded tea runs about $8–$9 plus drive time. A packet at home works out to roughly $2 a serving, ready in under a minute.",
  },
  {
    n: "03",
    tag: "Social Proof",
    side: "left",
    photo: {
      src: "https://www.theloadedteashop.com/cdn/shop/files/Mermaid_Hero.png",
      alt: "Mermaid flavor loaded tea from The Loaded Tea Shop's best-selling lineup",
    },
    title: "Over 340 Reviews In, And The Average Still Sits At 4.6 Stars",
    body: [
      "I don't usually trust a product until I've scrolled past the first screen of five-star reviews looking for the complaints. On The Loaded Tea Shop's best-selling flavors, I had to scroll a while — the pattern that kept showing up wasn't “it's fine,” it was “I've reordered twice already.”",
      "That kind of repeat-purchase language is hard to fake at scale. It's one thing for a product to get a good first review; it's another for hundreds of people to come back and buy it again.",
      "Reading through them is actually what convinced me to try more than one flavor instead of sticking with the first one I liked.",
    ],
    highlightLabel: "By the numbers:",
    highlight:
      "4.6 out of 5 stars across 340+ verified reviews on their most popular flavor alone.",
  },
  {
    n: "04",
    tag: "Ease",
    side: "right",
    photo: {
      src: "https://www.theloadedteashop.com/cdn/shop/files/purple_drink.png",
      alt: "Loaded tea packet mixed with water, no blender or shaker needed",
    },
    title: "No Blender, No Shaker Bottle, No Clean-Up",
    body: [
      "I already own too many kitchen gadgets I don't use. The last thing I wanted was another routine that required a blender or a shaker ball rattling around in my bag.",
      "Each packet just stirs into water. No clumping, no gritty texture at the bottom of the cup — something I genuinely expected to be a problem and wasn't.",
      "Because one packet makes two 16oz servings, I usually mix half in the morning and save the rest for early afternoon, which fits my day better than a single big serving ever did.",
    ],
    highlightLabel: "Routine fit:",
    highlight: "1 packet = TWO 16oz servings — stir, sip, done in under a minute.",
  },
  {
    n: "05",
    tag: "Clean Ingredients",
    side: "left",
    photo: {
      src: "https://www.theloadedteashop.com/cdn/shop/files/tlts_grup_st_-_Copy.png",
      alt: "Assorted The Loaded Tea Shop flavor packets and mixed drinks",
    },
    title: "Zero Sugar. Zero Carbs. No Artificial Flavors Or Colors.",
    body: [
      "A lot of bottled energy drinks and tea bar syrups lean on artificial dyes and flavoring to hit that bright, candy-like taste. It works, but it's not something I want to be drinking daily.",
      "Every flavor across the lineup — from Strawberry Lemonade to Bahama Mama — is built to be zero sugar and zero carbs, without falling back on artificial colors to make up for it.",
      "It's the kind of thing you don't notice until you go looking for it on the label, and then you can't unsee how few products in this category actually pull it off.",
    ],
    highlightLabel: "Every flavor:",
    highlight:
      "0g sugar, 0g carbs, no artificial flavors or colors — on the label, not just in the marketing.",
  },
  {
    n: "06",
    tag: "Variety",
    side: "right",
    photo: {
      src: "https://www.theloadedteashop.com/cdn/shop/files/TLTSbundles8.28_2.png",
      alt: "The Loaded Tea Shop flavor bundles showing a rotation of packets",
    },
    title: "Thirty Flavors Means You're Never Stuck In A Rut",
    body: [
      "Part of what kept me driving to the tea bar was the ritual of picking a flavor off the board. I didn't expect an at-home powder to replicate that, but with thirty options — Strawberry Lemonade, Bahama Mama, Fruit Ribbon, Rocket Pop, and dozens more — rotating flavors became part of the fun again.",
      "If you genuinely can't decide, there's a 20-flavor mystery box built specifically for that, which is how I ended up trying flavors I never would have picked on my own.",
      "My current rotation lands on three favorites, but it took trying close to a dozen to get there — and that's part of what makes it feel less like a supplement and more like an actual treat.",
    ],
    highlightLabel: "Variety:",
    highlight:
      "30 flavors available, plus a 20-flavor mystery box for anyone who can't pick just one.",
  },
  {
    n: "07",
    tag: "More Than Caffeine",
    side: "left",
    photo: {
      src: "https://www.theloadedteashop.com/cdn/shop/files/HawaiianTropics_Hero.png",
      alt: "Hawaiian Tropics flavor loaded tea packed with collagen, protein, and B-vitamins",
    },
    title: "It's Not Just Caffeine — It's Collagen, Protein, and Vitamins",
    body: [
      "A canned energy drink is, functionally, caffeine and flavoring. That's fine, but it's also all you get for your money.",
      "Each packet also carries 5g of collagen and protein along with a B-vitamin complex that includes K2 and D3 — the kind of ingredient list you'd expect from a wellness shake, layered into the same packet as your afternoon pick-me-up.",
      "I wasn't looking for a collagen supplement when I started. It's turned into one of the main reasons I've kept a box in my pantry ever since.",
    ],
    highlightLabel: "Per packet:",
    highlight:
      "5g collagen + protein and a full B-vitamin complex with K2 and D3, alongside 200mg green tea caffeine.",
  },
  {
    n: "08",
    tag: "Quality Standards",
    side: "right",
    photo: {
      src: "https://www.theloadedteashop.com/cdn/shop/files/CandyCrush_Hero.png",
      alt: "Candy Crush flavor loaded tea, third-party tested and made in Mississippi",
    },
    title: "Made In Mississippi. Third-Party Tested. No Guesswork.",
    body: [
      "Powders and supplements are an easy category to be skeptical of, because quality control varies wildly brand to brand — and you usually can't tell the difference just by looking at the packet.",
      "The Loaded Tea Shop manufactures in a Mississippi facility and has every batch third-party tested, on top of being free of gluten and GMOs across the lineup.",
      "That's the kind of detail I go looking for before I recommend anything to a friend, and it's the reason I felt comfortable letting my family try it too.",
    ],
    highlightLabel: "Standards:",
    highlight:
      "Manufactured in Mississippi, third-party tested, gluten-free and non-GMO across every flavor.",
  },
  {
    n: "09",
    tag: "The Math",
    side: "left",
    photo: {
      src: "https://www.theloadedteashop.com/cdn/shop/files/SassySissy_Hero.png",
      alt: "Sassy Sissy flavor loaded tea, roughly $2 a serving made at home",
    },
    title: "The Math Stopped Making Sense At $9 A Cup",
    body: [
      "Three or four tea bar visits a week at around $9 each adds up to well over $100 a month — and that's before counting gas or the ten minutes each way.",
      "Packets are currently $4 each (down from $8) with free shipping on orders over $20, and since one packet makes two servings, that's roughly $2 per cup at home.",
      "I didn't switch to save money — I switched for the convenience — but the savings are the reason it's stayed part of my routine for months instead of fading out like most habits do.",
    ],
    highlightLabel: "Do the math:",
    highlight:
      "$4 per packet (50% off $8), two servings each, free shipping over $20 — a fraction of a single tea bar visit.",
  },
  {
    n: "10",
    tag: "Low-Risk Trial",
    side: "right",
    photo: {
      src: "https://cdn.shopify.com/s/files/1/0592/3661/4237/files/slhero-3.png",
      alt: "The Loaded Tea Shop Strawberry Lemonade loaded tea",
    },
    title: "If You Don't Love Your First Flavor, They Make It Right",
    body: [
      "My biggest hesitation before ordering was picking the “wrong” flavor and being stuck with a whole box of something I wouldn't finish — a real risk when you're choosing from thirty options sight unseen.",
      "The Loaded Tea Shop backs orders with what they call their Loaded Tea Promise: if a flavor isn't for you, their team works with you to make it right, rather than leaving you to write it off.",
      "That's ultimately what got me to place the first order instead of continuing to think about it — the downside was small enough that trying it was the obvious move.",
    ],
    highlightLabel: "Low risk:",
    highlight:
      "Backed by the Loaded Tea Promise — if a flavor misses, their team helps make it right.",
  },
];

const TESTIMONIALS = [
  {
    initials: "JR",
    name: "Jenna R.",
    meta: "Mother of three · Verified buyer",
    body: "Between school runs and errands, I was stopping at the nutrition club almost every day and spending way more than I wanted to admit. A friend sent me a link to The Loaded Tea Shop and I figured I'd try one box before writing it off. Strawberry Lemonade was gone within a week, and my teenager — who I'd been trying to steer away from energy drinks — actually asks for it by name now.",
    result: "“We're not doing daily tea bar runs anymore, and everyone in the house is happier about it.”",
  },
  {
    initials: "DK",
    name: "Daniel K.",
    meta: "Remote worker · Verified buyer",
    body: "I have a sensitive stomach and most energy drinks leave me regretting it an hour later. The zero sugar, zero carbs label is what got me to try it, but the fact that it didn't upset my stomach at all is what made me reorder. I've gone through three boxes since my first order.",
    result: "“Reordered three times in two months — that's basically a personal record for me.”",
  },
  {
    initials: "AT",
    name: "Alicia T.",
    meta: "Early-morning gym-goer · Verified buyer",
    body: "I wanted something before my 6 a.m. workouts that wasn't just caffeine and sugar. The collagen and protein per packet is what sold me, and it's become part of my pre-gym routine — mix it, drink half in the car, save the rest for after.",
    result: "“One packet before every workout, and I'm not crashing by noon anymore.”",
  },
];

const FEATURES = [
  { icon: "⚡", title: "200mg Green Tea Caffeine", desc: "A steady lift without the jitters of energy drinks." },
  { icon: "🚫", title: "0g Sugar & 0g Carbs", desc: "Every flavor, no exceptions." },
  { icon: "💪", title: "5g Collagen + Protein", desc: "More than just a caffeine hit." },
  { icon: "🌿", title: "B-Complex + K2 & D3", desc: "A fuller nutrient profile than a typical energy drink." },
  { icon: "🍹", title: "30 Flavors", desc: "Plus a 20-flavor mystery box." },
  { icon: "🏭", title: "Made In Mississippi", desc: "Third-party tested, gluten-free, non-GMO." },
];

export default function LoadedTeaReviewPage() {
  const article = getArticleBySlug(SLUG);
  if (!article) return null;

  const related = getRelatedArticles(article);
  const categoryHref = `/${article.category.toLowerCase().replace(" ", "-")}`;
  const heroImage = article.images?.[0];

  return (
    <article className="lta-root mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <style>{`
.lta-root{--lta-sans:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;--lta-serif:Georgia,'Times New Roman',serif;--lta-text:#1c2430;--lta-muted:#7a6a8c;--lta-accent:#3f0791;--lta-accent2:#f702ad;--lta-green:#16a34a;--lta-red:#c0392b;--lta-light:#f6ecff;--lta-border:#eccbf0;--lta-dark-bg:#2a0a5c;color:var(--lta-text)}
.lta-wrap{font-family:var(--lta-sans)}
.lta-article-tag{display:inline-block;background:var(--lta-accent);color:#fff;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:2px;margin-bottom:16px}
.lta-hero h1{font-family:var(--lta-serif);line-height:1.25}
.lta-hero-image{width:100%;border-radius:10px;overflow:hidden;margin-bottom:10px;box-shadow:0 4px 20px rgba(15,37,68,.14)}
.lta-hero-image img{width:100%;object-fit:cover;max-height:440px}
.lta-hero-image-caption{font-size:12px;color:var(--lta-muted);text-align:center;margin-bottom:26px;font-style:italic}
.lta-intro-text{font-family:var(--lta-serif);font-size:17px;line-height:1.85;margin-bottom:16px}
.lta-intro-text strong{color:var(--lta-accent)}
.lta-note-box{background:#fffbea;border-left:4px solid #f5a623;padding:14px 18px;font-size:14px;margin-bottom:8px;border-radius:0 4px 4px 0}
.lta-rainbow-bar{height:4px;background:linear-gradient(90deg,#901afd,var(--lta-accent2),#ff8a3d,var(--lta-green));margin:32px 0;border-radius:2px}
.lta-reason-section{margin:32px 0}
.lta-reason-number-label{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--lta-accent2);margin-bottom:12px;display:flex;align-items:center;gap:10px}
.lta-reason-number-label::before{content:'';display:inline-block;width:28px;height:2px;background:var(--lta-accent2)}
.lta-reason-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;align-items:stretch;border:1px solid var(--lta-border);border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06)}
.lta-reason-grid.lta-img-left .lta-reason-img{order:1}
.lta-reason-grid.lta-img-left .lta-reason-text{order:2}
.lta-reason-grid.lta-img-right .lta-reason-text{order:1}
.lta-reason-grid.lta-img-right .lta-reason-img{order:2}
.lta-reason-img{background:#f6ecff;min-height:260px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0;overflow:hidden;position:relative}
.lta-reason-img.lta-has-photo img{width:100%;height:100%;min-height:260px;object-fit:cover}
.lta-reason-text{padding:28px 26px;background:#fff;display:flex;flex-direction:column;justify-content:center}
.lta-reason-title{font-family:var(--lta-serif);font-size:clamp(16px,2vw,20px);font-weight:700;line-height:1.3;color:#0f1b2d;margin-bottom:14px}
.lta-reason-body-text{font-size:14.5px;line-height:1.78;color:#2a2a2a}
.lta-reason-body-text p{margin-bottom:12px}
.lta-reason-body-text p:last-child{margin-bottom:0}
.lta-highlight-box{background:var(--lta-light);border:1px solid var(--lta-border);border-left:4px solid var(--lta-accent);padding:14px 16px;margin:14px 0 0;border-radius:0 6px 6px 0;font-size:13.5px;line-height:1.6}
.lta-highlight-box strong{color:var(--lta-accent)}
.lta-stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin:20px 0 0}
.lta-stat-card{background:var(--lta-light);border:1px solid var(--lta-border);padding:20px 14px;text-align:center}
.lta-stat-num{font-family:var(--lta-serif);font-size:34px;font-weight:700;color:var(--lta-accent);line-height:1}
.lta-stat-label{font-size:12px;color:var(--lta-muted);margin-top:6px;line-height:1.45}
.lta-cta-box{background:linear-gradient(135deg,var(--lta-dark-bg),var(--lta-accent));color:#fff;border-radius:8px;padding:28px 24px;text-align:center;margin:32px 0}
.lta-cta-headline{font-family:var(--lta-serif);font-size:20px;font-weight:700;margin-bottom:14px}
.lta-cta-btn{display:inline-block;background:var(--lta-accent2);color:#fff !important;text-decoration:none;padding:16px 40px;border-radius:4px;font-size:16px;font-weight:700;transition:opacity .15s}
.lta-cta-btn:hover{opacity:.88}
.lta-cta-sub{font-size:12px;opacity:.75;margin-top:10px}
.lta-section-heading{font-family:var(--lta-serif);font-size:24px;font-weight:700;text-align:center;margin:8px 0 24px;color:#0f1b2d}
.lta-testimonial{background:var(--lta-light);border:1px solid var(--lta-border);border-radius:8px;padding:24px;margin-bottom:16px}
.lta-t-top{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.lta-t-avatar{width:48px;height:48px;border-radius:50%;background:#e3c6f5;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;color:var(--lta-accent);flex-shrink:0}
.lta-t-name{font-weight:700;font-size:15px}
.lta-t-meta{font-size:12px;color:var(--lta-muted)}
.lta-t-stars{color:#f5a623;font-size:13px;margin-top:2px}
.lta-t-body{font-size:14.5px;line-height:1.75;margin-bottom:14px}
.lta-t-result{background:#fff;border:1px solid #b8dfc8;border-left:4px solid var(--lta-green);border-radius:0 6px 6px 0;padding:12px 16px;font-size:14px;font-style:italic;color:var(--lta-green);font-weight:600;line-height:1.5}
.lta-product-dark{background:var(--lta-dark-bg);color:#fff;border-radius:10px;padding:32px 26px;margin:36px 0}
.lta-product-dark-title{font-family:var(--lta-serif);font-size:22px;font-weight:700;text-align:center;margin-bottom:22px}
.lta-feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.lta-feature-item{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:6px;padding:16px 14px;display:flex;align-items:flex-start;gap:12px}
.lta-feature-icon{font-size:20px;flex-shrink:0}
.lta-feature-text-title{font-weight:700;font-size:13.5px;margin-bottom:3px}
.lta-feature-text-desc{font-size:12.5px;color:#e3c6f5;line-height:1.5}
.lta-two-paths{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:32px 0}
.lta-path{border-radius:8px;padding:22px 20px}
.lta-path-bad{background:#fff5f5;border:1px solid #f0c0be}
.lta-path-good{background:#f0faf4;border:1px solid #b8dfc8}
.lta-path-title{font-family:var(--lta-serif);font-size:15px;font-weight:700;margin-bottom:14px}
.lta-path-bad .lta-path-title{color:var(--lta-red)}
.lta-path-good .lta-path-title{color:var(--lta-green)}
.lta-path-list{list-style:none;font-size:13.5px;line-height:1.7}
.lta-path-list li{margin-bottom:10px;display:flex;gap:8px;align-items:flex-start}
.lta-check{color:var(--lta-green);font-weight:700}
.lta-cross{color:var(--lta-red);font-weight:700}
.lta-promo-box{background:#fff;border:2px solid var(--lta-accent2);border-radius:10px;padding:30px 24px;text-align:center;margin:36px 0}
.lta-promo-flavor{font-size:12.5px;color:var(--lta-muted);text-transform:uppercase;letter-spacing:.08em;font-weight:700;margin-bottom:10px}
.lta-promo-price-row{display:flex;align-items:baseline;justify-content:center;gap:12px;margin-bottom:6px}
.lta-promo-old{font-size:20px;color:var(--lta-muted);text-decoration:line-through}
.lta-promo-new{font-family:var(--lta-serif);font-size:40px;font-weight:700;color:var(--lta-accent)}
.lta-promo-save{display:inline-block;background:#fdecea;color:var(--lta-red);font-size:12px;font-weight:700;padding:4px 10px;border-radius:20px;margin-bottom:20px}
.lta-guarantee-box{background:var(--lta-light);border:1px dashed var(--lta-accent2);border-radius:10px;padding:26px 24px;text-align:center;margin:28px 0}
.lta-guarantee-icon{font-size:30px;margin-bottom:10px}
.lta-guarantee-badge{width:84px;height:auto;margin:0 auto 12px;display:block}
.lta-guarantee-title{font-family:var(--lta-serif);font-size:17px;font-weight:700;margin-bottom:8px;color:var(--lta-accent)}
.lta-guarantee-text{font-size:13.5px;color:#3a3a3a;max-width:520px;margin:0 auto;line-height:1.6}
.lta-final-cta{background:linear-gradient(135deg,var(--lta-dark-bg),var(--lta-accent));color:#fff;border-radius:10px;padding:40px 24px;text-align:center;margin:36px 0}
.lta-final-cta h2{font-family:var(--lta-serif);font-size:26px;font-weight:700;margin-bottom:16px;line-height:1.3}
.lta-disclosure{background:#f6f7f9;border-radius:6px;padding:14px 16px;margin:28px 0;font-size:12px;color:var(--lta-muted);line-height:1.7}
@media(max-width:640px){
  .lta-reason-grid{grid-template-columns:1fr}
  .lta-reason-grid.lta-img-left .lta-reason-img{order:1}
  .lta-reason-grid.lta-img-left .lta-reason-text{order:2}
  .lta-reason-grid.lta-img-right .lta-reason-img{order:1}
  .lta-reason-grid.lta-img-right .lta-reason-text{order:2}
  .lta-reason-img{min-height:200px}
  .lta-stats-row{grid-template-columns:1fr}
  .lta-two-paths{grid-template-columns:1fr}
  .lta-feature-grid{grid-template-columns:1fr}
  .lta-promo-new{font-size:32px}
}
      `}</style>

      <div className="lta-wrap">
        <Breadcrumb
          items={[
            { label: article.category, href: categoryHref },
            { label: article.title },
          ]}
        />

        <div className="mt-4 flex items-center gap-3">
          <CategoryPill category={article.category} />
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            {article.topic}
          </span>
        </div>

        <div className="lta-hero mt-4">
          <span className="lta-article-tag">Reader Favorite · Nutrition</span>
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-lg text-muted">{article.dek}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted">
            <span className="font-semibold text-foreground">{article.author}</span>
            <span>·</span>
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          {article.rating !== undefined && (
            <div className="mt-6">
              <RatingBadge rating={article.rating} />
            </div>
          )}

          {heroImage && (
            <>
              <div className="lta-hero-image mt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroImage.src} alt={heroImage.alt} loading="eager" />
              </div>
              <div className="lta-hero-image-caption">
                The Loaded Tea Shop&rsquo;s lineup — real photo from theloadedteashop.com
              </div>
            </>
          )}

          <p className="lta-intro-text">
            For almost a year, my &ldquo;treat myself&rdquo; ritual was the same: drive fifteen
            minutes to the nutrition club near my office, wait in a line of cars, and hand over
            nine dollars for a loaded tea in a cup the size of my forearm. I told myself it was
            worth it — the energy, the flavor, the little afternoon reset. What I didn&rsquo;t add
            up was how much it was actually costing me, in both money and time, three or four
            times a week.
          </p>
          <p className="lta-intro-text">
            Then a coworker mentioned, almost in passing, that she&rsquo;d stopped going entirely.
            She&rsquo;d found <strong>The Loaded Tea Shop</strong>, an online shop that sells the
            same style of flavored, vitamin-and-caffeine loaded tea as a simple powder packet you
            mix with water at home. I was skeptical — a powder tasting anything like the real
            thing seemed like a stretch — but I ordered a sampler anyway, mostly to prove myself
            right.
          </p>
          <p className="lta-intro-text">
            I didn&rsquo;t prove myself right. Six weeks and eleven flavors later, I hadn&rsquo;t
            been back to the tea bar once, and I&rsquo;d stopped buying the canned energy drinks I
            used to keep in my desk drawer, too.
          </p>
          <p className="lta-intro-text">
            I&rsquo;m writing this because three different friends have now asked me what
            I&rsquo;m drinking out of my &ldquo;weird water bottle&rdquo; at work, and I&rsquo;m
            tired of explaining it one text message at a time. So here&rsquo;s the full,
            unglamorous list of why I switched — and why it stuck.
          </p>

          <div className="lta-note-box">
            <strong>Note:</strong> I was genuinely doubtful that a shelf-stable powder could
            replace a made-to-order loaded tea. It did — and for reasons that had almost nothing
            to do with flavor. Here&rsquo;s what actually changed my mind.
          </div>
        </div>

        {REASONS.slice(0, 3).map((r) => (
          <Fragment key={r.n}>
            <div className="lta-rainbow-bar" />
            <ReasonBlock reason={r} />
          </Fragment>
        ))}

        <div className="lta-cta-box">
          <div className="lta-cta-headline">Ready To Try It For Yourself?</div>
          <a
            className="lta-cta-btn"
            href={CTA_URL}
            target="_blank"
            rel="noopener sponsored"
          >
            Try The Loaded Tea Shop — 50% Off Today →
          </a>
          <div className="lta-cta-sub">
            ⏰ Limited-time pricing · Free shipping over $20 · Ships fast
          </div>
        </div>

        {REASONS.slice(3).map((r) => (
          <Fragment key={r.n}>
            <div className="lta-rainbow-bar" />
            <ReasonBlock reason={r} />
          </Fragment>
        ))}

        <div className="lta-rainbow-bar" />

        <h2 className="lta-section-heading">What Other Home-Brewers Are Saying</h2>
        {TESTIMONIALS.map((t) => (
          <div className="lta-testimonial" key={t.initials}>
            <div className="lta-t-top">
              <div className="lta-t-avatar">{t.initials}</div>
              <div>
                <div className="lta-t-name">{t.name}</div>
                <div className="lta-t-meta">{t.meta}</div>
                <div className="lta-t-stars">★★★★★</div>
              </div>
            </div>
            <div className="lta-t-body">{t.body}</div>
            <div className="lta-t-result">{t.result}</div>
          </div>
        ))}

        <div className="lta-product-dark">
          <div className="lta-product-dark-title">What&rsquo;s Actually In Every Packet</div>
          <div className="lta-feature-grid">
            {FEATURES.map((f) => (
              <div className="lta-feature-item" key={f.title}>
                <div className="lta-feature-icon">{f.icon}</div>
                <div>
                  <div className="lta-feature-text-title">{f.title}</div>
                  <div className="lta-feature-text-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="lta-section-heading">Tea Bar Runs vs. Making It At Home</h2>
        <div className="lta-two-paths">
          <div className="lta-path lta-path-bad">
            <div className="lta-path-title">✗ The Tea Bar Habit</div>
            <ul className="lta-path-list">
              <li><span className="lta-cross">✗</span> $8–$9 per cup, several times a week</li>
              <li><span className="lta-cross">✗</span> 15–20 minute round trip, every time</li>
              <li><span className="lta-cross">✗</span> Closed exactly when you need it most</li>
              <li><span className="lta-cross">✗</span> Sugar-syrup base, crash by mid-afternoon</li>
              <li><span className="lta-cross">✗</span> Same two or three flavors on the board</li>
            </ul>
          </div>
          <div className="lta-path lta-path-good">
            <div className="lta-path-title">✓ Making It At Home</div>
            <ul className="lta-path-list">
              <li><span className="lta-check">✓</span> About $2 per serving, $4 per packet on sale</li>
              <li><span className="lta-check">✓</span> Ready at your own counter in under a minute</li>
              <li><span className="lta-check">✓</span> Available any time, day or night</li>
              <li><span className="lta-check">✓</span> Zero sugar, zero carbs, steady energy</li>
              <li><span className="lta-check">✓</span> 30 flavors to rotate through whenever you want</li>
            </ul>
          </div>
        </div>

        <div className="lta-promo-box">
          <div className="lta-promo-flavor">The Loaded Tea Shop · Best-Selling Flavors</div>
          <div className="lta-promo-price-row">
            <div className="lta-promo-old">$8.00</div>
            <div className="lta-promo-new">$4.00</div>
          </div>
          <div className="lta-promo-save">SAVE 50% TODAY</div>
          <br />
          <a className="lta-cta-btn" href={CTA_URL} target="_blank" rel="noopener sponsored">
            Get My Loaded Tea — 50% Off Today →
          </a>
          <div className="lta-cta-sub" style={{ color: "var(--lta-muted)", marginTop: 12 }}>
            Free shipping on orders over $20 · Ships fast
          </div>
        </div>

        <div className="lta-guarantee-box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lta-guarantee-badge"
            src="https://www.theloadedteashop.com/cdn/shop/files/money_back_teashop.png"
            alt="The Loaded Tea Shop money-back guarantee badge"
            loading="lazy"
          />
          <div className="lta-guarantee-title">The Loaded Tea Promise</div>
          <div className="lta-guarantee-text">
            If a flavor isn&rsquo;t the right fit for you, The Loaded Tea Shop&rsquo;s team will
            work with you to make it right. It&rsquo;s the same low-risk trial that got me to
            place my first order instead of thinking about it for another month.
          </div>
        </div>

        <div className="lta-final-cta">
          <h2>Stop Driving Across Town For Your Loaded Tea Fix.</h2>
          <a className="lta-cta-btn" href={CTA_URL} target="_blank" rel="noopener sponsored">
            Get The Loaded Tea Shop — 50% Off Today →
          </a>
          <div className="lta-cta-sub">
            ⏰ Limited-time pricing · Free shipping over $20 · Ships fast
          </div>
        </div>

        <div className="lta-disclosure">
          This is an independent advertorial and contains affiliate links, including links to
          theloadedteashop.com. If you make a purchase through a link on this page, Nexoratech
          may earn a commission at no additional cost to you. Product descriptions, ingredient
          claims, and pricing reflect information published by the manufacturer at the time of
          writing and are subject to change — please confirm current details on the official
          site before purchasing. These statements have not been evaluated by the FDA. This
          product is not intended to diagnose, treat, cure, or prevent any disease. Individual
          results and experiences may vary.
        </div>

        {article.sources.length > 0 && (
          <div className="mt-10 border-t border-border pt-6">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">
              Sources
            </h3>
            <ul className="space-y-1">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand hover:underline"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display mb-4 text-xl font-extrabold tracking-tight">
              Related Stories
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function ReasonBlock({ reason }: { reason: Reason }) {
  const imgBlock = (
    <div className="lta-reason-img lta-has-photo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={reason.photo.src} alt={reason.photo.alt} loading="lazy" />
    </div>
  );

  const textBlock = (
    <div className="lta-reason-text">
      <div className="lta-reason-title">{reason.title}</div>
      <div className="lta-reason-body-text">
        {reason.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="lta-highlight-box">
        <strong>{reason.highlightLabel}</strong> {reason.highlight}
      </div>
    </div>
  );

  const isThree = reason.n === "03";

  return (
    <div className="lta-reason-section">
      <div className="lta-reason-number-label">
        Reason {reason.n} · {reason.tag}
      </div>
      <div className={`lta-reason-grid ${reason.side === "left" ? "lta-img-left" : "lta-img-right"}`}>
        {reason.side === "left" ? (
          <>
            {imgBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imgBlock}
          </>
        )}
      </div>
      {isThree && (
        <div className="lta-stats-row">
          <div className="lta-stat-card">
            <div className="lta-stat-num">4.6★</div>
            <div className="lta-stat-label">Average rating across 340+ verified reviews</div>
          </div>
          <div className="lta-stat-card">
            <div className="lta-stat-num">30</div>
            <div className="lta-stat-label">Flavors to choose from, no two visits identical</div>
          </div>
          <div className="lta-stat-card">
            <div className="lta-stat-num">2×</div>
            <div className="lta-stat-label">16oz servings from a single packet</div>
          </div>
        </div>
      )}
    </div>
  );
}
