"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕...", contents: "반갑...") {
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [게시글등록API요청함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    try {
      // try에 있는 내용을 시도하다가 실패하면? 다음에 있는 모든 줄을 무시하고, catch가 실행됨!
      const result = await 게시글등록API요청함수();
      console.log(result);
      console.log(result.data.createBoard.number);

      router.push(
        `/section07/07-04-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error);
    } finally {
      // 성공하든 실패하든 항상 실행됨!
    }
  };

  return <button onClick={onClickSubmit}>게시글 등록하기</button>;
}
