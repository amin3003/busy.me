'use client';

import React from 'react';
import Image from 'next/image';

export type StepItem = {
  id: number;
  img: string;
  title: string;
  subtitle?: string;
  type?: 'time-range' | 'time-single' | 'content';
  date?: string;
  start?: string;
  end?: string;
  time?: string;
  content?: string;
};

interface StepCardProps {
  item: StepItem;
}

const StepCard: React.FC<StepCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-2 items-start px-4 py-4 bg-white shadow rounded-2xl hover:shadow-lg transition-all duration-300 w-full h-full">
      {/* Icon */}
      <div className="shrink-0 flex flex-row items-center justify-start gap-3 w-full" >
        <Image
          src={item.img}
          alt={item.title}
          width={28}
          height={28}
          className="object-contain"
        />

        <h3 className="font-semibold text-gray-900 text-sm leading-tight truncate">
            {item.title}
          </h3>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          

          {item.subtitle && (
            <p className="text-gray-500 text-xs mt-0.5 sm:mt-1 leading-snug">
              {item.subtitle}
            </p>
          )}

          <div className="text-gray-900 mt-1 sm:mt-2 text-xs leading-snug">
            {item.type === 'time-range' ? (
              <span>
                <span className="font-semibold">{item.date}</span>{' '}
                <time>{item.start}</time> → <time>{item.end}</time>
              </span>
            ) : item.type === 'time-single' ? (
              <span>
                <span className="font-semibold">{item.date}</span>{' '}
                <time>{item.time}</time>
              </span>
            ) : (
              <p>{item.content}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
