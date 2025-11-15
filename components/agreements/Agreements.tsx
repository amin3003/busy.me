'use client';

import { useState, useEffect } from 'react';
import { marked } from 'marked';

interface AgreementProps {
  name: string; // "privacy_policy" or "terms_of_service"
}

export default function Agreement({ name }: AgreementProps) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch(`/agreements/${name}.md`);
        if (res.ok) {
          setMarkdown(await res.text());
        } else {
          setMarkdown('# Error: Markdown file not found.');
        }
      } catch {
        setMarkdown('# Error: Markdown file not found.');
      }
    };

    fetchMarkdown();
  }, [name]);

  const title =
    name === 'privacy_policy'
      ? 'Privacy Policy'
      : name === 'terms_of_service'
      ? 'Terms of Service'
      : 'Agreement';

  return (
    <div className="bg-white min-h-screen pt-28 pb-24 px-5 sm:px-8">
      <header className="max-w-4xl mx-auto mb-16">
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight"
          style={{ color: '#464646' }}
        >
          {title}
        </h1>

        <div
          className="mt-6 h-1 w-24 rounded-full"
          style={{ backgroundColor: '#6DC43A' }}
        />
      </header>

      <main
        className="
          max-w-4xl mx-auto
          prose prose-lg sm:prose-xl
          text-gray-700
          leading-relaxed

          prose-headings:font-bold
          prose-headings:tracking-tight
          prose-headings:text-gray-900
          prose-h2:mt-12 prose-h2:mb-4
          prose-h3:mt-10 prose-h3:mb-3

          prose-p:my-4
          prose-li:my-1.5
          prose-strong:text-gray-900

          prose-a:no-underline
          hover:prose-a:underline
        "
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}
