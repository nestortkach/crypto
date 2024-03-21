import React from 'react';
import Image from 'next/image';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';

import css from './CustomerExpSection.module.scss';

const data = {
  title: 'We believe that a great customer experience is the main point of growth',
  subtext: 'So we spare no effort to provide the best service for our Partners and their clients',
  img: '/customer-xp.svg',
  mob_img: '/customer-xp-mob.svg',
};

export const CustomerExpSection = () => {
  const breakpoint = useBreakPoint();
  const isMobile = breakpoint === breakpoints.xs;

  return (
    <section className={css.section}>
      <div className='container'>
        <div className={css.content}>
          <Title className={css.title}>{data.title}</Title>

          <div className={css.imgWrap}>
            <Image src={isMobile ? data.mob_img : data.img} width={509} height={295} alt='customer-xp' />
          </div>

          <Text tag='p' fontWeight='medium' size='lg' className={css.subtext}>
            {data.subtext}
          </Text>
        </div>
      </div>
    </section>
  );
};
