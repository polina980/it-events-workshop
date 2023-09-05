import styles from './EventDescription.module.css';
import { useState } from 'react';
import DescriptionTabs from '../DescriptionTabs/DescriptionTabs';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { ReactComponent as CalendarImage } from '../../images/EventInfo/calendar.svg';
import { ReactComponent as TimeImage } from '../../images/EventInfo/time.svg';
import { ReactComponent as PlaceImage } from '../../images/EventInfo/place.svg';
import { ReactComponent as LikeImage } from '../../images/like-button.svg';
import { ReactComponent as LikeImageActive } from '../../images/like-button_active.svg';
import { ReactComponent as ShareImage } from '../../images/Actions/Share.svg';
import PopupLink from '../PopupLink/PopupLink';
import {
  formatDate,
  formatPrice,
  formatTimeRange,
  handleCopyLink,
} from '../../utils/helperFunctions';

const EventDescription = ({ selectedEvent, onLikeClick, favoriteEvents }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    const link = `${window.location.origin}/events/${selectedEvent.id}`;
    console.log('Ссылка скопирована в EventPage', link);
    //setSelectedEvent(selectedEvent);
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
      <header className={styles.eventHeader}>
        {showNotification && <PopupLink top="55px" right="-100px" />}
        <h1 className={styles.eventName}>{selectedEvent.title}</h1>
        <div className={styles.eventFigures}>
          <figure className={styles.eventFigure} onClick={handleLikeClick}>
            {isLiked ? <LikeImageActive /> : <LikeImage />}
            {/* <img
              src={selectedEvent.isLiked ? LikeImageActive : LikeImage}
              alt="Like"
              onClick={handleLikeClick}
            /> */}
          </figure>
          <figure className={styles.eventFigure} onClick={handleButtonClick}>
            <ShareImage />
            {/* <img src={ShareImage} alt="Share" /> */}
          </figure>
        </div>
      </header>
      <ul className={styles.eventDates}>
        <li className={styles.eventDate}>
          <CalendarImage />
          {/* <img src={CalendarImage} alt="Календарь" className={styles.image} /> */}
          {eventDate}
        </li>
        <li className={styles.eventDate}>
          <TimeImage />
          {/* <img src={TimeImage} alt="Время" className={styles.image} /> */}
          {formatTimeRange(selectedEvent.date_start, selectedEvent.date_end)}
        </li>
        <li className={styles.eventDate}>
          <PlaceImage />
          {/* <img
            src={PlaceImage}
            alt="Место проведения"
            className={styles.image}
          /> */}
          {/* {selectedEvent?.address ||
            'Нет данных' ||
            selectedEvent?.city ||
            'Нет данных'} */}
          {selectedEvent?.address === ' ' || selectedEvent?.address === ''
            ? 'Online'
            : selectedEvent?.address}
        </li>
        <li className={styles.eventPrice}>
          {formatPrice(selectedEvent.price)}
        </li>
      </ul>
      <PrimaryButton
        title="Сайт мероприятия"
        to={selectedEvent?.url}
        target="_blank"
      />
      <DescriptionTabs selectedEvent={selectedEvent} />
    </section>
  );
};

export default EventDescription;
