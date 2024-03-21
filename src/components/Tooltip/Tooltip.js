import React, { useRef, useState } from 'react';
import cn from 'classnames';

import { Close } from 'components/Icons/Close';
import { useClickOutside } from 'hooks/useClickOutside';

import css from './Tooltip.module.scss';

export const Tooltip = ({ text, children, boxClassName, tooltipClassName, closeButtonClassName }) => {
  const [visible, setVisible] = useState(false);
  const TooltipRef = useRef(null);

  const closeTooltip = (event) => {
    setVisible(false);
    if (event) event.stopPropagation();
  };

  const openTooltip = () => setVisible(true);

  useClickOutside(TooltipRef, closeTooltip);

  return (
    <div className={cn(css.box, boxClassName)} onClick={openTooltip} onTouchStart={openTooltip}>
      {children}
      <div ref={TooltipRef} className={cn(css.tooltip, tooltipClassName, { [css.tooltip_visible]: visible })}>
        <button type='button' className={cn(css.closeButton, 'closeBtn', closeButtonClassName)} onClick={closeTooltip}>
          <Close />
        </button>
        <p>{text}</p>
      </div>
    </div>
  );
};
