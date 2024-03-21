import React from 'react';

import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { Button } from 'components/Button';

import css from './HelpSection.module.scss';

const data = {
  title: 'Find out how Guardarian can help your business:',
  btn_label: 'Contact Us',
  cards: [
    {
      img: '/business-page/advantages/cryptobaked.svg',
      title: 'Crypto-backed prepaid card',
      content: 'Let users spend crypto easily. In-app Integrated crypto-backed prepaid euro cards.',
    },
    {
      img: '/business-page/advantages/fiat-to-crypto.svg',
      title: 'Fiat to crypto gateway',
      content: '200+ cryptocurrencies available for purchase with different payment options.',
    },
  ],
};

export const HelpSection = ({ btnHandler }) => (
  <section className={css.section}>
    <div className='container'>
      <Title tag='h2' className={css.title}>
        {data.title}
      </Title>

      <div className={css.cards}>
        {data.cards.map((item) => (
          <div className={css.card} key={item.title}>
            <div className={css.cardIcon}>
              <img src={item.img} alt='' />
            </div>

            <div className={css.cardContent}>
              <Title className={css.cardTitle} size='sm'>
                {item.title}
              </Title>
              <Text fontWeight='light' size='md'>
                {item.content}
              </Text>
            </div>
          </div>
        ))}
      </div>

      <div className={css.footer}>
        <Button green onClick={btnHandler} className={css.btn}>
          <Text tag='span' size='md' fontWeight='medium'>
            {data.btn_label}
          </Text>
        </Button>
      </div>
    </div>
  </section>
);
