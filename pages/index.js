import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";

// Components
import Filteration from "../components/Filteration";
import SqmFilter from "../components/SqmFilter";
import { getMaxValue } from "../helper/helper";
const Cards = dynamic(() => import("../components/Cards"), { ssr: false });

export default function Home({ data, MaxPrice, MaxArea }) {
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
          <Filteration
            setOpenFilter={setOpenFilter}
            openFilter={openFilter}
            maxPrice={MaxPrice}
            maxArea={MaxArea}
            mobile
          />
        )}
      </div>

      {/*  main content */}
      <div
        className={`${
          openFilter ? "hidden md:flex" : "flex"
        } gap-8 justify-center `}
      >
        <div className="flex-1 hidden md:flex">
          <Filteration maxPrice={MaxPrice} maxArea={MaxArea} />
        </div>
        <div className="flex-[3.5] relative">
          <SqmFilter />
          <Cards data={data} />
        </div>
      </div>
    </div>
  );
}

// if the data changed we can use revalidate key to ISR or using SSR
export const getStaticProps = async () => {
  const res = await axios.get(
    "https://forsa-staging.bit68.com/api/v1/stores/real_estate/"
  );
  const MaxPrice = getMaxValue(res.data.results, "price");
  const MaxArea = getMaxValue(res.data.results, "area");

  return {
    props: {
      data: res.data.results,
      MaxPrice,
      MaxArea,
    },
    // revalidate: 10,
  };
};
