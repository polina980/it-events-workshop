import { CardList as cardList } from './CardList';
import { Card } from '../Card/Card.stories';
import styles from './styles.module.scss';
import { events } from './storyData';

export default {
  title: 'Components/CardList',
  component: cardList,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Components > CardList',
  },
  args: {
    title: 'Заголовок',
    events: events,
    listDirection: 'column',
    cardDirection: 'row',
  },
};

const CardList = ({ title, events, listDirection, cardDirection, style }) => {
  return (
    <section className={styles.section}>
      {title && (
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      )}
      <ul
        className={`${styles.list} ${
          listDirection === 'row' ? styles.row : styles.column
        }`}
        style={style}
      >
        {events?.map((event) => (
          <Card key={event.id} event={event} cardDirection={cardDirection} />
        ))}
      </ul>
    </section>
  );
};

/** Применяемость: Pages */
export const Variants = (props) => (
  <div style={{ padding: '2em', border: '10px solid orange' }}>
    <h3>
      Вертикально: listDirection=<span style={{ color: 'red' }}>'column'</span>{' '}
      cardDirection<span style={{ color: 'blue' }}>'row'</span>
    </h3>
    <CardList {...props} />
    <h3>
      Горизонтально: listDirection=<span style={{ color: 'red' }}>'row'</span>{' '}
      cardDirection=<span style={{ color: 'blue' }}>'column'</span>
    </h3>
    <CardList {...props} listDirection='row' cardDirection='column' />
  </div>
);
