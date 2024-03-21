import Image from 'next/image';
import { Button } from 'components/Button';
import css from './WhyUseGuardian.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const WhyUseGuardian = ({ pageInfo }) => {
  const { reasons } = pageInfo.whyUse;
  const btn = pageInfo.whyUse.btn ? pageInfo.whyUse.btn : 'BUY NOW';
  return (
    <div className={css.wrapper}>
      <div className={css.mainContainer}>
        <h2 className={css.containerTitle}>Why use Guardarian</h2>
        <div className={css.container}>
          <div className={css.actionArea}>
            {reasons.map((item) => (
              <div key={item.title} className={css.itemContainer}>
                <Image src={`/${item.image}`} width={80} height={70} alt={item.image} />
                <div className={css.itemText}>
                  <h3>{item.title}</h3>
                  <p>{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={css.containerPhone}>
            <Image src='/iphone/iphone12.webp' quality={100} width={317} height={640.71} alt='iphone' />
          </div>
        </div>

        <Button className={css.containerButton} lightGreen onClick={scrollToTop}>
          {btn}
        </Button>
      </div>
    </div>
  );
};

export default WhyUseGuardian;
