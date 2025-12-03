// 페이지는 가급적 RSC로 시작하자! (안그러면 하위 모두 RCC가 되기 때문)

import Rcc from "@/components/03-rcc-rsc-composition/rcc";
import Rsc from "@/components/03-rcc-rsc-composition/rsc";

export default function RccRscCompositionPage() {
  console.log("페이지 컴포넌트가 렌더링되었습니다.");

  return (
    <>
      <div>저는 페이지 컴포넌트입니다.</div>
      <Rcc>
        <Rsc />
      </Rcc>
    </>
  );
}
