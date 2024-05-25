import type { ChangeEvent } from 'react';
import React, { useEffect } from 'react';

import useStoreText from '@/stores/textStore';

interface ContentTextProps {}

const ContentText: React.FC<ContentTextProps> = () => {
  const {
    subelements,
    elements,
    title: storedTitle,
    link: storedLink,
    tag: storedTag,
    setTitle: setStoredTitle,
    setLink: setStoredLink,
    setTag: setStoredTag,
    selectedElement,
    updateElement,
    updateSubElement,
  } = useStoreText();

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [inputTitle, setInputTitle] = React.useState(
    selectedElement?.title || '',
  ); // Initialize inputTitle with selectedElement's title
  const [inputLink, setInputLink] = React.useState(selectedElement?.link || '');
  const [inputTag, setInputTag] = React.useState(selectedElement?.tag || '');

  //  console.log(inputTitle);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setStoredTag(option.toLowerCase());
  };

  /// ////////////////////////////////////////////////////////////////
  // upadte element

  useEffect(() => {
    const updatedElemnet = {
      title: storedTitle,
      link: storedLink,
      tag: storedTag,
    };

    updateElement(selectedElement?.id, updatedElemnet);
  }, [selectedElement, storedTitle, storedLink, storedTag]);
  // console.table(elements)

  useEffect(() => {
    const updatedSubElemnet = {
      title: storedTitle,
      link: storedLink,
      tag: storedTag,
    };

    updateSubElement(selectedElement?.id, updatedSubElemnet);
  }, [selectedElement, storedTitle, storedLink, storedTag]);

  /// ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (selectedElement) {
      setInputTitle(selectedElement.title || ''); // Set inputTitle to the title of the selected element
      setInputLink(selectedElement.link || '');
      setInputTag(selectedElement.tag || '');
    } else {
      setInputTitle(''); // If no selected element, reset inputTitle to an empty string
      setInputLink(''); // If no selected element, reset inputLink to an empty string
      setInputTag(''); // If no selected element, reset inputTag to an empty string
    }
  }, [selectedElement]);

  useEffect(() => {
    // When selectedElement changes, update storedTitle if inputTitle is different
    if (selectedElement) {
      setStoredTitle(inputTitle);
      setStoredLink(inputLink);
      setStoredTag(inputTag);
    }
  }, [selectedElement, inputTitle, setStoredTitle]);
  /// //////////////////////////////////////////////////////////////////////////////////
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTitle(e.target.value);
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStoredLink(e.target.value);
  };

  const handleTagChange = (option: string) => {
    setInputTag(option);
    setIsOpen(false);
    setStoredTag(option.toLowerCase());
  };

  return (
    <div>
      <form className="px-4">
        <div className="mb-6">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Title:
          </label>
          <textarea
            rows={8}
            id="title"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
            value={inputTitle} // Set default empty string if `storedTitle` is not yet set
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="link"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Link:
          </label>
          <input
            type="url"
            id="link"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="https://localhost:3000"
            value={storedLink}
            onChange={handleLinkChange}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="tag"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            HTML Tag:
          </label>
          <button
            id="dropdownDefaultButton"
            className="ite flex w-full items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            type="button"
            onClick={toggleDropdown}
          >
            {selectedElement?.tag || selectedOption || 'Select Tag'}
            <svg
              className={`ms-3 size-2.5${isOpen && 'rotate-180'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isOpen && (
            <div
              className="absolute z-10 w-full divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
              id="dropdown"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleTagChange(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContentText;

// import React, { useEffect, ChangeEvent } from 'react';
// import useStoreText from '@/stores/textStore';

// interface ContentTextProps {}

// const ContentText: React.FC<ContentTextProps> = () => {
//   const {
//     subelements,
//     elements,
//     title: storedTitle,
//     link: storedLink,
//     setTitle: setStoredTitle,
//     setLink: setStoredLink,
//     tag: storedTag,
//     setTag: setStoredTag,
//     selectedElement,
//     updateElement,
//     updateSubElement,
//   } = useStoreText();

//   const [isOpen, setIsOpen] = React.useState(false);
//   const [selectedOption, setSelectedOption] = React.useState("");
//   const [inputTitle, setInputTitle] = React.useState(selectedElement?.title || '');
//   const [inputLink, setInputLink] = React.useState(selectedElement?.link || '');
//   const [inputTag, setInputTag] = React.useState(selectedElement?.tag || '');

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option: string) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     setStoredTag(option.toLowerCase());
//   };

//   useEffect(() => {
//     if (selectedElement) {
//       setInputTitle(selectedElement.title || '');
//       setInputLink(selectedElement.link || '');
//       setInputTag(selectedElement.tag || '');
//     } else {
//       setInputTitle('');
//       setInputLink('');
//       setInputTag('');
//     }
//   }, [selectedElement]);

//   useEffect(() => {
//     if (selectedElement) {
//       setStoredTitle(inputTitle);
//       setStoredLink(inputLink);
//       setStoredTag(inputTag);
//     }
//   }, [selectedElement, inputTitle, inputLink, inputTag, setStoredTitle, setStoredLink, setStoredTag]);

// // //upadte element

//   useEffect(()=>{
//      const updatedElemnet={
//       title:storedTitle,
//       link:storedLink,
//       tag:storedLink
//      }

//      updateElement(selectedElement?.id,updatedElemnet)

//   },[selectedElement,storedTitle,storedLink])
//   // console.table(elements)

// useEffect(()=>{
//   const updatedSubElemnet={
//     title:storedTitle,
//     link:storedLink,
//     tag:storedLink
//    }

//   updateSubElement(selectedElement?.id,updatedSubElemnet)
// },[selectedElement,storedTitle,storedLink])

//   const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setInputTitle(e.target.value);
//   };

//   const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputLink(e.target.value);
//   };

//   const handleTagChange = (option: string) => {
//     setInputTag(option);
//   };

//   return (
//     <div>
//       <form className="px-4">
//         <div className="mb-6">
//           <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Title:
//           </label>
//           <textarea
//             rows={8}
//             id="title"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder=""
//             value={inputTitle}
//             onChange={handleTitleChange}
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Link:
//           </label>
//           <input
//             type="url"
//             id="link"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="https://localhost:3000"
//             value={inputLink}
//             onChange={handleLinkChange}
//           />
//         </div>

//         <div className="relative">
//           <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             HTML Tag:
//           </label>
//           <button
//             id="dropdownDefaultButton"
//             className="flex items-center justify-center ite bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             type="button"
//             onClick={toggleDropdown}
//           >
//             {selectedOption || inputTag || "Select Tag"}
//             <svg
//               className={`w-2.5 h-2.5 ms-3 transform ${isOpen && "rotate-180"}`}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="m1 1 4 4 4-4"
//               />
//             </svg>
//           </button>
//           {isOpen && (
//             <div className="absolute w-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="dropdown">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {["H1", "H2", "H3", "H4", "H5", "H6"].map((option) => (
//                   <li key={option}>
//                     <button
//                       type="button"
//                       className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       onClick={() => handleTagChange(option)}
//                     >
//                       {option}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContentText;
