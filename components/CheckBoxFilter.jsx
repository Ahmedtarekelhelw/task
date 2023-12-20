import { useRouter } from "next/router";
import { CheckboxId, headers } from "../helper/helper";
import { memo } from "react";

const CheckBoxFilter = ({ header, checkboxes }) => {
  const router = useRouter();

  return (
    <div className="md:border-t-[1px] md:border-[#D5D5D5] flex flex-col mt-2">
      <span className="font-bold text-md my-3">{header}</span>
      <div className="flex gap-5 md:block overflow-x-auto scrollbar-hidden">
        {checkboxes?.map((box, i) => {
          const isActive = router?.query[headers[header]] == CheckboxId(box);
          return (
            <div className="flex items-center gap-3 mb-3 " key={i}>
              <button
                className={`block md:hidden py-2 px-4 w-[130px] text-sm sm:text-md cursor-pointer ${
                  isActive ? "bg-[#0C1F39] text-white" : "bg-gray-200"
                } rounded-lg transition-all capitalize`}
                onClick={(e) => {
                  !isActive
                    ? router.push(
                        {
                          query: {
                            ...router.query,
                            [headers[header]]: CheckboxId(box),
                          },
                        },
                        undefined,
                        { scroll: false }
                      )
                    : router.push(
                        {
                          query: {
                            ...router.query,
                            [headers[header]]: "",
                          },
                        },
                        undefined,
                        { scroll: false }
                      );
                }}
              >
                {box}
              </button>

              <div className="hidden md:flex gap-2">
                <input
                  type="radio"
                  id={CheckboxId(box)}
                  name={header}
                  checked={router?.query[headers[header]] == CheckboxId(box)}
                  className="accent-[#002554] cursor-pointer "
                  onChange={(e) => {
                    router.push(
                      {
                        query: {
                          ...router.query,
                          [headers[header]]: CheckboxId(box),
                        },
                      },
                      undefined,
                      { scroll: false }
                    );
                  }}
                />
                <label htmlFor={box} className="capitalize cursor-pointer">
                  {box}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(CheckBoxFilter);
