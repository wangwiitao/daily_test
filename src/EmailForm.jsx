import { useId, useState } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        id={`${id}-email`}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text"></input>
    </div>
  );
}
