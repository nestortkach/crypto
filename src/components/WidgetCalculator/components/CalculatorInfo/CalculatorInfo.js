import React from 'react';
import cn from 'classnames';
import ReactTooltip from 'react-tooltip';

import { Info } from '../../../Icons/Info';
import { Loader } from '../../../Loader';
// import { Popover } from '../../../Popover'

import { formatNumber } from '../../utils';

import { Minus, Equal, Division } from './InfoTypes';

import css from './CalculatorInfo.module.scss';

export const CalculatorInfo = ({ estimatedData, error }) => {
  const { service_fees = [], converted_amount, estimated_exchange_rate, to_currency, from_currency } = estimatedData;

  const exchangeRate = estimated_exchange_rate && formatNumber(estimated_exchange_rate);

  return (
    <div className={css.info}>
      {/* <div className={css.infoRow}> */}
      {/*  <div className={css.circle}> */}
      {/*    <Minus /> */}
      {/*  </div> */}
      {/*  <div className={css.amount}> */}
      {/*    {service_fees.length ? ( */}
      {/*      `${getFeesSummary(service_fees)} ${converted_amount?.currency}` */}
      {/*    ) : ( */}
      {/*      <Loader className={css.loader} /> */}
      {/*    )} */}
      {/*  </div> */}
      {/*  <div className={css.infoTitle}> */}
      {/*    Fees included */}
      {/*    <Popover boxClassName={css.popoverBox} popoverClassName={css.popover} icon={<Info />}> */}
      {/*      <h3>Fees: </h3> */}
      {/*      <div className={css.fees}> */}
      {/*        {service_fees?.map((fee) => { */}
      {/*          return ( */}
      {/*            <div className={css.fee} key={fee.name}> */}
      {/*              <div>{fee.name}</div> */}
      {/*              <div className={css.feeValue}> */}
      {/*                {formatNumber(fee.amount, true)} {fee.currency} */}
      {/*              </div> */}
      {/*            </div> */}
      {/*          ) */}
      {/*        })} */}
      {/*      </div> */}

      {/*      <p className={css.feeText}> */}
      {/*        Fees are deducted from the order amount and converted afterwards with exchange rate */}
      {/*      </p> */}
      {/*    </Popover> */}
      {/*  </div> */}
      {/* </div> */}

      {service_fees.length ? (
        service_fees.map((fee) => (
          <div key={fee.name} className={css.infoRow}>
            <div className={css.circle}>
              <Minus color='#353535' />
            </div>
            <div className={css.amount}>
              {formatNumber(fee?.amount || 0)} {fee?.currency}
            </div>
            <div className={css.infoTitle}>{fee?.name || 'Fee'}</div>
          </div>
        ))
      ) : (
        <div className={css.infoRow}>
          <div className={css.circle}>
            <Minus color='#353535' />
          </div>
          <div className={css.amount}>{!error ? <Loader className={css.loader} /> : '-'}</div>
          <div className={css.infoTitle}>Service fee</div>
        </div>
      )}

      <div className={css.infoRow}>
        <div className={css.circle}>
          <Equal color='#353535' />
        </div>
        <div className={css.amount}>
          {converted_amount?.amount ? (
            `${formatNumber(converted_amount?.amount)} ${converted_amount?.currency}`
          ) : (
            <>{!error ? <Loader className={css.loader} /> : '-'}</>
          )}
        </div>
        <div className={css.infoTitle}>Converted amount</div>
      </div>

      <div className={css.infoRow}>
        <div className={css.circle}>
          <Division color='#353535' />
        </div>
        <div className={css.amount}>
          {exchangeRate ? (
            `${formatNumber(exchangeRate)} ${to_currency}`
          ) : (
            <>{!error ? <Loader className={css.loader} /> : '-'}</>
          )}
        </div>
        <div className={cn(css.infoTitle, css.expectedRateLabel)}>
          Expected rate
          <div data-tip data-for='rate'>
            <Info />
          </div>
          <ReactTooltip
            className={css.tooltipPrompt}
            textColor='#4C9DE8'
            backgroundColor='#FFFFFF'
            border={false}
            id='rate'
          >
            <p className={css.tooltipText}>
              This is an expected rate.
              <br />
              Guardarian will pick the best rate for
              <br />
              you during the moment of exchange.
            </p>
            {exchangeRate ? (
              <p className={css.rate}>
                1 {from_currency} = ~{exchangeRate} {to_currency}
              </p>
            ) : null}
          </ReactTooltip>
          {/* <Popover boxClassName={css.popoverBox} popoverClassName={cn(css.popover, css.popoverMedium)} icon={<Info />}> */}
          {/*  <h3>Expected rate:</h3> */}
          {/*  <p>This is an expected rate. Guardarian will pick the best rate for you during the moment of exchange.</p> */}
          {/* </Popover> */}
        </div>
      </div>

      {/* <div className={css.infoRow}> */}
      {/*  <div className={css.circle}> */}
      {/*    <Minus /> */}
      {/*  </div> */}
      {/*  <div className={css.amount}> */}
      {/*    {network_fee ? ( */}
      {/*      `${formatNumber(network_fee.amount)} ${network_fee.currency}` */}
      {/*    ) : ( */}
      {/*      <Loader className={css.loader} /> */}
      {/*    )} */}
      {/*  </div> */}
      {/*  <div className={css.infoTitle}> */}
      {/*    Network fee included */}
      {/*    <Popover boxClassName={css.popoverBox} popoverClassName={css.popover} icon={<Info />}> */}
      {/*      <h3>Network fee:</h3> */}
      {/*      <p> */}
      {/*        Network fee is not included in expected rate and will be divided from converted amount during the */}
      {/*        exchange. */}
      {/*      </p> */}
      {/*    </Popover> */}
      {/*  </div> */}
      {/* </div> */}
    </div>
  );
};
