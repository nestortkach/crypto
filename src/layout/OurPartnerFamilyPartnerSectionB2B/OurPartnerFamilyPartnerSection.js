import Carousel from '@brainhubeu/react-carousel';

import { useRouter } from 'next/router';
import Image from 'next/image';

import React, { memo, useState } from 'react';

import cn from 'classnames';

import { Button } from 'components/Button';
import { ArrowRightNew } from 'components/Icons/ArrowRight';
import { ArrowLeftNew } from 'components/Icons/ArrowLeft';

import css from './OurPartnerFamilyPartnerSection.module.scss';

const items = [
  {
    id: 1,
    img: '/partner/partners/logodark.webp',
    alt: 'TapBit exchange',
    href: 'https://www.tapbit.com/',
    width: 136,
    height: 50,
  },
  {
    id: 2,
    img: '/partner/partners/coinex_logo.webp',
    alt: 'CoinEx',
    href: 'https://www.coinex.com/',
    width: 110,
    height: 35,
  },
  {
    id: 3,
    img: '/partner/partners/atomic_wallet_logo.webp',
    alt: 'Atomic Wallet',
    href: 'https://atomicwallet.io/',
    width: 44,
    height: 70,
  },
  {
    id: 4,
    img: '/partner/partners/eternl.webp',
    alt: 'Eternl Wallet',
    href: 'https://ccvault.io/app/mainnet/welcome',
    width: 110,
    height: 56,
  },
  {
    id: 5,
    img: '/partner/partners/infinity_wallet_logo.webp',
    alt: 'Infinity Wallet',
    href: 'https://infinitywallet.io/',
    width: 110,
    height: 60,
  },
  {
    id: 6,
    img: '/partner/partners/probit_logo.png',
    alt: 'Probit Exchange',
    href: 'https://www.probit.com/en-us/',
    width: 136,
    height: 50,
  },
  {
    id: 7,
    img: '/partner/partners/lyotrade_logo.webp',
    alt: 'Lyotrade',
    href: 'https://lyotrade.com/',
    width: 120,
    height: 30,
  },
  {
    id: 8,
    img: '/partner/partners/Ambire Horizontal Light Background.svg',
    alt: 'Ambire Wallet',
    href: 'https://www.ambire.com/',
    width: 136,
    height: 66,
  },
  {
    id: 9,
    img: '/partner/partners/monero.svg',
    alt: 'MyMonero Wallet',
    href: 'https://wallet.mymonero.com/',
    width: 60,
    height: 60,
  },
  {
    id: 10,
    img: '/partner/partners/guarda.webp',
    alt: 'Guarda',
    href: 'https://guarda.com/',
    width: 55,
    height: 70,
  },
  {
    id: 11,
    img: '/partner/partners/changeNow.webp',
    alt: 'ChangeNow',
    href: 'https://changenow.io/',
    width: 110,
    height: 105,
  },
  {
    id: 12,
    img: '/partner/partners/swapzone-logo.webp',
    alt: 'swapzone',
    href: 'https://swapzone.io/',
    width: 136,
    height: 50,
  },
  {
    id: 13,
    img: '/partner/partners/floki-inu.webp',
    alt: 'Floki Inu',
    href: 'https://www.floki.com/',
    width: 80,
    height: 78,
  },
  {
    id: 14,
    img: '/partner/partners/nem.webp',
    alt: 'NEM',
    href: 'https://discord.com/invite/xymcity',
    width: 65,
    height: 65,
  },
];

const Step = ({ img, alt, href, width, height }) => (
  <a href={href} rel='noopener noreferrer nofollow' target='_blank' key={img} className={css.partner}>
    <img className={css.partnerImage} src={img} alt={alt} style={{ width: `${width}`, height: `${height}` }} />
  </a>
);

const StepDark = ({ img, alt, href }) => (
  <a
    href={href}
    rel='noopener noreferrer nofollow'
    target='_blank'
    key={img}
    className={[css.partner, css.partnerDark].join(' ')}
  >
    {alt === 'Atomic Wallet' && <img className={css.partnerImage} src={img} alt={alt} height='70px' />}
    {alt !== 'Atomic Wallet' && <img className={css.partnerImage} src={img} alt={alt} />}
  </a>
);

const OurPartnerFamilyPartnerSection = memo(
  ({
    className,
    withoutBg,
    headerBlue,
    integrateUs,
    classes = {
      header: null,
    },
  }) => {
    const router = useRouter();

    const [carouselValue, setCarouselValue] = useState(0);
    const steps = withoutBg
      ? items.map((step, index) => <StepDark key={index} {...step} />)
      : items.map((step, index) => <Step key={index} {...step} />);

    return (
      <div className={cn(withoutBg ? css.howToBuySectionPartners : css.howToBuySection, className)}>
        <div className='container'>
          {headerBlue && (
            <h2 className={cn(css.heading, classes.header)}>
              <span className={css.headingBlue}>Trusted by the best</span>
            </h2>
          )}
          {!headerBlue && (
            <div>
              <h2 className={cn(withoutBg ? css.headingPartners : css.heading, classes.header)}>Trusted by the best</h2>
              <p className={css.subtitle}>Guardarian helps these industry-leading Web3 projects to make an impact.</p>
            </div>
          )}

          <Carousel
            arrowLeft={<ArrowLeftNew name='arrow-left' onClick={() => setCarouselValue((prev) => prev - 1)} />}
            arrowRight={<ArrowRightNew name='arrow-right' onClick={() => setCarouselValue((prev) => prev + 1)} />}
            slidesPerPage={6}
            slidesPerScroll={1}
            value={carouselValue}
            onChange={setCarouselValue}
            slides={steps}
            breakpoints={{
              1150: {
                slidesPerPage: 5,
              },
              1024: {
                slidesPerPage: 4.5,
              },
              950: {
                slidesPerPage: 4,
              },
              830: {
                slidesPerPage: 3,
              },
              767: {
                arrowLeft: undefined,
                arrowRight: undefined,
              },
              650: {
                slidesPerPage: 3,
              },
              450: {
                slidesPerPage: 2,
              },
              400: {
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
          {integrateUs && (
            <Button
              className={cn(css.actionButton, css.actionButton_desktop)}
              onClick={() => router.push('/for-partners#contactUsCrypto')}
            >
              <span>Join our partner family</span>
            </Button>
          )}
        </div>
      </div>
    );
  },
);

OurPartnerFamilyPartnerSection.displayName = 'OurPartnerFamilyPartnerSection';

export { OurPartnerFamilyPartnerSection };
