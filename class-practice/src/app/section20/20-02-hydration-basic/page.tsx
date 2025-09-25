"use client";

import { useEffect } from "react";

export default function HydrationBasePage() {
  //   alert("반가워요!!");
  //   localStorage.getItem("aaa");
  //   console.log("안녕하세요");

  // 프리렌더링예시1: process.browser 방법
  // if (process.browser) {
  //   console.log("나는 지금 브라우저다!!!");
  //   alert("반가워요!!");
  //   localStorage.getItem("aaa");
  // } else {
  //   console.log("나는 지금 프론트엔드 서버다!!!");
  // }

  //   프리렌더링예시2: typeof window 방법
  //   if (typeof window !== "undefined") {
  //     console.log("나는 지금 브라우저다!!!");
  //     alert("반가워요!!");
  //     localStorage.getItem("aaa");
  //   } else {
  //     console.log("나는 지금 프론트엔드 서버다!!!");
  //   }

  // 프리렌더링무시: useEffect 방법
  useEffect(() => {
    console.log("나는 지금 브라우저다!!!");
    alert("반가워요!!");
    localStorage.getItem("aaa");
  }, []);

  return <></>;
}
