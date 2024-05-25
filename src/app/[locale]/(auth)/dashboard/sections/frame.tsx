'use client';

import Editor from '@monaco-editor/react';
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from 'framer-motion';
import React, { type ReactElement, useState } from 'react';
import { useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import useMeasure from 'react-use-measure';

import Download from '@/components/protfolio/common/download-hero/download';
import Faq from '@/components/protfolio/common/faq/faq';
import Open from '@/components/protfolio/common/open-source/open';
import PresentationHeading from '@/components/protfolio/common/presentation-hero/presentation';
import useStore from '@/stores/store';

interface FrameProps {
  title: string | undefined;
  width: number | undefined;
  height: number;
  filterResponsiveViewer: (width: number) => void;
}

const Frame: React.FC<FrameProps> = ({
  title,
  width,
  filterResponsiveViewer,
}) => {
  const selectedComponentIndex = useStore(
    (state) => state.selectedComponentIndex,
  );

  // console.log(sectionsRef)

  const desktopButtonRef = useRef(null);
  const tabletButtonRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const labtopButtonRef = useRef(null);

  const [openEditor, setOpeneditor] = useState<Boolean>(false);

  const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
 if (start > end) {
   return false;
 }
 let mid = Math.floor((start + end) / 2);
 if (arr[mid] === target) {
   return mid;
 }
 if (arr[mid] < target) {
   return binarySearchHelper(arr, target, mid + 1, end);
 }
 if (arr[mid] > target) {
   return binarySearchHelper(arr, target, start, mid - 1);
 }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));

