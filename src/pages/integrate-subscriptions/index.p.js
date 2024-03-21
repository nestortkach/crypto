import AOS from 'aos';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useBreakPoint } from 'hooks/useResponsive';
import { Popup } from 'components/Popup';
import { TwitterMeta } from 'components/Meta/TwitterMeta';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { data } from 'constants/data/b2b-subscription';
import styles from './styles.module.scss';
import css from 'layout/ContactForm/ContactForm.module.scss';
import { DocHead } from 'layout/Head';
import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import { ContactForm } from 'layout/ContactForm';
import { FormSection } from 'layout/FormSectionb2bSubscription';
import { BuyCurrencyBenefits } from '../../layout/B2BBenefits/BuyCurrencyBenefits';
import { BenefitsSubscription } from '../../layout/B2BBenefitsSubscription/BenefitsSubscription';
import { HowItWorks } from '../../layout/HowItWorks/HowItWorks';
import { BuyCurrencyFaq } from '../../layout/BuyCurrencyFaq/BuyCurrencyFaq';
import { InvestBanner } from '../../layout/InvestBannerB2B';
import { BestChoiceSection } from '../../layout/IntegrateSection/BestChoice';
import { OurFamilyPartnerCarusel } from '../../layout/OurFamilyPartnerCaruselB2B/OurFamilyPartnerCarusel';
import { OurPartnerFamilyPartnerSection } from '../../layout/OurPartnerFamilyPartnerSectionB2B';
import { CalculatorRecurring } from 'components/CalculatorRecurring';

const metaData = {
  url: 'https://guardarian.com/',
  title: 'Integrate Recurring Crypto Exchanges | Guardarian Subscriptions',
  description:
    'Turn one-time customers into recurring ones and maximise their TVL with Guardarian Subscriptions. Enjoy free integrations & outstanding customer support.',
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
      <BuyCurrencyBenefits />
      <HowItWorks />
      <BenefitsSubscription />
      <BestChoiceSection
        withFormBackground={false}
        renderCalculator={(props) => <CalculatorRecurring {...props} compact />}
      />
      {breakpoint === 'mobile' ? (
        <OurFamilyPartnerCarusel />
      ) : (
        <OurPartnerFamilyPartnerSection
          integrateUs
          className={styles.ourPartnersFamilyContainer}
          classes={{ header: styles.ourPartnersFamilyHeader }}
        />
      )}
      <BuyCurrencyFaq data={data} />
      <InvestBanner />
      <Footer />
    </>
  );
}
