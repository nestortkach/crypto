import React from 'react';

import css from './Benefit.module.scss';

function Benefit({ img, strings }) {
  return (
    <div className={css.feature}>
      <div>
        {strings.map((str) => (
          <p key={str} className={css.featureDesc}>
            {str}
          </p>
        ))}
      </div>
      <img className={css.featureImg} src={img.path} alt={img.alt} />
    </div>
  );
}

export { Benefit };
