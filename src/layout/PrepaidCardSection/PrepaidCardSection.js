import React from 'react';

import { Button } from 'components/Button';
import { Telegram } from 'components/Icons/Telegram';
import { Mail } from 'components/Icons/Mail';

import css from './PrepaidCardSection.module.scss';

function PrepaidCardSection({ onAskQuestion }) {
  return (
    <section className={css.prepaidCardSection}>
      <article className={css.descColumn}>
        <h2 className={css.heading}>Let your customers spend crypto</h2>

        <ul className={css.list}>
          <li>Worldwide delivery without monthly or POS fees</li>
          <li>Without Guardarian logo on card</li>
          <li>Over 200 coins supported</li>
          <li>Start card sales and earn together with us</li>
          <li>Set up custom application by our Development API</li>
        </ul>

        <div className={css.buttons}>
          <div className={css.links}>
            <a className={css.link} href='mailto:sales@guardarian.com'>
              <Mail />
              sales@guardarian.com
            </a>
            <a className={css.link} href='https://t.me/Guardarian_salesteam'>
              <Telegram />
              @Guardarian_salesteam
            </a>
          </div>
          <Button primaryDark className={css.askButton} onClick={onAskQuestion}>
            Ask a question
          </Button>
        </div>
      </article>

      <div className={css.imgBox}>
        <img className={css.img} src='/card-app.png' alt='card-app' />
      </div>
    </section>
  );
}

export { PrepaidCardSection };
