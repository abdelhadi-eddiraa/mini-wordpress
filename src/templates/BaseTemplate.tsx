import { useTranslations } from 'next-intl';

// import { AppConfig } from '@/utils/AppConfig';
import Footer from '@/components/protfolio/tamplete/footer/footer';
import Header from '@/components/protfolio/tamplete/header/header';
// import Link from 'next/link';
import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  // const t = useTranslations('BaseTemplate');
  const t = useTranslations('RootLayout');

  return (
    <div className="w-full  text-gray-700 antialiased">
      <div className="">
        {/* <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
              {AppConfig.name}
            </h1>
            <h2 className="text-xl">{t('description')}</h2>
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header> */}

        <Header  LeftNave={props.leftNav} RightNave={props.rightNav}
        
     
        />

        <main>{props.children}</main>


           <Footer/>
        {/* <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
          {` ${t('made_with')} `}
          <a
            href="https://creativedesignsguru.com"
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          >
            CreativeDesignsGuru
          </a> */}
          .
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        {/* </footer> */}
      </div>
    </div>
  );
};

export { BaseTemplate };
