import { useMemo } from "react";
import useSearchQuery from "./useSearchQuery";
import { useData } from "../context/DataContext";

const useFilterData = (data, dataperpage) => {
  // url search params
  const { sqm, bedrooms_no, home_type, furnished, price, currentPage } =
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

        const priceFilter = price
          ? obj.price >= price.split(",")[0] && obj.price <= price.split(",")[1]
          : true;

        return (
          sqmFilter &&
          homeTypeFilter &&
          bedroomsNoFilter &&
          furnishedFilter &&
          priceFilter
        );
      }),
    [bedrooms_no, data?.length, furnished, home_type, sqm, price] // eslint-disable-line
  );

  let currentData = useMemo(
    () => {
      if (sqm || home_type || bedrooms_no || furnished || price)
        return FiltredData;
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
  return currentData;
};

export default useFilterData;
