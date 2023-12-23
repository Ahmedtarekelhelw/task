import { useRouter } from "next/router";
import { CheckboxId, checkboxheaders } from "../helper/helper";
import { memo, useState } from "react";
import Button from "./Button";

const CheckBoxFilter = ({ header, checkboxes }) => {
  const router = useRouter();
  const [checked, setChecked] = useState("");

  const navigation = (condition, box) => {
    if (condition) {
      router.push(
        {
          query: {
            ...router.query,
            [checkboxheaders[header]]: CheckboxId(box),
            page: 1,
          },
        },
        undefined,
        { scroll: false }
      );
      return;
    }
    router.push(
      {
        query: {
          ...router.query,
          [checkboxheaders[header]]: "",
        },
      },
      undefined,
      { scroll: false }
    );
  };

  const handleClick = (isActive, box) => {
    navigation(!isActive, box);
  };

  const handleChange = (e, box) => {
    setChecked(e.target.checked ? box : "");
    navigation(e.target.checked, box);
  };

  return (
    <div className="md:border-t-[1px] md:border-[#D5D5D5] flex flex-col mt-2">
      <span className="font-bold text-md my-3">{header}</span>
      <div className="flex gap-5 md:block overflow-x-auto scrollbar-hidden">
        {checkboxes?.map((box, i) => {
          const isActive =
            router?.query[checkboxheaders[header]] == CheckboxId(box);
          return (
            <div className="flex items-center gap-3 mb-3 " key={i}>
              <Button
                text={box}
                style="md:hidden w-[130px]"
                isActive={isActive}
                handleClick={() => handleClick(isActive, box)}
              />

              <div className="hidden md:flex gap-2">
                <input
                  type="checkbox"
                  id={CheckboxId(box)}
                  name={header}
                  checked={
                    router?.query[checkboxheaders[header]] ===
                    CheckboxId(box || checked)
                  }
                  className="accent-[#002554] cursor-pointer "
                  onChange={(e) => handleChange(e, box)}
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
