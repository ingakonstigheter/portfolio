import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400","500","600","700"],
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

const navLinks = [
  {href: "/", label: "Home"},
  {href: "/projects", label: "Projects"},
  {href: "/about", label: "About Me"},
  {href: "/contact", label: "Contact"}
]

  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        <header>
          <nav className="grid grid-flow-col text-2xl">
            <Link href={"/"} className="p-4"><h1>Ali Zaifie</h1></Link>
            <ul className="grid grid-flow-col justify-around">
              {navLinks.map((link: {href: string, label: string}, index) => 
              <li key={index} className="grid">
                <Link className={`self-center text-center ${poppins.variable}`} href={link.href}>{link.label}</Link>
              </li>
              )}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
