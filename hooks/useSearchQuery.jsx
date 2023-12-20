import { useSearchParams } from "next/navigation";

const useSearchQuery = () => {
  const searchParams = useSearchParams();

  const sqm = searchParams.get("sqm") || "";
  const home_type = searchParams.get("home_type");
  const bedrooms_no = searchParams.get("bedrooms_no");
  const furnished = searchParams.get("furnished");
  const currentPage = +searchParams.get("page") || 1;

  return { sqm, home_type, bedrooms_no, furnished, currentPage };
};

export default useSearchQuery;
