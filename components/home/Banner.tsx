'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <div className="relative isolate h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/banner.jpg')" }}
      />

      {/* Gradient Overlay / Shapes */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          A new way of working with{' '}
          <span className="text-[#6DC43A]">emails</span>
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
            className="rounded-md bg-[#6DC43A] px-8 py-3 text-sm font-semibold text-white hover:shadow-lg transition-all"
          >
            SIGN UP FOR FREE
          </Link>

          <button
            onClick={() => {
              const about = document.getElementById('about');
              if (about) about.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm font-semibold text-white hover:text-[#6DC43A] transition-colors"
          >
            Learn more <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="w-[72rem] h-[36rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 -translate-x-1/2 rotate-30 absolute left-1/2 top-[-10rem]"
        />
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="w-[72rem] h-[36rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 -translate-x-1/2 absolute left-1/2 bottom-[-10rem]"
        />
      </div>
    </div>
  );
}
