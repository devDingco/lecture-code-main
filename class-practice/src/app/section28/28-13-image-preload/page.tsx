"use client";

import Link from "next/link";
import { useEffect } from "react";

const qqq = [];

export default function ImagePreloadPage() {
  // 테스트 방법:
  // 1. network 탭 열기(Disabled cache 체크하지 않기)
  // 2. 페이지 접속(또는 새로고침)
  // 3. 페이지 이동시, network 탭에서 이미지 비요청 확인 => [브라우저 인터넷 사용 기록 삭제] 탭에서 [캐시된 이미지 및 파일] 용량 증가 확인 가능
  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    img.onload = () => {
      qqq.push(img); // 메모리 push하지 않으면, 브라우저에서 간헐적으로만 캐시됨
    };
  }, []);

  return (
    <Link href={"/section28/28-13-image-preload-moved"}>
      이벤트 페이지로 이동하기
    </Link>
  );
}
