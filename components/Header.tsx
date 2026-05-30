'use client';

import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Profile Photo Circle */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-accent/30 hover:border-accent transition-all duration-300 group">
        <div className="relative w-full h-full flex items-center justify-center">
          <span className="text-xl font-bold text-white">MTD</span>
        </div>
      </div>
      
      {/* Name */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-400">Portfolio</span>
        <span className="text-lg font-bold gradient-text">Mhd Teuku Dzacky Aulia</span>
      </div>
    </div>
  );
}
