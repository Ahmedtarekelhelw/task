export const headers = {
  "Type of home": "home_type",
  "Number of bedrooms": "bedrooms_no",
  Furnishings: "furnished",
};
export const rangeHeaders = {
  "Price range": "price",
  "Area (sqm)": "sqm",
};

export const CheckboxId = (value) => {
  switch (value) {
    case "studio":
      return 1;
    case "furnished":
      return "true";
    case "Unfurnished":
      return "false";
    case "Any":
      return "";
    default:
      return value;
  }
};

export const getMaxValue = (data, value) => {
  const maxValue = Math.max(...data.map((product) => product[value]));
  return maxValue;
};
