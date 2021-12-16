import Link from 'next/link'

export default function Register () {
    return (
        <div className="flex flex-row max-w-screen mx-auto justify-center py-5 pt-28">
        <div className="border-2 border-gray-200 font-sans md:w-7/12 w-10/12 px-10 py-10">
            <div className="flex md:flex-row flex-col md:space-x-10 pb-5 md:text-base text-sm">
                <div className="flex flex-col w-full space-y-3">
                    <label for="firstname" className="text-gray-400">First name*</label>
                    <input type="text" placeholder="Enter first name"
                        className="border-2 border-gray-200 px-5 py-2 focus:outline-none"/>
                </div>
                <div className="flex flex-col w-full space-y-3 md:pt-0 pt-5">
                    <label for="lastname" className="text-gray-400">Last name*</label>
                    <input type="password" placeholder="Enter last name"
                        className="border-2 border-gray-200 px-5 py-2 focus:outline-none"/>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:space-x-10 pb-5 md:text-base text-sm">
                <div className="flex flex-col w-full space-y-3">
                    <label for="email" className="text-gray-400">Email Address*</label>
                    <input type="text" placeholder="Enter email address"
                        className="border-2 border-gray-200 px-5 py-2 focus:outline-none"/>
                </div>
                <div className="flex flex-col w-full space-y-3 md:pt-0 pt-5">
                    <label for="phone" className="text-gray-400">Phone*</label>
                    <input type="text" placeholder="Enter phone number"
                        className="border-2 border-gray-200 px-5 py-2 focus:outline-none"/>
                </div>
            </div>
            <div className="flex flex-col space-y-3 pb-5 md:text-base text-sm">
                <label for="region" className="text-gray-400 ">Region*</label>
                <select name="Region" id="reg" className="border-2 border-gray-200 px-5 py-2 ">
                    <option value="None">None</option>
                    <option value="asia">Asia Pacific</option>
                    <option value="europe">Europe</option>
                    <option value="america">Americas</option>
                    <option value="africa">Africa</option>
                </select>
            </div>
            <div className="flex flex-col space-y-3 pb-5 md:text-base text-sm">
                <label for="add" className="text-gray-400">Address*</label>
                <input type="text" placeholder="Enter your address"
                    className="border-2 border-gray-200 px-5 py-2 focus:outline-none"/>
            </div>
            <div className="flex flex-col space-y-3 pb-5 md:text-base text-sm">
                <label for="cty" className="text-gray-400">Town / City*</label>
                <input type="text" className="border-2 border-gray-200 px-5 py-2 focus:outline-none"/>
            </div>
            <div className="flex flex-col space-y-3 pb-5 md:text-base text-sm">
                <label for="accpass" className="text-gray-400">Account password*</label>
                <input type="password" className="border-2 border-gray-200 px-5 py-2 focus:outline-none"/>
            </div>
            <div className="flex flex-col space-y-3 pb-5 md:text-base text-sm">
                <label for="conpass" className="text-gray-400">Confirm password*</label>
                <input type="password" className="border-2 border-gray-200 px-5 py-2 focus:outline-none"/>
            </div>
            <div className="flex flex-row space-x-3 pb-5 md:text-base text-sm ">
                <label><input type="checkbox"/>
                    <label for="term" className="text-gray-400">I agree Terms & Condition</label>
                </label>
            </div>
            <div>
                <button
                    className="border-2 bg-black text-white md:px-10 md:py-3 px-7 py-2 hover:bg-gray-400 transition-all duration-150 md:text-base text-sm">
                    REGISTER
                </button>
            </div>
        </div>
    </div>
    )
}