import React from "react";

const RangeFilter = ({ header, range }) => {
  return (
    <div className="border-t-[1px] border-[#D5D5D5] flex flex-col mt-2">
      <span className="font-bold text-md my-3">{header}</span>
      <div className="flex items-center gap-3 mb-3">
        <input type="range" min="0" max="20000" className=" accent-[#E3256C]" />
      </div>
    </div>
  );
};

export default RangeFilter;
