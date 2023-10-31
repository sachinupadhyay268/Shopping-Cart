import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    // Round to 2 decimal places
    setTotalAmount(total.toFixed(2));
  }, [cart]);

  return (
    <div className="container mx-auto mt-10 p-5">
      {cart.length > 0 ? (
        <div className="flex flex-col">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <div className="font-bold text-xl mb-2">Your Cart</div>
              <div className="font-bold text-lg">Summary</div>
              <p>
                <span className="text-gray-600">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold">Total Amount: ${totalAmount}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-500 text-white px-6 py-2 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
