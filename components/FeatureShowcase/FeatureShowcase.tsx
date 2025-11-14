'use client';
import { useState, useMemo } from 'react';
import benefitsData from '@/data/benefits.json';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeatureShowcase() {
  const navKeys = Object.keys(benefitsData);
  const [selectedNav, setSelectedNav] = useState(navKeys[0]);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);
  const [activeZoomIndex, setActiveZoomIndex] = useState(-1);

  const data: any = benefitsData;
  const current = useMemo(() => data[selectedNav], [selectedNav]);

  function onSubtitleClick(index: number) {
    setActiveZoomIndex((prev) => (prev === index ? -1 : index));
    setSelectedFeatureIndex(index);
  }

  function resetZoom() {
    setActiveZoomIndex(-1);
  }

  return (
    <section className="w-full bg-slate-50 px-4 sm:px-6 lg:px-20 py-10 lg:py-14 lg:min-h-screen flex flex-col justify-between">
      <div className="w-full flex flex-col flex-grow">
        {/* --- Title --- */}
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-semibold mb-6 sm:mb-10 text-center lg:text-left uppercase leading-tight">
          <span className="text-[#6DC43A]">busy.me</span>{' '}
          <span className="text-[#464646]">Key Features</span>
        </h2>

        {/* --- Navigation Tabs --- */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
          {navKeys.map((k) => (
            <button
              key={k}
              onClick={() => {
                setSelectedNav(k);
                setSelectedFeatureIndex(0);
                setActiveZoomIndex(-1);
              }}
              className={`px-4 py-2 rounded-md text-sm sm:text-base font-medium transition ${
                selectedNav === k
                  ? 'bg-slate-100 text-[#6DC43A] shadow-sm'
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              {k.toUpperCase()}
            </button>
          ))}
        </div>

        {/* --- Main Content (List + Image) --- */}
        <div className="flex flex-col lg:flex-row flex-grow items-stretch shadow-sm overflow-hidden rounded-2xl bg-white w-full">
          {/* Left: Feature list */}
          <div className="w-full lg:w-1/3 p-5 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-center">
            <p className="text-lg sm:text-2xl text-[#464646] font-bold mb-4 sm:mb-6">
              {current.description}
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {current.features.map((f: any, idx: number) => (
                <li key={idx}>
                  <button
                    onClick={() => onSubtitleClick(idx)}
                    className={`w-full text-left px-3 py-2 rounded-md transition flex items-center justify-between text-sm sm:text-base ${
                      activeZoomIndex === idx
                        ? 'bg-slate-100 text-[#6DC43A] font-semibold shadow-sm'
                        : 'hover:bg-slate-50 text-[#464646]'
                    }`}
                  >
                    <span>{f.label}</span>
                    {activeZoomIndex === idx && (
                      <span className="ml-2 text-xs text-slate-400">ZOOM</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image section */}
          <div className="relative w-full lg:w-2/3 h-72 sm:h-96 lg:h-auto bg-white overflow-hidden flex-grow">
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: activeZoomIndex !== -1 ? 2 : 1,
                transformOrigin:
                  activeZoomIndex !== -1
                    ? `${current.features[activeZoomIndex].zoomPos.x} ${current.features[activeZoomIndex].zoomPos.y}`
                    : 'center center',
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={current.picName}
                alt={`${selectedNav} preview`}
                fill
                className="object-contain object-right"
                priority
              />
            </motion.div>

            <button
              onClick={resetZoom}
              aria-label="Reset zoom"
              className="absolute inset-0 focus:outline-none cursor-zoom-out"
            />

            <div className="absolute right-2 bottom-2 sm:right-5 sm:bottom-4 rounded-md bg-white/90 text-xs sm:text-sm px-2 sm:px-3 py-1 shadow-sm hidden md:flex items-center gap-2">
              <svg
                className="w-4 h-4 text-slate-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3v3M12 18v3M3 12h3M18 12h3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-slate-700">
                Tap a subtitle to zoom that area
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
