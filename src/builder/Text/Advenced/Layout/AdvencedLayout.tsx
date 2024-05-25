import React, { useEffect } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useStoreText from '@/stores/textStore';

const AdvencedLayout = () => {
  return (
    <>
      <Margin />
      <Padding />
      <Width />
    </>
  );
};

export default AdvencedLayout;

const Margin = () => {
  return (
    <div className="mb-6 w-full">
      <h3 className=" text-lg font-medium text-gray-900 dark:text-white">
        margin:
      </h3>
      <ul className="grid w-full grid-cols-5 ">
        <li className="w-full border border-gray-400">
          <input
            id="alignjustify"
            className="size-full "
            type="text"
            defaultValue=""
            name="default-radio"
          />
        </li>
        <li className="w-full  border border-gray-400">
          <input
            id="aligncenter"
            className="size-full"
            type="text"
            defaultValue=""
            name="default-radio"
          />
        </li>
        <li className="w-full border border-gray-400">
          <input
            id="alignleft"
            className="size-full"
            type="text"
            defaultValue=""
            name="default-radio"
          />
        </li>
        <li className="w-full  border border-gray-400">
          <input
            id="alignright"
            className="size-full"
            type="text"
            defaultValue=""
            name="default-radio"
          />
        </li>
        <li className="w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="submit"
                className="rounded-r-lg  bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none  focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                unit
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>unit</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span className="font-sans">px</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="font-serif">rem</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="font-mono">em</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="font-mono">%</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </div>
  );
};

const Padding = () => {
  const {
    padding: storedPadding,
    setPadding: setStoredPadding,
    selectedElement,
    updateElement,
  } = useStoreText();

  const [inputPadding, setInputPadding] = React.useState({
    padding_top: selectedElement?.padding.padding_top || '',
    padding_right: selectedElement?.padding.padding_right || '',
    padding_bottom: selectedElement?.padding.padding_bottom || '',
    padding_left: selectedElement?.padding.padding_left || '',
  });

  const handlePaddingChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    const { value } = e.target;

    setInputPadding((values) => ({
      ...values,
      [key]: value,
    }));
  };

  useEffect(() => {
    const updateElementPadding = {
      padding: storedPadding,
    };

    console.log(updateElementPadding);

    updateElement(selectedElement.id, updateElementPadding);
  }, [selectedElement, storedPadding]);

  /// ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (selectedElement) {
      setInputPadding({
        paddin_top: selectedElement.padding.padding_top || '',
        padding_right: selectedElement.padding.padding_right || '',
        padding_bottom: selectedElement.padding.padding_bottom || '',
        padding_left: selectedElement.padding.padding_left || '',
      }); // Set inputTitle to the title of the selected element
    } else {
      setInputPadding({
        padding_top: '',
        padding_right: '',
        padding_bottom: '',
        padding_left: '',
      }); // If no selected element, reset inputTitle to an empty string
    }
  }, [selectedElement]);

  useEffect(() => {
    // When selectedElement changes, update storedTitle if inputTitle is different
    if (selectedElement) {
      setStoredPadding(inputPadding);
    }
  }, [selectedElement, inputPadding, setStoredPadding]);

  // useEffect(() => {
  //   // When selectedElement changes, update storedPadding if inputPadding is different
  //   if (selectedElement) {
  //     const newPadding = {
  //       padding_top: inputPadding["padding-top"],
  //       padding_right: inputPadding["padding-right"],
  //       padding_bottom: inputPadding["padding-bottom"],
  //       padding_left: inputPadding["padding-left"],
  //     };
  //     setStoredPadding(newPadding);
  //   }
  // }, [selectedElement, inputPadding, setStoredPadding]);

  return (
    <div className="mb-6 w-full">
      <h3 className=" text-lg font-medium text-gray-900 dark:text-white">
        padding:
      </h3>
      <ul className="grid w-full grid-cols-5 ">
        <li className="w-full border border-gray-400">
          <input
            id="padding_top"
            className="size-full "
            type="text"
            defaultValue=""
            name="default-radio"
            onChange={handlePaddingChange}
            value={inputPadding.padding_top}
          />
        </li>
        <li className="w-full  border border-gray-400">
          <input
            id="padding_right"
            className="size-full"
            type="text"
            defaultValue=""
            name="default-radio"
            onChange={handlePaddingChange}
            value={inputPadding.padding_right}
          />
        </li>
        <li className="w-full border border-gray-400">
          <input
            id="padding_bottom"
            className="size-full"
            type="text"
            defaultValue=""
            name="default-radio"
            onChange={handlePaddingChange}
            value={inputPadding.padding_bottom}
          />
        </li>
        <li className="w-full  border border-gray-400">
          <input
            id="padding_left"
            className="size-full"
            type="text"
            defaultValue=""
            name="default-radio"
            onChange={handlePaddingChange}
            value={inputPadding.padding_left}
          />
        </li>
        <li className="w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="submit"
                className="rounded-r-lg  bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none  focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                unit
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>unit</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span className="font-sans">px</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="font-serif">rem</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="font-mono">em</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="font-mono">%</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </div>
  );
};

const Width = () => {
  return (
    <div className="mb-6 w-full">
      <span className="block  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        Width:
      </span>
      <div className="relative ">
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="size"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              unit
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>unit</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span className="font-sans">px</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="font-serif">rem</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="font-mono">em</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="font-mono">%</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
