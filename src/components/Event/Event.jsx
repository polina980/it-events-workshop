import styles from "./styles.module.scss";
import { CardList } from "../CardList/CardList";
import { EventDescription } from "../EventDescription/EventDescription";
import { useEventsContext } from "../../utils/context/EventsContext";
import useIsMobileResolution from "../../utils/hooks/useIsMobileResolution";
import defaultImage from "../../images/default-image.png";

export const Event = ({ selectedEvent }) => {
  const { recommendedEvents, favoriteEvents, toggleFavorite } =
    useEventsContext();

    const isNotMobile = useIsMobileResolution(1440)
    const recommended = !isNotMobile ? recommendedEvents.slice(0, 6) : recommendedEvents.slice(0, 4)

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
        <img
          className={styles.eventImage}
          src={selectedEvent.image}
          alt={selectedEvent.title}
          onError={handleImageError}
        />
      </div>
      <div className={styles.listWrapper}>
        <CardList
          title="Смотрите также"
          listDirection="row"
          cardDirection="column"
          style={{gap: '22px'}}
          events={recommended}
        />
      </div>
    </div>
  );
};
