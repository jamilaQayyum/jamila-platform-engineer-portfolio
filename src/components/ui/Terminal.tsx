"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TerminalProps {
  commands: string[];
  className?: string;
}

export default function Terminal({ commands, className }: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= commands.length) return;

    const command = commands[currentLine];
    if (currentChar < command.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = command.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, commands]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`terminal-window ${className ?? ""}`}
    >
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-2 text-gray-500 text-xs">jamila@devops ~ </span>
      </div>
      <div className="p-4 space-y-2 min-h-[160px]">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="text-emerald-400 mr-2">$</span>
            <span className="text-gray-300">{line}</span>
            {i === currentLine && currentChar < commands[currentLine]?.length && (
              <span className="inline-block w-2 h-4 bg-emerald-400 ml-0.5 animate-pulse" />
            )}
          </div>
        ))}
        {currentLine >= commands.length && (
          <div className="flex">
            <span className="text-emerald-400 mr-2">$</span>
            <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
