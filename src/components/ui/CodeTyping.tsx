"use client";

import React, { useEffect, useState } from "react";

const CodeTyping = () => {
  const codeLines = [
    "( function repeat() {",
    "  eat();",
    "  sleep();",
    "  code();",
    "  repeat();",
    "})();",
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentChar, setCurrentChar] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      // loop after a short delay
      const loopTimeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentChar(0);
        setCurrentLine(0);
      }, 1000);
      return () => clearTimeout(loopTimeout);
    }

    const line = codeLines[currentLine];
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLine]) newLines[currentLine] = "";
          newLines[currentLine] += line[currentChar];
          return newLines;
        });
        setCurrentChar((prev) => prev + 1);
      }, 50); // typing speed per character
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 300); // delay before next line
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine]);

  return (
    <div className="block-animate flex flex-col items-center justify-center text-center">
      <pre className="w-full max-w-xl text-green-400 p-4 rounded-xl text-left font-mono text-[clamp(14px,2vw,20px)] overflow-x-auto">
        {displayedLines.map((line, index) => (
          <span key={index} className="block">
            {line}
            {currentLine === index && <span className="animate-blink">|</span>}
          </span>
        ))}
      </pre>
    </div>
  );
};

export default CodeTyping;
