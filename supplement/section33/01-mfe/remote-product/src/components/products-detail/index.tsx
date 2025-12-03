import { useRouter } from "next/router";

export default function ProductsDetailPage() {
  const router = useRouter();

  return <>{router.query.productId}번 상품 상세입니다.</>;
}
