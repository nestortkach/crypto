import React, { memo, useCallback, useState } from 'react';
import cn from 'classnames';

import { Button } from 'components/Button';

import css from './styles.module.scss';

const CopyCode = memo(({ text, isPartnerUrl }) => {
  const [copied, setCopied] = useState(null);

  const copy = useCallback(() => {
    try {
      navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (error) {
      setCopied(false);
    }

    setTimeout(() => setCopied(null), 2000);
  }, [text]);

  return (
    <div className={cn({ [css.partnerUrlContainer]: isPartnerUrl })}>
      <div className={css.titleContainer}>
        <div className={css.title}>Place this code into your web page </div>
        <div className={css.actionContainer}>
          {!isPartnerUrl && (
            <a href='https://partner.guardarian.com/sign-up'>
              <Button className={css.actionButton}>
                <span>Get API key</span>
              </Button>
            </a>
          )}
          <img onClick={copy} className={css.copyImage} src='/copy.svg' alt='Copy' width='24' height='24' />
        </div>
        {copied && <span className={css.copyText_success}>copied</span>}
      </div>
      <code className={css.copyText}>{text}</code>
    </div>
  );
});

CopyCode.displayName = 'CopyCode';

export { CopyCode };
