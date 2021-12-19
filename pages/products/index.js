import dynamic from 'next/dynamic'
const ProductList = dynamic(() => import('@components/Products/ProductList'), {
  loading: () => <p>...</p>,
})
// const ProductFilter = dynamic(() => import("@components/Products/ProductItem"), { loading: () => <p>...</p> })
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function ProductListHome() {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    axios.get('/api/product').then((res) => {
      console.log(res)
      setProductList(res.data)
    })
  }, [])
  var products = [
    { name: `Leather bag`, price: 150, img: `../assets/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../assets/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../assets/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../assets/cover.jpg` },
    { name: `Shoe`, price: 90, img: `../assets/cover.jpg` },
  ]
  return (
    <>
      {/* <ProductFilter /> */}
      <ProductList products={productList} />
    </>
  )
}
