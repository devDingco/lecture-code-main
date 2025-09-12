"use client";

import Box from "@/components/13-01-props";

export default function PropsPage() {
  // 1. props로 값 넘기기
  //   return (
  //     <>
  //       <div>========= 위쪽은 페이지 영역 =======</div>
  //       <Box apple={3} />
  //       <div>========= 아래쪽은 페이지 영역 =======</div>
  //     </>
  //   );

  // 2. props로 JSX 넘기기
  //   return (
  //     <>
  //       <div>========= 위쪽은 페이지 영역 =======</div>
  //       <Box
  //         // 쏙 들어가기, 땡겨오기!
  //         apple={
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

  // 3. children 1번째 방식
  //   return (
  //     <>
  //       <div>========= 위쪽은 페이지 영역 =======</div>
  //       <Box
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

  // 4. children 2번째 방식
  return (
    <>
      <div>========= 위쪽은 페이지 영역 =======</div>
      {/* 쏙 들어가기! 땡겨오기! */}
      <Box>
        <div>
          <input type="text" />
          <br />
          <button>클릭해주세요!</button>
        </div>
      </Box>
      <div>========= 아래쪽은 페이지 영역 =======</div>
    </>
  );
}
