import Card from "../card/Card";
import { useData } from "../../context/DataContext";
import { useEffect, useMemo } from "react";
import Pagination from "../Pagination";
import { useSearchParams } from "next/navigation";
import LoadingSpinner from "../LoadingSpinner";

const Cards = () => {
  const { data, fetchData, loading } = useData();
  const searchParams = useSearchParams();

  // pagination
  const dataperpage = 3;
  const currentPage = searchParams.get("page") || 1;

  // url search params
  const sqm = searchParams.get("sqm") || "";
  const home_type = searchParams.get("home_type");
  const bedrooms_no = searchParams.get("bedrooms_no");
  const furnished = searchParams.get("furnished");

  const FiltredData = useMemo(
    () =>
      data.filter((obj) => {
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
    [bedrooms_no, data.length, furnished, home_type, sqm] // eslint-disable-line
  );

  let currentData = useMemo(
    () => {
      if (sqm || home_type || bedrooms_no || furnished) return FiltredData;
      let lastIndexofData = currentPage * dataperpage;
      let firstIndexofData = lastIndexofData - dataperpage;
      return data.slice(firstIndexofData, lastIndexofData);
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
            <Pagination currentPage={+currentPage} dataperpage={dataperpage} />
          )}
        </>
      )}
    </>
  );
};

export default Cards;
