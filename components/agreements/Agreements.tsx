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
          const text = await res.text();
          setMarkdown(text);
        } else {
          setMarkdown('# Error: Markdown file not found.');
        }
      } catch {
        setMarkdown('# Error: Markdown file not found.');
      }
    };

    fetchMarkdown();
  }, [name]);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 px-4 sm:px-6 lg:px-20">
      <div className=" w-full bg-slate-50 px-4 sm:px-6 lg:px-20 py-10 lg:py-14 lg:min-h-screen flex flex-col justify-between">
        <div
          className="prose prose-lg sm:prose-xl text-gray-900
                     prose-headings:font-semibold
                     prose-headings:text-gray-800
                     prose-p:text-gray-700
                     prose-li:text-gray-700
                     prose-a:text-blue-600
                     dark:prose-headings:text-gray-100
                     dark:prose-p:text-gray-300
                     dark:prose-li:text-gray-300
                     dark:prose-a:text-blue-400
                     "
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}
