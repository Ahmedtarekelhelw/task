import { useRouter } from "next/router";
import { GoChevronLeft } from "react-icons/go";
import CheckBoxFilter from "./CheckBoxFilter";
import RangeFilter from "./RangeFilter";
import { useData } from "../context/DataContext";
import { useMemo } from "react";
import useFilterOptions from "../hooks/useFilterOptions";

const MobileFilter = ({ setOpenFilter, openFilter }) => {
  const router = useRouter();
  const { maxPrice, maxArea } = useData();

  const { homeTypeFilter, bedRoomFilter, furnishedFilter } = useFilterOptions();

  return (
    <>
      {/* header */}
      <div className="bg-[#FCE9F0] flex justify-between items-center  p-5">
        <div className="flex gap-3 items-center">
          <GoChevronLeft
            size={20}
            cursor="pointer"
            onClick={() => setOpenFilter(!openFilter)}
          />
          <h3 className="text-md font-semibold">Filter by :</h3>
        </div>

        <button
          className="bg-red-400 text-white text-sm outline-none px-3 py-1 rounded-md font-medium "
          onClick={() => router.push("/")}
        >
          Clear all filter
        </button>
      </div>
      {/* content */}
      <div className="px-5">
        <CheckBoxFilter header="Type of home" checkboxes={homeTypeFilter} />
        <RangeFilter header="Price range" minVal={20} maxVal={maxPrice} />
        <CheckBoxFilter
          header="Number of bedrooms"
          checkboxes={bedRoomFilter}
        />
        <RangeFilter header="Area (sqm)" minVal={20} maxVal={maxArea} />

        <CheckBoxFilter header="Furnishings" checkboxes={furnishedFilter} />
      </div>
    </>
  );
};

export default MobileFilter;
