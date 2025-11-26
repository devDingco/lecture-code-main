"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // ReactQuill 개발자가 만든 onChange => 따라서, event 안들어옴
  const onChangeContent = (value) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값 넣어주는 방법
    setValue("contents", value);

    // 값만 넣지 말고, 변경을 감지해서 검증도 하자!
    trigger("contents");
  };

  const onSubmit = async (data) => {
    console.log(data);

    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...data,
          // writer: data.writer,
          // password: data.password,
          // title: data.title,
          // contents: data.contents,
        },
      },
    });

    // code-spliting (코드 스플리팅)
    const { Modal } = await import("antd");
    Modal.success({ content: "게시글 등록에 성공하였습니다!!" });

    const boardId = result.data.createBoard._id;
    router.push(`/section31/31-03-web-editor-hook-form-xss/${boardId}`);
  };

  // 백그라운드 임포트
  // useEffect(() => {
  //   const { Modal } = await import("antd");
  // }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContent} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
