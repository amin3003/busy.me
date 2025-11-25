'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  const scrollToAbout = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative isolate h-screen flex items-center justify-center  w-full bg-gray-900 overflow-hidden">
      {/* Background image using next/image */}
      {/* <Image
        src="/home/banner.jpg"
        alt="Banner Background"
        fill
        className="object-cover object-center -z-10"
        priority
      /> */}

      {/* Top Gradient Shape */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-72 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[600px] sm:h-[900px]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="w-full h-full bg-linear-to-tr from-[#6DC43A] to-[#464646] opacity-30 rotate-30"
        />
      </div>

      {/* Bottom Gradient Shape */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] -translate-x-1/2 w-[900px] sm:w-[1200px] h-[600px] sm:h-[900px]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="w-full h-full bg-linear-to-tr from-[#6DC43A] to-[#464646] opacity-30"
        />
      </div>

      {/* Gradient overlay */}
      {/* <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/10" /> */}

      {/* Hero content */}
      <div className="relative text-center z-10 flex flex-col items-center justify-center px-6 max-w">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 capitalize">
          A new way of working with emails
        </h1>
        <p className="text-lg text-center md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl">
          Busy.me by Appsbooth helps you organize your emails, tasks, events,
          and notes in one secure workspace. Sign in with your Appsbooth account
          to stay focused, connected, and productive.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Link
            href="https://my.busy.me"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white/30  backdrop-blur-md
                rounded-xl shadow-md border border-white/20 text-[#ffffff] px-8 py-3 text-sm font-semibold  hover:shadow-lg transition-all"
          >
            SIGN UP FOR FREE
          </Link>
          <a
            className="mx-auto flex flex-row gap-6 mt-5 animate-bounce"
            href="#workFlow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-arrow-down-icon lucide-circle-arrow-down"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8" />
              <path d="m8 12 4 4 4-4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
