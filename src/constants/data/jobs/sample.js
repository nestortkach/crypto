import React from 'react';

import { Title } from 'components/Title';

export const sampleData = {
  slug: 'junior-customer-support-manager',
  banner: {
    title: 'Junior customer support manager',
    subtext: 'Posted on 23th of December, 2020',
  },
  sidebar: (
    <>
      <p>
        <strong>Office:</strong> Remote work
      </p>
      <p>
        <strong>Conditions:</strong>
      </p>
      <ul>
        <li>Competitive salary for a junior position</li>
        <li>A paid holidays</li>
        <li>Free work-time choice</li>
      </ul>
      <p>
        <strong>Team:</strong> Customer support
      </p>
    </>
  ),
  content: (
    <>
      <Title tag='h2' size='sm'>
        Short description
      </Title>
      <p>
        Guardarian, fast developing crypto exchange company, is looking for the Junior Customer Support Specialist. Our
        Customer Support team works remotely, from all parts of planet earth. We care about our customers, that is why
        we have set up an absolutely secure system and established a 24\7 live chat. Human-only area, no chatbots.
      </p>

      <Title tag='h2' size='sm'>
        This role is for you if:
      </Title>

      <ul>
        <li>You have a comfortable level of English</li>
        <li> Time management and organizational skills are about you</li>
        <li> Your way of thinking is problem-solving</li>
        <li> You are stress tolerance for unusual situations</li>
        <li> You are team player with personal position</li>
        <li> You have interest in crypto and are passionate about it</li>
      </ul>

      <Title tag='h2' size='sm'>
        Your main goals would be:
      </Title>

      <ul>
        <li>Creating marvellous customer experience</li>
        <li>Providing solution to customer complaint quickly and smoothly</li>
        <li>Asking the right questions to understand the customers issue</li>
        <li>Providing proper feedback to the team for future service improvement</li>
        <li>Knowing the product and being able to recommend the client the right service we provide</li>
      </ul>

      <Title tag='h2' size='sm'>
        Benefits of joining us:
      </Title>

      <ul>
        <li>Fast-growing international team with cool people</li>
        <li>Work and travel, no need to be in the office</li>
        <li>Free work-time choice, depending on your lifestyle</li>
        <li>Crypto gurus who will teach you something new daily</li>
      </ul>
    </>
  ),
};
