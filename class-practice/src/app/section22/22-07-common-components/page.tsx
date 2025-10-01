"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ISchema, schema } from "./schema";
import MyButton from "@/commons/components/22-07-button";
import MyInput from "@/commons/components/22-07-input";

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
    // <FormProvider register={register} formState={formState}>
    <form onSubmit={handleSubmit(onClickSubmit)}>
      제목: <MyInput type="text" register={register} name="title" />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br />
      내용: <MyInput type="text" register={register} name="contents" />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <br />
      <MyButton formState={formState}>게시글 등록하기</MyButton>
    </form>
    // </FormProvider>
  );
}
