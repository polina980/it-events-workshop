import styles from "./styles.module.scss";
import EventDescription from "../EventDescription/EventDescription";
import defaultImage from "../../images/default-image.png";
import { useEventsContext } from "../../utils/context/EventsContext";
import { CardList } from "../CardList/CardList";

const Event = ({ selectedEvent }) => {
  const { handleCardClick, toggleFavorite, recommendedEvents, favoriteEvents } =
    useEventsContext();

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className={styles.eventContainer}>
      <div className={styles.main}>
        <EventDescription
          selectedEvent={selectedEvent}
          favoriteEvents={favoriteEvents}
          onLikeClick={toggleFavorite}
        />
        {/* <aside className={styles.aside}> */}
        <img
          className={styles.eventImage}
          src={selectedEvent.image}
          alt={selectedEvent.title}
          onError={handleImageError}
        />
        {/* </aside> */}
      </div>
      <div className={styles.listWrapper}>
        <CardList
          title="Смотрите также"
          listDirection="row"
          cardDirection="column"
          events={recommendedEvents}
          onCardClick={handleCardClick}
          onLikeClick={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default Event;
