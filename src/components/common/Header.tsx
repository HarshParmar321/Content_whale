'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contentSolutionsOpen, setContentSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleContentSolutions = () => {
    setContentSolutionsOpen(!contentSolutionsOpen);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <header className={`w-full bg-[#ffffff] ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="flex justify-between items-center py-[14px]">
          {/* Logo Section */}
          <div className="flex items-center gap-[40px]">
            <div className="w-[188px] h-[36px] relative">
              <Image 
                src="/images/img_frame.svg" 
                alt="Content Whale Logo" 
                width={188} 
                height={36}
                className="object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-[30px]">
              {/* Content Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleContentSolutions}
                  className="flex items-center gap-[4px] text-[16px] font-lato font-normal leading-[20px] text-[#000000] hover:text-[#42175b] transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={contentSolutionsOpen}
                >
                  Content Solutions
                  <Image 
                    src="/images/img_arrow_down.svg" 
                    alt="" 
                    width={8} 
                    height={8}
                    className={`transition-transform duration-200 ${contentSolutionsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {contentSolutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul role="menu" className="py-2">
                      <li role="menuitem">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SEO Content</a>
                      </li>
                      <li role="menuitem">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog Writing</a>
                      </li>
                      <li role="menuitem">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Translation Services</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleResources}
                  className="flex items-center gap-[4px] text-[16px] font-lato font-normal leading-[20px] text-[#000000] hover:text-[#42175b] transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={resourcesOpen}
                >
                  Resources
                  <Image 
                    src="/images/img_arrow_down.svg" 
                    alt="" 
                    width={8} 
                    height={8}
                    className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {resourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul role="menu" className="py-2">
                      <li role="menuitem">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</a>
                      </li>
                      <li role="menuitem">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Case Studies</a>
                      </li>
                      <li role="menuitem">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Guides</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* About Us */}
              <button 
                role="menuitem"
                className="text-[16px] font-lato font-normal leading-[20px] text-[#000000] hover:text-[#42175b] transition-colors duration-200"
              >
                About Us
              </button>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            {/* Hamburger Menu (Mobile) */}
            <button 
              className="block lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Right Items */}
            <div className="hidden lg:flex items-center">
              {/* Rank On AI */}
              <div className="text-[16px] font-lato font-semibold leading-[20px] bg-[linear-gradient(90deg,#41165a_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                Rank On AI
              </div>

              {/* Link Icon */}
              <div className="ml-[10px]">
                <Image 
                  src="/images/img_fi_891448.svg" 
                  alt="Link" 
                  width={32} 
                  height={32}
                />
              </div>

              {/* CTA Button */}
              <div className="ml-[20px]">
                <Button
                  variant="gradient"
                  className="px-[16px] pr-[34px] py-[8px] text-[16px] font-inter font-medium leading-[20px] rounded-[8px]"
                  rightImage={{
                    src: "/images/img_vector.svg",
                    width: 18,
                    height: 16
                  }}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button className="text-left text-[16px] font-lato font-normal text-[#000000] hover:text-[#42175b]">
                Content Solutions
              </button>
              <button className="text-left text-[16px] font-lato font-normal text-[#000000] hover:text-[#42175b]">
                Resources
              </button>
              <button className="text-left text-[16px] font-lato font-normal text-[#000000] hover:text-[#42175b]">
                About Us
              </button>
              <div className="pt-4 border-t border-gray-200">
                <Button
                  variant="gradient"
                  fullWidth
                  className="text-[16px] font-inter font-medium"
                  rightImage={{
                    src: "/images/img_vector.svg",
                    width: 18,
                    height: 16
                  }}
                >
                  Let's Talk
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;