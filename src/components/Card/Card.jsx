import { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import {
  parseEventDate,
  formatPrice,
  formatTimeRange,
} from "../../utils/helperFunctions";
import { useEventsContext } from "../../utils/context/EventsContext";
import DefaultImage from "../../images/default-image.png";
import { ReactComponent as PlaceImage } from "../../images/EventInfo/place.svg";
import { ReactComponent as CalendarImage } from "../../images/EventInfo/calendar.svg";
import { ReactComponent as TimeImage } from "../../images/EventInfo/time.svg";

export const Card = ({ event, style, cardDirection }) => {
  const [imageError, setImageError] = useState(false);
  const { handleCardClick, toggleFavorite } = useEventsContext();

  const handleImageError = () => {
    setImageError(true);
  };

  const eventStartDate = parseEventDate(event.date_start);
  const eventEndDate = parseEventDate(event.date_end);
  const eventDate =
    eventStartDate === eventEndDate
      ? eventStartDate
      : `${eventStartDate} - ${eventEndDate}`;

  const cardDetails = [
    {
      icon: <CalendarImage />,
      content: eventDate,
    },
    {
      icon: <TimeImage />,
      content: formatTimeRange(event.date_start, event.date_end),
    },
    {
      icon: <PlaceImage />,
      content: event.city !== "" && event.city !== " " ? event.city : "Online",
    },
    {
      content: formatPrice(event.price),
      styles: styles.price,
    },
  ];

  return (
    <li
      key={event.id}
      className={`${styles.card}`}
      style={{ flexDirection: cardDirection === "column" ? "column" : "", }}
    >
      <div className={styles.imageContainer}>
        <Link to={`/events/${event.id}`} className={styles.cardLink}>
          {imageError ? (
            <img
              src={DefaultImage}
              alt="Изображение отсутствует"
              className={styles.image}
              onClick={() => handleCardClick(event)}
            />
          ) : (
            <img
              src={event.image_small ? event.image_small : event.image}
              alt="event_picture"
              className={styles.image}
              onClick={() => handleCardClick(event)}
              onError={handleImageError}
            />
          )}
        </Link>
        <button
          className={`${event.isLiked ? styles.likeButtonActive : styles.likeButton
            }`}
          type="button"
          onClick={() => toggleFavorite(event)}
        ></button>
      </div>
      <div className={`${styles.descriptionContainer}`}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title} style={style}>
            {event.title}
          </h3>
        </div>
        <ul className={styles.rowContainer}>
          {cardDetails.map((item, index) => (
            <li key={index} className={styles.rowItem}>
              {item.icon}
              <p className={item.styles}>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
