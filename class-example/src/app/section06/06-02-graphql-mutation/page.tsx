"use client";

import { gql, useMutation } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "333", title: "안녕...", contents: "반갑...") {
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [게시글등록API요청함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 게시글등록API요청함수();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
