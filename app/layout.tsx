import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LinkList from "@/components/link-list";
import PersonalCard from "@/components/personal-card";
import Bento from "@/components/bento";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "bg-background text-foreground grid max-h-dvh grid-rows-[auto_1fr] overflow-clip antialiased md:grid-cols-[300px_4fr] md:gap-10"
        }
      >
        <header className="md:sticky md:top-0">
          <nav className="grid max-w-full grid-cols-[300px_auto] border-r-2 md:mt-4 md:h-dvh md:max-h-dvh md:grid-cols-1 md:grid-rows-[1fr_2fr] md:gap-4">
            <div className="hidden md:grid">
              <PersonalCard></PersonalCard>
            </div>
            <Link href={"/"} className="m-4 text-nowrap md:hidden">
              My Portfolio
            </Link>
            <LinkList></LinkList>
          </nav>
        </header>
        <div className="grid max-h-dvh overflow-auto">{children}</div>
      </body>
    </html>
  );
}
