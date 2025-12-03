// 서버컴포넌트

import List from "@/components/33-01-shallow-routing/list";
import Pagination from "@/components/33-01-shallow-routing/pagination";
import Search from "@/components/33-01-shallow-routing/search";
import Stat from "@/components/33-02-request-memoization/stat";

export default function ShallowRoutingPage() {
  return (
    <div>
      <Stat />

      <Search />
      <List />
      <Pagination />
    </div>
  );
}
