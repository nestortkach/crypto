import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useBreakPoint } from 'hooks/useResponsive';
import { useIntoViewOnce } from 'hooks/useIntoViewOnce';

import css from './BestChoice.module.scss';
import cn from 'classnames';

const Calculator = dynamic(() => import('../../components/Calculator/Calculator').then((module) => module.Calculator));

const buttons = [{ title: 'Widget' }, { title: 'API' }];

const BestChoiceSection = ({ withFormBackground = true, renderCalculator = (props) => <Calculator {...props} /> }) => {
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
          {breakpoint === 'mobile' && <h2 className={css.madeDevelop}>Integrate how you want</h2>}
          {breakpoint === 'tablet' && <h2 className={css.madeDevelop}>Integrate how you want</h2>}
          <div className={css.infoAndWidgetBlock}>
            <div className={css.findOutMore}>
              {breakpoint === 'laptop' && <h2 className={css.madeDevelop}>Integrate how you want</h2>}
              <div className={css.aboutWidget}>
                <h3 className={css.texttitle}>Customisable widget</h3>
                <p>
                  Add our customisable plug-and-play widget to your service in just a few clicks. No technical knowledge
                  required.
                </p>
              </div>
              <div className={css.aboutApi}>
                <h3 className={css.texttitle}>Robust API</h3>
                <p>
                  Use our powerful API to seamlessly integrate a fiat gateway along with crypto subscriptions into any
                  platform.
                </p>
              </div>

              <Link href='https://guardarian.com/integrate-us'>
                <div className={css.findOutMoreButton}>
                  <button type='button'>
                    <span>Find out more</span>
                  </button>
                </div>
              </Link>
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
                  <div ref={calculatorRef} className={cn([css.sections, withFormBackground && css.formBackground])}>
                    {renderCalculator({ noFetchEstimate: isLoading || !isIntoView })}
                  </div>
                ) : (
                  <div>
                    <div className={css.apiSection}>
                      <img alt='' src='/ApiImage.jpg' />
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
      </div>
    </div>
  );
};

BestChoiceSection.displayName = 'BestChoiceSection';

export { BestChoiceSection };
