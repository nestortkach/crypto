import React, { useState } from 'react';
import { Button } from '../../../../components/Button';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import { useBreakPoint } from 'hooks/useResponsive';
import Carousel from '@brainhubeu/react-carousel';

import css from './pressOurLatest.module.scss';

const ourLatestItems = [
  {
    img: '/press/card-announcement.webp',
    alt: 'card-here',
    description: 'Guardarian Crypto Card Is Here',
    link: 'https://guardarian.com/blog/guardarian-crypto-card-is-here/',
    id: 0,
  },
  {
    img: '/press/myneo-announcement.webp',
    alt: 'my-neo',
    description: 'Guardarian x My Neo Group strike a strategic partnership',
    link: 'https://guardarian.com/blog/guardarian-partners-up-with-my-neo-group/',
    id: 1,
  },
  {
    img: '/press/america-anouncement.webp',
    alt: 'usa-btc',
    description: 'Guardarian Enters the US Market',
    link: 'https://guardarian.com/blog/guardarian-enters-the-us-market/',
    id: 2,
  },
];

export default function index() {
  const breakpoint = useBreakPoint();
  const [carouselValue, setCarouselValue] = useState(0);
  const comments = ourLatestItems.map((item) => (
    <Link key={item.id} href={item.link}>
      <div key={item.id} className={css.imgSection_Item}>
        <img src={item.img} alt={item.alt} style={{ width: '264px', height: '130px' }} />
        <p>{item.description}</p>
      </div>
    </Link>
  ));
  return (
    <div className={css.ourLatestWrapper}>
      <section className={css.ourLatestContainer}>
        <h2>Our latest news and updates</h2>
        <p>Read about our latest updates, new features, industry news & more on our blog! </p>
        {breakpoint === 'laptop' ? (
          <div className={css.imgSection}>
            {ourLatestItems.map((item) => (
              <Link key={item.id} href={item.link}>
                <div className={css.imgSection_Item}>
                  <img src={item.img} alt={item.alt} />
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={css.imgSection}>
            <Carousel
              slidesPerPage={1}
              slidesPerScroll={1}
              value={carouselValue}
              onChange={setCarouselValue}
              slides={comments}
            />
            <div className={css.carousel_arrows}>
              <span onClick={() => setCarouselValue((prev) => prev - 1)}>
                <Image src='/leftArrow.svg' alt='leftArrow' width={30} height={25} />
              </span>
              <span onClick={() => setCarouselValue((prev) => prev + 1)}>
                <Image src='/RightArrow.svg' alt='rightArrow' width={30} height={25} />
              </span>
            </div>
          </div>
        )}
        <Link href='https://guardarian.com/blog/'>
          <Button className={css.ourLatestBtn} lightGreen>
            Read Blog
          </Button>
        </Link>
      </section>
    </div>
  );
}
