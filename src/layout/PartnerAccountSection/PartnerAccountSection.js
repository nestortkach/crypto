import React from 'react';
import Image from 'next/image';
import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import { Text } from 'components/Text';

import { useBreakPoint } from 'hooks/useResponsive';
import { useResponsiveData } from 'hooks/useResponsiveData';
import { Button } from 'components/Button';
import css from './PartnerAccountSection.module.scss';

const desktopData = {
  title: 'Partner account',
  subtext:
    "You're in control of your business - choose the cryptocurrency that your customers will use and set spending limits. Everything is neatly processed, labelled and accounted for. ",
  features: ['Set limits', 'See transaction history', 'Overview of your customers', 'Keep track of your earnings'],
};

const mobileData = {
  title: 'Partner account',
  subtext:
    'The only card your customers need to make payments with cryptocurrencies! Everything is processed, labeled, and accounted for your business.',
  features: [
    'Set limits for users',
    'See transaction history',
    'Overview of your customers',
    'Keep track of your earnings',
  ],
};

const el = () => window.document.getElementById('contactUsCrypto');
const scrollToContact = () => window.scrollTo({ top: el().offsetTop, behavior: 'smooth' });

export const PartnerAccountSection = ({ handlePopupOpen }) => {
  const data = useResponsiveData({
    init: {
      features: [],
    },
    desktopData,
    mobileData,
  });
  const breakpoint = useBreakPoint();
  return (
    <Banner className={css.banner}>
      <div className={css.content}>
        {breakpoint !== 'mobile' && (
          <div className={css.imgWrap}>
            <Image src='/crypto-card/partner-account.png' alt='Coin-machine' width={532} height={640} />
          </div>
        )}

        <div className={css.texts}>
          <Title className={css.heading}>{data.title}</Title>
          <Text className={css.subText} fontWeight='light'>
            {data.subtext}
          </Text>
          {breakpoint === 'mobile' && (
            <div className={css.imgWrap}>
              <Image src='/crypto-card/partner-account.png' alt='Coin-machine' width={214} height={257} />
            </div>
          )}
          {data.features.map((feature) => (
            <Text key={feature} tag='footer' size='sm' className={css.footer}>
              <img className={css.icon} src='/crypto-card/check.svg' alt='Comments icon' />
              <Text fontWeight='bold' className={css.featureText}>
                {feature}
              </Text>
            </Text>
          ))}
          <Button
            fullWidth
            size='md'
            darkBlue
            onClick={breakpoint === 'mobile' ? handlePopupOpen : scrollToContact}
            type='button'
            className={css.becomePartner}
          >
            {breakpoint === 'mobile' ? 'Request card' : 'Become a partner'}
          </Button>
        </div>
      </div>
    </Banner>
  );
};
