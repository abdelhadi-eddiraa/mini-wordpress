import React from 'react';

const PresentationHeading = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5f5f5] pb-10 pt-20">
      <div className="w-responsive-narrow">
        <h2 className="">
          Skiff Mail is{' '}
          <span className="body-medium color-[#4ab7ee] font-medium">
            <span className="h2-pixel">end-to-end encrypted</span>
          </span>{' '}
          email that protects your inbox and gives you the power to{' '}
          <span className=" color-[#4ab7ee] font-medium">
            <span className="h2-pixel">communicate freely</span>
          </span>
          .
        </h2>
      </div>
    </div>
  );
};

export default PresentationHeading;
