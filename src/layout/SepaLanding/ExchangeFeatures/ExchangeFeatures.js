import React from 'react';
import classNames from 'classnames';

import { Text } from 'components/Text';
import { Title } from 'components/Title';

import css from './ExchangeFeatures.module.scss';

const data = {
  title: 'We have a simple tool to exchange crypto using SEPA transfers',
  img: '/sepa-transfers.svg',
  list: [
    {
      title: 'Account registration is not needed',
      text: 'A native user interface without lengthy registration',
    },
    {
      title: 'Two-sided exchanges with SEPA payment',
      text: 'Crypto to fiat and fiat to crypto exchanges',
    },
    {
      title: 'Simple verification process',
      text: 'Pass verification with your ID and camera in 5 minutes.',
    },
  ],
};

export const ExchangeFeatures = () => (
  <div className={css.component}>
    <div className='container'>
      <div className='content'>
        <Title className={css.title} size='xl' tag='h2'>
          {data.title}
        </Title>

        <div className={css.content}>
          <div className={css.imgWrap}>
            <img src={data.img} alt='' />
          </div>

          <div className={classNames(css.textPart, css.contentWithChecklist)}>
            <ul>
              {data.list.map((item) => (
                <li key={item.title}>
                  <Title className={css.listTitle} tag='h3' size='sm'>
                    {item.title}
                  </Title>
                  <Text className={css.listText} fontWeight='light' size='md'>
                    {item.text}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
