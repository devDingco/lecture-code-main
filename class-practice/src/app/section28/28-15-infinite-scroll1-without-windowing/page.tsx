"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const [hasMore, setHasMore] = useState(true);

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards?.length) {
          setHasMore(false);
          return;
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div>
      {/* 페이지 이탈시보다 재진입시 훨씬 느림(div 삽입 이슈) => performance 녹화해서 확인하기 */}
      <Link href={"/section28/28-15-infinite-scroll-without-windowing-moved"}>
        페이지 이동하기
      </Link>
      <InfiniteScroll
        next={onNext}
        hasMore={hasMore}
        loader={<div>로딩중입니다</div>}
        dataLength={data?.fetchBoards.length ?? 0}
      >
        {data?.fetchBoards.map((el) =>
          new Array(30).fill(1).map((_, index) => (
            <div key={el._id}>
              <span>{el.title}</span>
              <span>{el.writer}</span>
            </div>
          ))
        )}
      </InfiniteScroll>
    </div>
  );
}
