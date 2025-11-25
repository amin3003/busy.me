import React, { ReactNode, Children } from 'react';

interface StepFlowProps {
  children: ReactNode;
}

const StepFlow: React.FC<StepFlowProps> = ({ children }) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className="flex flex-col items-center px-6 py-10">
      {childrenArray.map((child, index) => {
        const isLast = index === childrenArray.length - 1;
        const stepNumber = index + 1;

        return (
          <React.Fragment key={index}>
            <div className="relative w-full flex flex-col items-center">
              {/* Step Number Badge */}
              <div className="absolute -top-4 z-100 h-10 w-10 rounded-full bg-white flex items-center justify-center text-black text-xl font-bold">
                {stepNumber}
              </div>

              {/* Card */}
              {child}

              {/* Connecting Line */}
              {!isLast && <div className="w-px h-10 bg-gray-300 mt-0"></div>}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepFlow;
