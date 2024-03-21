import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'KEANU',
  tickerLower: 'keanu',
  name: 'KEANU INU',
  nameCamelCase: 'keanuInu',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-keanu',
    title: `Buy Keanu Inu (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD | Guardarian`,
    description: `Guardarian offers the most user-friendly environment for purchasing Keanu Inu. Discover the best EUR to ${coin.tickerUpper} and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Buy KEANU quickly and secure with Guardarian. We at Guardarian have developed a fully automated system that allows each user to purchase KEANU within seconds without having to face a long registration process. Still not sure to buy? Find out what KEANU is and how it works below. If you end up being interested in this crypto asset, we will tell you how to buy KEANU on Guardarian. ',
    info: {
      release: 2019,
      ticker: coin.tickerUpper,
      creator: 'Silvio Micali',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name}?`,
        text: "Keanu Inu strives to be more than your regular meme token and deliver something amazing by following in Keanu's footsteps by making regular charitable contributions. At first glance, this is a meme symbol, although it is a very powerful and influential meme, it also has some great features; One of KEANU’s most exciting sites is a distribution system that pays 2% of all purchases or sales directly to existing customers. If you have KEANU, your allowance will automatically increase. ",
      },
      {
        title: `Why to buy ${coin.name}?`,
        text: 'A current KEANU price is $0. Based on our Keanu Inu analysis, the investment today has a safety rank of 2.5 out of 10 and an expected gain of +346.7% as the price moves towards $0. The dominant ranking factor for this crypto asset is user votes. To calculate the potential ROI from the investment of Keanu Inu in 2021, the computer examined the current value of crypto assets in the last 6 months. The price of the coin is predictable, so there is a good chance that KEANU will always be near the highest price in the future.',
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
