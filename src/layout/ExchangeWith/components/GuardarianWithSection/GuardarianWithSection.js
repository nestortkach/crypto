import React from 'react';

import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { Feature } from './Feature';
import { featuresLeft, featuresRight } from './features';

import css from './GuardarianWithSection.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
function GuardarianWithSection({ title }) {
  const featureLeftElm = featuresLeft.map((feature, index) => (
    <Feature key={feature.img.alt} index={index} {...feature} />
  ));
  const featureRightElm = featuresRight.map((feature, index) => (
    <Feature key={feature.img.alt} index={index} {...feature} />
  ));

  return (
    <section className={css.featuresSection}>
      <Title className={css.heading} size='xl' tag='h2'>
        {title}
      </Title>
      <div className={css.features}>
        <div className={css.leftFeatures}>{featureLeftElm}</div>
        <img className={css.mobile} src='/guardarian-with-union-section/mobile.svg' alt='mobile' />
        <div className={css.rightFeatures}>{featureRightElm}</div>
      </div>
      <div className={css.buttonContainer}>
        <Button onClick={scrollToTop} green className={css.button}>
          Exchange now
        </Button>
      </div>
    </section>
  );
}

export { GuardarianWithSection };
