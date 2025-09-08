"use client";

import BoardsWriteAdvanced from "@/components/09-05-boards-write-advanced-hooks";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($qqq: Int) {
    fetchBoard(number: $qqq) {
      number
      writer
      title
      contents
    }
  }
`;

export default function BoardComponentEditPage() {
  const 내주소변수 = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      qqq: Number(내주소변수.number),
    },
  });

  return (
    // <>
    //   <h1>수정페이지</h1>
    //   제목: <input type="text" />
    //   내용: <input type="text" />
    //   <button>수정하기</button>
    // </>
    <>
      <div>
        이 텍스트는 페이지 컴포넌트의 것 입니다. 서로 다른 컴포넌트들을 조립할
        때 사용함
      </div>
      <div>
        이 텍스트는 페이지 컴포넌트의 것 입니다. 서로 다른 컴포넌트들을 조립할
        때 사용함
      </div>
      <div>
        이 텍스트는 페이지 컴포넌트의 것 입니다. 서로 다른 컴포넌트들을 조립할
        때 사용함
      </div>
      <BoardsWriteAdvanced isEdit={true} data={data} />
      <div>
        이 텍스트는 페이지 컴포넌트의 것 입니다. 서로 다른 컴포넌트들을 조립할
        때 사용함
      </div>
      <div>
        이 텍스트는 페이지 컴포넌트의 것 입니다. 서로 다른 컴포넌트들을 조립할
        때 사용함
      </div>
      <div>
        이 텍스트는 페이지 컴포넌트의 것 입니다. 서로 다른 컴포넌트들을 조립할
        때 사용함
      </div>
    </>
  );
}
