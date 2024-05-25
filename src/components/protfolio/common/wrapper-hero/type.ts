import type { ReactNode } from 'react';

export interface TitleProps {
  heading: string;
  spanText: string;
  imagePath: string;
}
export default interface WrapperHeroProps {
  children: ReactNode;
  title: TitleProps;
  description: string;
}
