import PrimaryButton from './PrimaryButton';
import './styles.module.scss';

export default {
  title: 'Ui-kit/PrimaryButton',
  component: PrimaryButton,
  args: {
    title: 'Это кнопка',
  }
};

export const Basic = (props) => {
  return (
    <div className="storybook-case-wrapper">
      <PrimaryButton {...props} />
    </div>
  )
}
