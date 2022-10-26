import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import {
  decrement,
  increment,
  incrementByAmount,
  resetCounter,
} from "../../../features/counter/counterSlice";
import { useState } from "react";
const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value);

  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Counter</h1>
      <div style={{ fontSize: "30px" }}>
        <button
          style={{ fontSize: "30px", padding: "5px", color: "red" }}
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span style={{ padding: "20px", color: "blue" }}>{value}</span>
        <button
          style={{ fontSize: "30px", padding: "5px", color: "green" }}
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <div>
          <input
            value={incrementAmount}
            type="number"
            onChange={(e: any) => setIncrementAmount(e.target.value)}
          />
          <div>
            <button
              onClick={() => {
                console.log(incrementAmount);
                dispatch(incrementByAmount(Number(incrementAmount || "0")));
              }}
            >
              Add amount
            </button>
            |{" "}
            <button
              onClick={() => {
                setIncrementAmount(0);
                dispatch(resetCounter());
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
