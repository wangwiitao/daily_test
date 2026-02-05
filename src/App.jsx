import { useState } from "react";

export default function App() {
  const [changeDogs, setChangeDogs] = useState(false);

  return (
    <div>
      {changeDogs ? <span># of Dogs</span> : <span># of Cats:</span>}
      <br />
      <input type="text" key={changeDogs ? "dogs" : "cats"}></input>
      <br />
      <button onClick={() => setChangeDogs((d) => !d)}>Switch</button>
    </div>
  );
}
