import { useValueContext } from "./useCounterContext";

export function CounterDisplay() {
  const { count } = useValueContext();
  return <div>{count}</div>;
}
