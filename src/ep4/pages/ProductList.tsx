import React, { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router";
import { products } from "../data/fakeData";
import type { IProduct } from "../types/product";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearchForm = (e: FormEvent) => {
    e.preventDefault();

    if (search) {
      console.log("in", e);

      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = products.filter((product: IProduct) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="max-w-3xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold">Tim kiem san pham</h1>

      <form onSubmit={handleSearchForm}>
        <input
          className="border"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            return setSearch(e.target.value);
          }}
        />
        <button type="submit" className="bg-sky-400">
          Search
        </button>
      </form>

      <div className="mt-8">
        {filteredProducts.length === 0 ? (
          <p>Không tìm thấy sản phẩm nào.</p>
        ) : (
          <ul>
            {filteredProducts.map((pro: IProduct)=>(
              <li key={pro.id} className="border-b py-2">
                <div className="font-semibold">{pro.name}</div>
                <div>{pro.price}</div>
                <div>{pro.description}</div>

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
