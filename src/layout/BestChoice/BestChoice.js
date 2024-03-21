import React, { memo, useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { useBreakPoint } from 'hooks/useResponsive';
import { useIntoViewOnce } from 'hooks/useIntoViewOnce';

import css from './BestChoice.module.scss';

const Calculator = dynamic(() => import('../../components/Calculator/Calculator').then((module) => module.Calculator));

const items = [
  {
    title: 'Supported',
    subtitle: 'Countries',
    value: '170+',
  },
  {
    title: 'Supported',
    subtitle: 'Cryptocurrencies',
    value: '400+',
  },
  {
    title: 'Supported',
    subtitle: 'Fiat currencies',
    value: '40+',
  },
  {
    title: 'Major payment',
    subtitle: 'methods',
    value: 'All ',
  },
];

const integrateLogos = [
  '/integrate-logos/logo1.svg',
  '/integrate-logos/logo2.svg',
  '/integrate-logos/logo3.svg',
  '/integrate-logos/logo4.svg',
  '/integrate-logos/logo5.svg',
  '/integrate-logos/logo6.svg',
  '/integrate-logos/logo7.svg',
  '/integrate-logos/logo8.svg',
  '/integrate-logos/logo9.svg',
  '/integrate-logos/logo10.svg',
];
const integrateLogosMobile = [
  '/integrate-logos/logo1.svg',
  '/integrate-logos/logo2.svg',
  '/integrate-logos/logo3.svg',
  '/integrate-logos/logo4.svg',
  '/integrate-logos/logo5.svg',
  '/integrate-logos/logo7.svg',
];

const reasonsFornIntegrate = [
  {
    title: 'Grow your user base',
    description: 'Attract customers globally, let them pay how they want ',
    img: '/globalBtc.svg',
  },
  {
    title: 'Boost your revenues',
    description: 'Generate more transactions and earn affiliate rewards',
    img: '/chartArrow.svg',
  },
  {
    title: 'Eliminate your risks',
    description: 'Keep all exchanges risk-free with our industry-leading security features',
    img: '/bitcoinArrow.svg',
  },
];

const buttons = [
  {
    title: 'Widget',
  },
  {
    title: 'API',
  },
];

const BestChoiceSection = memo(() => {
  const [isLoading, setIsLoaded] = useState(true);
  const breakpoint = useBreakPoint();
  const [active, setActive] = useState(0);
  const calculatorRef = useRef(null);
  const isIntoView = useIntoViewOnce(calculatorRef);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={css.wrapper}>
      <div className={css.bestChoiceSection}>
        <div className={css.container}>
          <div className={css.titles}>
            <h2 className={css.heading}>On-ramp & Off-ramp integration</h2>
            <p className={css.subheading}>
              Enable your customers to buy & sell crypto directly on your website in a fast, non-custodial way.
            </p>
          </div>
        </div>

        <div className={css.containerWithImg}>
          <div className={css.featuresSection}>
            <div className={css.cryptoImage}>
              {breakpoint === 'laptop' ? (
                <img className={css.imgDesktop} src='/cryptoLine-icon.png' />
              ) : (
                <img src='/cryptoLine-mobile.png' />
              )}
            </div>

            <div className={css.featuesBlock}>
              <div className={css.integration}>
                <h3>Global coverage, best choice of crypto</h3>
                <div className={css.features}>
                  {items.map((item, index) => (
                    <div key={index} className={css.feature}>
                      <p className={css.points}>{item.value}</p>
                      <div>
                        <p className={css.title}>{item.title}</p>
                        <p className={css.subtitle}>{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href='/integrate-us'>
                  <div className={css.action}>
                    <button type='button'>
                      <span>Integrate us</span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={css.container}>
          <div className={css.divider} />
        </div>

        <div className={css.container}>
          {breakpoint === 'mobile' && <h3 className={css.madeDevelop}>Made with developers in mind</h3>}
          {breakpoint === 'tablet' && <h3 className={css.madeDevelop}>Made with developers in mind</h3>}
          <div className={css.infoAndWidgetBlock}>
            <div className={css.findOutMore}>
              {breakpoint === 'laptop' && <h3 className={css.madeDevelop}>Made with developers in mind</h3>}
              <div className={css.aboutWidget}>
                <h4>Customisable widget</h4>
                <p>Plug & Play, fully customisable widget for your service. No technical knowledge necessary.</p>
              </div>
              <div className={css.aboutApi}>
                <h4>Powerful API</h4>
                <p>
                  Robust & highly customizable API with simple native documentation enables seamless integration into
                  any application.
                </p>
              </div>

              <a href='https://guardarian.com/integrate-us'>
                <div className={css.findOutMoreButton}>
                  <button type='button'>
                    <span>Find out more</span>
                  </button>
                </div>
              </a>
            </div>

            <div className={css.widgetOrApiSection}>
              <div className={css.apiOrWidgetButton}>
                {buttons.map((item, index) => (
                  <div
                    onClick={() => setActive(index)}
                    className={active === index ? css.chooseButtonActive : css.chooseButtonUnactive}
                    key={item.title}
                  >
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>

              <div>
                {active === 0 ? (
                  <div ref={calculatorRef} className={css.sections}>
                    <Calculator noFetchEstimate={isLoading || !isIntoView} />
                  </div>
                ) : (
                  <div>
                    <div className={css.apiSection}>
                      <img src='/ApiImage.jpg' />
                      <div className={css.readApiButton}>
                        <Link href='/api-doc'>
                          <button type='button'>
                            <span>Read API Docs</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={css.container}>
          <div className={css.divider} />
        </div>

        <div className={css.container}>
          <div className={css.reasonsForIntegration}>
            <h3>Why integrate an on-ramp?</h3>
            <div className={css.reasons}>
              {reasonsFornIntegrate.map((item, index) => (
                <div className={css.reason} key={index}>
                  <div className={css.reasonImage}>
                    <img src={item.img} />
                  </div>

                  <div className={css.reasonInfo}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href='/for-partners#contactUsCrypto'>
              <div className={css.action}>
                <button type='button'>
                  <span>Integrate us</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className={css.integrateLogos}>
          {breakpoint === 'mobile'
            ? integrateLogosMobile.map((item) => (
                <img style={{ width: 30, height: 30 }} key={`${item}-mobile`} src={item} />
              ))
            : integrateLogos.map((item) => <img key={item} src={item} />)}
        </div>
      </div>
    </div>
  );
});

BestChoiceSection.displayName = 'BestChoiceSection';

export { BestChoiceSection };
