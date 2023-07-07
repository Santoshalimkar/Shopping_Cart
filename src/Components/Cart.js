import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { product, cart } = state;

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.product_price) * Number(curr.qty),
        0
      )
    );
  }, [cart]);

  return (
    <div className="bg-gray-200 h-[85vh] overflow-scroll overflow-x-hidden overflow-y-visible	 rounded-md m-2 pb-12 w-[30%] sticky top-2 p-1 ">
      <div className="font-bold text-lg text-center">Cart</div>
      <div className="text-center font-bold">Subtotal :₹{total}</div>
      {cart.length > 0 ? (
        cart.map((prod, i) => (
          <div
            key={i}
            className="flex justify-between border  items-center gap-8 m-2  bg-slate-100 "
          >
            <img
              className="h-20 w-[50%] rounded-lg bg-cover p-1 "
              src={prod.product_thumbnail}
            />
            <div className="w-[50%]">
              <p className="truncate text-sm p-2">{prod.product_title}</p>
              <button
                className="border h-8 w-8 outline-none rounded-md hover:bg-red-500 bg-red-100 m-2"
                onClick={() =>
                  dispatch({
                    type: "CHANGE_QTY",
                    payload: { qty: prod.qty - 1, id: prod.id },
                  })
                }
              >
                -
              </button>
              <span className="font-bold m-2">{prod.qty}</span>
              <button
                className="border h-8 w-8 outline-none rounded-md hover:bg-green-500 bg-green-100 m-2"
                onClick={() =>
                  dispatch({
                    type: "CHANGE_QTY",
                    payload: {
                      id: prod.id,
                      qty: prod.qty + 1,
                    },
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center p-5">
          <p>Card is Empty</p>
        </div>
      )}
      <div>
        <button onClick={()=>alert(`You have successfully Paid ₹${total}`)} className={total>0?"block fixed bottom-20 text-center w-[20%] bg-blue-500 hover:bg-blue-600 mx-12 text-white m-4 rounded-lg h-8":"hidden"}>PAY   ₹{total}</button>
      </div>
    </div>
  );
};

export default Cart;
