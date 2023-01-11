import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState('5');

  // handlers
  const handleByAmount = () => {
    dispatch(incrementByAmount(Number(amount)));
  }

  const handleDecreaseOne = () => {
    if(count == 0) {
      return;
    }
    dispatch(decrement());
  }

  const handleIncrementOne = () => {
    dispatch(increment());
  }

  const handleIncrement10 = () => {
    dispatch(incrementByAmount(10));
  }

  const handleReset = () => {
    dispatch(reset());
  }

  return (
    <>
      <div>
        <button aria-label="Decrement value" onClick={handleDecreaseOne}>
          -1
        </button>
        <button aria-label="Increment value" onClick={handleIncrementOne}>
          +1
        </button>
        <button aria-label="Increment by amount" onClick={handleIncrement10}>
          +10
        </button>

        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          value={amount}
        />
        <button onClick={handleByAmount}>By amount</button>

        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
