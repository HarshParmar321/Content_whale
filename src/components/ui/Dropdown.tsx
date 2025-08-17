'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface DropdownProps {
  placeholder?: string;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  rightImage?: {
    src: string;
    width: number;
    height: number;
  };
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder = "Select an option",
  options = ["Option 1", "Option 2", "Option 3"],
  value,
  onChange,
  disabled = false,
  className = '',
  rightImage
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={`
          w-full
          flex
          items-center
          justify-between
          px-[22px] py-[14px]
          text-left
          text-[18px] font-medium leading-[22px]
          font-inter
          text-[#000000]
          bg-[#ffffff]
          border border-[#000000]
          rounded-[5px]
          transition-all
          duration-200
          ease-in-out
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-transparent
          min-h-[44px] sm:min-h-[48px]
          touch-manipulation
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50 active:bg-gray-100'}
          ${isOpen ? 'ring-2 ring-blue-500 border-transparent' : ''}
        `.trim().replace(/\s+/g, ' ')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        <span className={selectedValue ? 'text-[#000000]' : 'text-gray-500'}>
          {selectedValue || placeholder}
        </span>
        {rightImage && (
          <Image 
            src={rightImage.src} 
            alt="" 
            width={rightImage.width} 
            height={rightImage.height}
            className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul role="listbox" className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                role="option"
                aria-selected={selectedValue === option}
                onClick={() => handleSelect(option)}
                className={`
                  px-4 py-2
                  text-[16px] font-medium
                  cursor-pointer
                  transition-colors
                  duration-150
                  hover:bg-blue-50
                  active:bg-blue-100
                  ${selectedValue === option ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}
                `.trim().replace(/\s+/g, ' ')}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;