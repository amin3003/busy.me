import Link from 'next/link';
import aboutData from '@/data/aboutData.json';

export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto space-y-8 md:space-y-10 text-justify">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center md:text-left">
          {aboutData.title.map((part, idx) => (
            <span key={idx} className={part.color}>
              {part.text}
            </span>
          ))}
        </h2>

        {/* Intro paragraphs */}
        {aboutData.intro.map((text, idx) => (
          <p
            key={idx}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            {text}
          </p>
        ))}

        {/* Dynamic sections */}
        {aboutData.sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 border-l-4 border-[#6DC43A] pl-4">
              {section.title}
            </h3>

            {section.text && (
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {section.text}
              </p>
            )}

            {section.items && (
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6 sm:pl-8">
                {section.items.map((item, i) => (
                  <li key={i} className="text-base sm:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.bottomText && (
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {section.bottomText}
              </p>
            )}
          </div>
        ))}

        {/* Privacy section */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 border-l-4 border-[#6DC43A] pl-4">
            Privacy and Data Protection
          </h3>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Your privacy is our top priority. Busy.me never sells, shares, or
            uses your data for advertising or profiling.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Busy.me is developed and operated by Appsbooth.
            <br />
            For more details, visit{' '}
            <Link
              href="/privacy-policy"
              className="text-[#6DC43A] underline hover:text-green-600 transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
