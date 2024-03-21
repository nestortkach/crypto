import AOS from 'aos';
import { useEffect, useRef } from 'react';

import { DocHead } from 'layout/Head';
import { WidgetSection } from 'layout/WidgetSection/v2';

import config from '../../../config';

const metaData = {
  title: 'Integrate Guardarian On-ramp & Off-ramp',
};

export default function Home() {
  const widgetSection = useRef(null);

  useEffect(() => {
    AOS.init({ once: true });
    document.body.classList.add('integrate-page');

    const resizeSendMessage = () => {
      window.parent.postMessage({ height: widgetSection.current?.clientHeight + 1 }, config.guardarianB2bUrl);
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeSendMessage();
    });

    resizeObserver.observe(widgetSection.current);

    return () => {
      resizeObserver.disconnect();
      document.body.classList.remove('integrate-page');
    };
  }, []);

  return (
    <>
      <DocHead noFreshChat title='Business Page'>
        <title> {metaData.title} </title>
        <meta name='title' content={metaData.title} key='title' />
        <meta name='robots' content='NOINDEX,FOLLOW' />
      </DocHead>
      <div ref={widgetSection}>
        <WidgetSection ref={widgetSection} isPartnerUrl />
      </div>
    </>
  );
}
