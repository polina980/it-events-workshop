import Logo from './Logo';
import './styles.module.scss';

export default {
  title: 'UI-kit/Logo',
  component: Logo,
  argTypes: {
    fontSize: {
      description: 'Logo font size',
    },
    color: {
      description: 'Logo color',
    },
    onClick: {
      description: 'Logo click',
    },
  }
}

export const Basic = {
  args: {

  }
}

export const Small = {
  args: {
    fontSize: "20px",
    color: "#F1F0EB",
    onClick: () => { },
  },
};
