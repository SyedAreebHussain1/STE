import { useEffect, useRef, useState } from "react";
export const useWs = (url) => {
  const [isReady, setIsReady] = useState(false);
  const [val, setVal] = useState(null);
  const [error, setError] = useState(null);
  const ws = useRef(null);
  const reconnectTimeout = useRef(null);
  const connect = () => {
    const socket = new WebSocket(url);
    socket.onopen = () => {
      setIsReady(true);
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current);
        reconnectTimeout.current = null;
      }
    };
    socket.onclose = () => {
      setIsReady(false);
      if (!reconnectTimeout.current) {
        // Reconnect after a short delay
        reconnectTimeout.current = setTimeout(connect, 3000);
      }
    };
    socket.onmessage = (event) => setVal(event.data);
    socket.onerror = (event) => setError(event);
    ws.current = socket;
  };
  useEffect(() => {
    connect();
    return () => {
      if (ws.current) {
        ws.current.close();
      }
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current);
        reconnectTimeout.current = null;
      }
    };
  }, []);
  const sendMessage = (message) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(message);
    } else {
      console.error("WebSocket is not open. Cannot send message.");
    }
  };
  return [isReady, val, sendMessage, error];
};
