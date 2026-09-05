import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const SITE_TITLE = "Nexoratech — Tech Reviews, News & Buying Guides";
const SITE_DESCRIPTION =
    "Independent, hands-on reviews of laptops, phones, and audio gear, plus the tech news and buying guides that actually help you decide.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_TITLE,
          template: "%s | Nexoratech",
    },
    description: SITE_DESCRIPTION,
    alternates: {
          canonical: "/",
    },
    openGraph: {
          type: "website",
          siteName: "Nexoratech",
          title: SITE_TITLE,
          description: SITE_DESCRIPTION,
          url: SITE_URL,
    },
    twitter: {
          card: "summary_large_image",
          title: SITE_TITLE,
          description: SITE_DESCRIPTION,
    },
    robots: {
          index: true,
          follow: true,
    },
    verification: {
        google: "DhS3kXlAea1lMfnty4SNAv9Ik0U26cJDT6igc29c17Y",
    },
    other: { "fo-verify": "4779ac85-10a4-4dbd-9c59-c290a5887443" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
          <html lang="en" className="h-full antialiased">
              <meta
                  {...({
                      name: "impact-site-verification",
                      value: "4ffb4a51-b060-4881-b970-48c0f6cf229f",
                  } as any)}
                  />
                <body className="flex min-h-full flex-col bg-background text-foreground">
                        <Script
                                    src="https://www.googletagmanager.com/gtag/js?id=G-JGR2F3W8GV"
                                    strategy="afterInteractive"
                                  />
                        <Script id="ga4-init" strategy="afterInteractive">
                          {`
                                      window.dataLayer = window.dataLayer || [];
                                                  function gtag(){dataLayer.push(arguments);}
                                                              gtag('js', new Date());
                                                                          gtag('config', 'G-JGR2F3W8GV');
                                                                                    `}
                        </Script>
                        <Header />
                                <main className="flex-1">{children}</main>
                        <Footer />
                </body>
          </html>
        );
}
