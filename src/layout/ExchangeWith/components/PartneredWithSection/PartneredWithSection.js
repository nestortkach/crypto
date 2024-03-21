import React from 'react';

import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { Text } from 'components/Text/Text';
import css from './PartneredWithSection.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
export const PartneredWithSection = ({
  title = 'Guardarian partnering with UnionPay',
  contents = [
    { image: '', text: '' },
    { image: '', text: '' },
  ],
}) => (
  <div className={css.component}>
    <Title className={css.heading} size='xl' tag='h2'>
      {title}
    </Title>
    <div className={css.first}>
      <Text className={css.text} fontWeight='light' size='md'>
        {contents[0].text}
      </Text>
      <img className={css.image} src={contents[0].image} alt={title} />
    </div>
    <div className={css.second}>
      <img className={css.image} src={contents[1].image} alt={title} />
      <Text className={css.text} fontWeight='light' size='md'>
        {contents[1].text}
      </Text>
    </div>
    <div className={css.buttonContainer}>
      <Button onClick={scrollToTop} green className={css.button}>
        Exchange now
      </Button>
    </div>
  </div>
);
