import AOS from 'aos';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useBreakPoint } from 'hooks/useResponsive';
import { Popup } from 'components/Popup';
import { TwitterMeta } from 'components/Meta/TwitterMeta';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { data } from 'constants/data/subscriptions-faq';
import css from 'layout/ContactForm/ContactForm.module.scss';
import styles from './styles.module.scss';
import { DocHead } from 'layout/Head';
import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import { ContactForm } from 'layout/ContactForm';
import { FormSection } from 'layout/FormSectionBuyCurrency';
import { BuyCurrencyBenefits } from 'layout/BuyCurrencyBenefits';
import { BenefitsSubscription } from 'layout/BenefitsSubscription/BenefitsSubscription';
import { StartSubscriptions } from 'layout/StartSubscription';
import { SolutionForBusinesses } from 'layout/SolutionForBusinesses/SolutionForBusinesses';
import { BuyCurrencyFaq } from 'layout/BuyCurrencyFaq';
import { InvestBanner } from 'layout/InvestBanner';
import { CalculatorRecurring } from 'components/CalculatorRecurring';
import cn from 'classnames';

const metaData = {
  url: 'https://guardarian.com/',
  title: 'Guardarian Subscriptions | Automate Your Crypto Investments',
  description:
    'Set-up recurring crypto exchanges of predetermined amount & grow your portfolio effortlessly. Non-custodial transactions & no registration required',
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
        <FormSection
          arrowText='No registration needed - try it now!'
          renderCalculator={(props) => (
            <CalculatorRecurring {...props} compact className={cn(props.className, styles.calculator)} />
          )}
        />
      </Header>
      <BuyCurrencyBenefits />
      <BenefitsSubscription />
      <StartSubscriptions />
      <SolutionForBusinesses />
      <BuyCurrencyFaq data={data} />
      <InvestBanner />
      <Footer />
    </>
  );
}
