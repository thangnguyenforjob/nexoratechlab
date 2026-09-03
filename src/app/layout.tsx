import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nexoratech — Tech Reviews, News & Buying Guides",
    template: "%s | Nexoratech",
  },
  description:
    "Independent, hands-on reviews of laptops, phones, and audio gear, plus the tech news and buying guides that actually help you decide.",
  other: { "fo-verify": "4779ac85-10a4-4dbd-9c59-c290a5887443" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
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
