import Link from "next/link";

export default function Checkout () {
    return (
        <div className=" flex md:flex-row flex-col max-w-screen-xl mx-auto justify-center font-sans py-5 md:space-x-8 md:items-start items-center">
        <div className="flex flex-col md:w-6/12 w-10/12 space-y-7">
            <div className="flex flex-col">
                <h1 className="md:text-2xl text-lg text-gray-600">BILLING DETAILS</h1>
                <div className="h-0.5 bg-gray-200 w-full"></div>
            </div>
            <div className="flex flex-col space-y-3">
                <label for="region" className="md:text-base text-sm text-gray-500">Region*</label>
                <select name="khu vuc" id="reg" className="border-2 border-gray-200 px-5 py-2 w-full md:text-base text-sm">
                    <option value="">None</option>
                    <option value="">Asia Pacific</option>
                    <option value="">Europe</option>
                    <option value="">Americas</option>
                    <option value="">Africa</option>
                </select>
            </div>
            <div className="flex md:flex-row flex-col md:text-base text-sm text-gray-500 md:space-x-7 md:space-y-0 space-y-7">
                <div className="flex flex-col w-full space-y-3">
                    <label>First name*</label>
                    <input type="text" className="border-2 border-gray-200 px-5 py-2 w-full focus:outline-none"/>
                </div>
                <div className="flex flex-col w-full space-y-3">
                    <label>Last name*</label>
                    <input type="text" className="border-2 border-gray-200 px-5 py-2 w-full focus:outline-none"/>
                </div>
            </div>
            <div className="flex flex-col md:text-base text-sm text-gray-500 space-y-3">
                <label>Address*</label>
                <input type="text" placeholder="Street address"
                    className="border-2 border-gray-200 px-5 py-2 w-full focus:outline-none"/>
            </div>
            <div className="flex flex-col md:text-base text-sm text-gray-500 space-y-3">
                <label>Town / City*</label>
                <input type="text" placeholder="Town / City"
                    className="border-2 border-gray-200 px-5 py-2 w-full focus:outline-none"/>
            </div>
            <div className="flex flex-col md:text-base text-sm text-gray-500 space-y-3">
                <label>State / Country*</label>
                <input type="text" className="border-2 border-gray-200 px-5 py-2 w-full focus:outline-none"/>
            </div>
            <div className="flex md:flex-row flex-col md:text-base text-sm text-gray-500 md:space-x-7 md:space-y-0 space-y-7">
                <div className="flex flex-col w-full space-y-3">
                    <label>Email Address*</label>
                    <input type="text" placeholder="Enter your email address"
                        className="border-2 border-gray-200 px-5 py-2 w-full focus:outline-none"/>
                </div>
                <div className="flex flex-col w-full space-y-3">
                    <label>Phone*</label>
                    <input type="text" placeholder="Phone number"
                        className="border-2 border-gray-200 px-5 py-2 w-full focus:outline-none"/>
                </div>
            </div>
            <div className="flex flex-col md:text-base text-sm text-gray-500 space-y-3">
                <label>Order Notes</label>
                <textarea name="" id="" cols="30" rows="5" placeholder="Notes about your order"
                    className="border-2 border-gray-200 px-5 w-full focus:outline-none"></textarea>
            </div>
        </div>
        <div className="flex flex-col md:w-6/12 w-10/12 space-y-7 md:pt-0 pt-7">
            <div className="flex flex-col border-2 border-gray-200 space-y-5 md:px-8 px-5 md:py-7 py-5">
                <div>
                    <h1 className="md:text-2xl text-lg text-gray-600">COUPON CODE</h1>
                    <div className="h-0.5 w-full bg-gray-200"></div>
                </div>
                <div className="flex flex-col md:text-base text-sm text-gray-500 space-y-3">
                    <label>Enter your coupon code if you have one</label>
                    <div className="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-2">
                        <input type="text" placeholder="Coupon code"
                            className="border-2 border-gray-200 px-5 py-2 focus:outline-none"/>
                        <button
                            className="border-2 bg-black text-white px-6 py-2 hover:bg-gray-500 transition-all duration-200">APPLY</button>
                    </div>
                </div>
            </div>
            <div className="border-2 border-gray-200 md:px-7 px-5 md:py-7 py-5 space-y-7 text-gray-500">
                <div>
                    <h1 className="md:text-2xl text-lg text-gray-600">YOUR ORDER</h1>
                    <div className="h-0.5 w-full bg-gray-200"></div>
                </div>
                <div className="flex flex-col w-11/12">
                    <table>
                        <tr className="border-b-2 border-gray-200 md:text-base text-sm">
                            <th align="left" className="w-full py-2">PRODUCT</th>
                            <th align="right" className="w-full py-2">TOTAL</th>
                        </tr>
                        <tr className="border-b-2 border-gray-200 text-sm">
                            <td className="py-2">dsfwerfewfwe</td>
                            <td className="py-2">rfewfew</td>
                        </tr>
                        <tr className="border-b-2 border-gray-200 text-sm">
                            <td className="py-2">defefe</td>
                            <td className="py-2">ewrfger</td>
                        </tr>
                        <tr className="border-b-2 border-gray-200 md:text-base text-sm">
                            <td className="font-bold py-2">Cart Subtotal</td>
                            <td className="py-2"> gerger</td>
                        </tr>
                        <tr className="border-b-2 border-gray-200 md:text-base text-sm">
                            <td className="font-bold py-2">Order Total</td>
                            <td className="py-2">fejrhgfhjrke</td>
                        </tr>
                    </table>
                </div>
                <div className="flex flex-col items-start space-y-1 md:text-base text-sm">
                    <button className="hover:text-black">Direct Bank Transfer</button>
                    <button className="hover:text-black">Cheque Payment</button>
                    <button className="hover:text-black">PayPal</button>
                    <button
                        className="border-2 bg-black text-white md:px-5 px-3 py-2 hover:bg-gray-500 transition-all duration-200">PLACE
                        ORDER</button>
                </div>
            </div>
        </div>
    </div>
    )
}