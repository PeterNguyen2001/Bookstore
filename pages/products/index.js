import dynamic from 'next/dynamic'
const ProductList = dynamic(() => import('@components/Products/ProductList'), {
  loading: () => <p>...</p>,
})
// const ProductFilter = dynamic(() => import("@components/Products/ProductItem"), { loading: () => <p>...</p> })
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { Context } from '../../context/index'

export default function ProductListHome() {
  const [productList, setProductList] = useState([])
  const {getCart, handleAddToCart} = useContext(Context)
  useEffect(() => {
    axios.get('/api/product').then((res) => {
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
      <ProductList products={productList} handleAddToCart={handleAddToCart} />
    </>
  )
}
