import Card from "../card/Card";
import { useEffect } from "react";
import Pagination from "../Pagination";
import LoadingSpinner from "../LoadingSpinner";
import useSearchQuery from "../../hooks/useSearchQuery";
import { useData } from "../../context/DataContext";
import useFilterData from "../../hooks/useFilterData";

const Cards = () => {
  const { data, loading, fetchData } = useData();
  const dataperpage = 3;

  // url search params
  const { sqm, bedrooms_no, home_type, furnished, price } = useSearchQuery();

  const currentData = useFilterData(data, dataperpage);

  useEffect(() => {
    if (!data?.length) fetchData();
  }, []); // eslint-disable-line

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : currentData?.length > 0 && !loading ? (
        <>
          <div className="grid grid-cols-auto gap-8 mb-10">
            {currentData?.map((card) => (
              <Card key={card.id} info={card} />
            ))}
          </div>
          {!sqm && !home_type && !furnished && !bedrooms_no && !price && (
            <Pagination dataperpage={dataperpage} />
          )}
        </>
      ) : (
        <p className="font-semibold text-xl text-center text-gray-400">
          There are no Results
        </p>
      )}
    </>
  );
};

export default Cards;
