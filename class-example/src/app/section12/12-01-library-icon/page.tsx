"use client";

import { DeleteOutlined } from "@ant-design/icons";

export default function LibraryIconPage() {
  const onClickDelete = (event) => {
    // 대부분의 아이콘 라이브러리들은 <span />을 부모로 하여,
    // 내부에 아이콘 이미지가 자식으로 올라오기 때문에,
    // 이미지 클릭시, 자식의 클릭이 이벤트가 부모로 전파가 되어 부모(<span />)의 onClick이 실행됨!
    alert(`${event.target.id}를 정말로 삭제합니까?`); // 비어있음 => event.target: <svg />
    alert(`${event.currentTarget.id}를 정말로 삭제합니까?`); // ID있음 => event.currentTarget: <span />
  };

  return <DeleteOutlined id="삭제할게시글ID" onClick={onClickDelete} />;
}
