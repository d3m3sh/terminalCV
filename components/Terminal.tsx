'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  onCommand: (command: string) => void;
  output: React.JSX.Element[];
}

export default function Terminal({ onCommand, output }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  // Maintain focus on input field
  useEffect(() => {
    const focusInput = () => {
      inputRef.current?.focus();
    };

    // Focus on mount
    focusInput();

    // Re-focus when clicking anywhere in the terminal
    const handleTerminalClick = (e: MouseEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      focusInput();
    };

    document.addEventListener('click', handleTerminalClick);
    return () => document.removeEventListener('click', handleTerminalClick);
  }, []);

  // Handle Ctrl+L to clear terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'l' && e.ctrlKey) {
        e.preventDefault();
        onCommand('clear');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCommand]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input);
      setHistory([...history, input]);
      setHistoryIndex(-1);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white font-mono p-4">
      <div className="flex items-center gap-2 mb-4 text-white">
        <TerminalIcon className="w-5 h-5" />
        <span>Terminal CV</span>
      </div>
      
      <div 
        ref={terminalRef}
        className="flex-1 overflow-auto"
      >
        {output.map((line, i) => (
          <pre key={i} className="whitespace-pre-wrap break-words">
            {line}
          </pre>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-green-500">➜</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className={cn(
            "flex-1 bg-transparent border-none outline-none",
            "text-white font-mono"
          )}
          autoFocus
          spellCheck={false}
        />
      </form>
    </div>
  );
}