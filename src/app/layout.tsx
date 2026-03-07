import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/providers/PageTransition";
import CustomCursor from "@/components/ui/CustomCursor";
// import { AnimeStickers } from "@/components/ui/AnimeStickers";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Mugunthan Packers & Movers | Professional Shifting Services",
  description: "Reliable and fast packers and movers services in Salem, Tamil Nadu. We offer house shifting, office relocation, and vehicle transport services.",
  keywords: ["packers and movers", "movers in salem", "house shifting", "office relocation", "vehicle transport"],
  authors: [{ name: "Mugunthan Packers" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mugunthan Packers & Movers | Professional Shifting Services",
    description: "Reliable and fast packers and movers services in Salem, Tamil Nadu. We offer house shifting, office relocation, and vehicle transport services.",
    url: "https://mugunthanpackers.com",
    siteName: "Mugunthan Packers",
    images: [
      {
        url: "https://mugunthanpackers.com/assets/mugundhan_logo.png",
        width: 1200,
        height: 630,
        alt: "Mugunthan Packers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mugunthan Packers & Movers",
    description: "Reliable and fast packers and movers services in Salem, Tamil Nadu.",
    images: ["https://mugunthanpackers.com/assets/mugundhan_logo.png"],
  },
  alternates: {
    canonical: "https://mugunthanpackers.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mugunthan Packers & Movers",
  "image": "https://mugunthanpackers.com/assets/mugundhan_logo.png",
  "@id": "https://mugunthanpackers.com",
  "url": "https://mugunthanpackers.com",
  "telephone": "+919876543210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Fairlands",
    "addressLocality": "Salem",
    "addressRegion": "TN",
    "postalCode": "636016",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.6643,
    "longitude": 78.1460
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BreadcrumbSchema />
      </head>
      <body className="font-body bg-background text-primary min-h-screen antialiased selection:bg-accent selection:text-white relative overflow-x-hidden" suppressHydrationWarning>
        <div className="fixed inset-0 bg-grainy pointer-events-none z-[100]" />

        {/* Brand Background Gradients */}
        <div className="fixed inset-0 z-[-2] bg-white">
          <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px]" />
        </div>

        <CustomCursor />
        {/* <AnimeStickers /> */}

        <SmoothScrollProvider>
          <Header />
          <PageTransition>
            <main className="relative z-10">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
