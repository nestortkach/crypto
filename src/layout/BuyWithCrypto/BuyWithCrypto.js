import { Footer } from 'layout/Footer';
import { Header } from '../Header/Header';
import { DocHead } from '../Head';
import { FacebookMeta } from '../../components/Meta/FacebookMeta';
import { TwitterMeta } from '../../components/Meta/TwitterMeta';

import WhyUseGuardian from '../WhyUseGuardian/WhyUseGuardian';
import FormSectionCard from '../FormSectionCard/FormSectionCard';
import BuyCryptoSteps from '../BuyCryptoCard/BuyCryptoSteps';
import CoinExchange from '../CoinExchange/CoinExchange';

const BuyWithCrypto = ({ pageInfo }) => {
  const { title, description, url, image } = pageInfo.meta;

  return (
    <>
      <DocHead title={title} description={description} linkCanonical={url} />
      <FacebookMeta url={url} title={title} description={description} image={image} />
      <TwitterMeta url={url} title={title} description={description} image={image} />
      <Header theme='none'>
        <FormSectionCard pageInfo={pageInfo} />
      </Header>
      <WhyUseGuardian pageInfo={pageInfo} />
      <BuyCryptoSteps pageInfo={pageInfo} />
      <CoinExchange />
      <Footer />
    </>
  );
};

export default BuyWithCrypto;
