import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMutationLogger } from "./useMutationLogger";

export default function App() {
  useMutationLogger();
  const [isOpen, setIsOpen] = useState(false);
  const [popupTop, setPopupTop] = useState(0);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    // useState(0)执行， useEffect后执行，所以render的地方执行了两次
    // 改为useLayoutEffect，保证是在dom绘制前执行
    if (buttonRef.current == null || !isOpen) return setPopupTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setPopupTop(bottom + 25);
  }, [isOpen]);
  const now = performance.now();
  while (now > performance.now() - 100) {}

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen((o) => !o)}>
        Show
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: `${popupTop}px`,
            border: "1px solid black",
          }}
        >
          Tooltip
        </div>
      )}
    </>
  );
}
