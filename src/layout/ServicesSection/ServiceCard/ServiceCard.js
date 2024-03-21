import React from 'react';

import css from './ServiceCard.module.scss';

function ServiceCard({ img, title, desc, button, onClick }) {
  return (
    <div className={css.serviceCard}>
      <div className={css.imageWrapper}>
        <img className={css.serviceImg} style={img.style} src={img.path} alt={img.alt} />
      </div>

      <h4 className={css.serviceTitle}>{title}</h4>
      <p className={css.serviceDesc}>{desc}</p>
      <button onClick={onClick} type='button' className={css.button}>
        {button} <img src='/chevron-right.svg' alt='chevron-right' loading='lazy' />
      </button>
    </div>
  );
}

export { ServiceCard };
