"use client";

import { gql, useMutation } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  # 변수의 타입 적는 곳
  mutation createBoard(
    $mywriter: String
    $mytitle: String
    $mycontent: String
  ) {
    # 실제 우리가 전달할 변수 적는 곳
    createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [게시글등록API요청함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 게시글등록API요청함수({
      variables: {
        // variables => $와 같음
        mywriter: "훈이",
        mytitle: "안녕하세요",
        mycontent: "반갑습니다!",
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
