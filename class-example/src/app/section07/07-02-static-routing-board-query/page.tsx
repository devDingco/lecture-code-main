"use client";

import { useRouter } from "next/navigation";

export default function StaticRoutingBoardPage() {
  const router = useRouter();

  const onClickSubmit1 = () => {
    // 1. 게시글 등록하기
    // ...

    alert("게시글 등록에 성공했어요!");
    router.push("/section07/07-02-static-routing-board-query-moved/568");
  };

  const onClickSubmit2 = () => {
    router.push("/section07/07-02-static-routing-board-query-moved/2");
  };

  const onClickSubmit3 = () => {
    router.push("/section07/07-02-static-routing-board-query-moved/3");
  };

  return (
    <>
      <button onClick={onClickSubmit1}>568번 게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit2}>2번 게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit3}>3번 게시글 등록하기</button>
      <br />
    </>
  );
}
