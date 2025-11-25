'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  const scrollToAbout = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative isolate h-screen flex items-center justify-center overflow-hidden">
      {/* Background image using next/image */}
      <Image
        src="/home/banner.jpg"
        alt="Banner Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Gradient overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/40" />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-3xl w-full mt-20 md:mt-2">
        <h1 className="text-2xl md:text-5xl w-full font-bold text-white mb-6 capitalize">
          A new way of working with emails
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
          Busy.me by Appsbooth helps you organize your emails, tasks, events,
          and notes in one secure workspace. Sign in with your Appsbooth account
          to stay focused, connected, and productive.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://my.busy.me"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#6DC43A] px-8 py-3 text-sm font-semibold text-white hover:shadow-lg transition-all"
          >
            SIGN UP FOR FREE
          </Link>
        </div>
      </div>
    </div>
  );
}
