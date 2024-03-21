import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from 'layout/Footer';
import PressAboutUs from '../PressAndMedia/components/PressAboutUs/PressAboutUs';
import PressAndMediaBanner from '../PressAndMedia/components/PressAndMediaBanner/PressAndMediaBanner';
import PressTweetsAboutUs from './components/PressTweetsAboutUs';
import PressBrandAssets from './components/PressBrandAssets';
import PressOurLatest from './components/PressOurLatest';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { TwitterMeta } from 'components/Meta/TwitterMeta';
import { DocHead } from '../Head';

const metaData = {
  url: 'https://guardarian.com/press-and-media',
  title: 'Guardarian in Press & Media | Our Brand Assets & Media Kit',
  description:
    'Discover what people say about Guardarian in press releases, articles and on social media. Access our complete media kit - logos, screenshots and more!',
  image: 'https://guardarian.com/services/sell-crypto-mobile.png',
};

export default function PressAndMedia() {
  return (
    <>
      <DocHead title={metaData.title} description={metaData.description} linkCanonical={metaData.url} />
      <FacebookMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image}
      />
      <TwitterMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image}
      />
      <Header theme='none'>
        <PressAndMediaBanner />
      </Header>
      <PressAboutUs />
      <PressTweetsAboutUs />
      <PressBrandAssets />
      <PressOurLatest />
      <Footer />
    </>
  );
}
