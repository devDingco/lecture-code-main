"use client";

import { useState } from "react";
import ChildPage from "../02-child/page";

export default function ParentPage() {
  console.log("부모가 리렌더 되었습니다.");

  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={onClickCountUp}>카운트 증가</button>
      <div>===================</div>
      <h1>여기 위쪽은 부모 컴포넌트 입니다!!!</h1>
      <div>===================</div>

      <ChildPage count={count} />
    </div>
  );
}
