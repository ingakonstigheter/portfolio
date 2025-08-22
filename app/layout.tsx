import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LinkList from "@/components/link-list";
import PersonalCard from "@/components/personal-card";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

/* const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
}); */

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
          "grid min-h-dvh grid-rows-[auto_1fr_auto] bg-gray-950 text-white antialiased md:grid-cols-[1fr_3fr]"
        }
      >
        <header className="border-white-400 border-r-2 md:sticky md:top-0 md:h-dvh">
          <nav className="grid grid-cols-[1fr_3fr] bg-blue-200 md:min-h-dvh md:grid-cols-1 md:grid-rows-[1fr_4fr] md:text-xl">
            <div className="flex justify-center bg-amber-800">
              <PersonalCard></PersonalCard>
              <Link href={"/"} className="md:hidden">
                <p className="m-4">{`My Portfolio`}</p>
              </Link>
            </div>
            <LinkList className="bg-red-400"></LinkList>
          </nav>
        </header>
        <div className="">{children}</div>
        <footer className="border-t-2 md:hidden">
          <nav>
            <ul className="grid grid-flow-col justify-center">
              <LinkList></LinkList>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
