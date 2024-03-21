import React from 'react';
import classNames from 'classnames';
import Collapse, { Panel } from 'rc-collapse';

import { Title } from 'components/Title';

import css from './Accordion.module.scss';

const Accordion = (props) => {
  const { children, headerClass, panelClass, header, ...restProps } = props;

  return (
    <Panel
      className={classNames(css.component, css.customAccordion, panelClass)}
      headerClass={classNames(css.header, headerClass)}
      header={
        <Title size='sm' tag='h3' className={classNames(css.accordionTitle, headerClass)}>
          {header}
        </Title>
      }
      {...restProps}
      showArrow={false}
    >
      {children}
    </Panel>
  );
};

export { Collapse, Accordion };
