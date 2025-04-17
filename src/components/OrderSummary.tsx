import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderItem } from "../types";

const OrderSummary: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderItems: OrderItem[] = location.state?.orderItems || [];

  const handleConfirm = () => {
    navigate("/order-success");
  };

  const handleEdit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container mx-auto px-4 mt-6">
      <h1 className="text-2xl font-bold mb-6">Order Summary</h1>
      {orderItems.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Item Number</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item: OrderItem) => (
                <tr key={item.product.itemNumber}>
                  <td className="p-3">{item.product.itemNumber}</td>
                  <td className="p-3">{item.product.description}</td>
                  <td className="p-3">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No items in the order.</p>
      )}
      <div className="mt-6 flex space-x-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
