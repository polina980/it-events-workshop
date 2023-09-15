import PageTitle from './PageTitle';
import './styles.module.scss';

export default {
  title: 'UI-kit/PageTitle',
  component: PageTitle,
  // argTypes: {

  // }
}

export const Basic = {
  args: {
    title: 'Заголовок',
    subtitle: 'Основной текст',
    size: '',
  }
}
