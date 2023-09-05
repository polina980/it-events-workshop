import styles from './styles.module.scss';
import VerticalEventCard from '../VerticalEventCard/VerticalEventCard';

const HorizontalEventList = ({ list, title, onCardClick, onLikeClick, }) => {
  return (
    <section className={styles.section}>
      {title && (
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      )}
      <ul className={styles.list}>
        {list.map((event, index) =>
          <VerticalEventCard
            key={event.id}
            index={index}
            event={event}
            onCardClick={onCardClick}
            onLikeClick={onLikeClick}
          />
        )}
      </ul>
    </section>
  );
};

export default HorizontalEventList;
