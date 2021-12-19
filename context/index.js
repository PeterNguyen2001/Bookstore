import { createContext, useState } from "react";
import axios from "axios";
const Context = createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([])
    const handleAddToCart = (product, quantity) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      const productExist = cart.find((item) => item.id === product.id);
      if (productExist) {
        productExist.quantity += parseInt(quantity);
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart);
      } else {
        cart.push({
          ...product,
          quantity: parseInt(quantity),
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart);
      }
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          {
            ...product,
            quantity: parseInt(quantity),
          },
        ])
      );
      setCart([
        {
          ...product,
          quantity: parseInt(quantity),
        },
      ]);
    }
  };

  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    return cart
  }

  const removeFromCart = (id) => {
    const cart = getCart();
    var newCart = cart.filter(item => item.id != id )
    localStorage.setItem('cart', JSON.stringify(newCart))
    return newCart
  }
  var value = {
    handleAddToCart,
    getCart,
    removeFromCart
  }
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export { Context, ContextProvider };