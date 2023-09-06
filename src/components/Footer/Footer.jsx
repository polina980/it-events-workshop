import styles from './styles.module.scss';
import { Logo } from '../../UI-kit/Logo/Logo';
import { SocialIcons } from '../../images/SocialIcons/socialIcons'
import useScrollToTop from '../../utils/hooks/useScrollToTop';

const logoSize = {
  fontSize: '20px',
  color: '#F1F0EB',
};

const footerItems = [
  { text: 'О нас' },
  { text: 'Политика конфиденциональности' },
  { text: 'Cookies' },
];

export const Footer = () => {
  const date = new Date().getFullYear();
  const { scrollToTop } = useScrollToTop();

  return (
    <footer className={styles.footer}>
      <Logo logoSize={logoSize} onClick={scrollToTop} />
      <ul className={styles.list}>
        {footerItems.map((item, index) => (
          <li className={styles.item} key={index}>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <div className={styles.contacts}>
        <p className={styles.email}>it-connect-event@yandex.ru</p>
        <div className={styles.images}>
          <img src={SocialIcons.GitHub} alt="GitHub" />
          <img src={SocialIcons.Messenger} alt="Messenger" />
          <img src={SocialIcons.VK} alt="VK" />
        </div>
      </div>
      <span className={styles.year}>© {date} IT-events</span>
    </footer>
  );
};
