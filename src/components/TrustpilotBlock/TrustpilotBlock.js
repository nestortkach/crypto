import React from 'react';

import css from './TrustpilotBlock.module.scss';

export const TrustpilotBlock = () => (
  <div className={css.content}>
    <p className={css.text}>
      Guardarian - your top choice for buying and selling crypto.
      <br />
      Save time! Get your desired crypto without registration.
    </p>
    <a href='https://www.trustpilot.com/review/guardarian.com'>
      <img src='/logos/trust-pilot.svg' alt='Trustpilot' />
    </a>
  </div>
);
