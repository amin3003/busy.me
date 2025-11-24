'use client';

import React from 'react';
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
  return (
    <GlassTextBehind
      title={title || 'Workflow'}
      center
      dynamicTitleSize={false}
      dynamicMargin={false}
    >
      <div className="relative flex flex-row flex-wrap justify-center items-start gap-12 mt-10">
        {steps.map((step, index) => (
          <div
            key={`${step.id}-${index}`}
            className="relative flex flex-col items-center group"
          >
            {/* Step number circle */}
            {/* <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white font-bold mb-3 z-10 shadow-md">
              {index + 1}
            </div> */}

            {/* Connector arrow to next step */}
            {/* {index < steps.length - 1 && (
              <div className="absolute -top-4 -right-15 z-0 hidden md:flex items-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#818181"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right-icon"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </div>
            )} */}

            {/* Card */}
            <StepCard item={step} />
          </div>
        ))}
      </div>
    </GlassTextBehind>
  );
}
