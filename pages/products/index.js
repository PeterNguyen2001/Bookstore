import dynamic from "next/dynamic";
const ProductList = dynamic(() => import("@components/Products/ProductList"), { loading: () => <p>...</p> })
// const ProductFilter = dynamic(() => import("@components/Products/ProductItem"), { loading: () => <p>...</p> })

export default function ProductListHome() {
  var products = [
    { name: `Leather bag`, price: 150, img: `../assets/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../assets/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../assets/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../assets/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../assets/cover.jpg` },
  ];
  return (
    <>
      {/* <ProductFilter /> */}
      <ProductList products={products} />
    </>
  );
}
