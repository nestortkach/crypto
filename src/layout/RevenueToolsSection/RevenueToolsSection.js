import React, { useState } from 'react';
import Image from 'next/image';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import Link from 'next/link';
import { useBreakPoint } from 'hooks/useResponsive';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import css from './RevenueToolsSection.module.scss';
import { useResponsiveData } from '../../hooks/useResponsiveData';
import { Button } from 'components/Button';

const desktopData = [
  {
    title: 'Widget',
    subtitle: 'With an easy integration you can start earning revenue in just 10 minutes!',
    linkTitle: 'Widget Info',
    img: '/revenue-tools/widget.svg',
    href: '/integrate-us',
    alt: 'widget',
    width: 151,
    height: 172,
  },
  {
    title: 'API',
    subtitle: 'A non-custodial gateway that makes accepting payments incredibly easy for your business!',
    linkTitle: 'API Doc',
    img: '/revenue-tools/api.svg',
    href: '/api-doc',
    alt: 'api',
    width: 77,
    height: 156,
  },
  {
    title: 'B2B Exchange',
    subtitle: 'Make large crypto payments and keep track of your transactions with ease!',
    linkTitle: 'Learn More',
    img: '/revenue-tools/b2b.svg',
    href: '/business',
    alt: 'b2b',
    width: 244,
    height: 143,
  },
  {
    title: 'Crypto Cards',
    subtitle: 'Guardarian’s crypto cards allow your users to spend their crypto anywhere at anytime!',
    linkTitle: 'Card info',
    img: '/revenue-tools/crypto-card.svg',
    href: 'crypto-card',
    alt: 'rypto-card',
    width: 200,
    height: 149,
  },
];

const mobileData = [
  {
    title: 'Widget',
    subtitle: 'With an easy integration you can start earning in just 10 minutes!',
    linkTitle: 'Widget Info',
    img: '/revenue-tools/widget-mobile.svg',
    href: '/widget',
    alt: 'qwidget-mobile',
    width: 151,
    height: 172,
  },
  {
    title: 'API',
    subtitle: 'A non-custodial gateway that makes payments easy!',
    linkTitle: 'API Doc',
    img: '/revenue-tools/api-mobile.svg',
    href: '/api-doc',
    alt: 'api-mobile',
    width: 151,
    height: 172,
  },
  {
    title: 'B2B Exchange',
    subtitle: 'Make large crypto payments and keep track of your transactions!',
    linkTitle: 'Learn More',
    img: '/revenue-tools/b2b-mobile.svg',
    href: '/business',
    alt: 'b2b-mobile',
    width: 151,
    height: 172,
  },
  {
    title: 'Crypto Cards',
    subtitle: 'Let your users spend their crypto anywhere at anytime!',
    linkTitle: 'Card info',
    img: '/revenue-tools/crypto-card-mobile.svg',
    href: 'crypto-card',
    alt: 'crypto-card-mobile',
    width: 151,
    height: 172,
  },
];

const el = () => window.document.getElementById('contactUsCrypto');
const scrollToContact = () => window.scrollTo({ top: el().offsetTop, behavior: 'smooth' });

const RevenueToolsSection = () => {
  const data = useResponsiveData({
    init: [],
    desktopData,
    mobileData,
  });
  const [value, setValue] = useState(0);
  const breakpoint = useBreakPoint();
  return (
    <div className={css.section}>
      <div className='container'>
        <Title className={css.title}>Revenue tools</Title>

        {breakpoint !== 'mobile' && (
          <Text tag='p' className={css.subtitle} fontWeight='light'>
            Have a look at our exceptional solutions to take your crypto projects to the next level!
          </Text>
        )}
        <div className={css.cards}>
          {breakpoint !== 'mobile' &&
            data.map((card) => (
              <div className={css.card} key={card.title}>
                <div className={css.card_content}>
                  <Text tag='h3' className={css.card_content_title}>
                    {card.title}
                  </Text>
                  <Text tag='p' className={css.card_content_subtitle}>
                    {card.subtitle}
                  </Text>
                  <Link href={card.href}>
                    <button type='button' className={css.card_content_button}>
                      {card.linkTitle}{' '}
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M11.293 17.293L12.707 18.707L19.414 12L12.707 5.29297L11.293 6.70697L15.586 11H6V13H15.586L11.293 17.293Z'
                          fill='#5583FF'
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div className={css.card_img}>
                  <Image src={card.img} alt={card.alt} width={card.width} height={card.height} />
                </div>
              </div>
            ))}
          {breakpoint === 'mobile' && (
            <>
              <Carousel
                value={value}
                onChange={setValue}
                slides={data.map((card) => (
                  <div className={css.card} key={card.title}>
                    <div className={css.card_content}>
                      <Text className={css.card_content_title}>{card.title}</Text>
                      <Text className={css.card_content_subtitle}>{card.subtitle}</Text>
                    </div>
                    <div className={css.card_img}>
                      <img src={card.img} alt={card.alt} />
                    </div>
                  </div>
                ))}
              />
              <Dots number={data.length} value={value} className={css.dots} onChange={setValue} />
            </>
          )}
        </div>
        {breakpoint !== 'mobile' && (
          <div className={css.button_container}>
            <Button fullWidth size='md' darkBlue onClick={scrollToContact} type='button' className={css.button}>
              Become a partner
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export { RevenueToolsSection };
