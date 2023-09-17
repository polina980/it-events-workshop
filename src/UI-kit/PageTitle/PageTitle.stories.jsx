import PageTitle from './PageTitle';
import './styles.module.scss';

export default {
  title: 'UI-kit/PageTitle',
  component: PageTitle,
  argTypes: {
    title: {
      description: 'Page title',
    },
    subtitle: {
      description: 'Page text',
    },
    size: {
      description: 'Title font size',
    },
  }
}

export const Basic = {
  args: {
    title: 'Заголовок',
    subtitle: 'Основной текст',
    size: '',
  }
}
