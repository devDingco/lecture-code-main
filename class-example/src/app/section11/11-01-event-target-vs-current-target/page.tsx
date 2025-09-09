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

  const onClickFunction = (event) => {
    // event.target; => 내가 클릭한 태그
    // event.currentTarget; => 현재 실행된 onClick의 태그.
    alert(`내가 클릭한 것: ${event.target.id}`);
    alert(`지금 onClick 실행중인 태그: ${event.currentTarget.id}`);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => {
        return (
          <div key={el.number} id="한줄전체">
            <span>
              <input type="checkbox" />
            </span>
            <span id="번호">{el.number}</span>
            <span id="제목" onClick={onClickFunction}>
              {el.title}
            </span>
            <span id="작성자">{el.writer}</span>
          </div>
        );
      })}
    </div>
  );
}
