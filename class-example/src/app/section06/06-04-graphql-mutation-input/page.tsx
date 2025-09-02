"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

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
  const [mywriterInput, setMywriterInput] = useState("");
  const [mytitleInput, setMytitleInput] = useState("");
  const [mycontentInput, setMycontentInput] = useState("");

  const [게시글등록API요청함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 게시글등록API요청함수({
      variables: {
        // variables => $와 같음
        mywriter: mywriterInput,
        mytitle: mytitleInput,
        mycontent: mycontentInput,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setMywriterInput(event.target.value);
  };

  const onChangeTitle = (event) => {
    setMytitleInput(event.target.value);
  };

  const onChangeContent = (event) => {
    setMycontentInput(event.target.value);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContent} />
      <br />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
