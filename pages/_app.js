import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Cart from '../pages/cart/index'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Cart />
    </Layout>
  );
}

export default MyApp;
