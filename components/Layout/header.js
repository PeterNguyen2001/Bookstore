import { BsCartPlus } from "react-icons/bs";

export default function Header() {
    return (
        <>
            <div className="flex flex-row items-center justify-around max-w-screen-xl mx-auto font-sans py-7">
                <img src="/assets/logo.webp" className="h-6 w-28" />
                <div className="flex flex-row items-center space-x-5">
                    <div className="flex flex-row space-x-5">
                        <button className="text-xs text-gray-600 uppercase transition-all duration-150 hover:text-black hover:underline">
                            Home
                        </button>
                        <button className="text-xs text-gray-600 uppercase transition-all duration-150 hover:text-black hover:underline">
                            Shop
                        </button>
                        <button className="text-xs text-gray-600 uppercase transition-all duration-150 hover:text-black hover:underline">
                            Pages
                        </button>
                        <button className="text-xs text-gray-600 uppercase transition-all duration-150 hover:text-black hover:underline">
                            Contact
                        </button>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <button className="py-2 text-base text-white transition-all duration-150 bg-black border-2 px-7 hover:bg-gray-400">
                            Login
                        </button>
                        <button className="py-2 text-base text-white transition-all duration-150 bg-black border-2 px-7 hover:bg-gray-400">
                            Register
                        </button>
                        <button className="text-xl transition-all duration-200 hover:text-gray-400">
                            <BsCartPlus />
                        </button>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: `url("https://template.hasthemes.com/outside/outside/img/bg/2.jpg")`
            }} className="w-full bg-no-repeat bg-cover h-96">
                asdskdhaksd
            </div>
        </>
    )
}