import React from 'react';
import Link from 'next/link';

import { Title } from 'components/Title';
import { Button } from 'components/Button';
import { Text } from 'components/Text';

import css from './HqSection.module.scss';

const data = {
  title: 'Headquarters based in Tallinn',
  subtext: (
    <>
      <p>We unite highly experienced specialists from all over the world to create great products</p>
      <p>Become a part of the multinational team</p>
    </>
  ),
  btn_label: 'Current openings',
};

export const HqSection = () => (
  <section className={css.section}>
    <div className='container'>
      <div className={css.content}>
        <Title className={css.title}>{data.title}</Title>

        <div className={css.mapBlock} />

        <Text size='md' className={css.subtext}>
          {data.subtext}
        </Text>

        <footer className={css.footer}>
          <Link href='/jobs/junior-customer-support-manager'>
            <span>
              <Button green className={css.btn}>
                {data.btn_label}
              </Button>
            </span>
          </Link>
        </footer>
      </div>
    </div>
  </section>
);
