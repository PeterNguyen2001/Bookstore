import { BsCart2 } from "react-icons/bs";
import { GrFormView } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
export default function ProductItem({ product }) {
  return (
    <div className="flex flex-col items-center min-w-full text-center transition-all duration-200 border group hover:shadow-lg hover:cursor-pointer">
      <div className="relative">
        <img className="md:w-full md:h-72" src={product.img} />
        <div className="absolute flex flex-row justify-center min-w-full gap-3 bg-transparent bottom-2">
          <button className="hidden p-2 transition-all duration-500 bg-gray-300 rounded-full group-hover:block">
            <BsCart2 />
          </button>
          <button className="hidden p-2 transition-all duration-700 bg-gray-300 rounded-full group-hover:block">
            <GrFormView />
          </button>
          <button className="hidden p-2 transition-all duration-1000 bg-gray-300 rounded-full group-hover:block">
            <AiOutlineHeart />
          </button>
        </div>
      </div>

      <div className="w-full px-3 py-3 border-t">
        <div>{product.name}</div>
        <div>€{product.price}</div>
      </div>
    </div>
  );
}
