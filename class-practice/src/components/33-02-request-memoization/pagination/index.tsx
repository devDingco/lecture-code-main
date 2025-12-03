"use client";

import { gql, useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

export default function Pagination() {
  console.log("<Pagination /> 리렌더됨");

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const { data } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { search },
  });

  return (
    <div>
      <div>총 페이지 수: {data?.fetchBoardsCount} 페이지</div>
      {new Array(10).fill("철수").map((_, index) => (
        <button key={index + 1} id={String(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
