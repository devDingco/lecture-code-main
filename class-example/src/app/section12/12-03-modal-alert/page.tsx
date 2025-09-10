"use client";

import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccess = () => {
    Modal.success({ content: "게시글 등록에 성공했습니다!!" });
  };

  const onClickError = () => {
    Modal.error({ content: "비밀번호가 틀렸습니다!!" });
  };

  return (
    <>
      <button onClick={onClickSuccess}>성공한 경우</button>
      <br />
      <button onClick={onClickError}>실패한 경우</button>
    </>
  );
}
