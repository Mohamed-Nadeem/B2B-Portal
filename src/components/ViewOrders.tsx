import React from "react";
import { mockOrders } from "../data/products";
import { Order } from "../types";

const ViewOrders: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-6">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Value</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order: Order) => (
              <tr key={order.id}>
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">${order.value.toFixed(2)}</td>
                <td className="p-3">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
