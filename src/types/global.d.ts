/* eslint-disable @typescript-eslint/consistent-type-imports */
// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');
declare interface IntlMessages extends Messages {}

// global.d.ts
declare global {
  interface CustomJwtSessionClaims {
    membership: Record<string, string>;
  }
}


export interface TitleProps {
  heading:string;
  spanText: string;
  imagePath: string;
}
export default interface WrapperHeroProps{
  children:ReactNode;
  title:TitleProps;
  description:string;
}


export interface ExtendedDocument extends Document {
  startViewTransition?: any;
}