import React, { useState, useMemo } from 'react';
import { Button } from 'components/Button';
import { useBreakPoint } from 'hooks/useResponsive';
import Carousel from '@brainhubeu/react-carousel';
import Image from 'next/dist/client/image';
import css from './chooseCard.module.scss';

export const ChooseCard = ({ executeScroll }) => {
  const [carouselValue, setCarouselValue] = useState(0);

  const breakpoint = useBreakPoint();

  const data = useMemo(
    () => [
      <div key='plastic-card' className={css.plastic}>
        <h3>Plastic Card</h3>
        <ul>
          <li>
            <p className={css.descItem}>Card issuing</p>
            <div className={css.row_withGap}>
              <p>40 EUR</p>
              <p className={css.bonus}> 20€ Bonus!</p>
            </div>
          </li>
          <li>
            <p className={css.descItem}>Monthly fee</p>
            <p>3 EUR</p>
          </li>
          <li>
            <p className={css.descItem}>Online transaction fee</p>
            <p>0 EUR</p>
          </li>
          <li>
            <p className={css.descItem}>Online daily limit</p>
            <p>15,000 EUR</p>
          </li>
          <li>
            <p className={css.descItem}>ATM disbursement Fee</p>
            <p>1.9 EUR + 2.5%</p>
          </li>
          <li>
            <p className={css.descItem}>ATM daily withdrawal limit</p>
            <p>500 EUR</p>
          </li>
          <li>
            <p className={css.descItem}>Card top-up fee</p>
            <p>0.5%</p>
          </li>
          <li>
            <p className={css.descItem}>Cash-back</p>
            <p className={css.bonus}>
              1% <span>&#128176;</span>
            </p>
          </li>
          <li>
            <p className={css.descItem}>Foreign currency exchange fee</p>
            <p>2.5%</p>
          </li>
        </ul>
        <Button onClick={executeScroll} className={css.chooseBtn} lightGreen>
          <span>Choose</span>
        </Button>
      </div>,
      <div key='virtual-card' className={css.virtual}>
        <h3>Virtual Card</h3>
        <ul>
          <li>
            <p className={css.descItem}>Card issuing</p>
            <div className={css.row_withGap}>
              <p>35 EUR</p>
              <p className={css.bonus}>20€ Bonus!</p>
            </div>
          </li>
          <li>
            <p className={css.descItem}>Monthly fee</p>
            <p>3 EUR</p>
          </li>
          <li>
            <p className={css.descItem}>Online transaction fee</p>
            <p>0 EUR</p>
          </li>
          <li>
            <p className={css.descItem}>Online daily limit</p>
            <p>15,000 EUR</p>
          </li>
          <li>
            <p className={css.descItem}>ATM disbursement Fee</p>
            <p>-</p>
          </li>
          <li>
            <p className={css.descItem}>ATM daily withdrawal limit</p>
            <p>-</p>
          </li>
          <li>
            <p className={css.descItem}>Card top-up fee</p>
            <p>0.5%</p>
          </li>
          <li>
            <p className={css.descItem}>Cash-back</p>
            <p className={css.bonus}>
              1% <span>&#128176;</span>
            </p>
          </li>
          <li>
            <p className={css.descItem}>Foreign currency exchange fee</p>
            <p>2.5%</p>
          </li>
        </ul>
        <Button onClick={executeScroll} className={css.chooseBtn} lightGreen>
          <span>Choose</span>
        </Button>
      </div>,
    ],
    [],
  );
  return (
    <section className={css.section}>
      <div className={['container', css.wrapper].join(' ')}>
        <h2 className={css.title}>
          <div className={css.box}>
            Choose Your ideal{' '}
            <span className={css.boxx}>
              <img src='/services/logo-crypto-card-section.png' className={css.logo} />
              -Card
            </span>
          </div>
        </h2>

        <p className={css.description}>Plastic and Virtual cards available - each with its own benefits!</p>
        {breakpoint !== 'laptop' ? (
          <div className={css.content}>
            <Carousel
              slidesPerPage={1}
              slidesPerScroll={1}
              value={carouselValue}
              onChange={setCarouselValue}
              slides={data}
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
        ) : (
          <div className={css.content}>
            <div className={css.feature}>
              <h3>Card Features</h3>
              <ul>
                <li>
                  <p>Card issuing</p>
                </li>
                <li>
                  <p>Monthly fee</p>
                </li>
                <li>
                  <p>Online transaction fee</p>
                </li>
                <li>
                  <p>Online daily limit</p>
                </li>
                <li>
                  <p>ATM disbursement Fee</p>
                </li>
                <li>
                  <p>ATM daily withdrawal limit</p>
                </li>
                <li>
                  <p>Card top-up fee</p>
                </li>
                <li>
                  <p>Cash-back</p>
                </li>
                <li>
                  <p>Foreign currency exchange fee</p>
                </li>
              </ul>
            </div>
            {data.map((item) => item)}
          </div>
        )}
      </div>
    </section>
  );
};
