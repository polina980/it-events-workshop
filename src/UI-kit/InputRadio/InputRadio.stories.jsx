import InputRadio from './InputRadio';
import './styles.module.scss';

export default {
  title: 'UI-Kit/Input/InputRadio',
  component: InputRadio,
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

/** This is how it looks by default*/
export const Basic = {
  args: {
    label: '',
    name: '',
    value: 'Radio',
    checked: false,
    onChange: () => {},
  },
};
