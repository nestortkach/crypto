import React, { memo } from 'react';
import cn from 'classnames';
import ClickOutside from '@coxy/react-click-outside';

import { Button } from 'components/Button';
import { Cross } from 'components/Icons/Cross';

import css from './CustomPopup.module.scss';

const CustomPopup = memo(
  ({ visible, onClose, children, clickOutside, containerClass, closeButtonClass, title, popupBgClass }) => {
    if (!visible) return null;

    return (
      <div className={cn(css.popupBg, popupBgClass)}>
        <ClickOutside onClose={clickOutside ? onClose : undefined} visible={visible}>
          <div className={css.popupContainer}>
            <div className={cn(css.popupHeader, containerClass)}>
              <div className={css.headerLogin}>{title}</div>
              <Button className={cn(css.closeButton, closeButtonClass)} onClick={onClose}>
                <Cross />
              </Button>
            </div>
            <div className={cn(css.popup, containerClass)}>{children}</div>
          </div>
        </ClickOutside>
      </div>
    );
  },
);

CustomPopup.displayName = 'CustomPopup';

CustomPopup.defaultProps = {
  clickOutside: true,
};

export { CustomPopup };
