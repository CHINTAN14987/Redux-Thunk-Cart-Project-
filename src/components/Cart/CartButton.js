import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UIactions } from "../../features/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.totalQuantity);

  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(UIactions.toggle());
      }}
    >
      <span>My Cart</span>

      <span className={classes.badge}>{cartData}</span>
    </button>
  );
};

export default CartButton;
