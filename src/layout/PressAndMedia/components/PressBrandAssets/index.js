import React from 'react';
import Image from 'next/image';

import { useBreakPoint } from 'hooks/useResponsive';

import css from './PressBrandAssets.module.scss';

const logoItems = [
  {
    img: '/press/guardarian-blue-alt.svg',
    backgroundClass: 'white',
    downloadImg: '/press/arow-download-blue.svg',
    width: 216,
    height: 24,
    id: 0,
  },
  {
    img: '/press/guardarian-blue-text.svg',
    backgroundClass: 'white',
    downloadImg: '/press/arow-download-blue.svg',
    width: 163,
    height: 110,
    id: 1,
  },
  {
    img: '/press/guardarian-blue.svg',
    backgroundClass: 'white',
    downloadImg: '/press/arow-download-blue.svg',
    width: 76,
    height: 78,
    id: 2,
  },
  {
    img: '/press/guardarian-grey-alt.svg',
    backgroundClass: 'blue',
    downloadImg: '/press/arrow-white-download.svg',
    width: 216,
    height: 24,
    id: 3,
  },
  {
    img: '/press/guardarian-grey-text.svg',
    backgroundClass: 'blue',
    downloadImg: '/press/arrow-white-download.svg',
    width: 163,
    height: 110,
    id: 4,
  },
  {
    img: '/press/guardarian-grey.svg',
    backgroundClass: 'blue',
    downloadImg: '/press/arrow-white-download.svg',
    width: 76,
    height: 78,
    id: 5,
  },
];
const screenItems = [
  {
    img: '/press/Main-Page-Screenshot.webp',
    alt: 'Main-Page-Screenshot',
    width: 230,
    height: 134,
    mobWidth: 160,
    mobHeight: 109,
    id: 0,
  },
  {
    img: '/press/Buying-process-screenshot.webp',
    alt: 'Buying-process-screenshot',
    width: 230,
    height: 146,
    mobWidth: 160,
    mobHeight: 109,
    id: 1,
  },
  {
    img: '/press/Card-page-screenshot.webp',
    alt: 'Card-page-screenshot',
    width: 230,
    height: 145,
    mobWidth: 160,
    mobHeight: 109,
    id: 2,
  },
  {
    img: '/press/Currencies-list-screenshot.webp',
    alt: 'currencies-screenshot',
    width: 230,
    height: 131,
    mobWidth: 160,
    mobHeight: 109,
    id: 3,
  },
];
const colors = [
  {
    color: '#0042B8',
    id: 0,
  },
  {
    color: '#000756',
    id: 1,
  },
  {
    color: '#5583FF',
    id: 2,
  },
  {
    color: '#F3F9FF',
    id: 3,
  },
  {
    color: '#1B2125',
    id: 4,
  },
];
export default function index() {
  const breakPoint = useBreakPoint();
  return (
    <div className={css.brandWrapper} id='brand-assets'>
      <section className={css.brandContainer}>
        <h2>Brand Assets</h2>
        <p>Get a complete set of brand assets and design elements from our media kit below.</p>
        <h3>Logotypes</h3>
        <p className={css.logotypesSubHeader}>
          Please avoid using any visual effects making Guardarian logo unrecognizable.
        </p>
        <div className={css.logoContainer}>
          {logoItems.map((item) => (
            <div key={item.id} className={item.backgroundClass === 'white' ? css.white : css.blue}>
              <img
                src={item.img}
                alt='Guardarian Logo'
                style={{ width: `${item.width}px`, height: `${item.height}px` }}
              />
              <div className={css.downloadArrow}>
                <a href={item.img} download>
                  <Image src={item.downloadImg} alt='download Arrow' width={16} height={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <h4>Screenshots</h4>
        <h5>Use these high-res screenshots in your publications with link to https://guardarian.com </h5>
        <div className={css.screenshotsContainer}>
          {screenItems.map((item) => (
            <div key={item.id} className={css.screenshotsItem}>
              <img
                className={css.screenImg}
                src={item.img}
                alt={item.alt}
                style={{
                  width: `${breakPoint !== 'mobile' ? item.width : item.mobWidth}px`,
                  height: `${breakPoint !== 'mobile' ? item.height : item.mobHeight}px`,
                }}
              />
              <div className={css.roundedAroow}>
                <a href={item.img} download>
                  <Image src={'/press/arrow-rounded.svg'} width={32} height={32} alt={'download'} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={css.colorFonts}>
          <div className={css.colorsContainer}>
            <h4>Colors</h4>
            <h5>Guardarian brand color scheme</h5>
            <div className={css.colors}>
              {colors.map((item) => (
                <div key={item.id} className={css.colorsItem} style={{ backgroundColor: item.color }}>
                  <p>{item.color}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={css.fontsContainer}>
            <h4>Fonts</h4>
            <h5>We use Roboto as our main font in all products.</h5>
            <div className={css.fontsItems}>
              <p>Roboto Light</p>
              <p>Roboto Medium</p>
              <p>Roboto Bold</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
