"use client";

export default function RestGetPage() {
  const onClickAsync = () => {
    const result = fetch("http://main-example.codebootcamp.co.kr/profile/철수");
    console.log(result); // Promise
  };

  // async function AAA(){
  //     await
  // }
  const onClickSync = async () => {
    const result = await fetch(
      "http://main-example.codebootcamp.co.kr/profile/철수"
    );
    const data = await result.json();
    console.log(data); // 프로필 전체 결과 { ... }
    console.log(data.name); // 철수
  };

  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <br />
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
    </>
  );
}
