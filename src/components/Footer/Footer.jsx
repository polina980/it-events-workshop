import styles from './styles.module.scss';
import Logo from '../Logo/Logo';
import GitHubLogo from '../../images/SocialNetworks/GitHub.svg';
import MessengerLogo from '../../images/SocialNetworks/Messenger.svg';
import VkLogo from '../../images/SocialNetworks/VK.svg';
import useScrollToTop from '../../utils/hooks/useScrollToTop';

const logoSize = {
  fontSize: '20px',
  color: '#F1F0EB',
};

const footerItems = [
  { text: 'О нас' },
  { text: 'События' },
  { text: 'Cookies' },
  { text: 'Мы в СМИ!' },
  { text: 'Войти в ЛК' },
  { text: 'Политика конфиденциональности' },
];

const Footer = () => {
  const date = new Date().getFullYear();
  const { scrollToTop } = useScrollToTop();

  return (
    <footer className={styles.footer}>
      <div className={styles.logos}>
        <Logo logoSize={logoSize} onClick={scrollToTop} />
        <span className={styles.year}>© {date} IT-events</span>
      </div>
      <div className={styles.infoContainer}>
        <ul className={styles.footerList}>
          {footerItems.map((item, index) => (
            <li className={styles.footerItem} key={index}>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className={styles.contacts}>
          <p className={styles.email}>it-connect-event@yandex.ru</p>
          <div className={styles.images}>
            <img src={GitHubLogo} alt="GitHub" />
            <img src={MessengerLogo} alt="Messenger" />
            <img src={VkLogo} alt="Vk" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
