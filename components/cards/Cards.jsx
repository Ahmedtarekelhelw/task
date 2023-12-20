import Card from "../card/Card";
import { useEffect, useMemo } from "react";
import Pagination from "../Pagination";
import LoadingSpinner from "../LoadingSpinner";
import useSearchQuery from "../../hooks/useSearchQuery";
import useFetch from "../../hooks/useFetch";

const Cards = () => {
  const { data, loading, fetchData } = useFetch();
  const dataperpage = 3;

  // url search params
  const { sqm, bedrooms_no, home_type, furnished, currentPage } =
    useSearchQuery();

  const FiltredData = useMemo(
    () =>
      data?.filter((obj) => {
        const sqmFilter = sqm
          ? obj.area >= sqm.split(",")[0] && obj.area <= sqm.split(",")[1]
          : true;

        const homeTypeFilter = home_type ? obj.home_type === home_type : true;

        const isPlusFour = bedrooms_no === "+4";
        const bedroomsNoFilter = bedrooms_no
          ? isPlusFour
            ? obj.bedrooms_no >= 4
            : obj.bedrooms_no === +bedrooms_no
          : true;

        const furnishedFilter = furnished
          ? obj.furnished.toString() == furnished
          : true;

        return (
          sqmFilter && homeTypeFilter && bedroomsNoFilter && furnishedFilter
        );
      }),
    [bedrooms_no, data?.length, furnished, home_type, sqm] // eslint-disable-line
  );

  let currentData = useMemo(
    () => {
      if (sqm || home_type || bedrooms_no || furnished) return FiltredData;
      let lastIndexofData = currentPage * dataperpage;
      let firstIndexofData = lastIndexofData - dataperpage;
      return data?.slice(firstIndexofData, lastIndexofData);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      sqm,
      home_type,
      bedrooms_no,
      furnished,
      currentPage,
      data?.length,
      FiltredData?.length,
    ]
  );

  useEffect(() => {
    if (!data?.length) fetchData();
  }, []); // eslint-disable-line

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-auto gap-8 mb-10">
            {currentData?.map((card) => (
              <Card key={card.id} info={card} />
            ))}
          </div>
          {!sqm && !home_type && !furnished && !bedrooms_no && (
            <Pagination dataperpage={dataperpage} />
          )}
        </>
      )}
    </>
  );
};

export default Cards;
