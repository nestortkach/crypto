export const formatNumber = (number) => {
  if (!number) {
    return '0.0';
  }

  const splitNum = String(number).split('.');

  if (splitNum?.length !== 2 || splitNum[0]?.length + splitNum[1]?.length < 9) {
    return number;
  }

  if (splitNum[0].length > 8) {
    return splitNum[0];
  }

  return `${splitNum[0]}.${splitNum[1].slice(0, 9 - splitNum[0].length)}`;
};

export const getFeesSummary = (fees) =>
  !fees.length ? 0 : fees.reduce((acc, fee) => Number(formatNumber(acc + Number(fee.amount), true)), 0);

export const formatExchangeRate = (exchangeRate, isFiat) => {
  const formattedRate = {
    number: Number(exchangeRate),
    exp: 0,
  };

  if (!isFiat) {
    formattedRate.number = 1 / exchangeRate;
  }

  if (formattedRate.number >= 10000) {
    formattedRate.number = formattedRate.number.toFixed(0);
  }

  if (formattedRate.number >= 0.01 && formattedRate.number < 10000) {
    formattedRate.number = formattedRate.number.toFixed(2);
  }

  if (formattedRate.number < 0.01 && formattedRate.number >= 1e-6) {
    const stringRate = String(formattedRate.number);

    formattedRate.exp = 1;

    for (let i = 0; i < stringRate.length; i++) {
      if (stringRate[i] !== '0' && stringRate[i] !== '.') {
        if (stringRate.length - i >= 3) {
          formattedRate.number = `${stringRate[i]}.${stringRate[i + 1]}${stringRate[i + 2]}`;
          break;
        }

        if (stringRate.length - i === 2) {
          formattedRate.number = `${stringRate[i]}.${stringRate[i + 1]}`;
          break;
        }

        formattedRate.number = `${stringRate[i]}.00`;
        break;
      }

      formattedRate.exp -= 1;
    }
  }

  if (formattedRate.number < 1e-6) {
    const stringRate = String(formattedRate.number);

    formattedRate.number = Number(stringRate.slice(0, stringRate.indexOf('e-'))).toFixed(2);
    formattedRate.exp = Number(stringRate.slice(stringRate.indexOf('-')));
  }

  return formattedRate;
};

export const roundMinMax = (value, isMax) =>
  isMax ? Math.floor(value * 100000) / 100000 : Math.ceil(value * 100000) / 100000;

export const partnerApiTokens = {
  '62d73389-50ea-411b-9e88-3491d3e7bf67': 'coinspace',
};
