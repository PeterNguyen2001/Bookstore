export default function Contact() {
  return (
    <div className="flex flex-row justify-center mx-auto font-sans max-w-screen">
      <div className="flex flex-col w-full py-20 md:px-32 px-7">
        <div className="flex flex-col space-y-5">
          <h1 className="text-lg text-gray-500 md:text-3xl">Send your Massage</h1>
          <div className="flex flex-col space-y-5 text-sm text-gray-400 md:flex-row md:space-x-5 md:space-y-0 md:text-base">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-5 py-2 border-2 border-gray-200 focus:outline-none"
            />
            <input
              type="text"
              placeholder="You email"
              className="w-full px-5 py-2 border-2 border-gray-200 focus:outline-none"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your massage"
              className="hidden w-full px-5 text-sm text-gray-400 border-2 border-gray-200 md:text-base focus:outline-none md:block"
            ></textarea>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your massage"
              className="block w-full px-5 text-sm text-gray-400 border-2 border-gray-200 md:text-base focus:outline-none md:hidden"
            ></textarea>
          </div>
          <div>
            <button className="px-10 py-2 text-sm text-white transition-all duration-200 bg-black border-2 border-gray-200 md:text-base hover:bg-white hover:text-black ">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-5 text-sm text-gray-400 md:flex-row md:pt-20 pt-9 md:space-x-10 md:space-y-0 md:text-base">
          <button className="w-full py-2 transition-all duration-200 border-2 rounded-md hover:bg-gray-300 hover:text-black md:py-3">
            Phone +88 888888888
          </button>
          <button className="w-full py-2 transition-all duration-200 border-2 rounded-md hover:bg-gray-300 hover:text-black md:py-3">
            Email: bookstore@email.com
          </button>
          <button className="w-full py-2 transition-all duration-200 border-2 rounded-md hover:bg-gray-300 hover:text-black md:py-3">
            Address: Univerity of Information Technology (UIT)
          </button>
        </div>
      </div>
    </div>
  );
}
