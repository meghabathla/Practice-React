import React from "react";
import { useProducts } from "../context/useProducts";
import { useCart } from "../context/useCart";

export const Product = () => {
  const { products, setProducts } = useProducts();
  const { cart, setCart } = useCart();

  const handleCart = (key) => {
    const selectedProduct = products.find((product) => product.key === key);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.key === key ? { ...product, stock: product.stock - 1 } : product
      )
    );
    setCart([...cart, selectedProduct]);
  };
  return (
    <div>
      <div>
        {products.map((product) => {
          return (
            <div
              key={product.key}
              className="max-w-52 max-h-48 border border-black flex flex-col rounded-md p-4 m-2"
            >
              <div>Name: {product.productName}</div>
              <div>Price: {product.price}</div>
              <div>Stock: {product.stock}</div>
              <button
                onClick={() => handleCart(product.key)}
                className="bg-black max-w-24  max-h-10 text-white rounded-md p-2 m-2"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
