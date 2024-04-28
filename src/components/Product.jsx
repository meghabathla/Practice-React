import React from "react";

export const Product = () => {
  return (
    <div className="max-w-52 max-h-48 border border-black flex flex-col rounded-md p-4 m-2">
      <div className="flex-row- ">product name</div>
      <div>price</div>
      <div>stock-5</div>
      <button className="bg-black max-w-24  max-h-10 text-white rounded-md p-2 m-2">
        Add to cart
      </button>
    </div>
  );
};
