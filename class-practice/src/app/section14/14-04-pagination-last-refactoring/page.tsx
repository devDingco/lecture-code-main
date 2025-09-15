"use client";

import List from "@/components/14-04-pagination-last-refactoring/list";
import Pagination from "@/components/14-04-pagination-last-refactoring/pagination";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./queries";

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  return (
    <div>
      <List data={data.fetchBoards} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
