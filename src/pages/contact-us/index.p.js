import React from 'react';

import { DocHead } from 'layout/Head';
import { Footer } from 'layout/Footer';
import { PageHeader } from 'layout/ContactUs/Header';
import { Contacts } from 'layout/ContactUs/Contacts';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { TwitterMeta } from 'components/Meta/TwitterMeta';

const data = {
  title: 'Contact us',
};

const metaData = {
  url: 'https://guardarian.com/contact-us',
  title: 'Contact Us | Guardarian fiat on-ramp',
  description:
    'Contact us regarding business inquiries, marketing partnerships, listing requests. Drop us an email or write to telegram!',
  image: 'https://guardarian.com/services/sell-crypto-mobile.png',
};

const BusinessForm = () => (
  <>
    <DocHead title={data.title} showNav linkCanonical={metaData.url}>
      {/* Primary Meta Tags */}
      <title> {metaData.title} </title>
      <meta name='title' content={metaData.title} key='title' />
      <meta name='description' content={metaData.description} key='description' />
    </DocHead>
    <FacebookMeta
      url={metaData.url}
      title={metaData.title}
      description={metaData.description}
      image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
    />
    <TwitterMeta
      url={metaData.url}
      title={metaData.title}
      description={metaData.description}
      image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
    />
    <PageHeader title={data.title} />
    <Contacts />
    <Footer />
  </>
);

export default BusinessForm;
