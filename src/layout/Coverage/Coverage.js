import React, { memo } from 'react';
import css from './Coverage.module.scss';

const items = [
  {
    title: '400+',
    desc: 'Crypto currencies',
    img: {
      path: '/coverage/coverage-crypto.svg',
      alt: 'Coverage Crypto',
    },
  },
  {
    title: '50+',
    desc: 'Fiat currencies',
    img: {
      path: '/coverage/coverage-fiat.svg',
      alt: 'Coverage Fiat',
    },
  },
  {
    title: '170+',
    desc: 'Supported countries',
    img: {
      path: 'coverage/coverage-countries.svg',
      alt: 'Coverage Countries',
    },
  },
  {
    title: '5+',
    first: true,
    desc: 'Payment methods',
    img: {
      path: 'coverage/coverage-payment-methods.svg',
      alt: 'Coverage Payment Methods',
    },
  },
];

const Step = ({ title, desc, first, img }) => (
  <div key={title} className={css.step}>
    <img className={css.stepImg} src={img.path} alt={img.alt} />
    <div className={css.stepText}>
      <h4 className={first ? css.stepTitle : css.stepTitleNotFirst}>{title}</h4>
      <p className={first ? css.stepDesc : css.stepDescNotFirst}>{desc}</p>
    </div>
  </div>
);

const Coverage = memo(() => {
  const steps = items.map((step) => <Step key={step.title} {...step} />);
  return (
    <div className={css.howToBuySection}>
      <div className='container'>
        <h3 className={css.heading}>Coverage is power!</h3>
        <div className={css.steps}>{steps}</div>
      </div>
    </div>
  );
});

Coverage.displayName = 'Coverage';

export { Coverage };
