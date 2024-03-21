import React, { useState } from 'react';
import { Button } from '../../../../components/Button';
import css from './PressTweetsAboutUs.module.scss';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import Carousel from '@brainhubeu/react-carousel';

import { useBreakPoint } from 'hooks/useResponsive';

const idItems = [
  {
    twittImg: '/press/twiits/andy-tweet.webp',
    link: 'https://twitter.com/German_TheGraph/status/1556987155716743168?s=20&t=qLG-L0PNjPknW8iLH0kMKA',
    width: 291,
    height: 455,
    id: 0,
  },
  {
    twittImg: '/press/twiits/avax-tweet.webp',
    link: 'https://twitter.com/avaxblog_/status/1526366578484613120?s=20&t=n1-GjkDMY3huYE-5xwE4sA',
    width: 291,
    height: 401,
    id: 1,
  },
  {
    twittImg: '/press/twiits/babydoge-tweet.webp',
    link: 'https://twitter.com/BabyDogeCoin/status/1552638238950625280?s=20&t=rKF70FGEA4dKOOhwuk_OhA',
    width: 291,
    height: 415,
    id: 2,
  },
  {
    twittImg: '/press/twiits/coinex-tweet.webp',
    link: 'https://twitter.com/coinexcom/status/1554761491445850112?s=20&t=JblFu1CYdPLVl7pgd_H_kA',
    width: 291,
    height: 344,
    id: 3,
  },
  {
    twittImg: '/press/twiits/dash-tweet.webp',
    link: 'https://twitter.com/Dashpay/status/1578433222580510720?s=20&t=JblFu1CYdPLVl7pgd_H_kA',
    width: 291,
    height: 478,
    id: 4,
  },
  {
    twittImg: '/press/twiits/defi-tweet.webp',
    link: 'https://twitter.com/Defi_Eagle/status/1556712781902233600?s=20&t=RfXIXcJDqX8ihYwv2lcCbQ',
    width: 291,
    height: 395,
    id: 5,
  },
  {
    twittImg: '/press/twiits/egld-tweet.webp',
    link: 'https://twitter.com/beniaminmincu/status/1559858747392069634?s=20&t=FRGaAfLo_NKOe9P5USYeLg',
    width: 291,
    height: 369,
    id: 6,
  },
  {
    twittImg: '/press/twiits/mrmojo-tweet.webp',
    link: 'https://twitter.com/Toolatebutwhok1/status/1518581330493202433?s=20&t=1hjJkPceXk9NHt_7_ridZQ',
    width: 291,
    height: 419,
    id: 7,
  },
  {
    twittImg: '/press/twiits/nearity-tweet.webp',
    link: 'https://twitter.com/Nearity_org/status/1561945069502222336?s=20&t=tfV-EQn0dveCQBsF3_prHA',
    width: 291,
    height: 509,
    id: 8,
  },
];
export default function index() {
  const [carouselValue, setCarouselValue] = useState(0);
  const breakpoint = useBreakPoint();
  const data = idItems.map((item) => (
    <Link key={item.id} href={item.link}>
      <div className={css.twitt}>
        <img src={item.twittImg} style={{ width: `100%`, height: `${item.height}px` }} alt='twitt' />
      </div>
    </Link>
  ));
  const dataMobile = idItems.map((item) => (
    <Link key={item.id} href={item.link}>
      <div className={css.twitt}>
        <img src={item.twittImg} style={{ width: `${item.width}px`, height: `${item.height}px` }} alt='twitt' />
      </div>
    </Link>
  ));
  return (
    <div className={css.twittsWrapper}>
      <section className={css.twittsContainer}>
        <h2>Tweets about us</h2>
        <p>See what people and communities tweet about Guardarian</p>
        {breakpoint === 'laptop' ? (
          <div className={css.twittsContent}>
            <span onClick={() => setCarouselValue((prev) => prev - 1)}>
              <Image src='/leftArrow.svg' alt='leftArrow' width={30} height={25} />
            </span>
            <Carousel
              slidesPerPage={3}
              slidesPerScroll={1}
              value={carouselValue}
              onChange={setCarouselValue}
              slides={data}
            />
            <span onClick={() => setCarouselValue((prev) => prev + 1)}>
              <Image src='/RightArrow.svg' alt='rightArrow' width={30} height={25} />
            </span>

            {/* <div className={css.twitt}>
              <Link href='https://twitter.com/German_TheGraph/status/1556987155716743168?s=20&t=qLG-L0PNjPknW8iLH0kMKA'>
                <img src='/press/twiits/andy-tweet.webp' style={{ width: '291px', height: '455px' }} alt='twitt' />
              </Link>
              <Link href='https://twitter.com/avaxblog_/status/1526366578484613120?s=20&t=n1-GjkDMY3huYE-5xwE4sA'>
                <img src='/press/twiits/avax-tweet.webp' style={{ width: '291px', height: '401px' }} alt='twitt' />
              </Link>
              <Link href='https://twitter.com/BabyDogeCoin/status/1552638238950625280?s=20&t=rKF70FGEA4dKOOhwuk_OhA'>
                <img src='/press/twiits/babydoge-tweet.webp' style={{ width: '291px', height: '415px' }} alt='twitt' />
              </Link>
            </div>
            <div className={css.twitt}>
              <Link href='https://twitter.com/coinexcom/status/1554761491445850112?s=20&t=JblFu1CYdPLVl7pgd_H_kA'>
                <img src='/press/twiits/coinex-tweet.webp' style={{ width: '291px', height: '344px' }} alt='twitt' />
              </Link>
              <Link href='https://twitter.com/Dashpay/status/1578433222580510720?s=20&t=JblFu1CYdPLVl7pgd_H_kA'>
                <img src='/press/twiits/dash-tweet.webp' style={{ width: '291px', height: '478px' }} alt='twitt' />
              </Link>
              <Link href='https://twitter.com/Defi_Eagle/status/1556712781902233600?s=20&t=RfXIXcJDqX8ihYwv2lcCbQ'>
                <img src='/press/twiits/defi-tweet.webp' style={{ width: '291px', height: '395px' }} alt='twitt' />
              </Link>
            </div>
            <div className={css.twitt}>
              <Link href='https://twitter.com/beniaminmincu/status/1559858747392069634?s=20&t=FRGaAfLo_NKOe9P5USYeLg'>
                <img src='/press/twiits/egld-tweet.webp' style={{ width: '291px', height: '369px' }} alt='twitt' />
              </Link>
              <Link href='https://twitter.com/Toolatebutwhok1/status/1518581330493202433?s=20&t=1hjJkPceXk9NHt_7_ridZQ'>
                <img src='/press/twiits/mrmojo-tweet.webp' style={{ width: '291px', height: '419px' }} alt='twitt' />
              </Link>
              <Link href='https://twitter.com/Nearity_org/status/1561945069502222336?s=20&t=tfV-EQn0dveCQBsF3_prHA'>
                <img src='/press/twiits/nearity-tweet.webp' style={{ width: '291px', height: '509px' }} alt='twitt' />
              </Link>
            </div> */}
          </div>
        ) : (
          <div className={css.twittsContent}>
            <Carousel
              slidesPerPage={1}
              slidesPerScroll={1}
              value={carouselValue}
              onChange={setCarouselValue}
              slides={dataMobile}
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
        <Link href='https://twitter.com/intent/user?screen_name=guardarian_com'>
          <Button className={css.followBtn} lightGreen={true}>
            Follow @guardarian_com
          </Button>
        </Link>
      </section>
    </div>
  );
}
