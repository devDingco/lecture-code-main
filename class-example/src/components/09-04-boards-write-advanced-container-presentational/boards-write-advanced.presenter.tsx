"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function BoardsWriteAdvancedUI(props) {
  // 여기에 기능 작성하는 것도 가능함 => 하지만 안 할 뿐!
  // ...
  // ...

  return (
    <>
      작성자:
      <input
        type="text"
        onChange={props.작성자변경하는기능}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:
      <input
        type="text"
        onChange={props.제목변경하는기능}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:
      <input
        type="text"
        onChange={props.onChangeContent}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        게시글 {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
