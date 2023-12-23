import { useRouter } from "next/router";
import CheckBoxFilter from "./CheckBoxFilter";
import RangeFilter from "./RangeFilter";
import { useData } from "../context/DataContext";
import useFilterOptions from "../hooks/useFilterOptions";
import { GoChevronLeft } from "react-icons/go";

const Filteration = ({ setOpenFilter, openFilter, mobile }) => {
  const router = useRouter();
  const { maxPrice, maxArea } = useData();

  const { homeTypeFilter, bedRoomFilter, furnishedFilter } = useFilterOptions();

  return (
    <div
      className={`${
        !mobile && "border-[1px] w-full border-[#A4ABB6] rounded-md p-3"
      } `}
    >
      {/* header */}
      <div
        className={`${
          mobile && "bg-[#FCE9F0]  p-5"
        } flex justify-between items-center flex-wrap gap-2`}
      >
        <div className="flex gap-2 items-center">
          <GoChevronLeft
            size={20}
            className="block md:hidden"
            cursor="pointer"
            onClick={() => setOpenFilter(!openFilter)}
          />
          <h3
            className={` ${
              mobile && "font-semibold text-md"
            } font-bold text-xl`}
          >
            Filter by :
          </h3>
        </div>

        <button
          className="bg-red-400 text-white text-sm outline-none px-3 py-1 rounded-md font-medium "
          onClick={() => router.push("/")}
        >
          Clear all filter
        </button>
      </div>

      {/* filteration content */}
      <div className={`${mobile && "px-5"}`}>
        <CheckBoxFilter header="Type of home" checkboxes={homeTypeFilter} />
        <RangeFilter header="Price range" minVal={20} maxVal={maxPrice} />

        <CheckBoxFilter
          header="Number of bedrooms"
          checkboxes={bedRoomFilter}
        />

        <RangeFilter header="Area (sqm)" minVal={20} maxVal={maxArea} />

        <CheckBoxFilter header="Furnishings" checkboxes={furnishedFilter} />
      </div>
    </div>
  );
};

export default Filteration;
