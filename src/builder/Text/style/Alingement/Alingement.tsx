'use client';

import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-react';
import React, { useEffect } from 'react';

import useStoreText from '@/stores/textStore';

const Alingement = () => {
  const {
    alignment: storedAlignment,
    setAlignment: setStoredAlignment,
    selectedElement,
    updateElement,
  } = useStoreText();

  const [inputAlignement, setInputAlignement] = React.useState(
    selectedElement?.alignment || '',
  );

  const handleAlignmentChange = (alignment: string) => {
    setInputAlignement(alignment); // Pass the index and the updated styleText object
  };
  console.log(inputAlignement);

  useEffect(() => {
    const updateElementAlignment = {
      alignment: storedAlignment,
    };

    updateElement(selectedElement.id, updateElementAlignment);
  }, [selectedElement, storedAlignment]);

  /// ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (selectedElement) {
      setInputAlignement(selectedElement.alignment || ''); // Set inputTitle to the title of the selected element
    } else {
      setInputAlignement(''); // If no selected element, reset inputTitle to an empty string
    }
  }, [selectedElement]);

  useEffect(() => {
    // When selectedElement changes, update storedTitle if inputTitle is different
    if (selectedElement) {
      setStoredAlignment(inputAlignement);
    }
  }, [selectedElement, inputAlignement, setStoredAlignment]);

  return (
    <div className="mb-6">
      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        Alingement:
      </h3>
      <ul className="grid w-full grid-cols-4 ">
        <li className="w-full">
          <input
            type="radio"
            id="alignjustify"
            name="default-radio"
            defaultValue=""
            className="peer hidden "
            checked={inputAlignement === 'text-justify'} // Use inputAlignment instead of styleText
            onChange={() => handleAlignmentChange('text-justify')}
          />
          <label
            htmlFor="alignjustify"
            className=" inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"
          >
            <div className="flex w-full items-center justify-center">
              <AlignJustify className="my-2 size-7" />
            </div>
          </label>
        </li>
        <li className="w-full">
          <input
            type="radio"
            id="aligncenter"
            name="default-radio"
            defaultValue=""
            className="peer hidden"
            checked={inputAlignement === 'text-center'}
            onChange={() => handleAlignmentChange('text-center')}
          />
          <label
            htmlFor="aligncenter"
            className="  inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"
          >
            <div className="flex w-full items-center justify-center">
              <AlignCenter className="my-2  size-7" />
            </div>
          </label>
        </li>
        <li className="w-full">
          <input
            type="radio"
            id="alignleft"
            name="default-radio"
            defaultValue=""
            className="peer hidden"
            checked={inputAlignement === 'text-left'}
            onChange={() => handleAlignmentChange('text-left')}
          />
          <label
            htmlFor="alignleft"
            className="  inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"
          >
            <div className="flex w-full items-center justify-center">
              <AlignLeft className="my-2 size-7" />
            </div>
          </label>
        </li>
        <li className="w-full">
          <input
            type="radio"
            id="alignright"
            name="default-radio"
            defaultValue=""
            className="peer hidden"
            checked={inputAlignement === 'text-right'}
            onChange={() => handleAlignmentChange('text-right')}
          />
          <label
            htmlFor="alignright"
            className="  inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"
          >
            <div className="flex w-full items-center justify-center">
              <AlignRight className="my-2 size-7" />
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Alingement;
