"use client";

import useBoardsWriteAdvanced from "./hook";
import { IBoardsWriteAdvancedProps } from "./types";

export default function BoardsWriteAdvanced(props: IBoardsWriteAdvancedProps) {
  const {
    작성자변경하는기능,
    제목변경하는기능,
    onChangeContent,
    onClickUpdate,
    onClickSubmit,
  } = useBoardsWriteAdvanced();

  return (
    <>
      작성자:
      <input
        type="text"
        onChange={작성자변경하는기능}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:
      <input
        type="text"
        onChange={제목변경하는기능}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:
      <input
        type="text"
        onChange={onChangeContent}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        게시글 {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
