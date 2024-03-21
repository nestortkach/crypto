import React, { useState } from 'react';
import HideClickOutside from '@coxy/react-click-outside';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import cn from 'classnames';

import styles from './styles.module.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';

export default function Select({
  list,
  name,
  network,
  className,
  onSelect,
  item,
  selected,
  hasSearch,
  label,
  searchResultsLimit,
  onRef,
  disabled,
  placeholder,
  title,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function getList() {
    let res = list;

    if (searchValue.length) {
      const reg = new RegExp(searchValue, 'i');
      const labels = Object.keys(list[0]);

      res = list.filter((listItem) => labels.some((label) => reg.test(listItem[label])));
    }

    return searchResultsLimit ? res.slice(0, searchResultsLimit) : res;
  }

  function handleSelection(item) {
    return (event) => {
      if (!event.key || event.key === 'Enter') {
        event.stopPropagation();
        setIsOpen(false);
        onSelect(item, name, network);
      }
    };
  }

  function handleSearch({ target: { value } }) {
    setSearchValue(value);
  }

  function handleCloseList() {
    setIsOpen(false);
  }

  function toggleOpenList() {
    setIsOpen((is) => !is);
  }

  function renderList(items) {
    return items.map((listItem) => (
      <div
        onClick={handleSelection(listItem)}
        role='presentation'
        key={`item-select${listItem.id}${listItem.network ? listItem.network : ''}`}
      >
        <Item item={listItem} isActive={listItem.id === selected?.id} isListItem />
        {listItem.items && <div className={styles.subItems}>{renderList(listItem.items)}</div>}
      </div>
    ));
  }

  const Item = item;
  const filteredList = getList();

  return (
    <div className={cn(styles.wrapper, className, { [styles.isOpen]: isOpen })} ref={onRef}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={cn(styles.select, 'select', { [styles.disabled]: disabled })}
        role='presentation'
        onClick={!disabled ? toggleOpenList : undefined}
      >
        {!selected ? (
          <div className={cn(styles.placeholder, 'select-placeholder')}>{placeholder}</div>
        ) : (
          <Item item={selected} title={title} />
        )}

        {!disabled && (
          <svg
            className={cn(styles.caret, title === 'Buy Iotex (IOTX)' ? 'select__caret2' : 'select__caret')}
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.50423 5.4209L6.99998 7.92515L4.49573 5.4209L3.6709 6.24573L6.99998 9.57482L10.3291 6.24573L9.50423 5.4209Z'
              fill='#5C90FE'
            />
          </svg>
        )}
      </div>

      <HideClickOutside onClose={handleCloseList} visible={isOpen}>
        <div className={cn(styles.positionList, 'select_drop-menu')}>
          {hasSearch && (
            <div className='search-wrapper'>
              <input
                autoFocus
                onFocus={(e) => e.target.select()}
                className={styles.inputSearch}
                placeholder='Search...'
                onChange={handleSearch}
                onKeyUp={handleSelection(filteredList[0])}
                value={searchValue}
              />
            </div>
          )}

          <OverlayScrollbarsComponent style={{ maxHeight: 250 }}>
            <div className={styles.list}>
              {renderList(filteredList)}

              {filteredList.length === 0 && <div className={styles.emptyState}>Empty list</div>}
            </div>
          </OverlayScrollbarsComponent>
        </div>
      </HideClickOutside>
    </div>
  );
}
