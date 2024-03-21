import React from 'react';
import Image from 'next/image';
import css from './StepCard.module.scss';

function StepCard({ img, title }) {
  return (
    <div className={css.cardContainer}>
      <div className={css.stepCard}>
        <Image className={css.stepImg} style={img.style} src={img.path} alt={img.alt} width={30} height={31} />

        <h4 className={css.stepTitle}>
          {title[0]} <span className={css.thin}>{title[1]}</span>
        </h4>
      </div>
      <img src='/step-seprator-mobile.svg' className={css.seprator} alt='seprator' />
    </div>
  );
}

export { StepCard };
