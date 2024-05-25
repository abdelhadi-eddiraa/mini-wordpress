import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li className="list-none">
            <Link href="/" className="border-none text-white hover:font-bold">
              {t('home_link')}
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/about/"
              className="border-none text-white hover:font-bold"
            >
              {t('about_link')}
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/guestbook/"
              className="border-none text-white hover:font-bold"
            >
              {t('guestbook_link')}
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/portfolio/"
              className="border-none text-white hover:font-bold"
            >
              {t('portfolio_link')}
            </Link>
          </li>
          <li className="list-none">
            <a
              className="border-none text-white hover:font-bold"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              GitHub
            </a>
          </li>
        </>
      }
      rightNav={
        <>
          <li className="list-none rounded-md bg-gray-700 px-2 py-1">
            <Link
              href="/sign-in/"
              className="border-none font-medium text-white"
            >
              {t('sign_in_link')}
            </Link>
          </li>

          <li className="list-none rounded-md bg-gray-700 px-2 py-1">
            <Link
              href="/sign-up/"
              className="border-none font-medium text-white "
            >
              {t('sign_up_link')}
            </Link>
          </li>

          <li className="list-none rounded-md bg-gray-700 px-2 py-1">
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
