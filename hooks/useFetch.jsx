import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/real_estate/"
      );
      setData(res.data.results);
    } catch (error) {
      // TODO: handle error with toast
      console.log("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchData };
};

export default useFetch;
