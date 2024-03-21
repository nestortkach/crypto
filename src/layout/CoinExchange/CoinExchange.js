import Link from 'next/link';
import { Button } from '../../components/Button';
import css from './coinExchange.module.scss';

const CoinExchange = () => {
  return (
    <div className={css.wrapper}>
      <span>
        <div className={css.container}>
          <div className={css.actionArea}>
            <h2>400+ coins to exchange</h2>
            <p>
              We are truly passionate about cryptocurrencies and we love partnering with new and exciting projects to
              offer new coins on our exchange.
              <br /> Go through our vast list of exchangeable assets!
            </p>
            <Link href='https://guardarian.com/currencies'>
              <Button className={css.actionAreaButton} lightGreen={true}>
                SEE ALL CURRENCIES
              </Button>
            </Link>
          </div>
          <div className={css.iconsArea}>{/* <img src='/group-icons.svg'/> */}</div>
        </div>
      </span>
    </div>
  );
};

export default CoinExchange;
