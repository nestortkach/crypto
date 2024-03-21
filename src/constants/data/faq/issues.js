import React from 'react';

export default {
  blockTitle: 'Issue',
  blockData: [
    {
      title: 'Why am I blocked?',
      content: (
        <p>
          A customer will be blocked if he is found on any sanctioned list (e.g OAFC, EU, UN, HMT, etc) for any kind of
          crime ranging from money laundering to terrorism financing, drug trafficking, etc. If a customer is detected
          to be on a sanctioned list, such a customer is blocked and cannot access our services.
        </p>
      ),
    },
    {
      title: 'How can I cancel the transaction?',
      content: (
        <p>
          As soon as we receive the funds to our bank account it becomes impossible to cancel the transaction, as
          blockchain operations are irreversible.
        </p>
      ),
    },
    {
      title: 'What to do if I submitted a wrong crypto address?',
      content: (
        <p>
          If funds are sent to an incorrect address, it is highly unlikely to recover them. It is extremely important to
          double-check the destination crypto address you are entering on the order page. Please make sure the address
          is valid and correct!
        </p>
      ),
    },
  ],
};
