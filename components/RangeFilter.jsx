import Slider from "@mui/material/Slider";
import { useRouter } from "next/router";
import { rangeHeaders } from "../helper/helper";
import useSearchQuery from "../hooks/useSearchQuery";
const RangeFilter = ({ header, minVal, maxVal }) => {
  const router = useRouter();
  const { price, sqm } = useSearchQuery();

  const checkPrice = rangeHeaders[header] === "price" && price;
  const checkarea = rangeHeaders[header] === "sqm" && sqm;

  const defaultValues = checkPrice
    ? price.split(",")
    : checkarea
    ? sqm.split(",")
    : ["200", "300"];

  const handleChange = (e, newValue) => {
    router.push(
      {
        query: { ...router.query, [rangeHeaders[header]]: newValue.join(",") },
      },
      undefined,
      { scroll: false } // to prevent scroll to top when change the area range
    );
  };

  return (
    <div className="border-t-[1px] border-[#D5D5D5] flex flex-col mt-2">
      <span className="font-bold text-md my-3">{header}</span>
      <div className="flex items-center gap-3 mb-3 px-3">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={[+defaultValues[0], +defaultValues[1]]}
          min={minVal}
          max={maxVal}
          onChange={handleChange}
          valueLabelDisplay="auto"
          style={{ color: "#E3256C !important" }}
        />
      </div>
    </div>
  );
};

export default RangeFilter;
