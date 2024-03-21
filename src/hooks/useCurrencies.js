import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import CurrenciesTableCell from 'components/CurrenciesTableComponents/CurrenciesTableCell';
import CurrenciesTableCoinContainer from 'components/CurrenciesTableComponents/CurrenciesTableCoinContainer';
import CurrenciesTableCoinTicker from 'components/CurrenciesTableComponents/CurrenciesTableCoinTicker';
import CurrenciesTableButton from 'components/CurrenciesTableComponents/CurrenciesTableButton';
import CurrenciesTableCoinMobileContainer from 'components/CurrenciesTableComponents/CurrenciesTableCoinMobileContainer';
import CurrenciesTableBuySell from 'components/CurrenciesTableComponents/CurrenciesTableBuySell';
import { AvailableForExchange } from 'components/Icons/AvailableForExchange';

import { buyTokenUrlGenerator, havePaymentEnabled } from 'utils/buyTokenHelper';

import { breakpoints, useBreakPoint } from './useResponsive';
import ButtonForArrow from '../components/ButtonForArrow/ButtonForArrow';

const useCurrencies = (currencies) => {
  const breakpoint = useBreakPoint();
  const router = useRouter();
  const isMobile = breakpoint === breakpoints.sm || breakpoint === breakpoints.xs;
  const handleRoute = (ticker, type) => router.push(buyTokenUrlGenerator(ticker, type));
  const [items, setItems] = useState([]);
  const [columns, setColumns] = useState([]);
  const onRowClick = (item) => {
    handleRoute(item.ticker, 'buy');
  };

  useEffect(() => {
    setItems([...currencies.slice(0, 20)]);
  }, [currencies]);

  useEffect(() => {
    if (!isMobile) {
      setColumns([
        {
          field: 'name',
          title: 'Coin',
          textAlign: 'left',
          renderTitle: CurrenciesTableCell,
          render: CurrenciesTableCoinContainer,
        },
        {
          field: 'ticker',
          renderTitle: CurrenciesTableCell,
          textAlign: 'left',
          title: 'Ticker',
          render: CurrenciesTableCoinTicker,
        },
        {
          field: 'buy',
          title: 'Buy',
          renderTitle: CurrenciesTableCell,
          marginRight: 5,
          textAlign: 'center',
          // eslint-disable-next-line react/display-name
          render: ({ ticker, ...rest }, column) => (
            <CurrenciesTableCell {...column}>
              <span
                onClick={(e) => {
                  handleRoute(ticker, 'buy');
                  e.stopPropagation();
                }}
              >
                <CurrenciesTableButton disabled={!havePaymentEnabled({ ticker, ...rest }, 'buy')}>
                  Buy {ticker}
                </CurrenciesTableButton>
              </span>
            </CurrenciesTableCell>
          ),
        },
        {
          field: 'sell',
          title: 'Sell',
          renderTitle: CurrenciesTableCell,
          textAlign: 'center',
          // eslint-disable-next-line react/display-name
          render: ({ ticker, ...rest }, column) => (
            <CurrenciesTableCell {...column}>
              <span
                onClick={(e) => {
                  handleRoute(ticker, 'sell');
                  e.stopPropagation();
                }}
              >
                <CurrenciesTableButton disabled={!havePaymentEnabled({ ticker, ...rest }, 'sell')}>
                  Sell {ticker}
                </CurrenciesTableButton>
              </span>
            </CurrenciesTableCell>
          ),
        },
        {
          field: 'available_for_exchange',
          title: 'Available for exchange',
          renderTitle: CurrenciesTableCell,
          textAlign: 'center',
          // eslint-disable-next-line react/display-name
          render: ({ ticker, ...rest }, column) => (
            <CurrenciesTableCell {...column}>
              <ButtonForArrow>
                <AvailableForExchange
                  ticker={ticker}
                  buy={havePaymentEnabled({ ticker, ...rest }, 'buy')}
                  sell={havePaymentEnabled({ ticker, ...rest }, 'sell')}
                />
              </ButtonForArrow>
            </CurrenciesTableCell>
          ),
        },
      ]);
    } else {
      setColumns([
        {
          field: 'name',
          title: 'Coin',
          textAlign: 'left',
          renderTitle: CurrenciesTableCell,
          render: CurrenciesTableCoinMobileContainer,
        },
        {
          field: 'buy',
          title: 'Buy/Sell',
          textAlign: 'center',
          renderTitle: CurrenciesTableCell,
          // eslint-disable-next-line react/display-name
          render: ({ ticker, ...rest }, column) => (
            <CurrenciesTableCell {...column}>
              <CurrenciesTableBuySell>
                <span
                  href={`/buy-${ticker.toLowerCase()}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRoute(ticker, 'buy');
                  }}
                >
                  <CurrenciesTableButton disabled={!havePaymentEnabled({ ticker, ...rest }, 'buy')}>
                    Buy
                  </CurrenciesTableButton>
                </span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRoute(ticker, 'sell');
                  }}
                >
                  <CurrenciesTableButton disabled={!havePaymentEnabled({ ticker, ...rest }, 'sell')}>
                    Sell
                  </CurrenciesTableButton>
                </span>
              </CurrenciesTableBuySell>
            </CurrenciesTableCell>
          ),
        },
        {
          field: 'exchange',
          title: 'Exchange',
          renderTitle: CurrenciesTableCell,
          textAlign: 'center',
          // eslint-disable-next-line react/display-name
          render: ({ ticker, ...rest }, column) => (
            <CurrenciesTableCell {...column}>
              <ButtonForArrow>
                <AvailableForExchange
                  ticker={ticker}
                  buy={havePaymentEnabled({ ticker, ...rest }, 'buy')}
                  sell={havePaymentEnabled({ ticker, ...rest }, 'sell')}
                />
              </ButtonForArrow>
            </CurrenciesTableCell>
          ),
        },
      ]);
    }
  }, [breakpoint]);

  return {
    columns,
    items,
    setItems,
    onRowClick,
  };
};

export default useCurrencies;
