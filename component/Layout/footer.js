import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex md:flex-row flex-col max-w-screen-xl mx-auto md:justify-center font-serif md:space-x-28">
      <div className="flex flex-col w-1/12">
        <h2 className="font-bold md:text-lg text-base">ABOUT THE STORE</h2>
        <div className="w-1/12">
        <p className="text-gray-400 md:text-sm text-xs md:pt-7 pt-3">
          There are many variations of passages of Lor available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable
        </p>
        </div>
      </div>
      <div className=" flex flex-col items-start md:pt-0 pt-5">
        <h2 className="font-bold md:text-lg text-base">CUSTOMER SERVICE</h2>
        <div className="flex flex-col items-start md:space-y-4 space-y-2 md:pt-7 pt-3">
          <button className="md:text-sm text-xs text-gray-400 hover:text-gray-700 transition-all duration-150 hover:underline">
            CONTACT US
          </button>
          <button className="md:text-sm text-xs text-gray-400 hover:text-gray-700 transition-all duration-150 hover:underline">
            ONLINE STORE
          </button>
          <button className="md:text-sm text-xs text-gray-400 hover:text-gray-700 transition-all duration-150 hover:underline">
            TERMS AND CONDITION
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start md:pt-0 pt-5">
        <h2 className="font-bold md:text-lg text-base">PROFILE</h2>
        <div className="flex flex-col items-start md:space-y-4 space-y-2 md:pt-7 pt-3">
          <button className="md:text-sm text-xs text-gray-400 hover:text-gray-700 transition-all duration-150 hover:underline">
            MY ACCOUNT
          </button>
          <button className="md:text-sm text-xs text-gray-400 hover:text-gray-700 transition-all duration-150 hover:underline">
            CHECKOUT
          </button>
          <button className="md:text-sm text-xs text-gray-400 hover:text-gray-700 transition-all duration-150 hover:underline">
            CART
          </button>
        </div>
      </div>
      <div className="md:pt-0 pt-5">
        <h2 className="font-bold md:text-lg text-base">
          SIGN UP FOR OUR AWESOME WORLD
        </h2>
        <div className="flex flex-row md:space-x-10 space-x-5 md:pt-7 pt-3">
          <button className="border-2 rounded-full md:px-2 md:py-2 px-1 py-1 md:text-sm text-xs text-gray-400 hover:bg-gray-600 transition-all duration-150">
            <RiFacebookFill />
          </button>
          <button className="border-2 rounded-full md:px-2 md:py-2 px-1 py-1 md:text-sm text-xs text-gray-400 hover:bg-gray-600 transition-all duration-150">
            <BsGoogle />
          </button>
          <button className="border-2 rounded-full md:px-2 md:py-2 px-1 py-1 md:text-sm text-xs text-gray-400 hover:bg-gray-600 transition-all duration-150">
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </div>
  );
}
