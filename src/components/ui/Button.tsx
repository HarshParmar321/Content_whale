'use client';
import React from 'react';
import Image from 'next/image';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
  rightImage?: {
    src: string;
    width: number;
    height: number;
  };
  leftImage?: {
    src: string;
    width: number;
    height: number;
  };
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  loading = false,
  rightImage,
  leftImage,
  ...props
}) => {
  const variants = {
    primary: 'bg-[#42175b] text-white hover:bg-[#5a1f73] active:bg-[#361249] focus:ring-[#42175b]',
    secondary: 'bg-[#fbbc04] text-black hover:bg-[#e6a700] active:bg-[#cc9300] focus:ring-[#fbbc04]',
    outline: 'border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300',
    ghost: 'text-gray-700 bg-transparent hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300',
    gradient: 'bg-[linear-gradient(138deg,#42175b_0%,#8b30c1_100%)] text-white hover:opacity-90 active:opacity-80 focus:ring-purple-500',
    link: 'text-blue-600 bg-transparent hover:text-blue-800 hover:underline active:text-blue-900 focus:ring-blue-300'
  };
  

  const sizes = {
    xs: 'px-2 py-1 text-xs sm:px-2.5 sm:py-1.5 sm:text-xs',
    sm: 'px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm md:text-sm',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base md:text-base',
    lg: 'px-4 py-2.5 text-base sm:px-5 sm:py-3 sm:text-lg md:text-lg lg:text-xl',
    xl: 'px-5 py-3 text-lg sm:px-6 sm:py-4 sm:text-xl md:text-xl lg:text-2xl'
  };

  const responsiveRadius = 'rounded sm:rounded-md md:rounded-lg';
  const responsiveFocus = 'focus:ring-2 sm:focus:ring-2 md:focus:ring-4';

  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={`
        ${responsiveRadius}
        transition-all 
        duration-200 
        ease-in-out
        focus:outline-none 
        ${responsiveFocus}
        focus:ring-opacity-50
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'} 
        ${loading ? 'relative' : ''}
        font-medium
        inline-flex
        items-center
        justify-center
        min-h-[44px] sm:min-h-[48px]
        touch-manipulation
        gap-[8px]
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {leftImage && !loading && (
        <Image 
          src={leftImage.src} 
          alt="" 
          width={leftImage.width} 
          height={leftImage.height}
          className="flex-shrink-0"
        />
      )}
      <span className={loading ? 'opacity-75' : ''}>{children}</span>
      {rightImage && !loading && (
        <Image 
          src={rightImage.src} 
          alt="" 
          width={rightImage.width} 
          height={rightImage.height}
          className="flex-shrink-0"
        />
      )}
    </button>
  );
};

export default Button;