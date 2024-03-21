import React from 'react';
import Image from 'next/image';
import css from './StepCard.module.scss';

function StepCard({ img, title }) {
  return (
    <div className={css.stepCard}>
      <Image className={css.stepImg} style={img.style} src={img.path} alt={img.alt} width={73} height={72} />

      <h4 className={css.stepTitle} dangerouslySetInnerHTML={{ __html: title.join('<br/>') }} />
    </div>
  );
}

export { StepCard };
