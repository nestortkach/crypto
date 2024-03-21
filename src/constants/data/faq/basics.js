import React from 'react';
import { TableForLimits } from '../../../components/TablesForLimits/TableForLimits';

export default {
  blockTitle: 'Basics',
  blockData: [
    {
      title: 'Do I need to register to use Guardarian service?',
      content: (
        <p>
          Guardarian is a registration-free service, you do not have to create any sort of accounts to perform the
          exchange. Only thing needed for exchanges is a one time KYC.
        </p>
      ),
    },
    {
      title: 'What Is Guardarian PRO?',
      content: (
        <>
          <p>
            With Guardarian Pro, clients can check their transaction history, transaction details of the past orders and
            initiate new transactions as well! The log in process consists of simple authentication (email or SMS),
            which should already be familiar to existing clients. Just make sure to use the same email/Phone nr which
            was used to initiate your previous transactions.
          </p>
          <p>
            Please note that Guardarian is still an account free service, which does not require a log in step for
            placing orders. You can still perform transactions without using Guardarian Pro.
          </p>
        </>
      ),
    },
    {
      title: 'What payment methods does Guardarian offer?',
      content: (
        <p>
          Guardarian offers VISA/MasterCard credit/debit card payments and SEPA, SEPA instant, SWIFT and UK
          FasterPayment bank transfer payment methods. We’re always working on adding new payment methods, so keep an
          eye on it!
        </p>
      ),
    },
    {
      title: 'What is a recipient wallet address?',
      content: <p>This is the address to which the purchased cryptocurrency will be transferred after the exchange.</p>,
    },
    {
      title: 'What are Guardarian transaction limits?',
      content: <TableForLimits />,
    },
  ],
};
