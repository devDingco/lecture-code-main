import { useLoginCheck } from "@/commons/hooks/08-05-use-login-check";

export default function CustomHookPage() {
  const { loginCheck } = useLoginCheck();

  const onClickSubmit = () => {
    // 1. 로그인 검사하기
    loginCheck();

    // 2. 상품 등록하기
    // ...
  };

  return <button onClick={onClickSubmit}>상품 등록하기</button>;
}
