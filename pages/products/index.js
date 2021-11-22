import dynamic from "next/dynamic";
const ProductList = dynamic(() => import("@components/Products/ProductList"))
const ProductFilter = dynamic(() => import("@components/Products/ProductFilter"))

export default function ProductListHome() {
  var products = [
    { name: `Leather bag`, price: 150, img: `../picture data/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../picture data/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../picture data/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../picture data/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../picture data/cover.jpg` },
  ];
  return (
    <>
      <ProductFilter />
      <ProductList products={products} />
    </>
  );
}
