import cn from 'classnames';
import css from './Pagination.module.scss';
import { fetchPageNumbers, LEFT_PAGE, RIGHT_PAGE } from './utils';

export const Pagination = ({ activePage, totalPages, setActivePage }) => {
  const pages = fetchPageNumbers({ totalPages, activePage });

  return (
    <div className={css.pagination}>
      <button
        className={cn(css.button, { [css.disabled]: activePage === 1 })}
        type='button'
        disabled={activePage === 1}
        onClick={() => setActivePage(activePage - 1)}
      >
        <img className={css.arrowLeft} src='/arrowRight.svg' alt='Arrow Left' width='16' height='10' />
      </button>
      {pages.map((page, index) => {
        if (page === LEFT_PAGE)
          return (
            <button
              key={index}
              type='button'
              className={cn(css.button, { [css.active]: activePage === page })}
              onClick={() => setActivePage(activePage - 1)}
            >
              ...
            </button>
          );

        if (page === RIGHT_PAGE)
          return (
            <button
              key={index}
              type='button'
              className={cn(css.button, { [css.active]: activePage === page })}
              onClick={() => setActivePage(activePage + 1)}
            >
              ...
            </button>
          );

        return (
          <button
            type='button'
            key={index}
            className={cn(css.button, { [css.active]: activePage === page })}
            disabled={activePage === page}
            onClick={() => setActivePage(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className={cn(css.button, { [css.disabled]: activePage === totalPages })}
        type='button'
        disabled={activePage === totalPages}
        onClick={() => setActivePage(activePage + 1)}
      >
        <img src='/arrowRight.svg' alt='Arrow Left' width='16' height='10' />
      </button>
    </div>
  );
};
