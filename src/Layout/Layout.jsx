import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { EventsProvider } from "../utils/context/EventsContext";
import { FiltersProvider } from "../utils/context/SearchFilterContext";

export const Layout = () => {
  return (
    <EventsProvider>
      <FiltersProvider>
        <div className={styles.app}>
          <Header />
          <main className={styles.main}>
          {<Outlet />}
          </main>
          <Footer />
        </div>
      </FiltersProvider>
    </EventsProvider>
  );
};
