import Image from 'next/image';
import { Calculator } from 'components/Calculator/Calculator';
import css from './formSectionCard.module.scss';

const FormSectionCard = ({ pageInfo }) => {
  const {
    title,
    subTitle,
    urls,
    backgroundImage,
    calculator: { urlParams },
  } = pageInfo.header;

  return (
    <div className={css.formWrapper}>
      <div className={css.container}>
        <div className={css.actionArea}>
          <h1>
            {title.text}
            <span className={css.bold}>
              <strong> {title.boldText}</strong>
            </span>
          </h1>
          <p className={css.subTitle}>
            {subTitle.firstSection}
            <br />
            {subTitle.secondSection}
          </p>
          <div className={css.payImg}>
            {urls ? (
              urls.map((item) => (
                <span className={css.wrapperIcon} key={item.url}>
                  <Image key={item.url} src={`/${item.url}`} alt={item.url} width={item.width} height={item.height} />
                </span>
              ))
            ) : (
              <div className={css.footerSection}>
                <div className={css.footerItem}>
                  <div className={css.icon}>
                    <img src='/rate-cloud-icon.svg' alt='' />
                  </div>
                  <span>Best rates possible </span>
                </div>

                <div className={css.footerItem}>
                  <div className={css.icon}>
                    <img src='/fee-laptop-icon.svg' alt='' />
                  </div>
                  <span>Transparent fees</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={css.calculatorArea}
          style={{
            backgroundImage: `url(/${backgroundImage})`,
          }}
        >
          <div>
            <Calculator className={css.calculator} urlParams={urlParams} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormSectionCard;
