import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { TagButton } from '../../UI-kit';
import { apiEvents } from "../../utils/api";
import { useFiltersContext } from "../../utils/context/SearchFilterContext";
import PropTypes from 'prop-types'

export const TagSection = ({ handleChange, fetchTags }) => {
  const [tags, setTags] = useState([]);
  const [showAllTags, setShowAllTags] = useState(false);
  const { values } = useFiltersContext()

  TagSection.propTypes = {
    handleChange: PropTypes.func
  }

  useEffect(() => {
    fetchTags().then(setTags);
  }, [fetchTags]);

  const tagOptions = tags.map((tag) => ({
    value: tag.id,
    label: tag.name,
    slug: tag.slug,
  }));

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };

  return (
    <>
      <div className={styles.tagsList}>
        {tagOptions
          .slice(0, showAllTags ? tags.length : 9)
          .map((tag, index) => (
            <TagButton
              key={index}
              isEnabled={values.tags.includes(tag.label)}
              value={tag.label}
              onChange={handleChange(tag.label)}
            />
          ))}
      </div>
      {tags.length > 10 && (
        <button onClick={toggleShowAllTags} className={styles.showMore}>
          {showAllTags ? "Свернуть все" : "Показать больше"}
        </button>
      )}
    </>
  );
};

TagSection.propTypes = {
  handleChange: PropTypes.func,
  fetchTags: PropTypes.func
};

TagSection.defaultProps = {
  // @todo: убрать отсюда и передать где надо
  fetchTags: apiEvents.getTags
};
