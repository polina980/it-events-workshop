import styles from "./styles.module.scss";
import { Card } from "../Card/Card";

export const CardList = ({ title, events, listDirection, cardDirection, style }) => {
  return (
    <section className={styles.section}>
      {title && (
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      )}
      <ul
        className={`${styles.list} ${listDirection === "row" ? styles.row : styles.column
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
