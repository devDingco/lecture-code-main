import { CreateBoardInput } from "@/commons/graphql/graphql";
import z from "zod";

// 타입 O => 에디터 검사(빨간줄): 컴파일시점
export interface ISchema extends Pick<CreateBoardInput, "title" | "contents"> {
  // 1 .hobby?: string // 추가도 가능
  //
  // 2. 가급적이면 Omit보단 Pick을 쓰자! (Omit은 위험!!)
}

// 타입 X => 브라우저 검사(validation): 런타임시점
export const schema = z.object({
  title: z.string().min(1, { message: "제목을 입력해 주세요." }),
  contents: z.string().min(1, { message: "내용을 입력해 주세요." }),

  // hobby: z.string().optional(),
  // email: z.string().email("이메일 형식에 적합하지 않습니다."),
  // password: z
  //   .string()
  //   .min(4, { message: "비밀번호는 최소 4자리 이상 입력해 주세요." })
  //   .max(15, { message: "비밀번호는 최대 15자리로 입력해 주세요." }),
  // phone: z
  //   .string()
  //   .regex(/\d{3}-\d{3,4}-\d{4}/, {
  //     message: "휴대폰 형식에 알맞지 않습니다.",
  //   }),
});
