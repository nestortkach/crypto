import React, { useState } from 'react';

import { Popup } from 'components/Popup';
import { Footer } from 'layout/Footer';
import { DocHead } from 'layout/Head';
import { Header } from 'layout/Header';
import { PositionsBanner } from 'layout/Positions/Banner';

const data = {
  banner: {
    title: 'Open positions',
  },
};

export default function Positions() {
  const [showForm, setShowForm] = useState(false);
  const handlePopupClose = () => setShowForm(false);

  return (
    <>
      <DocHead title='Open Positions' />

      <Popup visible={showForm} onClose={handlePopupClose} />

      <Header>
        <PositionsBanner data={data.banner} />
      </Header>

      <Footer />
    </>
  );
}
