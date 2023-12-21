// Components
import Image from "next/image";
import Cards from "../components/cards/Cards";
import Filteration from "../components/filteration/Filteration";
import SqmFilter from "../components/sqmFilter/SqmFilter";
import { useState } from "react";

import MobileFilter from "../components/MobileFilter";

export default function Home() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="py-6 px-8 md:px-10 ">
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
        } h-full z-10 absolute top-0 left-0  transition-all`}
      >
        {openFilter && (
          <MobileFilter setOpenFilter={setOpenFilter} openFilter={openFilter} />
        )}
      </div>

      {/*  main content */}

      <div className="block md:hidden">
        <SqmFilter />
      </div>

      <div
        className={`${
          openFilter ? "hidden md:flex" : "flex"
        } gap-8 justify-center `}
      >
        <div className="flex-1 hidden md:flex">
          <Filteration />
        </div>
        <div className="flex-[3.5] ">
          <div className="hidden md:block">
            <SqmFilter />
          </div>
          <Cards />
        </div>
      </div>
    </div>
  );
}
