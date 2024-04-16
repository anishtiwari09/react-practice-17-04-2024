import React from "react";
import InputCheckbox from "./InputCheckbox";

export default function AllItem({ data, selectedIndex }) {
  return (
    <div className="flex flex-col gap-4 ">
      {data?.map((item, index) => (
        <React.Fragment key={item.id}>
          <InputCheckbox
            data={item}
            selectedIndex={[...selectedIndex, index]}
          />
          {item?.children.length ? (
            <div className="pl-4">
              <AllItem
                data={item?.children}
                selectedIndex={[...selectedIndex, index]}
              />
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
