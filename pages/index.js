// Components
import Image from "next/image";
import Cards from "../components/cards/Cards";
import Filteration from "../components/filteration/Filteration";
import SqmFilter from "../components/sqmFilter/SqmFilter";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import CheckBoxFilter from "../components/CheckBoxFilter";
import RangeFilter from "../components/RangeFilter";

export default function Home() {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="py-6 px-10 ">
      <h1 className="text-2xl semi-bold mb-3">Explore properties</h1>

      {/* Filter Icon */}
      <div
        className="md:hidden fixed right-4 bottom-4 z-20 cursor-pointer"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <Image src="/assets/filter.png" alt="filter" width={50} height={50} />
      </div>

      {/* Filter options in mobile */}
      <div
        className={`md:hidden bg-white ${
          openFilter ? "w-full" : "w-0"
        } h-fit z-10 absolute top-0 left-0 transition-all`}
      >
        {openFilter && (
          <>
            {/* header */}
            <div className="bg-[#FCE9F0] flex gap-3 items-center p-5">
              <GoChevronLeft
                size={20}
                cursor="pointer"
                onClick={() => setOpenFilter(!openFilter)}
              />
              <h3 className="text-md font-semibold">Filter by :</h3>
            </div>
            {/* content */}
            <div className="pl-5">
              <CheckBoxFilter
                header="Type of home"
                checkboxes={["appartment", "twinhouse", "duplex", "villa"]}
              />
              <RangeFilter header="Price range" />
              <CheckBoxFilter
                header="Number of bedrooms"
                checkboxes={["studio", "02", "03", "+4"]}
              />
              <RangeFilter header="Area (sqm)" />
              <CheckBoxFilter
                header="Furnishings"
                checkboxes={["Any", "furnished", "Unfurnished"]}
              />
            </div>
          </>
        )}
      </div>

      {/* main content */}
      <div className="flex gap-8 justify-center ">
        <div className="flex-1 hidden md:flex">
          <Filteration />
        </div>
        <div className="flex-[3.5]">
          <SqmFilter />
          <Cards />
        </div>
      </div>
    </div>
  );
}
