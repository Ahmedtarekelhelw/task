import { useRouter } from "next/router";
import { CheckboxId, headers } from "../helper/helper";

const CheckBoxFilter = ({ header, checkboxes }) => {
  const router = useRouter();

  return (
    <div className="md:border-t-[1px] md:border-[#D5D5D5] flex flex-col mt-2">
      <span className="font-bold text-md my-3">{header}</span>
      <div className="flex gap-5 md:block  ">
        {checkboxes?.map((box, i) => (
          <div className="flex items-center gap-3 mb-3 " key={i}>
            <input
              type="radio"
              id={CheckboxId(box)}
              name={header}
              checked={router?.query[headers[header]] == CheckboxId(box)}
              className="accent-[#002554] cursor-pointer"
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
        ))}
      </div>
    </div>
  );
};

export default CheckBoxFilter;
