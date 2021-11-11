import { BsCart2 } from "react-icons/bs";
import { GrFormView } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
export default function ProductItem({ product }) {
  return (
    <div className="border flex flex-col max-w-max font-serif text-center items-center">
      <div className="relative">
        <img className="md:w-full md:h-56" src={product.img} />
        <div className="w-full bottom-2 left-10 absolute flex flex-row gap-3 bg-transparent">
          <button className="rounded-full bg-gray-300">
            <BsCart2 />
          </button>
          <button className="rounded-full bg-gray-300">
            <GrFormView />
          </button>
          <button className="rounded-full bg-gray-300">
            <AiOutlineHeart />
          </button>
        </div>
      </div>

      <div className="border-t w-full">
        <div>{product.name}</div>
        <div>{product.price}</div>
      </div>
    </div>
  );
}
