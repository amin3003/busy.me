'use client';

import React from 'react';
import rawData from '@/data/carousel.json';
import StepCard, { StepItem } from '@/components/StepCard/StepCard';
import InteractiveRoadmap from '@/components/HorizontalRoadmap/InteractiveRoadmap';

/* Background images provided by user */
const BACKGROUND_IMAGES = [
  '/features/collapsed.png',
  '/features/tasks-all.png',
  '/features/notes.png',
  '/features/events.png',
];

type Slide = {
  id: number;
  title: string;
  image: { src: string; alt: string };
  cards: StepItem[];
};

const slides = rawData as Slide[];

export default function HeroSinglePage() {
  // Ensure unique keys for cards
  const firstFourCards: StepItem[] = slides.slice(0, 4).map((s, index) =>
    s.cards?.length
      ? { ...s.cards[0], id: index }
      : {
          id: index,
          img: '/home/avatar.jpg',
          title: s.title,
          type: 'content',
          content: '',
        }
  );

  return (
    <section
      id="workFlow"
      className="  relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 h-screen isolate pt-14 lg:px-8 "
    >
      {/* =========================================================
            BACKGROUND SCROLLING IMAGES
      ========================================================== */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        {/* LEFT DIAGONAL */}
        {/* <div className="absolute left-[-30%] top-[-25%] w-[160%] h-1/2 -rotate-20 overflow-hidden">
          <div className="track-a flex gap-6 items-center h-full">
            {[...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES].map((img, i) => (
              <div
                key={`row-a-${i}`}
                className="shrink-0 w-[360px] sm:w-[420px] md:w-[520px]"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-auto rounded-2xl object-cover drop-shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* RIGHT DIAGONAL */}
        {/* <div className="absolute right-[-30%] top-[-25%] w-[160%] h-1/2 rotate-20 overflow-hidden">
          <div className="track-b flex gap-6 items-center h-full">
            {[...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES].map((img, i) => (
              <div
                key={`row-b-${i}`}
                className="shrink-0 w-[360px] sm:w-[420px] md:w-[520px]"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* =========================================================
            FOREGROUND — HORIZONTAL ROADMAP
      ========================================================== */}
      <div className="w-screen  flex flex-col gap-6 z-10">
        {/* <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-white">
          {slides[0]?.title}
        </h1> */}

        {/* Horizontal interactive roadmap */}
        <InteractiveRoadmap steps={firstFourCards} title="Workflow" />
      </div>

      {/* =========================================================
            ANIMATIONS — TRUE INFINITE MARQUEE LOOP
      ========================================================== */}
      <style jsx>{`
        .track-a {
          animation: scrollLeft 35s linear infinite;
        }
        .track-b {
          animation: scrollRight 40s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media (max-width: 768px) {
          .track-a {
            animation-duration: 22s;
          }
          .track-b {
            animation-duration: 26s;
          }
        }
      `}</style>
    </section>
  );
}
