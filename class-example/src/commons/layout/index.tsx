"use client";

import { usePathname } from "next/navigation";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = [
  "/section04/04-01-aaa", //
  "/section04/04-02-css-moduleb",
];

export default function Layout({ children }) {
  const pathname = usePathname();

  const isShowHeader = HIDDEN_HEADERS.includes(pathname) ? false : true;

  return (
    <>
      {isShowHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "30%", backgroundColor: "orange" }}>
          여기는 사이드바 입니다.
        </div>
        <div style={{ width: "70%" }}>{children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
