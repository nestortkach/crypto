import React, { useEffect, useState } from 'react';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { useBreakPoint } from 'hooks/useResponsive';
import { Button } from 'components/Button';
import { StepCard } from './StepCard';

import css from './SetToStartSellingSection.module.scss';

const items = [
  {
    img: {
      path: '/next-step.svg',
      pathMobile: '/next-step-mobile.svg',
      alt: 'Sign Agreement',
    },
    title: ['Sign Agreement'],
  },
  {
    img: {
      path: '/next-step.svg',
      pathMobile: '/next-step-mobile.svg',
      alt: 'Build Own UI',
    },
    title: ['Build Own UI'],
  },
  {
    img: {
      path: '/next-step.svg',
      pathMobile: '/next-step-mobile.svg',
      alt: 'Integrate API',
    },
    title: ['Integrate API'],
  },
  {
    img: {
      path: '/last-step.svg',
      pathMobile: '/last-step-mobile.svg',
      alt: 'Distribute Cards',
      routeOnMobile: false,
    },
    title: ['Distribute Cards!'],
  },
];

const desktopData = {
  title: 'Steps to start selling cards',
  subtitle: 'Start selling your cards completely free of charge - no need to buy cards in advance for partners!',
};
const mobileData = {
  title: 'Start selling cards',
};

const el = () => window.document.getElementById('contactUsCrypto');
const scrollToContact = () => window.scrollTo({ top: el().offsetTop, behavior: 'smooth' });

function SetToStartSellingSection({ handlePopupOpen }) {
  const [steps, setSteps] = useState([]);

  const [data, setData] = useState({});
  const breakpoint = useBreakPoint();
  useEffect(() => {
    if (breakpoint === 'mobile') {
      setData(mobileData);
      setSteps(
        items.map((c) => ({
          ...c,
          img: {
            ...c.img,
            path: c.img.pathMobile,
          },
        })),
      );
    } else {
      setSteps(items);
      setData(desktopData);
    }
  }, [breakpoint]);

  const cards = steps.map((step) => <StepCard key={step.img.alt} {...step} />);

  return (
    <section className={css.servicesSection}>
      <Title className={css.heading}>{data.title}</Title>
      <Text tag='p' fontWeight='light' className={css.subHeading}>
        {data.subtitle}
      </Text>

      <div className={css.stepRow}>{cards}</div>
      {breakpoint === 'mobile' && (
        <div className={css.buttonContainer}>
          <Button
            fullWidth
            size='md'
            darkBlue
            onClick={breakpoint === 'mobile' ? handlePopupOpen : scrollToContact}
            type='button'
            className={css.button}
          >
            Request card
          </Button>
        </div>
      )}
    </section>
  );
}

export { SetToStartSellingSection };
