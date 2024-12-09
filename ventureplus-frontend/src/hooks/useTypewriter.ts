import { useState, useEffect } from "react";

export const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  //   useEffect(() => {
  //     setDisplayText("");
  //   }, [text]);
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
