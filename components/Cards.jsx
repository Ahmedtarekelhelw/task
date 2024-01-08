import Card from "./Card";
import Pagination from "./Pagination";
import useFilterData from "../hooks/useFilterData";

const Cards = ({data}) => {
  const dataperpage = 3;
  const { currentData, totalData } = useFilterData(data, dataperpage);
  
  return (
    <div className="mt-14">
      { currentData?.length > 0  ? (
        <>
          <div className="grid grid-cols-auto gap-8 mb-10 ">
            {currentData?.map((card) => (
              <Card key={card.id} info={card} />
            ))}
          </div>
          <Pagination dataperpage={dataperpage} totalResult={totalData} />
        </>
      ) : (
        <p className="font-semibold text-xl text-center text-gray-400">
          There are no Results
        </p>
      )}
    </div>
  );
};

export default Cards;
