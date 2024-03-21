import React, { useState } from 'react';
import { useBreakPoint } from 'hooks/useResponsive';

import { ContactForm } from 'layout/ContactForm';
import { Popup } from 'components/Popup';

import { DocHead } from 'layout/Head';
import { Header } from 'layout/Header';
import { Footer } from 'layout/Footer';
import { BPBanner } from 'layout/BussinesPage/Banner';
import { TwitterMeta } from 'components/Meta/TwitterMeta';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { StepsToFund } from 'layout/BussinesPage/StepsToFund';
import { CashOutSection } from 'layout/BussinesPage/CashOutSection';
import { OurPartnerFamilyPartnerSection } from 'layout/OurPartnerFamilyPartnerSection';
import { OurFamilyPartnerCarusel } from 'layout/OurFamilyPartnerCarusel/OurFamilyPartnerCarusel';

const metaData = {
  url: 'https://guardarian.com/business',
  title: 'B2B Payment Gateway | Guardarian Solution For Crypto Companies',
  description:
    'Fast crypto exchanges for business. Multiple crypto assets and flexible conditions both for fiat and crypto to exchange.',
  image: 'https://guardarian.com/services/sell-crypto-mobile.png',
};

export default function BusinessPage() {
  const [showForm, setShowForm] = useState(false);
  const handlePopupClose = () => setShowForm(false);
  const breakpoint = useBreakPoint();
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

      <Popup visible={showForm} onClose={handlePopupClose}>
        <ContactForm onSuccessSubmit={handlePopupClose} />
      </Popup>

      <Header theme='none'>
        <BPBanner />
      </Header>

      <CashOutSection />
      {breakpoint === 'mobile' ? <OurFamilyPartnerCarusel /> : <OurPartnerFamilyPartnerSection integrateUs />}
      <StepsToFund />

      <Footer />
    </>
  );
}
