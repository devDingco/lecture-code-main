"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoardsDeletePage() {
  const { data } = useQuery(FETCH_BOARDS);

  // const onClickParent = (event) => {
  //   // event.target; => 내가 클릭한 태그
  //   // event.currentTarget; => 현재 실행된 onClick의 태그
  //   alert(`내가 클릭한 것: ${event.target.id}`);
  //   alert(`이동할 게시글ID: ${event.currentTarget.id}`);
  // };

  const onClickDelete = (event) => {
    event.stopPropagation(); // 전파를 막는 것이지, 기본 기능을 막는 것은 아님!
    // event.preventDefault(); // 기본 기능을 막음

    alert("게시글이 삭제되었습니다.");
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => {
        return (
          <a key={el.number} href="https://naver.com">
            <div>
              <span>
                <input type="checkbox" />
              </span>
              <span>{el.number}</span>
              <span>{el.title}</span>
              <span>{el.writer}</span>
              <span>
                <button onClick={onClickDelete}>삭제</button>
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
