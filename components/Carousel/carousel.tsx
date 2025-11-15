'use client';

import { useState } from 'react';
import Image from 'next/image';
import StepCard, { StepItem } from '@/components/StepCard/StepCard';
import rawData from '@/data/carousel.json';

type Slide = {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  cards: StepItem[];
};

export default function Carousel() {
  const slides = rawData as Slide[];
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  const visibleSlides = slides.slice(0, current + 1);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden bg-gray-50 flex items-center justify-center px-10">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col md:flex-row items-center justify-around gap-4 px-6 md:px-12 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          {/* Left: title + cards */}
          <div className="flex-1 flex flex-col justify-center w-full md:w-1/2 max-h-[85%]">
            <div className="min-h-20 md:min-h-[100px]">
              {index < 4 && (
                <span className="hidden md:block opacity-100 text-9xl font-extrabold">
                  {index + 1}
                </span>
              )}
              <h2
                className={`text-xl text-center md:text-left mt-7 ${
                  index < 4 ? 'md:mt-[-60px]' : ''
                } md:ml-10 md:text-3xl font-semibold text-gray-900 leading-snug`}
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
            </div>

            {/* Mobile cards */}
            <div className="block md:hidden mt-4">
              {slide.cards.length > 0 && (
                <div className="grid grid-cols-1 gap-4">
                  {slide.cards.map((item) => (
                    <StepCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Desktop: current + previous slides */}
            <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 mt-6">
              {visibleSlides.flatMap((s, slideIndex) =>
                s.cards.map((item) => {
                  const opacityClass =
                    slideIndex === current || slideIndex === 4
                      ? 'opacity-100'
                      : 'opacity-60';
                  return (
                    <div
                      key={`${s.id}-${item.id}`}
                      className={`transition-opacity duration-500 ${opacityClass}`}
                    >
                      <StepCard item={item} />
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              width={800} // adjust based on your design
              height={600}
              className="w-[90%] md:w-[95%] h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/20 group-hover:bg-black/40">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/20 group-hover:bg-black/40">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
