import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

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

interface StoreState {
  isSelected: boolean;
  title: string;
  link: string;
  tag: string;
  alignment: string;
  color: string;
  padding:PaddingInterface;
  elements: Element[];
  subelements: SubElement[];


  // Store the selected element
  selectedElement: Element | null;
}

// we need to store the content of the clicked element in the zustand 
//for put the valuse in the private inputs

interface StoreActions {
  setIsSelected: (argument: boolean) => void;
  setTitle: (title: string) => void;
  setLink: (link: string) => void;
  setTag: (tag: string) => void;
  setAlignment: (alignment: string) => void;
  setColor: (color: string) => void;

  setPadding: (padding: PaddingInterface) => void;


  //for elemnts
  addElement: (element: Element) => void;
  updateElement: (index: number, updatedElement: Partial<Element>) => void;
  removeElement: (index: number) => void;
  //for subelemnts
  addSubElement: (element: SubElement) => void;
  updateSubElement: (index: number, updatedSubElement: Partial<SubElement>) => void;
  removeSubElement: (index: number) => void;

  //for selected elemnt
  setSelectedElement: (element: Element) => void;
}

const useStoreText = create<StoreState & StoreActions>(
  devtools((set) => ({
    isSelected: false,
    setIsSelected: (argument) => set({ isSelected: argument }),
    title: '',
    link: '',
    tag: '',
    alignment: '',
    color: '',
    padding: {
      padding_left: '',
      padding_right: '',
      padding_top: '',
      padding_bottom: '',
    },
    elements: [],
    subelements: [],







    selectedElement: null,
    setSelectedElement: (element) => set({ selectedElement: element }),

    // Element actions
    setTitle: (title) => set((state) => ({ title })),
    setLink: (link) => set((state) => ({ link })),
    setTag: (tag) => set((state) => ({ tag })),
    setAlignment: (alignment) => set((state) => ({ alignment })),
    setColor: (color) => set((state) => ({ color })),

    setPadding: (padding) =>
      set((state) => ({
      ...state,
      
        ...padding,
      
    })),


    addElement: (element) =>
      set((state) => {
        const isDuplicate = state.elements.some((el) => el.id === element.id);
        if (!isDuplicate) {
          return {
            elements: [...state.elements, element],
          };
        }
        return state;
      }),
    updateElement: (index: String, updatedElement) =>
      set((state) => ({
        elements: state.elements.map((el) =>
          el.id === index ? { ...el, ...updatedElement } : el
        ),
      })),

    removeElement: (index) =>
      set((state) => ({
        elements: state.elements.filter((el, i) => i !== index),
      })),

    // Sub-element actions
    addSubElement: (subElement) =>
      set((state) => {
        const isDuplicate = state.subelements.some((el) => el.id === subElement.id);
        if (!isDuplicate) {
          return {
            subelements: [...state.subelements, subElement],
          };
        }
        return state;
      }),
    updateSubElement: (index: String, updatedSubElement) =>
      set((state) => ({
        subelements: state.subelements.map((el, i) =>
          el.id === index ? { ...el, ...updatedSubElement } : el
        ),
      })),
    removeSubElement: (index) =>
      set((state) => ({
        subelements: state.subelements.filter((el, i) => i !== index),
      })),
  }))
);


export default useStoreText;
