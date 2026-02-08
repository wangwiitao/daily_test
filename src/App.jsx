import { useEffect, useEffectEvent } from "react";

export function ChatRoom({ url, displayName }) {
  const logConnection = useEffectEvent((value) => {
    console.log(value, displayName);
  });

  useEffect(() => {
    const room = connectToRoom(url);
    room.onConnected(() => {
      logConnection(`Connected ot ${url}`);
    });
    return () => room.disconnect();
  }, [url]);
}
