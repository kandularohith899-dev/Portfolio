import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohith Kandula — Python Developer & Data Analyst Portfolio",
  description:
    "Official portfolio of Rohith Kandula. Python Developer, Data Analyst, SQL Developer, and Machine Learning Enthusiast based in Andhra Pradesh, India. Specializing in AI predictive maintenance, Power BI dashboards, and web development.",
  keywords: [
    "Rohith Kandula",
    "Python Developer",
    "Data Analyst",
    "SQL Developer",
    "Machine Learning Enthusiast",
    "Deep Learning",
    "Power BI",
    "Tableau",
    "Next.js Portfolio",
    "Andhra Pradesh India",
  ],
  authors: [{ name: "Rohith Kandula" }],
  openGraph: {
    title: "Rohith Kandula Portfolio",
    description:
      "Python Developer | Data Analyst | SQL Developer | Machine Learning Enthusiast",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
