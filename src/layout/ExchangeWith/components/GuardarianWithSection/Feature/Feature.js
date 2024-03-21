import React from 'react';

import { Text } from 'components/Text';
import css from './Feature.module.scss';

function Feature({ img, strings }) {
  return (
    <div className={css.feature}>
      <div>
        {strings.map((str) => (
          <Text className={css.featureDesc} fontWeight='light' size='md' key={str}>
            {str}
          </Text>
        ))}
      </div>
      <img className={css.featureImg} src={img.path} alt={img.alt} />
    </div>
  );
}

export { Feature };
