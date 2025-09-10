"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleComplete = (data) => {
    console.log(data);
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기!!</button>

      {/* 모달 종료 방식 - 1. 숨기기 방식(ex, 이력서 등) */}
      {/* <Modal
        title="모달 제목"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 삭제 후 재생성 방식(ex, 신용카드, 비밀번호 등) */}
      {isModalOpen && (
        <Modal
          title="모달 제목"
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default App;
