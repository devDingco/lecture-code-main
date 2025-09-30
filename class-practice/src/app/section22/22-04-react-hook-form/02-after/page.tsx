"use client";

import { useForm } from "react-hook-form";

export default function ReactHookFormAfterPage() {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data) => {
    console.log(data);
  };

  console.log("리렌더링 되나요?");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <input type="text" {...register("content")} />
      <br />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <br />
      <button>게시글 등록하기</button>
    </form>
  );
}
