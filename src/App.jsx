import "./styles.css";
import { DatePicker } from "./DatePicker";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(new Date());
  return <DatePicker value={value} onChange={setValue} />;
}
