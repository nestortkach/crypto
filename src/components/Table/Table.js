import React from 'react';
import cn from 'classnames';

import css from './Table.module.scss';

export const Table = ({ className, children }) => <table className={cn(css.table, className)}>{children}</table>;
