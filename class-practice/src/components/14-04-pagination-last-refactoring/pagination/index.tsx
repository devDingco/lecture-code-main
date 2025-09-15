"use client";

import { useState } from "react";
import { usePagination } from "./hook";

export default function Pagination(props) {
  const { startPage, onClickPage, onClickPrevPage, onClickNextPage } =
    usePagination(props);

  return (
    <div>
      <button onClick={onClickPrevPage}>이전페이지</button>
      {new Array(10).fill("철수").map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <button
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
            >
              {index + startPage}
            </button>
          )
      )}
      <button onClick={onClickNextPage}>다음페이지</button>
    </div>
  );
}
