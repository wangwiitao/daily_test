import { useRef } from "react";
export default function App() {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <CustomInput ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

function CustomInput({ ref }) {
  return <input ref={ref} style={{ border: "2px solid green" }} />;
}
