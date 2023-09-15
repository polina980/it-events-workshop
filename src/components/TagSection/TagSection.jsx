import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import TagButton from "../../UI-kit/TagButton/TagButton";
import { apiEvents } from "../../utils/api";
import { useFiltersContext } from '../../utils/context/SearchFilterContext';

export const TagSection = ({ handleChange }) => {
  const [tags, setTags] = useState([]);
  const [showAllTags, setShowAllTags] = useState(false);
  const { values } = useFiltersContext();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await apiEvents.getTags();
        setTags(response);
      } catch (error) {
        console.log("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

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
              values={values}
              value={tag.label}
              handleChange={handleChange}
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
