import React, { useState } from 'react';
import css from './PressAboutUs.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@brainhubeu/react-carousel';
import { useBreakPoint } from 'hooks/useResponsive';

const pressData = [
  {
    id: 0,
    img: '/press/forbs.svg',
    width: 193,
    height: 92,
    alt: 'forbs',
    description: 'Guardarian joins My NEO Group in a strategic partnership',
    link: 'https://forbesbaltics.com/en/news/article/guardarian-joins-my-neo-group-in-a-historic-partnership',
  },
  {
    id: 1,
    img: '/press/cryptoVantage.svg',
    width: 234,
    height: 45,
    alt: 'cryptoVantage',
    description: 'Guardarian Exchange Review by CryptoVantage',
    link: 'https://www.cryptovantage.com/best-crypto-exchanges/guardarian/',
  },
  {
    id: 2,
    img: '/press/invetorPlace.svg',
    width: 157,
    height: 92,
    alt: 'invetorPlace',
    description: 'Floki Inu Meets FIAT: Guardarian Driving FLOKI Hype',
    link: 'https://investorplace.com/2021/10/floki-inu-meets-fiat-7-things-to-know-about-the-guardarian-news-driving-floki-hype/',
  },
  {
    id: 3,
    img: '/press/elrond.svg',
    width: 202,
    height: 92,
    alt: 'elrond',
    description: 'Onboarding From FIAT To EGLD With Guardarian Integration',
    link: 'https://elrond.com/blog/egld-integrated-in-guardarian/',
  },
  {
    id: 4,
    img: '/press/poodl.svg',
    width: 92,
    height: 92,
    alt: 'poodl',
    description: 'Guardarian strikes a strategic partnership with Poodl',
    link: 'https://coinmarketcap.com/community/articles/25308',
  },
  {
    id: 5,
    img: '/press/cryptoWisser.svg',
    width: 254,
    height: 92,
    alt: 'cryptoVantage',
    description: 'Guardarian Exchange review by CryptoWisser',
    link: 'https://www.cryptowisser.com/exchange/guardarian/',
  },
];

export default function PressAboutUs() {
  const [carouselValue, setCarouselValue] = useState(0);
  const breakpoint = useBreakPoint();
  const mobileData = pressData.map((item) => (
    <div key={item.id} className={css.mediaItem}>
      <div className={css.imgContaimer}>
        <img src={item.img} alt={item.alt} style={{ width: `${item.width}px`, height: `${item.height}px` }} />
      </div>
      <p>{item.description}</p>
    </div>
  ));
  const data = pressData.map((item) => (
    <Link key={item.id} href={item.link}>
      <div className={css.mediaItem}>
        <div className={css.imgContaimer}>
          <img src={item.img} alt={item.alt} style={{ width: `100%`, height: `${item.height}px` }} />
        </div>
        <p>{item.description}</p>
      </div>
    </Link>
  ));
  return (
    <div className={css.aboutUsWrapper}>
      <section className={css.container}>
        <h2>Press about us</h2>
        <p className={css.subHeader}>Check what media outlets say about Guardarian</p>
        {breakpoint === 'laptop' ? (
          <div className={css.mediaContainer}>
            <span onClick={() => setCarouselValue((prev) => prev - 1)}>
              <Image src='/press/press-abot-blue-left-arrow.svg' alt='leftArrow' width={30} height={25} />
            </span>
            <Carousel
              slidesPerPage={3}
              slidesPerScroll={1}
              value={carouselValue}
              onChange={setCarouselValue}
              slides={data}
            />
            <span onClick={() => setCarouselValue((prev) => prev + 1)}>
              <Image src='/press/prees-uboutus-blue-right-arrow.svg' alt='rightArrow' width={30} height={25} />
            </span>
          </div>
        ) : (
          <div className={css.mediaContainer}>
            <Carousel
              slidesPerPage={1}
              slidesPerScroll={1}
              value={carouselValue}
              onChange={setCarouselValue}
              slides={mobileData}
            />
            <div className={css.carousel_arrows}>
              <span onClick={() => setCarouselValue((prev) => prev - 1)}>
                <Image src='/press/press-abot-blue-left-arrow.svg' alt='leftArrow' width={30} height={25} />
              </span>
              <span onClick={() => setCarouselValue((prev) => prev + 1)}>
                <Image src='/press/prees-uboutus-blue-right-arrow.svg' alt='rightArrow' width={30} height={25} />
              </span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
