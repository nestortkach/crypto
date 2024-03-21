import React from 'react';
import { Collapse, Accordion } from 'components/Accordion';
import { Text } from '../../components/Text';
import css from './BuyCurrencyFaq.module.scss';

export const BuyCurrencyFaq = ({ data }) => (
  <div className={css.component}>
    <div className='container'>
      <h2 className={css.maintitle}>Guardarian On-ramp FAQ</h2>
      {data.map((section) => (
        <section key={section.blockTitle} className={css.section}>
          {section.blockTitle && (
            <Text tag='h2' size='lg' fontWeight='medium' className={css.sectionTitle}>
              {section.blockTitle}
            </Text>
          )}
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
    </div>
  </div>
);
