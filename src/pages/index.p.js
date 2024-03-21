import AOS from 'aos';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useBreakPoint } from 'hooks/useResponsive';

import { Popup } from 'components/Popup';
import { TwitterMeta } from 'components/Meta/TwitterMeta';
import { FacebookMeta } from 'components/Meta/FacebookMeta';

import css from 'layout/ContactForm/ContactForm.module.scss';

import { DocHead } from 'layout/Head';
import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import { ContactForm } from 'layout/ContactForm';
import { FormSection } from 'layout/FormSection';
import { FeaturesSection } from 'layout/FeaturesSection';
import { TrustpilotSection } from 'layout/TrustpilotSection';
import { GuardarianServices } from 'layout/GuardarianServices';
import { HowToBuyBTCSection } from 'layout/HowToBuyBTCSection/HowToBuyBTCSection';
import { OurPartnerFamilyPartnerSection } from 'layout/OurPartnerFamilyPartnerSection';
import { OurFamilyPartnerCarusel } from 'layout/OurFamilyPartnerCarusel/OurFamilyPartnerCarusel';
import { BestChoiceSection } from '../layout/BestChoice/BestChoice';

const metaData = {
  url: 'https://guardarian.com/',
  title: 'Buy, Sell, and Swap crypto on Guardarian. Trusted fiat onramp | Best offers',
  description:
    'Fully licensed & regulated crypto to fiat gateway. Purchase 400+ cryptocurrencies, and altcoins using a bank transfer or a credit card.',
  image: 'https://guardarian.com/services/sell-crypto-mobile.png',
};

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handlePopupClose = () => setShowForm(false);
  const handlePopupOpen = () => setShowForm(true);
  const breakpoint = useBreakPoint();

  const router = useRouter();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    if (router.query.ref_link) {
      const { ref_link, ...newQuery } = { ...router.query };

      localStorage.setItem(
        'ref_link',
        JSON.stringify({
          value: router.query.ref_link,
          expiry: new Date().getTime() + 1000 * 60 * 60 * 24 * 30,
        }),
      );
      router.push({
        pathname: '/',
        query: newQuery,
      });
    }
  }, [router]);

  return (
    <>
      <DocHead title='Business Page' linkCanonical={metaData.url}>
        <title> {metaData.title} </title>
        <meta name='title' content={metaData.title} key='title' />
        <meta name='description' content={metaData.description} key='description' />
      </DocHead>
      <FacebookMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
      />
      <TwitterMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
      />

      <Popup containerClass={css.popup} closeButtonClass={css.closePopup} visible={showForm} onClose={handlePopupClose}>
        <ContactForm onSuccessSubmit={handlePopupClose} />
      </Popup>

      <Header theme='none'>
        <FormSection onAskQuestion={handlePopupOpen} />
      </Header>
      <GuardarianServices />
      <HowToBuyBTCSection />
      <BestChoiceSection />
      <FeaturesSection />
      <TrustpilotSection />
      {breakpoint === 'mobile' ? <OurFamilyPartnerCarusel /> : <OurPartnerFamilyPartnerSection integrateUs />}
      <Footer />
    </>
  );
}
