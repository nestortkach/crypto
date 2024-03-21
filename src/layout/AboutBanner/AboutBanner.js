import React from 'react';
import Image from 'next/image';
import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import { Text } from 'components/Text';

import css from './AboutBanner.module.scss';

const data = {
  title: 'Guardarian is a bridge between fiat and crypto worlds',
  subtext: 'Our approach is to deliver the best user experience in buying, selling, and spending crypto',
  footer_text: 'For B2B partners we provide fiat-crypto and crypto-fiat gateways',
};

export const AboutBanner = () => (
  <Banner className={css.banner}>
    <div className={css.content}>
      <Title tag='h1' className={css.heading}>
        {data.title}
      </Title>

      <div className={css.imgWrap}>
        <Image src='/machine.svg' alt='Coin machine image' width={440} height={330} />
      </div>

      <Text className={css.subText}>
        <p>{data.subtext}</p>
      </Text>

      <Text tag='footer' size='sm' className={css.footer}>
        <img className={css.icon} src='/comments-icon.svg' alt='Comments icon' />
        <p>{data.footer_text}</p>
      </Text>
    </div>
  </Banner>
);
