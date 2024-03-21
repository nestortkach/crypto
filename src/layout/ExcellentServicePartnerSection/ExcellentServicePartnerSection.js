import React, { useEffect, useState } from 'react';
import { Title } from 'components/Title';
import { useBreakPoint } from 'hooks/useResponsive';
import { StepCard } from './StepCard';

import css from './ExcellentServicePartnerSection.module.scss';

const desktopData = {
  title: 'Excellent service for your business',
  features: [
    {
      img: {
        path: '/partner/excellent/integration.svg',
        alt: 'Fast Integration',
      },
      title: ['Fast', 'integration'],
    },
    {
      img: {
        path: '/partner/excellent/customisable.svg',
        alt: 'Customisable Products',
      },
      title: ['Customisable', 'products'],
    },
    {
      img: {
        path: '/partner/excellent/large-selection.svg',
        alt: 'Large Selection of Popular Coins',
      },
      title: ['Large selection', 'of coins'],
    },
    {
      img: {
        path: '/partner/excellent/transparent.svg',
        alt: 'Transparent rates fees',
      },
      title: ['Transparent', 'rates & fees'],
    },
    {
      img: {
        path: '/partner/excellent/best-support.svg',
        alt: 'Best support, which will handle all your cases',
      },
      title: ['Best support on', 'the market'],
    },
    {
      img: {
        path: '/partner/excellent/high-conversion.svg',
        alt: 'High conversion rate',
      },
      title: ['High conversion', 'rate'],
    },
  ],
};

const mobileData = {
  title: 'Excellent service',
  features: [
    {
      img: {
        path: '/partner/excellent/integration.svg',
        alt: 'Fast Integration',
      },
      title: ['Fast', 'Integration'],
    },
    {
      img: {
        path: '/partner/excellent/customisable.svg',
        alt: 'Customisable Products',
      },
      title: ['Customisable', 'Products'],
    },
    {
      img: {
        path: '/partner/excellent/large-selection.svg',
        alt: 'Large Selection of Coins',
      },
      title: ['Large Selection', 'of Coins'],
    },
    {
      img: {
        path: '/partner/excellent/transparent.svg',
        alt: 'Transparent Rates Fees',
      },
      title: ['Transparent', 'Rates & Fees'],
    },
    {
      img: {
        path: '/partner/excellent/best-support.svg',
        alt: 'Best support on the market',
      },
      title: ['Best support on', 'the market'],
    },
    {
      img: {
        path: '/partner/excellent/high-conversion.svg',
        alt: 'High conversion rate',
      },
      title: ['High conversion', 'rate'],
    },
  ],
};
function ExcellentServicePartnerSection() {
  const [data, setData] = useState({ features: [] });
  const cards = data.features.map((step) => <StepCard key={step.img.alt} {...step} />);
  const breakpoint = useBreakPoint();

  useEffect(() => {
    if (breakpoint === 'mobile') setData(mobileData);
    else setData(desktopData);
  }, [breakpoint]);

  return (
    <section className={css.servicesSection}>
      <Title className={css.heading}>{data.title}</Title>
      <div className={css.stepRow}>{cards}</div>
    </section>
  );
}

export { ExcellentServicePartnerSection };
