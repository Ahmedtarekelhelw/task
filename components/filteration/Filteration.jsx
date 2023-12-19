import CheckBoxFilter from "../CheckBoxFilter";
import RangeFilter from "../RangeFilter";

const Filteration = () => {
  return (
    <div className="border-[1px] w-full border-[#A4ABB6] rounded-md p-3 sticky top-4">
      <span className="font-bold text-xl">Filter by:</span>

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
