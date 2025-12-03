import { lazy } from "react";

const ProductsDetailPage = lazy(() => import("remote-product/products-detail"));

export default () => {
  return <ProductsDetailPage />;
};
