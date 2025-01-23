import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ScrollToTop from "@/components/ui/scroll-to-top";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Anas P - Fullstack developer",
  description: "Full stack web developer based in Kerala, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased h-full`}>
        <div className="neon-background">
          <div className="neon-circle"></div>
        </div>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
