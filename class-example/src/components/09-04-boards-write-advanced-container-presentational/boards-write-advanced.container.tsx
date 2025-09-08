"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import BoardsWriteAdvancedUI from "./boards-write-advanced.presenter";
import {
  FETCH_BOARD,
  나의그래프큐엘셋팅,
  나의그래프큐엘수정셋팅,
} from "./boards-write-advanced.queries";

export default function BoardsWriteAdvanced(props) {
  const 내주소변수 = useParams();
  const router = useRouter();

  const [mywriterInput, setMywriterInput] = useState("");
  const [mytitleInput, setMytitleInput] = useState("");
  const [mycontentInput, setMycontentInput] = useState("");

  const [게시글등록API요청함수] = useMutation(나의그래프큐엘셋팅);
  const [게시글수정API요청함수] = useMutation(나의그래프큐엘수정셋팅);

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
    router.push(
      `/section09/09-03-boards-advanced/${result.data.createBoard.number}`
    );
  };

  // 컴포넌트 안에서 동적라우딩의 [변수]를 사용하는 경우에는 주의할 것.
  // 임포트 당한 페이지의 주소에 [변수]가 있는 경우만 가능하기 때문에.
  // console.log(내주소변수.number)
  // const 나의변수 = 내주소변수.number
  const onClickUpdate = async () => {
    const myvariables = {
      mynumber: Number(내주소변수.number),
    };
    if (mywriterInput !== "") myvariables.mywriter = mywriterInput;
    if (mytitleInput !== "") myvariables.mytitle = mytitleInput;
    if (mycontentInput !== "") myvariables.mycontent = mycontentInput;

    const result = await 게시글수정API요청함수({
      // variables: {
      //   // variables => $와 같음
      //   mynumber: Number(내주소변수.number),
      //   mywriter: mywriterInput,
      //   mytitle: mytitleInput,
      //   mycontent: mycontentInput,
      // },
      variables: myvariables,
      refetchQueries: [
        { query: FETCH_BOARD, variables: { qqq: Number(내주소변수.number) } },
      ],
    });
    console.log(result);
    router.push(
      `/section09/09-03-boards-advanced/${result.data.updateBoard.number}`
    );
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
      <div>이 텍스트는 컨테이너 컴포넌트의 것 입니다. 하지만 안 사용할 뿐!</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것 입니다. 하지만 안 사용할 뿐!</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것 입니다. 하지만 안 사용할 뿐!</div>
      <BoardsWriteAdvancedUI
        작성자변경하는기능={onChangeWriter}
        제목변경하는기능={onChangeTitle}
        onChangeContent={onChangeContent} // 실무 방식 => 동일한 이름 사용
        onClickUpdate={onClickUpdate}
        onClickSubmit={onClickSubmit}
        data={props.data}
        isEdit={props.isEdit}
      />
      <div>이 텍스트는 컨테이너 컴포넌트의 것 입니다. 하지만 안 사용할 뿐!</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것 입니다. 하지만 안 사용할 뿐!</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것 입니다. 하지만 안 사용할 뿐!</div>
    </>
  );
}
