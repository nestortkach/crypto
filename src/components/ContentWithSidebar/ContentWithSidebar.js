import React from 'react';
import cn from 'classnames';
import StickyBox from 'react-sticky-box';

import css from './ContentWithSidebar.module.scss';

export const ContentWithSidebar = (props) => {
  const { sidebar, content, className } = props;

  return (
    <div className={cn(css.component, className)}>
      <div className='container'>
        <div className={css.layout}>
          <div className={css.sidebar}>
            <StickyBox offsetTop={20} offsetBottom={20}>
              {sidebar}
            </StickyBox>
          </div>

          <div className={css.content}>{content}</div>
        </div>
      </div>
    </div>
  );
};
