import { createContext, useContext } from "react";

const Context = createContext(null);
export function Card({ children, secret }) {
  return (
    <Context value={{ secret }}>
      <div style={{ border: "1px solid black" }}>{children}</div>
    </Context>
  );
}
// use outside Card
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

function Body({ children }) {
  return <div style={{ padding: ".5rem" }}>{children}</div>;
}

function Header({ children, padding = ".5rem" }) {
  const { secret } = useContext(Context);
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding,
        marginBottom: ".5rem",
      }}
    >
      {children}
      {secret}
    </div>
  );
}
function Footer({ children }) {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        padding: ".5rem",
        marginTop: ".5rem",
      }}
    >
      {children}
    </div>
  );
}
