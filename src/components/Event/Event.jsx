import styles from './styles.module.scss';
import EventDescription from '../EventDescription/EventDescription';
import HorizontalEventsList from '../HorizontalEventList/HorizontalEventList';
import defaultImage from '../../images/default-image.png';
import { useEventsContext } from '../../utils/context/EventsContext';

const Event = ({ selectedEvent }) => {
  const { handleCardClick, toggleFavorite, recommendedEvents, favoriteEvents } =
    useEventsContext();

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className={styles.eventContainer}>
      <>
        <EventDescription
          selectedEvent={selectedEvent}
          favoriteEvents={favoriteEvents}
          onLikeClick={toggleFavorite}
        />
        <aside>
          <img
            className={styles.eventImage}
            src={selectedEvent.image}
            alt={selectedEvent.title}
            onError={handleImageError}
          />
        </aside>
        <div className={styles.horizontalList}>
          <HorizontalEventsList
            title="Смотрите также"
            list={recommendedEvents}
            onCardClick={handleCardClick}
            onLikeClick={toggleFavorite}
          />
        </div>
      </>
    </div>
  );
};

export default Event;
