import React from 'react';
import Collapse from 'rc-collapse';
import { Accordion } from 'components/Accordion/Accordion';
import { NewArrowRight } from 'components/Icons/ArrowRight';

import css from './Faq.module.scss';

const data = [
  {
    title: 'What are Guardarian subscriptions?',
    text: (
      <>
        Subscriptions are a tool that lets you delegate your routine crypto exchanges to us, so you can focus on what is
        really important to you. You just need to choose what, how much and how often to exchange. After this is done,
        we will start making secure crypto transactions directly into your wallet of choice while you do what matters ot
        you the most.
      </>
    ),
  },
  {
    title: 'Why is that useful?',
    text: (
      <>
        Here is a simple use case scenario: <br /> George wants to start investing a portion of his monthly salary into
        Bitcoin. So, he uses our subscriptions tool to start exchanging 100 USD to BTC every month. Now he can he
        doesn’t have to worry about doing manual exchanges - he can simply watch his crypto portfolio grow as we safely
        do his investments for him!
      </>
    ),
  },
];

function Faq() {
  return (
    <section className={css.sectionContainer}>
      <div className={css.container}>
        <h2 className={css.title}>Frequently asked questions</h2>
        {data.map((faqItem) => (
          <Collapse key={faqItem.title} accordion>
            <Accordion panelClass={css.panel} headerClass={css.subTitle} header={faqItem.title}>
              <div className={css.text}>{faqItem.text}</div>
            </Accordion>
          </Collapse>
        ))}
      </div>
      <div className={css.infoBlock}>
        <span>Find more answers about using Subscriptions tool in our </span>
        <a className={css.link} target='_blank' rel='noreferrer' href='https://guardarian.freshdesk.com/support/home'>
          Knowledge base <NewArrowRight color='#368DF1' height={8} width={12} />
        </a>
      </div>
    </section>
  );
}

export { Faq };
