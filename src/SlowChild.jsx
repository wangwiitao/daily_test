import { memo } from "react";

export function Component({ query }) {
  const start = performance.now();
  while (start > performance.now() - 100) {
    // Artificial slowdown
  }
  return (
    <>
      <h1>Query Results</h1>
      {query}
    </>
  );
}

export const SlowChild = memo(Component);
