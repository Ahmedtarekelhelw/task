// import { useSearchParams } from "next/navigation";

import { useRouter } from "next/router";

const useSearchQuery = () => {
  const { query } = useRouter();

  const sqm = query.sqm || "";
  const home_type = query.home_type;
  const bedrooms_no = query.bedrooms_no;
  const furnished = query.furnished;
  const currentPage = +query.page || 1;
  const price = query.price || "";

  return { sqm, home_type, bedrooms_no, furnished, currentPage, price };
};

export default useSearchQuery;
