import { useState, Suspense, useDeferredValue } from "react";
import { Child } from "./Child";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "./ErrorBoundary";

const queryClient = new QueryClient();

export default function App() {
  const [cutoff, setCutoff] = useState(1);
  const deferredCutoff = useDeferredValue(cutoff)

  return (
    <>
      <input
        type="number"
        value={cutoff}
        onChange={(e) => setCutoff(e.target.value)}
      />
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <Suspense fallback={<h1>Suspended</h1>}>
          <QueryClientProvider client={queryClient}>
            <Child cutoff={deferredCutoff} />
          </QueryClientProvider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
