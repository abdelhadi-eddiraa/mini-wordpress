'use client';

import React, { useEffect, useState } from 'react';

import useStoreText from '@/stores/textStore';

interface PaddingInterface {
  padding_left: string;
  padding_right: string;
  padding_top: string;
  padding_bottom: string;
}

interface Element {
  id: string;
  tag: string;
  title: string;
  link: string;
  alignment: string;
  color: string;
  padding: PaddingInterface;
}
interface SubElement {
  id: string;
  parentId: string;
  tag: string;
  title: string;
  link: string;
}

const Faq = () => {
  const {
    elements,
    addElement,
    subelements,
    addSubElement,
    updateElement,
    updateSubElement,
    title,
    link,
    tag,
    alignment,
  } = useStoreText();

  useEffect(() => {
    // Add elements when the component mounts
    addElement({
      id: `element_${0}`,
      tag: 'span',
      title: '10 GB free storage',
      link: '',
      alignment: '',
      color: '',
      padding: {
        padding_left: '',
        padding_right: '',
        padding_top: '',
        padding_bottom: '',
      },
    });

    addElement({
      id: `element_${1}`,
      tag: 'span',
      title: '1-click migration',
      link: '',
      alignment: '',
      color: '',
      padding: {
        padding_left: '',
        padding_right: '',
        padding_top: '',
        padding_bottom: '',
      },
    });

    addElement({
      id: `element_${2}`,
      tag: 'span',
      title: '1-click migration',
      link: '',
      alignment: '',
      color: '',
      padding: {
        padding_left: '',
        padding_right: '',
        padding_top: '',
        padding_bottom: '',
      },
    });

    addElement({
      id: `element_${3}`,
      tag: 'span',
      title: '1-click migration',
      link: '',
      alignment: '',
      color: '',
      padding: {
        padding_left: '',
        padding_right: '',
        padding_top: '',
        padding_bottom: '',
      },
    });

    addElement({
      id: `element_${4}`,
      tag: 'span',
      title: ' 1-click migration',
      link: '',
      alignment: '',
      color: '',
      padding: {
        padding_left: '',
        padding_right: '',
        padding_top: '',
        padding_bottom: '',
      },
    });

    addElement({
      id: `element_${5}`,
      tag: 'span',
      title: '1-click migration',
      link: '',
      alignment: '',
      color: '',
      padding: {
        padding_left: '',
        padding_right: '',
        padding_top: '',
        padding_bottom: '',
      },
    });

    // Add other elements similarly...

    // Add elements when the component mounts
    addSubElement({
      id: `subelement_${0}`,
      parentId: `element_${0}`,
      tag: 'span',
      title:
        'Switch comfortably to Skiff with 10 GB for free - more than any other end-to-end encrypted email provider.',
      link: '',
    });

    addSubElement({
      id: `subelement_${1}`,
      parentId: `element_${1}`,
      tag: 'span',
      title:
        'Migrate in 1-click from Gmail, Outlook, ProtonMail, and more. Making the switch is quick, easy, and completely private.',
      link: '',
    });

    addSubElement({
      id: `subelement_${2}`,
      parentId: `element_${2}`,
      tag: 'span',
      title:
        'Keep your inbox organized with folders, labels, and multiple aliases in every account.',
      link: '',
    });

    addSubElement({
      id: `subelement_${3}`,
      parentId: `element_${3}`,
      tag: 'span',
      title: 'Customize your signature or add an auto-reply to any inbox.',
      link: '',
    });

    addSubElement({
      id: `subelement_${4}`,
      parentId: `element_${4}`,
      tag: 'span',
      title:
        'Share workspaces and custom domains with your entire team, and stay organized with advanced admin controls.',
      link: '',
    });

    addSubElement({
      id: `subelement_${5}`,
      parentId: `element_${5}`,
      tag: 'span',
      title:
        'Schedule emails for future times or undo sent mail when you need to make a change - all for free.',
      link: '',
    });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const [selectedHeading, setSelectedHeading] = useState<HTMLElement | null>();

  useEffect(() => {
    const handleElementClick = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      // console.log(clickedElement.tagName);

      // Check if the clicked element has the tag "conten"
      if (
        clickedElement.tagName.toLowerCase() === 'span' ||
        clickedElement.tagName.toLowerCase() === 'h1' ||
        clickedElement.tagName.toLowerCase() === 'h2' ||
        clickedElement.tagName.toLowerCase() === 'h3' ||
        clickedElement.tagName.toLowerCase() === 'h4' ||
        clickedElement.tagName.toLowerCase() === 'h5' ||
        clickedElement.tagName.toLowerCase() === 'h6'
      ) {
        setSelectedHeading(clickedElement);
        setIsSelected(true);
      }
      //  else {
      //   setSelectedHeading(null);
      //   setIsSelected(false);
      // }
    };

    // Attach click event listener to the document
    document.addEventListener('click', handleElementClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleElementClick);
    };
  }, []);

  const { isSelected, setIsSelected, setSelectedElement, selectedElement } =
    useStoreText();

  const handleStoreElementContent = (element: Element) => {
    setSelectedElement(element);
  };

  const handleStoreSubElementContent = (subelement: SubElement) => {
    setSelectedElement(subelement);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F5F4] py-10">
      <div className="w-responsive-narrow flex flex-col gap-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 md:grid-cols-3">
          {elements.map((element, index) => (
            <div className="col-span-1" key={index}>
              <div className="flex flex-col gap-1">
                {/** elements */}
                {element.tag ? ( // Check if tag is defined and not empty
                  <element.tag
                    href={element.link}
                    key={`${element.id}`}
                    className={`body-medium  md:body-large  !font-medium ${element.alignment}  `}
                    style={{
                      color: element.color,
                      padding: `${element.padding.padding_top} ${element.padding.padding_right} ${element.padding.padding_bottom} ${element.padding.padding_left} px`,
                    }}
                    onClick={() => handleStoreElementContent(element)}
                  >
                    {element.title}
                  </element.tag>
                ) : (
                  <div>Error: Invalid tag name for element</div>
                )}
                {/** elements */}
                {/** subelements */}
                {subelements
                  .filter((subelement) => subelement.parentId === element.id)
                  .map((subelement, subIndex) => (
                    <React.Fragment key={`${element.id}-${subIndex}`}>
                      {subelement.tag ? ( // Check if tag is defined and not empty
                        <subelement.tag
                          href={subelement.link}
                          key={`${element.id}-${subIndex}`}
                          className="body-small md:body-medium text-gray-400"
                          onClick={() =>
                            handleStoreSubElementContent(subelement)
                          }
                        >
                          {subelement.title}
                        </subelement.tag>
                      ) : (
                        <div>Error: Invalid tag name for subelement</div>
                      )}
                    </React.Fragment>
                  ))}
                {/** subelements */}
              </div>
            </div>
          ))}

          {selectedHeading && (
            <>
              <div
                className="absolute border-2 border-dashed border-green-500"
                style={{
                  top: selectedHeading.offsetTop,
                  left: selectedHeading.offsetLeft,
                  width: selectedHeading.offsetWidth + 40,
                  height: selectedHeading.offsetHeight,
                }}
              />
              <span
                className="absolute size-fit bg-green-500 px-2  text-white"
                style={{
                  top: selectedHeading.offsetTop - 24,
                  left: selectedHeading.offsetLeft,
                  width: 'auto',
                  height: 'auto',
                }}
              >
                {selectedHeading.tagName.toLocaleLowerCase()}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
