import { useMemo } from "react";

const useFilterOptions = () => {
  const homeTypeFilter = useMemo(
    () => ["appartment", "twinhouse", "duplex", "villa"],
    []
  );
  const bedRoomFilter = useMemo(() => ["studio", "02", "03", "+4"], []);
  const furnishedFilter = useMemo(
    () => ["Any", "furnished", "Unfurnished"],
    []
  );
  return { homeTypeFilter, bedRoomFilter, furnishedFilter };
};

export default useFilterOptions;
