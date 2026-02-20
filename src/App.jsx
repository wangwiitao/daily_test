import { useDeferredValue, useState } from "react";
import { SlowChild } from "./SlowChild";

export default function App() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  console.log("query", query);
  console.log("deferredQuery", deferredQuery);
  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <SlowChild query={deferredQuery} />
    </>
  );
}
