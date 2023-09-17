import styles from "./styles.module.scss";
import Logo from "../../UI-kit/Logo/Logo";
import { SocialIcons } from "../../images/SocialIcons/socialIcons";
import useScrollToTop from "../../utils/hooks/useScrollToTop";

const footerMenu = [
  { text: "О нас" },
  { text: "Политика конфиденциональности" },
  { text: "Cookies" },
];

const footerIcons = [
  {
    src: SocialIcons.GitHub,
    alt: 'GitHub'
  },
  {
    src: SocialIcons.Messenger,
    alt: 'Messenger'
  },
  {
    src: SocialIcons.VK,
    alt: 'VK'
  },
]

export const Footer = () => {
  const date = new Date().getFullYear();
  const { scrollToTop } = useScrollToTop();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo fontSize="20px" color="#F1F0EB" onClick={scrollToTop} />
        <ul className={styles.list}>
          {footerMenu.map((item, index) => (
            <li className={styles.item} key={index}>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className={styles.contacts}>
          <p className={styles.email}>it-connect-event@yandex.ru</p>
          <ul className={styles.images}>
            {footerIcons.map((icon) => (
              <li key={icon.alt}>
                <img src={icon.src} alt={icon.alt} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className={styles.year}>© {date} IT-events</span>
    </footer>
  );
};
