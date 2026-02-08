import style from "./Child.module.css";

export function Child() {
  return <h1 className={`${style.header}`}>Child</h1>;
}
