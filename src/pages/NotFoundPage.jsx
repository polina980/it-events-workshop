import styles from "./styles.module.scss";
import { PrimaryButton } from "../UI-kit/PrimaryButton/PrimaryButton";

export const NotFoundPage = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.notInfo}>
        <h1 className={styles.notTitle}>404. Такой страницы на сайте нет</h1>
        <div className={styles.notBlock}>
          <p className={styles.notText}>
            С этой страницей что-то случилось или не верно указан адрес
          </p>
          <PrimaryButton title="На главную" to="/" />
        </div>
      </div>
    </section>
  );
};
