import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useRouter } from "next/router";
import useSearchQuery from "../hooks/useSearchQuery";

const Pagination = ({ dataperpage, totalResult }) => {
  const router = useRouter();
  const { currentPage } = useSearchQuery();

  const total = totalResult;

  let pagesNum = [];
  let paginationNumber = total / dataperpage;

  for (let i = 1; i <= Math.ceil(paginationNumber); i++) {
    pagesNum.push(i);
  }

  return (
    <div className="flex items-center gap-3 justify-center">
      <button
        disabled={currentPage <= 1}
        onClick={() => {
          if (currentPage > 1) {
            router.push({ query: { ...router.query, page: currentPage - 1 } });
          }
        }}
      >
        <FaAngleLeft color={currentPage <= 1 ? "gray" : "black"} />
      </button>

      {pagesNum.map((page, i) => (
        <button
          className={`${
            currentPage === page ? "font-bold" : ""
          } cursor-pointer`}
          key={i}
          onClick={() => router.push({ query: { ...router.query, page } })}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage >= paginationNumber}
        onClick={() => {
          if (currentPage <= paginationNumber) {
            router.push({ query: { ...router.query, page: currentPage + 1 } });
          }
        }}
      >
        <FaAngleRight
          color={currentPage >= paginationNumber ? "gray" : "black"}
        />
      </button>
    </div>
  );
};

export default Pagination;
