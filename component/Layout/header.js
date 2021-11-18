import Link from 'next/link'
import { BsCartPlus } from "react-icons/bs";

export default function Header () {
    return (
        <div className="flex flex-row max-w-screen mx-auto justify-around font-sans">
        <div className="pic">
            
        </div>
        <div className="flex flex-row space-x-5 ">
            <button className="text-base text-gray-600 hover:text-black transition-all duration-150 hover:underline">
                Home
            </button>
            <button className="text-base text-gray-600 hover:text-black transition-all duration-150 hover:underline">
                Shop
            </button>
            <button className="text-base text-gray-600 hover:text-black transition-all duration-150 hover:underline">
                Pages
            </button>
            <button className="text-base text-gray-600 hover:text-black transition-all duration-150 hover:underline">
                Contact
            </button>
        </div>
        <div>
            <button className="border-2 bg-black text-white text-base px-7 py-2 hover:bg-gray-400 transition-all duration-150">
                Login
            </button>
            <button className="border-2 bg-black text-white text-base px-7 py-2 hover:bg-gray-400 transition-all duration-150">
                Register
            </button>
            <button>
            <BsCartPlus />
            </button>
        </div>
    </div>
    )
}