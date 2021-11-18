import ProductList from "../../component/Products/ProductList";
export default function ProductListHome() {
  var products = [
    { name: `Leather bag`, price: 150, img: `../picture data/cover.jpg`},
    { name: `Shoe`, price: 90, img: `../picture data/cover.jpg`},
    { name: `Shoe`, price: 90, img: `../picture data/cover.jpg`},
    { name: `Shoe`, price: 90, img: `../picture data/cover.jpg`},
    { name: `Shoe`, price: 90, img: `../picture data/cover.jpg`},
  ];
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
