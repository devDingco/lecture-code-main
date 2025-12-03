"use client";

import { gql, useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

export default function Stat() {
  console.log("<Stat /> 리렌더됨");

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // request-memoization: fetchBoardsCount를 <Pagination /> 컴포넌트에서도 요청하지만, @apollo/client에서 중복 요청을 하나로 합쳐줌
  const { data } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { search },
  });

  return (
    <div>
      <div>====================================</div>
      <div>여기는 통계만 모아서 보여주는 영역입니다.</div>
      <div>검색어: {search ?? "없음"}</div>
      <div>총 페이지 수: {data?.fetchBoardsCount} 페이지</div>
      <div>검색일: 2020-10-10</div>
      <div>====================================</div>
    </div>
  );
}
