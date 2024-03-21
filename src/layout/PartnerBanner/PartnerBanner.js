import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import { Text } from 'components/Text';

import { useBreakPoint } from 'hooks/useResponsive';
import { Button } from 'components/Button';
import css from './PartnerBanner.module.scss';

const desktopData = {
  title: 'Best deals for business partners',
  subtext:
    'Guardarian is an infrastructure of fiat-to-crypto products. We deal with cryptocurrency gateways, exchanges and payment cards. With our solutions your cryptocurrency business will be globally compliant for seamlessly accepting payments wherever your customers are.',
  features: [],
};

const mobileData = {
  title: 'Best deals for partners',
  subtext:
    'With our solutions your business will be compliant for seamlessly accepting payments wherever your customers are.',
  features: [
    'Maximize your business',
    'Developer friendly solutions',
    'Reach customers globally',
    'Securely buy and sell crypto ',
  ],
};

const el = () => window.document.getElementById('contactUsCrypto');
const scrollToContact = () => window.scrollTo({ top: el().offsetTop, behavior: 'smooth' });

export const PartnerBanner = ({ handlePopupOpen }) => {
  const [data, setData] = useState({ features: [] });
  const breakpoint = useBreakPoint();

  useEffect(() => {
    if (breakpoint === 'mobile') setData(mobileData);
    else setData(desktopData);
  }, [breakpoint]);

  return (
    <Banner className={css.banner}>
      <div className={css.content}>
        <div className={css.texts}>
          <Title tag='h1' className={css.heading}>
            {data.title}
          </Title>
          <Text tag='p' className={css.subText}>
            {data.subtext}
          </Text>
          {breakpoint === 'mobile' && (
            <div className={css.imgWrap}>
              <img src='/partner/banner.svg' alt='Coin machine' />
            </div>
          )}

          {breakpoint === 'mobile' &&
            data.features.map((feature) => (
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
            className={css.requestCard}
          >
            Become a partner
          </Button>
        </div>
        {breakpoint !== 'mobile' && (
          <div className={css.imgWrap}>
            <Image src='/partner/banner.svg' alt='Coin machine' width={261} height={527} />
          </div>
        )}
      </div>
    </Banner>
  );
};
