import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Me' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <html lang="en">
      <body
        className={
          'antialiased min-h-dvh grid grid-rows-[auto_1fr_auto] md:grid-cols-[1fr_3fr] bg-gray-950 text-white'
        }>
        <header className="md:h-dvh md:sticky md:top-0 border-r-2 border-white-400">
          <nav className="grid grid-flow-col md:grid-rows-5 md:min-h-dvh text-xl">
            <Link
              href={'/'}
              className="col-span-2 w-fit md:w-full md:text-left py-10 px-4 content-center">
              <h1 className="text-center md:w-fit md:m-auto">Ali Zaifie</h1>
            </Link>
            <ul className="col-span-4 grid grid-flow-col md:row-span-3 md:grid-flow-row justify-around">
              {navLinks.map((link: { href: string; label: string }, index) => (
                <li key={index} className="grid">
                  <Link
                    className={`py-10 self-center text-center  mw:w-full md:text-left ${poppins.variable}`}
                    href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="">{children}</div>
        <footer>
          <nav className="grid grid-auto-col md:hidden">
            <ul className="col-span-4 grid grid-flow-col justify-around">
              {navLinks.map((link: { href: string; label: string }, index) => (
                <li key={index} className="grid">
                  <Link
                    className={`py-10 self-center text-center ${poppins.variable}`}
                    href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
