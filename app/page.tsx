'use client';

import { useState, useCallback } from 'react';
import Terminal from '@/components/Terminal';
import { TerminalOutput } from '@/components/TerminalOutput';
import { commands } from '@/lib/commands';

export default function Home() {
  const [output, setOutput] = useState<any[]>([{
    type: 'text',
    content: 'Welcome to my terminal CV! Type "help" to see available commands.'
  }]);

  const handleCommand = useCallback((command: string) => {
    var cmd = command.trim().toLowerCase();
    
    if (cmd === 'clear') {
      setOutput([]);
      return;
    }

    const newOutput = [...output, { type: 'text', content: `➜ ${command}` }];

    if (cmd == '?' || cmd == 'man') {
      cmd = 'help';
    }
    const foundCommand = commands.find(c => c.name === cmd);
    if (foundCommand) {
      const result = foundCommand.action();
      if (result.type === 'multiple') {
        newOutput.push(...result.content);
      } else {
        newOutput.push(result);
      }
    } else {
      newOutput.push({ type: 'text', content: `Command not found: ${command}` });
    }

    setOutput(newOutput);
  }, [output]);

  return (
    <Terminal 
      onCommand={handleCommand} 
      output={output.map((item, index) => (
        <TerminalOutput key={index} type={item.type} content={item.content} />
      ))} 
    />
  );
}