import { useEffect, useState } from "react";

interface UseTypeEffectOptions {
  typingSpeed?: number;
  blinkSpeed?: number;
}

export default function useTypeEffect(
  text: string,
  { typingSpeed = 50, blinkSpeed = 500 }: UseTypeEffectOptions = {},
) {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let cursorTimer: number | undefined;
    let typeTimer: number | undefined;

    setTypedText("");
    let index = 0;

    typeTimer = window.setInterval(() => {
      index += 1;
      setTypedText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(typeTimer);
      }
    }, typingSpeed);

    cursorTimer = window.setInterval(() => {
      setShowCursor((current) => !current);
    }, blinkSpeed);

    return () => {
      if (typeTimer) {
        window.clearInterval(typeTimer);
      }
      if (cursorTimer) {
        window.clearInterval(cursorTimer);
      }
    };
  }, [blinkSpeed, text, typingSpeed]);

  return { typedText, showCursor };
}
