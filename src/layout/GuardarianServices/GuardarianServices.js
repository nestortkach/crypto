import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';
import style from './style.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const GuardarianServices = memo(() => {
  const router = useRouter();

  const goTo = (e, func) => {
    e.preventDefault();
    func();
  };

  const services = useMemo(
    () => [
      {
        img: {
          path: `/services/buy-crypto.webp`,
          alt: 'buy-crypto',
        },
        emoji: '/bank-icon.svg',
        title: 'Buy & Sell crypto',
        desc: 'Instant fiat-to-crypto & crypto-to-fiat exchanges',
        button: 'Buy Crypto',
        onClick: scrollToTop,
      },
      {
        img: {
          path: `/services/sell-buy-crypto.webp`,
          alt: 'sell-crypto',
        },
        emoji: '/exchange-icon.svg',
        title: 'On- & Off-ramp',
        desc: 'Enable seamless crypto exchanges for your users',
        button: 'Sell Crypto',
        onClick: () => router.push('/integrate-us'),
        path: '/integrate-us',
      },
      {
        img: {
          path: `/services/payment-card.webp`,
          alt: 'payment-cards',
        },
        emoji: '/suitcase-icon.svg',
        title: 'Business exchanges',
        desc: 'Secure crypto investments & cashouts for your company',
        button: 'Request Card',
        new: false,
        onClick: () => router.push('/business'),
        path: '/business',
      },

      {
        img: {
          path: `/services/b2b-solution.webp`,
          alt: 'b2b-soluion',
        },
        emoji: 'card-icon.svg',
        title: 'Crypto card',
        desc: 'Make payments in cryptocurrency worldwide',
        button: 'Request Exchange',
        onClick: () => router.push('/crypto-card'),
        path: '/crypto-card',
      },
    ],
    [],
  );

  return (
    <section className={style.sectionWrapper}>
      <div className='container'>
        <div className={style.section}>
          {/* <h2 className={style.servicesTitle}>Guardarian Services</h2> */}
          <div className={style.services}>
            {services.map((service) => (
              <a
                key={service.title}
                href={service.path ? service.path : ''}
                onClick={(e) => goTo(e, service.onClick)}
                className={style.services__card}
              >
                <section aria-hidden='true'>
                  {service.new && <img src='/services/newCardImg.png' className={style.newCardImg} />}
                  <img src={service.emoji} />
                  <div className={style.textContainer}>
                    <header className={style.serviceTitle}>{service.title}</header>
                    <section>{service.desc}</section>
                  </div>
                </section>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

GuardarianServices.displayName = 'GuardarianServices';
