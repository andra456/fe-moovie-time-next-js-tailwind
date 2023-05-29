import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
export default function CheckBoxItems({ name, text, value, size }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div onClick={() => setIsChecked(!isChecked)}>
      <div className="relative flex justify-between items-center py-2 gap-x-3">
        <div className="text-sm leading-6">
          <label htmlFor={name} className="font-medium ">
            {text}
          </label>
        </div>
        <div className={`flex h-6 items-center `}>
          <input
            name={name}
            type="checkbox"
            checked={isChecked}
            value={value}
            className="h-0 w-0 invisible"
          />
          <div
            className={`checkbox flex items-center justify-center ${
              !isChecked ? "bg-white/50" : "bg-[#E74C3C]"
            } rounded border w-${size} h-${size}`}
          >
            <BsCheck className={`${isChecked ? "opacity-100" : "opacity-0"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
