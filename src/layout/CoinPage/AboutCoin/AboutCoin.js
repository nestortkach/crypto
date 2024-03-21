import React from 'react';
import cn from 'classnames';

import css from './AboutCoin.module.scss';

export const AboutCoin = ({ articles, theme }) => {
  const backgroundClass = cn(css.box, {
    [css[theme]]: true,
  });

  return (
    <div className={css.component}>
      <div className='container'>
        <div className={backgroundClass}>
          {articles?.map((article) => (
            <div className={css.article} key={article.title}>
              <h2>{article.title}</h2>
              <p>{article.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
