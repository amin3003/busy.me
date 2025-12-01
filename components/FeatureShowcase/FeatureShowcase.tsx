
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import benefitsData from '@/data/benefits.json';

type BenefitKey = keyof typeof benefitsData;

interface FeatureItem {
  label: string;
  zoomPos: { x: string; y: string };
}

interface SubPart {
  title: string;
  picName: string;
  features: FeatureItem[];
}

interface BenefitCategory {
  idPrefix: string;
  description: string;
  subParts: SubPart[];
}

//  Highlight Box Styles 
const highlightStyles = `
  .highlight-box {
    position: absolute;
    width: 130px;
    height: 130px;
    border: 3px solid #6DC43A;
    border-radius: 12px;
    pointer-events: none;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 12px rgba(0,0,0,0.25);
  }
`;

export default function FeatureOverlayPanelFixed() {
  const navKeys = Object.keys(benefitsData) as BenefitKey[];

  const [selectedNav, setSelectedNav] = useState<BenefitKey>(navKeys[0]);
  const [activeSubPartIndex, setActiveSubPartIndex] = useState<number>(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(
    null
  );
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const current: BenefitCategory = useMemo(
    () => benefitsData[selectedNav],
    [selectedNav]
  );

  const activeSubPart = current.subParts[activeSubPartIndex];

  const openSubPart = (idx: number) => {
    setActiveSubPartIndex(idx);
    setActiveFeatureIndex(null);
    setIsOverlayOpen(true);
  };

  const onSubtitleClick = (featureIndex: number) => {
    setActiveFeatureIndex((prev) =>
      prev === featureIndex ? null : featureIndex
    );
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setActiveFeatureIndex(null);
  };

  //  get active feature
  const activeFeature =
    activeFeatureIndex !== null && activeSubPart?.features?.[activeFeatureIndex]
      ? activeSubPart.features[activeFeatureIndex]
      : null;

  //  zoom coordinates
  const spotX = activeFeature?.zoomPos?.x ?? '50%';
  const spotY = activeFeature?.zoomPos?.y ?? '50%';

  return (
    <section className="w-full bg-slate-50 px-4 sm:px-6 lg:px-20 py-10 lg:py-14 flex flex-col gap-6">
      {/* Inject highlight box CSS */}
      <style>{highlightStyles}</style>

      <h2 className="text-3xl sm:text-5xl lg:text-7xl font-semibold mb-6 sm:mb-10 text-center lg:text-left uppercase leading-tight">
        <span className="text-[#6DC43A]">busy.me</span>{' '}
        <span className="text-[#464646]">Key Features</span>
      </h2>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
        {navKeys.map((k) => (
          <button
            key={k}
            onClick={() => {
              setSelectedNav(k);
              setActiveSubPartIndex(0);
              setActiveFeatureIndex(null);
              setIsOverlayOpen(false);
            }}
            className={`px-4 py-2 rounded-md text-sm sm:text-base font-medium transition ${
              selectedNav === k
                ? 'bg-slate-100 text-[#6DC43A] shadow-sm'
                : 'text-black hover:bg-slate-50'
            }`}
          >
            {k.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex lg:flex-row gap-6">
        <div className="w-1/3 flex flex-col gap-3">
          {current.subParts.map((subPart, idx) => (
            <div
              key={idx}
              className="border rounded-lg bg-white shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-5 py-3 text-black bg-gray-50 hover:bg-gray-100 flex justify-between items-center font-medium"
                onClick={() => setActiveSubPartIndex(idx)}
              >
                <span>{subPart.title}</span>
                <span
                  className={`transform transition-transform ${
                    activeSubPartIndex === idx ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {activeSubPartIndex === idx && (
                <div className="p-4 space-y-2">
                  {subPart.features.map((feature, fIdx) => (
                    <button
                      key={fIdx}
                      onClick={() => onSubtitleClick(fIdx)}
                      className={`w-full text-left px-3 py-2 rounded-md transition flex items-center justify-between text-sm sm:text-base ${
                        activeFeatureIndex === fIdx
                          ? 'bg-slate-100 text-[#6DC43A] font-semibold shadow-sm'
                          : 'hover:bg-slate-50 text-black'
                      }`}
                    >
                      <span>{feature.label}</span>
                      {activeFeatureIndex === fIdx && (
                        <span className="ml-2 text-xs text-slate-400">
                          ZOOM
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Image */}
        <div className="relative w-2/3 h-[500px] bg-white overflow-hidden rounded-2xl shadow-sm flex-grow">
          {activeSubPart && (
            <>
              <motion.div
                className="absolute inset-0 overflow-hidden"
                animate={{
                  scale:
                    activeFeatureIndex !== null &&
                    activeSubPart.features[activeFeatureIndex]
                      ? 2
                      : 1,
                  transformOrigin: `${spotX} ${spotY}`,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={activeSubPart.picName}
                  alt={`${selectedNav} - ${activeSubPart.title}`}
                  fill
                  className="object-contain object-center"
                  priority
                />
              </motion.div>

              {/* Highlight Box */}
              {activeFeature && (
                <div
                  className="highlight-box"
                  style={{ left: spotX, top: spotY }}
                />
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col gap-3">
        {current.subParts.map((subPart, idx) => (
          <button
            key={idx}
            onClick={() => openSubPart(idx)}
            className="w-full bg-white rounded-lg shadow-md p-4 text-left font-medium text-black"
          >
            {subPart.title}
          </button>
        ))}
      </div>

      {/* Mobile Overlay */}
      {isOverlayOpen && activeSubPart && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-end bg-black/50"
          onClick={closeOverlay}
        >
          <div
            className="bg-white rounded-t-2xl max-h-[90%] overflow-auto p-4 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={closeOverlay}
                className="text-gray-500 hover:text-gray-800 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-black">
                {activeSubPart.title}
              </h3>
            </div>

            <div className="relative w-full h-64 sm:h-96 mb-4 overflow-hidden rounded-lg">
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale:
                    activeFeatureIndex !== null &&
                    activeSubPart.features[activeFeatureIndex]
                      ? 2
                      : 1,
                  transformOrigin: `${spotX} ${spotY}`,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={activeSubPart.picName}
                  alt={`${selectedNav} - ${activeSubPart.title}`}
                  fill
                  className="object-contain object-center pointer-events-none"
                  priority
                />
              </motion.div>

              {/* Highlight Box Mobile */}
              {activeFeatureIndex !== null && (
                <div
                  className="highlight-box"
                  style={{
                    left: spotX,
                    top: spotY,
                  }}
                />
              )}
            </div>

            <div className="space-y-2">
              {activeSubPart.features.map((feature, fIdx) => (
                <button
                  key={fIdx}
                  onClick={() => onSubtitleClick(fIdx)}
                  className={`w-full text-left px-3 py-2 rounded-md transition flex items-center justify-between text-sm ${
                    activeFeatureIndex === fIdx
                      ? 'bg-slate-100 text-[#6DC43A] font-semibold shadow-sm'
                      : 'hover:bg-slate-50 text-black'
                  }`}
                >
                  <span>{feature.label}</span>
                  {activeFeatureIndex === fIdx && (
                    <span className="ml-2 text-xs text-slate-400">ZOOM</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
