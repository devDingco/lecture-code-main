"use client";

import { useState } from "react";

export default function CounterPage() {
  const 나의변수 = useState(0);

  const onClickCountUp = () => {
    나의변수[1](나의변수[0] + 1);
  };

  return (
    <div>
      <div>{나의변수[0]}</div>
      <button onClick={onClickCountUp}>카운트증가</button>
    </div>
  );
}
