import React, { useState, useCallback } from 'react';

import { Header } from 'layout/Header';
import { PositionsBanner } from 'layout/Positions/Banner';
import { DocHead } from 'layout/Head';
import { Popup } from 'components/Popup';
import { Footer } from 'layout/Footer';
import { ContentWithSidebar } from 'components/ContentWithSidebar';
import { Text } from 'components/Text';
import { JobSidebar } from 'layout/Positions/JobSidebar';
import { ApplyForm } from 'components/ApplyJobForm';
import { data } from 'constants/data/jobs';
import { Button } from 'components/Button';

const pageData = data[0];

export default function JobPost() {
  const [showForm, setShowForm] = useState(false);
  const handlePopupClose = () => setShowForm(false);
  const handlePopupOpen = () => setShowForm(true);

  const renderContent = useCallback(
    () => (
      <Text tag='article' size='sm' className='article-page content-with-checkmark'>
        {pageData.content}
        <Button className='btn-width-fixed' onClick={handlePopupOpen} green>
          Apply now
        </Button>
      </Text>
    ),
    [],
  );

  return (
    <>
      <DocHead title='Open Positions' />

      <Popup visible={showForm} onClose={handlePopupClose}>
        <ApplyForm onSuccessSubmit={handlePopupClose} />
      </Popup>

      <Header>
        <PositionsBanner data={pageData.banner} btnHandler={handlePopupOpen} />
      </Header>

      <ContentWithSidebar
        sidebar={<JobSidebar content={pageData.sidebar} title='Key points' />}
        content={renderContent()}
      />

      <Footer />
    </>
  );
}
