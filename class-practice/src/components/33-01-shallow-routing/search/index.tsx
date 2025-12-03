"use client";

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = () => {
    // 1. 과거방식 - state끌어올리기 => props로 refetch받기
    // props.refetch({ mysearch: search }); // refetch 수행!!

    // 2. 샬로우라우팅
    //    => 페이지 가만히 있고, URL만 변경하는 방식
    //    => URL관련 컴포넌트 usePathname, useSearchParams 등을 사용하는 컴포넌트만 리렌더
    //    => pagerouter 에서는? router.push(주소, 옵션, { shallow: true })

    // 3. 샬로우라우팅(approuter)
    window.history.pushState(null, "", `?search=${search}`);

    // 4. 샬로우라우팅(뒤로가기 기억 안할래)
    // window.history.replaceState(null, "", `?search=${search}`);
  };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
    </div>
  );
}
