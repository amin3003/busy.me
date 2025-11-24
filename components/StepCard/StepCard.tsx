'use client';

import React from 'react';
import Image from 'next/image';

export type StepItem = {
  id: number;
  title: string;
  subtitle?: string;
  icon?:any,
  type?: 'time-range' | 'time-single' | 'content' | string;
  date?: string;
  start?: string;
  end?: string;
  time?: string;
  content?: string;
  description?: string;
  how_it_works?: string;
};


const StepCard: React.FC<{ item: StepItem }> = ({ item }) => {
  return (
    <div
      className="w-72 h-80 flex flex-col p-5 bg-white/30  backdrop-blur-md
                rounded-xl shadow-md border border-white/20 text-[#464646]
                transition-transform duration-300 ease-in-out hover:scale-105
                hover:shadow-lg"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center text-center grow">
        {item.icon && (
          <div
            className="w-10 h-10 mb-3 text-[#464646]"
            dangerouslySetInnerHTML={{ __html: item.icon }}
          />
        )}

        <h3 className="font-bold text-lg line-clamp-2">{item.title}</h3>

        {item.subtitle && (
          <p className="text-xs mt-1 line-clamp-2">{item.subtitle}</p>
        )}

        {item.type === 'time-range' && (
          <p className="text-xs mt-2">
            <span className="font-semibold">{item.date}</span> {item.start} →{' '}
            {item.end}
          </p>
        )}
        {item.type === 'time-single' && (
          <p className="text-xs mt-2">
            <span className="font-semibold">{item.date}</span> {item.time}
          </p>
        )}
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-black my-3" />

      {/* Bottom Section */}
      {item.description && <p className="text-sm mb-2">{item.description}</p>}
      {/* {item.how_it_works && (
    <p className="text-xs text-gray-700">{item.how_it_works}</p>
  )} */}
    </div>
  );
};

export default StepCard;
