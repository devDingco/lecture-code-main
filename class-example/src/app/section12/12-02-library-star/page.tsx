"use client";

import React, { useState } from "react";
import { Rate } from "antd";

const App: React.FC = () => {
  const [value, setValue] = useState(3);

  // === 1단계 방식 ===
  const 함수 = (value: number) => {
    setValue(value); // 함수에 들어오는 변수 value를 사용(스코프)
  };

  return (
    <>
      {/*  */}
      {/*  */}
      {/* === 1단계 방식 === */}
      {/* antd 개발자가 만든 가짜 onChange */}
      <Rate onChange={함수} value={value} />
      <span>점수: {value}점</span>

      {/*  */}
      {/*  */}
      {/* === 2단계 방식 === */}
      {/* 함수를 따로 분리하지 않아도 됨 */}
      <Rate
        onChange={(value: number) => {
          setValue(value);
        }}
        value={value}
      />
      <span>점수: {value}점</span>

      {/*  */}
      {/*  */}
      {/* === 3단계 방식 === */}
      {/* return은 종료를 의미하므로, 현재 로직에서는 있으나 없으나 상관 없음  */}
      <Rate
        onChange={(value: number) => {
          return setValue(value);
        }}
        value={value}
      />
      <span>점수: {value}점</span>

      {/*  */}
      {/*  */}
      {/* === 4단계 방식 === */}
      {/* 중괄호{}와 return 사이에 아무것도 없으면? 소괄호()로 변경 가능. 상황에 따라 소괄호() 생략 가능 */}
      <Rate onChange={(value) => setValue(value)} value={value} />
      <span>점수: {value}점</span>

      {/*  */}
      {/*  */}
      {/* === 5단계 방식 === */}
      {/* setValue뿐만 아니라, 어떤 함수던 상관없이 들어오는 변수와 들어가는 변수가 동일하면 생략 가능 */}
      {/* ex1) onChange={(value) => setValue(value)} === onChange{setValue} */}
      {/* ex2) onClick={(event) => myFunc(event)} === onClick{myFunc} */}
      <Rate onChange={setValue} value={value} />
      <span>점수: {value}점</span>
    </>
  );
};

export default App;
