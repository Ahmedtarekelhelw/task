import { useRouter } from "next/router";
import CheckBoxFilter from "../CheckBoxFilter";
import RangeFilter from "../RangeFilter";
import { useData } from "../../context/DataContext";
import useFilterOptions from "../../hooks/useFilterOptions";

const Filteration = () => {
  const router = useRouter();
  const { maxPrice, maxArea } = useData();

  const { homeTypeFilter, bedRoomFilter, furnishedFilter } = useFilterOptions();

  return (
    <div className="border-[1px] w-full border-[#A4ABB6] rounded-md p-3 sticky top-4">
      {/* header */}
      <div className="flex justify-between flex-wrap gap-2">
        <span className="font-bold text-xl">Filter by:</span>
        <button
          className="bg-red-400 text-white text-sm outline-none px-3 py-1 rounded-md font-medium "
          onClick={() => router.push("/")}
        >
          Clear all filter
        </button>
      </div>

      <CheckBoxFilter header="Type of home" checkboxes={homeTypeFilter} />
      <RangeFilter header="Price range" minVal={20} maxVal={maxPrice} />

      <CheckBoxFilter header="Number of bedrooms" checkboxes={bedRoomFilter} />

      <RangeFilter header="Area (sqm)" minVal={20} maxVal={maxArea} />

      <CheckBoxFilter header="Furnishings" checkboxes={furnishedFilter} />
    </div>
  );
};

export default Filteration;
