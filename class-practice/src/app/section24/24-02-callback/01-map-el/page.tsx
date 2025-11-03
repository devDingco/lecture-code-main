"use client";

export default function MapElPage() {
  // 1. 기본방법
  ["철수", "영희", "훈이"].map((el, index) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  console.log("=================================");

  // 2. 매개변수 변경 방법
  ["철수", "영희", "훈이"].map((asdfasdfasd, qwerqweerqwer) => {
    console.log("asdfasdfasd: ", asdfasdfasd);
    console.log("qwerqweerqwer: ", qwerqweerqwer);
  });

  console.log("=================================");

  // 3. 함수선언식 방법
  ["철수", "영희", "훈이"].map(function (asdfasdfasd, qwerqweerqwer) {
    console.log("asdfasdfasd: ", asdfasdfasd);
    console.log("qwerqweerqwer: ", qwerqweerqwer);
  });

  console.log("=================================");

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].map((index, el) => {
    console.log("index: ", index);
    console.log("el: ", el);
  });

  return <></>;
}
