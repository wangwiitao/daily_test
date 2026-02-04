import { useState } from "react";
import { createPortal } from "react-dom";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  function setClose(e) {
    e.stopPropagation();
    setIsOpen(false);
  }
  // throw new Error()

  return (
    <div
      onClick={(e) => {
        e.stopPropagation;
        console.log("In the div");
      }}
      style={{ position: "relative", marginTop: "100px" }}
    >
      <h1>App content</h1>
      <button onClick={() => setIsOpen(true)}>Show Message</button>
      <AlertMessage isOpen={isOpen} onClose={(e) => setClose(e)}>
        Secret Message
        <br />
        Click To Close
      </AlertMessage>
    </div>
  );
}

function AlertMessage({ children, onClose, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        cursor: "pointer",
        position: "absolute",
        top: ".5rem",
        left: "50%",
        translate: "-50%",
        background: "#777",
        color: "white",
        borderRadius: ".5rem",
        padding: ".5rem",
      }}
    >
      {children}
    </div>,
    document.body,
  );
}
