import React, {useState} from "react";
import TagButton from './TagButton';

export default {
  title: 'UI-kit/TagButton',
  component: TagButton,
  // argTypes: {

  // },
  args: {
    value: 'TagButton'
  }
}

/*export const Basic = {
  args: {
    // values: '',
    value: 'TagButton',
    handleChange: () => { },
  }
}*/

export const Basic = (props) => {
  const [state, setState] = useState(false);

  return (
    <div className="storybook-case-wrapper">
      <TagButton {...props} isEnabled={state} onChange={setState} />
    </div>
  )
};
