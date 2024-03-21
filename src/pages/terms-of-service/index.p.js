import React from 'react';

import { DocHead } from 'layout/Head';
import { Footer } from 'layout/Footer';
import { TermsLayout } from 'layout/TermsLayout';
import { data } from 'constants/data/terms';
import { data as b2bData } from 'constants/data/terms-b2b';

export default function TermsPage() {
  return (
    <>
      <DocHead title={data.title} description={data.description} linkCanonical={data.url} />
      <TermsLayout data={data} />
      <TermsLayout withoutHeader data={b2bData} />
      <Footer />
    </>
  );
}
