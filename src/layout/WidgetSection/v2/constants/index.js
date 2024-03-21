import css from '../WidgetSection.module.scss';

export const typeBtns = [
  {
    id: 1,
    title: 'Narrow',
  },
  {
    id: 2,
    title: 'Wide',
  },
];

export const flowBtns = [
  {
    id: 1,
    title: 'Both',
    noDefaultSide: true,
  },
  {
    id: 2,
    title: 'Buy',
    name: 'buy_crypto',
  },
  {
    id: 3,
    title: 'Sell',
    name: 'sell_crypto',
  },
];

export const themeBtns = [
  {
    id: 1,
    title: 'Gradient',
    component: <span className={[css.colorBtn_gradientBlue, css.colorBtn].join(' ')} />,
  },
  {
    id: 2,
    title: 'Green',
    component: <span className={[css.colorBtn_green, css.colorBtn].join(' ')} />,
  },
  {
    id: 3,
    title: 'Bluee',
    component: <span className={[css.colorBtn_solidBlue, css.colorBtn].join(' ')} />,
  },
  {
    id: 4,
    title: 'Orange',
    component: <span className={[css.colorBtn_orange, css.colorBtn].join(' ')} />,
  },
];

export const defaultWidgetsData = {
  partnerApiToken: 'c14d927f-cb01-4561-9520-28ec22c92710',
  defaultSide: '',
  sideToggleDisabled: '',
  sellButtonDisabled: '',
  defaultCryptoNetwork: '',
  defaultCryptoCurrency: '',
  defaultFiatCurrency: '',
  defaultFiatAmount: '',
  cryptoCurrenciesList: '',
  fiatCurrenciesList: '',
  background: '',
  depositType: '',
  theme: 'blue',
  type: 'narrow',
};

export const maxValueLength = 8;
export const numberRegex = /^\d*\.?,?(?:\d{1,2})?$/;
