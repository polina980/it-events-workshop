import { useState } from "react";
import styles from "./styles.module.scss";
import { TagButton } from '../../UI-kit';
import { useFiltersContext } from "../../utils/context/SearchFilterContext";
import PropTypes from 'prop-types'

export const TagSection = ({ handleChange, tags }) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const { values, filters, setFilters } = useFiltersContext()

  TagSection.propTypes = {
    handleChange: PropTypes.func,
    tags: PropTypes.array
  }

  const tagOptions = tags.map((tag) => ({
    value: tag.id,
    label: tag.name,
    slug: tag.slug,
  }));

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };
  

  return (
    tags &&
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
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string
  }))
};

TagSection.defaultProps = {
  tags: []
};
