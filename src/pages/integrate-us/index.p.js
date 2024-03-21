import AOS from 'aos';
import { useEffect } from 'react';

import { TwitterMeta } from 'components/Meta/TwitterMeta';
import { FacebookMeta } from 'components/Meta/FacebookMeta';

import { DocHead } from 'layout/Head';
import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';

import { WidgetSection } from 'layout/WidgetSection/v2';
import { IntegrateUsBanner } from '../../layout/IntegrateUsBanner/IntegrateUsBanner';
import { IntegrateUsReasons } from '../../layout/IntegrateUsReasons/IntegrateUsReasons';
import { ApiSection } from '../../layout/ApiSection/ApiSection';
import { BestChoicesOfCrypto } from '../../layout/BestChoicesOfCrypto/BestChoicesOfCrypto';
import { CustomersFeedback } from '../../layout/CustomersFeedback/CustomersFeedback';
import { ServicePrivilegesSection } from '../../layout/ServicePrivilegesSection/ServicePrivilegesSection';
import { TrustedByTheBestSection } from '../../layout/TrustedByTheBestSection/TrustedByTheBestSection';
import { CheckoutSection } from '../../layout/CheckoutSection/CheckoutSection';
import { BannerSection } from '../../layout/BannerSection/BannerSection';

const isIntegrateUsPage = true;

const metaData = {
  url: 'https://guardarian.com/integrate-us',
  title: 'Integrate Crypto On-Ramp & Off-Ramp | Guardarian',
  description:
    'Guardarian offers a simple and powerful on and off ramp integration. Use our customisable widget or a developer-friendly API solution. 400+ Cryptos supported.',
  image: 'https://guardarian.com/services/meta-interate-us.png',
};

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <DocHead title='Business Page' linkCanonical={metaData.url}>
        <title> {metaData.title} </title>
        <meta name='title' content={metaData.title} key='title' />
        <meta name='description' content={metaData.description} key='description' />
        <link
          href='https://fonts.googleapis.com/css?family=Poppins:100,200,300,regu,500,600,700,800,900'
          rel='stylesheet'
        />
      </DocHead>
      <FacebookMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/meta-interate-us.png'}
      />
      <TwitterMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/meta-interate-us.png'}
      />

      <Header isIntegrateUsPage={isIntegrateUsPage} theme='none' />
      <IntegrateUsBanner />
      <IntegrateUsReasons />
      <BestChoicesOfCrypto />
      <WidgetSection />
      <ApiSection />
      <ServicePrivilegesSection />
      <TrustedByTheBestSection />
      <CheckoutSection />
      <CustomersFeedback />
      <BannerSection />
      <Footer isIntegrateUsPage={isIntegrateUsPage} />
    </>
  );
}
