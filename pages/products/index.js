import ProductList from "../../component/Products/ProductList";
import ProductFilter from "../../component/Products/ProductFilter";
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
