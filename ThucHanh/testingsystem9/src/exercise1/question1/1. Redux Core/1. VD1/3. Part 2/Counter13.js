import { useState } from "react";
import store from "../2. Part 1/redux/store";

function Counter13() {
  const [counter, setCounter] = useState(store.getState().value);

  const increase = () => {
    store.dispatch({
      type: "counter/incremented",
    });
  };

  const decrease = () => {
    store.dispatch({
      type: "counter/decremented",
    });
  };

  const updateData = () => {
    store.subscribe(() => setCounter(store.getState().value));
  };

  updateData();

  return (
    <div>
      <p>Value: {counter}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter13;
