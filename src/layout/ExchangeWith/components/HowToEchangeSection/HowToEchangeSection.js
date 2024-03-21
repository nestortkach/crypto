import React from 'react';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { Title } from 'components/Title';
import css from './HowToEchangeSection.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
export const HowToEchangeSection = ({ title, subTitle, card }) => (
  <div className={css.component}>
    <Title className={css.heading} size='xl' tag='h2'>
      {title}
    </Title>
    <Text className={css.subHeading} fontWeight='light' size='md'>
      {subTitle}
    </Text>
    <div className={css.stepsContainer}>
      <ol className={css.stepsLeft}>
        <li>
          Select the preferred currency (USD, EUR, YUAN){' '}
          <span className={css.thin}>in which you want to buy crypto and choose the coin from the drop-down menu</span>
        </li>
        <li>
          Select {card}{' '}
          <span className={css.thin}>as the payment method and go through our KYC for a fast verification process</span>
        </li>
        <li>
          <span className={css.thin}>Please </span> specify the wallet
          <span className={css.thin}> to which you will send the funds</span>
        </li>
        <li>
          <span className={css.thin}> Sit back and relax,</span> your funds have been exchanged! :)
        </li>
      </ol>
      <div className={css.stepsRight}>
        <div className={css.step}>
          <div className={css.stepNumber}>1</div>
          <div className={css.stepTitle}>Choose fiat and crypto</div>
        </div>
        <div className={css.divider} />
        <div className={css.step}>
          <div className={css.stepNumber}>2</div>
          <div className={css.stepTitle}>Add payment details</div>
        </div>
        <div className={css.divider} />
        <div className={css.step}>
          <div className={css.stepNumber}>3</div>
          <div className={css.stepTitle}>Complete verification</div>
        </div>
        <div className={css.divider} />
        <div className={css.step}>
          <div className={css.stepNumber}>4</div>
          <div className={css.stepTitle}>Funds exchanged</div>
        </div>
      </div>
    </div>
    <div className={css.buttonContainer}>
      <Button onClick={scrollToTop} green className={css.button}>
        Exchange now
      </Button>
    </div>
  </div>
);
