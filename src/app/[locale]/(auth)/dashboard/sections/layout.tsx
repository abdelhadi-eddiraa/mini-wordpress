'use client';

import Link from 'next/link';
import React from 'react';

import Text from '@/builder/Text/text';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import useStore from '@/stores/store';
import useStoreText from '@/stores/textStore';

const SectionLayout = (props: { children: React.ReactNode }) => {
  const { isSelected } = useStoreText();
  //  const [activeTab, setActiveTab] = useState(isSelected ? "password" : "account");

  //  useEffect(() => {
  //   setActiveTab(isSelected ? "password" : "account");
  // }, [isSelected]);

  // Define a function to handle tab change
  // const handleTabChange = (newValue) => {
  //   setActiveTab(newValue);
  // };
  // <Tabs value={activeTab} onChange={handleTabChange}>

  // const sectionsRef = useRef<Array<React.RefObject<HTMLButtonElement>>>(Array.from({ length: 6 }).map(() => React.createRef()));
  const sectionsRef = useStore((state) => state.sectionsRef);
  const setSelectedComponentIndex = useStore(
    (state) => state.setSelectedComponentIndex,
  );
  const selectedComponentIndex = useStore(
    (state) => state.selectedComponentIndex,
  );

  // Use clsx to conditionally combine classes
  const buttonClass = (index: number) =>
    cn(
      'flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group',
      {
        'text-black bg-gray-200 w-full': index === selectedComponentIndex,
      },
    );

  const selectedButton = (index: number) =>
    cn(' ', {
      '': index === selectedComponentIndex,
    });

  const selctedSvg = (index: number) =>
    cn(
      'flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white',
      {
        'text-black': index === selectedComponentIndex,
      },
    );

  const handleClick = (index: number) => {
    if (
      index < 0 ||
      index >= sectionsRef.length ||
      !sectionsRef[index]?.current
    )
      return;
    setSelectedComponentIndex(index); // Log the clicked element
  };

  // Render the section-specific sidebar based on the route
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-100 pt-20 dark:bg-gray-900">
        <div className="relative  h-full overflow-y-auto py-4">
          <Tabs defaultValue="account">
            <div className="px-1">
              <TabsList className="h- grid w-full grid-cols-2 items-center  justify-center rounded-md bg-slate-200 p-1 text-muted-foreground">
                <TabsTrigger
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-xl font-normal  ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  value="account"
                >
                  Sections
                </TabsTrigger>
                <TabsTrigger
                  className="inline-flex items-center  justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-xl font-normal  ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  value="password"
                >
                  Styles
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="account">
              <div className="h-full  overflow-y-auto  px-1 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                  <li className={selectedButton(0)}>
                    <button
                      ref={sectionsRef[0]}
                      onClick={() => handleClick(0)}
                      className={buttonClass(0)}
                    >
                      <svg
                        className={selctedSvg(0)}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 21"
                      >
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                      </svg>
                      <span className="ms-3">Faq</span>
                    </button>
                  </li>
                  <li className={selectedButton(1)}>
                    <button
                      ref={sectionsRef[1]}
                      onClick={() => handleClick(1)}
                      className={buttonClass(1)}
                    >
                      <svg
                        className={selctedSvg(1)}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                      </svg>
                      <span className="ms-3 whitespace-nowrap">Hero</span>
                    </button>
                  </li>
                  <li className={selectedButton(2)}>
                    <button
                      ref={sectionsRef[2]}
                      onClick={() => handleClick(2)}
                      className={buttonClass(2)}
                    >
                      <svg
                        className={selctedSvg(2)}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className=" ms-3 whitespace-nowrap">Footer</span>
                    </button>
                  </li>
                  <li className={selectedButton(3)}>
                    <button
                      ref={sectionsRef[3]}
                      onClick={() => handleClick(3)}
                      className={buttonClass(3)}
                    >
                      <svg
                        className={selctedSvg(3)}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                      </svg>
                      <span className=" ms-3 whitespace-nowrap">Preview</span>
                    </button>
                  </li>
                  {/* <li className="border-b border-gray-500/20  ">
                    <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                      </svg>
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Question
                      </span>
                    </button>
                  </li> */}
                  {/* <li className="border-b border-gray-500/20  ">
                    <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                        />
                      </svg>
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Haeder
                      </span>
                    </button>
                  </li> */}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <Text />
            </TabsContent>
          </Tabs>

          <div className="absolute inset-x-0 bottom-0 px-1 [padding-bottom:4px]">
            <Link
              href="\dashboard"
              className="group  flex w-full items-center rounded-lg bg-gray-200 p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="size-5 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span className="ms-3 flex-1 whitespace-nowrap">Back</span>
            </Link>
          </div>
        </div>
      </aside>
      {props.children}
    </>
  );
};

export default SectionLayout;
