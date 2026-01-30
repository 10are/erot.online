import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erot.online"),
  title: {
    default: "EROT - Erken Okuryazarlık Testi | Uygulayıcı Eğitimi",
    template: "%s | EROT",
  },
  description:
    "EROT (Erken Okuryazarlık Testi), çocukların ilkokula ve okuma-yazma sürecine hazır olup olmadıklarını belirleyen bilimsel temelli bir değerlendirme aracıdır. Prof. Dr. Tevhide Kargın ve Prof. Dr. Birkan Güldenoğlu tarafından verilen uygulayıcı eğitimleri.",
  keywords: [
    "EROT",
    "Erken Okuryazarlık Testi",
    "okuryazarlık",
    "disleksi",
    "okuma güçlüğü",
    "çocuk gelişimi",
    "okul öncesi eğitim",
    "sesbilgisel farkındalık",
    "harf bilgisi",
    "özel eğitim",
    "uygulayıcı eğitimi",
    "Tevhide Kargın",
    "Birkan Güldenoğlu",
    "Ev Okulu Derneği",
  ],
  authors: [
    { name: "Prof. Dr. Tevhide Kargın" },
    { name: "Prof. Dr. İ. Birkan Güldenoğlu" },
  ],
  creator: "Ev Okulu Derneği",
  publisher: "Ev Okulu Derneği",
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
    type: "website",
    locale: "tr_TR",
    url: "https://erot.online",
    siteName: "EROT - Erken Okuryazarlık Testi",
    title: "EROT - Erken Okuryazarlık Testi | Uygulayıcı Eğitimi",
    description:
      "EROT, çocukların okuma-yazma sürecine hazırbulunuşluğunu ölçen bilimsel bir testtir. Uygulayıcı olmak için eğitimlere katılın.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EROT - Erken Okuryazarlık Testi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EROT - Erken Okuryazarlık Testi",
    description:
      "Çocukların okuma-yazma sürecine hazırbulunuşluğunu ölçen bilimsel test. Uygulayıcı eğitimleri için başvurun.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://erot.online",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "EROT - Erken Okuryazarlık Testi",
              description:
                "EROT, çocukların erken okuryazarlık becerilerini değerlendiren bilimsel bir testtir.",
              url: "https://erot.online",
              sameAs: ["https://www.evokuluapp.com"],
              founder: [
                {
                  "@type": "Person",
                  name: "Prof. Dr. Tevhide Kargın",
                  jobTitle: "Profesör",
                },
                {
                  "@type": "Person",
                  name: "Prof. Dr. İ. Birkan Güldenoğlu",
                  jobTitle: "Profesör",
                },
              ],
              offers: {
                "@type": "Offer",
                name: "EROT Uygulayıcı Eğitimi",
                url: "https://www.evokuluapp.com/tum-egitimler/erot-testi-erken-okuryazarlik-testi-uygulayici-egitimi-mart-2026",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
