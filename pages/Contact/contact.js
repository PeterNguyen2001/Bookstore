import Link from "next/link";

export default function Contact() {
  return (
    <div class="flex flex-row max-w-screen mx-auto justify-center font-sans">
      <div class="flex flex-col w-full md:px-32 py-20 px-7">
        <div class="flex flex-col space-y-5">
          <h1 class="md:text-3xl text-lg text-gray-500">Send your Massage</h1>
          <div class="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5 text-gray-400 md:text-base text-sm">
            <input
              type="text"
              placeholder="Your name"
              class="border-2 border-gray-200 px-5 py-2 focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="You email"
              class="border-2 border-gray-200 px-5 py-2 focus:outline-none w-full"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your massage"
              class="md:text-base text-sm border-2 border-gray-200 focus:outline-none w-full px-5 text-gray-400 md:block hidden"
            ></textarea>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your massage"
              class="md:text-base text-sm border-2 border-gray-200 focus:outline-none w-full px-5 text-gray-400 block md:hidden"
            ></textarea>
          </div>
          <div>
            <button class="border-2 border-gray-200 md:text-base text-sm text-white bg-black px-10 py-2 hover:bg-white transition-all duration-200 hover:text-black ">
              SUBMIT
            </button>
          </div>
        </div>
        <div class="flex md:flex-row flex-col w-full md:pt-20 pt-9 md:space-x-10 md:space-y-0 space-y-5 text-gray-400 md:text-base text-sm">
          <button class="border-2 rounded-md w-full hover:bg-gray-300 transition-all duration-200 hover:text-black md:py-3 py-2">
            Phone +88 888888888
          </button>
          <button class="border-2 rounded-md w-full hover:bg-gray-300 transition-all duration-200 hover:text-black md:py-3 py-2">
            Email: bookstore@email.com
          </button>
          <button class="border-2 rounded-md w-full hover:bg-gray-300 transition-all duration-200 hover:text-black md:py-3 py-2">
            Address: Univerity of Information Technology (UIT)
          </button>
        </div>
      </div>
    </div>
  );
}
