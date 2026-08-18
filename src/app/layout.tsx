import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { site } from "@/lib/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const ngeDisplay = localFont({
  src: "../fonts/NIS-JTC-Win-M9.woff2",
  variable: "--font-nge-display",
  display: "swap",
});

const SITE_URL = "https://emilio-rosado-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${site.name} — ${site.role}`,
  description: site.summary,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.summary,
    url: SITE_URL,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.summary,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: site.email,
  address: site.location,
  sameAs: [
    "https://github.com/MaybeRosado",
    "https://www.linkedin.com/in/emilio-rosado-araujo/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${ngeDisplay.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-bg text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SkipToContent />
        <NoiseOverlay />
        <SiteHeader />
        <main id="main-content" className="flex-1 pt-16 md:pt-[72px]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
