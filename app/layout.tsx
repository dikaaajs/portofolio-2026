import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dikaaa | Frontend Developer",
  metadataBase: new URL("https://dikaaa.web.id"),
  description:
    "Portfolio Muhamad Andika Rafli, Frontend Developer dari Bandung. Berpengalaman membangun website responsif menggunakan Next.js, React, dan Tailwind CSS.",

  openGraph: {
    title: "Muhamad Andika Rafli | Frontend Developer",
    description:
      "Jelajahi portfolio, proyek, keahlian, dan pengalaman saya sebagai Frontend Developer.",
    url: "/",
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
    images: ["/og-portfolio.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var l=localStorage.getItem('portfolio-language');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;if(l==='en'||l==='id')document.documentElement.lang=l;}catch(e){}})();` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

