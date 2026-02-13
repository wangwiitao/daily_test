import { useReducer, type Dispatch, type ReactNode } from "react";
import {
  DispatchContext1 as DispatchContext,
  ValueContext1 as ValueContext,
} from "./useCounterContext";

type State = { count: number };
type Action = {
  type: "INCREMENT" | "DECREMENT";
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("invalid action");
  }
}

export type ValueContext = { count: number };

export type DispatchContext = Dispatch<Action>;

type CounterProviderProps = {
  children: ReactNode;
};
export function ContextProvider({ children }: CounterProviderProps) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <DispatchContext.Provider value={dispatch}>
      <ValueContext.Provider value={state}>{children}</ValueContext.Provider>
    </DispatchContext.Provider>
  );
}
