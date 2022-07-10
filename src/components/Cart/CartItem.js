import classes from "./CartItem.module.css";
import { cartActions } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  return (
    <li className={classes.item}>
      {console.log(items)}
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(cartActions.removeItemfromCart(id));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(cartActions.addItemToCart({ id, price, title }));
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
