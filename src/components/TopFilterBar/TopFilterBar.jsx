import styles from './styles.module.scss';
import { useFiltersContext } from '../../utils/context/SearchFilterContext';
import { TagButton } from '../../UI-kit';

export const TopFilterBar = () => {
  const { values, setValues, resetFilters } = useFiltersContext();
  const arr = Object.entries(values);

  const deleteValue = (item, tag) => {
    if (item === 'status' || item === 'tags' || item === 'specialities') {
      const updatedValues = { ...values };
      updatedValues[item] = values[item].filter((value) => value !== tag);
      setValues(updatedValues);
    } else {
      setValues({ ...values, [item]: null });
    }
  };

  // Создание отдельного массива тегов
  const tags = arr.reduce((acc, [name, value]) => {
    if (name !== 'findTags' && value && value.length !== 0) {
      const tagArr = Array.isArray(value) ? value : value.split(', ');
      return acc.concat(tagArr);
    }
    return acc;
  }, []);

  const filterCount = tags.length !== 0 ? tags : null;

  if (!filterCount) {
    return null;
  }

  const renderTags = (item) => {
    const name = item[0];
    const value = item[1];
    if (name === 'findTags' || !value || value.length === 0) {
      return null;
    }
    const tags = Array.isArray(value) ? value : value.split(', ');

    return tags.map((tag, tagIndex) => (
      <TagButton
        key={tagIndex}
        value={tag}
        onChange={() => deleteValue(name, tag)}
        isEnabled={tags.includes(tag)}
      />
    ));
  };

  const ResetButton = () => (
    <button onClick={resetFilters} className={styles.resetButton}>
      Очистить все
    </button>
  );

  return (
    <div className={styles.container}>
      Фильтры: {filterCount.length}
      {arr.map((item) => renderTags(item))}
      <ResetButton />
    </div>
  );
};
