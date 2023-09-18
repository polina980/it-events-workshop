import SearchInput from './SearchInput';
import './styles.module.scss';

export default {
  title: 'UI-Kit/Input/SearchInput',
  component: SearchInput,
  parameters: {
    componentSubtitle: 'Применимость: Components / LeftFilterBar',
    layout: 'centered'
  },
  args: {
    name: '',
    value: 'Saint-Petersburg',
    placeholder: 'Find...',
    withForm: false
  },
  argTypes: {
    withForm: {
      description: 'Boolean value for Submit by Enter'
    },
    onSubmit: {
      description: 'Optional Submit handler / Works with withForm prop'
    }
  }
};

/** This is how it looks */
export const Basic = (args) => (
    <SearchInput {...args}/>
);

export const WithForm = (args) => (
  <Basic {...args} withForm/>
)