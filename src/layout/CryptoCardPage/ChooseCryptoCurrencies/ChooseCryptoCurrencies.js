import React from 'react';
import css from './ChooseCryptoCurrencies.module.scss';

import { useBreakPoint } from 'hooks/useResponsive';
const currencies = [
  {
    img: 'icons-coins/xdc.svg',
    alt: 'xdc',
    title: 'XDC',
  },
  {
    img: '/currencies/usdc-trx.svg',
    alt: 'usdc',
    title: 'USDC',
  },
  {
    img: 'icons-coins/dai.svg',
    alt: 'dai',
    title: 'Dai',
  },
  {
    img: 'icons-coins/trx.svg',
    alt: 'trx',
    title: 'Tron',
  },
  {
    img: 'icons-coins/usdt.svg',
    alt: 'usdt',
    title: 'Tether',
  },
  {
    img: '/currencies/xrp-xrp.svg',
    alt: 'ripple',
    title: 'XRP',
  },
  {
    img: 'polkadot-logo.svg',
    alt: 'PolkaDot',
    title: 'Polkadot',
  },
  {
    img: 'icons-coins/ltc.svg',
    alt: 'ltc',
    title: 'Litecoin',
  },
  {
    img: '/currencies/eth-eth.svg',
    alt: 'eth',
    title: 'Ethereum',
  },
  {
    img: 'icons-coins/eos.svg',
    alt: 'eos',
    title: 'Eos',
  },
  {
    img: '/currencies/etc-etc.svg',
    alt: 'etc',
    title: 'Ethereum Classic',
  },
  {
    img: 'icons-coins/bch.svg',
    alt: 'bitcoin cash',
    title: 'Bitcoin Cash',
  },
  {
    img: '/currencies/btc-btc.svg',
    alt: 'Bitcoin',
    title: 'Bitcoin',
  },
  {
    img: '/currencies/ada-ada.svg',
    alt: 'cardano',
    title: 'Cardano',
  },
  {
    img: '/currencies/firo-firo.svg',
    alt: 'Firo',
    title: 'Firo',
    subtitle: 'FIRO',
  },
  {
    img: '/currencies/atom-atom.svg',
    alt: 'Atom',
    title: 'Atom',
  },
  {
    img: '/currencies/aave-eth.svg',
    alt: 'Aave',
    title: 'Aave',
  },
  {
    img: '/currencies/doge-doge.svg',
    alt: 'DOGE',
    title: 'Dogecoin',
  },
  {
    img: '/currencies/shib-eth.svg',
    alt: 'SHIB',
    title: 'SHIB',
  },
  {
    img: '/currencies/busd-eth.svg',
    alt: 'BUSD',
    title: 'BUSD',
  },
  {
    img: '/currencies/bsv-bsv.svg',
    alt: 'BSV',
    title: 'Bitcoin SV',
  },
  {
    img: '/currencies/kdoe-eth.svg',
    alt: 'kdoe',
    title: 'Kudoe',
    subtitle: 'KDOE',
  },
];

