import React from "react";

const Product = ({ state, dispatch }) => {
  const { product, cart } = state;

  return (
    <div className="flex flex-wrap w-[70%]">
      {product.map((prod, i) => (
        <div
          className="h-auto w-60 m-2 rounded-md bg-gray-100 p-2 border hover:shadow-lg hover:transition "
          key={i}
        >
          <img
            className=" bg-auto bg-center bg-clip-padding  h-40 w-full rounded-md hover:brightness-75 "
            src={prod.thumbnail}
            alt="product img"
          />
          <div className="flex justify-between  items-center p-2">
            <p className="text-sm truncate	">{prod.title}</p>
            <span className="text-md font-bold">₹{prod.price}</span>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              className="text-center text-white mx-6 p-1 outline-none hover:bg-red-500  bg-red-400 w-40 rounded-md m-2 "
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              REMOVE{" "}
            </button>
          ) : (
            <button
              className="text-center text-white mx-6 p-1 outline-none  hover:bg-green-500  bg-green-400 w-40 rounded-md m-2 "
              onClick={() =>
                dispatch({
                  type: "ADD_CART",
                  payload: {
                    id: prod.id,
                    product_title: prod.title,
                    product_thumbnail: prod.thumbnail,
                    product_price: prod.price,
                    qty: 1,
                  },
                })
              }
            >
              ADD TO CART
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Product;
