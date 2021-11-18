import Link from "next/link";

export default function Login() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-row mx-auto w-full justify-center">
        <div className="flex flex-col md:w-6/12 w-80  border-2 border-gray-200 px-16 py-10 font-sans md:text-base text-sm">
          <div className="flex flex-col space-y-5 pb-5">
            <label for="username" className="text-gray-400">
              Username or email*
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-2 border-gray-200 px-5 py-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-5 pb-5">
            <label for="password" className="text-gray-400">
              Password*
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-2 border-gray-200 px-5 py-2 focus:outline-none"
            />
          </div>
          <div className="flex md:flex-row flex-col md:space-x-5 items-center pb-5">
            <button className="border-2 bg-black text-white px-10 py-3 hover:bg-gray-400 transition-all duration-150">
              LOGIN
            </button>
            <label for="" className="md:pt-0 pt-3">
              <input type="checkbox" />
              <label for="box" className="text-gray-400">
                Remember me
              </label>
            </label>
          </div>
          <div className="flex flex-row md:justify-start justify-center">
            <button className="hover:text-gray-400 transition-all duration-150 hover:underline">
              Lost your password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
