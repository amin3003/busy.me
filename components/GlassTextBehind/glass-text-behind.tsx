'use client';

import React from 'react';

interface GlassTextBehindProps {
  id?: string;
  title?: string;
  center?: boolean;
  dynamicTitleSize?: boolean;
  dynamicMargin?: boolean;
  children: React.ReactNode;
}

export default function GlassTextBehind({
  id,
  title,
  center = false,
  dynamicTitleSize = false,
  dynamicMargin = false,
  children,
}: GlassTextBehindProps) {
  const titleClasses = `
    opacity-100 select-none !leading-none !m-0 !p-0 font-extrabold
    bg-gradient-to-r from-[#6DC43A] to-[#ffffff] bg-clip-text text-transparent
    ${center ? 'text-center' : ''}
    ${
      dynamicTitleSize
        ? 'text-[12vw] lg:text-[min(20vw,260px)]'
        : 'text-[12vw] lg:text-[260px]'
    }
  `;

  const contentWrapperClasses =
    title != null
      ? dynamicMargin
        ? 'mt-[-40px] lg:mt-[-5vw] lg:mt-[-160px]'
        : 'mt-[-40px] lg:mt-[-160px]'
      : '';

  return (
    <div id={id}>
      {title && <h1 className={titleClasses}>{title}</h1>}
      <div className={contentWrapperClasses}>{children}</div>
    </div>
  );
}
