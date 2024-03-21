import React from 'react';

import { useRouter } from 'next/router';
import { ServiceCard } from './ServiceCard';

import css from './ServicesSection.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

function ServicesSection({ onAskQuestion }) {
  const router = useRouter();
  const services = [
    {
      img: {
        path: `/services/buy-crypto.webp`,
        alt: 'buy-crypto',
      },
      title: 'Over 250 coins to buy',
      desc: 'Guardarian features some of the most widely used cryptocurrencies',
      button: 'Buy Crypto',
      onClick: scrollToTop,
    },
    {
      img: {
        path: `/services/sell-buy-crypto.webp`,
        alt: 'sell-crypto',
      },
      title: 'Sell crypto with ease',
      desc: 'Fast exchange process to transfer your funds with no registration',
      button: 'Sell Crypto',
      onClick: scrollToTop,
    },
    {
      img: {
        path: `/services/payment-card.webp`,
        alt: 'payment-cards',
      },
      title: 'Payment cards',
      desc: 'Make fast purchases with our wide range of payment methods',
      button: 'Request Card',
      onClick: onAskQuestion,
    },
    {
      img: {
        path: `/services/b2b-solution.webp`,
        alt: 'b2b-soluion',
      },
      title: 'B2B solution',
      desc: 'Authorised and secure platform for you to focus on your business',
      button: 'Request Exchange',
      onClick: () => router.push('/business-form'),
    },
  ];

  const cards = services.map((service) => <ServiceCard key={service.img.alt} {...service} />);

  return (
    <section className={css.servicesSection}>
      <h2 className={css.heading}>Guardarian services</h2>

      <div className={css.servicesRow}>{cards}</div>
    </section>
  );
}

export { ServicesSection };
