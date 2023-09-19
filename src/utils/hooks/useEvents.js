import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiEvents } from "../api";
import { getCurrentEvents, getRandomEvents } from "../helperFunctions";

function useEvents() {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [popularEvents, setPopularEvents] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // ------------ ПОЛУЧЕНИЕ СОБЫТИЙ С СЕРВЕРА ------------ //
  useEffect(() => {
    const fetchDataAndSaveToLocalStorage = async () => {
      try {
        setIsLoading(true);
        const data = await apiEvents.getEvents();
        updateEventArrays(data);
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const updateEventArrays = (events) => {
      const updatedEvents = events.map((event) => {
        const isLiked = favoriteEvents.some((item) => item.id === event.id);
        return { ...event, isLiked };
      });
      // ДЕЛИМ НА ПРЕДСТОЯЩИЕ И ПРОШЕДШИЕ
      const upcomingEvents = getCurrentEvents([...updatedEvents]);
      //const pastEvents = getPastEvents([...eventsFromApi]);
      const recommended = getRandomEvents([...upcomingEvents]);
      //console.log('Upcoming events:', upcomingEvents);
      setRecommendedEvents(recommended);
      setPopularEvents(upcomingEvents.slice(9, 24));
      setSearchResult(upcomingEvents);
      setUpcomingEvents(upcomingEvents);
      localStorage.setItem("eventsData", JSON.stringify(upcomingEvents));
    };

    const fetchData = async () => {
      try {
        const savedFavorites = localStorage.getItem("favoriteEvents");
        if (savedFavorites) {
          setFavoriteEvents(JSON.parse(savedFavorites));
        }
        const storagedEvents = localStorage.getItem("eventsData");
        if (!storagedEvents) {
          await fetchDataAndSaveToLocalStorage();
        } else {
          updateEventArrays(JSON.parse(storagedEvents));
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchData();
    // ОБНОВЛЕНИЕ СОБЫТИЙ С СЕРВЕРА КАЖДЫЕ 10 МИНУТ
    const interval = setInterval(() => {
      localStorage.removeItem("eventsData");
      console.log("Обновились данные");
      fetchData();
    }, 1000000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Сохранение избранных событий в локальное хранилище
  useEffect(() => {
    if (favoriteEvents.length >= 0) {
      localStorage.setItem("favoriteEvents", JSON.stringify(favoriteEvents));
      //console.log('Favorites saved:', favorites);
    }
  }, [favoriteEvents]);

  // Cохранение текущего события в локальное хранилище чтобы не терять контекст.
  useEffect(() => {
    if (selectedEvent) {
      localStorage.setItem("selectedEvent", JSON.stringify(selectedEvent));
    }
  }, [selectedEvent]);

  useEffect(() => {
    const savedSelectedEvent = localStorage.getItem("selectedEvent");
    if (savedSelectedEvent) {
      setSelectedEvent(JSON.parse(savedSelectedEvent));
    }
  }, []);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  // Функция обновления массива избранных событий
  const updateFavorites = (event) => {
    setFavoriteEvents((prevFavorites) => {
      const isEventInFavorites = prevFavorites.some(
        (item) => item.id === event.id
      );
      if (!isEventInFavorites) {
        return [...prevFavorites, { ...event, isLiked: true }];
      } else {
        return prevFavorites.filter((item) => item.id !== event.id);
      }
    });
  };
  // MAIN LIKE UPDATE FUNCTION
  const toggleFavorite = (event) => {
    updateFavorites(event);
    // Обновление isLiked у selectedEvent
    const updatedSelectedEvent = { ...selectedEvent };
    if (selectedEvent && selectedEvent.id === event.id) {
      updatedSelectedEvent.isLiked = !updatedSelectedEvent.isLiked;
    }
    setSelectedEvent(updatedSelectedEvent);
  };

  // Функция обновления массивов событий при изменении избранных
  useEffect(() => {
    setPopularEvents((prevEvents) => updateEvents(prevEvents));
    setSearchResult((prevEvents) => updateEvents(prevEvents));
    setRecommendedEvents((prevEvents) => updateEvents(prevEvents));
    //setEventsFromApi((prevEvents) => updateEvents(prevEvents));
    setUpcomingEvents((prevEvents) => updateEvents(prevEvents));
  }, [favoriteEvents]);

  // Функция обновления массивов событий
  function updateEvents(events) {
    return events.map((event) => {
      const isLiked = favoriteEvents.some((item) => item.id === event.id);
      return { ...event, isLiked };
    });
  }

  // Фильтруем результаты по уникальным идентификаторам (id)
  const filterUniqueEvents = (events, searchResults) => {
    return events.filter((event) => {
      return !searchResults.some((existEvent) => existEvent.id === event.id)
    })
  };

  const handleSearch = async (filters) => {
    try {
      setIsLoading(true)
      const request = new URLSearchParams();
      for (const filterName in filters) {
        console.log(filters)
        request.set(filterName, filters[filterName]);
      }

      const response = await apiEvents.searchRequest('?' + request.toString())
      const filteredResult = getCurrentEvents(updateEvents(response));
      setSearchResult(filteredResult);
      navigate("/results");
    } catch (error) {
      console.error("Ошибка при получении результатов поиска", error)
    } finally {
      setIsLoading(false)
    }
  };

  // const handleSearch = async (request) => {
  //   try {
  //     setIsLoading(true)
  //     const response = await apiEvents.searchRequest(request)
  //     console.log(request)
  //     const filteredResult = getCurrentEvents(response);
  //     setSearchResult(filteredResult)
  //     navigate("/results");
  //   } catch (error) {
  //     console.error("Ошибка при получении результатов поиска", error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // };

  const handleFilterSearch = () => {
    //setSearchQuery(query)
    setSearchResult(upcomingEvents);
    navigate("/results");
  };

  return {
    isLoading,
    recommendedEvents,
    popularEvents,
    upcomingEvents,
    searchResult,
    selectedEvent,
    setSelectedEvent,
    favoriteEvents,
    handleCardClick,
    toggleFavorite,
    handleSearch,
    handleFilterSearch,
    searchQuery,
    setSearchQuery,
  };
}

export default useEvents;
