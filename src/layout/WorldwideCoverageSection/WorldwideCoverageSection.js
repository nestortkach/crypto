import React from 'react';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import css from './WorldwideCoverageSection.module.scss';

const items = [
  {
    number: '400+',
    desc: 'Supported cryptocurrencies',
  },
  {
    number: '50+',
    desc: 'Fiat currencies available',
  },
  {
    number: '170+',
    desc: 'Supported countries',
  },
];
const WorldwideCoverageSection = () => (
  <div className={css.section}>
    <div className='container'>
      <Title className={css.title}>Worldwide coverage</Title>
      <div className={css.content}>
        {items.map((item) => (
          <div key={item.desc} className={css.item}>
            <Title tag='p' fontWeight='medium' className={css.item_title}>
              {item.number}
            </Title>
            <Text fontWeight='light' className={css.item_desc}>
              {item.desc}
            </Text>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export { WorldwideCoverageSection };
