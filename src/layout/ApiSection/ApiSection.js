import React, { memo } from 'react';
import Link from 'next/link';
import css from './ApiSection.module.scss';
import { Button } from 'components/Button';
import { useBreakPoint } from 'hooks/useResponsive';

const mockedDataBlocks = [
  {
    title: 'Customisable widget',
    subtitle: 'A highly customisable widget for your service that only takes minutes to integrate.',
  },
  {
    title: 'Simple documentation',
    subtitle: 'Our API docs are easy to navigate while having all the info you need.',
  },
  {
    title: 'Powerful API',
    subtitle: 'Robust & highly customisable API  enables seamless integration into any application',
  },
];

const ApiSection = memo(() => {
  const breakpoint = useBreakPoint();
  return (
    <div className={css.section}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.divider}>
            <div />
            <h1>OR</h1>
            <div />
          </div>

          <div className={css.apiSectionHeading}>
            <div className={css.heading}>
              <h2>
                Integrate our powerful <div>API</div>
              </h2>
            </div>
            <div className={css.subheading}>
              <p>Guardarian offers a robust and easy-to-use API, making integration a hassle-free process.</p>
            </div>
          </div>

          <div className={css.apiMainSection}>
            <div className={css.widgetSection}>
              <div className={css.containerMobile}>
                <div className={css.widgetContainer}>
                  <div className={css.sectionBlocks}>
                    {mockedDataBlocks.map((item, index) => {
                      return (
                        <div className={css.sectionBlock}>
                          <div className={css.sectionBlockInfo}>
                            <div>
                              <h3>{item.title}</h3>
                            </div>
                            <div>
                              <p>{item.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {breakpoint !== 'mobile' && (
                  <Link href='/api-doc'>
                    <Button className={css.actionButton}>
                      <span>Read API docs</span>
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {breakpoint !== 'mobile' && (
              <div className={css.widgetSection2}>
                <div className={css.containerMobile}>
                  <div className={css.calculatorContainer}>
                    <div className={css.apiCode}>
                      <div className={css.imageBlock}>
                        <img style={{ width: 343 }} src='/apiCodeMobile.png' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {breakpoint === 'mobile' && (
              <div className={css.widgetSection2}>
                <div className={css.containerMobile}>
                  <div className={css.calculatorContainer}>
                    <div className={css.apiCode}>
                      <div className={css.imageMobileBlock}>
                        <img style={{ width: 250 }} src='/apiCodeMobile.png' />
                      </div>
                      <Link href='/api-doc'>
                        <Button className={css.actionButton}>
                          <span>Read API docs</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

ApiSection.displayName = 'ApiSection';

export { ApiSection };
