import { Provider } from 'react-redux';

import { AppWrapper } from 'components/AppWrapper';
import { store } from 'utils/store/store';

import 'normalize.css/normalize.css';
import '../styles/globals.scss';
import '../layout/ServicesSection/Carousel.css';
import '@brainhubeu/react-carousel/lib/style.css';
import 'react-phone-input-2/lib/style.css';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
}

export default MyApp;
