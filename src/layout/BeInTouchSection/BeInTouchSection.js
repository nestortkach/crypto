import React from 'react';

import { Button } from 'components/Button';
import { Title } from 'components/Title';

import css from './BeInTouchSection.module.scss';

const data = {
  title: 'Our goal is to help businesses grow by taking care of operations and providing ready-to-use services\n',
  subtext: 'Learn more how Guardarian can help your business',
  btn_label: 'Get in touch',
};

export const BeInTouchSection = ({ btnHandler }) => (
  <section className={css.section}>
    <div className='container'>
      <div className={css.delimiter} />

      <div className={css.content}>
        <Title className={css.title} size='lg'>
          {data.title}
        </Title>

        <div className={css.subtext}>
          <p>{data.subtext}</p>
        </div>

        <div className={css.btnWrap}>
          <Button className={css.contactBtn} onClick={btnHandler} green>
            {data.btn_label}
          </Button>
        </div>
      </div>
    </div>
  </section>
);
