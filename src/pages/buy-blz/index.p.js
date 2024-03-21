import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'BLZ',
  tickerLower: 'blz',
  name: 'BLUZELLE',
  nameCamelCase: 'bluzelle',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-blz',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} Coin with Fiat, EUR & USD | Guardarian`,
    description: `Guardarian offers the most user-friendly environment for purchasing Bluzelle. Discover the best EUR to ${coin.tickerUpper} and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Buy BLUZELLE  quickly and secure with Guardarian. We at Guardarian have developed a fully automated system that allows each user to purchase BLUZELLE within seconds without having to face a long registration process. Still not sure to buy? Find out what BLUZELLE is and how it works below. If you end up being interested in this crypto asset, we will tell you how to buy BLUZELLE on Guardarian. ',
    info: {
      release: 2014,
      ticker: coin.tickerUpper,
      creator: 'Pavel Bains',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name}?`,
        text: 'Bluzelle is a  network that has been dedicated to the creative economy. Bluzelle delivers high security, un-matched availability, As blockchain, is laying the brickwork for a new online, decentralized infrastructure, centralized technology won’t be sufficient enough to support this new-age experience. The Bluzelle ecosystem connects potential customers to the database of suppliers with additional IT resources to provide this repository. By using this database, DApp and application advertisers can improve their products and allow reliable data and placement on secure platforms. Retailers can as well get BLZ and BNT (two tokens on the BlueGel network) as compensation for this offer.',
      },
      {
        title: `Why to buy ${coin.name}?`,
        text: 'If you are looking for a good return virtual currency, BLZ can be a profitable investment option. On Bluzelle you pay once and get backups on all nodes for the same price. Bluezelle guarantees that your file is always there for you. On Bluzelle, large volume downloads are not only possible but extremely fast. This is due to automatic replication on all nodes.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    name: coin.name,
    usdImageSrc: `/${coin.tickerLower}/usd-${coin.tickerLower}.png`,
    eurImageSrc: `/${coin.tickerLower}/eur-${coin.tickerLower}.png`,
  },
  howToBuy: {
    name: coin.name,
    ticker: coin.tickerUpper,
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
