'use client';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Profile Photo Circle */}
      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
        <img 
          src="/profile.png" 
          alt="Mhd Teuku Dzacky Aulia" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Name */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-400">Portfolio</span>
        <span className="text-lg font-bold gradient-text">Mhd Teuku Dzacky Aulia</span>
      </div>
    </div>
  );
}
