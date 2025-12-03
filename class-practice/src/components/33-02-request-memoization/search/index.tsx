"use client";

import { useState } from "react";

export default function Search() {
  console.log("<Search /> 리렌더됨");

  const [search, setSearch] = useState("");

  const onChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = () => {
    // 1. 과거방식 - state끌어올리기 => 부모에서 props로 refetch 받기
    // props.refetch({ mysearch: search }); // refetch 수행!!

    // 2. 샬로우라우팅 - 1 (뒤로가기 누르면, 이전 샬로우라우팅 주소로 이동하기)
    //    => 페이지 가만히 있고, URL만 변경하는 방식
    //    => URL관련 컴포넌트 usePathname, useSearchParams 등을 사용하는 컴포넌트만 리렌더
    window.history.pushState(null, "", `?search=${search}`);

    // 3. 샬로우라우팅 - 2 (뒤로가기 누르면, 샬로우라우팅 주소는 무시하고 뒤로가기)
    // window.history.replaceState(null, "", `?search=${search}`);
  };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
    </div>
  );
}
