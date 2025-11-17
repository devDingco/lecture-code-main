"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    # 1. 캐시와 동일할 때 => 캐시에서 가져옴
    fetchBoards {
      _id
      writer
      title
      contents
    }

    # 2. 캐시보다 적을 때 => 캐시에서 가져옴
    fetchBoards {
      _id
      writer
      title
    }

    # 3. 캐시보다 많을 때 => 전체 재요청
    fetchBoards {
      _id
      writer
      title
      contents
      likeCount
    }
  }
`;

export default function PaginationPage() {
  // 1. 캐시에서 가져오고 싶다면? cache-first
  const { data } = useQuery(FETCH_BOARDS);

  // 2. 매번 신선해야 한다면? network-only
  //   const { data } = useQuery(FETCH_BOARDS, {
  //     fetchPolicy: "network-only",
  //   });

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
