"use client";

import { useCallback, useState } from "react";
import Row from "../02-child/page";

export default function MemoizationPraticePage() {
  const [checkList, setCheckList] = useState([]);

  // 이슈사항) 리렌더시 매번 새로운 함수가 만들어지는 이슈 => 이 함수를 전달받는 자식에 memo가 걸려있는 경우, memo가 무시됨
  // const onClickCheckItem = (num) => () => {
  //   console.log("클릭했어요");
  //   const isChecked = checkList.includes(num);

  //   if (isChecked) {
  //     setCheckList([...checkList.filter((el) => el !== num)]);
  //   } else {
  //     setCheckList([...checkList, num]);
  //   }
  // };

  // 해결방법) 리렌더시 새로운 함수를 만들지 않고, 기존의 함수를 재사용하기 => 이 함수를 전달받는 자식에 memo가 걸려있는 경우, 영향을 주지 않음
  const onClickCheckItem = useCallback(
    (num) => () => {
      setCheckList((prev) => {
        const isChecked = prev.includes(num);

        if (isChecked) {
          return [...prev.filter((el) => el !== num)];
        } else {
          return [...prev, num];
        }
      });
    },
    []
  );

  return (
    <div style={{ height: "500px", overflowY: "scroll" }}>
      {new Array(1000).fill(1).map((el, index) => (
        <Row
          num={index + 1}
          isChecked={checkList.includes(index + 1)}
          onClickCheckItem={onClickCheckItem}
          // onClickCheckItem={() => { ... }} 와 같이 함수를 만들어서 바인딩이 하는 방식 => 매번 새 함수가 만들어져서 memo가 무시됨
        />
      ))}
    </div>
  );
}
