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
  //   // event.currentTarget; => 내 클릭이 버블링되어 부모꺼 onClick 실행됐을때, 실행된 그 태그
  //   alert(`이 글의 작성자는 ${event.currentTarget.id} 입니다.`);
  // };

  const onClickLike = (event) => {
    event.stopPropagation(); // 전파를 막는 것이지, 기본 기능을 막는 것은 아님!
    // event.preventDefault(); // 기본 기능을 막음

    alert("좋아요가 +1 올랐습니다.");
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
              <span onClick={onClickLike}>좋아요</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
