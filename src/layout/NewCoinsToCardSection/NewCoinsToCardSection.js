import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { useBreakPoint } from 'hooks/useResponsive';
import { Button } from 'components/Button';
import css from './NewCoinsToCardSection.module.scss';

const cards = [
  {
    img: {
      path: 'crypto-card/coins/bitcoin-btc-logo 2.svg',
      alt: 'Bitcoin',
    },
  },
  {
    img: {
      path: 'crypto-card/coins/ethereum-eth-logo 2.svg',
      alt: 'Ethereum',
    },
  },
  {
    img: {
      path: 'crypto-card/coins/litecoin-ltc-logo 2.svg',
      alt: 'Litecoin',
    },
  },
  {
    img: {
      path: 'crypto-card/coins/xrp-xrp-logo 2.svg',
      alt: 'XRP',
    },
  },
];

const desktopData = {
  title: 'Add new coins to card',
  subtitle: [
    'We can add new coins and tokens to be used with our cards in no time.',
    'Just contact us and let us know what cryptocurrencies you are looking to use!',
  ],
};

const mobileData = {
  title: 'Add new coins to card',
  subtitle: ['We can add new coins and tokens to be used with our cards in no time!'],
};

const el = () => window.document.getElementById('contactUsCrypto');
const scrollToContact = () => window.scrollTo({ top: el().offsetTop, behavior: 'smooth' });

function NewCoinsToCardSection({ handlePopupOpen }) {
  const [data, setData] = useState({ subtitle: [] });
  const breakpoint = useBreakPoint();
  useEffect(() => {
    if (breakpoint === 'mobile') setData(mobileData);
    else setData(desktopData);
  }, [breakpoint]);
  return (
    <section className={css.servicesSection}>
      <div className='container'>
        <div className={css.container}>
          <Title className={css.heading}>{data.title}</Title>
          <Text fontWeight='light' tag='p' className={css.subHeading}>
            {data.subtitle.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </Text>
          {breakpoint !== 'mobile' ? (
            <div className={css.stepRow}>
              {cards.map((card) => (
                <Image key={card.img.alt} src={`/${card.img.path}`} alt={card.img.alt} width={150} height={151} />
              ))}
            </div>
          ) : (
            <div className={css.stepRow}>
              {cards.map((card) => (
                <Image key={card.img.alt} src={`/${card.img.path}`} alt={card.img.alt} width={130} height={131} />
              ))}
            </div>
          )}
          {/* <div className={css.stepRow}>
            {cards.map((card) => (
              <img key={card.img.alt} src={card.img.path} alt={card.img.alt} />
            ))}
          </div> */}
          <Button
            fullWidth
            size='md'
            darkBlue
            onClick={breakpoint === 'mobile' ? handlePopupOpen : scrollToContact}
            type='button'
            className={css.button}
          >
            Request adding my coin
          </Button>
        </div>
      </div>
    </section>
  );
}

export { NewCoinsToCardSection };
