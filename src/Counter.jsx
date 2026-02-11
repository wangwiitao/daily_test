import { memo, useState } from "react";

function Component({ initialCount }) {
  const [value, setValue] = useState(initialCount);

  return (
    <>
      <button onClick={() => setValue((v) => v - 1)}>-</button>
      {value}
      <button onClick={() => setValue((v) => v + 1)}>+</button>
    </>
  );
}

export const Counter = memo(Component, (prevProps, newProps) => {
    // return true;
    return false;
});
