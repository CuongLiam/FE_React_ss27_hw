import React from "react";
import { Link } from "react-router";
import products from "../data/products";
import type { Product } from "../types/product";

const priceFormat = (v: number) => new Intl.NumberFormat("vi-VN").format(v);

const ProductList: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Danh sách sản phẩm</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((p: Product) => (
          <div key={p.id} className="bg-white p-5 rounded-lg shadow-sm border">
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="h-36 w-full object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-700 mb-3">
              Giá: {priceFormat(p.price)} VND
            </p>
            <Link to={`/products/${p.id}`} className="text-blue-600">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
