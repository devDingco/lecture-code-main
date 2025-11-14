"use client";

import { useState } from "react";
import Row from "../02-child/page";

export default function MemoizationPraticePage() {
  const [checkList, setCheckList] = useState([]);

  const onClickCheckItem = (num) => () => {
    console.log("클릭했어요");
    const isChecked = checkList.includes(num);

    if (isChecked) {
      setCheckList([...checkList.filter((el) => el !== num)]);
    } else {
      setCheckList([...checkList, num]);
    }
  };

  return (
    <div style={{ height: "500px", overflowY: "scroll" }}>
      {new Array(1000).fill(1).map((el, index) => (
        <Row
          num={index + 1}
          onClickCheckItem={onClickCheckItem}
          isChecked={checkList.includes(index + 1)}
        />
      ))}
    </div>
  );
}