const coins = [
  {
    img: '/currencies/aave-bsc.svg',
    alt: 'Aave',
    title: 'Aave',
    subtitle: 'AAVE',
  },
  {
    img: '/currencies/btc-btc.svg',
    alt: 'Bitcoin',
    title: 'Bitcoin',
    subtitle: 'BTC',
  },
  {
    img: '/currencies/eth-eth.svg',
    alt: 'Ethereum',
    title: 'Ethereum',
    subtitle: 'ETH',
  },
  {
    img: '/currencies/chz-eth.svg',
    alt: 'Chiliz',
    title: 'Chiliz',
    subtitle: 'CHZ',
  },
  {
    img: '/currencies/link-eth.svg',
    alt: 'Chainlink',
    title: 'Chainlink',
    subtitle: 'LINK',
  },
  {
    img: '/currencies/doge-doge.svg',
    alt: 'Dogecoin',
    title: 'Dogecoin',
    subtitle: 'DOGE',
  },
  {
    img: 'monero-logo.svg',
    alt: 'Monero',
    title: 'Monero',
    subtitle: 'MONERO',
  },
  {
    img: '/currencies/nano-nano-64.png',
    alt: 'Nano',
    title: 'Nano',
    subtitle: 'NANO',
  },
  {
    img: '/currencies/shib-eth.svg',
    alt: 'Shiba Inu',
    title: 'Shiba Inu',
    subtitle: 'SHIB',
  },
  {
    img: '/currencies/sol-bsc.svg',
    alt: 'Solana',
    title: 'Solana',
    subtitle: 'SOL',
  },
  {
    img: '/currencies/uni-eth.svg',
    alt: 'Uniswap',
    title: 'Uniswap',
    subtitle: 'UNI',
  },
  {
    img: '/currencies/bat-eth.svg',
    alt: 'Helium',
    title: 'Helium',
    subtitle: 'BAT',
  },
  {
    img: '/currencies/xlm-xlm.svg',
    alt: 'Stellar',
    title: 'Stellar',
    subtitle: 'XML',
  },
  {
    img: '/currencies/xrp-xrp.svg',
    alt: 'Ripple',
    title: 'Ripple',
    subtitle: 'XRP',
  },
  {
    img: 'polkadot-logo.svg',
    alt: 'Polkadot',
    title: 'Polkadot',
    subtitle: 'DOT',
  },
  {
    img: 'pancake-logo.svg',
    alt: 'Pancake Swap',
    title: 'Pancake Swap',
    subtitle: 'CAKE',
  },
  {
    img: '/currencies/cro-cro.svg',
    alt: 'Cronos',
    title: 'Cronos',
    subtitle: 'CRO',
  },
  {
    img: '/currencies/avax-bsc.svg',
    alt: 'Avalanche',
    title: 'Avalanche',
    subtitle: 'AVAX',
  },
  {
    img: '/currencies/kishu-eth.svg',
    alt: 'Kishu Inu',
    title: 'Kishu Inu',
    subtitle: 'KISHU',
  },
  {
    img: '/currencies/firo-firo.svg',
    alt: 'Firo',
    title: 'Firo',
    subtitle: 'FIRO',
  },
  {
    img: '/currencies/atom-atom.svg',
    alt: 'Atom',
    title: 'Atom',
    subtitle: 'ATOM',
  },
  {
    img: '/currencies/aave-eth.svg',
    alt: 'Aave',
    title: 'Aave',
    subtitle: 'AAVE',
  },
];

const coinsMobile = [
  {
    img: '/currencies/aave-bsc.svg',
    alt: 'Aave',
    title: 'Aave',
    subtitle: 'AAVE',
  },
  {
    img: '/currencies/chz-eth.svg',
    alt: 'Chiliz',
    title: 'Chiliz',
    subtitle: 'CHZ',
  },
  {
    img: '/currencies/nano-nano-64.png',
    alt: 'Nano',
    title: 'Nano',
    subtitle: 'NANO',
  },
  {
    img: '/currencies/shib-eth.svg',
    alt: 'Shiba Inu',
    title: 'Shiba Inu',
    subtitle: 'SHIB',
  },
  {
    img: '/currencies/xrp-bsc.svg',
    alt: 'Ripple',
    title: 'Ripple',
    subtitle: 'XRP',
  },
  {
    img: '/currencies/sol-bsc.svg',
    alt: 'Solana',
    title: 'Solana',
    subtitle: 'SOL',
  },
  {
    img: '/currencies/avax-bsc.svg',
    alt: 'Avalanche',
    title: 'Avalanche',
    subtitle: 'AVAX',
  },
  {
    img: '/currencies/xlm-xlm.svg',
    alt: 'Stellar',
    title: 'Stellar',
    subtitle: 'XML',
  },
  {
    img: '/currencies/uni-eth.svg',
    alt: 'Uniswap',
    title: 'Uniswap',
    subtitle: 'UNI',
  },
  {
    img: '/currencies/firo-firo.svg',
    alt: 'Firo',
    title: 'Firo',
    subtitle: 'FIRO',
  },
  {
    img: '/currencies/atom-atom.svg',
    alt: 'Atom',
    title: 'Atom',
    subtitle: 'ATOM',
  },
];

export const ChooseCryptoCurrencies = () => {
  const breakpoint = useBreakPoint();
  const dataCoins = breakpoint === 'laptop' ? coins : coinsMobile;
  return (
    <section className={css.section}>
      <div className={['container', css.wrapper].join(' ')}>
        <h2 className={css.title}>Pay how you want</h2>
        <p className={css.description}>
          Choose from over <b>22 different cryptocurrencies</b> to pay with
        </p>
        <div>
          <div className={css.iconsContainer}>
            {currencies.map((item) => (
              <div key={item.title} className={css.iconItem}>
                <img src={item.img} alt={item.alt} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <p className={css.description}>
          Buy, Sell & Transfer <b>over 400 cryptocurrencies</b> through our app
        </p>
        <div className={css.coinsWrapper}>
          <div className={css.coinsContainer}>
            {dataCoins.map((item) => (
              <div key={item.img} className={css.coinsItem}>
                <div className={css.coinsItemText}>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>
                <img src={item.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
