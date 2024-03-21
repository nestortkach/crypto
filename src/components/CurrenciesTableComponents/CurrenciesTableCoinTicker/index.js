import React from 'react';
import Link from 'next/link';

import { buyTokenUrlGenerator } from 'utils/buyTokenHelper';

const CurrenciesTableCoinTicker = ({ ticker }) => <Link href={buyTokenUrlGenerator(ticker)}>{ticker}</Link>;

export default CurrenciesTableCoinTicker;
