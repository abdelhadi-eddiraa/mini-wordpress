import { getTranslations } from 'next-intl/server';

import Download from '@/components/protfolio/common/download-hero/download';
import Faq from '@/components/protfolio/common/faq/faq';
import Open from '@/components/protfolio/common/open-source/open';
import PresentationHeading from '@/components/protfolio/common/presentation-hero/presentation';
import WrapperHero from '@/components/protfolio/common/wrapper-hero/wrapper';
import InboxDashbord from '@/components/protfolio/sass/dashbord-inbox/inbox';
import Priview from '@/components/protfolio/sass/priview-section/priview';
import Mail from '@/public/assets/images/9ec6bdfc1870ae942f24644f5115cfe5bf9cfa80-260x258.svg';
import type { TitleProps } from '@/types/global';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <HeroSection />
      <HeadingSection />
      <SeeSection />
      <FaqSection />
      <OpenSource />
      <Downloadsection />
    </>
  );
}

const HeroSection: React.FC = () => {
  const titleProps: TitleProps = {
    heading: 'Private, End-to-End Encrypted',
    spanText: 'Mail',
    imagePath: Mail,
  };
  return (
    <WrapperHero
      title={titleProps}
      description="Skiff Mail protects your inbox by keeping your messages end-to-end encrypted. That means that no one but you has access to your data."
    >
      <InboxDashbord />
    </WrapperHero>
  );
};

const HeadingSection: React.FC = () => {
  return <PresentationHeading />;
};

const SeeSection: React.FC = () => {
  return <Priview />;
};

const FaqSection: React.FC = () => {
  return <Faq />;
};

const OpenSource = () => {
  return <Open />;
};

const Downloadsection = () => {
  return <Download />;
};
