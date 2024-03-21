import React from 'react';
import { Telegram } from 'components/Icons/Telegram';
import { Button } from 'components/Button';

import css from './MainSection.module.scss';

function MainSection({ onAskQuestion }) {
  return (
    <section className={css.mainSection}>
      <article className={css.productDescColumn}>
        <h2 className={css.productDesc}>The bridge between crypto and fiat world for your business</h2>

        <h3 className={css.productLead}>
          Buy and sell crypto for fiat using Guardarian white label solution. Fastest gateway — your client get crypto
          within 1 minute after press “Buy”.
        </h3>

        <div className={css.buttons}>
          <Button className={css.questionBtn} onClick={onAskQuestion} primary>
            Ask a question
          </Button>

          <Button white outline>
            <Telegram />
            <a href='https://t.me/Guardarian_salesteam'>Contact sales</a>
          </Button>
        </div>
      </article>

      <div className={css.imgBox}>
        <img
          srcSet='/app-demo.png,
                  /app-demo-2x.png 1.5x,
                  /app-demo-4x.png 2x'
          src='/app-demo-4x.png'
          className={css.productImg}
          alt='app-demo'
        />
      </div>
    </section>
  );
}

export { MainSection };
