import React from 'react';

import { Title } from 'components/Title';
import { Text } from 'components/Text';

import css from './CurrenciesHeaderSection.module.scss';

const CurrenciesHeaderSection = () => (
  <section className={css.component}>
    <div className={css.content}>
      <Title size='xl' className={css.title} tag='h1'>
        Cryptocurrencies supported for exchange on
        <br /> Guardarian
      </Title>
      <Text size='md' className={css.subText} tag='p'>
        Find out what crypto is available for purchase or selling with no sign-up just now.
      </Text>
    </div>
  </section>
);

export { CurrenciesHeaderSection };
