import React from 'react';
import Link from 'next/dist/client/link';
import css from './BestConditions.module.scss';
import { Button } from '../../components/Button';

export const BestConditions = () => {
  const items = [
    {
      title: 'Average',
      subtitle: 'transaction speed',
      value: '<2 min',
    },
    {
      title: 'Minimum',
      subtitle: 'exchange amount',
      value: '5€',
    },
    {
      title: 'No KYC',
      subtitle: 'transaction limit',
      value: '700€',
    },
    {
      title: 'Chargebacks',
      subtitle: 'guarantee',
      value: '0',
    },
    {
      title: 'FIAT currencies',
      subtitle: 'supported',
      value: '40+',
    },
  ];

  return (
    <div className={css.component}>
      <div className='container'>
        <h2 className={css.maintitle}>Best conditions on the market</h2>
        <div className={css.features}>
          {items.map((item, index) => (
            <div key={index} className={css.feature}>
              <p className={css.points}>{item.value}</p>
              <div>
                <p className={css.title}>{item.title}</p>
                <p className={css.subtitle}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href='https://guardarian.com/for-partners#contactUsCrypto'>
          <Button size='md' green className={css.salesButton}>
            Contact sales
          </Button>
        </Link>
      </div>
    </div>
  );
};
