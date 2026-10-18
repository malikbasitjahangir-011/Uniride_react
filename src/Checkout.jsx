function Checkout({ qty, hinc, hdec }) {
  return (
    <>
      <h1>This is a checkout page.</h1>

      <button onClick={hinc}>+</button>

      <p>Count is: {qty}</p>

      <button onClick={hdec}>-</button>
    </>
  );
}

export default Checkout;