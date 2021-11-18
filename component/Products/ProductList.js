import ProductItem from "./ProductItem"

export default function ProductList({ products }) {
    return(
        <div className="max-w-screen-xl mx-auto">
            <div className="grid items-center grid-cols-2 gap-5 md:grid-cols-4">
            {
                products.map((product, idx) => <ProductItem key={idx} product={product} />)
            }
        </div>
        </div>
    )
}