"use client";

export default function Home() {
  const onClickScraping1 = async () => {
    const result = await fetch("https://www.naver.com"); // CORS 에러
    const data = await result.text();
    console.log(data);
  };

  const onClickScraping2 = async () => {
    // 1. 내가 직접 만든 프록시API - 끝단 최종 API
    // const result = await fetch("http://localhost:3000/mynaver1");
    // const data = await result.text();
    // console.log(data);

    // 2. 내가 직접 만든 프록시API - 중간 middleware단 가로채기
    const result = await fetch("http://localhost:3000/mynaver2");
    const data = await result.text();
    console.log(data);

    // 3. 내가 직접 만든 프록시API - 앞단 next.config.mjs 설정으로 자동구현
    // const result = await fetch("http://localhost:3000/mynaver3");
    // const data = await result.text();
    // console.log(data);
  };

  return (
    <>
      <button onClick={onClickScraping1}>스크래핑하기(프록시없이)</button>
      <br />
      <button onClick={onClickScraping2}>스크래핑하기(프록시경유)</button>
    </>
  );
}
