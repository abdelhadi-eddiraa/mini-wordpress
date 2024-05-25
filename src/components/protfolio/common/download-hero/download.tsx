import React from 'react';

const Download = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-[#F5F5F4] pb-8 md:min-h-[600px] md:pb-0 ">
        <div className="w-responsive-narrow flex flex-col justify-between gap-8 gap-x-32 md:flex-row md:items-center">
          <div className="flex max-w-[600px] flex-col gap-y-8 md:w-1/2">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-4 ">
                <h3>Download Skiff for mobile</h3>
                <span className="body-medium lg:body-large text-gray-500">
                  Want to access your information on the go? Skiff offers
                  privacy-first collaboration directly on your iOS and Android
                  devices.
                </span>
              </div>
            </div>
            <a
              className="body-medium lg:body-large flex w-fit cursor-pointer items-center gap-x-1 text-orange-500 hover:opacity-50"
              href="/download"
            >
              Download app
              <svg
                className="[&>*]:fill-orange-500"
                fill="none"
                height="17"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M9.471 13.305 14.276 8.5 9.471 3.695l-.942.943 3.195 3.195H2v1.334h9.724l-3.195 3.195.942.943Z"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="flex  max-w-[1000px] items-center justify-center overflow-hidden rounded-lg md:w-2/5">
            <img
              alt="Skiff Mail mobile app."
              className="w-full select-none"
              data-nimg="1"
              decoding="async"
              draggable="false"
              height="800"
              loading="lazy"
              src="https://cdn.sanity.io/images/sdd9dua4/production/b1823926275ff3f6ff3c2b6ae00bc5e1052ba0b7-1200x1201.png?rect=0,1,1200,1200&w=1600&h=1600&fit=max&auto=format"
              srcSet="https://cdn.sanity.io/images/sdd9dua4/production/b1823926275ff3f6ff3c2b6ae00bc5e1052ba0b7-1200x1201.png?rect=0,1,1200,1200&w=1600&h=1600&fit=max&auto=format 1x, https://cdn.sanity.io/images/sdd9dua4/production/b1823926275ff3f6ff3c2b6ae00bc5e1052ba0b7-1200x1201.png?rect=0,1,1200,1200&w=1600&h=1600&fit=max&auto=format 2x"
              style={{
                color: 'transparent',
              }}
              width="800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
