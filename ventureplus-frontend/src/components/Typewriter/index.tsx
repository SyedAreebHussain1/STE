import { useEffect, useRef, useState } from "react";

export const Typewriter = ({ text, delay }: { text: string; delay: number }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [resetKey, setResetKey] = useState<string | null>(null)
  useEffect(() => {
    setResetKey(text);
    setCurrentText('');
    setCurrentIndex(0);
  }, [text, delay]);

  useEffect(() => {
    if (currentIndex < text?.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text?.[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay, resetKey]);


  return <span>{currentText}</span>;
};
