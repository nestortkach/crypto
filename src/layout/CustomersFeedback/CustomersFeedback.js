import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import css from './CustomersFeedback.module.scss';
import { useBreakPoint } from 'hooks/useResponsive';
import Carousel from '@brainhubeu/react-carousel';

const items = [
  {
    id: 1,
    name: 'Jan B',
    location: 'Germany',
    desc: (
      <p className={css.commentDesc}>
        Good customer service. Had a minor issue with my account but they resolved it very fast.
      </p>
    ),
    count: 5,
  },
  {
    id: 2,
    name: 'Louis T',
    location: 'Great Britain',
    desc: (
      <p className={css.commentDesc}>
        This is so unexpected. Bought KISHU and SHIB & both transactions took less than 5 minutes straight into my
        wallet. Thank you very, very much!
      </p>
    ),
    count: 5,
  },
  {
    id: 3,
    name: 'Bruce A',
    location: 'Netherlands',
    desc: (
      <p className={css.commentDesc}>
        Good experience. It takes up to 10 minutes to buy LINK via credit card. They really have a lot of coins to buy
        for fiat.
      </p>
    ),
    count: 5,
  },
];

const Stars = ({ count }) => (
  <div className={css.starsContainer}>
    {Array(count)
      .fill('')
      .map((el, i) => (
        <img key={i} src='star-rate.svg' alt='Star' width='16.7px' height='16.7px' />
      ))}
    {Array(5 - count)
      .fill('')
      .map((el, i) => (
        <img key={i} src='star-rate.svg' alt='Star' style={{ width: '20.7px', height: '18.7px' }} />
      ))}
  </div>
);

const Item = ({ desc, count, name, location }) => (
  <div className={css.carouselItem}>
    <div className={css.commentHeading}>
      <h3>{name}</h3>
      <Stars count={count} />
    </div>
    <p className={css.commentDesc}>{desc}</p>
    <div className={css.location}>
      <img src='bsx-point.svg' alt='Star' width='16.7px' height='16.7px' />
      <p>{location}</p>
    </div>
  </div>
);

const CustomersFeedback = memo(() => {
  const [carouselValue, setCarouselValue] = useState(0);
  const breakpoint = useBreakPoint();

  const comments = items.map((item) => <Item key={item.id} {...item} />);
  return (
    <div className={css.section}>
      <div className={css.wrapper}>
        <div className={css.trustpilotSection}>
          <div className={css.container}>
            <h2 className={css.heading}>What our customers say about us</h2>
            <div className={css.trustpilotContaienr}>
              {breakpoint === 'mobile' && 'tablet' ? (
                <div className={css.comentsContainer}>
                  <div className={css.carouselContainer}>
                    <Carousel
                      slidesPerPage={1.03}
                      slidesPerScroll={1}
                      value={carouselValue}
                      onChange={setCarouselValue}
                      slides={comments}
                    />
                  </div>
                  <div className={css.carousel_arrows}>
                    <div className={css.leftArrowDesktop} onClick={() => setCarouselValue((prev) => prev - 1)}>
                      <img src='/leftCarouselArrow.svg' />
                    </div>
                    <div className={css.rightArrowDesktop} onClick={() => setCarouselValue((prev) => prev + 1)}>
                      <img src='/rightCarouselArrow.svg' />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={css.comentsContainer}>
                  <div className={css.carouselContainer}>{comments}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

CustomersFeedback.displayName = 'CustomersFeedback';

export { CustomersFeedback };
