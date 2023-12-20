import { useRouter } from "next/router";
import CheckBoxFilter from "../CheckBoxFilter";
import RangeFilter from "../RangeFilter";

const Filteration = () => {
  const router = useRouter();
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
  );
};

export default Filteration;
