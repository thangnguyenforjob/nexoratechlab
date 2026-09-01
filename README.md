# Nexoratech

A Tom's Guide-inspired tech news & review website built with Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## What's inside

- Homepage with a featured hero, trending sidebar, latest-stories grid, and per-category strips (Best Picks / Reviews / News)
- - Category pages: /reviews, /best-picks, /news
  - - Topic pages: /topics/laptops, /topics/phones, /topics/audio
    - - Article pages at /articles/[slug] with rating badge, pros/cons, sources, and related stories
      - - 5 fully-written, fact-checked articles (see Sources on each article page)
        - - Fully responsive, no external image/font dependencies (safe to build offline)
         
          - ## Run locally
         
          - npm install
          - npm run dev
         
          - Open http://localhost:3000
         
          - ## Build for production
         
          - npm run build
          - npm run start
         
          - ## Deploy
         
          - The fastest path is Vercel (vercel.com/new), made by the Next.js team, free tier available:
         
          - 1. Push this folder to a GitHub repo.
            2. 2. Go to vercel.com/new, import the repo, click Deploy.
               3. 3. Point your domain (e.g. nexoratech.online) at the Vercel project in the Vercel dashboard -> Domains.
                 
                  4. Netlify and Cloudflare Pages also work with the standard Next.js build.
                 
                  5. ## Add real content
                 
                  6. Edit src/data/articles.ts - each article is a plain object (title, dek, category, topic, author, date, content sections, optional rating/pros/cons). Add a new object to the articles array and a new page is generated automatically at build time; no other file needs to change.
                 
                  7. ## Replace placeholder art
                 
                  8. Article hero/thumbnail images are currently CSS-gradient placeholders (src/components/PlaceholderImage.tsx) so the project has zero external dependencies. Swap in real photos by replacing that component's usage with Next's <Image> component and adding an image field to each article.
                  9. 
