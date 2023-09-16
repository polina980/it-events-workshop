import { useState, useEffect } from 'react';
import { apiEvents } from '../../utils/api';
import { TagSection } from './TagSection';
import { TagButton } from '../../UI-kit';
import styles from './styles.module.scss';
//import { useFiltersContext } from "../../utils/context/SearchFilterContext";

export default {
  title: 'Components/TagSection',
  component: TagSection,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Components > TagSection',
  },
  args: {
    handleChange: 'function',
  },
  argTypes: {
    handleChange: {
      description: 'Click Handler',
    },
  },
};
/** Применимость: LeftFilterBar */
export const Section = () => {
  const [tags, setTags] = useState([]);
  const [showAllTags, setShowAllTags] = useState(false);
  //const { values } = useFiltersContext()

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await apiEvents.getTags();
        setTags(response);
      } catch (error) {
        console.log('Error fetching tags:', error);
      }
    };
    fetchTags();
  }, []);

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };

  const tagOptions = tags.map((tag) => ({
    value: tag.id,
    label: tag.name,
    slug: tag.slug,
  }));

  return (
    <>
      <div className={styles.tagsList} style={{ maxWidth: '215px' }}>
        {tagOptions
          .slice(0, showAllTags ? tags.length : 9)
          .map((tag, index) => (
            <TagButton
              key={index}
              //values={values}
              value={tag.label}
              handleChange={(e) => e.preventDefault}
            />
          ))}
      </div>
      {tags.length > 10 && (
        <button onClick={toggleShowAllTags} className={styles.showMore}>
          {showAllTags ? 'Свернуть все' : 'Показать больше'}
        </button>
      )}
    </>
  );
};
/** Применимость: TagSection */
export const Tag = () => {
  return <TagButton value='Frontend' handleChange={(e) => e.preventDefault} />;
};
