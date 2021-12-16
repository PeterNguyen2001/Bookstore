import { RiFacebookFill } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col max-w-screen-xl py-5 mx-auto font-serif md:flex-row md:justify-center md:space-x-28">
      <div className="flex flex-col w-9/12">
        <h2 className="text-base font-bold md:text-lg">ABOUT THE STORE</h2>
        <div>
        <p className="pt-3 text-xs text-gray-400 md:text-sm md:pt-7">
          There are many variations of passages of Lor available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable
        </p>
      </div>
      <div className="flex flex-col items-start pt-5 md:pt-5">
        <h2 className="text-base font-bold md:text-lg">CUSTOMER SERVICE</h2>
        <div className="flex flex-col items-start pt-3 space-y-2 md:space-y-4 md:pt-7">
          <button className="text-xs text-gray-400 transition-all duration-150 md:text-sm hover:text-gray-700 hover:underline">
            CONTACT US
          </button>
          <button className="text-xs text-gray-400 transition-all duration-150 md:text-sm hover:text-gray-700 hover:underline">
            ONLINE STORE
          </button>
          <button className="text-xs text-gray-400 transition-all duration-150 md:text-sm hover:text-gray-700 hover:underline">
            TERMS AND CONDITION
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start pt-5 md:pt-5">
        <h2 className="text-base font-bold md:text-lg">PROFILE</h2>
        <div className="flex flex-col items-start pt-3 space-y-2 md:space-y-4 md:pt-7">
          <button className="text-xs text-gray-400 transition-all duration-150 md:text-sm hover:text-gray-700 hover:underline">
            MY ACCOUNT
          </button>
          <button className="text-xs text-gray-400 transition-all duration-150 md:text-sm hover:text-gray-700 hover:underline">
            CHECKOUT
          </button>
          <button className="text-xs text-gray-400 transition-all duration-150 md:text-sm hover:text-gray-700 hover:underline">
            CART
          </button>
        </div>
      </div>
      <div className="pt-5 md:pt-5">
        <h2 className="text-base font-bold md:text-lg">
          SIGN UP FOR OUR AWESOME WORLD
        </h2>
        <div className="flex flex-row pt-3 space-x-5 md:space-x-10 md:pt-7">
          <button className="px-1 py-1 text-xs text-gray-400 transition-all duration-150 border-2 rounded-full md:px-2 md:py-2 md:text-sm hover:bg-gray-600">
            <RiFacebookFill />
          </button>
          <button className="px-1 py-1 text-xs text-gray-400 transition-all duration-150 border-2 rounded-full md:px-2 md:py-2 md:text-sm hover:bg-gray-600">
            <BsGoogle />
          </button>
          <button className="px-1 py-1 text-xs text-gray-400 transition-all duration-150 border-2 rounded-full md:px-2 md:py-2 md:text-sm hover:bg-gray-600">
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
