import React from 'react';
import Link from 'next/link';

import { breakpoints, useBreakPoint } from 'hooks/useResponsive';

import { Text } from 'components/Text';
import { Title } from 'components/Title';
import css from './CoinsToExchange.module.scss';

export const CoinsToExchange = () => {
  const breakpoint = useBreakPoint();
  const isResponsive = breakpoint === breakpoints.xs;

  return (
    <div>
      <div className='container'>
        <div className={css.CoinsToExchange}>
          <img className={css.image} src={isResponsive ? '/coins-mobile.png' : '/coins.png'} alt='Coins' />
          <div className={css.content}>
            <Title className={css.title} size='xl' tag='h2'>
              250+ coins to exchange
            </Title>
            <Text className={css.body} fontWeight='light' size='md'>
              We are passionate about crypto and we love partnering with new and exciting projects to offer new coins on
              our exchange. Go through our vast list of exchangeable assets!
            </Text>
            <div className={css.buttonContainer}>
              <Link href='/currencies'>
                <button type='button' className={css.button}>
                  All Currencies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
