import { useRouter } from "next/router";
import { useState } from "react";
import useSearchQuery from "../hooks/useSearchQuery";
import Button from "./Button";

const sqmOptions = [
  "55 - 75",
  "75 - 100",
  "100 - 130",
  "130 - 160",
  "160 - 200",
  "200 - 260",
  "260 - 300",
];

const SqmFilter = () => {
  const [active, setActive] = useState();

  const router = useRouter();
  const { sqm } = useSearchQuery();

  const handleClick = (index, item) => {
    if (index !== active) {
      router.push({ query: { ...router.query, sqm: item, page: 1 } });
      setActive(index);
    } else {
      router.push({ query: { ...router.query, sqm: "" } });
      setActive();
    }
  };
  return (
    <div className="overflow-x-auto w-full  mb-5 flex scrollbar-hidden  absolute top-0 left-0">
      <div className="flex gap-2">
        {sqmOptions.map((item, i) => {
          const formatSqm = item.split(" - ").join(",");
          const isActive = sqm === formatSqm;
          return (
            <Button
              text={`${item} SQM`}
              isActive={isActive}
              style="w-[130px]"
              key={i}
              handleClick={() => handleClick(i, formatSqm)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SqmFilter;