`;

  return (
    <div className="flex w-full flex-col items-center">
      <h3>{title}</h3>
      <div className="w-full" style={{ width }}>
        {/* <div className="flex items-center justify-between border-2 border-b-0 rounded-tr-md rounded-tl-md border-gray-300  border-solid">
         <div className="px-3 py-[5px] flex gap-2">
            <button
              className="cursor-pointer"
              ref={desktopButtonRef}
              onClick={() => filterResponsiveViewer(480)}
            >
              <IoIosPhonePortrait height={12} width={12} />
            </button>
            <button
              className="cursor-pointer"
              ref={tabletButtonRef}
              onClick={() => filterResponsiveViewer(720)}
            >
              <FaTabletAlt height={12} width={12} className="cursor-pointer" />
            </button>
            <button
              className="cursor-pointer"
              ref={mobileButtonRef}
              onClick={() => filterResponsiveViewer(960)}
            >
              <IoLaptopOutline height={12} width={12} />
            </button>

            <button
              className="cursor-pointer"
              ref={labtopButtonRef}
              onClick={() => filterResponsiveViewer(1024)}
            >
              <SlScreenDesktop height={12} width={12} />
            </button>
          </div> 
          
        </div> */}

        {/** test */}
        <div className="w-full rounded-t-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div className="grid grid-cols-3">
            <div className="col-span-2 sm:col-span-1">
              <a
                href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
                rel="noopener nofollow noreferrer"
                className="mr-3 inline-flex h-9 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
              >
                <svg
                  className="mr-2 size-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>{' '}
                Edit on GitHub
              </a>
            </div>
            <div className="col-span-1 hidden items-center justify-center space-x-2 sm:flex">
              <button
                ref={labtopButtonRef}
                onClick={() => filterResponsiveViewer(1024)}
                data-tooltip-target="default-button-example-full-screen-tooltip"
                className="toggle-full-view flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
              >
                <span className="sr-only">Toggle full view</span>
                <svg
                  className="size-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14v4m-4 1h8M1 10h18M2 1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                  />
                </svg>
              </button>
              <div
                id="default-button-example-full-screen-tooltip"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
                style={{
                  position: 'absolute',
                  inset: 'auto auto 0px 0px',
                  margin: 0,
                  transform: 'translate(763px, 180px)',
                }}
              >
                Toggle full screen
                <div
                  className="tooltip-arrow"
                  data-popper-arrow=""
                  style={{
                    position: 'absolute',
                    left: 0,
                    transform: 'translate(68px, 0px)',
                  }}
                />
              </div>
              <button
                ref={mobileButtonRef}
                onClick={() => filterResponsiveViewer(960)}
                data-tooltip-target="default-button-example-tablet-tooltip"
                className="toggle-tablet-view flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
              >
                <span className="sr-only">Toggle tablet view</span>
                <svg
                  className="size-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7.5 16.5h3M2 1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                  />
                </svg>
              </button>
              <div
                id="default-button-example-tablet-tooltip"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
                style={{
                  position: 'absolute',
                  inset: 'auto auto 0px 0px',
                  margin: 0,
                  transform: 'translate(805px, 180px)',
                }}
              >
                Toggle tablet view
                <div
                  className="tooltip-arrow"
                  data-popper-arrow=""
                  style={{
                    position: 'absolute',
                    left: 0,
                    transform: 'translate(70px, 0px)',
                  }}
                />
              </div>
              <button
                ref={desktopButtonRef}
                onClick={() => filterResponsiveViewer(480)}
                data-tooltip-target="default-button-example-mobile-tooltip"
                className="toggle-mobile-view flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
              >
                <span className="sr-only">Toggle mobile view</span>
                <svg
                  className="size-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                  />
                </svg>
              </button>
              <div
                id="default-button-example-mobile-tooltip"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
                style={{
                  position: 'absolute',
                  inset: 'auto auto 0px 0px',
                  margin: 0,
                  transform: 'translate(846px, 180px)',
                }}
              >
                Toggle mobile view
                <div
                  className="tooltip-arrow"
                  data-popper-arrow=""
                  style={{
                    position: 'absolute',
                    left: 0,
                    transform: 'translate(73px, 0px)',
                  }}
                />
              </div>
            </div>
            <div className="col-span-1 flex justify-end">
              <button
                data-tooltip-target="default-button-example-toggle-rtl"
                data-toggle-direction="ltr"
                type="button"
                className="toggle-rtl mr-3 flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
              >
                RTL
              </button>
              <div
                id="default-button-example-toggle-rtl"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
                style={{
                  position: 'absolute',
                  inset: 'auto auto 0px 0px',
                  margin: 0,
                  transform: 'translate(1141px, 180px)',
                }}
              >
                <span className="tooltip-text">Toggle RTL mode</span>
                <div
                  className="tooltip-arrow"
                  data-popper-arrow=""
                  style={{
                    position: 'absolute',
                    left: 0,
                    transform: 'translate(67px, 0px)',
                  }}
                />
              </div>
              <button
                data-tooltip-target="default-button-example-toggle-dark-mode-tooltip"
                type="button"
                onClick={() => setOpeneditor(true)}
                data-toggle-dark="light"
                className="toggle-dark-state-example flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-maximize"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                  <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                </svg>
                <span className="sr-only">Toggle editor text mode</span>
              </button>
              <div
                id="default-button-example-toggle-dark-mode-tooltip"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
                style={{
                  position: 'absolute',
                  inset: 'auto auto 0px 0px',
                  margin: 0,
                  transform: 'translate(1187px, 180px)',
                }}
              >
                <span className="tooltip-text">Toggle editor mode</span>
                <div
                  className="tooltip-arrow"
                  data-popper-arrow=""
                  style={{
                    position: 'absolute',
                    left: 0,
                    transform: 'translate(69px, 0px)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <DragCloseDrawer OpenEditor={openEditor} setOpenEditor={setOpeneditor}>
          {(() => {
            switch (selectedComponentIndex) {
              case 0:
                return (
                  <CodeEditorWindow
                    defaultCode={ReactDOMServer.renderToString(<Faq />)}
                  />
                );
              case 1:
                return (
                  <CodeEditorWindow
                    defaultCode={ReactDOMServer.renderToString(<Download />)}
                  />
                );
              case 2:
                return (
                  <CodeEditorWindow
                    defaultCode={ReactDOMServer.renderToString(<Open />)}
                  />
                );
              case 3:
                return (
                  <CodeEditorWindow
                    defaultCode={ReactDOMServer.renderToString(
                      <PresentationHeading />,
                    )}
                  />
                );
              default:
                return <CodeEditorWindow defaultCode={javascriptDefault} />;
            }
          })()}
        </DragCloseDrawer>

        {/** * test */}

        <div
          id="wrapper"
          className="min-h-auto flex flex-col overflow-y-auto border border-gray-200 bg-gray-50"
        >
          {selectedComponentIndex === 0 ? (
            <Faq />
          ) : selectedComponentIndex === 1 ? (
            <Download />
          ) : selectedComponentIndex === 2 ? (
            <Open />
          ) : selectedComponentIndex === 3 ? (
            <PresentationHeading />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Frame;

interface DragCloseDrawerProps {
  children: ReactElement;
  OpenEditor: Boolean;
  setOpenEditor: (isOpen: boolean) => void;
}

const DragCloseDrawer: React.FC<DragCloseDrawerProps> = ({
  OpenEditor,
  setOpenEditor,
  children,
}) => {
  const [scope, animate] = useAnimate();
  const controls = useDragControls();
  const y = useMotionValue(0);

  const [drawerRef, { height }] = useMeasure();

  const handleCloseDrawer = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });
    const yStart = typeof y.get() === 'number' ? y.get() : 0;

    await animate('#drawer', {
      y: [yStart, height],
    });
    setOpenEditor(false);
  };
  return (
    <>
      {OpenEditor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleCloseDrawer}
          ref={scope}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            ref={drawerRef}
            id="drawer"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            style={{ y }}
            transition={{
              ease: 'easeInOut',
            }}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleCloseDrawer();
              }
            }}
            dragControls={controls}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
            drag="y"
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
          >
            <div className="absolute inset-x-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              />
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

// CodeEditorWindow.js
type OnChange = (action: string, data: string) => void;
type CodeEditorWindowProps = {
  defaultCode: String;
};
const CodeEditorWindow = ({ defaultCode }: CodeEditorWindowProps) => {
  const [code, setCode] = useState(defaultCode);

  // const [customInput, setCustomInput] = useState("");
  // const [outputDetails, setOutputDetails] = useState(null);
  // const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState('vs-dark');
  const [language, setLanguage] = useState({
    id: 1,
    name: 'JavaScript (Node.js 12.14.0)',
    label: 'JavaScript (Node.js 12.14.0)',
    value: 'javascript',
  });

  const onChange: OnChange = (action, data) => {
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('case not handled!', action, data);
      }
    }
  };

  return (
    <div
      id="editor"
      className="overlay shadow-4xl size-full overflow-hidden rounded-md"
    >
      <div className="flex size-full flex-col items-end justify-start">
        <CodeEditor
          code={code}
          onChange={onChange}
          language={language?.value}
          theme={theme}
        />
      </div>
    </div>
  );
};

interface CodeEditorProps {
  onChange: (action: string, data: string) => void;
  language: string;
  code: string;
  theme: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  onChange,
  language,
  code,
  theme,
}) => {
  const [value, setValue] = useState<string>(code || '');

  const handleEditorChange = (value: string) => {
    setValue(value);

    onChange('code', value);
  };

  return (
    <div className="overlay shadow-4xl size-full overflow-hidden rounded-md">
      <Editor
        height="85vh"
        width="100%"
        language={language || 'javascript'}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};
