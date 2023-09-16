import { Card } from './Card';
import styles from './styles.module.scss';
import defaultImage from '../../images/default-image.png';
import { ReactComponent as PlaceImage } from '../../images/EventInfo/place.svg';
import { ReactComponent as CalendarImage } from '../../images/EventInfo/calendar.svg';
import { ReactComponent as TimeImage } from '../../images/EventInfo/time.svg';


export default {
  title: 'Components/Card',
  component: Card,
  args: {
    event: {
        id: 1,
        title: 'Событие про Storybook или длинное название',
        city: 'Москва',
        date_start: 'Ср, 25 сентября',
        isLiked: false,
        price: 'string',
        url: 'string',
        image:
          'http://80.87.107.15/media/events/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-06-10_085724.png',
    },
  },
  argTypes: {
    event: {
     type: 'object'
    },
    style: {
      description: 'Optional inline style',
    },
    cardDirection: {
      options: ['row', 'column'],
      control: 'radio',
      defaultValue: 'row',
      description: 'Flex Direction inline style',
    },
  },
};

const event = {
  id: 1,
  title: 'Событие про Storybook или длинное название',
  city: 'Москва',
  date_start: 'Ср, 25 сентября',
  isLiked: false,
  price: '15 000 р.',
  url: 'string',
  image:
    'http://80.87.107.15/media/events/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-06-10_085724.png',
};

const cardDetails = [
  {
    icon: <CalendarImage />,
    content: event.date_start,
  },
  {
    icon: <TimeImage />,
    content: '10:00 - 12:00',
  },
  {
    icon: <PlaceImage />,
    content: event.city,
  },
  {
    content: event.price,
    styles: styles.price,
  },
];

export const Basic = (args) => {
  const { event, cardDirection } = args;
  return (
    <li
      key={event.id}
      className={`${styles.card}`}
      style={{ padding: '0', margin: '0', flexDirection: cardDirection }}
    >
      <div className={styles.imageContainer}>
          <img src={event.image} alt='event_picture' className={styles.image} />
        <button
          className={`${
            event.isLiked ? styles.likeButtonActive : styles.likeButton
          }`}
          type='button'
        ></button>
      </div>
      <div className={`${styles.descriptionContainer}`}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{event.title}</h3>
        </div>
        <ul className={styles.rowContainer} style={{ padding: '0' }}>
          {cardDetails.map((item, index) => (
            <li
              key={index}
              className={styles.rowItem}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {item.icon}
              <p className={item.styles} style={{ margin: '0' }}>
                {item.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export const IsLiked = () => {
  const isLikedEvent = {
    ...event,
    isLiked: true,
    title: "Card в состоянии isLiked"
  }
    return (
        <Basic event={isLikedEvent} />
    )
} 

export const DefaultImage = () => {
    const newEvent = {
      ...event,
      image: defaultImage,
      title: "Card в состоянии DefaultImage"
    }
      return (
          <Basic event={newEvent} />
      )
  } 