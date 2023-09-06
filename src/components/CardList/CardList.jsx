import styles from './styles.module.scss';
import { Card } from '../Card/Card';

export const CardList = ({ title, events }) => {
  return (
    <section className={styles.section}>
      {title && (
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      )}
      <ul className={`${styles.list}`}>
        {events?.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </ul>
    </section>
  );
};
