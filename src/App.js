import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const show = useSelector((state) => state.ui.isCartVisible);
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://demoredux-78ec7-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cartData),
    });
  }, [cartData]);
  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
