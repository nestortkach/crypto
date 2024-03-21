import React from 'react';

import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { Button } from 'components/Button';

import css from './ApplySection.module.scss';

const data = {
  title: 'Become a part of the Guardarian team',
  subtext: 'Browse our currently open positions',
  btn_label: 'Apply now',
  footer_text: (
    <p>
      You can also leave an open application even if we don&apos;t have a matching public opening. <br />
      Just mail to <a href='mailto:hr@guardarian.com'>hr@guardarian.com</a>
    </p>
  ),
};

export const ApplySection = ({ btnHandler }) => (
  <section className={css.section}>
    <div className='container'>
      <Title size='xl' className={css.title}>
        {data.title}
      </Title>

      {/* <Text fontWeight="medium" className={css.subtext}> */}
      {/*  {data.subtext} */}
      {/* </Text> */}

      <footer className={css.footer}>
        <Button className={css.btn} onClick={btnHandler} green>
          {data.btn_label}
        </Button>
        <Text size='md'>{data.footer_text}</Text>
      </footer>
    </div>
  </section>
);
