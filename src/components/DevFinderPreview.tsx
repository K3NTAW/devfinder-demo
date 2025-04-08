'use client';

import React, { useState, useEffect, useRef } from 'react';

interface FileItem {
  name: string;
  type: 'directory' | 'file';
  color: string;
  contents?: FileItem[];
}

interface Directory {
  contents: FileItem[];
}

const sampleFiles: FileItem[] = [
  { name: 'src', type: 'directory', color: 'text-blue-500', contents: [
    { name: 'components', type: 'directory', color: 'text-blue-500', contents: [
      { name: 'Button.tsx', type: 'file', color: 'text-green-500' },
      { name: 'Card.tsx', type: 'file', color: 'text-green-500' },
      { name: 'Layout.tsx', type: 'file', color: 'text-green-500' },
      { name: 'DevFinderPreview.tsx', type: 'file', color: 'text-green-500' },
      { name: 'Hero.tsx', type: 'file', color: 'text-green-500' },
    ]},
    { name: 'pages', type: 'directory', color: 'text-blue-500', contents: [
      { name: 'index.tsx', type: 'file', color: 'text-green-500' },
      { name: '_app.tsx', type: 'file', color: 'text-green-500' },
      { name: '_document.tsx', type: 'file', color: 'text-green-500' },
    ]},
    { name: 'styles', type: 'directory', color: 'text-blue-500', contents: [
      { name: 'globals.css', type: 'file', color: 'text-green-500' },
    ]},
    { name: 'utils', type: 'directory', color: 'text-blue-500', contents: [
      { name: 'api.ts', type: 'file', color: 'text-green-500' },
    ]},
  ]},
  { name: 'public', type: 'directory', color: 'text-blue-500', contents: [] },
  { name: 'package.json', type: 'file', color: 'text-green-500' },
  { name: 'README.md', type: 'file', color: 'text-yellow-500' },
  { name: 'tsconfig.json', type: 'file', color: 'text-green-500' },
  { name: 'node_modules', type: 'directory', color: 'text-blue-500', contents: [] },
  { name: '.git', type: 'directory', color: 'text-blue-500', contents: [] },
  { name: 'next.config.js', type: 'file', color: 'text-green-500' },
];

const DevFinderPreview = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [currentPath, setCurrentPath] = useState(['devfinder']);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{command: string, output: string}>>([]);
  const terminalInputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 't') {
        e.preventDefault();
        setShowTerminal(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const command = terminalInput.trim();
    let output = '';

    if (command.startsWith('cd ')) {
      const target = command.slice(3);
      if (target === '..') {
        if (currentPath.length > 1) {
          setCurrentPath(prev => prev.slice(0, -1));
          output = '';
        } else {
          output = 'Already at root directory';
        }
      } else {
        const currentDir = getCurrentDirectory();
        const targetDir = currentDir.contents?.find(item => 
          item.type === 'directory' && item.name === target
        );
        if (targetDir) {
          setCurrentPath(prev => [...prev, target]);
          output = '';
        } else {
          output = `cd: no such directory: ${target}`;
        }
      }
    } else if (command === 'ls') {
      const currentDir = getCurrentDirectory();
      output = currentDir.contents?.map(item => item.name).join('  ') || '';
    } else if (command === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      output = `command not found: ${command}`;
    }

    setTerminalHistory(prev => [...prev, { command, output }]);
    setTerminalInput('');
  };

  const getCurrentDirectory = (): Directory => {
    let current: Directory = { contents: sampleFiles };
    for (const dir of currentPath.slice(1)) {
      const found = current.contents?.find(item => 
        item.type === 'directory' && item.name === dir
      );
      if (found && found.contents) {
        current = { contents: found.contents };
      } else {
        return { contents: [] };
      }
    }
    return current;
  };

  const handleFileClick = (file: FileItem) => {
    if (file.type === 'directory') {
      setCurrentPath(prev => [...prev, file.name]);
    }
  };

  return (
    <div className="relative w-[600px] bg-gray-900 rounded-lg shadow-xl overflow-hidden">
      {/* Top Bar */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowTerminal(!showTerminal)}
            className="relative inline-flex h-6 w-12 items-center rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 overflow-hidden group"
            style={{ backgroundColor: showTerminal ? '#2563EB' : '#4B5563' }}
          >
            <span className="sr-only">
              {showTerminal ? 'Switch to Finder' : 'Switch to Terminal'}
            </span>
            <div
              className={`absolute h-4 w-4 bg-white/90 rounded-sm transition-transform duration-200 ${
                showTerminal ? 'translate-x-[28px]' : 'translate-x-1'
              }`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] text-white/50 font-mono group-hover:text-white/70 transition-colors">
                ⌘T
              </span>
            </div>
          </button>
          <div className="text-gray-300 text-sm font-mono">~/{currentPath.join('/')}</div>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[400px]">
        {/* Terminal */}
        {showTerminal && (
          <div className="w-full bg-gray-900 p-4 font-mono text-sm">
            <div className="text-gray-400 h-full flex flex-col">
              <div className="flex-grow overflow-y-auto">
                {terminalHistory.map((item, index) => (
                  <div key={index} className="mb-1">
                    <span className="text-green-400">$</span>{' '}
                    <span className="text-white">{item.command}</span>
                    {item.output && (
                      <div className="text-gray-300 mt-1 whitespace-pre">{item.output}</div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
              <form onSubmit={handleTerminalSubmit} className="flex items-center">
                <span className="text-green-400">$</span>
                <input
                  ref={terminalInputRef}
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="bg-transparent text-white ml-2 flex-1 focus:outline-none"
                  placeholder="Type a command..."
                />
              </form>
            </div>
          </div>
        )}

        {/* File Explorer */}
        {!showTerminal && (
          <div className="w-full bg-gray-900 flex">
            {/* Sidebar */}
            <div className="w-48 bg-gray-800 border-r border-gray-700 p-3">
              <div className="space-y-1">
                <div className="text-gray-400 text-xs font-medium mb-2">Favorites</div>
                <div className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 rounded-md p-2 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="text-sm">Documents</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 rounded-md p-2 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="text-sm">Downloads</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 rounded-md p-2 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="text-sm">Projects</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
              {/* Path Bar */}
              <div className="flex items-center space-x-1 text-gray-400 text-sm mb-4">
                {currentPath.map((dir, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                    <span 
                      className="hover:text-gray-300 cursor-pointer"
                      onClick={() => setCurrentPath(currentPath.slice(0, index + 1))}
                    >
                      {dir}
                    </span>
                  </React.Fragment>
                ))}
              </div>

              {/* List View */}
              <div className="space-y-1">
                {getCurrentDirectory().contents?.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
                    onClick={() => handleFileClick(file)}
                  >
                    {file.type === 'directory' ? (
                      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    <span className="text-gray-300 text-sm">{file.name}</span>
                    <span className="text-gray-500 text-xs ml-auto">Today</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevFinderPreview; 