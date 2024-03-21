import React from 'react';

import { Contact } from '../Contact';
import { Social } from '../Social';
import { ContactForm } from '../ContactForm';

import css from './Contacts.module.scss';
import { groupBy } from '../../../utils/groupBy';

const contacts = Array.from(
  groupBy(
    [
      { title: 'For business inquiries', content: 'business@guardarian.com' },
      { title: 'For customer support', content: 'support@guardarian.com' },
      { title: 'For marketing activities', content: 'm@guardarian.com' },
      { title: 'For listing', content: 'sales@guardarian.com' },
      // {
      //   title: 'Telegram',
      //   content: '@Guardarian_com',
      //   type: 'telegram',
      //   isCopyable: true,
      //   iconDark: true,
      // },
      { title: 'Address', content: 'Rotermanni 2-9, Tallinn 10111, Estonia', type: 'address' },
    ],
    (item) => item.title,
  ),
);

export const Contacts = () => (
  <div className={css.component}>
    <div className='container'>
      <div className={css.block}>
        <div className={css.contacts}>
          {contacts.map((contact) => (
            <Contact key={contact[0]} contact={contact[1]} />
          ))}
          <Social />
        </div>
        <ContactForm className={css.form} />
      </div>
    </div>
  </div>
);
