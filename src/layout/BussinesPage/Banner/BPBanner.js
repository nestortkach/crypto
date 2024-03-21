import React from 'react';

import { Text } from 'components/Text';
import { Banner } from 'components/Banner';

import css from './BPBanner.module.scss';

import { Calculator } from '../../../components/Calculator/Calculator';

const data = {
  title: (
    <>
      <br />
      Crypto<span style={{ color: '#00EBB2' }}>{`<>`}</span>Fiat exchanges designed specially for your business
    </>
  ),
  subtext: <p>Cash out your crypto profits or invest into crypto with the lowest fees on the market.</p>,
  img: '/business-page/banner-img.svg',
  btn_label: 'Request exchange',
};

export const BPBanner = () => (
  <div className={css.bannerWrapper}>
    <Banner className={css.component}>
      <div className={css.mainsection}>
        <div className={css.content}>
          <h1 className={css.heading}>{data.title}</h1>

          <Text size='xl' className={css.subText}>
            {data.subtext}
            <div className={css.paymentList}>
              <img src='/payment-methods/sepa_new.svg' alt='SEPA' />
              <img src='/payment-methods/swift.svg' alt='Swift' />
              <img src='/payment-methods/faster-pay.svg' alt='FasterPay' />
            </div>
          </Text>
        </div>
        <div className={css.calcWrap}>
          <Calculator b2b />
        </div>
      </div>
    </Banner>
  </div>
);
