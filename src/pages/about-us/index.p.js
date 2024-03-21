import React, { useState } from 'react';

import { Popup } from 'components/Popup';
import { ContactForm } from 'layout/ContactForm';

import { Footer } from 'layout/Footer';
import { DocHead } from 'layout/Head';
import { Header } from 'layout/Header';
import { AboutBanner } from 'layout/AboutBanner';
import { AdvantagesSection } from 'layout/AdvantagesSection';
import { ValuesSection } from 'layout/ValuesSection';
import { CustomerExpSection } from 'layout/CustomerExpSection';
import { BeInTouchSection } from 'layout/BeInTouchSection';

export default function AboutUs() {
  const [showForm, setShowForm] = useState(false);
  const handlePopupClose = () => setShowForm(false);
  const handlePopupOpen = () => setShowForm(true);
  const linkCanonical = 'https://guardarian.com/about-us';

  return (
    <>
      <DocHead
        title='About Us'
        description='Guardarian is a fully licensed & regulated crypto to fiat gateway. Buy 400+ cryptocurrencies using a bank transfer, credit/debit card or SEPA transfer. '
        linkCanonical={linkCanonical}
      />

      <Popup visible={showForm} onClose={handlePopupClose}>
        <ContactForm onSuccessSubmit={handlePopupClose} />
      </Popup>

      <Header>
        <AboutBanner />
      </Header>

      <AdvantagesSection />
      <ValuesSection />
      <CustomerExpSection />
      <BeInTouchSection btnHandler={handlePopupOpen} />

      <Footer />
    </>
  );
}
