import React from 'react';

import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { Banner } from 'components/Banner';

import css from './PositionBanner.module.scss';

export const PositionsBanner = (props) => {
  const { data, btnHandler } = props;

  return (
    <Banner className={css.component}>
      <div className={css.content}>
        <Title tag='h1' size='xl' className={css.title}>
          {data.title}
        </Title>

        {data.subtext && (
          <Text size='md' className={css.subtext}>
            <p>{data.subtext}</p>
          </Text>
        )}

        <footer className={css.footer}>
          <Button className={css.btn} onClick={btnHandler} green>
            Apply now
          </Button>
        </footer>
      </div>
    </Banner>
  );
};
