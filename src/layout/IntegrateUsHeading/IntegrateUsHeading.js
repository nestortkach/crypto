import React, { memo } from 'react';

import { Button } from 'components/Button/Button';

import css from './IntegrateUsHeading.module.scss';

const IntegrateUsHeading = memo(() => (
  <div className={css.integrateUsSection}>
    <div className='container'>
      <section className={css.component}>
        <div className={css.actionArea}>
          <h1>Designed for developers</h1>
          <ul className={css.benefitsList}>
            <li>Enable buying and selling crypto directly from your app</li>
          </ul>

          <a href='https://partner.guardarian.com/sign-up'>
            <Button className={css.actionButton}>
              <span>Become partner</span>
            </Button>
          </a>
        </div>

        <div className={css.actionAreaMap}>
          <img src='/coverage-area.svg' alt='Сoverage area' />
        </div>
      </section>
    </div>
  </div>
));

IntegrateUsHeading.displayName = 'IntegrateUsHeading';

export { IntegrateUsHeading };
