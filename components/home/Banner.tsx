'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/home/banner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="relative z-[2] text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          A new way of working with emails
        </h1>
        <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-10">
          Busy.me by Appsbooth helps you organize your emails, tasks, events,
          and notes in one secure workspace. Sign in with your Appsbooth account
          to stay focused, connected, and productive.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://my.busy.me"
            className="rounded-md bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-700 transition-all"
          >
            SIGN UP FOR FREE
          </Link>

          <button
            onClick={() => {
              const about = document.getElementById('about');
              if (about) about.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm font-semibold text-white hover:text-green-400 transition-all"
          >
            Learn more <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
