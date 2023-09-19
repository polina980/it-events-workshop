import { TagSection } from './TagSection';
import {useStoryContext} from "../../../.storybook/context";

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
  args: {
    tags: [
      { id: 1, name: "tag 1", slug: "tag1" },
      { id: 1, name: "tag 2", slug: "tag2" }
    ]
  }
};

/** Применимость: LeftFilterBar */
export const Section = (props) => {
  const { handleButtonChange } = useStoryContext();

  return <TagSection
    {...props}
    handleChange={handleButtonChange}
/>
}

