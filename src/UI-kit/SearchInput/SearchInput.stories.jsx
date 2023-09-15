import SearchInput from './SearchInput';
import './styles.module.scss';

export default {
  title: 'UI-Kit/Input/SearchInput',
  component: SearchInput,
};

/** This is how it looks by default */
export const Basic = {
  args: {
    name: '',
    value: 'Saint-Petersburg',
    placeholder: 'Find...',
    onChange: () => {},
  },
};
