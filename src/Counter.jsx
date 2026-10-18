import { useState } from "react";
import Checkout from "./Checkout";

function Counter() {
  const [quantity, setQuantity] = useState(0);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    setQuantity(quantity - 1);
  }

  return (
    <>
      <h1>I am a Counter component.</h1>

      <button onClick={handleIncrement}>+</button>

      <p>Count is: {quantity}</p>

      <button onClick={handleDecrement}>-</button>

      <Checkout
        qty={quantity}
        hinc={handleIncrement}
        hdec={handleDecrement}
      />
    </>
  );
}

export default Counter;