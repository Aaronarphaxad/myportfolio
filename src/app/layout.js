import { Inter, Outfit, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: "Aaron Omale",
  description: "Aaron's portfolio site!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} ${spaceGrotesk.variable} ${inter.variable} font-outfit antialiased min-h-screen`}
      >
        <Navbar />
        <div className="mt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
