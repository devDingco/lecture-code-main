import { FetchBoardQuery } from "@/commons/graphql/graphql";

export interface IBoardsWriteAdvancedProps {
  data?: FetchBoardQuery;
  isEdit: boolean;
}

export interface IMyvariables {
  mynumber: number;
  mywriter?: string;
  mytitle?: string;
  mycontent?: string;
}
