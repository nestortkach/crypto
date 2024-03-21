import React from 'react';

import css from './TableForLimits.module.scss';

export const TableForLimits = () => (
  <>
    <table className={css.fiatCryptoTable}>
      <tr>
        <td colSpan={2} className={css.tableHead}>
          <strong>Limits For Fiat-Crypto Exchange</strong>
        </td>
      </tr>
      <tr>
        <td>
          <strong>Daily Minimum and Maximum Limit</strong>
        </td>
        <td>
          <strong>Monthly Maximum Limit</strong>
        </td>
      </tr>
      <tr>
        <td>
          &euro;5-&euro;12,000
          <br />
          Visa / MasterCard
        </td>
        <td>
          &euro;15,000
          <br />
          Visa / MasterCard
        </td>
      </tr>
      <tr>
        <td>
          &euro;5-&euro;12,000
          <br />
          Sepa / SWIFT / FasterPayments
        </td>
        <td>
          &euro;15,000
          <br />
          Sepa / SWIFT / FasterPayments
        </td>
      </tr>
      <tr>
        <td>
          &euro;5-&euro;12,000
          <br />
          Google Pay / Apple Pay / Revolut Pay
        </td>
        <td>
          &euro;15,000
          <br />
          Google Pay / Apple Pay / Revolut Pay
        </td>
      </tr>
    </table>
    <table className={css.cryptoFiat}>
      <tr>
        <td colSpan={2}>
          <strong>Limits For Crypto-Fiat Exchange</strong>
        </td>
      </tr>
      <tr>
        <td>
          <strong>Daily Minimum and Maximum Limit</strong>
        </td>
        <td>
          <strong>Monthly Maximum Limit</strong>
        </td>
      </tr>
      <tr>
        <td>
          &euro;30-&euro;7500
          <br />
          Sepa / SWIFT / FasterPayments
        </td>
        <td>
          &euro;15,000
          <br />
          Sepa / SWIFT / FasterPayments
        </td>
      </tr>
    </table>
  </>
);
