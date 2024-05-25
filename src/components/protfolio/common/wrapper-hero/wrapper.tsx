import Image from 'next/image';
import React from 'react';

import type WrapperHeroProps from './type';

const WrapperHero = ({
  children,
  title: { heading, spanText, imagePath },
  description,
}: WrapperHeroProps) => {
  return (
    <div className="flex max-h-[95vh] w-full flex-col gap-5 overflow-hidden rounded-b-[36px] bg-gradient-to-r from-cyan-500 to-blue-500 px-6 pt-32 md:px-12">
      <div className="mb-4 flex w-full flex-col items-start justify-between gap-y-6 lg:flex-row">
        <h1 className="max-w-[700px] text-[64px] font-[380] leading-[60px] -tracking-[0.64px] text-white">
          {heading}
          {/* <div className='inline-block w-fit'>
            <div className='inline-block mr-2 relative h-[36px] w-[36px] md:h-[50px] md:w-[50px] lg:h-[54px] lg:w-[54px]'>
               <Image src={imagePath} alt='imagePath' className='mt-1 inline-block rounded-[10px] border-2 border-white md:rounded-[12px] lg:rounded-[13px]'/>
            </div>
            <span className='inline-block mr-6 capitalize'>
                {spanText}
            </span>
         </div> */}
          <div className="inline-block w-fit">
            <div className="mr-2 inline-block">
              <div className="relative size-[36px] md:size-[50px] lg:size-[54px]">
                <Image alt="image" src={imagePath} />
              </div>
            </div>
            <span className="mr-6 inline-block capitalize text-white">
              {spanText}
            </span>
          </div>
        </h1>
        <div className="flex max-w-[549px] flex-col gap-y-4">
          <span className="text-[17px] font-[380] leading-[23px] -tracking-[0.17px] text-white">
            {description}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default WrapperHero;
