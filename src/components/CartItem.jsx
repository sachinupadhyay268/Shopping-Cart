import React from 'react';
import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success('Item Removed');
  };

  return (
    <div className="flex border-b border-gray-300 p-4">
      <div className="flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
      </div>
      <div className="ml-4">
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <p className="text-gray-700 mb-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-gray-800">${item.price}</p>
          <div className="cursor-pointer" onClick={removeFromCart}>
            <FcDeleteDatabase className="text-red-600 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
