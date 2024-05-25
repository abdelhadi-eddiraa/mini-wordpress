import React from 'react';

const InboxDashbord = () => {
  return (
    <div className="relative w-full">
      <div className="flex h-full select-none overflow-hidden rounded-t-2xl border border-b-0 border-black border-opacity-10 bg-white">
        <LeftSide />
        {/** the right content */}
        <RightSide />
        {/** the right content */}
      </div>
    </div>
  );
};

export default InboxDashbord;

const LeftSide = () => {
  return (
    <div className="h-full w-[240px] flex-col gap-y-4 bg-[#F5F5F5] p-3 pb-40 lg:flex">
      <div className="flex w-full items-center">
        <div className="flex items-center gap-x-2">
          {/** the logo div */}
          <div className="h-auto w-[30px] rounded-[8px] border-[.5px] border-solid border-black/10">
            <svg
              width="260"
              height="258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 258 258"
              className="h-auto w-full"
            >
              <path
                d="M.999 56c0-30.928 25.072-56 56-56h145.999c30.928 0 56.001 25.072 56.001 56v146c0 30.928-25.073 56-56.001 56h-146c-30.927 0-56-25.072-56-56V56Z"
                fill="#2797CF"
              />
              <path
                d="M127.471 181.343c142.737-85.988-11.235 6.973 131.501-79.015v104.467l-22.19 41.428-109.311-66.88Z"
                fill="#FFFFFE"
                fill-opacity="0.4"
              />
              <path
                d="M.996 200.074v-98.851l229.848 139.936-17.949 11.62-191.144-11.247L.996 200.074Z"
                fill="#FFFFFE"
                fill-opacity="0.4"
              />
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 73.872V59.627l128.998 79.348L259.009 59.8v14.245l-129.01 79.175-129-79.348Z"
                fill="#000"
              />
              <path
                d="M130.373 138.294.999 59.63v-3.193C.999 25.268 26.356 0 57.635 0h144.727c31.57 0 57.046 25.722 56.632 57.178l-.033 2.452-128.588 78.664Z"
                fill="#FFFFFE"
                fill-opacity="0.4"
              />
              <path
                d="m1.634 50.98 128.364 78.713 128.441-78.639.398 5.429v4.285l-128.839 78.879L1.16 60.767v-4.783l.474-5.003Z"
                fill="#B1DAEE"
              />
              <path
                d="M129.998 179.208 1.16 100.329v9.953l214.785 131.557 5.85-1.712 4.483-1.904-88.208-54.004 120.767-73.937v-9.953l-128.839 78.879Z"
                fill="#B1DAEE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 184.501V202c0 30.928 25.072 56 56 56h146c30.928 0 56-25.072 56-56v-17.499c0 30.928-25.072 56-56 56H57c-30.928 0-56-25.072-56-56Z"
                fill="#2797CF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M56.999 0c-30.928 0-56 25.072-56 56v1.476C4.023 29.4 27.796 7.543 56.674 7.543H203c30.928 0 56 25.072 56 56V56c0-30.928-25.072-56-56-56h-146Z"
                fill="#fff"
                fill-opacity="0.3"
                className=""
              />
            </svg>
          </div>
          {/** the logo div */}

          {/** the info div */}
          <div className=" flex flex-col">
            <span className="body-small">Skiff Mail</span>
            <span className="caption text-gray-600">Nightwatch</span>
          </div>
          {/** the info div */}
        </div>
      </div>

      {/** TODO teh second div */}
      <div className="gap-2px flex h-full flex-col">
        {/** compose */}
        <div className="-ml-1 flex items-center gap-x-2 rounded-lg bg-white p-2 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              fill="#000"
              fill-rule="evenodd"
              d="M11.805 4.862 8 1.057 4.195 4.862l.943.943L7.333 3.61v7.057h1.334V3.61l2.195 2.195.943-.943ZM1.333 10v3.333c0 .737.597 1.334 1.334 1.334h10.666c.737 0 1.334-.597 1.334-1.334V10h-1.334v3.333H2.667V10H1.333Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="body-small text-black">Compose</span>
        </div>
        {/** compose */}

        {/** search */}
        <div className=" box-border flex h-8 items-center gap-x-0.5 rounded-[6px] px-1 py-1.5 pl-0">
          <div className="flex size-[24px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity="0.57"
                fill-rule="evenodd"
                d="M7.333 12.5a4.66 4.66 0 0 0 1.569-.27l1.018 1.018a6 6 0 1 1 2.1-1.67l3.118 3.117-.943.943-4-4-.067-.067a4.667 4.667 0 1 0-2.795.93Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span className="body-small text-gray-600">Search</span>
        </div>
        {/** search */}

        {/** settings */}
        <div className="box-border flex h-8 items-center gap-x-0.5 rounded-[6px] px-1 py-1.5 pl-0">
          <div className="flex size-[24px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity="0.57"
                fill-rule="evenodd"
                d="m11.175 7.1.058-.118h1.534l.058.118c.139.274.326.598.567.899.233.292.573.635 1.037.855.678.32 1.46.294 1.91.253l.716 1.145-.012.018c-.264.412-.71 1.195-.71 2.046 0 .85.447 1.633.71 2.045l.012.018-.716 1.146c-.45-.042-1.232-.069-1.91.252-.464.22-.804.563-1.037.855a5.23 5.23 0 0 0-.625 1.017h-1.534a5.232 5.232 0 0 0-.625-1.017c-.233-.292-.573-.635-1.037-.855-.678-.32-1.46-.294-1.91-.252l-.716-1.146.012-.018c.263-.412.71-1.195.71-2.045 0-.85-.447-1.634-.71-2.046l-.012-.018.716-1.145c.45.041 1.232.068 1.91-.253.464-.22.804-.563 1.037-.855.24-.301.428-.625.567-.9ZM15 7.649c-.848-.402-1.333-2-1.333-2h-3.334s-.485 1.598-1.333 2c-.706.334-2 0-2 0l-1.667 2.667s1 1.126 1 2c0 .873-1 2-1 2L7 16.982s1.294-.334 2 0c.848.402 1.333 2 1.333 2h3.334s.485-1.598 1.333-2c.706-.334 2 0 2 0l1.667-2.666s-1-1.127-1-2c0-.874 1-2 1-2L17 7.649s-1.294.334-2 0Zm-1.667 4.667a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Zm1.334 0a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span className="body-small text-gray-600">Search</span>
        </div>
        {/** settings */}

        {/** Mail */}
        <span className="caption mt-4 font-mono uppercase text-gray-600">
          Mail
        </span>
        {/** Mail */}

        {/** Inbox */}
        <div className=" box-border flex h-8 items-center gap-x-0.5 rounded-[6px] bg-[var(--bg-overlay-tertiary)] px-1 py-1.5 pl-0">
          <div className="flex size-[24px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M11.333 7.833h2v4H2.666v-4h2l2 1.667h3l1.667-1.667Zm3.333 4.334V7.834L14.311 6.5h-3.53l-.39.39-1.277 1.277H7.15L5.52 6.809 5.15 6.5H1.688l-.355 1.333v4.334a1 1 0 0 0 1 1h11.333a1 1 0 0 0 1-1Zm-12.622-7 .358-1.344c.156-.583.685-.99 1.289-.99h8.618c.604 0 1.132.407 1.288.99l.358 1.344h-1.38l-.266-1H3.69l-.267 1h-1.38Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span className="body-small text-black">Inbox</span>
        </div>
        {/** Inbox */}

        {/** sent */}
        <div className=" box-border flex h-8 items-center gap-x-0.5 rounded-[6px] px-1 py-1.5 pl-0">
          <div className="flex size-[24px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity="0.57"
                fill-rule="evenodd"
                d="m3.448 3.851 1.086 3.982H8v1.334H3.517L2.192 4.313l-.445-1.629a.667.667 0 0 1 .965-.76L13.283 7.74l1.384.761-1.384.76-10.571 5.815a.667.667 0 0 1-.965-.76L2.788 10.5H4.17l-.722 2.649L11.9 8.5 3.448 3.851Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span className="body-small text-gray-600">Sent</span>
        </div>
        {/** sent */}

        {/** Send later */}
        <div className=" box-border flex h-8 items-center gap-x-0.5 rounded-[6px] px-1 py-1.5 pl-0">
          <div className="flex size-[24px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity="0.57"
                fill-rule="evenodd"
                d="M10 5.833V4.5H6v1.333H4.666V4.5h-2v2.667h10.667V4.5h-2v1.333H10ZM4.666 3.167h-2c-.736 0-1.333.597-1.333 1.333v4h13.333v-4c0-.736-.597-1.333-1.333-1.333h-2V1.834H10v1.333H6V1.834H4.666v1.333Zm-2 6.667v4h10.667v-4h1.333v5.333H1.333V9.834h1.333Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span className="body-small text-gray-600">Send later</span>
        </div>
        {/** Send later */}

        {/** Draft */}
        <div className=" box-border flex h-8 items-center gap-x-0.5 rounded-[6px] px-1 py-1.5 pl-0">
          <div className="flex size-[24px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity="0.57"
                fill-rule="evenodd"
                d="M8 3.167H4V12.5H2.667V3.167c0-.737.597-1.333 1.333-1.333h4.667l.667.666 3.333 3.333.667.667v6H12V7.167H9.334A1.333 1.333 0 0 1 8 5.834V3.167Zm-5.333 12v-1.333h10.667v1.333H2.667Zm8.114-9.333L9.334 4.386v1.447h1.447Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span className="body-small text-gray-600">Draft</span>
        </div>
        {/** Draft */}

        {/** * spam */}
        <div className=" box-border flex h-8 items-center gap-x-0.5 rounded-[6px] px-1 py-1.5 pl-0">
          <div className="flex size-[24px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity="0.57"
                fill-rule="evenodd"
                d="M5.371 1.833h5.257l4.038 3.808v5.718l-4.038 3.808H5.371l-4.038-3.808V5.641l4.038-3.808Zm.53 1.334-3.235 3.05v4.567l3.235 3.05h4.198l3.234-3.05V6.216l-3.234-3.05H5.9Zm2.742 2.066h-1.29V9.95h1.29V5.233Zm-.617 5.265a.734.734 0 0 0-.748.748c0 .42.32.738.748.738.41 0 .729-.32.729-.739a.73.73 0 0 0-.73-.747Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span className="body-small text-gray-600">Spam</span>
        </div>
        {/** * spam */}

        {/** Archive */}
        <div className=" box-border flex h-8 items-center gap-x-0.5 rounded-[6px] px-1 py-1.5 pl-0">
          <div className="flex size-[24px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity="0.57"
                fill-rule="evenodd"
                d="M13.333 3.167H2.666v2h10.667v-2ZM2.666 1.834c-.736 0-1.333.596-1.333 1.333V6.5h13.333V3.167c0-.737-.597-1.333-1.333-1.333H2.666Zm0 6v7.333h10.667V7.834H12v6H4v-6H2.666ZM6 11.166h4V9.834H6v1.333Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span className="body-small text-gray-600">Archive</span>
        </div>
        {/** Archive */}

        {/** trash */}
        <div className=" box-border flex h-8 items-center gap-x-0.5 rounded-[6px] px-1 py-1.5 pl-0">
          <div className="flex size-[24px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity="0.57"
                fill-rule="evenodd"
                d="M6.667 3.833c0-.368.298-.666.667-.666h1.333c.368 0 .667.298.667.667V4.5H6.667v-.667ZM5.334 4.5v-.667a2 2 0 0 1 2-2h1.333a2 2 0 0 1 2 2V4.5h2.667v1.333H2.667V4.5h2.667Zm-2 2.667h1.333v6.667h6.667V7.167h1.333v8H3.334v-8Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span className="body-small text-gray-600">Trash</span>
        </div>
        {/** trash */}
      </div>
    </div>
  );
};
const RightSide = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div className="w-full px-5 py-3">
        <span className="font-size-[15px] font-sans font-bold">
          Inbox <span className="text-orange-500">12</span>
        </span>
      </div>
      <div className="w-full border-b-DEFAULT border-gray-100 border-opacity-90 px-5 py-3">
        <div className="flex items-center gap-x-2">
          {/** logo1 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#000"
              fillOpacity="0.08"
              fillRule="evenodd"
              d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
              clipRule="evenodd"
            />
          </svg>

          {/** logo1 */}
          <span className="caption font-mono text-gray-400">Most recent</span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-36 border-b-DEFAULT border-gray-100 border-opacity-90 bg-white px-5 py-3">
        <div className="flex min-w-fit items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#EF5A3C"
              fillRule="evenodd"
              d="M14.676 3.116c0-.736-.597-1.333-1.334-1.333H2.676c-.737 0-1.334.597-1.334 1.333v10.667c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.116Zm-8 8.276 5.138-5.138-.943-.943-4.195 4.196-1.529-1.529-.943.943 2.472 2.471Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="max-w-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              className="z-50 -mr-1 size-[28px] min-w-fit rounded-md outline outline-[3px] outline-white"
            >
              <path fill="#DFD7D5" d="M0 0h32v32H0z" />
              <path fill="#E1D7D5" d="M.1 0H0v.1h.1V0Z" />
              <path
                fill="#34AC80"
                d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path
                fill="#F8D689"
                d="M19 23h-5v1h5v-1Zm-4 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm2 0h-1v1h1v-1Zm-1 1h-3v1h3v-1Zm2 0h-1v1h1v-1Zm-4 1h-1v1h1v-1Zm4 0h-3v1h3v-1Z"
              />
              <path
                fill="#4BEA69"
                d="M17 4h-2v1h2V4Zm-4 1h-1v1h1V5Zm5 0h-2v1h2V5Z"
              />
              <path fill="#FFC110" d="M25 5h-1v1h1V5Z" />
              <path fill="#4BEA69" d="M15 6h-2v1h2V6Zm3 0h-2v1h2V6Z" />
              <path fill="#FFC110" d="M24 6h-2v1h2V6Z" />
              <path fill="#FDF8FF" d="M12 7H9v1h3V7Z" />
              <path fill="#4BEA69" d="M18 7h-5v1h5V7Z" />
              <path fill="#FFC110" d="M23 7h-3v1h3V7Z" />
              <path fill="#4BEA69" d="M9 8H6v1h3V8Z" />
              <path fill="#FDF8FF" d="M12 8H9v1h3V8Z" />
              <path fill="#4BEA69" d="M19 8h-7v1h7V8Z" />
              <path fill="#FFC110" d="M22 8h-3v1h3V8Z" />
              <path fill="#FDF8FF" d="M23 8h-1v1h1V8Z" />
              <path fill="#4BEA69" d="M5 9H4v1h1V9Zm4 0H6v1h3V9Z" />
              <path fill="#FDF8FF" d="M16 9H9v1h7V9Z" />
              <path fill="#4BEA69" d="M17 9h-1v1h1V9Z" />
              <path fill="#FFC110" d="M21 9h-4v1h4V9Z" />
              <path fill="#FDF8FF" d="M23 9h-2v1h2V9Z" />
              <path fill="#4BEA69" d="M8 10H5v1h3v-1Z" />
              <path fill="#FF638D" d="M9 10H8v1h1v-1Z" />
              <path fill="#FDF8FF" d="M16 10H9v1h7v-1Z" />
              <path fill="#FFC110" d="M20 10h-4v1h4v-1Z" />
              <path fill="#FDF8FF" d="M23 10h-3v1h3v-1Z" />
              <path fill="#4BEA69" d="M7 11H6v1h1v-1Z" />
              <path fill="#FF638D" d="M9 11H7v1h2v-1Z" />
              <path fill="#FDF8FF" d="M16 11H9v1h7v-1Z" />
              <path fill="#FFC110" d="M19 11h-3v1h3v-1Z" />
              <path fill="#FDF8FF" d="M23 11h-4v1h4v-1Z" />
              <path fill="#FF638D" d="M9 12H6v1h3v-1Z" />
              <path fill="#FDF8FF" d="M16 12H9v1h7v-1Z" />
              <path fill="#FFC110" d="M18 12h-2v1h2v-1Z" />
              <path fill="#FDF8FF" d="M23 12h-5v1h5v-1Z" />
              <path fill="#FF638D" d="M9 13H5v1h4v-1Z" />
              <path fill="#FDF8FF" d="M16 13H9v1h7v-1Z" />
              <path fill="#FFC110" d="M17 13h-1v1h1v-1Z" />
              <path fill="#FDF8FF" d="M23 13h-6v1h6v-1Z" />
              <path fill="#FF638D" d="M9 14H6v1h3v-1Z" />
              <path fill="#FDF8FF" d="M23 14H9v1h14v-1Z" />
              <path fill="#FF638D" d="M9 15H6v1h3v-1Z" />
              <path fill="#FDF8FF" d="M23 15H9v1h14v-1Z" />
              <path fill="#FF638D" d="M9 16H6v1h3v-1Z" />
              <path fill="#FEB9D5" d="M27 16H9v1h18v-1Z" />
              <path fill="#FF638D" d="M7 17H5v1h2v-1Z" />
              <path fill="#667AF9" d="M9 17H7v1h2v-1Z" />
              <path fill="#FEB9D5" d="M23 17H9v1h14v-1Z" />
              <path fill="#FF638D" d="M24 17h-1v1h1v-1Z" />
              <path fill="#FEB9D5" d="M25 17h-1v1h1v-1Z" />
              <path fill="#FF638D" d="M26 17h-1v1h1v-1Z" />
              <path fill="#FEB9D5" d="M27 17h-1v1h1v-1Z" />
              <path fill="#667AF9" d="M9 18H5v1h4v-1Z" />
              <path fill="#FEB9D5" d="M12 18H9v1h3v-1Z" />
              <path fill="#FF638D" d="M13 18h-1v1h1v-1Z" />
              <path fill="#FDF8FF" d="M14 18h-1v1h1v-1Z" />
              <path fill="#000" d="M15 18h-1v1h1v-1Z" />
              <path fill="#FDF8FF" d="M16 18h-1v1h1v-1Z" />
              <path fill="#000" d="M17 18h-1v1h1v-1Z" />
              <path fill="#FDF8FF" d="M18 18h-1v1h1v-1Z" />
              <path fill="#000" d="M19 18h-1v1h1v-1Z" />
              <path fill="#FDF8FF" d="M20 18h-1v1h1v-1Z" />
              <path fill="#FF638D" d="M21 18h-1v1h1v-1Z" />
              <path fill="#FEB9D5" d="M27 18h-6v1h6v-1Z" />
              <path fill="#667AF9" d="M9 19H6v1h3v-1Z" />
              <path fill="#FEB9D5" d="M27 19H9v1h18v-1Z" />
              <path fill="#667AF9" d="M9 20H6v1h3v-1Z" />
              <path fill="#FEB9D5" d="M27 20H9v1h18v-1Z" />
              <path fill="#667AF9" d="M9 21H7v1h2v-1Zm0 1H8v1h1v-1Z" />
              <path fill="#FFC110" d="M16 11h-6v1h6v-1Z" />
              <path fill="#F98F30" d="M23 11h-6v1h6v-1Z" />
              <path fill="#FFC110" d="M11 12h-1v1h1v-1Z" />
              <path fill="#fff" d="M13 12h-2v1h2v-1Z" />
              <path fill="#000" d="M15 12h-2v1h2v-1Z" />
              <path fill="#FFC110" d="M16 12h-1v1h1v-1Z" />
              <path fill="#F98F30" d="M18 12h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 12h-2v1h2v-1Z" />
              <path fill="#000" d="M22 12h-2v1h2v-1Z" />
              <path fill="#F98F30" d="M23 12h-1v1h1v-1Zm-13 1H7v1h3v-1Z" />
              <path fill="#FFC110" d="M11 13h-1v1h1v-1Z" />
              <path fill="#fff" d="M13 13h-2v1h2v-1Z" />
              <path fill="#000" d="M15 13h-2v1h2v-1Z" />
              <path fill="#FFC110" d="M16 13h-1v1h1v-1Z" />
              <path fill="#F98F30" d="M18 13h-2v1h2v-1Z" />
              <path fill="#fff" d="M20 13h-2v1h2v-1Z" />
              <path fill="#000" d="M22 13h-2v1h2v-1Z" />
              <path fill="#F98F30" d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Z" />
              <path fill="#FFC110" d="M11 14h-1v1h1v-1Z" />
              <path fill="#fff" d="M13 14h-2v1h2v-1Z" />
              <path fill="#000" d="M15 14h-2v1h2v-1Z" />
              <path fill="#FFC110" d="M16 14h-1v1h1v-1Z" />
              <path fill="#F98F30" d="M18 14h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 14h-2v1h2v-1Z" />
              <path fill="#000" d="M22 14h-2v1h2v-1Z" />
              <path fill="#F98F30" d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Z" />
              <path fill="#FFC110" d="M11 15h-1v1h1v-1Z" />
              <path fill="#fff" d="M13 15h-2v1h2v-1Z" />
              <path fill="#000" d="M15 15h-2v1h2v-1Z" />
              <path fill="#FFC110" d="M16 15h-1v1h1v-1Z" />
              <path fill="#F98F30" d="M18 15h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 15h-2v1h2v-1Z" />
              <path fill="#000" d="M22 15h-2v1h2v-1Z" />
              <path fill="#F98F30" d="M23 15h-1v1h1v-1Z" />
              <path fill="#FFC110" d="M16 16h-6v1h6v-1Z" />
              <path fill="#F98F30" d="M23 16h-6v1h6v-1Z" />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -left-[32px] -top-[14px] z-[999]" />
          </div>
          <span className="body-small ml-1 w-36 text-gray-600">
            Heinrich Lox
          </span>
        </div>
        <div className="flex w-full items-center gap-x-2   overflow-hidden">
          <span className="body-small w-full overflow-hidden whitespace-nowrap text-gray-600">
            Update to engineering status{/* */} – &nbsp;
            <span className="body-small text-gray-400">
              Hey all, After touching base with Laura:
            </span>
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-36 border-b-DEFAULT border-gray-100 border-opacity-90 bg-white px-5 py-3">
        <div className="flex min-w-fit items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#EF5A3C"
              fillRule="evenodd"
              d="M14.676 3.116c0-.736-.597-1.333-1.334-1.333H2.676c-.737 0-1.334.597-1.334 1.333v10.667c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.116Zm-8 8.276 5.138-5.138-.943-.943-4.195 4.196-1.529-1.529-.943.943 2.472 2.471Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="max-w-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              className="z-50 -mr-1 size-[28px] min-w-fit rounded-md outline outline-[3px] outline-white"
            >
              <path fill="#DFD7D5" d="M0 0h32v32H0z" />
              <path fill="#E1D7D5" d="M.1 0H0v.1h.1V0Z" />
              <path
                fill="#4B4949"
                d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path
                fill="#fff"
                d="M14 23h-1v1h1v-1Zm4 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-6 1h-1v1h1v-1Zm4 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-5 1h-2v1h2v-1Zm3 0h-2v1h2v-1Zm3 0h-2v1h2v-1Z"
              />
              <path
                fill="#000"
                d="M11 5H7v1h4V5Zm13 0h-4v1h4V5ZM12 6H6v1h6V6Zm13 0h-6v1h6V6ZM12 7H6v1h6V7Z"
              />
              <path fill="#fff" d="M21 7h-9v1h9V7Z" />
              <path fill="#000" d="M25 7h-4v1h4V7ZM11 8H6v1h5V8Z" />
              <path fill="#fff" d="M22 8H11v1h11V8Z" />
              <path fill="#000" d="M25 8h-3v1h3V8ZM10 9H6v1h4V9Z" />
              <path fill="#fff" d="M23 9H10v1h13V9Z" />
              <path fill="#000" d="M25 9h-2v1h2V9ZM9 10H7v1h2v-1Z" />
              <path fill="#fff" d="M23 10H9v1h14v-1Z" />
              <path fill="#000" d="M24 10h-1v1h1v-1Z" />
              <path
                fill="#fff"
                d="M24 11H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm-6 1H8v1h10v-1Z"
              />
              <path fill="#000" d="M22 17h-4v1h4v-1Z" />
              <path fill="#fff" d="M24 17h-2v1h2v-1Zm-6 1H8v1h10v-1Z" />
              <path fill="#000" d="M22 18h-4v1h4v-1Z" />
              <path fill="#fff" d="M24 18h-2v1h2v-1Zm-9 1H8v1h7v-1Z" />
              <path fill="#000" d="M21 19h-6v1h6v-1Z" />
              <path fill="#fff" d="M24 19h-3v1h3v-1Zm0 1H8v1h16v-1Z" />
              <path
                fill="#000"
                d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-10 1h-3v1h3v-1Z"
              />
              <path fill="#FF0E0E" d="M14 12h-1v1h1v-1Z" />
              <path fill="#000" d="M16 12h-2v1h2v-1Zm4 0h-3v1h3v-1Z" />
              <path fill="#FF0E0E" d="M21 12h-1v1h1v-1Z" />
              <path
                fill="#000"
                d="M23 12h-2v1h2v-1Zm0 1H7v1h16v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#0ADC4D" d="M12 14h-1v1h1v-1Z" />
              <path fill="#000" d="M14 14h-2v1h2v-1Z" />
              <path fill="#1929F4" d="M15 14h-1v1h1v-1Z" />
              <path fill="#000" d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#0ADC4D" d="M19 14h-1v1h1v-1Z" />
              <path fill="#000" d="M21 14h-2v1h2v-1Z" />
              <path fill="#1929F4" d="M22 14h-1v1h1v-1Z" />
              <path
                fill="#000"
                d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm8 0h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -left-[32px] -top-[14px] z-[999]" />
          </div>
          <span className="body-small ml-1 w-36 text-gray-600">Angelina</span>
        </div>
        <div className="flex w-full items-center gap-x-2   overflow-hidden">
          <span className="body-small w-full overflow-hidden whitespace-nowrap text-gray-600">
            Product strategy sync{/* */} – &nbsp;
            <span className="body-small text-gray-400">
              Hey Jo, will you be joining us this call?
            </span>
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-36 border-b-DEFAULT border-gray-100 border-opacity-90 bg-white px-5 py-3">
        <div className="flex min-w-fit items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#000"
              fillOpacity="0.08"
              fillRule="evenodd"
              d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="max-w-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              className="z-50 -mr-1 size-[28px] min-w-fit rounded-md outline outline-[3px] outline-white"
            >
              <path fill="#DFD7D5" d="M0 0h32v32H0z" />
              <path fill="#E1D7D5" d="M.1 0H0v.1h.1V0Z" />
              <path
                fill="#1F1D29"
                d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path
                fill="#FFC110"
                d="M13 21h-1v1h1v-1Zm7 0h-1v1h1v-1Zm-6 1h-1v1h1v-1Zm5 0h-1v1h1v-1Zm-4 1h-1v1h1v-1Zm3 0h-1v1h1v-1Zm-1 1h-2v1h2v-1Z"
              />
              <path fill="#FFF671" d="M19 25h-6v1h6v-1Z" />
              <path fill="#FFC110" d="M17 26h-4v1h4v-1Z" />
              <path fill="#FFF671" d="M19 26h-2v1h2v-1Z" />
              <path fill="#FFC110" d="M17 27h-4v1h4v-1Z" />
              <path fill="#FFF671" d="M19 27h-2v1h2v-1Z" />
              <path
                fill="#1F1D29"
                d="M9 3H7v1h2V3Zm15 0h-2v1h2V3ZM11 4H7v1h4V4Zm13 0h-4v1h4V4ZM8 5H7v1h1V5Z"
              />
              <path fill="#CAEFF9" d="M9 5H8v1h1V5Z" />
              <path fill="#1F1D29" d="M13 5H9v1h4V5Zm9 0h-4v1h4V5Z" />
              <path fill="#CAEFF9" d="M23 5h-1v1h1V5Z" />
              <path fill="#1F1D29" d="M24 5h-1v1h1V5ZM8 6H7v1h1V6Z" />
              <path fill="#CAEFF9" d="M11 6H8v1h3V6Z" />
              <path fill="#1F1D29" d="M13 6h-2v1h2V6Zm7 0h-2v1h2V6Z" />
              <path fill="#CAEFF9" d="M23 6h-3v1h3V6Z" />
              <path fill="#1F1D29" d="M24 6h-1v1h1V6ZM8 7H7v1h1V7Z" />
              <path fill="#CAEFF9" d="M12 7H8v1h4V7Z" />
              <path fill="#1F1D29" d="M19 7h-7v1h7V7Z" />
              <path fill="#CAEFF9" d="M23 7h-4v1h4V7Z" />
              <path fill="#1F1D29" d="M24 7h-1v1h1V7ZM8 8H7v1h1V8Z" />
              <path fill="#CAEFF9" d="M11 8H8v1h3V8Z" />
              <path fill="#1F1D29" d="M20 8h-9v1h9V8Z" />
              <path fill="#CAEFF9" d="M23 8h-3v1h3V8Z" />
              <path fill="#1F1D29" d="M24 8h-1v1h1V8ZM8 9H7v1h1V9Z" />
              <path fill="#CAEFF9" d="M9 9H8v1h1V9Z" />
              <path fill="#1F1D29" d="M22 9H9v1h13V9Z" />
              <path fill="#CAEFF9" d="M23 9h-1v1h1V9Z" />
              <path
                fill="#1F1D29"
                d="M24 9h-1v1h1V9Zm0 1H7v1h17v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Z"
              />
              <path fill="#7CC4F2" d="M11 17H6v1h5v-1Z" />
              <path fill="#CAEFF9" d="M16 17h-5v1h5v-1Z" />
              <path fill="#FA6FE2" d="M18 17h-2v1h2v-1Z" />
              <path fill="#CAEFF9" d="M22 17h-4v1h4v-1Z" />
              <path fill="#7CC4F2" d="M26 17h-4v1h4v-1Z" />
              <path fill="#CAEFF9" d="M16 18H8v1h8v-1Z" />
              <path fill="#5A6B7B" d="M17 18h-1v1h1v-1Z" />
              <path fill="#CAEFF9" d="M24 18h-7v1h7v-1Z" />
              <path fill="#7CC4F2" d="M11 19H6v1h5v-1Z" />
              <path fill="#CAEFF9" d="M14 19h-3v1h3v-1Z" />
              <path fill="#5A6B7B" d="M18 19h-4v1h4v-1Z" />
              <path fill="#CAEFF9" d="M22 19h-4v1h4v-1Z" />
              <path fill="#7CC4F2" d="M26 19h-4v1h4v-1Z" />
              <path fill="#CAEFF9" d="M24 20H8v1h16v-1Z" />
              <path
                fill="#D19A54"
                d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 12h-2v1h2v-1Z" />
              <path fill="#000" d="M15 12h-2v1h2v-1Z" />
              <path fill="#D19A54" d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 12h-2v1h2v-1Z" />
              <path fill="#000" d="M22 12h-2v1h2v-1Z" />
              <path fill="#D19A54" d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z" />
              <path fill="#fff" d="M13 13h-2v1h2v-1Z" />
              <path fill="#000" d="M15 13h-2v1h2v-1Z" />
              <path fill="#D19A54" d="M18 13h-3v1h3v-1Z" />
              <path fill="#fff" d="M20 13h-2v1h2v-1Z" />
              <path fill="#000" d="M22 13h-2v1h2v-1Z" />
              <path
                fill="#D19A54"
                d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 14h-2v1h2v-1Z" />
              <path fill="#000" d="M15 14h-2v1h2v-1Z" />
              <path fill="#D19A54" d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 14h-2v1h2v-1Z" />
              <path fill="#000" d="M22 14h-2v1h2v-1Z" />
              <path
                fill="#D19A54"
                d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 15h-2v1h2v-1Z" />
              <path fill="#000" d="M15 15h-2v1h2v-1Z" />
              <path fill="#D19A54" d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 15h-2v1h2v-1Z" />
              <path fill="#000" d="M22 15h-2v1h2v-1Z" />
              <path
                fill="#D19A54"
                d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -left-[32px] -top-[14px] z-[999]" />
          </div>
          <span className="body-small ml-1 w-36 text-black">
            Jason, Sunny, Joseph
          </span>
        </div>
        <div className="-ml-[17px] flex w-full items-center  gap-x-2 overflow-hidden">
          <div className="size-2 rounded-full bg-orange-500" />
          <span className="body-small w-full overflow-hidden whitespace-nowrap text-black">
            Rewind Feature Eng Sync{/* */} – &nbsp;
            <span className="body-small text-gray-400">
              I'm not entirely sure I agree with that approach. Users won't
              understand!
            </span>
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-36 border-b-DEFAULT border-gray-100 border-opacity-90 bg-white px-5 py-3">
        <div className="flex min-w-fit items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#000"
              fillOpacity="0.08"
              fillRule="evenodd"
              d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="max-w-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              className="z-50 -mr-1 size-[28px] min-w-fit rounded-md outline outline-[3px] outline-white"
            >
              <path fill="#DFD7D5" d="M0 0h32v32H0z" />
              <path fill="#E1D7D5" d="M.1 0H0v.1h.1V0Z" />
              <path
                fill="#63A0F9"
                d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path
                fill="#000"
                d="M14 24h-2v1h2v-1Zm3 0h-1v1h1v-1Zm3 0h-1v1h1v-1Zm-7 1h-1v1h1v-1Zm3 0h-2v1h2v-1Zm3 0h-2v1h2v-1Zm2 0h-1v1h1v-1Zm-8 1h-1v1h1v-1Zm6 0h-5v1h5v-1Zm2 0h-1v1h1v-1Zm-7 1h-2v1h2v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
              />
              <path fill="#26B1F3" d="M14 3h-1v1h1V3Z" />
              <path fill="#FA6FE2" d="M19 3h-5v1h5V3Zm-6 1h-2v1h2V4Z" />
              <path fill="#26B1F3" d="M14 4h-1v1h1V4Z" />
              <path fill="#FA6FE2" d="M18 4h-4v1h4V4Z" />
              <path fill="#FEE3F3" d="M19 4h-1v1h1V4Z" />
              <path fill="#FA6FE2" d="M21 4h-2v1h2V4Zm-2 1H9v1h10V5Z" />
              <path fill="#FEE3F3" d="M20 5h-1v1h1V5Z" />
              <path fill="#FA6FE2" d="M23 5h-3v1h3V5Zm-7 1H8v1h8V6Z" />
              <path fill="#FFE939" d="M17 6h-1v1h1V6Z" />
              <path fill="#FA6FE2" d="M22 6h-5v1h5V6Z" />
              <path fill="#E9265C" d="M24 6h-2v1h2V6Z" />
              <path fill="#FA6FE2" d="M10 7H8v1h2V7Z" />
              <path fill="#FEE3F3" d="M12 7h-2v1h2V7Z" />
              <path fill="#FA6FE2" d="M13 7h-1v1h1V7Z" />
              <path fill="#E9265C" d="M14 7h-1v1h1V7Z" />
              <path fill="#FA6FE2" d="M17 7h-3v1h3V7Z" />
              <path fill="#FFE939" d="M18 7h-1v1h1V7Z" />
              <path fill="#FA6FE2" d="M24 7h-6v1h6V7ZM14 8H7v1h7V8Z" />
              <path fill="#E9265C" d="M15 8h-1v1h1V8Z" />
              <path fill="#FA6FE2" d="M16 8h-1v1h1V8Z" />
              <path fill="#F38B7C" d="M17 8h-1v1h1V8Z" />
              <path fill="#FA6FE2" d="M22 8h-5v1h5V8Z" />
              <path fill="#26B1F3" d="M23 8h-1v1h1V8Z" />
              <path fill="#FA6FE2" d="M25 8h-2v1h2V8ZM14 9H7v1h7V9Z" />
              <path fill="#F38B7C" d="M19 9h-5v1h5V9Z" />
              <path fill="#FA6FE2" d="M21 9h-2v1h2V9Z" />
              <path fill="#26B1F3" d="M22 9h-1v1h1V9Z" />
              <path fill="#FA6FE2" d="M25 9h-3v1h3V9Zm-15 1H6v1h4v-1Z" />
              <path fill="#FFE939" d="M11 10h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M13 10h-2v1h2v-1Z" />
              <path fill="#F38B7C" d="M14 10h-1v1h1v-1Zm5 0h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M25 10h-6v1h6v-1Z" />
              <path fill="#4BEA69" d="M26 10h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M7 11H6v1h1v-1Z" />
              <path fill="#4BEA69" d="M9 11H7v1h2v-1Z" />
              <path fill="#FA6FE2" d="M10 11H9v1h1v-1Z" />
              <path fill="#FFE939" d="M11 11h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M12 11h-1v1h1v-1Z" />
              <path fill="#F38B7C" d="M13 11h-1v1h1v-1Zm7 0h-1v1h1v-1Z" />
              <path fill="#FFE939" d="M22 11h-2v1h2v-1Z" />
              <path fill="#FA6FE2" d="M25 11h-3v1h3v-1Z" />
              <path fill="#4BEA69" d="M26 11h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M12 12H6v1h6v-1Z" />
              <path fill="#F38B7C" d="M13 12h-1v1h1v-1Zm7 0h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M26 12h-6v1h6v-1Zm-14 1H6v1h6v-1Z" />
              <path fill="#F38B7C" d="M13 13h-1v1h1v-1Zm7 0h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M26 13h-6v1h6v-1ZM8 14H6v1h2v-1Z" />
              <path fill="#26B1F3" d="M9 14H8v1h1v-1Z" />
              <path fill="#FA6FE2" d="M12 14H9v1h3v-1Z" />
              <path fill="#F38B7C" d="M13 14h-1v1h1v-1Zm7 0h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M23 14h-3v1h3v-1Z" />
              <path fill="#FEE3F3" d="M25 14h-2v1h2v-1Z" />
              <path fill="#FA6FE2" d="M26 14h-1v1h1v-1ZM8 15H6v1h2v-1Z" />
              <path fill="#26B1F3" d="M9 15H8v1h1v-1Z" />
              <path fill="#FA6FE2" d="M12 15H9v1h3v-1Z" />
              <path fill="#F38B7C" d="M14 15h-2v1h2v-1Zm5 0h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M21 15h-2v1h2v-1Z" />
              <path fill="#26B1F3" d="M22 15h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M26 15h-4v1h4v-1Zm-12 1H7v1h7v-1Z" />
              <path fill="#F38B7C" d="M19 16h-5v1h5v-1Z" />
              <path fill="#FA6FE2" d="M22 16h-3v1h3v-1Z" />
              <path fill="#26B1F3" d="M23 16h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M25 16h-2v1h2v-1Zm-14 1H7v1h4v-1Z" />
              <path fill="#FEE3F3" d="M12 17h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M18 17h-6v1h6v-1Z" />
              <path fill="#E9265C" d="M20 17h-2v1h2v-1Z" />
              <path fill="#FA6FE2" d="M25 17h-5v1h5v-1Zm-15 1H8v1h2v-1Z" />
              <path fill="#FEE3F3" d="M11 18h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M15 18h-4v1h4v-1Z" />
              <path fill="#26B1F3" d="M16 18h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M24 18h-8v1h8v-1Zm-9 1H8v1h7v-1Z" />
              <path fill="#26B1F3" d="M16 19h-1v1h1v-1Z" />
              <path fill="#1F1D29" d="M20 19h-4v1h4v-1Z" />
              <path fill="#FFE939" d="M21 19h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M24 19h-3v1h3v-1Zm-13 1H9v1h2v-1Z" />
              <path fill="#E9265C" d="M12 20h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M21 20h-9v1h9v-1Z" />
              <path fill="#FFE939" d="M22 20h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M23 20h-1v1h1v-1Z" />
              <path fill="#E9265C" d="M12 21h-1v1h1v-1Z" />
              <path fill="#FA6FE2" d="M21 21h-9v1h9v-1Zm-7 1h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M16 22h-2v1h2v-1Z" />
              <path fill="#FA6FE2" d="M19 22h-3v1h3v-1Z" />
              <path
                fill="#FF638D"
                d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 12h-2v1h2v-1Z" />
              <path fill="#000" d="M15 12h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 12h-2v1h2v-1Z" />
              <path fill="#000" d="M22 12h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z" />
              <path fill="#fff" d="M13 13h-2v1h2v-1Z" />
              <path fill="#000" d="M15 13h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M18 13h-3v1h3v-1Z" />
              <path fill="#fff" d="M20 13h-2v1h2v-1Z" />
              <path fill="#000" d="M22 13h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M23 13h-1v1h1v-1Zm-12 1H7v1h4v-1Z" />
              <path fill="#fff" d="M13 14h-2v1h2v-1Z" />
              <path fill="#000" d="M15 14h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M18 14h-3v1h3v-1Z" />
              <path fill="#fff" d="M20 14h-2v1h2v-1Z" />
              <path fill="#000" d="M22 14h-2v1h2v-1Z" />
              <path
                fill="#FF638D"
                d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 15h-2v1h2v-1Z" />
              <path fill="#000" d="M15 15h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 15h-2v1h2v-1Z" />
              <path fill="#000" d="M22 15h-2v1h2v-1Z" />
              <path
                fill="#FF638D"
                d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -left-[32px] -top-[14px] z-[999]" />
          </div>
          <span className="body-small ml-1 w-36 text-gray-600">
            0x600f...er2
          </span>
        </div>
        <div className="flex w-full items-center gap-x-2   overflow-hidden">
          <span className="body-small w-full overflow-hidden whitespace-nowrap text-gray-600">
            Where to find contract agreement?{/* */} – &nbsp;
            <span className="body-small text-gray-400">
              Hey Jason, you mentioned the other day that there was an archival
              Sketch file for the original email mocks.
            </span>
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-36 border-b-DEFAULT border-gray-100 border-opacity-90 bg-white px-5 py-3">
        <div className="flex min-w-fit items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#000"
              fillOpacity="0.08"
              fillRule="evenodd"
              d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="max-w-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              className="z-50 -mr-1 size-[28px] min-w-fit rounded-md outline outline-[3px] outline-white"
            >
              <path fill="#DFD7D5" d="M0 0h32v32H0z" />
              <path fill="#E1D7D5" d="M.1 0H0v.1h.1V0Z" />
              <path
                fill="#4BEA69"
                d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path fill="#343235" d="M18 24h-4v1h4v-1Zm-2 1h-2v1h2v-1Z" />
              <path fill="#E5E5DE" d="M18 25h-2v1h2v-1Z" />
              <path fill="#343235" d="M16 26h-2v1h2v-1Z" />
              <path fill="#E5E5DE" d="M18 26h-2v1h2v-1Zm0 1h-4v1h4v-1Z" />
              <path fill="#34AC80" d="M14 4h-3v1h3V4Z" />
              <path fill="#4BEA69" d="M22 4h-3v1h3V4Z" />
              <path fill="#34AC80" d="M15 5h-5v1h5V5Z" />
              <path fill="#4BEA69" d="M23 5h-5v1h5V5Z" />
              <path fill="#34AC80" d="M15 6h-5v1h5V6Z" />
              <path fill="#4BEA69" d="M23 6h-5v1h5V6ZM11 7H8v1h3V7Z" />
              <path fill="#34AC80" d="M16 7h-5v1h5V7Z" />
              <path fill="#4BEA69" d="M23 7h-6v1h6V7Z" />
              <path fill="#34AC80" d="M25 7h-2v1h2V7Z" />
              <path fill="#4BEA69" d="M11 8H7v1h4V8Z" />
              <path fill="#34AC80" d="M17 8h-6v1h6V8Z" />
              <path fill="#4BEA69" d="M21 8h-4v1h4V8Z" />
              <path fill="#34AC80" d="M26 8h-5v1h5V8Z" />
              <path fill="#4BEA69" d="M12 9H7v1h5V9Z" />
              <path fill="#34AC80" d="M17 9h-5v1h5V9Z" />
              <path fill="#4BEA69" d="M20 9h-3v1h3V9Z" />
              <path fill="#34AC80" d="M26 9h-6v1h6V9Z" />
              <path fill="#4BEA69" d="M13 10H7v1h6v-1Z" />
              <path fill="#068940" d="M14 10h-1v1h1v-1Z" />
              <path fill="#34AC80" d="M16 10h-2v1h2v-1Z" />
              <path fill="#4BEA69" d="M19 10h-3v1h3v-1Z" />
              <path fill="#068940" d="M20 10h-1v1h1v-1Z" />
              <path fill="#34AC80" d="M26 10h-6v1h6v-1Z" />
              <path fill="#4BEA69" d="M14 11H8v1h6v-1Z" />
              <path fill="#068940" d="M15 11h-1v1h1v-1Z" />
              <path fill="#34AC80" d="M16 11h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M18 11h-2v1h2v-1Z" />
              <path fill="#068940" d="M19 11h-1v1h1v-1Z" />
              <path fill="#34AC80" d="M25 11h-6v1h6v-1Z" />
              <path fill="#4BEA69" d="M15 12h-5v1h5v-1Z" />
              <path fill="#068940" d="M16 12h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M17 12h-1v1h1v-1Z" />
              <path fill="#068940" d="M18 12h-1v1h1v-1Z" />
              <path fill="#34AC80" d="M23 12h-5v1h5v-1Zm-10 1h-2v1h2v-1Z" />
              <path fill="#4BEA69" d="M16 13h-3v1h3v-1Z" />
              <path fill="#068940" d="M17 13h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M20 13h-3v1h3v-1Z" />
              <path fill="#34AC80" d="M22 13h-2v1h2v-1Zm-7 1h-5v1h5v-1Z" />
              <path fill="#068940" d="M16 14h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M17 14h-1v1h1v-1Z" />
              <path fill="#068940" d="M18 14h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M23 14h-5v1h5v-1Z" />
              <path fill="#34AC80" d="M14 15H8v1h6v-1Z" />
              <path fill="#068940" d="M15 15h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M17 15h-2v1h2v-1Z" />
              <path fill="#34AC80" d="M18 15h-1v1h1v-1Z" />
              <path fill="#068940" d="M19 15h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M25 15h-6v1h6v-1Z" />
              <path fill="#34AC80" d="M13 16H7v1h6v-1Z" />
              <path fill="#068940" d="M14 16h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M17 16h-3v1h3v-1Z" />
              <path fill="#34AC80" d="M19 16h-2v1h2v-1Z" />
              <path fill="#068940" d="M20 16h-1v1h1v-1Z" />
              <path fill="#4BEA69" d="M26 16h-6v1h6v-1Z" />
              <path fill="#34AC80" d="M13 17H7v1h6v-1Z" />
              <path fill="#4BEA69" d="M16 17h-3v1h3v-1Z" />
              <path fill="#34AC80" d="M21 17h-5v1h5v-1Z" />
              <path fill="#4BEA69" d="M26 17h-5v1h5v-1Z" />
              <path fill="#34AC80" d="M12 18H7v1h5v-1Z" />
              <path fill="#4BEA69" d="M16 18h-4v1h4v-1Z" />
              <path fill="#34AC80" d="M17 18h-1v1h1v-1Z" />
              <path fill="#0B5027" d="M22 18h-5v1h5v-1Z" />
              <path fill="#4BEA69" d="M26 18h-4v1h4v-1Z" />
              <path fill="#068940" d="M29 18h-2v1h2v-1Z" />
              <path fill="#34AC80" d="M10 19H8v1h2v-1Z" />
              <path fill="#4BEA69" d="M16 19h-6v1h6v-1Z" />
              <path fill="#068940" d="M17 19h-1v1h1v-1Z" />
              <path fill="#34AC80" d="M22 19h-5v1h5v-1Z" />
              <path fill="#4BEA69" d="M25 19h-3v1h3v-1Z" />
              <path fill="#068940" d="M29 19h-4v1h4v-1Z" />
              <path fill="#4BEA69" d="M15 20h-5v1h5v-1Z" />
              <path fill="#068940" d="M18 20h-3v1h3v-1Z" />
              <path fill="#34AC80" d="M23 20h-5v1h5v-1Z" />
              <path fill="#068940" d="M28 20h-5v1h5v-1Z" />
              <path fill="#4BEA69" d="M15 21h-5v1h5v-1Z" />
              <path fill="#34AC80" d="M23 21h-5v1h5v-1Z" />
              <path fill="#4BEA69" d="M14 22h-3v1h3v-1Z" />
              <path fill="#34AC80" d="M22 22h-3v1h3v-1Z" />
              <path
                fill="#00A556"
                d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 12h-2v1h2v-1Z" />
              <path fill="#000" d="M15 12h-2v1h2v-1Z" />
              <path fill="#00A556" d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 12h-2v1h2v-1Z" />
              <path fill="#000" d="M22 12h-2v1h2v-1Z" />
              <path fill="#00A556" d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z" />
              <path fill="#fff" d="M13 13h-2v1h2v-1Z" />
              <path fill="#000" d="M15 13h-2v1h2v-1Z" />
              <path fill="#00A556" d="M18 13h-3v1h3v-1Z" />
              <path fill="#fff" d="M20 13h-2v1h2v-1Z" />
              <path fill="#000" d="M22 13h-2v1h2v-1Z" />
              <path
                fill="#00A556"
                d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 14h-2v1h2v-1Z" />
              <path fill="#000" d="M15 14h-2v1h2v-1Z" />
              <path fill="#00A556" d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 14h-2v1h2v-1Z" />
              <path fill="#000" d="M22 14h-2v1h2v-1Z" />
              <path
                fill="#00A556"
                d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 15h-2v1h2v-1Z" />
              <path fill="#000" d="M15 15h-2v1h2v-1Z" />
              <path fill="#00A556" d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 15h-2v1h2v-1Z" />
              <path fill="#000" d="M22 15h-2v1h2v-1Z" />
              <path
                fill="#00A556"
                d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -left-[32px] -top-[14px] z-[999]" />
          </div>
          <span className="body-small ml-1 w-36 text-black">
            Tony, Paulie, Chris M
          </span>
        </div>
        <div className="-ml-[17px] flex w-full items-center  gap-x-2 overflow-hidden">
          <div className="size-2 rounded-full bg-orange-500" />
          <span className="body-small w-full overflow-hidden whitespace-nowrap text-black">
            Upcoming event{/* */} – &nbsp;
            <span className="body-small text-gray-400">
              Don't miss out! Join us for our upcoming event.
            </span>
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-36 border-b-DEFAULT border-gray-100 border-opacity-90 bg-white px-5 py-3">
        <div className="flex min-w-fit items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#000"
              fillOpacity="0.08"
              fillRule="evenodd"
              d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="max-w-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              className="z-50 -mr-1 size-[28px] min-w-fit rounded-md outline outline-[3px] outline-white"
            >
              <path fill="#D5D7E0" d="M0 0h32v32H0z" />
              <path fill="#D5D7E1" d="M.1 0H0v.1h.1V0Z" />
              <path
                fill="#EED811"
                d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path fill="#505A5C" d="M23 21H9v1h14v-1Z" />
              <path fill="#FF1A0B" d="M11 22H9v1h2v-1Z" />
              <path fill="#505A5C" d="M17 22h-6v1h6v-1Z" />
              <path fill="#FF1A0B" d="M20 22h-3v1h3v-1Z" />
              <path fill="#505A5C" d="M23 22h-3v1h3v-1Z" />
              <path fill="#F78A18" d="M11 23H9v1h2v-1Z" />
              <path fill="#505A5C" d="M22 23H11v1h11v-1Z" />
              <path fill="#F78A18" d="M23 23h-1v1h1v-1Zm-13 1H9v1h1v-1Z" />
              <path fill="#505A5C" d="M19 24h-9v1h9v-1Z" />
              <path fill="#F78A18" d="M20 24h-1v1h1v-1Z" />
              <path fill="#505A5C" d="M22 24h-2v1h2v-1Z" />
              <path fill="#F78A18" d="M23 24h-1v1h1v-1Z" />
              <path fill="#505A5C" d="M11 25H9v1h2v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#FFF449" d="M14 25h-1v1h1v-1Z" />
              <path fill="#505A5C" d="M17 25h-3v1h3v-1Z" />
              <path fill="#FFF449" d="M19 25h-2v1h2v-1Z" />
              <path
                fill="#505A5C"
                d="M23 25h-4v1h4v-1Zm-12 1H9v1h2v-1Zm9 0h-8v1h8v-1Z"
              />
              <path fill="#FFF449" d="M23 26h-3v1h3v-1Z" />
              <path fill="#505A5C" d="M10 27H9v1h1v-1Z" />
              <path fill="#068940" d="M11 27h-1v1h1v-1Z" />
              <path fill="#505A5C" d="M13 27h-1v1h1v-1Z" />
              <path fill="#068940" d="M15 27h-2v1h2v-1Z" />
              <path fill="#505A5C" d="M18 27h-3v1h3v-1Z" />
              <path fill="#068940" d="M23 27h-5v1h5v-1Zm-12 1H9v1h2v-1Z" />
              <path fill="#505A5C" d="M20 28h-8v1h8v-1Z" />
              <path fill="#068940" d="M23 28h-3v1h3v-1Z" />
              <path fill="#2B83F6" d="M11 29H9v1h2v-1Z" />
              <path fill="#505A5C" d="M13 29h-1v1h1v-1Z" />
              <path fill="#2B83F6" d="M17 29h-4v1h4v-1Z" />
              <path fill="#505A5C" d="M19 29h-2v1h2v-1Z" />
              <path fill="#2B83F6" d="M20 29h-1v1h1v-1Z" />
              <path fill="#505A5C" d="M22 29h-2v1h2v-1Z" />
              <path fill="#2B83F6" d="M23 29h-1v1h1v-1Zm-13 1H9v1h1v-1Z" />
              <path fill="#505A5C" d="M11 30h-1v1h1v-1Zm12 0H12v1h11v-1Z" />
              <path fill="#9F21A0" d="M11 31H9v1h2v-1Z" />
              <path fill="#505A5C" d="M23 31H12v1h11v-1Z" />
              <path
                fill="#FFB913"
                d="M18 5h-4v1h4V5Zm2 1h-8v1h8V6Zm2 1H10v1h12V7Z"
              />
              <path fill="#667AF9" d="M26 7h-2v1h2V7Z" />
              <path fill="#FFF0EE" d="M9 8H4v1h5V8Z" />
              <path fill="#FFB913" d="M23 8H9v1h14V8Z" />
              <path fill="#667AF9" d="M26 8h-2v1h2V8Z" />
              <path fill="#FFF0EE" d="M4 9H3v1h1V9Z" />
              <path fill="#FFB913" d="M23 9H9v1h14V9Z" />
              <path fill="#FFF0EE" d="M4 10H3v1h1v-1Z" />
              <path fill="#FE500C" d="M10 10H8v1h2v-1Z" />
              <path fill="#FFB913" d="M23 10H10v1h13v-1Z" />
              <path fill="#FE500C" d="M24 10h-1v1h1v-1Z" />
              <path fill="#FFF0EE" d="M4 11H3v1h1v-1Z" />
              <path fill="#FE500C" d="M11 11H8v1h3v-1Z" />
              <path fill="#FFB913" d="M23 11H11v1h12v-1Z" />
              <path fill="#FE500C" d="M24 11h-1v1h1v-1Z" />
              <path fill="#FFF0EE" d="M5 12H4v1h1v-1Z" />
              <path fill="#E11833" d="M9 12H7v1h2v-1Z" />
              <path fill="#FE500C" d="M12 12H9v1h3v-1Z" />
              <path fill="#FFB913" d="M23 12H12v1h11v-1Z" />
              <path fill="#FE500C" d="M25 12h-2v1h2v-1Z" />
              <path fill="#FFF0EE" d="M6 13H5v1h1v-1Z" />
              <path fill="#E11833" d="M9 13H7v1h2v-1Z" />
              <path fill="#FE500C" d="M13 13H9v1h4v-1Z" />
              <path fill="#FFB913" d="M22 13h-9v1h9v-1Z" />
              <path fill="#FE500C" d="M25 13h-3v1h3v-1Z" />
              <path fill="#FFF0EE" d="M7 14H6v1h1v-1Z" />
              <path fill="#E11833" d="M10 14H7v1h3v-1Z" />
              <path fill="#FE500C" d="M16 14h-6v1h6v-1Z" />
              <path fill="#FFB913" d="M21 14h-5v1h5v-1Z" />
              <path fill="#FE500C" d="M25 14h-4v1h4v-1Z" />
              <path fill="#FFF0EE" d="M8 15H7v1h1v-1Z" />
              <path fill="#E11833" d="M10 15H8v1h2v-1Z" />
              <path fill="#FE500C" d="M25 15H10v1h15v-1Z" />
              <path fill="#FFF0EE" d="M9 16H8v1h1v-1Z" />
              <path fill="#E11833" d="M13 16H9v1h4v-1Z" />
              <path fill="#FE500C" d="M24 16H13v1h11v-1Z" />
              <path fill="#FFF0EE" d="M25 16h-1v1h1v-1Z" />
              <path fill="#FFB913" d="M28 16h-1v1h1v-1Z" />
              <path fill="#E11833" d="M9 17H8v1h1v-1Z" />
              <path fill="#FFF0EE" d="M11 17H9v1h2v-1Z" />
              <path fill="#E11833" d="M16 17h-5v1h5v-1Z" />
              <path fill="#FE500C" d="M22 17h-6v1h6v-1Z" />
              <path fill="#E11833" d="M24 17h-2v1h2v-1Z" />
              <path fill="#FFF0EE" d="M26 17h-1v1h1v-1Z" />
              <path fill="#E11833" d="M11 18H9v1h2v-1Z" />
              <path fill="#FFF0EE" d="M13 18h-2v1h2v-1Z" />
              <path fill="#E11833" d="M23 18H13v1h10v-1Z" />
              <path fill="#FFF0EE" d="M27 18h-1v1h1v-1Z" />
              <path fill="#FFB913" d="M8 19H6v1h2v-1Z" />
              <path fill="#E11833" d="M13 19H9v1h4v-1Z" />
              <path fill="#FFF0EE" d="M16 19h-3v1h3v-1Z" />
              <path fill="#E11833" d="M23 19h-7v1h7v-1Z" />
              <path fill="#FFF0EE" d="M28 19h-1v1h1v-1Z" />
              <path fill="#667AF9" d="M6 20H5v1h1v-1Z" />
              <path fill="#FFB913" d="M8 20H6v1h2v-1Z" />
              <path fill="#E11833" d="M16 20h-6v1h6v-1Z" />
              <path fill="#FFF0EE" d="M19 20h-3v1h3v-1Z" />
              <path fill="#E11833" d="M22 20h-3v1h3v-1Z" />
              <path fill="#FFF0EE" d="M28 20h-1v1h1v-1Z" />
              <path fill="#667AF9" d="M7 21H5v1h2v-1Z" />
              <path fill="#E11833" d="M19 21h-7v1h7v-1Z" />
              <path fill="#FFF0EE" d="M22 21h-3v1h3v-1Zm6 0h-1v1h1v-1Z" />
              <path fill="#E11833" d="M18 22h-4v1h4v-1Z" />
              <path fill="#FFF0EE" d="M27 22h-5v1h5v-1Z" />
              <path
                fill="#000"
                d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 12h-2v1h2v-1Z" />
              <path fill="#000" d="M16 12h-3v1h3v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 12h-2v1h2v-1Z" />
              <path fill="#000" d="M23 12h-3v1h3v-1Zm-12 1H7v1h4v-1Z" />
              <path fill="#fff" d="M13 13h-2v1h2v-1Z" />
              <path fill="#000" d="M18 13h-5v1h5v-1Z" />
              <path fill="#fff" d="M20 13h-2v1h2v-1Z" />
              <path
                fill="#000"
                d="M23 13h-3v1h3v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 14h-2v1h2v-1Z" />
              <path fill="#000" d="M16 14h-3v1h3v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 14h-2v1h2v-1Z" />
              <path
                fill="#000"
                d="M23 14h-3v1h3v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 15h-2v1h2v-1Z" />
              <path fill="#000" d="M16 15h-3v1h3v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 15h-2v1h2v-1Z" />
              <path
                fill="#000"
                d="M23 15h-3v1h3v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -left-[32px] -top-[14px] z-[999]" />
          </div>
          <span className="body-small ml-1 w-36 text-black">
            Jason, Sunny, Joseph
          </span>
        </div>
        <div className="-ml-[17px] flex w-full items-center  gap-x-2 overflow-hidden">
          <div className="size-2 rounded-full bg-orange-500" />
          <span className="body-small w-full overflow-hidden whitespace-nowrap text-black">
            Meeting Tomorrow at 2 PM{/* */} – &nbsp;
            <span className="body-small text-gray-400">
              lease let me know if you need to reschedule.
            </span>
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-36 border-b-DEFAULT border-gray-100 border-opacity-90 bg-white px-5 py-3">
        <div className="flex min-w-fit items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#000"
              fillOpacity="0.08"
              fillRule="evenodd"
              d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="max-w-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              className="z-50 -mr-1 size-[28px] min-w-fit rounded-md outline outline-[3px] outline-white"
            >
              <path fill="#DFD7D5" d="M0 0h32v32H0z" />
              <path fill="#E1D7D5" d="M.1 0H0v.1h.1V0Z" />
              <path
                fill="#B9185C"
                d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path
                fill="#FF638D"
                d="M13 21h-2v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-8 1h-2v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-10 1H9v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-12 1H9v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-10 1h-1v1h1v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-8 1h-1v1h1v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-10 1H9v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-12 1H9v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-10 1h-1v1h1v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-8 1h-1v1h1v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm-10 1H9v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Zm4 0h-2v1h2v-1Z"
              />
              <path
                fill="#fff"
                d="M17 2h-3v1h3V2Zm2 1h-7v1h7V3Zm-6 1h-1v1h1V4Z"
              />
              <path fill="#000" d="M14 4h-1v1h1V4Z" />
              <path fill="#fff" d="M16 4h-2v1h2V4Z" />
              <path fill="#000" d="M17 4h-1v1h1V4Z" />
              <path fill="#fff" d="M19 4h-2v1h2V4Z" />
              <path fill="#FF7216" d="M15 5H9v1h6V5Z" />
              <path fill="#fff" d="M20 5h-5v1h5V5Z" />
              <path fill="#9F4B27" d="M25 5h-1v1h1V5Zm2 0h-1v1h1V5Z" />
              <path fill="#fff" d="M20 6h-9v1h9V6Z" />
              <path
                fill="#9F4B27"
                d="M27 6h-2v1h2V6ZM5 7H4v1h1V7Zm2 0H6v1h1V7Z"
              />
              <path fill="#fff" d="M13 7h-2v1h2V7Z" />
              <path fill="#000" d="M14 7h-1v1h1V7Z" />
              <path fill="#fff" d="M15 7h-1v1h1V7Z" />
              <path fill="#000" d="M16 7h-1v1h1V7Z" />
              <path fill="#fff" d="M17 7h-1v1h1V7Z" />
              <path fill="#000" d="M18 7h-1v1h1V7Z" />
              <path fill="#fff" d="M20 7h-2v1h2V7Z" />
              <path fill="#F3322C" d="M23 7h-1v1h1V7Z" />
              <path fill="#9F4B27" d="M27 7h-1v1h1V7ZM7 8H5v1h2V8Z" />
              <path fill="#fff" d="M19 8h-7v1h7V8Z" />
              <path fill="#F3322C" d="M22 8h-1v1h1V8Z" />
              <path fill="#9F4B27" d="M26 8h-1v1h1V8ZM7 9H6v1h1V9Z" />
              <path fill="#F9E8DD" d="M12 9h-1v1h1V9Z" />
              <path fill="#F3322C" d="M13 9h-1v1h1V9Z" />
              <path fill="#F9E8DD" d="M14 9h-1v1h1V9Z" />
              <path fill="#F3322C" d="M15 9h-1v1h1V9Z" />
              <path fill="#F9E8DD" d="M16 9h-1v1h1V9Z" />
              <path fill="#F3322C" d="M17 9h-1v1h1V9Z" />
              <path fill="#F9E8DD" d="M18 9h-1v1h1V9Z" />
              <path fill="#F3322C" d="M19 9h-1v1h1V9Z" />
              <path fill="#F9E8DD" d="M20 9h-1v1h1V9Z" />
              <path fill="#F3322C" d="M21 9h-1v1h1V9Z" />
              <path fill="#F9E8DD" d="M23 9h-2v1h2V9Z" />
              <path fill="#9F4B27" d="M26 9h-1v1h1V9ZM7 10H6v1h1v-1Z" />
              <path fill="#F9E8DD" d="M12 10h-1v1h1v-1Z" />
              <path fill="#F3322C" d="M13 10h-1v1h1v-1Z" />
              <path fill="#F9E8DD" d="M14 10h-1v1h1v-1Z" />
              <path fill="#F3322C" d="M15 10h-1v1h1v-1Z" />
              <path fill="#F9E8DD" d="M16 10h-1v1h1v-1Z" />
              <path fill="#F3322C" d="M17 10h-1v1h1v-1Z" />
              <path fill="#F9E8DD" d="M18 10h-1v1h1v-1Z" />
              <path fill="#F3322C" d="M19 10h-1v1h1v-1Z" />
              <path fill="#F9E8DD" d="M20 10h-1v1h1v-1Z" />
              <path fill="#F3322C" d="M21 10h-1v1h1v-1Z" />
              <path fill="#9F4B27" d="M25 10h-1v1h1v-1ZM9 11H7v1h2v-1Z" />
              <path fill="#fff" d="M23 11H10v1h13v-1Z" />
              <path fill="#9F4B27" d="M25 11h-1v1h1v-1Z" />
              <path fill="#fff" d="M24 12H9v1h15v-1Z" />
              <path fill="#9F4B27" d="M25 12h-1v1h1v-1Z" />
              <path
                fill="#fff"
                d="M25 13H9v1h16v-1Zm0 1H8v1h17v-1Zm1 1H8v1h18v-1Zm0 1H8v1h18v-1Zm0 1H8v1h18v-1Zm-16 1H8v1h2v-1Z"
              />
              <path fill="#7CC4F2" d="M11 18h-1v1h1v-1Z" />
              <path fill="#fff" d="M16 18h-5v1h5v-1Z" />
              <path fill="#7CC4F2" d="M20 18h-4v1h4v-1Z" />
              <path fill="#fff" d="M25 18h-5v1h5v-1Zm-14 1H9v1h2v-1Z" />
              <path fill="#7CC4F2" d="M12 19h-1v1h1v-1Z" />
              <path fill="#fff" d="M22 19H12v1h10v-1Z" />
              <path fill="#7CC4F2" d="M23 19h-1v1h1v-1Z" />
              <path fill="#fff" d="M24 19h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M25 19h-1v1h1v-1Zm-9 1H9v1h7v-1Z" />
              <path fill="#fff" d="M21 20h-5v1h5v-1Z" />
              <path
                fill="#7CC4F2"
                d="M25 20h-4v1h4v-1Zm-1 1h-1v1h1v-1Zm0 1h-1v1h1v-1Z"
              />
              <path
                fill="#B9185C"
                d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 12h-2v1h2v-1Z" />
              <path fill="#000" d="M15 12h-2v1h2v-1Z" />
              <path fill="#B9185C" d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 12h-2v1h2v-1Z" />
              <path fill="#000" d="M22 12h-2v1h2v-1Z" />
              <path fill="#B9185C" d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z" />
              <path fill="#fff" d="M13 13h-2v1h2v-1Z" />
              <path fill="#000" d="M15 13h-2v1h2v-1Z" />
              <path fill="#B9185C" d="M18 13h-3v1h3v-1Z" />
              <path fill="#fff" d="M20 13h-2v1h2v-1Z" />
              <path fill="#000" d="M22 13h-2v1h2v-1Z" />
              <path
                fill="#B9185C"
                d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 14h-2v1h2v-1Z" />
              <path fill="#000" d="M15 14h-2v1h2v-1Z" />
              <path fill="#B9185C" d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 14h-2v1h2v-1Z" />
              <path fill="#000" d="M22 14h-2v1h2v-1Z" />
              <path
                fill="#B9185C"
                d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 15h-2v1h2v-1Z" />
              <path fill="#000" d="M15 15h-2v1h2v-1Z" />
              <path fill="#B9185C" d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 15h-2v1h2v-1Z" />
              <path fill="#000" d="M22 15h-2v1h2v-1Z" />
              <path
                fill="#B9185C"
                d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -left-[32px] -top-[14px] z-[999]" />
          </div>
          <span className="body-small ml-1 w-36 text-black">Nightwatch</span>
        </div>
        <div className="-ml-[17px] flex w-full items-center  gap-x-2 overflow-hidden">
          <div className="size-2 rounded-full bg-orange-500" />
          <span className="body-small w-full overflow-hidden whitespace-nowrap text-black">
            Confirmation of Payment Received{/* */} – &nbsp;
            <span className="body-small text-gray-400">
              We have received your payment for invoice #425116.{' '}
            </span>
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-36 border-b-DEFAULT border-gray-100 border-opacity-90 bg-white px-5 py-3">
        <div className="flex min-w-fit items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#000"
              fillOpacity="0.08"
              fillRule="evenodd"
              d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="max-w-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              className="z-50 -mr-1 size-[28px] min-w-fit rounded-md outline outline-[3px] outline-white"
            >
              <path fill="#DFD7D5" d="M0 0h32v32H0z" />
              <path fill="#E1D7D5" d="M.1 0H0v.1h.1V0Z" />
              <path
                fill="#9F21A0"
                d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path fill="#FFF0EE" d="M19 24h-1v1h1v-1Zm-2 1h-3v1h3v-1Z" />
              <path fill="#000" d="M18 25h-1v1h1v-1Z" />
              <path fill="#FFF0EE" d="M19 25h-1v1h1v-1Z" />
              <path fill="#F38B7C" d="M20 25h-1v1h1v-1Z" />
              <path fill="#FFF0EE" d="M14 26h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#000" d="M17 26h-1v1h1v-1Z" />
              <path
                fill="#FFF0EE"
                d="M19 26h-2v1h2v-1Zm-5 1h-1v1h1v-1Zm2 0h-1v1h1v-1Z"
              />
              <path fill="#F38B7C" d="M18 27h-2v1h2v-1Z" />
              <path
                fill="#FFF0EE"
                d="M19 27h-1v1h1v-1Zm-3 1h-1v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path
                fill="#E11833"
                d="M14 3h-1v1h1V3Zm4 0h-3v1h3V3Zm1 1h-7v1h7V4Zm0 1h-8v1h8V5Z"
              />
              <path fill="#F9F4E6" d="M12 6h-2v1h2V6Z" />
              <path fill="#E11833" d="M19 6h-7v1h7V6Z" />
              <path fill="#F9F4E6" d="M22 6h-3v1h3V6Zm-7 1H9v1h6V7Z" />
              <path fill="#E11833" d="M19 7h-4v1h4V7Z" />
              <path fill="#F9F4E6" d="M23 7h-4v1h4V7Zm-5 1H9v1h9V8Z" />
              <path fill="#E11833" d="M19 8h-1v1h1V8Z" />
              <path
                fill="#F9F4E6"
                d="M23 8h-4v1h4V8Zm1 1H8v1h16V9Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm0 1H8v1h16v-1Zm-8 1H8v1h8v-1Z"
              />
              <path fill="#F98F30" d="M20 17h-4v1h4v-1Z" />
              <path fill="#F9F4E6" d="M24 17h-4v1h4v-1Zm-8 1H8v1h8v-1Z" />
              <path fill="#F98F30" d="M22 18h-6v1h6v-1Z" />
              <path fill="#F9F4E6" d="M24 18h-2v1h2v-1Zm-8 1H8v1h8v-1Z" />
              <path fill="#E11833" d="M20 19h-4v1h4v-1Z" />
              <path fill="#F9F4E6" d="M24 19h-4v1h4v-1Zm-8 1H8v1h8v-1Z" />
              <path fill="#E11833" d="M20 20h-4v1h4v-1Z" />
              <path fill="#F9F4E6" d="M24 20h-4v1h4v-1Z" />
              <path
                fill="#F3322C"
                d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 12h-2v1h2v-1Z" />
              <path fill="#000" d="M15 12h-2v1h2v-1Z" />
              <path fill="#F3322C" d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 12h-2v1h2v-1Z" />
              <path fill="#000" d="M22 12h-2v1h2v-1Z" />
              <path fill="#F3322C" d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z" />
              <path fill="#fff" d="M13 13h-2v1h2v-1Z" />
              <path fill="#000" d="M15 13h-2v1h2v-1Z" />
              <path fill="#F3322C" d="M18 13h-3v1h3v-1Z" />
              <path fill="#fff" d="M20 13h-2v1h2v-1Z" />
              <path fill="#000" d="M22 13h-2v1h2v-1Z" />
              <path
                fill="#F3322C"
                d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 14h-2v1h2v-1Z" />
              <path fill="#000" d="M15 14h-2v1h2v-1Z" />
              <path fill="#F3322C" d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 14h-2v1h2v-1Z" />
              <path fill="#000" d="M22 14h-2v1h2v-1Z" />
              <path
                fill="#F3322C"
                d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#fff" d="M13 15h-2v1h2v-1Z" />
              <path fill="#000" d="M15 15h-2v1h2v-1Z" />
              <path fill="#F3322C" d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#fff" d="M20 15h-2v1h2v-1Z" />
              <path fill="#000" d="M22 15h-2v1h2v-1Z" />
              <path
                fill="#F3322C"
                d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -left-[32px] -top-[14px] z-[999]" />
          </div>
          <span className="body-small ml-1 w-36 text-black">
            Lella Lombardi
          </span>
        </div>
        <div className="-ml-[17px] flex w-full items-center  gap-x-2 overflow-hidden">
          <div className="size-2 rounded-full bg-orange-500" />
          <span className="body-small w-full overflow-hidden whitespace-nowrap text-black">
            New Product Launch{/* */} – &nbsp;
            <span className="body-small text-gray-400">
              We would be delighted if you could attend our launch event.
            </span>
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-36 border-b-DEFAULT border-gray-100 border-opacity-90 bg-white px-5 py-3">
        <div className="flex min-w-fit items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
          >
            <path
              fill="#000"
              fillOpacity="0.08"
              fillRule="evenodd"
              d="M13.342 3.573H2.676V14.24h10.666V3.573ZM2.676 2.24c-.737 0-1.334.597-1.334 1.333V14.24c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.573c0-.736-.597-1.333-1.334-1.333H2.676Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="max-w-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              className="z-50 -mr-1 size-[28px] min-w-fit rounded-md outline outline-[3px] outline-white"
            >
              <path fill="#D5D7E0" d="M0 0h32v32H0z" />
              <path fill="#D5D7E1" d="M.1 0H0v.1h.1V0Z" />
              <path
                fill="#D26451"
                d="M23 21H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm0 1H9v1h14v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path fill="#667AF9" d="M23 21H9v1h14v-1Zm-13 1H9v1h1v-1Z" />
              <path fill="#648DF9" d="M11 22h-1v1h1v-1Z" />
              <path fill="#667AF9" d="M12 22h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M13 22h-1v1h1v-1Z" />
              <path fill="#667AF9" d="M14 22h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M15 22h-1v1h1v-1Z" />
              <path fill="#667AF9" d="M16 22h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M17 22h-1v1h1v-1Z" />
              <path fill="#667AF9" d="M18 22h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M19 22h-1v1h1v-1Z" />
              <path fill="#667AF9" d="M20 22h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M21 22h-1v1h1v-1Z" />
              <path fill="#667AF9" d="M22 22h-1v1h1v-1Z" />
              <path
                fill="#648DF9"
                d="M23 22h-1v1h1v-1Zm0 1H9v1h14v-1Zm-13 1H9v1h1v-1Z"
              />
              <path fill="#63A0F9" d="M11 24h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M12 24h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M13 24h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M14 24h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M15 24h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M16 24h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M17 24h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M18 24h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M19 24h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M20 24h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M21 24h-1v1h1v-1Z" />
              <path fill="#648DF9" d="M22 24h-1v1h1v-1Z" />
              <path
                fill="#63A0F9"
                d="M23 24h-1v1h1v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-13 1H9v1h1v-1Z"
              />
              <path fill="#7CC4F2" d="M11 28h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M14 28h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M15 28h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M16 28h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M17 28h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M18 28h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M19 28h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M20 28h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M21 28h-1v1h1v-1Z" />
              <path fill="#63A0F9" d="M22 28h-1v1h1v-1Z" />
              <path
                fill="#7CC4F2"
                d="M23 28h-1v1h1v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Zm-13 1H9v1h1v-1Z"
              />
              <path fill="#97F2FB" d="M11 30h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M14 30h-1v1h1v-1Z" />
              <path fill="#97F2FB" d="M15 30h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M16 30h-1v1h1v-1Z" />
              <path fill="#97F2FB" d="M17 30h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M18 30h-1v1h1v-1Z" />
              <path fill="#97F2FB" d="M19 30h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M20 30h-1v1h1v-1Z" />
              <path fill="#97F2FB" d="M21 30h-1v1h1v-1Z" />
              <path fill="#7CC4F2" d="M22 30h-1v1h1v-1Z" />
              <path
                fill="#97F2FB"
                d="M23 30h-1v1h1v-1Zm-12 1H9v1h2v-1Zm12 0H12v1h11v-1Z"
              />
              <path fill="#FF82AD" d="M20 5h-8v1h8V5Zm-8 1H9v1h3V6Z" />
              <path fill="#FF638D" d="M15 6h-3v1h3V6Z" />
              <path fill="#FF82AD" d="M16 6h-1v1h1V6Z" />
              <path fill="#FF638D" d="M20 6h-4v1h4V6Z" />
              <path fill="#FF82AD" d="M23 6h-3v1h3V6ZM9 7H8v1h1V7Z" />
              <path fill="#FF638D" d="M12 7H9v1h3V7Z" />
              <path fill="#FF82AD" d="M15 7h-3v1h3V7Z" />
              <path fill="#FF638D" d="M16 7h-1v1h1V7Z" />
              <path fill="#FF82AD" d="M20 7h-4v1h4V7Z" />
              <path fill="#FF638D" d="M23 7h-3v1h3V7Z" />
              <path fill="#FF82AD" d="M24 7h-1v1h1V7ZM8 8H7v1h1V8Z" />
              <path fill="#FF638D" d="M9 8H8v1h1V8Z" />
              <path fill="#FF82AD" d="M11 8H9v1h2V8Z" />
              <path fill="#FF638D" d="M12 8h-1v1h1V8Z" />
              <path fill="#FF82AD" d="M13 8h-1v1h1V8Z" />
              <path fill="#FF638D" d="M14 8h-1v1h1V8Z" />
              <path fill="#FF82AD" d="M15 8h-1v1h1V8Z" />
              <path fill="#FF638D" d="M16 8h-1v1h1V8Z" />
              <path fill="#FF82AD" d="M17 8h-1v1h1V8Z" />
              <path fill="#FF638D" d="M18 8h-1v1h1V8Z" />
              <path fill="#FF82AD" d="M20 8h-2v1h2V8Z" />
              <path fill="#FF638D" d="M21 8h-1v1h1V8Z" />
              <path fill="#FF82AD" d="M23 8h-2v1h2V8Z" />
              <path fill="#FF638D" d="M24 8h-1v1h1V8Z" />
              <path fill="#FF82AD" d="M25 8h-1v1h1V8ZM8 9H7v1h1V9Z" />
              <path fill="#FF638D" d="M9 9H8v1h1V9Z" />
              <path fill="#FF82AD" d="M10 9H9v1h1V9Z" />
              <path fill="#FF638D" d="M11 9h-1v1h1V9Z" />
              <path fill="#FF82AD" d="M13 9h-2v1h2V9Z" />
              <path fill="#FF638D" d="M14 9h-1v1h1V9Z" />
              <path fill="#FF82AD" d="M16 9h-2v1h2V9Z" />
              <path fill="#FF638D" d="M17 9h-1v1h1V9Z" />
              <path fill="#FF82AD" d="M19 9h-2v1h2V9Z" />
              <path fill="#FF638D" d="M20 9h-1v1h1V9Z" />
              <path fill="#FF82AD" d="M25 9h-5v1h5V9Zm-13 1H6v1h6v-1Z" />
              <path fill="#FF638D" d="M13 10h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M16 10h-3v1h3v-1Z" />
              <path fill="#FF638D" d="M17 10h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M19 10h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M20 10h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M22 10h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M23 10h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M24 10h-1v1h1v-1Z" />
              <path fill="#FF638D" d="M25 10h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M26 10h-1v1h1v-1ZM7 11H6v1h1v-1Z" />
              <path fill="#FF638D" d="M8 11H7v1h1v-1Z" />
              <path fill="#FF82AD" d="M12 11H8v1h4v-1Z" />
              <path fill="#FF638D" d="M13 11h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M19 11h-6v1h6v-1Z" />
              <path fill="#FF638D" d="M20 11h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M24 11h-4v1h4v-1Z" />
              <path fill="#FF638D" d="M25 11h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M26 11h-1v1h1v-1ZM7 12H6v1h1v-1Z" />
              <path fill="#FF638D" d="M8 12H7v1h1v-1Z" />
              <path fill="#FF82AD" d="M10 12H8v1h2v-1Z" />
              <path fill="#FF638D" d="M11 12h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M13 12h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M14 12h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M17 12h-3v1h3v-1Z" />
              <path fill="#FF638D" d="M18 12h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M24 12h-6v1h6v-1Z" />
              <path fill="#FF638D" d="M25 12h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M26 12h-1v1h1v-1Zm-16 1H6v1h4v-1Z" />
              <path fill="#FF638D" d="M11 13h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M13 13h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M14 13h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M18 13h-4v1h4v-1Z" />
              <path fill="#FF638D" d="M19 13h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M20 13h-1v1h1v-1Z" />
              <path fill="#FF638D" d="M22 13h-2v1h2v-1Z" />
              <path fill="#FF82AD" d="M24 13h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M25 13h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M26 13h-1v1h1v-1ZM7 14H6v1h1v-1Z" />
              <path fill="#FF638D" d="M8 14H7v1h1v-1Z" />
              <path fill="#FF82AD" d="M10 14H8v1h2v-1Z" />
              <path fill="#FF638D" d="M11 14h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M14 14h-3v1h3v-1Z" />
              <path fill="#FF638D" d="M15 14h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M24 14h-9v1h9v-1Z" />
              <path fill="#FF638D" d="M25 14h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M26 14h-1v1h1v-1ZM7 15H6v1h1v-1Z" />
              <path fill="#FF638D" d="M8 15H7v1h1v-1Z" />
              <path fill="#FF82AD" d="M11 15H8v1h3v-1Z" />
              <path fill="#FF638D" d="M12 15h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M17 15h-5v1h5v-1Z" />
              <path fill="#FF638D" d="M18 15h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M24 15h-6v1h6v-1Z" />
              <path fill="#FF638D" d="M25 15h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M26 15h-1v1h1v-1Zm-14 1H6v1h6v-1Z" />
              <path fill="#FF638D" d="M13 16h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M18 16h-5v1h5v-1Z" />
              <path fill="#FF638D" d="M20 16h-2v1h2v-1Z" />
              <path fill="#FF82AD" d="M24 16h-4v1h4v-1Z" />
              <path fill="#FF638D" d="M25 16h-1v1h1v-1Z" />
              <path
                fill="#FF82AD"
                d="M26 16h-1v1h1v-1Zm-1 1H7v1h18v-1ZM8 18H7v1h1v-1Z"
              />
              <path fill="#FF638D" d="M9 18H8v1h1v-1Z" />
              <path fill="#FF82AD" d="M12 18H9v1h3v-1Z" />
              <path fill="#FF638D" d="M14 18h-2v1h2v-1Z" />
              <path fill="#FF82AD" d="M16 18h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M17 18h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M22 18h-5v1h5v-1Z" />
              <path fill="#FF638D" d="M24 18h-2v1h2v-1Z" />
              <path fill="#FF82AD" d="M25 18h-1v1h1v-1ZM9 19H8v1h1v-1Z" />
              <path fill="#FF638D" d="M10 19H9v1h1v-1Z" />
              <path fill="#FF82AD" d="M11 19h-1v1h1v-1Z" />
              <path fill="#FF638D" d="M12 19h-1v1h1v-1Z" />
              <path fill="#FF82AD" d="M14 19h-2v1h2v-1Z" />
              <path fill="#FF638D" d="M16 19h-2v1h2v-1Z" />
              <path fill="#FF82AD" d="M20 19h-4v1h4v-1Z" />
              <path fill="#FF638D" d="M22 19h-2v1h2v-1Z" />
              <path fill="#FF82AD" d="M24 19h-2v1h2v-1Zm-1 1H9v1h14v-1Z" />
              <path
                fill="#D7D3CD"
                d="M16 11h-6v1h6v-1Zm7 0h-6v1h6v-1Zm-12 1h-1v1h1v-1Z"
              />
              <path fill="#FDF8FF" d="M13 12h-2v1h2v-1Z" />
              <path fill="#000" d="M15 12h-2v1h2v-1Z" />
              <path fill="#D7D3CD" d="M16 12h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#FDF8FF" d="M20 12h-2v1h2v-1Z" />
              <path fill="#000" d="M22 12h-2v1h2v-1Z" />
              <path fill="#D7D3CD" d="M23 12h-1v1h1v-1Zm-12 1H7v1h4v-1Z" />
              <path fill="#FDF8FF" d="M13 13h-2v1h2v-1Z" />
              <path fill="#000" d="M15 13h-2v1h2v-1Z" />
              <path fill="#D7D3CD" d="M18 13h-3v1h3v-1Z" />
              <path fill="#FDF8FF" d="M20 13h-2v1h2v-1Z" />
              <path fill="#000" d="M22 13h-2v1h2v-1Z" />
              <path
                fill="#D7D3CD"
                d="M23 13h-1v1h1v-1ZM8 14H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#FDF8FF" d="M13 14h-2v1h2v-1Z" />
              <path fill="#000" d="M15 14h-2v1h2v-1Z" />
              <path fill="#D7D3CD" d="M16 14h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#FDF8FF" d="M20 14h-2v1h2v-1Z" />
              <path fill="#000" d="M22 14h-2v1h2v-1Z" />
              <path
                fill="#D7D3CD"
                d="M23 14h-1v1h1v-1ZM8 15H7v1h1v-1Zm3 0h-1v1h1v-1Z"
              />
              <path fill="#FDF8FF" d="M13 15h-2v1h2v-1Z" />
              <path fill="#000" d="M15 15h-2v1h2v-1Z" />
              <path fill="#D7D3CD" d="M16 15h-1v1h1v-1Zm2 0h-1v1h1v-1Z" />
              <path fill="#FDF8FF" d="M20 15h-2v1h2v-1Z" />
              <path fill="#000" d="M22 15h-2v1h2v-1Z" />
              <path
                fill="#D7D3CD"
                d="M23 15h-1v1h1v-1Zm-7 1h-6v1h6v-1Zm7 0h-6v1h6v-1Z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -left-[32px] -top-[14px] z-[999]" />
          </div>
          <span className="body-small ml-1 w-36 text-black">
            Florence Knoll
          </span>
        </div>
        <div className="-ml-[17px] flex w-full items-center  gap-x-2 overflow-hidden">
          <div className="size-2 rounded-full bg-orange-500" />
          <span className="body-small w-full overflow-hidden whitespace-nowrap text-black">
            Job Offer{/* */} – &nbsp;
            <span className="body-small text-gray-400">
              After careful consideration, we would like to offer you the
              position.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
