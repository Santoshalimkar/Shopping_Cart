import Cart from "./Components/Cart";
import Product from "./Components/Product";
import { useEffect, useReducer } from "react";
import reducer from "./Components/reducer";
import axios from "axios";

function App() {
  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      dispatch({
        type: "ADD_PRODUCT",
        payload: data?.products,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    product: [],
    cart: [],
  });

  return (
    <div className="flex items-start ">
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
