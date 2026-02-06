import { useRef } from "react";
import { CustomInput } from "./CustomInput";
import { Input } from "./Input";
export default function App() {
  const inputRef = useRef();

  return (
    <>
      <button onClick={() => console.log(inputRef.current1.input2.focus())}>
        Submit
      </button>
      <Input type="text" ref={inputRef} />
    </>
  );
}
