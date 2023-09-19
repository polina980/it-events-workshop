import { CardList } from './CardList';
import { Card } from '../Card/Card.stories';
import styles from './styles.module.scss';
import { events } from './storyData';

export default {
  title: 'Components/CardList',
  component: CardList,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Components > CardList',
  },
  argTypes: {
    listDirection: {
      options: ['row', 'column'],
      control: 'radio',
      defaultValue: 'row',
      description: 'Flex Direction inline style',
    },
    cardDirection: {
      options: ['row', 'column'],
      control: 'radio',
      defaultValue: 'row',
      description: 'Flex Direction inline style',
    },
  },
  args: {
    title: 'Заголовок',
    events: events,
    listDirection: 'column',
    cardDirection: 'row',
  },
};

/** Применяемость: Pages */
export const Column = (props) => <CardList {...props} />

export const Grid = (props) => <CardList {...props} listDirection='row' cardDirection='column' />
