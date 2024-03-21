import React from 'react';
import cn from 'classnames';

import { Address } from 'components/Icons/Address';
import { Mail } from 'components/Icons/Mail';
import { Telegram } from 'components/Icons/Telegram';

import css from './Contact.module.scss';

const chooseImage = (type) => {
  switch (type) {
    case 'email':
      return <Mail />;
    case 'address':
      return <Address />;
    case 'telegram':
      return <Telegram />;
    default:
      return <Mail />;
  }
};

const getTelegramLink = (value) => (
  <a rel='noreferrer' target='_blank' href={`https://telegram.me/${value}`}>
    {value}
  </a>
);

const getTypeMarkup = (type, value) => {
  switch (type) {
    case 'telegram':
      // remove @ from value for url
      return getTelegramLink(value.replace('@', ''));
    default:
      return value;
  }
};

export const Contact = ({ contact }) => (
  <div className={css.component}>
    <h2 className={css.title}>{contact[0].title}</h2>
    {contact.map(({ iconDark, type, content }) => (
      <p key={content} className={cn(css.contact, { [css.darkIcon]: iconDark, [css.mt]: contact.length > 1 })}>
        {chooseImage(type)}
        {getTypeMarkup(type, content)}
      </p>
    ))}
  </div>
);
