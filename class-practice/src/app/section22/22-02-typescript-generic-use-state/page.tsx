// 제공자
function useState<S>(초기값: S): [S, (변경값: S) => void] {
  const state = 초기값;

  const setState = (변경값: S) => {
    console.log(`현재 카운트를 ${변경값}으로 바꾸겠습니다!!`);
  };

  return [state, setState];
}

//
//
// 사용자
export default function TypescriptGenericUseStatePage() {
  const [count, setCount] = useState<number>(10);
  setCount("철수"); // number만 가능

  const [writer, setWriter] = useState("철수");
  setWriter(50); // string만 가능

  const [isActive, setIsActive] = useState(true);
  setIsActive(50); // boolean만 가능

  return <></>;
}
