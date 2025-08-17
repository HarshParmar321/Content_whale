'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface SliderProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  itemsPerView?: number;
}

const Slider: React.FC<SliderProps> = ({
  children,
  className = '',
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  itemsPerView = 1
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);
  const totalItems = childrenArray.length;

  useEffect(() => {
    if (autoPlay && totalItems > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === totalItems - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, totalItems]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalItems - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === totalItems - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Navigation Arrows */}
      {showNavigation && totalItems > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-[28px] h-[28px] flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <Image 
              src="/images/img_frame_black_900.svg" 
              alt="Previous" 
              width={28} 
              height={28}
            />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-[28px] h-[28px] flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <Image 
              src="/images/img_arrow_right_black_900.svg" 
              alt="Next" 
              width={28} 
              height={28}
            />
          </button>
        </>
      )}

      {/* Slider Content */}
      <div 
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          width: `${(totalItems * 100) / itemsPerView}%`
        }}
      >
        {childrenArray.map((child, index) => (
          <div 
            key={index} 
            className="flex-shrink-0"
            style={{ width: `${100 / totalItems}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      {totalItems > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-[#42175b] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;