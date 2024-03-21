import { useState } from 'react';
import Image from 'next/dist/client/image';
import Carousel from '@brainhubeu/react-carousel';
import { Button } from 'components/Button';
import cn from 'classnames';
import { useRouter } from 'next/router';

import css from './ourFamilyPartnerCarusel.module.scss';

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
const OurFamilyPartnerCarusel = (integrateUs, withoutBg) => {
  const [carouselValue, setCarouselValue] = useState(0);
  const router = useRouter();
  const steps = withoutBg
    ? items.map((step, index) => <StepDark key={index} {...step} />)
    : items.map((step, index) => <Step key={index} {...step} />);
  // const OurFamilyPartnerCarusel = () => {
  //   const [carouselValue, setCarouselValue] = useState(0);
  //   const comments = items?.map((item) => (
  //     <div className={css.carouselItem} key={item.id}>
  //       <Image src={item.img} alt={item.alt} width={item.width} height={item.height} />
  //     </div>
  //   ));

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.partnerInfoBlock}>
          <h2 className={css.partnerHeader}>Trusted by the best</h2>
          <p className={css.partnerSubtitle}>Guardarian powers the leading projects in Web3 industry</p>
        </div>
        <Carousel
          slidesPerPage={1.9}
          slidesPerScroll={1}
          value={carouselValue}
          onChange={setCarouselValue}
          slides={steps}
          breakpoints={{
            414: {
              slidesPerPage: 2.1,
            },
            393: {
              slidesPerPage: 1.9,
            },
            375: {
              slidesPerPage: 1.85,
            },
            360: {
              slidesPerPage: 1.7,
            },
            315: {
              slidesPerPage: 1.4,
            },
            280: {
              slidesPerPage: 1.1,
            },
          }}
        />
        <div className={css.carousel_arrows}>
          <span onClick={() => setCarouselValue((prev) => prev - 1)}>
            <Image src='/leftArrow.svg' alt='leftArrow' width={30} height={25} />
          </span>
          <span onClick={() => setCarouselValue((prev) => prev + 1)}>
            <Image src='/RightArrow.svg' alt='rightArrow' width={30} height={25} />
          </span>
        </div>
        <div className='container'>
          {integrateUs && (
            <Button
              className={cn(css.actionButton, css.actionButton_desktop)}
              onClick={() => router.push('/for-partners')}
            >
              <span>Join our partner family</span>
            </Button>
          )}
        </div>

        {integrateUs && (
          <div className='container'>
            <Button
              className={cn(css.actionButton, css.actionButton_mobile)}
              onClick={() => router.push('/for-partners#contactUsCrypto')}
            >
              <span>Join our partner family</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export { OurFamilyPartnerCarusel };
