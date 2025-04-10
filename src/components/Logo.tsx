import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`font-display text-white flex flex-col items-center ${className}`} style={{scale: 0.8}}>
      <div className="grid grid-cols-3 gap-1">
        <div className="text-2xl font-bold">O</div>
        <div className="text-2xl font-bold">B</div>
        <div className="text-2xl font-bold">V</div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="text-2xl font-bold">S</div>
        <div className="text-2xl font-bold">L</div>
        <div className="text-2xl font-bold">Y</div>
      </div>
    </div>
  );
} 