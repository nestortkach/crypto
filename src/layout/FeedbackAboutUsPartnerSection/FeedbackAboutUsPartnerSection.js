import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { useBreakPoint } from 'hooks/useResponsive';
import { ArrowRight } from 'components/Icons/ArrowRight';
import { ArrowLeft } from 'components/Icons/ArrowLeft';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import classNames from 'classnames';
import { useResponsiveData } from 'hooks/useResponsiveData';
import { Button } from 'components/Button';
import css from './FeedbackAboutUsPartnerSection.module.scss';

const itemsDesktop = [
  {
    img: '/partner/feedback/guarda.svg',
    imgBottom: '/partner/feedback/guarda-bottom.svg',
    alt: 'guarda',
    title: 'Artem Kirillov',
    desc: 'One of Guarda’s main goals is to provide the best service possible for all the crypto users out there. When it comes to fiat on-ramps, our pal Guardarian helps us to achieve this goal. Low fees, fast approval, and whatever the needs our users may have they are fully satisfied. Guardarian is definitely on the right track!',
    bottomTitle: 'COO at Guarda Wallet',
    linkedin: 'https://www.linkedin.com/in/artem-kirillov-72060855/',
    style: {
      background: 'linear-gradient(252.44deg, #000756 0%, #0042B8 100%)',
      width: 133,
      height: 132,
    },
  },
  {
    img: '/partner/feedback/changeNow.svg',
    imgBottom: '/partner/feedback/changeNow-bottom.svg',
    alt: 'change-now',
    title: 'Pauline Shangett',
    desc: 'Guardarian has been our partner since the very beginning. We are tremendously proud of our efficient cooperation and extremely grateful to Guardarian for their smooth and user-oriented service. We appreciate their professional approach and the way they keep their communication timely and polite. Keep up the good work!',
    bottomTitle: 'CBDO at ChangeNOW',
    linkedin: 'https://www.linkedin.com/in/pauline-shangett-645139169',
    style: {
      background: 'linear-gradient(252.44deg, #01BA6A 0%, #000000 100%)',
      width: 133,
      height: 132,
    },
  },
  {
    img: '/partner/feedback/atomicWallet.svg',
    imgBottom: '/partner/feedback/atomicWallet-bottom.svg',
    alt: 'atomic-wallet',
    title: 'Konstantin Osipov',
    desc: 'Up to this moment, Guardarian is our business partner for more than 6 months. We are pleased and satisfied to work with Guardarian. Let me point out transparent and clear business flow, fast and efficient communications, good and client-oriented services. I’m sure that we will continue and grow up our collaboration.',
    bottomTitle: 'COO at Atomic Wallet',
    linkedin: 'https://www.linkedin.com/in/konstantin-osipov-75bb2026/',
    style: {
      background: 'linear-gradient(252.44deg, #3692FE 0%, #000000 100%)',
      width: 133,
      height: 132,
    },
  },
];
const itemsMobile = [
  {
    img: '/partner/feedback/guarda.svg',
    imgBottom: '/partner/feedback/guarda-bottom.svg',
    alt: 'guarda',
    title: 'Artem Kirillov',
    desc: 'One of Guarda’s main goals is to provide the best service possible for all the crypto users out there. When it comes to fiat on-ramps, our pal Guardarian helps us to achieve this goal. Low fees, fast approval, and whatever the needs our users may have they are fully satisfied. Guardarian is definitely on the right track!',
    bottomTitle: 'COO at Guarda Wallet',
    linkedin: 'https://www.linkedin.com/in/artem-kirillov-72060855/',
    style: {
      background: 'linear-gradient(252.44deg, #000756 0%, #0042B8 100%)',
      width: 133,
      height: 132,
    },
  },
  {
    img: '/partner/feedback/changeNow.svg',
    imgBottom: '/partner/feedback/changeNow-bottom.svg',
    alt: 'change-now',
    title: 'Pauline Shangett',
    desc: 'Guardarian has been our partner since the very beginning. We are tremendously proud of our efficient cooperation and extremely grateful to Guardarian for their smooth and user-oriented service. We appreciate their professional approach and the way they keep their communication timely and polite. Keep up the good work!',
    bottomTitle: 'CBDO at ChangeNOW',
    linkedin: 'https://www.linkedin.com/in/pauline-shangett-645139169',
    style: {
      background: 'linear-gradient(252.44deg, #01BA6A 0%, #000000 100%)',
      width: 133,
      height: 132,
    },
  },
  {
    img: '/partner/feedback/atomicWallet.svg',
    imgBottom: '/partner/feedback/atomicWallet-bottom.svg',
    alt: 'atomic-wallet',
    title: 'Konstantin Osipov',
    desc: 'Up to this moment, Guardarian is our business partner for more than 6 months. We are pleased and satisfied to work with Guardarian. Let me point out transparent and clear business flow, fast and efficient communications, good and client-oriented services. I’m sure that we will continue and grow up our collaboration.',
    bottomTitle: 'COO at Atomic Wallet',
    linkedin: 'https://www.linkedin.com/in/konstantin-osipov-75bb2026/',
    style: {
      background: 'linear-gradient(252.44deg, #3692FE 0%, #000000 100%)',
      width: 133,
      height: 132,
    },
  },
];

