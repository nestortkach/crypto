import React, { useState, memo } from 'react';

import Carousel from '@brainhubeu/react-carousel';
import { useBreakPoint } from 'hooks/useResponsive';

import css from './TrustpilotSection.module.scss';

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
      <div className={css.commentDesc}>
        This is so unexpected. Bought KISHU and SHIB & both transactions took less than 5 minutes straight into my
        wallet. Thank you very, very much!{' '}
      </div>
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
        <img key={i} src='bxs-star.svg' alt='Star' width='16.7px' height='16.7px' />
      ))}
    {Array(5 - count)
      .fill('')
      .map((el, i) => (
        <img key={i} src='bxs-star.svg' alt='Star' style={{ width: '20.7px', height: '18.7px' }} />
      ))}
  </div>
);

const Item = ({ desc, count, name, location }) => (
  <div className={css.carouselItem}>
    <h3>{name}</h3>
    <Stars count={count} />
    <div>{desc}</div>
    <div className={css.location}>
      <img src='bsx-point.svg' alt='Star' width='16.7px' height='16.7px' />
      <p>{location}</p>
    </div>
  </div>
);

const TrustpilotSection = memo(() => {
  const [carouselValue, setCarouselValue] = useState(0);
  const breakpoint = useBreakPoint();

  const comments = items.map((item) => <Item key={item.id} {...item} />);
  return (
    <div className={css.trustpilotSection}>
      <div className={css.container}>
        <div className={css.trustpilotContaienr}>
          <h2 className={css.heading}>What customers have to say</h2>
          {breakpoint === 'mobile' && 'tablet' ? (
            <div className={css.comentsContainer}>
              <div className={css.carouselContainer}>
                <Carousel
                  slidesPerPage={1}
                  slidesPerScroll={1}
                  value={carouselValue}
                  onChange={setCarouselValue}
                  slides={comments}
                />
              </div>
              <div className={css.carousel_arrows}>
                <div className={css.leftArrowDesktop} onClick={() => setCarouselValue((prev) => prev - 1)}>
                  <img src='left-arrow-trust.webp' />
                </div>
                <div className={css.rightArrowDesktop} onClick={() => setCarouselValue((prev) => prev + 1)}>
                  <img src='right-arrow-trust.webp' />
                </div>
              </div>
            </div>
          ) : (
            <div className={css.comentsContainer}>
              <div className={css.carouselContainer}>{comments}</div>
            </div>
          )}

          <a
            rel='nofollow noreferrer noopener'
            target='_blank'
            href='https://www.trustpilot.com/evaluate/guardarian.com'
            className={css.trustpilotLink}
          >
            <span className={css.trustpilotLinkText}>Give us feedback</span>
            <span>💙</span>
          </a>
        </div>
      </div>
    </div>
  );
});

TrustpilotSection.displayName = 'TrustpilotSection';

export { TrustpilotSection };
