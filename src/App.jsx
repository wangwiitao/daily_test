import { useCallback, useRef, useState } from "react";

export default function App() {
  const inputRef = useCallback((node) => {
    node.focus();
    return () => {
      console.log("Cleanup");
    };
  }, []);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((v) => v + 1)}>{count}</button>
      <button onClick={() => setVisible((v) => !v)}>Toggle</button>
      {visible && <input ref={inputRef}></input>}
    </>
  );
}
