import React, { useState } from "react";
import MainContext from "./context/MainContext";
import AllItem from "./Component/AllItem";
const checkedChildren = (data, status) => {
  data.status = status;
  for (let item of data?.children) {
    checkedChildren(item, status);
  }
};

const checkForParentStatus = (data) => {
  let count = 0;
  for (let item of data) {
    if (item.children.length) {
      let status = checkForParentStatus(item?.children);
      item.status = status;
    }
    if (item.status) {
      count++;
    }
  }
  return count === 0 ? 0 : count === data.length ? 1 : -1;
};
const getObject = (state, indexArray, index) => {
  if (indexArray.length === index) {
    return state;
  }
  let selectedIndex = indexArray[index];
  if (Array.isArray(state)) {
    return getObject(state[selectedIndex], indexArray, index + 1);
  }

  return getObject(state.children[selectedIndex], indexArray, index + 1);
};
export default function NestedCheckbox() {
  const [state, setState] = useState([
    {
      id: 1,
      title: "Item1",
      status: 0,
      children: [
        {
          id: 1,
          title: "Sub Item1",
          status: 0,
          children: [],
        },
        {
          id: 2,
          title: "Sub Item2",
          status: 0,
          children: [],
        },
        {
          id: 3,
          title: "Sub Item3",
          status: 0,
          children: [],
        },
        {
          id: 4,
          title: "Sub Item4",
          status: 0,
          children: [
            {
              id: 2,
              title: "Sub Item2",
              status: 0,
              children: [],
            },
            {
              id: 3,
              title: "Sub Item3",
              status: 0,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Item2",
      status: 0,
      children: [
        {
          id: 1,
          title: "Sub Item1",
          status: 0,
          children: [],
        },
        {
          id: 2,
          title: "Sub Item2",
          status: 0,
          children: [],
        },
        {
          id: 3,
          title: "Sub Item3",
          status: 0,
          children: [],
        },
        {
          id: 4,
          title: "Sub Item4",
          status: 0,
          children: [],
        },
      ],
    },
  ]);
  const handleChecked = (data, value) => {
    checkedChildren(data, value ? 1 : 0);
    checkForParentStatus(state);
    setState([...state]);
  };
  const handleOptiomizeData = (indexArray, value) => {
    let data = getObject(state, indexArray, 0);

    checkedChildren(data, value ? 1 : 0);
    let status = checkForParentStatus(state[indexArray[0]].children);

    state[indexArray[0]].status = status;
    setState([...state]);
  };
  return (
    <MainContext.Provider
      value={{ data: state, handleChecked, handleOptiomizeData }}
    >
      <AllItem data={state} selectedIndex={[]} />
    </MainContext.Provider>
  );
}
