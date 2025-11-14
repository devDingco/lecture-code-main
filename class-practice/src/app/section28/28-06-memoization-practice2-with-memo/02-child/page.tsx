"use client";

import { Checkbox } from "antd";
import { memo } from "react";

function Row({ isChecked, num, onClickCheckItem }) {
  console.log("리렌더");

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <div>
        <Checkbox onClick={onClickCheckItem(num)} checked={isChecked} />
      </div>
      {new Array(80).fill("데이터").map((el) => (
        <div style={{ width: "200px", flexShrink: 0 }}>{el}</div>
      ))}
    </div>
  );
}

export default memo(Row);
