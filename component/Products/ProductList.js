import ProductItem from "./ProductItem"

export default function ProductList({ products }) {
    return(
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 items-center">
            {
                products.map((product, idx) => <ProductItem key={idx} product={product} />)
            }
        </div>
    )
}