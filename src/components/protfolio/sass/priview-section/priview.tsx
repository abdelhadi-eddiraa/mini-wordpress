import React from "react";

const Priview = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#f5f5f4]">
      <div className="w-responsive-wide grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
        {/*** first div */}
        <div className="skiff-border-raised flex h-[520px] flex-col overflow-hidden col-span-2 lg:col-span-1 pointer-events-none w-full cursor-default rounded-xl bg-[#FAFAF9] px-4 pb-0 pt-6 md:pointer-events-auto md:px-7 md:pt-7">
          <div className="flex max-w-[542px] flex-col gap-2.5 pb-16">
            <span className="body-medium md:body-large !font-medium">
              Add or register your custom domain
            </span>
            <span className="body-small md:body-medium text-gray-400">
              Customize your email address in one click with a privacy-first
              Skiff Domain, or connect any domain you own. We salute you,
              frank@festivus.com. Be the master of your domain.
            </span>
          </div>

          {/** second dev */}
          <div className="flex flex-col gap-y-2">
            <div className="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4">
              <div className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  className="[&>*]:fill-green-500"
                >
                  <path
                    fill="#000"
                    fillOpacity="0.57"
                    fillRule="evenodd"
                    d="m16.422 7.256-8.089 8.09-4.756-4.757 1.179-1.178 3.577 3.577 6.91-6.91 1.18 1.178Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="body-medium text-[15px]">
                    gilmoregirl.com
                  </span>
                  <span className="body-small text-[13px] text-gray-600">
                    Renews Apr 6. 2025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="skiff-border-raised body-small rounded bg-orange-100 px-[5px] py-[2px] font-mono text-[13px] uppercase text-orange-500">
                  Default
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4">
              <div className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  className="[&>*]:fill-green-500"
                >
                  <path
                    fill="#000"
                    fillOpacity="0.57"
                    fillRule="evenodd"
                    d="m16.422 7.256-8.089 8.09-4.756-4.757 1.179-1.178 3.577 3.577 6.91-6.91 1.18 1.178Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="body-medium text-[15px]">
                    rsarightaway.com
                  </span>
                  <span className="body-small text-[13px] text-gray-600">
                    Renews Apr 0. 2025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4">
              <div className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  className="[&>*]:fill-green-500"
                >
                  <path
                    fill="#000"
                    fillOpacity="0.57"
                    fillRule="evenodd"
                    d="m16.422 7.256-8.089 8.09-4.756-4.757 1.179-1.178 3.577 3.577 6.91-6.91 1.18 1.178Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="body-medium text-[15px]">
                    diffiecube.com
                  </span>
                  <span className="body-small text-[13px] text-gray-600">
                    Renews Apr 5. 2025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                      clipRule="evenodd"
                      className=""
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4">
              <div className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                >
                  <path
                    fill="#000"
                    fillOpacity="0.34"
                    fillRule="evenodd"
                    d="M16.667 10a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Zm1.667 0a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0Zm-7.5-.038V5.833H9.167v4.871l3.61 3.249 1.114-1.24-3.057-2.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="body-medium text-[15px]">
                    nightwatch.com
                  </span>
                  <span className="body-small text-[13px] text-gray-600">
                    Renews May 6. 2025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="skiff-border-raised body-small rounded bg-[var(--bg-overlay-tertiary)] px-[5px] py-[2px] font-mono text-[13px] uppercase text-gray-400">
                  Unverified
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="skiff-border-raised box-border flex h-fit items-center justify-between gap-y-2 overflow-hidden rounded-lg bg-white p-4">
              <div className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                >
                  <path
                    fill="#000"
                    fillOpacity="0.34"
                    fillRule="evenodd"
                    d="M16.667 10a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Zm1.667 0a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0Zm-7.5-.038V5.833H9.167v4.871l3.61 3.249 1.114-1.24-3.057-2.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="body-medium text-[15px]">astro.world</span>
                  <span className="body-small text-[13px] text-gray-600">
                    Renews May 2. 2025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="skiff-border-raised body-small rounded bg-[var(--bg-overlay-tertiary)] px-[5px] py-[2px] font-mono text-[13px] uppercase text-gray-400">
                  Unverified
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M8.307 12a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm4.923 0a1.23 1.23 0 1 1-2.461 0 1.23 1.23 0 0 1 2.461 0Zm3.693 1.23a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    className="[&>*]:fill-gray-500"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.34"
                      fillRule="evenodd"
                      d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707l1.414-1.414Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/** second dev */}
        </div>
        {/*** first div */}



        {/*** second div div */}
        <div className=" skiff-border-raised flex h-[520px] flex-col overflow-hidden col-span-2 lg:col-span-1 pointer-events-none w-full cursor-default rounded-xl bg-[#FAFAF9] px-4 pb-0  pt-6 md:pointer-events-auto md:px-7 md:pt-7">
          <div className="flex max-w-[542px] flex-col gap-2.5 pb-16">
            <span className="body-medium md:body-large !font-medium">
              End-to-end encrypted emails
            </span>
            <span className="body-small md:body-medium text-gray-400">
              All emails between Skiff users are end-to-end encrypted, including both subject and contents. External mail is encrypted with your keys on receipt, keeping it private.
            </span>
          </div>
          <div className="relative z-[10000]">
            <div className="absolute -ml-[100vw] w-[200vw]">
              <div
                className="h-[500px] w-full"
                style={{
                  background: 'rgba(0, 149, 194, 0.08)',
                  transform: 'translateY(200px) translateZ(0px)'
                }}
              >
                <div className="h-[2px] w-full bg-blue-400 shadow outline outline-white" />
              </div>
            </div>
          </div>
          <div className="grid w-full">
            <div
              style={{
                gridColumn: '1',
                gridRow: '1'
              }}
            >
              <div className="box-border h-[1000px] gap-y-2 overflow-hidden rounded-lg rounded-b-[0px] border border-[#EBEBEB] bg-white">
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M14.676 3.116c0-.736-.597-1.333-1.334-1.333H2.676c-.737 0-1.334.597-1.334 1.333v10.667c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.116Zm-8 8.276 5.138-5.138-.943-.943-4.195 4.196-1.529-1.529-.943.943 2.472 2.471Z"
                        fill="#EF5A3C"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h32v32H0z"
                          fill="#DFD7D5"
                        />
                        <path
                          d="M.1 0H0v.1h.1V0Z"
                          fill="#E1D7D5"
                        />
                        <path
                          d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
                          fill="#34AC80"
                        />
                        <path
                          d="M19 23h-5v1h5v-1Zm-4 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-1 1h-3v1h3v-1Zm2 0h-1v1h1v-1Zm-4 1h-1v1h1v-1Zm4 0h-3v1h3v-1Z"
                          fill="#F8D689"
                        />
                        <path
                          d="M17 4h-2v1h2V4Zm-4 1h-1v1h1V5Zm5 0h-2v1h2V5Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M25 5h-1v1h1V5Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M15 6h-2v1h2V6Zm3 0h-2v1h2V6Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M24 6h-2v1h2V6Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M12 7H9v1h3V7Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M18 7h-5v1h5V7Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M23 7h-3v1h3V7Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M9 8H6v1h3V8Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M12 8H9v1h3V8Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M19 8h-7v1h7V8Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M22 8h-3v1h3V8Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 8h-1v1h1V8Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M5 9H4v1h1V9Zm4 0H6v1h3V9Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M16 9H9v1h7V9Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M17 9h-1v1h1V9Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M21 9h-4v1h4V9Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 9h-2v1h2V9Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M8 10H5v1h3v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M9 10H8v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M16 10H9v1h7v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M20 10h-4v1h4v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 10h-3v1h3v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M7 11H6v1h1v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M9 11H7v1h2v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M16 11H9v1h7v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M19 11h-3v1h3v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 11h-4v1h4v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 12H6v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M16 12H9v1h7v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M18 12h-2v1h2v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 12h-5v1h5v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 13H5v1h4v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M16 13H9v1h7v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M17 13h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 13h-6v1h6v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 14H6v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M23 14H9v1h14v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 15H6v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M23 15H9v1h14v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 16H6v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M27 16H9v1h18v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M7 17H5v1h2v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M9 17H7v1h2v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M23 17H9v1h14v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M24 17h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M25 17h-1v1h1v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M26 17h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M27 17h-1v1h1v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M9 18H5v1h4v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M12 18H9v1h3v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M13 18h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M14 18h-1v1h1v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M15 18h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 18h-1v1h1v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M17 18h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M18 18h-1v1h1v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M19 18h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M20 18h-1v1h1v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M21 18h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M27 18h-6v1h6v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M9 19H6v1h3v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M27 19H9v1h18v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M9 20H6v1h3v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M27 20H9v1h18v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M9 21H7v1h2v-1Zm0 1H8v1h1v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M16 11h-6v1h6v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 11h-6v1h6v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M11 12h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M13 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 12h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M18 12h-1v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M20 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 12h-1v1h1v-1Zm-13 1H7v1h3v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M11 13h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M13 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 13h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M18 13h-2v1h2v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M20 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M11 14h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M13 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 14h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M18 14h-1v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M20 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M11 15h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M13 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 15h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M18 15h-1v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M20 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 15h-1v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M16 16h-6v1h6v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 16h-6v1h6v-1Z"
                          fill="#F98F30"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-black ml-1 w-36">
                      SGVpbnJpY2gg
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2  -ml-[17px] overflow-hidden">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="body-small text-black w-full overflow-hidden whitespace-nowrap">
                      VXBkYXRlIHRvIGVuZ2luZWVyaW5n –
                      <span className="body-small text-gray-400">
                        SGV5IGFsbCwgQWZ0ZXIgdG91Y2hpbmcgYmFzZSB3
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h32v32H0z"
                          fill="#DFD7D5"
                        />
                        <path
                          d="M.1 0H0v.1h.1V0Z"
                          fill="#E1D7D5"
                        />
                        <path
                          d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
                          fill="#4B4949"
                        />
                        <path
                          d="M14 23h-1v1h1v-1Zm4 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-6 1h-1v1h1v-1Zm4 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-5 1h-2v1h2v-1Zm3 0h-2v1h2v-1Zm3 0h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M11 5H7v1h4V5Zm13 0h-4v1h4V5ZM12 6H6v1h6V6Zm13 0h-6v1h6V6ZM12 7H6v1h6V7Z"
                          fill="#000"
                        />
                        <path
                          d="M21 7h-9v1h9V7Z"
                          fill="#fff"
                        />
                        <path
                          d="M25 7h-4v1h4V7ZM11 8H6v1h5V8Z"
                          fill="#000"
                        />
                        <path
                          d="M22 8H11v1h11V8Z"
                          fill="#fff"
                        />
                        <path
                          d="M25 8h-3v1h3V8ZM10 9H6v1h4V9Z"
                          fill="#000"
                        />
                        <path
                          d="M23 9H10v1h13V9Z"
                          fill="#fff"
                        />
                        <path
                          d="M25 9h-2v1h2V9ZM9 10H7v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 10H9v1h14v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M24 10h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M24 11H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm-6 1H8v1h10v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 17h-4v1h4v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M24 17h-2v1h2v-1Zm-6 1H8v1h10v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 18h-4v1h4v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M24 18h-2v1h2v-1Zm-9 1H8v1h7v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M21 19h-6v1h6v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M24 19h-3v1h3v-1Zm0 1H8v1h16v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-10 1h-3v1h3v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M14 12h-1v1h1v-1Z"
                          fill="#FF0E0E"
                        />
                        <path
                          d="M16 12h-2v1h2v-1Zm4 0h-3v1h3v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M21 12h-1v1h1v-1Z"
                          fill="#FF0E0E"
                        />
                        <path
                          d="M23 12h-2v1h2v-1Zm0 1H7v1h16v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M12 14h-1v1h1v-1Z"
                          fill="#0ADC4D"
                        />
                        <path
                          d="M14 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M15 14h-1v1h1v-1Z"
                          fill="#1929F4"
                        />
                        <path
                          d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M19 14h-1v1h1v-1Z"
                          fill="#0ADC4D"
                        />
                        <path
                          d="M21 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M22 14h-1v1h1v-1Z"
                          fill="#1929F4"
                        />
                        <path
                          d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm8 0h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
                          fill="#000"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-black ml-1 w-36">
                      QW5nZWxp
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2  -ml-[17px] overflow-hidden">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="body-small text-black w-full overflow-hidden whitespace-nowrap">
                      UHJvZHVjdCBzdHJhdGVne –
                      <span className="body-small text-gray-400">
                        SGV5IEpvLCB3aWxsIHlvdSBiZSBqb2luaW5nIHVzI
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h32v32H0z"
                          fill="#DFD7D5"
                        />
                        <path
                          d="M.1 0H0v.1h.1V0Z"
                          fill="#E1D7D5"
                        />
                        <path
                          d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M13 21h-1v1h1v-1Zm7 0h-1v1h1v-1Zm-6 1h-1v1h1v-1Zm5 0h-1v1h1v-1Zm-4 1h-1v1h1v-1Zm3 0h-1v1h1v-1Zm-1 1h-2v1h2v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M19 25h-6v1h6v-1Z"
                          fill="#FFF671"
                        />
                        <path
                          d="M17 26h-4v1h4v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M19 26h-2v1h2v-1Z"
                          fill="#FFF671"
                        />
                        <path
                          d="M17 27h-4v1h4v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M19 27h-2v1h2v-1Z"
                          fill="#FFF671"
                        />
                        <path
                          d="M9 3H7v1h2V3Zm15 0h-2v1h2V3ZM11 4H7v1h4V4Zm13 0h-4v1h4V4ZM8 5H7v1h1V5Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M9 5H8v1h1V5Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M13 5H9v1h4V5Zm9 0h-4v1h4V5Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 5h-1v1h1V5Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 5h-1v1h1V5ZM8 6H7v1h1V6Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M11 6H8v1h3V6Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M13 6h-2v1h2V6Zm7 0h-2v1h2V6Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 6h-3v1h3V6Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 6h-1v1h1V6ZM8 7H7v1h1V7Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M12 7H8v1h4V7Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M19 7h-7v1h7V7Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 7h-4v1h4V7Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 7h-1v1h1V7ZM8 8H7v1h1V8Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M11 8H8v1h3V8Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M20 8h-9v1h9V8Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 8h-3v1h3V8Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 8h-1v1h1V8ZM8 9H7v1h1V9Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M9 9H8v1h1V9Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M22 9H9v1h13V9Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 9h-1v1h1V9Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 9h-1v1h1V9Zm0 1H7v1h17v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M11 17H6v1h5v-1Z"
                          fill="#7CC4F2"
                        />
                        <path
                          d="M16 17h-5v1h5v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M18 17h-2v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M22 17h-4v1h4v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M26 17h-4v1h4v-1Z"
                          fill="#7CC4F2"
                        />
                        <path
                          d="M16 18H8v1h8v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M17 18h-1v1h1v-1Z"
                          fill="#5A6B7B"
                        />
                        <path
                          d="M24 18h-7v1h7v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M11 19H6v1h5v-1Z"
                          fill="#7CC4F2"
                        />
                        <path
                          d="M14 19h-3v1h3v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M18 19h-4v1h4v-1Z"
                          fill="#5A6B7B"
                        />
                        <path
                          d="M22 19h-4v1h4v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M26 19h-4v1h4v-1Z"
                          fill="#7CC4F2"
                        />
                        <path
                          d="M24 20H8v1h16v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M13 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M20 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M13 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M18 13h-3v1h3v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M20 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M13 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M20 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M13 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M20 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
                          fill="#D19A54"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-gray-600 ml-1 w-36">
                      SmFzb24sIFN1bm55LCBK
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2   overflow-hidden">
                    <span className="body-small text-gray-600 w-full overflow-hidden whitespace-nowrap">
                      UmV3aW5kIEZlYXR1cmUgRW5 –
                      <span className="body-small text-gray-400">
                        SSdtIG5vdCBlbnRpcmVseSBzdXJlIEkgYWdyZWUgd2l0aCB0aGF0IGFwcHJvYWNoLiBVc2Vyc
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h32v32H0z"
                          fill="#DFD7D5"
                        />
                        <path
                          d="M.1 0H0v.1h.1V0Z"
                          fill="#E1D7D5"
                        />
                        <path
                          d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
                          fill="#63A0F9"
                        />
                        <path
                          d="M14 24h-2v1h2v-1Zm3 0h-1v1h1v-1Zm3 0h-1v1h1v-1Zm-7 1h-1v1h1v-1Zm3 0h-2v1h2v-1Zm3 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-8 1h-1v1h1v-1Zm6 0h-5v1h5v-1Zm2 0h-1v1h1v-1Zm-7 1h-2v1h2v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M14 3h-1v1h1V3Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M19 3h-5v1h5V3Zm-6 1h-2v1h2V4Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M14 4h-1v1h1V4Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M18 4h-4v1h4V4Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M19 4h-1v1h1V4Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M21 4h-2v1h2V4Zm-2 1H9v1h10V5Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M20 5h-1v1h1V5Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M23 5h-3v1h3V5Zm-7 1H8v1h8V6Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M17 6h-1v1h1V6Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M22 6h-5v1h5V6Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M24 6h-2v1h2V6Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M10 7H8v1h2V7Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M12 7h-2v1h2V7Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M13 7h-1v1h1V7Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M14 7h-1v1h1V7Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M17 7h-3v1h3V7Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M18 7h-1v1h1V7Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M24 7h-6v1h6V7ZM14 8H7v1h7V8Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M15 8h-1v1h1V8Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M16 8h-1v1h1V8Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M17 8h-1v1h1V8Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M22 8h-5v1h5V8Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M23 8h-1v1h1V8Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M25 8h-2v1h2V8ZM14 9H7v1h7V9Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M19 9h-5v1h5V9Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M21 9h-2v1h2V9Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M22 9h-1v1h1V9Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M25 9h-3v1h3V9Zm-15 1H6v1h4v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M11 10h-1v1h1v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M13 10h-2v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M14 10h-1v1h1v-1Zm5 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M25 10h-6v1h6v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M26 10h-1v1h1v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M7 11H6v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M9 11H7v1h2v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M10 11H9v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M11 11h-1v1h1v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M12 11h-1v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M13 11h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M22 11h-2v1h2v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M25 11h-3v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M26 11h-1v1h1v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M12 12H6v1h6v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M13 12h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M26 12h-6v1h6v-1Zm-14 1H6v1h6v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M13 13h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M26 13h-6v1h6v-1ZM8 14H6v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M9 14H8v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M12 14H9v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M13 14h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M23 14h-3v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M25 14h-2v1h2v-1Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M26 14h-1v1h1v-1ZM8 15H6v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M9 15H8v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M12 15H9v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M14 15h-2v1h2v-1Zm5 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M21 15h-2v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M22 15h-1v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M26 15h-4v1h4v-1Zm-12 1H7v1h7v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M19 16h-5v1h5v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M22 16h-3v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M23 16h-1v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M25 16h-2v1h2v-1Zm-14 1H7v1h4v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M12 17h-1v1h1v-1Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M18 17h-6v1h6v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M20 17h-2v1h2v-1Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M25 17h-5v1h5v-1Zm-15 1H8v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M11 18h-1v1h1v-1Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M15 18h-4v1h4v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M16 18h-1v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M24 18h-8v1h8v-1Zm-9 1H8v1h7v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M16 19h-1v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M20 19h-4v1h4v-1Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M21 19h-1v1h1v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M24 19h-3v1h3v-1Zm-13 1H9v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M12 20h-1v1h1v-1Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M21 20h-9v1h9v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M22 20h-1v1h1v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M23 20h-1v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M12 21h-1v1h1v-1Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M21 21h-9v1h9v-1Zm-7 1h-1v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M16 22h-2v1h2v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M19 22h-3v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M13 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M20 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M13 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M18 13h-3v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M20 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 13h-1v1h1v-1Zm-12 1H7v1h4v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M13 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M18 14h-3v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M20 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M13 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M20 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
                          fill="#FF638D"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-gray-600 ml-1 w-36">
                      MHg2MDBmLi4u
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2   overflow-hidden">
                    <span className="body-small text-gray-600 w-full overflow-hidden whitespace-nowrap">
                      V2hlcmUgdG8gZmluZCBjb250cmFjdCBhZ –
                      <span className="body-small text-gray-400">
                        SGV5IEphc29uLCB5b3UgbWVudGlvbmVkIHRoZSBvdGhlciBkYXkgdGhhdCB0aGVyZSB3YXMgYW4gYXJjaGl2YWwgU2tldGNoIGZpbGUgZm9
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#pixelated-pic-5_svg__a)">
                          <path
                            d="M0 0h32v32H0z"
                            fill="#DFD7D5"
                          />
                          <path
                            d="M0 28h6v6H0z"
                            fill="#D8D1CF"
                          />
                          <path
                            d="M6 28h6v6H6z"
                            fill="#77CC84"
                          />
                          <path
                            d="M12 28h6v6h-6z"
                            fill="#52CC69"
                          />
                          <path
                            d="M18 28h6v6h-6z"
                            fill="#6AC579"
                          />
                          <path
                            d="M24 28h6v6h-6z"
                            fill="#C2B4B6"
                          />
                          <path
                            d="M30 28h6v6h-6z"
                            fill="#A5A09E"
                          />
                          <path
                            d="M0 22h6v6H0z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M6 22h6v6H6z"
                            fill="#80E490"
                          />
                          <path
                            d="M12 22h6v6h-6z"
                            fill="#59B26A"
                          />
                          <path
                            d="M18 22h6v6h-6z"
                            fill="#5CE577"
                          />
                          <path
                            d="M24 22h6v6h-6z"
                            fill="#DBD8D3"
                          />
                          <path
                            d="M30 22h6v6h-6z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M0 16h6v6H0z"
                            fill="#D7CECD"
                          />
                          <path
                            d="M6 16h6v6H6z"
                            fill="#96D5A6"
                          />
                          <path
                            d="M12 16h6v6h-6z"
                            fill="#37C464"
                          />
                          <path
                            d="M18 16h6v6h-6z"
                            fill="#2C9C66"
                          />
                          <path
                            d="M24 16h6v6h-6z"
                            fill="#67D280"
                          />
                          <path
                            d="M30 16h6v6h-6z"
                            fill="#B7C4B8"
                          />
                          <path
                            d="M0 10h6v6H0z"
                            fill="#DCD4D2"
                          />
                          <path
                            d="M6 10h6v6H6z"
                            fill="#6EC497"
                          />
                          <path
                            d="M12 10h6v6h-6z"
                            fill="#2E8A57"
                          />
                          <path
                            d="M18 10h6v6h-6z"
                            fill="#498A69"
                          />
                          <path
                            d="M24 10h6v6h-6z"
                            fill="#CBD8C7"
                          />
                          <path
                            d="M30 10h6v6h-6z"
                            fill="#C9BEBB"
                          />
                          <path
                            d="M0 4h6v6H0z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M6 4h6v6H6z"
                            fill="#91D1A6"
                          />
                          <path
                            d="M12 4h6v6h-6z"
                            fill="#71BD9E"
                          />
                          <path
                            d="M18 4h6v6h-6z"
                            fill="#B4D6BA"
                          />
                          <path
                            d="M24 4h6v6h-6z"
                            fill="#CFD3CD"
                          />
                          <path
                            d="M30 4h6v6h-6z"
                            fill="#CDC7C7"
                          />
                          <path
                            d="M0-2h6v6H0z"
                            fill="#B8B2B0"
                          />
                          <path
                            d="M6-2h6v6H6z"
                            fill="#C0C5BF"
                          />
                          <path
                            d="M12-2h6v6h-6z"
                            fill="#BDB8B6"
                          />
                          <path
                            d="M18-2h6v6h-6z"
                            fill="#BFC1B9"
                          />
                          <path
                            d="M24-2h6v6h-6z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M30-2h6v6h-6z"
                            fill="#ACA6A4"
                          />
                        </g>
                        <defs>
                          <clipPath id="pixelated-pic-5_svg__a">
                            <path
                              d="M0 0h32v32H0z"
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-gray-600 ml-1 w-36">
                      VG9ueSwgUGF1bGllLCBDa
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2   overflow-hidden">
                    <span className="body-small text-gray-600 w-full overflow-hidden whitespace-nowrap">
                      VXBjb21pbmcgZX –
                      <span className="body-small text-gray-400">
                        RG9uJ3QgbWlzcyBvdXQhIEpvaW4gdXMgZm9yIG91ciB1cGN
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#pixelated-pic-4_svg__a)">
                          <path
                            d="M0 0h32v32H0z"
                            fill="#D5D7E0"
                          />
                          <path
                            d="M0 28h6v6H0z"
                            fill="#D2D4DD"
                          />
                          <path
                            d="M6 28h6v6H6z"
                            fill="#8F9DB3"
                          />
                          <path
                            d="M12 28h6v6h-6z"
                            fill="#536E7E"
                          />
                          <path
                            d="M18 28h6v6h-6z"
                            fill="#4D7169"
                          />
                          <path
                            d="M24 28h6v6h-6z"
                            fill="#C9CBD4"
                          />
                          <path
                            d="M30 28h6v6h-6z"
                            fill="#D5D7E0"
                          />
                          <path
                            d="M0 22h6v6H0z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M6 22h6v6H6z"
                            fill="#8AA0A1"
                          />
                          <path
                            d="M12 22h6v6h-6z"
                            fill="#68645B"
                          />
                          <path
                            d="M18 22h6v6h-6z"
                            fill="#6A8A5C"
                          />
                          <path
                            d="M24 22h6v6h-6z"
                            fill="#D9D9E1"
                          />
                          <path
                            d="M30 22h6v6h-6z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M0 16h6v6H0z"
                            fill="#D1D1DA"
                          />
                          <path
                            d="M6 16h6v6H6z"
                            fill="#D0888A"
                          />
                          <path
                            d="M12 16h6v6h-6z"
                            fill="#C94550"
                          />
                          <path
                            d="M18 16h6v6h-6z"
                            fill="#C13A3B"
                          />
                          <path
                            d="M24 16h6v6h-6z"
                            fill="#DDD6D9"
                          />
                          <path
                            d="M30 16h6v6h-6z"
                            fill="#DEDBDE"
                          />
                          <path
                            d="M0 10h6v6H0z"
                            fill="#DCDAE0"
                          />
                          <path
                            d="M6 10h6v6H6z"
                            fill="#965351"
                          />
                          <path
                            d="M12 10h6v6h-6z"
                            fill="#553023"
                          />
                          <path
                            d="M18 10h6v6h-6z"
                            fill="#776654"
                          />
                          <path
                            d="M24 10h6v6h-6z"
                            fill="#DFDBE0"
                          />
                          <path
                            d="M30 10h6v6h-6z"
                            fill="#C0C2C8"
                          />
                          <path
                            d="M0 4h6v6H0z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M6 4h6v6H6z"
                            fill="#E5BF97"
                          />
                          <path
                            d="M12 4h6v6h-6z"
                            fill="#F9BC2B"
                          />
                          <path
                            d="M18 4h6v6h-6z"
                            fill="#F4BF42"
                          />
                          <path
                            d="M24 4h6v6h-6z"
                            fill="#C7C8DD"
                          />
                          <path
                            d="M30 4h6v6h-6z"
                            fill="#C4C6CE"
                          />
                          <path
                            d="M0-2h6v6H0z"
                            fill="#D1D3DC"
                          />
                          <path
                            d="M6-2h6v6H6z"
                            fill="#B5B7BE"
                          />
                          <path
                            d="M12-2h6v6h-6z"
                            fill="#CAC9C9"
                          />
                          <path
                            d="M18-2h6v6h-6z"
                            fill="#BEC0C7"
                          />
                          <path
                            d="M24-2h6v6h-6z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M30-2h6v6h-6z"
                            fill="#CDCFD8"
                          />
                        </g>
                        <defs>
                          <clipPath id="pixelated-pic-4_svg__a">
                            <path
                              d="M0 0h32v32H0z"
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-gray-600 ml-1 w-36">
                      SmFzb24sIFN1bm55LCBK
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2   overflow-hidden">
                    <span className="body-small text-gray-600 w-full overflow-hidden whitespace-nowrap">
                      TWVldGluZyBUb21vcnJvdyBh –
                      <span className="body-small text-gray-400">
                        bGVhc2UgbGV0IG1lIGtub3cgaWYgeW91IG5lZWQgdG8g
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-[100]">
              <div className="absolute -ml-[100vw] w-[200vw]">
                <div
                  className="h-[500px] w-full"
                  style={{
                    background: 'rgba(255, 142, 120, 0.12)',
                    transform: 'translateY(200px) translateZ(0px)'
                  }}
                >
                  <div className="h-[2px] w-full bg-orange-500 shadow outline outline-white" />
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden"
              style={{
                gridArea: '1 / 1',
                height: '200px'
              }}
            >
              <div className="box-border h-[1000px] gap-y-2 overflow-hidden rounded-lg rounded-b-[0px] border border-[#EBEBEB] bg-white">
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M14.676 3.116c0-.736-.597-1.333-1.334-1.333H2.676c-.737 0-1.334.597-1.334 1.333v10.667c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.116Zm-8 8.276 5.138-5.138-.943-.943-4.195 4.196-1.529-1.529-.943.943 2.472 2.471Z"
                        fill="#EF5A3C"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h32v32H0z"
                          fill="#DFD7D5"
                        />
                        <path
                          d="M.1 0H0v.1h.1V0Z"
                          fill="#E1D7D5"
                        />
                        <path
                          d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
                          fill="#34AC80"
                        />
                        <path
                          d="M19 23h-5v1h5v-1Zm-4 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-1 1h-3v1h3v-1Zm2 0h-1v1h1v-1Zm-4 1h-1v1h1v-1Zm4 0h-3v1h3v-1Z"
                          fill="#F8D689"
                        />
                        <path
                          d="M17 4h-2v1h2V4Zm-4 1h-1v1h1V5Zm5 0h-2v1h2V5Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M25 5h-1v1h1V5Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M15 6h-2v1h2V6Zm3 0h-2v1h2V6Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M24 6h-2v1h2V6Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M12 7H9v1h3V7Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M18 7h-5v1h5V7Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M23 7h-3v1h3V7Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M9 8H6v1h3V8Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M12 8H9v1h3V8Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M19 8h-7v1h7V8Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M22 8h-3v1h3V8Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 8h-1v1h1V8Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M5 9H4v1h1V9Zm4 0H6v1h3V9Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M16 9H9v1h7V9Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M17 9h-1v1h1V9Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M21 9h-4v1h4V9Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 9h-2v1h2V9Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M8 10H5v1h3v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M9 10H8v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M16 10H9v1h7v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M20 10h-4v1h4v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 10h-3v1h3v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M7 11H6v1h1v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M9 11H7v1h2v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M16 11H9v1h7v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M19 11h-3v1h3v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 11h-4v1h4v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 12H6v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M16 12H9v1h7v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M18 12h-2v1h2v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 12h-5v1h5v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 13H5v1h4v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M16 13H9v1h7v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M17 13h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 13h-6v1h6v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 14H6v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M23 14H9v1h14v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 15H6v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M23 15H9v1h14v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M9 16H6v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M27 16H9v1h18v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M7 17H5v1h2v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M9 17H7v1h2v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M23 17H9v1h14v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M24 17h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M25 17h-1v1h1v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M26 17h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M27 17h-1v1h1v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M9 18H5v1h4v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M12 18H9v1h3v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M13 18h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M14 18h-1v1h1v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M15 18h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 18h-1v1h1v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M17 18h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M18 18h-1v1h1v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M19 18h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M20 18h-1v1h1v-1Z"
                          fill="#FDF8FF"
                        />
                        <path
                          d="M21 18h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M27 18h-6v1h6v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M9 19H6v1h3v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M27 19H9v1h18v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M9 20H6v1h3v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M27 20H9v1h18v-1Z"
                          fill="#FEB9D5"
                        />
                        <path
                          d="M9 21H7v1h2v-1Zm0 1H8v1h1v-1Z"
                          fill="#667AF9"
                        />
                        <path
                          d="M16 11h-6v1h6v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 11h-6v1h6v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M11 12h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M13 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 12h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M18 12h-1v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M20 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 12h-1v1h1v-1Zm-13 1H7v1h3v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M11 13h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M13 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 13h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M18 13h-2v1h2v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M20 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M11 14h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M13 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 14h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M18 14h-1v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M20 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M11 15h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M13 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 15h-1v1h1v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M18 15h-1v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M20 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 15h-1v1h1v-1Z"
                          fill="#F98F30"
                        />
                        <path
                          d="M16 16h-6v1h6v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M23 16h-6v1h6v-1Z"
                          fill="#F98F30"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-black ml-1 w-36">
                      Heinrich Lox
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2  -ml-[17px] overflow-hidden">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="body-small text-black w-full overflow-hidden whitespace-nowrap">
                      Update to engineering status –
                      <span className="body-small text-gray-400">
                        Hey all, After touching base with Laura:
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h32v32H0z"
                          fill="#DFD7D5"
                        />
                        <path
                          d="M.1 0H0v.1h.1V0Z"
                          fill="#E1D7D5"
                        />
                        <path
                          d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
                          fill="#4B4949"
                        />
                        <path
                          d="M14 23h-1v1h1v-1Zm4 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-6 1h-1v1h1v-1Zm4 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-5 1h-2v1h2v-1Zm3 0h-2v1h2v-1Zm3 0h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M11 5H7v1h4V5Zm13 0h-4v1h4V5ZM12 6H6v1h6V6Zm13 0h-6v1h6V6ZM12 7H6v1h6V7Z"
                          fill="#000"
                        />
                        <path
                          d="M21 7h-9v1h9V7Z"
                          fill="#fff"
                        />
                        <path
                          d="M25 7h-4v1h4V7ZM11 8H6v1h5V8Z"
                          fill="#000"
                        />
                        <path
                          d="M22 8H11v1h11V8Z"
                          fill="#fff"
                        />
                        <path
                          d="M25 8h-3v1h3V8ZM10 9H6v1h4V9Z"
                          fill="#000"
                        />
                        <path
                          d="M23 9H10v1h13V9Z"
                          fill="#fff"
                        />
                        <path
                          d="M25 9h-2v1h2V9ZM9 10H7v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 10H9v1h14v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M24 10h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M24 11H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm-6 1H8v1h10v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 17h-4v1h4v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M24 17h-2v1h2v-1Zm-6 1H8v1h10v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 18h-4v1h4v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M24 18h-2v1h2v-1Zm-9 1H8v1h7v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M21 19h-6v1h6v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M24 19h-3v1h3v-1Zm0 1H8v1h16v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-10 1h-3v1h3v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M14 12h-1v1h1v-1Z"
                          fill="#FF0E0E"
                        />
                        <path
                          d="M16 12h-2v1h2v-1Zm4 0h-3v1h3v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M21 12h-1v1h1v-1Z"
                          fill="#FF0E0E"
                        />
                        <path
                          d="M23 12h-2v1h2v-1Zm0 1H7v1h16v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M12 14h-1v1h1v-1Z"
                          fill="#0ADC4D"
                        />
                        <path
                          d="M14 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M15 14h-1v1h1v-1Z"
                          fill="#1929F4"
                        />
                        <path
                          d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M19 14h-1v1h1v-1Z"
                          fill="#0ADC4D"
                        />
                        <path
                          d="M21 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M22 14h-1v1h1v-1Z"
                          fill="#1929F4"
                        />
                        <path
                          d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm8 0h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
                          fill="#000"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-black ml-1 w-36">
                      Angelina
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2  -ml-[17px] overflow-hidden">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="body-small text-black w-full overflow-hidden whitespace-nowrap">
                      Product strategy sync –
                      <span className="body-small text-gray-400">
                        Hey Jo, will you be joining us this call?
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h32v32H0z"
                          fill="#DFD7D5"
                        />
                        <path
                          d="M.1 0H0v.1h.1V0Z"
                          fill="#E1D7D5"
                        />
                        <path
                          d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M13 21h-1v1h1v-1Zm7 0h-1v1h1v-1Zm-6 1h-1v1h1v-1Zm5 0h-1v1h1v-1Zm-4 1h-1v1h1v-1Zm3 0h-1v1h1v-1Zm-1 1h-2v1h2v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M19 25h-6v1h6v-1Z"
                          fill="#FFF671"
                        />
                        <path
                          d="M17 26h-4v1h4v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M19 26h-2v1h2v-1Z"
                          fill="#FFF671"
                        />
                        <path
                          d="M17 27h-4v1h4v-1Z"
                          fill="#FFC110"
                        />
                        <path
                          d="M19 27h-2v1h2v-1Z"
                          fill="#FFF671"
                        />
                        <path
                          d="M9 3H7v1h2V3Zm15 0h-2v1h2V3ZM11 4H7v1h4V4Zm13 0h-4v1h4V4ZM8 5H7v1h1V5Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M9 5H8v1h1V5Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M13 5H9v1h4V5Zm9 0h-4v1h4V5Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 5h-1v1h1V5Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 5h-1v1h1V5ZM8 6H7v1h1V6Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M11 6H8v1h3V6Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M13 6h-2v1h2V6Zm7 0h-2v1h2V6Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 6h-3v1h3V6Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 6h-1v1h1V6ZM8 7H7v1h1V7Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M12 7H8v1h4V7Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M19 7h-7v1h7V7Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 7h-4v1h4V7Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 7h-1v1h1V7ZM8 8H7v1h1V8Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M11 8H8v1h3V8Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M20 8h-9v1h9V8Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 8h-3v1h3V8Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 8h-1v1h1V8ZM8 9H7v1h1V9Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M9 9H8v1h1V9Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M22 9H9v1h13V9Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M23 9h-1v1h1V9Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M24 9h-1v1h1V9Zm0 1H7v1h17v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M11 17H6v1h5v-1Z"
                          fill="#7CC4F2"
                        />
                        <path
                          d="M16 17h-5v1h5v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M18 17h-2v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M22 17h-4v1h4v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M26 17h-4v1h4v-1Z"
                          fill="#7CC4F2"
                        />
                        <path
                          d="M16 18H8v1h8v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M17 18h-1v1h1v-1Z"
                          fill="#5A6B7B"
                        />
                        <path
                          d="M24 18h-7v1h7v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M11 19H6v1h5v-1Z"
                          fill="#7CC4F2"
                        />
                        <path
                          d="M14 19h-3v1h3v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M18 19h-4v1h4v-1Z"
                          fill="#5A6B7B"
                        />
                        <path
                          d="M22 19h-4v1h4v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M26 19h-4v1h4v-1Z"
                          fill="#7CC4F2"
                        />
                        <path
                          d="M24 20H8v1h16v-1Z"
                          fill="#CAEFF9"
                        />
                        <path
                          d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M13 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M20 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M13 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M18 13h-3v1h3v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M20 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M13 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M20 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M13 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#D19A54"
                        />
                        <path
                          d="M20 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
                          fill="#D19A54"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-gray-600 ml-1 w-36">
                      Jason, Sunny, Joseph
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2   overflow-hidden">
                    <span className="body-small text-gray-600 w-full overflow-hidden whitespace-nowrap">
                      Rewind Feature Eng Sync –
                      <span className="body-small text-gray-400">
                        I'm not entirely sure I agree with that approach. Users won't understand!
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h32v32H0z"
                          fill="#DFD7D5"
                        />
                        <path
                          d="M.1 0H0v.1h.1V0Z"
                          fill="#E1D7D5"
                        />
                        <path
                          d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
                          fill="#63A0F9"
                        />
                        <path
                          d="M14 24h-2v1h2v-1Zm3 0h-1v1h1v-1Zm3 0h-1v1h1v-1Zm-7 1h-1v1h1v-1Zm3 0h-2v1h2v-1Zm3 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-8 1h-1v1h1v-1Zm6 0h-5v1h5v-1Zm2 0h-1v1h1v-1Zm-7 1h-2v1h2v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M14 3h-1v1h1V3Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M19 3h-5v1h5V3Zm-6 1h-2v1h2V4Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M14 4h-1v1h1V4Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M18 4h-4v1h4V4Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M19 4h-1v1h1V4Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M21 4h-2v1h2V4Zm-2 1H9v1h10V5Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M20 5h-1v1h1V5Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M23 5h-3v1h3V5Zm-7 1H8v1h8V6Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M17 6h-1v1h1V6Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M22 6h-5v1h5V6Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M24 6h-2v1h2V6Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M10 7H8v1h2V7Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M12 7h-2v1h2V7Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M13 7h-1v1h1V7Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M14 7h-1v1h1V7Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M17 7h-3v1h3V7Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M18 7h-1v1h1V7Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M24 7h-6v1h6V7ZM14 8H7v1h7V8Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M15 8h-1v1h1V8Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M16 8h-1v1h1V8Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M17 8h-1v1h1V8Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M22 8h-5v1h5V8Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M23 8h-1v1h1V8Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M25 8h-2v1h2V8ZM14 9H7v1h7V9Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M19 9h-5v1h5V9Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M21 9h-2v1h2V9Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M22 9h-1v1h1V9Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M25 9h-3v1h3V9Zm-15 1H6v1h4v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M11 10h-1v1h1v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M13 10h-2v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M14 10h-1v1h1v-1Zm5 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M25 10h-6v1h6v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M26 10h-1v1h1v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M7 11H6v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M9 11H7v1h2v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M10 11H9v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M11 11h-1v1h1v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M12 11h-1v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M13 11h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M22 11h-2v1h2v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M25 11h-3v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M26 11h-1v1h1v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M12 12H6v1h6v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M13 12h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M26 12h-6v1h6v-1Zm-14 1H6v1h6v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M13 13h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M26 13h-6v1h6v-1ZM8 14H6v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M9 14H8v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M12 14H9v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M13 14h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M23 14h-3v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M25 14h-2v1h2v-1Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M26 14h-1v1h1v-1ZM8 15H6v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M9 15H8v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M12 15H9v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M14 15h-2v1h2v-1Zm5 0h-1v1h1v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M21 15h-2v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M22 15h-1v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M26 15h-4v1h4v-1Zm-12 1H7v1h7v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M19 16h-5v1h5v-1Z"
                          fill="#F38B7C"
                        />
                        <path
                          d="M22 16h-3v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M23 16h-1v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M25 16h-2v1h2v-1Zm-14 1H7v1h4v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M12 17h-1v1h1v-1Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M18 17h-6v1h6v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M20 17h-2v1h2v-1Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M25 17h-5v1h5v-1Zm-15 1H8v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M11 18h-1v1h1v-1Z"
                          fill="#FEE3F3"
                        />
                        <path
                          d="M15 18h-4v1h4v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M16 18h-1v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M24 18h-8v1h8v-1Zm-9 1H8v1h7v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M16 19h-1v1h1v-1Z"
                          fill="#26B1F3"
                        />
                        <path
                          d="M20 19h-4v1h4v-1Z"
                          fill="#1F1D29"
                        />
                        <path
                          d="M21 19h-1v1h1v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M24 19h-3v1h3v-1Zm-13 1H9v1h2v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M12 20h-1v1h1v-1Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M21 20h-9v1h9v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M22 20h-1v1h1v-1Z"
                          fill="#FFE939"
                        />
                        <path
                          d="M23 20h-1v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M12 21h-1v1h1v-1Z"
                          fill="#E9265C"
                        />
                        <path
                          d="M21 21h-9v1h9v-1Zm-7 1h-1v1h1v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M16 22h-2v1h2v-1Z"
                          fill="#4BEA69"
                        />
                        <path
                          d="M19 22h-3v1h3v-1Z"
                          fill="#FA6FE2"
                        />
                        <path
                          d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M13 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M20 12h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 12h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M13 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M18 13h-3v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M20 13h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 13h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 13h-1v1h1v-1Zm-12 1H7v1h4v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M13 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M18 14h-3v1h3v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M20 14h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 14h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M13 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                          fill="#FF638D"
                        />
                        <path
                          d="M20 15h-2v1h2v-1Z"
                          fill="#fff"
                        />
                        <path
                          d="M22 15h-2v1h2v-1Z"
                          fill="#000"
                        />
                        <path
                          d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
                          fill="#FF638D"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-gray-600 ml-1 w-36">
                      0x600f...er2
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2   overflow-hidden">
                    <span className="body-small text-gray-600 w-full overflow-hidden whitespace-nowrap">
                      Where to find contract agreement? –
                      <span className="body-small text-gray-400">
                        Hey Jason, you mentioned the other day that there was an archival Sketch file for the original email mocks.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#pixelated-pic-5_svg__a)">
                          <path
                            d="M0 0h32v32H0z"
                            fill="#DFD7D5"
                          />
                          <path
                            d="M0 28h6v6H0z"
                            fill="#D8D1CF"
                          />
                          <path
                            d="M6 28h6v6H6z"
                            fill="#77CC84"
                          />
                          <path
                            d="M12 28h6v6h-6z"
                            fill="#52CC69"
                          />
                          <path
                            d="M18 28h6v6h-6z"
                            fill="#6AC579"
                          />
                          <path
                            d="M24 28h6v6h-6z"
                            fill="#C2B4B6"
                          />
                          <path
                            d="M30 28h6v6h-6z"
                            fill="#A5A09E"
                          />
                          <path
                            d="M0 22h6v6H0z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M6 22h6v6H6z"
                            fill="#80E490"
                          />
                          <path
                            d="M12 22h6v6h-6z"
                            fill="#59B26A"
                          />
                          <path
                            d="M18 22h6v6h-6z"
                            fill="#5CE577"
                          />
                          <path
                            d="M24 22h6v6h-6z"
                            fill="#DBD8D3"
                          />
                          <path
                            d="M30 22h6v6h-6z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M0 16h6v6H0z"
                            fill="#D7CECD"
                          />
                          <path
                            d="M6 16h6v6H6z"
                            fill="#96D5A6"
                          />
                          <path
                            d="M12 16h6v6h-6z"
                            fill="#37C464"
                          />
                          <path
                            d="M18 16h6v6h-6z"
                            fill="#2C9C66"
                          />
                          <path
                            d="M24 16h6v6h-6z"
                            fill="#67D280"
                          />
                          <path
                            d="M30 16h6v6h-6z"
                            fill="#B7C4B8"
                          />
                          <path
                            d="M0 10h6v6H0z"
                            fill="#DCD4D2"
                          />
                          <path
                            d="M6 10h6v6H6z"
                            fill="#6EC497"
                          />
                          <path
                            d="M12 10h6v6h-6z"
                            fill="#2E8A57"
                          />
                          <path
                            d="M18 10h6v6h-6z"
                            fill="#498A69"
                          />
                          <path
                            d="M24 10h6v6h-6z"
                            fill="#CBD8C7"
                          />
                          <path
                            d="M30 10h6v6h-6z"
                            fill="#C9BEBB"
                          />
                          <path
                            d="M0 4h6v6H0z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M6 4h6v6H6z"
                            fill="#91D1A6"
                          />
                          <path
                            d="M12 4h6v6h-6z"
                            fill="#71BD9E"
                          />
                          <path
                            d="M18 4h6v6h-6z"
                            fill="#B4D6BA"
                          />
                          <path
                            d="M24 4h6v6h-6z"
                            fill="#CFD3CD"
                          />
                          <path
                            d="M30 4h6v6h-6z"
                            fill="#CDC7C7"
                          />
                          <path
                            d="M0-2h6v6H0z"
                            fill="#B8B2B0"
                          />
                          <path
                            d="M6-2h6v6H6z"
                            fill="#C0C5BF"
                          />
                          <path
                            d="M12-2h6v6h-6z"
                            fill="#BDB8B6"
                          />
                          <path
                            d="M18-2h6v6h-6z"
                            fill="#BFC1B9"
                          />
                          <path
                            d="M24-2h6v6h-6z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M30-2h6v6h-6z"
                            fill="#ACA6A4"
                          />
                        </g>
                        <defs>
                          <clipPath id="pixelated-pic-5_svg__a">
                            <path
                              d="M0 0h32v32H0z"
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-gray-600 ml-1 w-36">
                      Tony, Paulie, Chris M
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2   overflow-hidden">
                    <span className="body-small text-gray-600 w-full overflow-hidden whitespace-nowrap">
                      Upcoming event –
                      <span className="body-small text-gray-400">
                        Don't miss out! Join us for our upcoming event.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center border-b-[1px] border-gray-100 border-opacity-90 bg-white px-5 py-3 gap-x-10">
                  <div className="flex min-w-fit items-center gap-x-2">
                    <svg
                      fill="none"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
                        fill="#000"
                        fillOpacity="0.08"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="max-w-[36px]">
                      <svg
                        className="w-[28px] h-[28px] rounded-md outline-[3px] min-w-fit outline-white outline -mr-1 z-50"
                        fill="none"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#pixelated-pic-4_svg__a)">
                          <path
                            d="M0 0h32v32H0z"
                            fill="#D5D7E0"
                          />
                          <path
                            d="M0 28h6v6H0z"
                            fill="#D2D4DD"
                          />
                          <path
                            d="M6 28h6v6H6z"
                            fill="#8F9DB3"
                          />
                          <path
                            d="M12 28h6v6h-6z"
                            fill="#536E7E"
                          />
                          <path
                            d="M18 28h6v6h-6z"
                            fill="#4D7169"
                          />
                          <path
                            d="M24 28h6v6h-6z"
                            fill="#C9CBD4"
                          />
                          <path
                            d="M30 28h6v6h-6z"
                            fill="#D5D7E0"
                          />
                          <path
                            d="M0 22h6v6H0z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M6 22h6v6H6z"
                            fill="#8AA0A1"
                          />
                          <path
                            d="M12 22h6v6h-6z"
                            fill="#68645B"
                          />
                          <path
                            d="M18 22h6v6h-6z"
                            fill="#6A8A5C"
                          />
                          <path
                            d="M24 22h6v6h-6z"
                            fill="#D9D9E1"
                          />
                          <path
                            d="M30 22h6v6h-6z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M0 16h6v6H0z"
                            fill="#D1D1DA"
                          />
                          <path
                            d="M6 16h6v6H6z"
                            fill="#D0888A"
                          />
                          <path
                            d="M12 16h6v6h-6z"
                            fill="#C94550"
                          />
                          <path
                            d="M18 16h6v6h-6z"
                            fill="#C13A3B"
                          />
                          <path
                            d="M24 16h6v6h-6z"
                            fill="#DDD6D9"
                          />
                          <path
                            d="M30 16h6v6h-6z"
                            fill="#DEDBDE"
                          />
                          <path
                            d="M0 10h6v6H0z"
                            fill="#DCDAE0"
                          />
                          <path
                            d="M6 10h6v6H6z"
                            fill="#965351"
                          />
                          <path
                            d="M12 10h6v6h-6z"
                            fill="#553023"
                          />
                          <path
                            d="M18 10h6v6h-6z"
                            fill="#776654"
                          />
                          <path
                            d="M24 10h6v6h-6z"
                            fill="#DFDBE0"
                          />
                          <path
                            d="M30 10h6v6h-6z"
                            fill="#C0C2C8"
                          />
                          <path
                            d="M0 4h6v6H0z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M6 4h6v6H6z"
                            fill="#E5BF97"
                          />
                          <path
                            d="M12 4h6v6h-6z"
                            fill="#F9BC2B"
                          />
                          <path
                            d="M18 4h6v6h-6z"
                            fill="#F4BF42"
                          />
                          <path
                            d="M24 4h6v6h-6z"
                            fill="#C7C8DD"
                          />
                          <path
                            d="M30 4h6v6h-6z"
                            fill="#C4C6CE"
                          />
                          <path
                            d="M0-2h6v6H0z"
                            fill="#D1D3DC"
                          />
                          <path
                            d="M6-2h6v6H6z"
                            fill="#B5B7BE"
                          />
                          <path
                            d="M12-2h6v6h-6z"
                            fill="#CAC9C9"
                          />
                          <path
                            d="M18-2h6v6h-6z"
                            fill="#BEC0C7"
                          />
                          <path
                            d="M24-2h6v6h-6z"
                            fill="#D9D9D9"
                          />
                          <path
                            d="M30-2h6v6h-6z"
                            fill="#CDCFD8"
                          />
                        </g>
                        <defs>
                          <clipPath id="pixelated-pic-4_svg__a">
                            <path
                              d="M0 0h32v32H0z"
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[32px] -top-[14px] z-[999]" />
                    </div>
                    <span className="body-small text-gray-600 ml-1 w-36">
                      Jason, Sunny, Joseph
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-x-2   overflow-hidden">
                    <span className="body-small text-gray-600 w-full overflow-hidden whitespace-nowrap">
                      Meeting Tomorrow at 2 PM –
                      <span className="body-small text-gray-400">
                        lease let me know if you need to reschedule.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*** second div */}



        {/*** third div */}
        <div className=" skiff-border-raised flex h-[520px] flex-col overflow-hidden col-span-2 lg:col-span-1 pointer-events-none w-full cursor-default rounded-xl bg-[#FAFAF9] px-4 pb-0  pt-6 md:pointer-events-auto md:px-7 md:pt-7">
          <div className="flex max-w-[542px] flex-col gap-2.5 pb-16">
            <span className="body-medium md:body-large !font-medium">
              Preserve your privacy with unlimited aliases
            </span>
            <span className="body-small md:body-medium text-gray-400">
              Add, manage, and delete aliases to keep your identity completely private.
            </span>
          </div>
          <div className="grid w-full">
            <div
              style={{
                gridColumn: '1',
                gridRow: '1'
              }}
            >
              <div className="box-border flex h-[1000px] flex-col gap-y-2 overflow-hidden rounded-lg rounded-b-[0px] border border-[#EBEBEB] bg-white p-6">
                <div className="flex w-full justify-between pb-4">
                  <h4 className="font-sans font-bold">
                    New message
                  </h4>
                  <div className="flex gap-x-3">
                    <svg
                      fill="none"
                      height="16"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 7.333h8v1.333h-8z"
                        fill="#000"
                      />
                    </svg>
                    <svg
                      fill="none"
                      height="16"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M7.557 8 4.028 4.471l.943-.942L8.5 7.057l3.528-3.528.943.942L9.443 8l3.528 3.529-.943.942L8.5 8.943 4.97 12.47l-.943-.942L7.557 8Z"
                        fill="#000"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex h-[44px] w-full items-center justify-between border-b">
                    <div className="flex w-full items-center gap-x-3">
                      <span className="body-small font-medium text-gray-600">
                        To
                      </span>
                      <div className="flex w-fit items-center justify-between rounded-full border border-opacity-5 bg-[#FAFAFA] px-[5px] py-1">
                        <div className="flex items-center gap-x-2">
                          <svg
                            className="-my-1.5 -ml-1.5 -mr-1 scale-[0.65] rounded-full"
                            fill="none"
                            height="32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0h32v32H0z"
                              fill="#DFD7D5"
                            />
                            <path
                              d="M.1 0H0v.1h.1V0Z"
                              fill="#E1D7D5"
                            />
                            <path
                              d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
                              fill="#63A0F9"
                            />
                            <path
                              d="M14 24h-2v1h2v-1Zm3 0h-1v1h1v-1Zm3 0h-1v1h1v-1Zm-7 1h-1v1h1v-1Zm3 0h-2v1h2v-1Zm3 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-8 1h-1v1h1v-1Zm6 0h-5v1h5v-1Zm2 0h-1v1h1v-1Zm-7 1h-2v1h2v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                              fill="#000"
                            />
                            <path
                              d="M14 3h-1v1h1V3Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M19 3h-5v1h5V3Zm-6 1h-2v1h2V4Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M14 4h-1v1h1V4Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M18 4h-4v1h4V4Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M19 4h-1v1h1V4Z"
                              fill="#FEE3F3"
                            />
                            <path
                              d="M21 4h-2v1h2V4Zm-2 1H9v1h10V5Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M20 5h-1v1h1V5Z"
                              fill="#FEE3F3"
                            />
                            <path
                              d="M23 5h-3v1h3V5Zm-7 1H8v1h8V6Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M17 6h-1v1h1V6Z"
                              fill="#FFE939"
                            />
                            <path
                              d="M22 6h-5v1h5V6Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M24 6h-2v1h2V6Z"
                              fill="#E9265C"
                            />
                            <path
                              d="M10 7H8v1h2V7Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M12 7h-2v1h2V7Z"
                              fill="#FEE3F3"
                            />
                            <path
                              d="M13 7h-1v1h1V7Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M14 7h-1v1h1V7Z"
                              fill="#E9265C"
                            />
                            <path
                              d="M17 7h-3v1h3V7Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M18 7h-1v1h1V7Z"
                              fill="#FFE939"
                            />
                            <path
                              d="M24 7h-6v1h6V7ZM14 8H7v1h7V8Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M15 8h-1v1h1V8Z"
                              fill="#E9265C"
                            />
                            <path
                              d="M16 8h-1v1h1V8Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M17 8h-1v1h1V8Z"
                              fill="#F38B7C"
                            />
                            <path
                              d="M22 8h-5v1h5V8Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M23 8h-1v1h1V8Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M25 8h-2v1h2V8ZM14 9H7v1h7V9Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M19 9h-5v1h5V9Z"
                              fill="#F38B7C"
                            />
                            <path
                              d="M21 9h-2v1h2V9Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M22 9h-1v1h1V9Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M25 9h-3v1h3V9Zm-15 1H6v1h4v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M11 10h-1v1h1v-1Z"
                              fill="#FFE939"
                            />
                            <path
                              d="M13 10h-2v1h2v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M14 10h-1v1h1v-1Zm5 0h-1v1h1v-1Z"
                              fill="#F38B7C"
                            />
                            <path
                              d="M25 10h-6v1h6v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M26 10h-1v1h1v-1Z"
                              fill="#4BEA69"
                            />
                            <path
                              d="M7 11H6v1h1v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M9 11H7v1h2v-1Z"
                              fill="#4BEA69"
                            />
                            <path
                              d="M10 11H9v1h1v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M11 11h-1v1h1v-1Z"
                              fill="#FFE939"
                            />
                            <path
                              d="M12 11h-1v1h1v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M13 11h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                              fill="#F38B7C"
                            />
                            <path
                              d="M22 11h-2v1h2v-1Z"
                              fill="#FFE939"
                            />
                            <path
                              d="M25 11h-3v1h3v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M26 11h-1v1h1v-1Z"
                              fill="#4BEA69"
                            />
                            <path
                              d="M12 12H6v1h6v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M13 12h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                              fill="#F38B7C"
                            />
                            <path
                              d="M26 12h-6v1h6v-1Zm-14 1H6v1h6v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M13 13h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                              fill="#F38B7C"
                            />
                            <path
                              d="M26 13h-6v1h6v-1ZM8 14H6v1h2v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M9 14H8v1h1v-1Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M12 14H9v1h3v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M13 14h-1v1h1v-1Zm7 0h-1v1h1v-1Z"
                              fill="#F38B7C"
                            />
                            <path
                              d="M23 14h-3v1h3v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M25 14h-2v1h2v-1Z"
                              fill="#FEE3F3"
                            />
                            <path
                              d="M26 14h-1v1h1v-1ZM8 15H6v1h2v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M9 15H8v1h1v-1Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M12 15H9v1h3v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M14 15h-2v1h2v-1Zm5 0h-1v1h1v-1Z"
                              fill="#F38B7C"
                            />
                            <path
                              d="M21 15h-2v1h2v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M22 15h-1v1h1v-1Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M26 15h-4v1h4v-1Zm-12 1H7v1h7v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M19 16h-5v1h5v-1Z"
                              fill="#F38B7C"
                            />
                            <path
                              d="M22 16h-3v1h3v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M23 16h-1v1h1v-1Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M25 16h-2v1h2v-1Zm-14 1H7v1h4v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M12 17h-1v1h1v-1Z"
                              fill="#FEE3F3"
                            />
                            <path
                              d="M18 17h-6v1h6v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M20 17h-2v1h2v-1Z"
                              fill="#E9265C"
                            />
                            <path
                              d="M25 17h-5v1h5v-1Zm-15 1H8v1h2v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M11 18h-1v1h1v-1Z"
                              fill="#FEE3F3"
                            />
                            <path
                              d="M15 18h-4v1h4v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M16 18h-1v1h1v-1Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M24 18h-8v1h8v-1Zm-9 1H8v1h7v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M16 19h-1v1h1v-1Z"
                              fill="#26B1F3"
                            />
                            <path
                              d="M20 19h-4v1h4v-1Z"
                              fill="#1F1D29"
                            />
                            <path
                              d="M21 19h-1v1h1v-1Z"
                              fill="#FFE939"
                            />
                            <path
                              d="M24 19h-3v1h3v-1Zm-13 1H9v1h2v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M12 20h-1v1h1v-1Z"
                              fill="#E9265C"
                            />
                            <path
                              d="M21 20h-9v1h9v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M22 20h-1v1h1v-1Z"
                              fill="#FFE939"
                            />
                            <path
                              d="M23 20h-1v1h1v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M12 21h-1v1h1v-1Z"
                              fill="#E9265C"
                            />
                            <path
                              d="M21 21h-9v1h9v-1Zm-7 1h-1v1h1v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M16 22h-2v1h2v-1Z"
                              fill="#4BEA69"
                            />
                            <path
                              d="M19 22h-3v1h3v-1Z"
                              fill="#FA6FE2"
                            />
                            <path
                              d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
                              fill="#FF638D"
                            />
                            <path
                              d="M13 12h-2v1h2v-1Z"
                              fill="#fff"
                            />
                            <path
                              d="M15 12h-2v1h2v-1Z"
                              fill="#000"
                            />
                            <path
                              d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                              fill="#FF638D"
                            />
                            <path
                              d="M20 12h-2v1h2v-1Z"
                              fill="#fff"
                            />
                            <path
                              d="M22 12h-2v1h2v-1Z"
                              fill="#000"
                            />
                            <path
                              d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z"
                              fill="#FF638D"
                            />
                            <path
                              d="M13 13h-2v1h2v-1Z"
                              fill="#fff"
                            />
                            <path
                              d="M15 13h-2v1h2v-1Z"
                              fill="#000"
                            />
                            <path
                              d="M18 13h-3v1h3v-1Z"
                              fill="#FF638D"
                            />
                            <path
                              d="M20 13h-2v1h2v-1Z"
                              fill="#fff"
                            />
                            <path
                              d="M22 13h-2v1h2v-1Z"
                              fill="#000"
                            />
                            <path
                              d="M23 13h-1v1h1v-1Zm-12 1H7v1h4v-1Z"
                              fill="#FF638D"
                            />
                            <path
                              d="M13 14h-2v1h2v-1Z"
                              fill="#fff"
                            />
                            <path
                              d="M15 14h-2v1h2v-1Z"
                              fill="#000"
                            />
                            <path
                              d="M18 14h-3v1h3v-1Z"
                              fill="#FF638D"
                            />
                            <path
                              d="M20 14h-2v1h2v-1Z"
                              fill="#fff"
                            />
                            <path
                              d="M22 14h-2v1h2v-1Z"
                              fill="#000"
                            />
                            <path
                              d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
                              fill="#FF638D"
                            />
                            <path
                              d="M13 15h-2v1h2v-1Z"
                              fill="#fff"
                            />
                            <path
                              d="M15 15h-2v1h2v-1Z"
                              fill="#000"
                            />
                            <path
                              d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
                              fill="#FF638D"
                            />
                            <path
                              d="M20 15h-2v1h2v-1Z"
                              fill="#fff"
                            />
                            <path
                              d="M22 15h-2v1h2v-1Z"
                              fill="#000"
                            />
                            <path
                              d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
                              fill="#FF638D"
                            />
                          </svg>
                          <span className="body-small text-black">
                            Diff E. Hellman
                          </span>
                        </div>
                        <svg
                          className="ml-3 mr-1 [&>*]:fill-gray-600"
                          fill="none"
                          height="16"
                          width="17"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M7.557 8 4.028 4.471l.943-.942L8.5 7.057l3.528-3.528.943.942L9.443 8l3.528 3.529-.943.942L8.5 8.943 4.97 12.47l-.943-.942L7.557 8Z"
                            fill="#000"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[164px] -top-10">
                          <div className="box-border flex w-fit min-w-[280px] origin-top-left select-none flex-col rounded-lg bg-[#292929] p-1 shadow-lg">
                            <div className="flex h-[35px] w-full items-center justify-between p-2">
                              <span className="body-small text-gray-500">
                                joseph@skiff.com
                              </span>
                            </div>
                            <div className="flex h-[35px] w-full items-center justify-between p-2">
                              <span className="body-small text-gray-500">
                                traderjo@skiff.com
                              </span>
                            </div>
                            <div className="flex h-[35px] w-full items-center justify-between p-2">
                              <span className="body-small text-white">
                                incognitjo@skiff.com
                              </span>
                              <svg
                                className="[&>*]:fill-white"
                                fill="none"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clipRule="evenodd"
                                  d="m16.422 7.256-8.089 8.09-4.756-4.757 1.179-1.178 3.577 3.577 6.91-6.91 1.18 1.178Z"
                                  fill="#000"
                                  fillOpacity="0.57"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <span className="body-small text-gray-600">
                        CC
                      </span>
                      <span className="body-small text-gray-600">
                        BCC
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[44px] w-full items-center border-b">
                    <div className="flex w-full items-center gap-x-3">
                      <span className="body-small font-medium text-gray-600">
                        Subject
                      </span>
                      <span className="body-small text-black">
                        An update to engineering status
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[44px] w-full items-center border-b">
                    <div className="flex w-full items-center gap-x-3">
                      <span className="body-small font-medium text-gray-600">
                        From
                      </span>
                      <div
                        className="flex items-center gap-x-1 rounded p-1"
                        style={{}}
                      >
                        <span className="body-small text-black">
                          incognitjo@skiff.com
                        </span>
                        <div
                          style={{
                            transform: 'none'
                          }}
                        >
                          <svg
                            className="[&>*]:fill-gray-600"
                            fill="none"
                            height="10"
                            width="10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="m2.692 4.878.53-.53 1.986 1.984 1.984-1.984.53.53-2.514 2.515-2.516-2.515Z"
                              fill="#fff"
                              fillOpacity="0.6"
                              fillRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <span className="body-medium text-gray-600">
                      Hey Diff,{' '}
                      <br />
                      {' '}
                      <br />
                      {' '}Wanted to ask about an update on the most recent engineering design doc
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*** third div */}


        {/*** firth div */}
        <div className=" skiff-border-raised flex h-[520px] flex-col overflow-hidden col-span-2 lg:col-span-1 pointer-events-none w-full cursor-default rounded-xl bg-[#FAFAF9] px-4 pb-0  pt-6 md:pointer-events-auto md:px-7 md:pt-7">
          <div className="flex max-w-[542px] flex-col gap-2.5 pb-16">
            <span className="body-medium md:body-large !font-medium">
              Protect yourself from email tracking
            </span>
            <span className="body-small md:body-medium text-gray-400">
              Block trackers, opens, and more. Your device information and IP address are hidden by default when opening emails.
            </span>
          </div>
          <div className="group relative w-full">
            <div className="absolute w-full -left-8 -left-8 top-20">
              <svg
                className="opacity-50 grayscale  duration-200 ease-out"
                fill="none"
                height="202"
                viewBox="0 0 300 202"
                width="300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M279.165 101L151.547 101C140.502 101 131.547 92.0457 131.547 81V21C131.547 9.95431 122.593 1 111.547 1H0"
                  opacity="1"
                  pathLength="1"
                  stroke="rgba(0,149,194,.4)"
                  strokeDasharray="1px 1px"
                  strokeDashoffset="0px"
                  strokeWidth="1.5"
                />
                <path
                  d="M279.165 101L151.547 101C140.502 101 131.547 109.954 131.547 121V181C131.547 192.046 122.593 201 111.547 201H0"
                  opacity="1"
                  pathLength="1"
                  stroke="rgba(0,149,194,.4)"
                  strokeDasharray="1px 1px"
                  strokeDashoffset="0px"
                  strokeWidth="1.5"
                />
                <path
                  d="M279.157 101L151.547 101C140.502 101 131.547 92.0453 131.547 80.9996V72.0005C131.547 60.9548 122.593 52.0005 111.547 52.0005H0"
                  opacity="1"
                  pathLength="1"
                  stroke="rgba(0,149,194,.4)"
                  strokeDasharray="1px 1px"
                  strokeDashoffset="0px"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 101H279.165"
                  opacity="1"
                  pathLength="1"
                  stroke="rgba(0,149,194,.4)"
                  strokeDasharray="1px 1px"
                  strokeDashoffset="0px"
                  strokeWidth="1.5"
                />
                <path
                  d="M279.148 101L151.547 101C140.502 101 131.547 109.955 131.547 121V129.999C131.547 141.045 122.593 149.999 111.547 149.999H0"
                  opacity="1"
                  pathLength="1"
                  stroke="rgba(0,149,194,.4)"
                  strokeDasharray="1px 1px"
                  strokeDashoffset="0px"
                  strokeWidth="1.5"
                />
                <path
                  d="M246.219 132.002C245.926 132.295 245.926 132.77 246.219 133.063L250.992 137.836C251.285 138.129 251.759 138.129 252.052 137.836C252.345 137.543 252.345 137.068 252.052 136.775L247.81 132.533L252.052 128.29C252.345 127.997 252.345 127.522 252.052 127.229C251.759 126.936 251.285 126.936 250.992 127.229L246.219 132.002ZM286.71 100.294H278.404V101.794H286.71V100.294ZM246.749 133.283H286.71V131.783H246.749V133.283ZM299.46 120.533V113.044H297.96V120.533H299.46ZM286.71 133.283C293.751 133.283 299.46 127.574 299.46 120.533H297.96C297.96 126.746 292.923 131.783 286.71 131.783V133.283ZM286.71 101.794C292.923 101.794 297.96 106.831 297.96 113.044H299.46C299.46 106.003 293.751 100.294 286.71 100.294V101.794Z"
                  fill="rgba(0,149,194,1)"
                  fillOpacity="1"
                  opacity="1"
                  pathLength="1"
                  stroke="#fafaf9"
                  strokeDasharray="1px 1px"
                  strokeDashoffset="-1px"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
          <div className="relative w-full">
            <div className="absolute w-full left-[300px]">
              <div className="rounded-2xl rounded-b-[0px]  duration-200 ease-out border-gray-400 bg-gray-400/[0.10] box-border h-[1000px] gap-y-2 overflow-hidden border border-dashed p-5">
                <div className="rounded-2xl rounded-b-[0px] bg-white p-4 border-gray-400/[0.50] box-border h-[1000px] gap-y-2 overflow-hidden border">
                  <div className="flex gap-x-3">
                    <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-blue-400/[0.36]">
                      <span className="body-medium font-medium uppercase text-blue-600">
                        P
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-8">
                      <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col">
                          <span className="body-medium font-medium">
                            Penelope Elope
                          </span>
                          <span className="body-small text-gray-700">
                            sweetpea@skiff.com
                          </span>
                          <span className="body-small text-gray-700">
                            To: jacksteadman@skiff.com
                          </span>
                          <span className="body-small text-gray-700">
                            Subject: Referral
                          </span>
                        </div>
                        <div className="relative z-[1000]">
                          <div className="absolute -top-2" />
                        </div>
                        <div className="flex w-fit items-center rounded-xl border border-black/[0.08] p-1">
                          <svg
                            className="relative z-[999] h-[32px] w-[32px] rounded-lg border-2 border-white"
                            fill="none"
                            height="32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#pixelated-pic-4_svg__a)">
                              <path
                                d="M0 0h32v32H0z"
                                fill="#D5D7E0"
                              />
                              <path
                                d="M0 28h6v6H0z"
                                fill="#D2D4DD"
                              />
                              <path
                                d="M6 28h6v6H6z"
                                fill="#8F9DB3"
                              />
                              <path
                                d="M12 28h6v6h-6z"
                                fill="#536E7E"
                              />
                              <path
                                d="M18 28h6v6h-6z"
                                fill="#4D7169"
                              />
                              <path
                                d="M24 28h6v6h-6z"
                                fill="#C9CBD4"
                              />
                              <path
                                d="M30 28h6v6h-6z"
                                fill="#D5D7E0"
                              />
                              <path
                                d="M0 22h6v6H0z"
                                fill="#D9D9D9"
                              />
                              <path
                                d="M6 22h6v6H6z"
                                fill="#8AA0A1"
                              />
                              <path
                                d="M12 22h6v6h-6z"
                                fill="#68645B"
                              />
                              <path
                                d="M18 22h6v6h-6z"
                                fill="#6A8A5C"
                              />
                              <path
                                d="M24 22h6v6h-6z"
                                fill="#D9D9E1"
                              />
                              <path
                                d="M30 22h6v6h-6z"
                                fill="#D9D9D9"
                              />
                              <path
                                d="M0 16h6v6H0z"
                                fill="#D1D1DA"
                              />
                              <path
                                d="M6 16h6v6H6z"
                                fill="#D0888A"
                              />
                              <path
                                d="M12 16h6v6h-6z"
                                fill="#C94550"
                              />
                              <path
                                d="M18 16h6v6h-6z"
                                fill="#C13A3B"
                              />
                              <path
                                d="M24 16h6v6h-6z"
                                fill="#DDD6D9"
                              />
                              <path
                                d="M30 16h6v6h-6z"
                                fill="#DEDBDE"
                              />
                              <path
                                d="M0 10h6v6H0z"
                                fill="#DCDAE0"
                              />
                              <path
                                d="M6 10h6v6H6z"
                                fill="#965351"
                              />
                              <path
                                d="M12 10h6v6h-6z"
                                fill="#553023"
                              />
                              <path
                                d="M18 10h6v6h-6z"
                                fill="#776654"
                              />
                              <path
                                d="M24 10h6v6h-6z"
                                fill="#DFDBE0"
                              />
                              <path
                                d="M30 10h6v6h-6z"
                                fill="#C0C2C8"
                              />
                              <path
                                d="M0 4h6v6H0z"
                                fill="#D9D9D9"
                              />
                              <path
                                d="M6 4h6v6H6z"
                                fill="#E5BF97"
                              />
                              <path
                                d="M12 4h6v6h-6z"
                                fill="#F9BC2B"
                              />
                              <path
                                d="M18 4h6v6h-6z"
                                fill="#F4BF42"
                              />
                              <path
                                d="M24 4h6v6h-6z"
                                fill="#C7C8DD"
                              />
                              <path
                                d="M30 4h6v6h-6z"
                                fill="#C4C6CE"
                              />
                              <path
                                d="M0-2h6v6H0z"
                                fill="#D1D3DC"
                              />
                              <path
                                d="M6-2h6v6H6z"
                                fill="#B5B7BE"
                              />
                              <path
                                d="M12-2h6v6h-6z"
                                fill="#CAC9C9"
                              />
                              <path
                                d="M18-2h6v6h-6z"
                                fill="#BEC0C7"
                              />
                              <path
                                d="M24-2h6v6h-6z"
                                fill="#D9D9D9"
                              />
                              <path
                                d="M30-2h6v6h-6z"
                                fill="#CDCFD8"
                              />
                            </g>
                            <defs>
                              <clipPath id="pixelated-pic-4_svg__a">
                                <path
                                  d="M0 0h32v32H0z"
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            className="relative z-[998] -ml-2 h-[32px] w-[32px] rounded-lg border-2 border-white"
                            fill="none"
                            height="32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#pixelated-pic-7_svg__a)">
                              <path
                                d="M0 0h32v32H0z"
                                fill="#DFD7D5"
                              />
                              <path
                                d="M0 28h6v6H0z"
                                fill="#DDD5D3"
                              />
                              <path
                                d="M6 28h6v6H6z"
                                fill="#7C787B"
                              />
                              <path
                                d="M12 28h6v6h-6z"
                                fill="#3F3D42"
                              />
                              <path
                                d="M18 28h6v6h-6z"
                                fill="#312F36"
                              />
                              <path
                                d="M24 28h6v6h-6z"
                                fill="#938E90"
                              />
                              <path
                                d="M30 28h6v6h-6z"
                                fill="#A5A09E"
                              />
                              <path
                                d="M0 22h6v6H0z"
                                fill="#D9D9D9"
                              />
                              <path
                                d="M6 22h6v6H6z"
                                fill="#BCB5B6"
                              />
                              <path
                                d="M12 22h6v6h-6z"
                                fill="#B19635"
                              />
                              <path
                                d="M18 22h6v6h-6z"
                                fill="#716738"
                              />
                              <path
                                d="M24 22h6v6h-6z"
                                fill="#BFB8B9"
                              />
                              <path
                                d="M30 22h6v6h-6z"
                                fill="#D9D9D9"
                              />
                              <path
                                d="M0 16h6v6H0z"
                                fill="#DBD6D5"
                              />
                              <path
                                d="M6 16h6v6H6z"
                                fill="#A5C1D0"
                              />
                              <path
                                d="M12 16h6v6h-6z"
                                fill="#ACC2C2"
                              />
                              <path
                                d="M18 16h6v6h-6z"
                                fill="#B9C5C4"
                              />
                              <path
                                d="M24 16h6v6h-6z"
                                fill="#BBCDD8"
                              />
                              <path
                                d="M30 16h6v6h-6z"
                                fill="#DED7D6"
                              />
                              <path
                                d="M0 10h6v6H0z"
                                fill="#CBBDB9"
                              />
                              <path
                                d="M6 10h6v6H6z"
                                fill="#9A887A"
                              />
                              <path
                                d="M12 10h6v6h-6z"
                                fill="#A89D8A"
                              />
                              <path
                                d="M18 10h6v6h-6z"
                                fill="#937D65"
                              />
                              <path
                                d="M24 10h6v6h-6z"
                                fill="#988F88"
                              />
                              <path
                                d="M30 10h6v6h-6z"
                                fill="#C9BEBB"
                              />
                              <path
                                d="M0 4h6v6H0z"
                                fill="#D9D9D9"
                              />
                              <path
                                d="M6 4h6v6H6z"
                                fill="#9AA0A6"
                              />
                              <path
                                d="M12 4h6v6h-6z"
                                fill="#514E54"
                              />
                              <path
                                d="M18 4h6v6h-6z"
                                fill="#4F4C52"
                              />
                              <path
                                d="M24 4h6v6h-6z"
                                fill="#819098"
                              />
                              <path
                                d="M30 4h6v6h-6z"
                                fill="#DED6D4"
                              />
                              <path
                                d="M0-2h6v6H0z"
                                fill="#D5CECC"
                              />
                              <path
                                d="M6-2h6v6H6z"
                                fill="#89959D"
                              />
                              <path
                                d="M12-2h6v6h-6z"
                                fill="#BDB8B6"
                              />
                              <path
                                d="M18-2h6v6h-6z"
                                fill="#CCC5C4"
                              />
                              <path
                                d="M24-2h6v6h-6z"
                                fill="#AEA8A9"
                              />
                              <path
                                d="M30-2h6v6h-6z"
                                fill="#BCB6B4"
                              />
                            </g>
                            <defs>
                              <clipPath id="pixelated-pic-7_svg__a">
                                <path
                                  d="M0 0h32v32H0z"
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <div className="relative z-[997] -ml-2 flex h-[32px] w-[32px] items-center justify-center rounded-lg border-2 border-white bg-[var(--bg-overlay-secondary)]">
                            <span className="caption font-mono font-medium text-gray-500">
                              +1
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="body-small">
                        Hey,{' '}
                        <br />
                        {' '}
                        <br />
                        {' '}After touching base with Laura, we decided that we should build this in Q1 instead of immediately. We’ll reflect this change in the standup meeting tomorrow morning and reprioritize accordingly. Jason
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*** firht div */}
      </div>

      <></>
    </div>
  );
};

export default Priview;
