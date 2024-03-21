import React, { useRef, useState } from 'react';
import cn from 'classnames';

import { Close } from 'components/Icons/Close';
import { useClickOutside } from 'hooks/useClickOutside';

import css from './Popover.module.scss';

const Popover = ({ icon, children, boxClassName, popoverClassName }) => {
  const [visible, setVisible] = useState(false);
  const popoverRef = useRef(null);

  const closePopover = (event) => {
    setVisible(false);
    if (event) event.stopPropagation();
  };

  const openPopover = () => setVisible(true);

  useClickOutside(popoverRef, closePopover);

  return (
    <div
      className={cn(css.box, boxClassName)}
      onMouseEnter={openPopover}
      onMouseLeave={closePopover}
      onTouchStart={openPopover}
    >
      {icon}
      <div ref={popoverRef} className={cn(css.popover, popoverClassName, { [css.popover_visible]: visible })}>
        <button type='button' className={cn(css.closeButton, 'closeBtn')} onClick={closePopover}>
          <Close />
        </button>

        {children}
      </div>
    </div>
  );
};

export { Popover };
