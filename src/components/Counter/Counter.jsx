import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          +10
        </button>

        <br />

        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
