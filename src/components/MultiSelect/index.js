import React, { useState, useCallback, useEffect, useRef, memo } from 'react';
import HideClickOutside from '@coxy/react-click-outside';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { selectFiatCurrenciesList } from 'utils/store/features/coinsSlice';
import { Input } from 'components/Input/v2';

import styles from './styles.module.scss';

const MultiSelect = memo(({ list, onSelect, setDefaultCurrency, containerClass, inputClass, inputLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [options, setOptions] = useState(null);
  const allCurrencies = useRef(null);

  const fiatCurrenciesListWidget = useSelector(selectFiatCurrenciesList);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    setIsOpen(true);

    const filteredOptions = allCurrencies.current.filter((opt) =>
      opt.id.toLowerCase().includes(e.target.value.trim().toLowerCase()),
    );

    setOptions(filteredOptions);
    setSearchValue(e.target.value);
  };

  const handleChangeList = (e) => {
    const filteredArray = options.map((el) => {
      const element = el;
      if (element.id + element.network === e.target.value) {
        element.isSelected = !el.isSelected;
      }

      return element;
    });

    setOptions(filteredArray);
    onSelect(filteredArray);
  };

  const handleChangeDefault = (e) => {
    const filteredArray = options.map((el) => {
      const element = el;
      if (element.id === e.target.dataset.name) {
        element.isDefault = true;
      } else {
        element.isDefault = false;
      }

      return element;
    });

    setOptions(filteredArray);
    setDefaultCurrency(e.target.dataset.name);
  };

  useEffect(() => {
    setOptions(list);
    allCurrencies.current = list;
  }, [fiatCurrenciesListWidget]);

  const renderList = useCallback(
    () =>
      options?.length > 0 ? (
        options?.map((listItem) => (
          <div className={styles.dropdownItem} key={listItem.title + listItem.network}>
            <div className={styles.checkbox}>
              <input
                type='checkbox'
                data-ticker={listItem.id}
                data-network={listItem.network}
                value={listItem.id + listItem.network}
                onChange={handleChangeList}
                checked={listItem.isSelected}
              />
              <span>
                {listItem.id}
                {listItem.id !== listItem.network && <sup>{listItem.network}</sup>}
              </span>
            </div>
            <div
              data-name={listItem.id}
              onClick={handleChangeDefault}
              className={cn(styles.setAsDefault, { [styles.default]: listItem.isDefault })}
            >
              {listItem.isDefault ? 'Default' : 'Set as default'}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.emptyList}>No options</div>
      ),
    [options],
  );

  return (
    <div className={styles.dropdownContainer}>
      <Input
        onClickCapture={handleOpen}
        containerClass={containerClass}
        inputClass={inputClass}
        label={inputLabel}
        value={searchValue}
        onChange={handleSearch}
      />
      <HideClickOutside onClose={handleClose} visible={isOpen}>
        {isOpen && <div className={styles.dropdownListContainer}>{renderList()}</div>}
      </HideClickOutside>
    </div>
  );
});

MultiSelect.displayName = 'MultiSelect';

export { MultiSelect };
