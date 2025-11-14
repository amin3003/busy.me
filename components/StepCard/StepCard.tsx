import React from 'react';

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
    <div
      className="
         flex gap-2 md:flex-col md:justify-center md:items-center lg:items-start space-x-3 sm:space-x-4 sm:h-auto md:h-35 lg:h-38 p-4
        bg-white shadow rounded-2xl hover:shadow-lg 
        transition-all duration-300
        w-full
      "
    >
      <div className="shrink-0">
        <img
          src={item.img}
          alt={item.title}
          className="w-6 h-6 sm:w-7 sm:h-7"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3
          className="
            font-semibold 
            text-gray-900 
             text-sm 
            leading-tight truncate
          "
        >
          {item.title}
        </h3>

        {item.subtitle && (
          <p
            className="
              text-gray-500 
              text-xs
              mt-0.5 sm:mt-1
              leading-snug
            "
          >
            {item.subtitle}
          </p>
        )}

        <div
          className="
            text-gray-900
            mt-1 sm:mt-2 
            text-xs 
            leading-snug
          "
        >
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
  );
};

export default StepCard;
