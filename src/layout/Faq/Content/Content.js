import React from 'react';
import Link from 'next/link';

import { Text } from 'components/Text';
import { Collapse, Accordion } from 'components/Accordion';
import { Button } from 'components/Button';

import css from './Content.module.scss';

export const FaqContent = ({ data }) => (
  <div className={css.component}>
    <div className='container'>
      {data.map((section) => (
        <section key={section.blockTitle} className={css.section}>
          <Text tag='h2' size='lg' fontWeight='medium' className={css.sectionTitle}>
            {section.blockTitle}
          </Text>

          <Collapse>
            {section.blockData.map((acc) => (
              <Accordion key={acc.title} header={acc.title}>
                <Text className='dynamic-content' size='md' fontWeight='light'>
                  {acc.content}
                </Text>
              </Accordion>
            ))}
          </Collapse>
        </section>
      ))}

      <footer className={css.footer}>
        <Link href='/'>
          <span>
            <Button className={css.btn} green>
              Try it now
            </Button>
          </span>
        </Link>
      </footer>
    </div>
  </div>
);
