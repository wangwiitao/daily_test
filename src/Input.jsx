import { forwardRef, useImperativeHandle, useRef } from "react";

function Inner(props, ref) {
  const inputRef = useRef();
  const input2Ref = useRef();

  useImperativeHandle(ref, () => {
    return { input1: inputRef.current, input2: input2Ref.current };
  });
  return (
    <>
      <input {...props} ref={inputRef} />
      <input {...props} ref={input2Ref} />
    </>
  );
}

export const Input = forwardRef(Inner);
