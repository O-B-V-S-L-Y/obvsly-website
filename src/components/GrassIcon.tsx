import React from 'react';

interface GrassIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const GrassIcon: React.FC<GrassIconProps> = ({ 
  className = '',
  width = 120,
  height = 120 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 612 612" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_13_48)">
        <g clipPath="url(#clip0_13_48)">
          <path d="M50 125C50 69.7715 94.7715 25 150 25H462C517.228 25 562 69.7715 562 125V437C562 492.228 517.228 537 462 537H150C94.7715 537 50 492.228 50 437V125Z" fill="url(#paint0_linear_13_48)"/>
          <g filter="url(#filter1_dd_13_48)">
            <g clipPath="url(#clip1_13_48)">
              <path d="M50 49C50 35.7452 60.7452 25 74 25H538C551.255 25 562 35.7452 562 49V513C562 526.255 551.255 537 538 537H74C60.7452 537 50 526.255 50 513V49Z" fill="white" fillOpacity="0.96"/>
              <path d="M50 25H562V537H50V25Z" stroke="#E5E7EB"/>
              <path d="M119 94H493V468H119V94Z" stroke="#E5E7EB"/>
              <path d="M285 302C285 290.402 294.402 281 306 281C317.598 281 327 290.402 327 302V468H285V302Z" fill="url(#paint1_linear_13_48)"/>
              <path d="M285 302C285 290.402 294.402 281 306 281C317.598 281 327 290.402 327 302V468H285V302Z" stroke="#E5E7EB"/>
              <path d="M331 391C331 379.402 340.402 370 352 370C363.598 370 373 379.402 373 391V468H331V391Z" fill="url(#paint2_linear_13_48)"/>
              <path d="M331 391C331 379.402 340.402 370 352 370C363.598 370 373 379.402 373 391V468H331V391Z" stroke="#E5E7EB"/>
              <path d="M377 426H398C409.598 426 419 435.402 419 447C419 458.598 409.598 468 398 468H377V426Z" fill="url(#paint3_linear_13_48)"/>
              <path d="M239 391C239 379.402 248.402 370 260 370C271.598 370 281 379.402 281 391V468H239V391Z" fill="url(#paint4_linear_13_48)"/>
              <path d="M239 391C239 379.402 248.402 370 260 370C271.598 370 281 379.402 281 391V468H239V391Z" stroke="#E5E7EB"/>
              <path d="M200 426.5C200 416.835 207.835 409 217.5 409C227.165 409 235 416.835 235 426.5V468H200V426.5Z" fill="url(#paint5_linear_13_48)"/>
              <path d="M200 426.5C200 416.835 207.835 409 217.5 409C227.165 409 235 416.835 235 426.5V468H200V426.5Z" stroke="#E5E7EB"/>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter id="filter0_d_13_48" x="0" y="0" width="612" height="612" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="25"/>
          <feGaussianBlur stdDeviation="25"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_48"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_48" result="shape"/>
        </filter>
        <filter id="filter1_dd_13_48" x="35" y="20" width="542" height="542" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="10"/>
          <feGaussianBlur stdDeviation="7.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_48"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_13_48" result="effect2_dropShadow_13_48"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_13_48" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_13_48" x1="306" y1="25" x2="306" y2="537" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981"/>
          <stop offset="0.596154" stopColor="#0C8D62"/>
          <stop offset="1" stopColor="#07533A"/>
        </linearGradient>
        <linearGradient id="paint1_linear_13_48" x1="306" y1="281" x2="306" y2="468" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981"/>
          <stop offset="0.596154" stopColor="#0C8D62"/>
          <stop offset="1" stopColor="#07533A"/>
        </linearGradient>
        <linearGradient id="paint2_linear_13_48" x1="352" y1="370" x2="352" y2="468" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981"/>
          <stop offset="0.596154" stopColor="#0C8D62"/>
          <stop offset="1" stopColor="#07533A"/>
        </linearGradient>
        <linearGradient id="paint3_linear_13_48" x1="398" y1="426" x2="398" y2="468" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981"/>
          <stop offset="0.596154" stopColor="#0C8D62"/>
          <stop offset="1" stopColor="#07533A"/>
        </linearGradient>
        <linearGradient id="paint4_linear_13_48" x1="260" y1="370" x2="260" y2="468" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981"/>
          <stop offset="0.596154" stopColor="#0C8D62"/>
          <stop offset="1" stopColor="#07533A"/>
        </linearGradient>
        <linearGradient id="paint5_linear_13_48" x1="217.5" y1="409" x2="217.5" y2="468" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981"/>
          <stop offset="0.596154" stopColor="#0C8D62"/>
          <stop offset="1" stopColor="#07533A"/>
        </linearGradient>
        <clipPath id="clip0_13_48">
          <path d="M50 125C50 69.7715 94.7715 25 150 25H462C517.228 25 562 69.7715 562 125V437C562 492.228 517.228 537 462 537H150C94.7715 537 50 492.228 50 437V125Z" fill="white"/>
        </clipPath>
        <clipPath id="clip1_13_48">
          <path d="M50 49C50 35.7452 60.7452 25 74 25H538C551.255 25 562 35.7452 562 49V513C562 526.255 551.255 537 538 537H74C60.7452 537 50 526.255 50 513V49Z" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default GrassIcon; 