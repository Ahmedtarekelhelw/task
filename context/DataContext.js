import axios from "axios";
import { createContext, useContext, useState } from "react";
import { getMaxValue } from "../helper/helper";

const Context = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [maxPrice, setMaxPrice] = useState(1000000);
  const [maxArea, setMaxArea] = useState(200);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/real_estate/"
      );
      setData(res.data.results);
      setMaxPrice(getMaxValue(res.data.results, "price"));
      setMaxArea(getMaxValue(res.data.results, "area"));
    } catch (error) {
      // TODO: handle error with toast
      console.log("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        data,
        fetchData,
        loading,
        maxPrice,
        maxArea,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useData = () => useContext(Context);
