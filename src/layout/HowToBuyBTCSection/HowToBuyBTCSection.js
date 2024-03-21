import React, { memo } from 'react';
import css from './HowToBuyBTCSection.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const items = [
  {
    title: 'Choose crypto',
    step: '1',
    desc: (
      <>
        Pick a coin <span style={{ color: 'black' }}>👉 </span> select the currency of your payment.
      </>
    ),
    first: true,
    img: {
      path: '/how-to-buy/bitcoin.svg',
      alt: 'Bitcoin',
    },
  },
  {
    title: 'Swap',
    step: '2',
    desc: (
      <>
        Paste your crypto wallet address <span style={{ color: 'black' }}>👉 </span> send the deposit.
      </>
    ),
    img: {
      path: '/how-to-buy/exchange.webp',
      alt: 'Exchange',
    },
  },
  {
    title: 'Get crypto',
    step: '3',
    desc: (
      <>
        Check your wallet <span style={{ color: 'black' }}>👉 </span> we hope to see you soon️️!
      </>
    ),
    img: {
      path: '/how-to-buy/wallet.webp',
      alt: 'Wallet',
    },
  },
];

const Step = ({ title, desc, first, step, img }) => (
  <div key={title} className={css.step}>
    <div className={css.stepNum}>
      <h3>{step}</h3>
    </div>
    <img className={css.stepImg} src={img.path} alt={img.alt} />
    <div className={css.stepText}>
      <h3 className={css.stepTitleNotFirst}>{title}</h3>
      <p className={css.stepDescNotFirst}>{desc}</p>
    </div>
  </div>
);

const HowToBuyBTCSection = memo(() => {
  const steps = items.map((step) => <Step key={step.title} {...step} />);
  return (
    <div className={css.howToBuySection}>
      <div className='container'>
        <h2 className={css.heading}>Buy & Sell Crypto with Guardarian</h2>
        <div className={css.steps}>{steps}</div>
        <div className={css.action}>
          <button onClick={scrollToTop} type='button'>
            <span>Exchange</span>
          </button>
        </div>
      </div>
    </div>
  );
});

HowToBuyBTCSection.displayName = 'HowToBuyBTCSection';

export { HowToBuyBTCSection };
