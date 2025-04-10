import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="8"
        fill="black"
        stroke="#FF00FF"
        strokeWidth="2"
      />
      <path
        d="M10 10H30V15H10V10Z"
        fill="#FF00FF"
      />
      <path
        d="M10 18H20V30H10V18Z"
        fill="#00FFFF"
      />
      <path
        d="M23 18H30V30H23V18Z"
        fill="#FF00FF"
      />
      
      {/* Add glow effect with filter */}
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </svg>
  );
} 