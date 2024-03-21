import AOS from 'aos';

import React, { useState, useEffect } from 'react';

import { changeCalculatorTheme } from 'utils/changeCalculatorTheme';
import { Popup } from 'components/Popup';
import { ContactForm } from 'layout/ContactForm';
import { Footer } from 'layout/Footer';
import { DocHead } from 'layout/Head';
import { Header } from 'layout/Header';

import css from 'layout/ContactForm/ContactForm.module.scss';
import { Divider } from 'components/Divider';
import { CoinsToExchange } from 'layout/CoinsToExchange';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { TwitterMeta } from 'components/Meta/TwitterMeta';
import { GuardarianWithSection } from './components/GuardarianWithSection';
import { HowToEchangeSection } from './components/HowToEchangeSection';
import { PartneredWithSection } from './components/PartneredWithSection';
import { ExchangeWithCalculatorSection } from './components/ExchangeWithCalculatorSection';

export default function ExchangeWith({
  calculatorSection = {
    cryptoCurrency: '',
    fiatCurrency: '',
    title: '',
    description: '',
    logo: '',
  },
  partneredWithSection = {
    title: '',
    contents: [],
  },
  guardarianWithSection = {
    title: '',
  },
  howToExchangeSection = {
    title: '',
    subTitle: '',
    card: '',
  },
  metaData,
}) {
  const [showForm, setShowForm] = useState(false);

  const handlePopupClose = () => setShowForm(false);
  const handlePopupOpen = () => setShowForm(true);

  useEffect(() => {
    AOS.init({ once: true });
    changeCalculatorTheme('guardarian');
  }, []);

  const exchangeWithCalculatorSectionProps = {
    ...calculatorSection,
    onAskQuestion: handlePopupOpen,
  };

  const partneredWithSectionProps = {
    ...partneredWithSection,
    onAskQuestion: handlePopupOpen,
  };

  const guardarianWithSectionProps = {
    ...guardarianWithSection,
  };

  const howToExchangeSectionProps = {
    ...howToExchangeSection,
  };

  return (
    <>
      <DocHead>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
        {/* Primary Meta Tags */}
        <title> {metaData.title} </title>
        <meta name='title' content={metaData.title} key='title' />
        <meta name='description' content={metaData.description} key='description' />
      </DocHead>
      {/* Open Graph / Facebook */}
      <FacebookMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
      />
      {/* Twitter */}
      <TwitterMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
      />

      <Popup containerClass={css.popup} closeButtonClass={css.closePopup} visible={showForm} onClose={handlePopupClose}>
        <ContactForm onSuccessSubmit={handlePopupClose} />
      </Popup>

      <Header>
        <div className='container'>
          <ExchangeWithCalculatorSection {...exchangeWithCalculatorSectionProps} />
        </div>
      </Header>

      <div className='container'>
        <PartneredWithSection {...partneredWithSectionProps} />
      </div>
      <Divider />
      <div className='container'>
        <GuardarianWithSection {...guardarianWithSectionProps} />
      </div>
      <Divider />
      <div className='container'>
        <HowToEchangeSection {...howToExchangeSectionProps} />
      </div>
      <Divider />
      <CoinsToExchange />

      <Footer />
    </>
  );
}
