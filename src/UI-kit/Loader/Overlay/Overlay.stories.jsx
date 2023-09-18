import Overlay from './Overlay';
import './styles.module.scss';


export default {
  title: 'UI-kit/Overlay',
  component: Overlay,
  argTypes: {
    onClose: {
      type: 'function',
      description: 'Close handler',
    },
  }
}

export const Basic = {
  args: {
    onClose: () => { }
  }
}
