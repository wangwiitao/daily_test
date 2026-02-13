import { CounterDisplay } from "./CounterDisplay.tsx";
import { CounterButtons } from "./CounterButtons.tsx";
import { ContextProvider } from "./CounterContext";

export default function App() {
  return (
    <>
      <ContextProvider>
        <CounterDisplay />
        <CounterButtons />
      </ContextProvider>
    </>
  );
}
