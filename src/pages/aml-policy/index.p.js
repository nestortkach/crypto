import React from 'react';

import { DocHead } from 'layout/Head';
import { Footer } from 'layout/Footer';
import { TermsLayout } from 'layout/TermsLayout';

import { data } from 'constants/data/aml-policy';

export default function AmlPolicy() {
  return (
    <>
      <DocHead title={data.title} description={data.description} linkCanonical={data.url} />

      <TermsLayout data={data} />

      <Footer />
    </>
  );
}
