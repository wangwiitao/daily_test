import { createContext, useContext } from "react";
import type { DispatchContext, ValueContext } from "./CounterContext";

export const ValueContext1 = createContext<ValueContext | null>(null);
export const DispatchContext1 = createContext<DispatchContext | null>(null);

export function useValueContext() {
  const value = useContext(ValueContext1);
  if (value == null) {
    throw new Error("Should be withing Context.Provider");
  }
  return value;
}
export function useDispatchContext() {
  const value = useContext(DispatchContext1);
  if (value == null) {
    throw new Error("Should be withing Context.Provider");
  }
  return value;
}
