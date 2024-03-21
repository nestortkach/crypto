import React, { useEffect, useState } from 'react';

import { Title } from 'components/Title';
import { useBreakPoint } from 'hooks/useResponsive';
import { Benefit } from './Benefit';
import { benefitsLeft, benefitsRight } from './benefits';

import css from './BenefitsGuardarianCryptoCardSection.module.scss';

const desktopData = {
  title: 'Benefits with Guardarian crypto card',
};

const mobileData = {
  title: 'Benefits with Guardarian',
};

function BenefitsGuardarianCryptoCardSection() {
  const benefitsLeftElm = benefitsLeft.map((benefit, index) => (
    <Benefit key={benefit.img.alt} index={index} {...benefit} />
  ));
  const benefitsRightElm = benefitsRight.map((benefit, index) => (
    <Benefit key={benefit.img.alt} index={index} {...benefit} />
  ));

  const [data, setData] = useState({});
  const breakpoint = useBreakPoint();

  useEffect(() => {
    if (breakpoint === 'mobile') setData(mobileData);
    else setData(desktopData);
  }, [breakpoint]);

  return (
    <section className={css.featuresSection}>
      <div className='container'>
        <Title className={css.heading}>{data.title}</Title>
        <div className={css.features}>
          <div className={css.leftFeatures}>{benefitsLeftElm}</div>
          <img className={css.mobile} src='/crypto-card/card.svg' alt='card' />
          <div className={css.rightFeatures}>{benefitsRightElm}</div>
        </div>
      </div>
    </section>
  );
}

export { BenefitsGuardarianCryptoCardSection };
