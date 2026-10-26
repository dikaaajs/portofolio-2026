import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dikaaa — Frontend Developer",
  description:
    "Portofolio Muhamad Andika Rafli, Frontend Developer dari Bandung",
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
