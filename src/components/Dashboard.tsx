import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockProducts } from "../data/products";
import { Product, OrderItem } from "../types";

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState<{ [key: string]: number }>({});
  const navigate = useNavigate();

  const filteredProducts = mockProducts.filter((product) =>
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuantityChange = (itemNumber: string, quantity: number) => {
    setOrder((prev) => ({ ...prev, [itemNumber]: quantity }));
  };

  const handlePlaceOrder = () => {
    const orderItems: OrderItem[] = mockProducts
      .filter((product) => order[product.itemNumber] > 0)
      .map((product) => ({
        product,
        quantity: order[product.itemNumber],
      }));
    navigate("/order-summary", { state: { orderItems } });
  };

  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="bg-blue-100 text-blue-700 p-4 rounded mb-6">
        Deadline for order before 6pm every day.
      </div>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Item Number</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Pack Size</th>
              <th className="p-3 text-left">Unit of Measure</th>
              <th className="p-3 text-left">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product: Product) => (
              <tr key={product.itemNumber}>
                <td className="p-3">{product.itemNumber}</td>
                <td className="p-3">{product.description}</td>
                <td className="p-3">{product.packSize}</td>
                <td className="p-3">{product.unitOfMeasure}</td>
                <td className="p-3">
                  <input
                    type="number"
                    className="w-20 p-1 border rounded"
                    min="0"
                    value={order[product.itemNumber] || 0}
                    onChange={(e) =>
                      handleQuantityChange(
                        product.itemNumber,
                        Number(e.target.value)
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default Dashboard;
