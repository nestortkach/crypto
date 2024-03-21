import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-pepe',
    title: 'Buy Pepe (PEPE) | Buy Pepe with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Pepe. Discover the best EUR to PEPE and USD to PEPE exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Pepe Coin (PEPE) ',
    text: `Pepe Coin is a crypto homage to the famous “Pepe the Frog” meme. It may not have serious use cases, but it has a serious meme appeal that brought it into prominence as one of the biggest meme coins. Pepe coin skyrocketed in May 2023, seeing its value explode in a matter of weeks. Buy Pepe now without registration or keep reading to know more about it!`,
    info: {
      release: 2023,
      ticker: 'PEPE',
      creator: 'Anonymous',
    },
    theme: 'pepe',
    currency: 'pepe',
  },
  about: {
    articles: [
      {
        title: 'What is Pepe Coin (PEPE)?',
        text: (
          <>
            <p>
              <b>PEPE</b> is an Ethereum-based, <b>deflationary</b> cryptocurrency. It was launched stealthily & without
              presale in April 2023. PEPE has a total supply of 420,690,000,000,000 (420 trillion) tokens that are
              distributed as follows:
              
              <ul>
                <li>
                  <b>93.1%</b> sent to the liquidity pool, LP burnt & contract renounced.
                </li>
                <li>
                  <b>6.9%</b> held in a trackable multi-sig wallet for use in future CEX listings, bridges and liquidity
                  pools.
                </li>
              </ul>
              Such token allocation is meant to promote PEPE’s long-term stability and future growth. It is also meant
              to incentivize users to hold the token instead of selling it off.
            </p>
            <br />
            <p>
              Pepe coin is a tribute to the <b>Pepe the Frog meme</b>, which is itself based on the comic character
              created by the cartoonist Matt Furie in the early 2000s. Pepe has since become one of the most popular
              memes in internet history. So, it is not surprising that turning it into a cryptocurrency has paid off for
              the Pepe Coin team.
            </p>
            <br />
            <p>
              The founders of Pepe Coin chose to remain anonymous - a common occurrence in the crypto world. But though
              very little is known about the PEPE team, we know that they were successful in generating media attention
              and capitalizing on the popularity of meme coins such as Dogecoin, Shiba Inu and others.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy Pepe Coin (PEPE)?',
        text: (
          <>
            <p>
              Pepe Coin has a strong appeal stemming from the fame, popularity and controversy of Pepe the Frog. As with
              most other meme coins, PEPE’s growth and success is rooted in <b>what it represents</b> rather than what
              functionality it offers.
            </p>
            <br />
            <p>
              Another important aspect of PEPE is its <b>zero tax policy</b>. Not having to pay transaction fees makes
              Pepe Coin a unique offering in the meme coin space. It can help grow PEPE’s user base and attract a wider
              range of investors by making it more usable & bringing it into prominence.
            </p>
            <br />
            <p>
              Finally, Pepe Coin’s <b>redistribution system</b> is designed to reward stakers and long-term PEPE
              holders. This is supposed to incentivize more people to invest into the project and increase its long-term
              stability.
            </p>
          </>
        ),
      },
    ],
    theme: 'pepe',
  },
  exchange: {
    currency: 'PEPE',
    network: 'ETH',
    name: 'PEPE',
    usdImageSrc: '/pepe/pepe-usd.svg',
    eurImageSrc: '/pepe/pepe-eur.svg',
    usdText: `The current 1 Dollar to PEPE exchange rate is PEPE. Get PEPE fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get PEPE.`,
    eurText: `The current 1 Euro to PEPE exchange rate is PEPE. Get PEPE fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get PEPE.`,
  },
  howToBuy: {
    name: 'Pepe',
    ticker: 'PEPE',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
