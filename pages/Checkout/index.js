export default function Checkout() {
    return (
        <div className="flex flex-col justify-center max-w-screen-xl py-5 mx-auto font-sans md:flex-row md:space-x-8 md:items-start pt-28">
            <div className="flex flex-col w-10/12 md:w-6/12 space-y-7">
                <div className="flex flex-col">
                    <h1 className="text-lg text-gray-600 md:text-2xl">BILLING DETAILS</h1>
                    <div className="h-0.5 bg-gray-200 w-full"></div>
                </div>
                <div className="flex flex-col space-y-3">
                    <label for="region" className="text-sm text-gray-500 md:text-base">Region*</label>
                    <select name="khu vuc" id="reg" className="w-full px-5 py-2 text-sm border-2 border-gray-200 md:text-base">
                        <option value="">None</option>
                        <option value="">Asia Pacific</option>
                        <option value="">Europe</option>
                        <option value="">Americas</option>
                        <option value="">Africa</option>
                    </select>
                </div>
                <div className="flex flex-col text-sm text-gray-500 md:flex-row md:text-base md:space-x-7 md:space-y-0 space-y-7">
                    <div className="flex flex-col w-full space-y-3">
                        <label>First name*</label>
                        <input type="text" className="w-full px-5 py-2 border-2 border-gray-200 focus:outline-none" />
                    </div>
                    <div className="flex flex-col w-full space-y-3">
                        <label>Last name*</label>
                        <input type="text" className="w-full px-5 py-2 border-2 border-gray-200 focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 text-sm text-gray-500 md:text-base">
                    <label>Address*</label>
                    <input type="text" placeholder="Street address"
                        className="w-full px-5 py-2 border-2 border-gray-200 focus:outline-none" />
                </div>
                <div className="flex flex-col space-y-3 text-sm text-gray-500 md:text-base">
                    <label>Town / City*</label>
                    <input type="text" placeholder="Town / City"
                        className="w-full px-5 py-2 border-2 border-gray-200 focus:outline-none" />
                </div>
                <div className="flex flex-col space-y-3 text-sm text-gray-500 md:text-base">
                    <label>State / Country*</label>
                    <input type="text" className="w-full px-5 py-2 border-2 border-gray-200 focus:outline-none" />
                </div>
                <div className="flex flex-col text-sm text-gray-500 md:flex-row md:text-base md:space-x-7 md:space-y-0 space-y-7">
                    <div className="flex flex-col w-full space-y-3">
                        <label>Email Address*</label>
                        <input type="text" placeholder="Enter your email address"
                            className="w-full px-5 py-2 border-2 border-gray-200 focus:outline-none" />
                    </div>
                    <div className="flex flex-col w-full space-y-3">
                        <label>Phone*</label>
                        <input type="text" placeholder="Phone number"
                            className="w-full px-5 py-2 border-2 border-gray-200 focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 text-sm text-gray-500 md:text-base">
                    <label>Order Notes</label>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Notes about your order"
                        className="w-full px-5 border-2 border-gray-200 focus:outline-none"></textarea>
                </div>
            </div>
            <div className="flex flex-col w-10/12 md:w-6/12 space-y-7 md:pt-0 pt-7">
                <div className="flex flex-col px-5 py-5 space-y-5 border-2 border-gray-200 md:px-8 md:py-7">
                    <div>
                        <h1 className="text-lg text-gray-600 md:text-2xl">COUPON CODE</h1>
                        <div className="h-0.5 w-full bg-gray-200"></div>
                    </div>
                    <div className="flex flex-col space-y-3 text-sm text-gray-500 md:text-base">
                        <label>Enter your coupon code if you have one</label>
                        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                            <input type="text" placeholder="Coupon code"
                                className="px-5 py-2 border-2 border-gray-200 focus:outline-none" />
                            <button
                                className="px-6 py-2 text-white transition-all duration-200 bg-black border-2 hover:bg-gray-500">APPLY</button>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-5 text-gray-500 border-2 border-gray-200 md:px-7 md:py-7 space-y-7">
                    <div>
                        <h1 className="text-lg text-gray-600 md:text-2xl">YOUR ORDER</h1>
                        <div className="h-0.5 w-full bg-gray-200"></div>
                    </div>
                    <div className="flex flex-col w-11/12">
                        <table>
                            <tr className="text-sm border-b-2 border-gray-200 md:text-base">
                                <th align="left" className="w-full py-2">PRODUCT</th>
                                <th align="right" className="w-full py-2">TOTAL</th>
                            </tr>
                            <tr className="text-sm border-b-2 border-gray-200">
                                <td className="py-2">dsfwerfewfwe</td>
                                <td className="py-2 text-right">rfewfew</td>
                            </tr>
                            <tr className="text-sm border-b-2 border-gray-200 md:text-base">
                                <td className="py-2 font-bold">Cart Subtotal</td>
                                <td className="py-2 text-right">gerger</td>
                            </tr>
                            <tr className="text-sm border-b-2 border-gray-200 md:text-base">
                                <td className="py-2 font-bold">Order Total</td>
                                <td className="py-2 text-right">fejrhgfhjrke</td>
                            </tr>
                        </table>
                    </div>
                    <div className="flex flex-col items-start space-y-1 text-sm md:text-base">
                        <button className="hover:text-black">Direct Bank Transfer</button>
                        <button className="hover:text-black">Cheque Payment</button>
                        <button className="hover:text-black">PayPal</button>
                        <button
                            className="px-3 py-2 text-white transition-all duration-200 bg-black border-2 md:px-5 hover:bg-gray-500">PLACE
                            ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}