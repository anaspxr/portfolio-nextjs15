import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ScrollToTop from "@/components/ui/scroll-to-top";
import AnimatedCursor from "react-animated-cursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Anas P - Fullstack developer",
  description:
    "Full stack web developer based in Kerala, India. Specializing in MERN stack and Next.js. Skilled in building scalable and high performant web applications using modern technologies like React, Next.js, Node.js, Express, MongoDB, and more.",
  openGraph: {
    title: "Anas P | Fullstack developer",
    description: "Full stack web developer based in Kerala, India.",
    url: "https://anasp.me",
    images: [
      {
        url: "/preview-image.png",
        width: 1200,
        height: 630,
        alt: "ANAS P",
      },
    ],
    type: "website",
  },
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
        <AnimatedCursor
          color="109, 73, 209" // Lavenderish color (R, G, B)
          innerSize={8} // Inner circle size
          outerSize={30} // Outer circle size
          innerScale={1} // Inner scale on hover
          outerScale={1.5} // Outer scale on hover
          outerAlpha={0.3} // Outer circle transparency
          innerStyle={{
            backgroundColor: "rgb(109, 73, 209)", // Lavender inner circle
            mixBlendMode: "normal",
          }}
          outerStyle={{
            backgroundColor: "rgba(159, 123, 239, 0.3)", // Light lavender outer circle
            mixBlendMode: "lighten",
          }}
        />
      </body>
    </html>
  );
}
