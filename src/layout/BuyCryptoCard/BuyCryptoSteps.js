import { Button } from '../../components/Button';
import css from './buyCryptoCard.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const BuyCryptoSteps = ({ pageInfo }) => {
  const { title, subTitle, stepsInfo } = pageInfo.howToBy;

  const btn = pageInfo.howToBy.btn ? pageInfo.howToBy.btn : 'BUY NOW';

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.subTitle}>{subTitle}</p>
        <div className={css.stepsContainer}>
          {stepsInfo.map((item, i) => (
            <div key={item.imgStep} className={css.step}>
              <img src={item.imgStep} alt={`step${i}`} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <Button className={css.containerButton} lightGreen onClick={scrollToTop}>
          {btn}
        </Button>
      </div>
    </div>
  );
};

export default BuyCryptoSteps;
