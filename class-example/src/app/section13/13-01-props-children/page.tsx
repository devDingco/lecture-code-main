"use client";

import Box2 from "@/components/13-01-props-children";

export default function PropsPage() {
  // 1. children 1번째 방식
  //   return (
  //     <>
  //       <div>========= 위쪽은 페이지 영역 =======</div>
  //       <Box2
  //         // 쏙 들어가기, 땡겨오기!
  //         children={
  //           <div>
  //             <input type="text" />
  //             <br />
  //             <button>클릭해주세요!</button>
  //           </div>
  //         }
  //       />
  //       <div>========= 아래쪽은 페이지 영역 =======</div>
  //     </>
  //   );

  //
  //
  // 2. children 2번째 방식
  return (
    <>
      <div>========= 위쪽은 페이지 영역 =======</div>
      {/* 쏙 들어가기! 땡겨오기! */}
      <Box2>
        <div>
          <input type="text" />
          <br />
          <button>클릭해주세요!</button>
        </div>
      </Box2>
      <div>========= 아래쪽은 페이지 영역 =======</div>
    </>
  );
}
