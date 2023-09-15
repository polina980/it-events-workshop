import InputCheckbox from './InputCheckbox';
import './styles.module.scss';

export default {
  title: 'UI-Kit/Input/InputCheckbox',
  component: InputCheckbox,
  argTypes: {
    label: {
      description: 'label for htmlFor and id',
    },
    name: {
      description: 'Input name',
    },
    value: {
      description: 'Input value',
    },
    checked: {
      type: 'boolean',
      defaultValue: false,
      description: 'Checkbox status checked',
    },
    onChange: {
      type: 'function',
      description: 'Click handler',
    },
  },
};

/** This is how it looks by default */
export const Basic = {
  args: {
    label: '',
    name: '',
    value: 'Checkbox',
    checked: false,
    onChange: () => {},
  },
};
