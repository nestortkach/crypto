import { useState, useEffect } from 'react';

import { Popup } from 'components/Popup';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { TwitterMeta } from 'components/Meta/TwitterMeta';

import { useBreakPoint } from 'hooks/useResponsive';

import { DocHead } from 'layout/Head';
import { Header } from 'layout/Header';
import { Footer } from 'layout/Footer';
import { ContactForm } from 'layout/ContactForm';
import { PartnerBanner } from 'layout/PartnerBanner';
import { RevenueToolsSection } from 'layout/RevenueToolsSection';
import { WorldwideCoverageSection } from 'layout/WorldwideCoverageSection';
import { ContactUsCryptoCardSection } from 'layout/ContactUsCryptoCardSection';
import { FeedbackAboutUsPartnerSection } from 'layout/FeedbackAboutUsPartnerSection';
import { OurPartnerFamilyPartnerSection } from 'layout/OurPartnerFamilyPartnerSection';
import { ExcellentServicePartnerSection } from 'layout/ExcellentServicePartnerSection';

const metaData = {
  url: 'https://guardarian.com/for-partners',
  title: 'Guardarian Crypto Solutions For Business',
  description:
    'We offer exceptional services for skyrocketing crypto projects. We deal with cryptocurrency gateways, exchanges, and crypto cards.',
  image: 'https://guardarian.com/services/sell-crypto-mobile.png',
};
const PartnerPage = () => {
  const breakpoint = useBreakPoint();
  const [showForm, setShowForm] = useState(false);

  const handlePopupClose = () => {
    window.history.replaceState(null, null, ' ');
    setShowForm(false);
  };

  const handlePopupOpen = () => {
    window.location.hash = 'contactUsCrypto';
    setShowForm(true);
  };

  useEffect(() => {
    if (window.location.hash === '#contactUsCrypto' && window.innerWidth < 768) {
      handlePopupOpen();
    }
  }, []);

  return (
    <>
      <DocHead title={metaData.title} description={metaData.description} linkCanonical={metaData.url} />
      {/* Primary Meta Tags */}
      {/* <title> {metaData.title} </title>
        <meta name='title' content={metaData.title} key='title' />
        <meta name='description' content={metaData.description} key='description' />
      </DocHead> */}

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

      <Popup containerClass='popup' closeButtonClass='closePopup' visible={showForm} onClose={handlePopupClose}>
        <ContactForm onSuccessSubmit={handlePopupClose} templateType='business-verification-form' />
      </Popup>

      <Header>
        <PartnerBanner handlePopupOpen={handlePopupOpen} />
      </Header>

      <OurPartnerFamilyPartnerSection withoutBg headerBlue />
      <RevenueToolsSection />
      <ExcellentServicePartnerSection />
      <WorldwideCoverageSection />
      <FeedbackAboutUsPartnerSection handlePopupOpen={handlePopupOpen} />

      {breakpoint !== 'mobile' && <ContactUsCryptoCardSection />}

      <Footer />
    </>
  );
};

export default PartnerPage;
