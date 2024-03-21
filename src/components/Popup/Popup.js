import cn from 'classnames';
import ClickOutside from '@coxy/react-click-outside';

import { Button } from '../Button';
import { Cross } from '../Icons/Cross';

import css from './Popup.module.scss';

const Popup = ({ visible, onClose, children, clickOutside, containerClass, closeButtonClass }) => {
  if (!visible) return null;

  return (
    <div className={css.popupBg}>
      <ClickOutside onClose={clickOutside ? onClose : undefined} visible={visible}>
        <div className={cn(css.popup, containerClass)}>
          <Button className={cn(css.closeButton, closeButtonClass)} onClick={onClose}>
            <Cross />
          </Button>

          {children}
        </div>
      </ClickOutside>
    </div>
  );
};

Popup.defaultProps = {
  clickOutside: true,
};

export { Popup };
