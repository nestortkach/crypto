import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { useBreakPoint } from 'hooks/useResponsive';
import css from './CardSolutionSection.module.scss';

const dataDesktop = {
  title: 'Choose the card solution suitable for you',
  solutions: [
    {
      img: 'crypto-card/solution-cards.svg',
      title: 'Plastic Cards',
      subtitle:
        'Guardarian crypto cards are excellent for making in-store purchases and can be used at any POS system. One of the greatest perks of physical cards is that you can take them anywhere and they can be used all over the globe. Let your users spend their crypto and use our secure solution to set spending limits and manage all of your subscribed customers.',
      button: 'Request Plastic Card',
      width: 446,
      height: 263,
    },
    {
      img: 'crypto-card/solution-mobile.svg',
      title: 'Virtual Cards',
      subtitle:
        "Virtual cards give your customers the ability to make quick and easy payments through their phones and computers to shop anywhere online. There's no need to wait for the card delivery, users are given instant use for the service. It’s very easy to use and there’s no way for the card to be lost. Our virtual cards are a great convenient solution with no cost for production!",
      button: 'Request Virtual Card',
      width: 460,
      height: 272,
    },
  ],
};

const dataMobile = {
  title: 'Choose your solution',
  solutions: [
    {
      img: 'crypto-card/solution-cards.svg',
      title: 'Plastic Cards',
      subtitle:
        'Guardarian crypto cards are excellent for making in-store purchases and can be used at any POS system. One of the greatest perks of physical cards is that you can take them anywhere and they can be used all over the globe. Let your users spend their crypto and use our secure solution to set spending limits and manage all of your subscribed customers.',
      button: 'Request Plastic Card',
      width: 513,
      height: 303,
    },
    {
      img: 'crypto-card/solution-mobile.svg',
      title: 'Virtual Cards',
      subtitle:
        "Virtual cards give your customers the ability to make quick and easy payments through their phones and computers to shop anywhere online. There's no need to wait for the card delivery, users are given instant use for the service. It’s very easy to use and there’s no way for the card to be lost. Our virtual cards are a great convenient solution with no cost for production!",
      button: 'Request Virtual Card',
      width: 513,
      height: 303,
    },
  ],
};

const el = () => window.document.getElementById('contactUsCrypto');
const scrollToContact = () => window.scrollTo({ top: el().offsetTop, behavior: 'smooth' });

const CardSolutionSection = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState({ solutions: [] });
  const breakpoint = useBreakPoint();

  useEffect(() => {
    if (breakpoint === 'mobile') setData(dataMobile);
    else setData(dataDesktop);
  }, [breakpoint]);

  return (
    <section className={css.container}>
      <div className='container'>
        <Title className={css.title}>{data.title}</Title>
        <div className={css.solutions}>
          {breakpoint !== 'mobile' &&
            data.solutions.map((solution) => (
              <div className={css.solution} key={solution.title}>
                <Image
                  src={`/${solution.img}`}
                  alt={solution.title}
                  className={css.img}
                  width={solution.width}
                  height={solution.height}
                />
                <Title className={css.solution_title}>{solution.title}</Title>
                <Text tag='p' fontWeight='light' className={css.solution_subtitle}>
                  {solution.subtitle}
                </Text>
                <button type='button' onClick={scrollToContact} className={css.solution_button}>
                  <Text fontWeight='medium' className={css.solution_button_text}>
                    {solution.button}
                  </Text>
                  <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M11.293 17.6172L12.707 19.0312L19.414 12.3242L12.707 5.61719L11.293 7.03119L15.586 11.3242H6V13.3242H15.586L11.293 17.6172Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </div>
            ))}
          {breakpoint === 'mobile' && (
            <>
              <Carousel
                value={value}
                onChange={setValue}
                slides={data.solutions.map((solution) => (
                  <div className={css.solution} key={solution.title}>
                    <Image
                      src={`/${solution.img}`}
                      alt={solution.title}
                      className={css.img}
                      width={solution.width}
                      height={solution.height}
                    />
                    <Title className={css.solution_title}>{solution.title}</Title>
                    <Text tag='p' fontWeight='light' className={css.solution_subtitle}>
                      {solution.subtitle}
                    </Text>
                  </div>
                ))}
              />
              <Dots className={css.dots} value={value} onChange={setValue} number={data.solutions.length} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export { CardSolutionSection };
