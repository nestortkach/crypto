import React from 'react';
import css from '../FeaturesSection.module.scss';

function Online() {
  return (
    <div className={css.featureOnline}>
      <div className={css.featureOnlineCircle} />
      <div className={css.featureOnlineText}>Online</div>
    </div>
  );
}

export default Online;
