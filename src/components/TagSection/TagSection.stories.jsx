import { useState, useEffect } from 'react';
import { TagSection } from './TagSection';
import { TagButton } from '../../UI-kit';
import { FiltersProvider } from "../../utils/context/SearchFilterContext";

export default {
  title: 'Components/TagSection',
  component: TagSection,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Components > TagSection',
  },
  argTypes: {
    handleChange: {
      description: 'Click Handler',
    },
  },
};
/** Применимость: LeftFilterBar */
export const Section = () => {
  const onChange = (value) => (isEnabled) => {};

  return <FiltersProvider>
    <TagSection
      fetchTags={async () => ([
        { id: 1, name: "tag 1", slug: "tag1" },
        { id: 1, name: "tag 2", slug: "tag2" }
      ])}
      handleChange={onChange}
    />
  </FiltersProvider>
};
/** Применимость: TagSection */
export const Tag = () => {
  return <TagButton value='Frontend' onChange={() => {}} />;
};
