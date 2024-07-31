// hooks/useWebSocket.js
import { useEffect, useState, useRef } from "react";

export const useWebSocket = () => {
  const [lastMessage, setLastMessage] = useState(null);
  const webSocket = useRef(null);

  useEffect(() => {
    webSocket.current = new WebSocket("ws://localhost:8080"); // Replace with your WebSocket server URL

    webSocket.current.onmessage = (message) => {
      setLastMessage(message);
    };

    return () => {
      webSocket.current.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (webSocket.current.readyState === WebSocket.OPEN) {
      webSocket.current.send(message);
    }
  };

  return { sendMessage, lastMessage };
};
