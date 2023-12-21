import { useRouter } from "next/router";
import { useState } from "react";
import useSearchQuery from "../../hooks/useSearchQuery";
import Button from "../Button";

const sqmOptions = [
  "55 - 75",
  "75 - 100",
  "100 - 130",
  "130 - 160",
  "160 - 170",
  "170 - 200",
  "200 - 260",
];

const SqmFilter = () => {
  const [active, setActive] = useState();

  const router = useRouter();
  const { sqm } = useSearchQuery();

  const handleClick = (index, item) => {
    if (index !== active) {
      router.push({ query: { ...router.query, sqm: item } });
      setActive(index);
    } else {
      router.push({ query: { ...router.query, sqm: "" } });
      setActive();
    }
  };
  return (
    <div className="flex gap-2 overflow-x-auto  mb-5 justify-between sm:justify-normal scrollbar-hidden ">
      <div className="flex gap-3 ">
        {sqmOptions.map((item, i) => {
          const formatSqm = item.split(" - ").join(",");
          const isActive = sqm === formatSqm;
          return (
            <button
              className={`py-2 px-4 w-[130px] outline-none  md:w-auto text-sm sm:text-md cursor-pointer ${
                isActive ? "bg-[#0C1F39] text-white" : "bg-gray-200"
              } rounded-xl transition-all`}
              key={i}
              onClick={() => handleClick(i, formatSqm)}
            >
              {item} SQM
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SqmFilter;
