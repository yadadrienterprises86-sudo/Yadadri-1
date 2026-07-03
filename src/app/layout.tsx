import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Yadadri Enterprises | Construction, Granite Mining, Drilling & Blasting",
  description: "Sri Yadadri Enterprises is a premier contractor specializing in heavy civil construction, granite quarry mining, blast hole drilling, controlled open blasting, and heavy machinery operations. Serving infrastructure development with safety and precision.",
  keywords: "Sri Yadadri Enterprises, construction, granite mining, quarrying, drilling, controlled blasting, open blasting, crawler drills, hydraulic excavators, Hyderabad, Karimnagar, Telangana, infrastructure, heavy machinery rental",
  authors: [{ name: "Sri Yadadri Enterprises" }],
  openGraph: {
    title: "Sri Yadadri Enterprises | Construction, Granite Mining, Drilling & Blasting",
    description: "Premier infrastructure development, granite mining, blast-hole drilling, controlled blasting, and loading operations.",
    url: "https://www.sriyadadrient.com",
    siteName: "Sri Yadadri Enterprises",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Sri Yadadri Enterprises - Industrial Site Operations",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Yadadri Enterprises | Construction, Mining, and Drilling",
    description: "Providing premium infrastructure development, granite extraction, and controlled blasting solutions.",
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  alternates: {
    canonical: "https://www.sriyadadrient.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sri Yadadri Enterprises",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "@id": "https://www.sriyadadrient.com/#organization",
    "url": "https://www.sriyadadrient.com",
    "telephone": "+918374276995",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No 48, Road No 3, Sri Sai Nagar Colony, Chintal",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500054",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4912,
      "longitude": 78.4526
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com",
      "https://www.linkedin.com"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100 font-sans">
        <Navbar />
        <main className="flex-grow pt-[70px] md:pt-[80px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
