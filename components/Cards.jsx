import Card from "./Card";
import { useEffect } from "react";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";
import { useData } from "../context/DataContext";
import useFilterData from "../hooks/useFilterData";

const Cards = () => {
  const { data, loading, fetchData } = useData();
  const dataperpage = 3;

  const { currentData, totalData } = useFilterData(data, dataperpage);

  useEffect(() => {
    if (!data?.length) fetchData();
  }, []); // eslint-disable-line

  return (
    <div className="mt-14">
      {loading ? (
        <LoadingSpinner />
      ) : currentData?.length > 0 && !loading ? (
        <>
          <div className="grid grid-cols-auto gap-8 mb-10 ">
            {currentData?.map((card) => (
              <Card key={card.id} info={card} />
            ))}
          </div>
          <Pagination dataperpage={dataperpage} totalResult={totalData} />
        </>
      ) : (
        <p className="font-semibold text-xl text-center text-gray-400">
          There are no Results
        </p>
      )}
    </div>
  );
};

export default Cards;
