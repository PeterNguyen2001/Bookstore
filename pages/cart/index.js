
import { AiOutlineLeft,AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../context/index'

export default function Cart () {
    const [cart, setCart] = useState([])
    const { getCart, removeFromCart } = useContext(Context)

    useEffect(() => {
        setCart(getCart())
    },[])


    function remove(id) {
        var newCart = removeFromCart(id);
        setCart(newCart)        
    }
    return (
        <div className="flex flex-col max-w-screen-xl mx-auto font-sans justify-center text-gray-400 space-y-10 pt-32">
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="border-2 md:px-20 px-10 py-2">IMAGE</th>
                        <th className="border-2 md:px-36 px-10 ">PRODUCT NAME</th>
                        <th className="border-2 md:px-20 px-8 py-2">PRICE</th>
                        <th className="border-2 md:px-20 px-8 py-2">QUANTITY</th>
                        <th className="border-2 md:px-20 px-5 py-2">TOTAL</th>
                        <th className="border-2 md:px-20 px-5 py-2">REMOVE</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cart?.map((item, idx) => (
                        <tr key={idx}>
                            <td className="border-2 flex items-center justify-center py-5">
                                <img src={item.image} className="w-16 h-16" />
                            </td>
                            <td className="border-2 text-center">
                                {item.name}
                            </td>
                            <td className="border-2 text-center">
                                {item.price}
                            </td>
                            <td className="border-2 text-center">
                                <input defaultValue={item.quantity} className="border-0 w-2/12" />
                            </td>
                            <td className="border-2 text-center">
                                {item.price}
                            </td>
                            <td className="border-2 text-center">
                                <button onClick={() => remove(item.id)} className="text-lg hover:text-gray-700 transition-all duration-200">
                                    <AiOutlineClose />
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between md:space-y-0 space-y-10">
            <div className="flex flex-col space-y-8">
                <div className="flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-3 font-bold">
                    <button className="border-2 bg-black text-white font-bold md:text-sm text-xs px-7 py-3 hover:bg-gray-500 transition-all duration-200">
                        UPDATE CART
                    </button>
                    <button className="border-2 bg-black text-white font-bold md:text-sm text-xs px-7 py-3 hover:bg-gray-500 transition-all duration-200">
                        CONTINUE SHOPPING
                    </button>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl text-gray-700">COUPON</h1>
                    <label>Enter your coupon code if you have one.</label>
                    <div className="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-3">
                        <input type="text" className="border-2 px-5 py-3 focus:outline-none" placeholder="Coupon code"/>
                        <button className="border-2 bg-black px-5 py-3 text-white md:text-sm text-xs font-bold hover:bg-gray-500 transition-all duration-200">
                            APPLY COUPON
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-6 items-end">
                <div className="flex flex-col space-y-2 items-end">
                    <h1 className="md:text-3xl text-2xl text-gray-700">CART TOTALS</h1>
                    <div className="h-0.5 bg-gray-200 w-72"></div>
                </div>
                <div>
                    <table>
                        <tr>
                            <td className="md:text-lg text-base font-semibold w-36">
                                SUBTOTAL
                            </td>
                            <td>
                                rfgerger
                            </td>
                        </tr>
                        <tr>
                            <td className="md:text-2xl text-xl font-semibold py-2">
                                TOTAL
                            </td>
                            <td className="">
                                dfewfew
                            </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <button className="md:text-sm text-xs text-white bg-black border-2 py-3 px-7 font-bold hover:bg-gray-500 transition-all duration-200">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}