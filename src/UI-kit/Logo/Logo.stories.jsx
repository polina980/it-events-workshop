import Logo from './Logo';
import './styles.module.scss';

export default {
  title: 'UI-kit/Logo',
  component: Logo,
  // argTypes: {

  // }
}

export const Basic = {
  args: {
    onClick: () => { },
  }
}

export const Small = {
  args: {
    fontSize: "20px",
    color: "#F1F0EB",
    onClick: () => { },
  },
};
