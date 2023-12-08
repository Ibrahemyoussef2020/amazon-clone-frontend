import { CartPc , CartMobile } from "../components";


const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-pc hidden sm:block">
        <CartPc />
      </div>
      <div className="cart-mobile sm:hidden">
        <CartMobile />
      </div>
    </div>
  );
};

export default Cart;
