"use client";

import { memo } from "react";

function ChildPage() {
  console.log("자식이 리렌더 되었습니다.");

  return (
    <div>
      <div>===================</div>
      <h1>여기는 자식 컴포넌트 입니다!!!</h1>
      <div>===================</div>
    </div>
  );
}

export default memo(ChildPage);
