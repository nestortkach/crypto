import React from 'react';

import { DocHead } from 'layout/Head';
import { Footer } from 'layout/Footer';
import { PageHeader } from 'layout/BusinessFormPage/Header';
import { BusinessVerificationForm } from 'layout/BusinessFormPage/BusinessVerificationForm';

const data = {
  title: 'Business verification application form',
};

export default function BusinessForm() {
  return (
    <>
      <DocHead title={data.title} />

      <PageHeader title={data.title} />

      <BusinessVerificationForm />

      <Footer />
    </>
  );
}
