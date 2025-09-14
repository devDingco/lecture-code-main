"use client";

// //
// //
// // 1. [자식2] 클릭 => 자식2의 onClick이 실행됨
// export default function CurrentTargetVsEventTargetPage() {
//   const onClickFunction = (event) => {
//     // event.target; => 내가 클릭한 태그
//     // event.currentTarget; => onClick 실행중인 태그
//     alert(`내가 클릭한 태그 id: ${event.target.id}`); // 자식2
//     alert(`onClick 실행중인 태그 id: ${event.currentTarget.id}`); // 자식2
//   };

//   return (
//     <div id="부모">
//       <div id="자식1">자식1</div>
//       <div id="자식2" onClick={onClickFunction}>
//         자식2
//       </div>
//       <div id="자식3">자식3</div>
//     </div>
//   );
// }

//
//
// 2. [자식2] 클릭 => 이벤트 버블링에 의해 부모의 onClick이 실행됨
export default function CurrentTargetVsEventTargetPage() {
  const onClickFunction = (event) => {
    // event.target; => 내가 클릭한 태그
    // event.currentTarget; => onClick 실행중인 태그
    alert(`내가 클릭한 태그 id: ${event.target.id}`); // 자식2
    alert(`onClick 실행중인 태그 id: ${event.currentTarget.id}`); // 부모
  };

  return (
    <div id="부모" onClick={onClickFunction}>
      <div id="자식1">자식1</div>
      <div id="자식2">자식2</div>
      <div id="자식3">자식3</div>
    </div>
  );
}
