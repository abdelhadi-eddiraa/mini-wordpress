import React, { useEffect } from 'react';

import useStoreText from '@/stores/textStore';

const TextColor = () => {
  const {
    color: storedColor,
    setColor: setStoredColor,
    selectedElement,
    updateElement,
  } = useStoreText();

  const [inputColor, setInputColor] = React.useState(
    selectedElement?.color || '',
  );

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputColor(event.target.value);
  };

  useEffect(() => {
    const updateElementColor = {
      color: storedColor,
    };

    updateElement(selectedElement.id, updateElementColor);
  }, [selectedElement, storedColor]);

  /// ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (selectedElement) {
      setInputColor(selectedElement.color || ''); // Set inputTitle to the title of the selected element
    } else {
      setInputColor(''); // If no selected element, reset inputTitle to an empty string
    }
  }, [selectedElement]);

  useEffect(() => {
    // When selectedElement changes, update storedTitle if inputTitle is different
    if (selectedElement) {
      setStoredColor(inputColor);
    }
  }, [selectedElement, inputColor, setStoredColor]);
  /// ////////////////////////////////////////////////////////////////

  return (
    <div className="mb-6 flex justify-between">
      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        Text Color:
      </h3>
      <input
        type="color"
        value={inputColor}
        onChange={handleColorChange}
        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none  focus:ring focus:ring-blue-500"
        placeholder="Enter your text here..."
      />
    </div>
  );
};

export default TextColor;
