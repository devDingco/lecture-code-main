"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ISchema, schema } from "./schema";
import MyButton from "@/commons/components/22-08-button-generic";
import MyInput from "@/commons/components/22-08-input-generic";

export default function ReactHookFormAfterPage() {
  const { register, handleSubmit, formState } = useForm<ISchema>({
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
      {/* 제목(함수): {MyInput<ISchema>({ type: "text", register: register, name: "title" })} */}
      제목(컴포넌트):
      <MyInput<ISchema> type="text" register={register} name="title" />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br />
      {/* 내용(함수):
      {MyInput<ISchema>({ type: "text", register: register, name: "contents" })} */}
      내용(컴포넌트):
      <MyInput<ISchema> type="text" register={register} name="contents" />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <br />
      <MyButton formState={formState}>게시글 등록하기</MyButton>
    </form>
    // </FormProvider>
  );
}
