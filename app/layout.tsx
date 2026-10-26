import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dikaaa | Frontend Developer",
  description:
    "Portfolio Muhamad Andika Rafli, Frontend Developer dari Bandung. Berpengalaman membangun website responsif menggunakan Next.js, React, dan Tailwind CSS.",

  openGraph: {
    title: "Muhamad Andika Rafli | Frontend Developer",
    description:
      "Jelajahi portfolio, proyek, keahlian, dan pengalaman saya sebagai Frontend Developer.",
    url: "https://dikaaa.web.id",
    siteName: "Andika Rafli Portfolio",
    images: [
      {
        url: "/og-portfolio.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhamad Andika Rafli — Frontend Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhamad Andika Rafli | Frontend Developer",
    description:
      "Portfolio Frontend Developer — Next.js, React, dan Tailwind CSS.",
    images: ["/og-portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
