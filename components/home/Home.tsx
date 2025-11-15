'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Banner,
  Carousel,
  FeatureShowcase,
  AboutUs,
} from '@/components';

export default function Home() {
  const pathname = usePathname();

  // Function to scroll to a section by ID
  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash);
    if (el) {
      const yOffset = -90; // adjust for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Scroll on initial load
    if (window.location.hash) {
      scrollToHash(window.location.hash.replace('#', ''));
    }

    // Listen for hash changes on the same page
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) scrollToHash(hash);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [pathname]);

  return (
    <div className="">
      <Banner />
      <Carousel />
      <section id="all-features">
        <FeatureShowcase />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
     
    </div>
  );
}
