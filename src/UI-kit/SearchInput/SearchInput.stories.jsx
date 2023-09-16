import SearchInput from './SearchInput';
import './styles.module.scss';

export default {
  title: 'UI-Kit/Input/SearchInput',
  component: SearchInput,
  args: {
    name: '',
    value: 'Saint-Petersburg',
    placeholder: 'Find...',
    onChange: () => {},
  },
};

/** This is how it looks */
export const Basic = (args) => (
  <div style={{ padding: '2em', border: '2px dashed black' }}>
   <h2>Применимость: Components / LeftFilterBar</h2>
    <SearchInput {...args} />
  </div>
);
