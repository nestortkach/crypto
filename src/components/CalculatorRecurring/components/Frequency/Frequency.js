import { useMemo } from 'react';
import Select from 'components/Select';
import SelectItem from 'components/Select/SelectItem';
import css from './styles.module.scss';

function Frequency({ onSelect, selected, list, className }) {
  const listWithoutSelected = useMemo(() => list.filter((el) => el.id !== selected.id), [selected, list]);

  return (
    <div className={css.container}>
      <span>Period</span>
      <Select
        hasSearch
        item={SelectItem}
        className={className}
        onSelect={onSelect}
        list={listWithoutSelected}
        selected={selected}
        placeholder='Select period'
        disabled={list.length <= 1}
      />
    </div>
  );
}

export { Frequency };
