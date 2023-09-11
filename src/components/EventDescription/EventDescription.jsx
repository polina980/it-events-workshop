import { useState } from "react";
import styles from "./styles.module.scss";
import { PrimaryButton, PopupLink } from "../../UI-kit";
import { DescriptionTabs } from "../DescriptionTabs/DescriptionTabs";
import { ReactComponent as CalendarImage } from "../../images/EventInfo/calendar.svg";
import { ReactComponent as TimeImage } from "../../images/EventInfo/time.svg";
import { ReactComponent as PlaceImage } from "../../images/EventInfo/place.svg";
import { ReactComponent as LikeImage } from "../../images/like-button.svg";
import { ReactComponent as LikeImageActive } from "../../images/like-button_active.svg";
import { ReactComponent as ShareImage } from "../../images/Actions/share.svg";
import {
  formatDate,
  formatPrice,
  formatTimeRange,
  handleCopyLink,
} from "../../utils/helperFunctions";

export const EventDescription = ({ selectedEvent, onLikeClick, favoriteEvents }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    const link = `${window.location.origin}/events/${selectedEvent.id}`;
    console.log("Ссылка скопирована в EventPage", link);
    handleCopyLink(link, setShowNotification);
  };

  const handleLikeClick = () => {
    onLikeClick(selectedEvent);
  };

  const isLiked = favoriteEvents.find((event) => event.id === selectedEvent.id);

  const eventStartDate = formatDate(selectedEvent.date_start);
  const eventEndDate = formatDate(selectedEvent.date_end);
  const eventDate =
    eventStartDate === eventEndDate
      ? eventStartDate
      : `${eventStartDate} - ${eventEndDate}`;

  return (
    <section className={styles.eventDescription}>
      <div className={styles.eventHeader}>
        {showNotification && <PopupLink top="55px" right="0" />}
        <h1 className={styles.eventName}>{selectedEvent.title}</h1>
        <div className={styles.eventFigures}>
          <figure className={styles.eventFigure} onClick={handleLikeClick}>
            {isLiked ? <LikeImageActive /> : <LikeImage />}
          </figure>
          <figure className={styles.eventFigure} onClick={handleButtonClick}>
            <ShareImage />
          </figure>
        </div>
      </div>
      <ul className={styles.eventDates}>
        <li className={styles.eventDate}>
          <CalendarImage />
          {eventDate}
        </li>
        <li className={styles.eventDate}>
          <TimeImage />
          {formatTimeRange(selectedEvent.date_start, selectedEvent.date_end)}
        </li>
        <li className={styles.eventDate}>
          <PlaceImage />
          {selectedEvent?.address === " " || selectedEvent?.address === ""
            ? "Online"
            : selectedEvent?.address}
        </li>
        <li className={styles.eventPrice}>
          {formatPrice(selectedEvent.price)}
        </li>
      </ul>
      <PrimaryButton
        variant='link'
        target='_blank'
        title="Сайт мероприятия"
        to={selectedEvent?.url}
      />
      <DescriptionTabs selectedEvent={selectedEvent} />
    </section>
  );
};
