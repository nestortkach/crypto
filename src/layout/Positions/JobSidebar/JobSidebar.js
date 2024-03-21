import React from 'react';
import classNames from 'classnames';

import { Title } from 'components/Title';

import css from './JobSidebar.module.scss';

export const JobSidebar = ({ title, content }) => (
  <div className={classNames(css.component, 'content-with-marker')}>
    {title && (
      <Title tag='h4' size='sm' className={css.title}>
        {title}
      </Title>
    )}
    <div className={css.content}>{content}</div>
  </div>
);
