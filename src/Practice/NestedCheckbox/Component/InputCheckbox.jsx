import React, { useContext, useEffect, useRef } from "react";
import MainContext from "../context/MainContext";

export default function InputCheckbox({ data, selectedIndex }) {
  const { handleChecked, handleOptiomizeData } = useContext(MainContext);
  const checkBoxRef = useRef(null);
  const handleChange = (e) => {
    handleChecked(data, e.target.checked);
    // handleOptiomizeData(selectedIndex, e.target.checked);
  };
  useEffect(() => {
    if (data?.status === -1) {
      checkBoxRef.current.indeterminate = true;
    } else {
      checkBoxRef.current.indeterminate = false;
    }
  }, [data?.status]);
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        checked={data?.status === 1 ? true : false}
        ref={checkBoxRef}
        onChange={handleChange}
      />
      <label>{data?.title}</label>
    </div>
  );
}
