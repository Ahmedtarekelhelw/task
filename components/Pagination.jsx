import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useData } from "../context/DataContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Pagination = ({ currentPage, dataperpage }) => {
  const router = useRouter();
  const { count: total } = useData();

  let paginationNumber = total / dataperpage;

  const pagesNum = [];

  for (let i = 1; i <= Math.ceil(paginationNumber); i++) {
    pagesNum.push(i);
  }

  return (
    <div className="flex items-center gap-3 justify-center">
      <button
        disabled={currentPage <= 1}
        onClick={() => {
          if (currentPage > 1) {
            router.push(`?page=${currentPage - 1} `);
          }
        }}
      >
        <FaAngleLeft color={currentPage <= 1 && "gray"} />
      </button>
      {pagesNum.map((page) => (
        <Link
          href={`?page=${page}`}
          className={`${
            currentPage === page ? "font-bold" : ""
          } cursor-pointer`}
          key={page}
        >
          {page}
        </Link>
      ))}
      <button
        disabled={currentPage >= paginationNumber}
        onClick={() => {
          if (currentPage <= paginationNumber) {
            router.push(`?page=${currentPage + 1} `);
          }
        }}
      >
        <FaAngleRight color={currentPage >= paginationNumber && "gray"} />
      </button>
    </div>
  );
};

export default Pagination;
