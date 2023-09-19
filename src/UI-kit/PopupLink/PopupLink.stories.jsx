import PopupLink from './PopupLink';
import './styles.module.scss';

export default {
  title: 'UI-kit/PopupLink',
  component: PopupLink,
  argTypes: {
    top: {
      description: 'Top position',
    },
    right: {
      description: 'Right position',
    },
  }
}

export const Basic = {
  args: {
    top: '0',
    right: '',
  }
}
