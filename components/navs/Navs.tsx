'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'ABOUT US', href: '/#about-us' },
  { name: 'ALL FEATURES', href: '/#all-features' },
  { name: 'SIGN UP FOR FREE', href: 'https://my.busy.me' },
];

export default function Navbar() {
  const pathname = usePathname();

  const whiteRoutes = ['/terms', '/privacy-policy', '/contact'];

  const isFixedWhite = whiteRoutes.includes(pathname);

  const [hasWhiteBg, setHasWhiteBg] = useState(isFixedWhite);

  useEffect(() => {
    if (isFixedWhite) return;

    const handleScroll = () => {
      setHasWhiteBg(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFixedWhite]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasWhiteBg ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-screen-xl flex justify-between mx-auto px-5 md:px-10 py-2 md:py-5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={`/logos/${hasWhiteBg ? 'logo-black.svg' : 'logo-white.svg'}`}
            alt="Logo"
            width={150}
            height={150}
          />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle main menu"
          aria-expanded={menuOpen}
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 ${
            hasWhiteBg ? 'text-gray-700' : 'text-white'
          }`}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute md:static top-16 left-0 w-full md:flex md:flex-row md:items-center md:justify-end md:gap-10 flex flex-col bg-white md:bg-transparent`}
        >
          <ul className="font-medium flex flex-col p-4 md:flex-row md:space-x-8 md:p-0 border rounded-md bg-white md:border-0 md:bg-transparent">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    hasWhiteBg
                      ? 'text-green-600'
                      : 'text-green-600 md:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
