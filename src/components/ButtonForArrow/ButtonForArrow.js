import css from './ButtonForArrow.module.scss';

function ButtonForArrow({ children }) {
  return (
    <button type='button' className={css.ButtonForArrow}>
      {children}
    </button>
  );
}
export default ButtonForArrow;
