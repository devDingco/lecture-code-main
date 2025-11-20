"use client";

import Link from "next/link";

export default function KakaoMapPage() {
  return (
    <>
      {/* SPA기반 페이지 이동방식(= router.push 동일) */}
      <Link href="/section29/29-02-kakao-map-routing-moved">
        지도 페이지로 이동하기
      </Link>

      <br />

      {/* MPA기반 페이지 이동방식 */}
      <a href="/section29/29-02-kakao-map-routing-moved">
        지도 페이지로 이동하기
      </a>
    </>
  );
}
