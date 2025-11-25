'use client';

import React, { useRef } from 'react';
import StepCard, { StepItem } from '@/components/StepCard/StepCard';
import GlassTextBehind from '@/components/GlassTextBehind/glass-text-behind';

interface InteractiveRoadmapProps {
  steps: StepItem[];
  title?: string;
}

export default function InteractiveRoadmap({
  steps,
  title,
}: InteractiveRoadmapProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const goNext = () => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.children[0].clientWidth;
    sliderRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  const goPrev = () => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.children[0].clientWidth;
    sliderRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
  };

  return (
    <GlassTextBehind
      title={title || 'Workflow'}
      center
      dynamicTitleSize={false}
      dynamicMargin={false}
    >
      {/* DESKTOP LAYOUT (unchanged) */}
      <div className="relative hidden md:flex flex-row flex-wrap justify-center items-start gap-12 mt-10">
        {steps.map((step, index) => (
          <div
            key={`${step.id}-${index}`}
            className="relative flex flex-col items-center group"
          >
            <StepCard item={step} />
          </div>
        ))}
      </div>

      {/* MOBILE/TABLET SLIDER */}
     
      <div className="relative md:hidden flex items-center justify-center h-[calc(100vh-4rem)] w-full">
        {/* Floating Icon Buttons */}
        <button
          onClick={goPrev}
          className="
      absolute left-2 top-1/2 -translate-y-1/2 z-20
      bg-white/40 backdrop-blur-md border border-white/30
      rounded-full p-2 shadow-sm active:scale-90
    "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goNext}
          className="
      absolute right-2 top-1/2 -translate-y-1/2 z-20
      bg-white/40 backdrop-blur-md border border-white/30
      rounded-full p-2 shadow-sm active:scale-90
    "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slider Track */}
        <div
          ref={sliderRef}
          className="
      flex flex-row gap-6
      overflow-x-scroll no-scrollbar snap-x snap-mandatory
      scroll-smooth px-8
    "
        >
          {steps.map((step, index) => (
            <div
              key={`mobile-${step.id}-${index}`}
              className="snap-center shrink-0"
            >
              <StepCard item={step} />
            </div>
          ))}
        </div>
      </div>
    </GlassTextBehind>
  );
}
