"use client";

import Box1 from "@/components/13-01-props";

export default function PropsPage() {
  // 1. props로 값 넘기기
  //   return (
  //     <>
  //       <div>========= 위쪽은 페이지 영역 =======</div>
  //       <Box1 apple={3} />
  //       <div>========= 아래쪽은 페이지 영역 =======</div>
  //     </>
  //   );

  //
  //
  // 2. props로 JSX 넘기기
  return (
    <>
      <div>========= 위쪽은 페이지 영역 =======</div>
      <Box1
        // 쏙 들어가기, 땡겨오기!
        apple={
          <div>
            <input type="text" />
            <br />
            <button>클릭해주세요!</button>
          </div>
        }
      />
      <div>========= 아래쪽은 페이지 영역 =======</div>
    </>
  );
}
