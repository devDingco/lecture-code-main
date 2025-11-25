"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  // ReactQuill 개발자가 만든 onChange => 따라서, event 안들어옴
  const onChangeContent = (value) => {
    console.log(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // code-spliting (코드 스플리팅)
    const { Modal } = await import("antd");
    Modal.success({ content: "게시글 등록에 성공하였습니다!!" });
  };

  // 백그라운드 임포트
  // useEffect(() => {
  //   const { Modal } = await import("antd");
  // }, []);

  return (
    <form onSubmit={onSubmit}>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContent} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
