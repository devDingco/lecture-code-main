"use client";

// 1. props 기초
// export default function Box({ apple }) {
//   return (
//     <>
//       <div>====== 여기 아래는 컴포넌트 영역 ======= </div>
//       <div>{apple}</div>
//       <div>====== 여기 위는 컴포넌트 영역 ======= </div>
//     </>
//   );
// }

// 2. children 방식
export default function Box({ children }) {
  return (
    <>
      <div>====== 여기 아래는 컴포넌트 영역 ======= </div>
      <div>{children}</div>
      <div>====== 여기 위는 컴포넌트 영역 ======= </div>
    </>
  );
}
