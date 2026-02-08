import style from "./App.module.css";
import { Child } from "./Child";

export default function App() {
  return (
    <>
      <h1 className={`${style.header}`}>App</h1>
      <Child />
    </>
  );
}
