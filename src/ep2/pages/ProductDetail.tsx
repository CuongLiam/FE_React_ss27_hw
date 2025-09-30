import React from "react";
import type { Product } from "../types/product";
import { Link, useParams } from "react-router";
import products from "../data/products";

const priceFormat = (v: number) => new Intl.NumberFormat("vi-VN").format(v);

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Sản phẩm không tồn tại.</h2>
        <p className="mb-6 text-gray-600">
          Xin thử lại với một sản phẩm khác hoặc quay về danh sách.
        </p>
        <Link to="/products" className="text-blue-600">
          Quay lại danh sách sản phẩm
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Chi tiết sản phẩm</h2>

      <div className="bg-white p-6 rounded-lg border shadow-sm max-w-3xl">
        <div className="flex flex-col md:flex-row gap-6">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-1/3 h-56 object-cover rounded"
            />
          )}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">
              Giá: {priceFormat(product.price)} VND
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-600 mb-4">{product.longDescription}</p>

            <Link to="/products" className="text-blue-600">
              Quay lại danh sách sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
