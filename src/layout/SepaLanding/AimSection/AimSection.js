import React from 'react';

import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';

import css from './AimSection.module.scss';

const data = {
  title: 'We aim for marvelous customer experience',
  subtext: 'Best possible rates, transparent procedure, without hidden fees and charges',
  img: '/sepa-aim-section-img.svg',
  mob_img: '/sepa-aim-section-img-mob.svg',
};

export const AimSection = () => {
  const breakpoint = useBreakPoint();
  const isResponsive = breakpoint === breakpoints.xs;

  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.content}>
          <Title className={css.title} size='xl' tag='h2'>
            {data.title}
          </Title>

          <div className={css.imgWrap}>
            <img src={isResponsive ? data.mob_img : data.img} alt='' />
          </div>

          <Text tag='p' size='md' className={css.subtext}>
            {data.subtext}
          </Text>
        </div>
      </div>
    </div>
  );
};
