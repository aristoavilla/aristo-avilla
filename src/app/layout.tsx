import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aristo Avilla | Product Designer",
  description: "Portfolio website of Aristo Avilla, Product Designer with 10+ years of experience building digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
