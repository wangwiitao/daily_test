import { useDispatchContext } from "./useCounterContext";

export function CounterButtons() {
  const dispatch = useDispatchContext();

  return (
    <>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
}
