import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/real_estate/"
      );
      setCount(res.data.count);
      setData(res.data.results);
      setPrev(res.data.previous);
      setNext(res.data.next);
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
        next,
        prev,
        data,
        count,
        fetchData,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useData = () => useContext(Context);
