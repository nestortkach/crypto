import React, { memo, useState } from 'react';
import Image from 'next/image';
import { Button } from 'components/Button/Button';
import Link from 'next/link';

import css from './TrustedByTheBestSection.module.scss';

import { useBreakPoint } from 'hooks/useResponsive';
import Carousel from '@brainhubeu/react-carousel';
import { ArrowRightNew } from 'components/Icons/ArrowRight';
import { ArrowLeftNew } from 'components/Icons/ArrowLeft';

const items = [
  {
    id: 13,
    img: '/TrustedByTheBestCarousel/image13.png',
    alt: 'Floki Inu',
    href: 'https://www.floki.com/',
    width: 80,
    height: 78,
  },
  {
    id: 14,
    img: '/TrustedByTheBestCarousel/image14.png',
    alt: 'NEM',
    href: 'https://discord.com/invite/xymcity',
    width: 65,
    height: 65,
  },
  {
    id: 2,
    img: '/TrustedByTheBestCarousel/image2.png',
    alt: 'Eternl Wallet',
    href: 'https://ccvault.io/app/mainnet/welcome',
    width: 110,
    height: 56,
  },
  {
    id: 3,
    img: '/TrustedByTheBestCarousel/image3.png',
    alt: 'Ambire Wallet',
    href: 'https://www.ambire.com/',
    width: 136,
    height: 66,
  },
  {
    id: 15,
    img: '/TrustedByTheBestCarousel/image15.png',
    alt: 'Xumm',
    href: 'https://xumm.app',
    width: 136,
    height: 66,
  },
  {
    id: 7,
    img: '/TrustedByTheBestCarousel/image7.png',
    alt: 'TapBit exchange',
    href: 'https://www.tapbit.com/',
    width: 136,
    height: 50,
  },
  {
    id: 9,
    img: '/TrustedByTheBestCarousel/image9.png',
    alt: 'Probit Exchange',
    href: 'https://www.probit.com/en-us/',
    width: 136,
    height: 50,
  },
  {
    id: 6,
    img: '/TrustedByTheBestCarousel/image6.png',
    alt: 'CoinEx',
    href: 'https://www.coinex.com/',
    width: 110,
    height: 35,
  },
  {
    id: 4,
    img: '/TrustedByTheBestCarousel/image4.png',
    alt: 'Atomic Wallet',
    href: 'https://atomicwallet.io/',
    width: 44,
    height: 70,
  },
  {
    id: 8,
    img: '/TrustedByTheBestCarousel/image8.png',
    alt: 'Guarda',
    href: 'https://guarda.com/',
    width: 55,
    height: 70,
  },
  {
    id: 10,
    img: '/TrustedByTheBestCarousel/image10.png',
    alt: 'ChangeNow',
    href: 'https://changenow.io/',
    width: 110,
    height: 105,
  },
  {
    id: 16,
    img: '/TrustedByTheBestCarousel/image16.png',
    alt: 'zelcore',
    href: 'https://zelcore.io/',
    width: 110,
    height: 105,
  },
  {
    id: 11,
    img: '/TrustedByTheBestCarousel/image11.png',
    alt: 'MyMonero Wallet',
    href: 'https://wallet.mymonero.com/',
    width: 60,
    height: 60,
  },
  {
    id: 1,
    img: '/TrustedByTheBestCarousel/image1.png',
    alt: 'Lyotrade',
    href: 'https://lyotrade.com/',
    width: 120,
    height: 30,
  },
  {
    id: 5,
    img: '/TrustedByTheBestCarousel/image5.png',
    alt: 'Infinity Wallet',
    href: 'https://infinitywallet.io/',
    width: 110,
    height: 60,
  },
  {
    id: 12,
    img: '/TrustedByTheBestCarousel/image12.png',
    alt: 'swapzone',
    href: 'https://swapzone.io/',
    width: 136,
    height: 50,
  },
];

const StepDark = ({ img, alt, href }) => {
  const breakpoint = useBreakPoint();
  return (
    <a
      href={href}
      rel='noopener noreferrer nofollow'
      target='_blank'
      key={img}
      className={[breakpoint === 'mobile' ? css.partnerMobile : css.partner, css.partnerDark].join(' ')}
    >
      <img className={css.partnerImage} src={img} alt={alt} />
    </a>
  );
};

const TrustedByTheBestSection = memo(({ id, status, singleSubPage }) => {
  const breakpoint = useBreakPoint();
  const [carouselValue, setCarouselValue] = useState(6);

  const steps = items.map((step, index) => <StepDark key={index} {...step} />);

  return (
    <div className={css.section}>
      <div className={css.trustedWrapper}>
        <div className={css.integrateUsSection}>
          <div className={css.wrapper}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div>
                  <h2 className={css.heading}>Trusted by the best</h2>
                </div>
                <div>
                  <p className={css.subheading}>Guardarian powers the leading projects in Web3 industry </p>
                </div>
              </div>

              {breakpoint !== 'mobile' && (
                <div>
                  <Link href='https://partner.guardarian.com/sign-up?_ga=2.52153312.870711640.1680451641-1843201250.1671621385'>
                    <Button className={css.actionButton}>
                      <span>Join our partner family</span>
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            <div className={css.carousel}>
              <Carousel
                slidesPerPage={4}
                slidesPerScroll={1}
                value={carouselValue}
                onChange={setCarouselValue}
                slides={steps}
                breakpoints={{
                  1440: {
                    slidesPerPage: 4.1,
                  },
                  1370: {
                    slidesPerPage: 3,
                  },
                  1032: {
                    slidesPerPage: 2.5,
                  },
                  950: {
                    slidesPerPage: 2.5,
                  },
                  830: {
                    slidesPerPage: 2,
                  },
                  767: {
                    slidesPerPage: 4,
                  },
                  650: {
                    slidesPerPage: 3,
                  },
                  450: {
                    slidesPerPage: 1,
                  },
                  400: {
                    slidesPerPage: 2,
                  },
                  375: {
                    slidesPerPage: 1,
                  },
                  350: {
                    slidesPerPage: 1,
                  },
                  320: {
                    slidesPerPage: 1,
                  },
                }}
              />
            </div>
            <div className={css.arrows}>
              <div onClick={() => setCarouselValue((prev) => prev - 1)}>
                <img src='/leftCarouselArrow.svg' />
              </div>
              <div onClick={() => setCarouselValue((prev) => prev + 1)}>
                <img src='/rightCarouselArrow.svg' />
              </div>
            </div>

            {breakpoint === 'mobile' && (
              <div>
                <Link href='https://partner.guardarian.com/sign-up?_ga=2.52153312.870711640.1680451641-1843201250.1671621385'>
                  <Button className={css.actionButton}>
                    <span>Join our partner family</span>
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

TrustedByTheBestSection.displayName = 'TrustedByTheBestSection';

export { TrustedByTheBestSection };
