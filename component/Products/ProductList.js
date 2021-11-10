import ProductItem from "./ProductItem"

export default function ProductList({ products }) {
    return(
        <div className="grid grid-cols-4 gap-3">
            {
                products.map(product => <ProductItem />)
            }
        </div>
    )
}