const Step = ({ img, imgBottom, alt, title, desc, bottomTitle, style, linkedin }) => (
  <div key={img} className={css.partner}>
    <div className={css.top}>
      <div className={css.top_image_container}>
        <Image className={css.top_image} src={img} alt={alt} width={style.width} height={style.height} />
        <a href={linkedin} className={css.linkedin} target='_blank' rel='noreferrer'>
          <Image src='/partner/feedback/linkedin.svg' alt='linkedin' width={40} height={40} />
        </a>
      </div>
      <Text tag='h3' fontWeight='bold' className={css.top_title}>
        {title}
      </Text>
      <Text tag='p' fontWeight='light' className={css.top_desc}>
        {desc}
      </Text>
    </div>
    <div className={css.bottom} style={{ background: style.background }}>
      <Image src={imgBottom} alt={alt} className={css.bottom_image} width={49} height={49} />
      <Text className={css.bottom_title}>{bottomTitle}</Text>
    </div>
  </div>
);
const FeedbackAboutUsPartnerSection = ({ handlePopupOpen }) => {
  const [value, setValue] = useState(0);
  const items = useResponsiveData({
    init: [],
    desktopData: itemsDesktop,
    mobileData: itemsMobile,
  });
  const [slidesPerPage, setSlidesPerPage] = useState(4);
  const steps = items.map((step) => <Step key={step.title} {...step} />);
  const breakpoint = useBreakPoint();
  useEffect(() => {
    if (breakpoint === 'laptop') setSlidesPerPage(2);
    if (['tablet', 'mobile'].includes(breakpoint)) setSlidesPerPage(1);
  }, [breakpoint]);
  return (
    <div className={css.howToBuySection}>
      <div className={classNames('container', css.container)}>
        <Title className={css.heading}>Feedback about us</Title>
        <div className={css.carousel}>
          <Carousel
            arrowLeft={<ArrowLeft name='arrow-left' onClick={() => setValue((prev) => prev - 1)} />}
            arrowRight={<ArrowRight name='arrow-right' onClick={() => setValue((prev) => prev + 1)} />}
            slidesPerPage={slidesPerPage}
            value={value}
            onChange={setValue}
            slides={steps}
            breakpoints={{
              767: {
                arrowLeft: undefined,
                arrowRight: undefined,
              },
            }}
          />
          <div className={css.carousel_dots}>
            <Dots value={value} onChange={setValue} number={items.length} />
          </div>
        </div>
        {breakpoint === 'mobile' && (
          <div className={css.buttonContainer}>
            <Button fullWidth size='md' darkBlue onClick={handlePopupOpen} type='button' className={css.button}>
              Become a partner
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export { FeedbackAboutUsPartnerSection };
