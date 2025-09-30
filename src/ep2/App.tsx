import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 border-l border-r border-gray-800/60">
      <Header />

      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Trang Chi Tiết Sản Phẩm
          </h1>
          <p className="mt-3">Danh sách sản phẩm</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-gray-500">
                404 - Trang không tìm thấy
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
