import React from 'react';

import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { Button } from 'components/Button';

import css from './ContactSection.module.scss';

const data = {
  title: 'Licensed fiat to crypto gateway with more than 300 coins available for B2B clients',
  subtext: 'Find out how Guardarian can help your business',
  btn_label: 'Contact Us',
  img: '/exchange-contact.svg',
};

export const ContactSection = ({ btnHandler }) => (
  <div className={css.component}>
    <div className='container'>
      <div className={css.content}>
        <Title className={css.title} size='md' tag='h2'>
          {data.title}
        </Title>

        <div className={css.imgWrap}>
          <img src={data.img} alt='' />
        </div>

        <Text fontWeight='medium' className={css.subtext}>
          {data.subtext}
        </Text>

        <footer className={css.footer}>
          <Button onClick={btnHandler} className={css.btn} green>
            {data.btn_label}
          </Button>
        </footer>
      </div>
    </div>
  </div>
);
