"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ISchema, schema } from "./schema";

export default function ReactHookFormAfterPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: ISchema) => {
    console.log(data);
  };

  console.log("리렌더링 되나요?");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br />
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <br />
      <button disabled={!formState.isValid}>게시글 등록하기</button>
    </form>
  );
}
