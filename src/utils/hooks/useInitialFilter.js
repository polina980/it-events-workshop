import { useEffect, useState } from "react";
import { apiEvents } from "../../utils/api";

export function useInitialFilter() {
  const [dataLists, setDataLists] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await apiEvents.getTopics();
        setDataLists((prevDataLists) => ({
          ...prevDataLists,
          topics: response.map((item) => item.name),
        }));
      } catch (error) {
        console.log("Error fetching topics:", error);
      }
    };

    const fetchTags = async () => {
      try {
        const response = await apiEvents.getTags();
        setDataLists((prevDataLists) => ({
          ...prevDataLists,
          findTags: response.map((item) => item.name),
          allTags: response,
        }));
      } catch (error) {
        console.log("Error fetching tags:", error);
      }
    };

    const fetchSities = async () => {
      try {
        const response = await apiEvents.getSities();
        setDataLists((prevDataLists) => ({
          ...prevDataLists,
          city: response.map((item) => item.name),
        }));
      } catch (error) {
        console.log("Error fetching sities:", error);
      }
    };

    fetchTopics();
    fetchTags();
    fetchSities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dataLists,
  };
}
