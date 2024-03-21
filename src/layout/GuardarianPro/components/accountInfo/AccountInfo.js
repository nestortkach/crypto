import React from 'react';
import cn from 'classnames';
import css from './AccountInfo.module.scss';

function AccountInfo({ data, title, hint, containerClassName, divider, noMarginTextContainer }) {
  return (
    <div className={cn(css.container, containerClassName)}>
      {title && <div className={css.title}>{title}</div>}
      {divider && <div className={css.divider} />}
      {hint && <div className={css.hint}>{hint}</div>}
      {data?.map((el) => {
        if (el?.isTitle) {
          return (
            <div key={el.id} className={css.subTitle}>
              {el.title}
            </div>
          );
        }

        return (
          <div key={el.id} className={cn(css.textContainer, { [css.textContainerSubInfo]: noMarginTextContainer })}>
            <div className={css.textTitle}>{el.title}</div>
            <div className={css.text}>{el.value}</div>
          </div>
        );
      })}
    </div>
  );
}

export { AccountInfo };
