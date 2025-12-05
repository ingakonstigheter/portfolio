"use client";
import { useState, useEffect } from "react";

export function TypewriterText(props: { words: string[] }) {
  const { words } = props;
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex];

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing phase
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Start deleting after pause
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          // Deleting phase
          if (charIndex > 0) {
            setDisplayText(currentWord.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Move to next word
            setWordIndex((prev) => (prev + 1) % words.length);
            setIsDeleting(false);
            setCharIndex(0);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWord, words]);

  return <span>{displayText}</span>;
}
