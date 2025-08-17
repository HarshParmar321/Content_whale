'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';
import Slider from '@/components/ui/Slider';
import { motion } from 'framer-motion';

interface TestimonialData {
  id: number;
  content: string;
  author: string;
  date: string;
  avatar: string;
}
interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}
interface FeaturedPost {
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string;
  titleColor: string;
}
interface PricingSectionData {
  layout: string;
  heading: string;
  subheading: string;
  calculator?: {
    label: string;
    fields: Array<{
      label: string;
      placeholder: string;
      options?: string[];
      recommended?: boolean;
    }>;
    price: string;
    unit: string;
  };
  plans: Array<{
    name: string;
    price: string;
    features: string[];
    isPopular?: boolean;
  }>;
}



const ContentWhalePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Content Writing');
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<FeaturedPost[]>([]);
  const [pricingSections, setPricingSections] = useState<Record<string, PricingSectionData>>({});
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data.testimonials || []);
        setPricingPlans(data.pricingPlans || []);
        setFeaturedPosts(data.featuredPosts || []);
        setPricingSections(data.pricingSections || {});
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleFieldChange = (fieldLabel: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [fieldLabel]: value,
    }));
  };

  const handleTestimonialChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else {
      setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  const handleFAQToggle = (faqIndex: number) => {
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
  };

  return (
    <div className="w-full bg-[#ffffff] flex flex-col items-center">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white w-full">
        <Header />
      </div>
      {/* Hero Section */}
      <section
        className="w-full relative"
        style={{
          backgroundImage: "url('/images/img_circles1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-[126px] pb-[92px]">
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-[52px] mb-[100px]">
            <div className="flex flex-col items-center gap-[20px] px-3 sm:px-6">
              <div className="flex flex-col items-center gap-[18px]">
                <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-inter font-medium leading-[15px] sm:leading-[20px] md:leading-[25px] lg:leading-[30px] text-center text-[#eaa700]">
                  We bring you,
                </p>
                <div className="flex flex-col gap-[17px] sm:gap-[24px] md:gap-[30px] lg:gap-[34px]">
                  <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-serif font-semibold leading-[48px] sm:leading-[64px] md:leading-[80px] lg:leading-[97px] text-center">
                    <span className="text-[#353535]">Textual Content Solutions For</span>
                    <br />
                    <span className="bg-[linear-gradient(90deg,#41165a_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                      All Business Communications!
                    </span>
                  </h1>
                  <p className="mx-auto text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-satoshi font-medium leading-[16px] sm:leading-[21px] md:leading-[27px] lg:leading-[32px] text-center text-[#626262] max-w-[874px]">
                    We provide professional content writing, SEO content, and translation services
                    for effective communication, maximum reach, and global impact.
                  </p>
                </div>
              </div>
              <Button
                variant="primary"
                className="bg-[#42175b] text-white px-[34px] py-[12px] text-[16px] font-inter font-medium leading-[21px] rounded-[10px] hover:bg-[#5a1f73] transition-colors duration-200"
              >
                Connect With Us
              </Button>
            </div>
            {/* Trusted Brands */}
            <div className="flex flex-col items-center gap-[12px]">
              <p className="text-[16px] sm:text-[18px] md:text-[21px] font-roboto font-bold leading-[20px] sm:leading-[23px] md:leading-[26px] text-center text-[#000000]">
                <span className="text-[#000000]">Trusted by </span>
                <span className="text-[#fbba18]">2,000+ Brands</span>
              </p>
              <div className="flex flex-wrap justify-center items-center gap-[17px] sm:gap-[24px] md:gap-[34px]">
                <Image
                  src="/images/img_frame_gray_800.svg"
                  alt="Brand 1"
                  width={106}
                  height={34}
                  className="w-[80px] sm:w-[90px] md:w-[106px] h-auto"
                />
                <Image
                  src="/images/img_ebene_1.svg"
                  alt="Brand 2"
                  width={106}
                  height={34}
                  className="w-[80px] sm:w-[90px] md:w-[106px] h-auto"
                />
                <Image
                  src="/images/img_frame_1116601021.svg"
                  alt="Brand 3"
                  width={106}
                  height={34}
                  className="w-[80px] sm:w-[90px] md:w-[106px] h-auto"
                />
                <div className="flex items-center gap-[8px] p-[6px]">
                  <Image
                    src="/images/img_group_1116599824.svg"
                    alt="Brand 4a"
                    width={30}
                    height={20}
                  />
                  <Image
                    src="/images/img_group_1116599823.svg"
                    alt="Brand 4b"
                    width={40}
                    height={10}
                  />
                </div>
                <Image
                  src="/images/img_frame_gray_800_34x106.svg"
                  alt="Brand 5"
                  width={106}
                  height={34}
                  className="w-[80px] sm:w-[90px] md:w-[106px] h-auto"
                />
                <Image
                  src="/images/img_frame_1116599756.svg"
                  alt="Brand 6"
                  width={106}
                  height={34}
                  className="w-[80px] sm:w-[90px] md:w-[106px] h-auto"
                />
                <Image
                  src="/images/img_frame_34x106.svg"
                  alt="Brand 7"
                  width={106}
                  height={34}
                  className="w-[80px] sm:w-[90px] md:w-[106px] h-auto"
                />
                <Image
                  src="/images/img_frame_1116599755.svg"
                  alt="Brand 8"
                  width={106}
                  height={34}
                  className="w-[80px] sm:w-[90px] md:w-[106px] h-auto"
                />
              </div>
            </div>
          </div>
          {/* Services Section */}
          <div className="flex flex-col items-center gap-[36px] px-4 sm:px-6 lg:px-[56px]">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-serif font-semibold leading-[30px] sm:leading-[40px] md:leading-[51px] text-center text-[#353535]">
              <span className="text-[#353535]">Choose the Solution </span>
              <span className="bg-[linear-gradient(90deg,#41175b_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                that Best Suits You
              </span>
            </h2>
            {/* Service Cards - Updated to be significantly wider with more spacious layouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] sm:gap-[40px] md:gap-[50px] w-full max-w-[1400px]">
              {/* Content Writing Card - Updated with wider dimensions and more spacious layout */}
              <div className="relative border border-[#b0b0b0] rounded-[16px] overflow-hidden">
                <div className="bg-[linear-gradient(218deg,#ffffff_0%,#f1daff_100%)] p-[32px] sm:p-[40px] md:p-[48px] rounded-[16px] h-[350px] sm:h-[400px] md:h-[480px] flex flex-col">
                  <div className="flex flex-col gap-[16px] mb-auto">
                    <Image
                      src="/images/img_fi_8779133.svg"
                      alt="Content Writing"
                      width={56}
                      height={56}
                    />
                    <h3 className="text-[26px] sm:text-[30px] md:text-[36px] font-serif font-semibold leading-[32px] sm:leading-[38px] md:leading-[46px] bg-[linear-gradient(52deg,#42175b_0%,#7e07c2_100%)] bg-clip-text text-transparent">
                      Content Writing
                    </h3>
                  </div>
                </div>
                {/* Updated bottom section with proper mobile and desktop mockups - wider spacing */}
                <div className="absolute bottom-0 left-0 right-0 flex gap-[20px] p-[16px]">
                  <div className="flex flex-col gap-[16px] flex-1">
                    {/* Mobile mockup - enhanced with more spacing */}
                    <div className="bg-white rounded-[14px] p-[12px] shadow-md border border-[#e0e0e0]">
                      <div className="bg-[#f8f8f8] rounded-[10px] p-[10px] h-[90px] flex flex-col justify-center">
                        <div className="w-full h-[5px] bg-[#42175b] rounded mb-[6px]"></div>
                        <div className="w-[85%] h-[4px] bg-[#ccc] rounded mb-[3px]"></div>
                        <div className="w-[65%] h-[4px] bg-[#ccc] rounded mb-[3px]"></div>
                        <p className="text-[10px] font-medium text-[#42175b] mt-[6px]">
                          Corporate Company Profile
                        </p>
                      </div>
                    </div>
                    {/* Additional mobile mockup - wider */}
                    <div className="bg-white rounded-[14px] p-[12px] shadow-md border border-[#e0e0e0] w-[90%] ml-auto">
                      <div className="bg-[#f5f5f5] rounded-[10px] p-[10px] h-[70px] flex flex-col justify-center">
                        <div className="w-full h-[4px] bg-[#666] rounded mb-[4px]"></div>
                        <div className="w-[95%] h-[3px] bg-[#aaa] rounded mb-[3px]"></div>
                        <div className="w-[75%] h-[3px] bg-[#aaa] rounded"></div>
                      </div>
                    </div>
                  </div>
                  {/* Desktop mockup - wider with more content space */}
                  <div className="bg-white rounded-[14px] p-[12px] shadow-md border border-[#e0e0e0] w-[52%]">
                    <div className="bg-[#fafafa] rounded-[10px] p-[12px] h-[140px] flex flex-col">
                      <div className="w-full h-[7px] bg-[#42175b] rounded mb-[8px]"></div>
                      <div className="grid grid-cols-2 gap-[6px] mb-[8px]">
                        <div className="h-[4px] bg-[#ddd] rounded"></div>
                        <div className="h-[4px] bg-[#ddd] rounded"></div>
                      </div>
                      <div className="w-[90%] h-[4px] bg-[#ddd] rounded mb-[4px]"></div>
                      <div className="w-[80%] h-[4px] bg-[#ddd] rounded mb-[10px]"></div>
                      <p className="text-[11px] font-medium text-[#42175b]">
                        Corporate Company Profile
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* SEO Services Card - Updated with wider dimensions and more spacious layout */}
              <div className="relative border border-[#b0b0b0] rounded-[16px] overflow-hidden">
                <div className="bg-[linear-gradient(164deg,#ffffff_0%,#d6eefe_100%)] p-[32px] sm:p-[40px] md:p-[48px] rounded-[16px] h-[350px] sm:h-[400px] md:h-[480px] flex flex-col">
                  <div className="flex flex-col gap-[12px] mb-auto">
                    <Image
                      src="/images/img_fi_41861.svg"
                      alt="SEO Services"
                      width={56}
                      height={56}
                    />
                    <h3 className="text-[26px] sm:text-[30px] md:text-[36px] font-serif font-semibold leading-[32px] sm:leading-[38px] md:leading-[46px] bg-[linear-gradient(125deg,#0c79b5_0%,#3dbaff_100%)] bg-clip-text text-transparent">
                      SEO Services
                    </h3>
                  </div>
                </div>
                {/* Updated bottom section with proper traffic growth chart and statistics - wider spacing */}
                <div className="absolute bottom-0 left-0 right-0 p-[20px]">
                  <div className="flex flex-col gap-[20px]">
                    {/* Main Traffic Growth Chart - Enhanced with wider dimensions */}
                    <div className="bg-white rounded-[14px] p-[20px] shadow-[3px_6px_12px_#00000025] border border-[#e5e5e5] ml-auto w-[80%]">
                      <div className="flex items-end gap-[12px]">
                        <div className="flex flex-col">
                          <p className="text-[32px] sm:text-[36px] md:text-[42px] font-serif font-bold leading-[36px] sm:leading-[40px] md:leading-[46px] text-[#0b9aea]">
                            40%
                          </p>
                          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-lato font-bold leading-[16px] sm:leading-[18px] md:leading-[20px] text-[#000000]">
                            Traffic
                            <br />
                            Growth
                          </p>
                        </div>
                        <div className="flex items-end gap-[4px] h-[70px] ml-[16px]">
                          <div className="w-[18px] h-[40px] bg-[#0097ea] rounded-[4px]"></div>
                          <div className="w-[18px] h-[52px] bg-[#0097ea] rounded-[4px]"></div>
                          <div className="w-[18px] h-[32px] bg-[#0097ea] rounded-[4px]"></div>
                          <div className="w-[18px] h-[24px] bg-[#0097ea] rounded-[4px]"></div>
                          <div className="w-[18px] h-[44px] bg-[#0097ea] rounded-[4px]"></div>
                          <div className="w-[18px] h-[64px] bg-[#0097ea] rounded-[4px]"></div>
                          <div className="w-[18px] h-[36px] bg-[#0097ea] rounded-[4px]"></div>
                        </div>
                      </div>
                    </div>

                    {/* SEO Tools and Analytics Preview - enhanced spacing */}
                    <div className="bg-white rounded-[12px] p-[18px] shadow-[3px_6px_8px_#00000025] border border-[#e0e0e0]">
                      <div className="flex justify-between items-center mb-[12px]">
                        <p className="text-[16px] sm:text-[17px] md:text-[18px] font-serif font-semibold leading-[20px] sm:leading-[21px] md:leading-[22px] text-[#30a9eb]">
                          SEO Analytics
                        </p>
                        <div className="flex items-center gap-[6px]">
                          <div className="w-[8px] h-[8px] bg-[#00d084] rounded-full"></div>
                          <p className="text-[10px] sm:text-[11px] font-lato font-medium leading-[12px] text-[#00d084]">
                            Live
                          </p>
                        </div>
                      </div>
                      <div className="space-y-[10px]">
                        <div className="flex justify-between items-center">
                          <p className="text-[12px] sm:text-[13px] font-lato font-medium text-[#666]">
                            Keyword Rank
                          </p>
                          <p className="text-[12px] sm:text-[13px] font-lato font-bold text-[#0097ea]">
                            ↗ +23
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-[12px] sm:text-[13px] font-lato font-medium text-[#666]">
                            Organic Traffic
                          </p>
                          <p className="text-[12px] sm:text-[13px] font-lato font-bold text-[#0097ea]">
                            ↗ +45%
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-[12px] sm:text-[13px] font-lato font-medium text-[#666]">
                            SERP Position
                          </p>
                          <p className="text-[12px] sm:text-[13px] font-lato font-bold text-[#0097ea]">
                            ↗ Top 5
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Expected Traffic Growth - Enhanced with wider dimensions */}
                    <div className="bg-white rounded-[12px] p-[20px] shadow-[3px_6px_12px_#00000030] border border-[#e0e0e0] ml-auto w-[60%]">
                      <div className="text-center">
                        <p className="text-[13px] sm:text-[14px] md:text-[15px] font-lato font-bold leading-[16px] sm:leading-[17px] md:leading-[18px] text-[#000000] mb-[6px]">
                          Expected Traffic
                        </p>
                        <p className="text-[26px] sm:text-[28px] md:text-[32px] font-serif font-bold leading-[32px] sm:leading-[34px] md:leading-[38px] text-[#0b9aea]">
                          125%
                        </p>
                        <div className="mt-[10px]">
                          <div className="flex justify-center items-end gap-[3px] h-[30px]">
                            <div className="w-[10px] h-[18px] bg-[#0097ea] rounded-[3px]"></div>
                            <div className="w-[10px] h-[24px] bg-[#0097ea] rounded-[3px]"></div>
                            <div className="w-[10px] h-[14px] bg-[#0097ea] rounded-[3px]"></div>
                            <div className="w-[10px] h-[21px] bg-[#0097ea] rounded-[3px]"></div>
                            <div className="w-[10px] h-[30px] bg-[#0097ea] rounded-[3px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Translation Card - Updated with wider dimensions and more spacious layout */}
              <div className="relative border border-[#b0b0b0] rounded-[16px] overflow-hidden">
                <div className="bg-[linear-gradient(153deg,#ffffff_0%,#fdf2d6_100%)] p-[32px] sm:p-[40px] md:p-[48px] rounded-[16px] h-[350px] sm:h-[400px] md:h-[480px] flex flex-col">
                  <div className="flex flex-col gap-[12px] mb-auto">
                    <Image
                      src="/images/img_fi_484582.svg"
                      alt="Translation"
                      width={56}
                      height={56}
                    />
                    <h3 className="text-[26px] sm:text-[30px] md:text-[36px] font-serif font-semibold leading-[32px] sm:leading-[38px] md:leading-[46px] bg-[linear-gradient(130deg,#fbba18_0%,#fca000_100%)] bg-clip-text text-transparent">
                      Translation
                    </h3>
                  </div>
                </div>
                {/* Updated bottom section with proper language support and expert writers - wider spacing */}
                <div className="absolute bottom-0 left-0 right-0 p-[20px]">
                  <div className="flex gap-[20px]">
                    {/* Translation Preview Tool - enhanced with wider dimensions */}
                    <div className="bg-white rounded-[14px] p-[20px] shadow-[3px_6px_12px_#00000030] border border-[#e0e0e0] flex-1">
                      <div className="text-center mb-[16px]">
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] font-lato font-semibold leading-[18px] sm:leading-[19px] md:leading-[20px] text-[#1e1e1e]">
                          Quick Translation
                        </p>
                      </div>
                      <div className="space-y-[12px]">
                        <div className="bg-[#f8f8f8] rounded-[10px] p-[12px] border border-[#e0e0e0]">
                          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-lato font-semibold leading-[14px] text-[#fda403] mb-[8px]">
                            English
                          </p>
                          <p className="text-[9px] sm:text-[10px] md:text-[11px] font-lato font-medium leading-[11px] sm:leading-[12px] md:leading-[13px] text-[#666]">
                            Professional content writing services for global reach.
                          </p>
                        </div>
                        <div className="text-center py-[4px]">
                          <div className="w-full h-[1px] bg-[#ddd] relative">
                            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-[8px] text-[9px] text-[#666]">
                              ↓
                            </span>
                          </div>
                        </div>
                        <div className="bg-[#f8f8f8] rounded-[10px] p-[12px] border border-[#e0e0e0]">
                          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-lato font-semibold leading-[14px] text-[#fda403] mb-[8px]">
                            Español
                          </p>
                          <p className="text-[9px] sm:text-[10px] md:text-[11px] font-lato font-medium leading-[11px] sm:leading-[12px] md:leading-[13px] text-[#666]">
                            Servicios de redacción de contenido profesional para alcance global.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Language Support and Expert Writers Stats - enhanced spacing */}
                    <div className="flex flex-col gap-[16px] w-[48%]">
                      {/* 40+ Supported Languages with flags - wider dimensions */}
                      <div className="bg-white rounded-[14px] p-[16px] border border-[#e0e0e0] shadow-[3px_6px_8px_#00000025]">
                        <div className="flex flex-col">
                          <p className="text-[24px] sm:text-[26px] md:text-[30px] font-serif font-bold leading-[30px] sm:leading-[32px] md:leading-[36px] text-[#fcae0c] mb-[6px]">
                            40+
                          </p>
                          <p className="text-[13px] sm:text-[14px] md:text-[15px] font-lato font-bold leading-[15px] sm:leading-[16px] md:leading-[17px] text-[#000000] mb-[10px]">
                            Supported
                            <br />
                            languages
                          </p>
                          {/* Country flags representation - enhanced grid */}
                          <div className="grid grid-cols-6 gap-[4px] mb-[8px]">
                            <div className="w-[14px] h-[10px] bg-[#000000] rounded-[2px] relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#000000]"></div>
                              <div className="absolute top-[3px] left-0 w-full h-[2px] bg-[#dd0000]"></div>
                              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ffce00]"></div>
                            </div>
                            <div className="w-[14px] h-[10px] bg-[#aa151b] rounded-[2px] relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#aa151b]"></div>
                              <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#f1bf00]"></div>
                            </div>
                            <div className="w-[14px] h-[10px] bg-[#0055a4] rounded-[2px] relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-[4px] h-full bg-[#0055a4]"></div>
                              <div className="absolute top-0 left-[4px] w-[4px] h-full bg-[#ffffff]"></div>
                              <div className="absolute top-0 right-0 w-[4px] h-full bg-[#ef4135]"></div>
                            </div>
                            <div className="w-[14px] h-[10px] bg-[#ff9933] rounded-[2px] relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#ff9933]"></div>
                              <div className="absolute top-[3px] left-0 w-full h-[2px] bg-[#ffffff]"></div>
                              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#138808]"></div>
                            </div>
                            <div className="w-[14px] h-[10px] bg-[#c8102e] rounded-[2px]"></div>
                            <div className="w-[14px] h-[10px] bg-[#006a4e] rounded-[2px]"></div>
                          </div>
                          <div className="text-center">
                            <p className="text-[9px] sm:text-[10px] font-lato font-medium text-[#666]">
                              DE, ES, FR, IN, CN, JP...
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 1000+ Expert Writers - wider dimensions */}
                      <div className="bg-white rounded-[14px] p-[16px] border border-[#e0e0e0] shadow-[3px_6px_8px_#00000025]">
                        <div className="flex flex-col">
                          <p className="text-[24px] sm:text-[26px] md:text-[30px] font-serif font-bold leading-[30px] sm:leading-[32px] md:leading-[36px] text-[#fcae0c] mb-[4px]">
                            1000+
                          </p>
                          <p className="text-[13px] sm:text-[14px] md:text-[15px] font-lato font-bold leading-[15px] sm:leading-[16px] md:leading-[17px] text-[#000000] mb-[10px]">
                            Expert Writers
                          </p>
                          {/* Writer icons representation - enhanced spacing */}
                          <div className="flex justify-center items-center gap-[4px] mb-[8px]">
                            <div className="w-[16px] h-[16px] bg-[#fcae0c] rounded-full flex items-center justify-center">
                              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                            </div>
                            <div className="w-[16px] h-[16px] bg-[#42175b] rounded-full flex items-center justify-center">
                              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                            </div>
                            <div className="w-[16px] h-[16px] bg-[#0097ea] rounded-full flex items-center justify-center">
                              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-[9px] sm:text-[10px] font-lato font-medium text-[#666]">
                              Native speakers worldwide
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-[80px]">
        <div className="flex flex-col items-center gap-[28px]">
          {/* Pricing Header */}
          <div className="flex flex-col items-center gap-[8px] px-4 sm:px-6 lg:px-[56px]">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-serif font-semibold leading-[30px] sm:leading-[40px] md:leading-[51px] text-center text-[#353535]">
              {pricingSections[activeTab]?.heading ||
                'Industry-Leading Quality at Affordable Rates'}
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[25px] text-center text-[#000000]">
              {pricingSections[activeTab]?.subheading ||
                'Starting at 1.5/word for content writing solutions. No contracts, no commitments.'}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-col items-center px-4 sm:px-6 lg:px-[56px]">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white border border-[#878787] rounded-full p-1">
              {['Content Writing', 'SEO Writing', 'Translation'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-[11px] sm:text-[12px] md:text-[14px] font-lato font-normal ${
                    activeTab === tab
                      ? 'bg-[#42175b] text-white font-semibold'
                      : 'text-black hover:text-[#42175b]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content Writing Layout - Calculator + What's Included */}
          {activeTab === 'Content Writing' && pricingSections[activeTab] && (
            <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-[42px] px-4 sm:px-6 lg:px-[56px]">
              {/* Pricing Calculator */}
              {pricingSections[activeTab].calculator && (
                <div className="bg-[linear-gradient(136deg,#ffffff_0%,#f9f0ff_100%)] border-2 border-[#dfdfdf] rounded-[12px] p-[42px] flex-1 max-w-[600px] shadow-lg">
                  <div className="flex flex-col gap-[18px]">
                    <div className="flex flex-col gap-[26px]">
                      <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-inter font-medium leading-[22px] sm:leading-[24px] md:leading-[27px] text-[#000000]">
                        {pricingSections[activeTab].calculator.label}
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-[24px]">
                        {pricingSections[activeTab].calculator.fields.map((field, index) => (
                          <div key={index} className="flex flex-col gap-[24px] flex-1">
                            <div>
                              <label className="text-[16px] font-roboto font-normal leading-[19px] text-[#000000] block mb-[8px]">
                                {field.label}
                              </label>
                              {field.options ? (
                                <Dropdown
                                  placeholder={field.placeholder}
                                  options={field.options}
                                  value={selectedValues[field.label] || ''}
                                  onChange={(value) => handleFieldChange(field.label, value)}
                                  rightImage={{
                                    src: '/images/img_arrowdown_black_900.svg',
                                    width: 10,
                                    height: 8,
                                  }}
                                  className="mr-[22px]"
                                />
                              ) : (
                                <div className="border border-[#000000] rounded-[5px] p-[12px] bg-white flex justify-between items-center">
                                  <span className="text-[18px] font-inter font-medium leading-[22px] text-[#000000]">
                                    {field.placeholder}
                                  </span>
                                  {field.recommended && (
                                    <span className="text-[16px] font-inter font-normal leading-[20px] text-[#a4a4a4]">
                                      recommended
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      <p className="text-[16px] font-inter font-medium leading-[20px] text-[#000000]">
                        Your price
                      </p>
                      <div className="flex items-start gap-[8px] mt-[-6px]">
                        <span className="text-[24px] font-roboto font-normal leading-[29px] text-[#000000] mt-[18px]">
                          ₹
                        </span>
                        <span className="text-[48px] sm:text-[60px] md:text-[72px] font-serif font-semibold leading-[60px] sm:leading-[75px] md:leading-[91px] bg-[linear-gradient(90deg,#41165a_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                          {pricingSections[activeTab].calculator.price}
                        </span>
                        <span className="text-[16px] font-inter font-medium leading-[20px] text-[#000000] self-end mb-[24px] ml-[8px]">
                          {pricingSections[activeTab].calculator.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Vertical Divider */}
              <div className="w-[1px] h-[304px] bg-[#dfdfdf] hidden lg:block transition-smooth"></div>

              {/* What's Included */}
              <div className="flex flex-col gap-[22px] w-full max-w-[300px]">
                <div className="flex flex-col gap-[24px]">
                  <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-inter font-medium leading-[22px] sm:leading-[24px] md:leading-[27px] text-[#000000]">
                    What's Included
                  </h3>
                  <div className="flex flex-col gap-[18px]">
                    {[
                      'SEO-Optimization',
                      '0% Plagiarism [With Report]',
                      '100% AI-free content',
                      'Free revisions',
                      '48 hours delivery',
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-[10px]">
                        <Image
                          src="/images/img_group_1116599827.svg"
                          alt="Check"
                          width={24}
                          height={24}
                        />
                        <span className="text-[16px] font-inter font-medium leading-[20px] text-[#000000]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="bg-[#fbba18] hover:bg-[#e6a815] text-white px-[34px] py-[6px] text-[18px] font-inter font-medium leading-[23px] rounded-[8px] transition-bounce"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}

          {/* SEO Writing Layout - Only Plans */}
          {activeTab === 'SEO Writing' &&
            pricingSections[activeTab] &&
            pricingSections[activeTab].plans && (
              <div className="w-full px-4 sm:px-6 lg:px-[56px]">
                <div className="flex justify-center">
                  <div className="overflow-x-auto scrollbar-hide max-w-full">
                    <div className="flex gap-[16px] sm:gap-[18px] min-w-max pb-4">
                      {pricingSections[activeTab].plans.map((plan, index) => (
                        <div
                          key={index}
                          className={`w-[280px] sm:w-[300px] md:w-[354px] border-2 border-[#dfdfdf] rounded-[16px] p-[16px] sm:p-[20px] md:p-[24px] shadow-[1px_2px_6px_#00000019] transition-all duration-300 hover:scale-105 hover:shadow-lg flex-shrink-0 ${
                            plan.isPopular
                              ? 'bg-[linear-gradient(223deg,#c0e8ff_0%,#ffffff_100%)] shadow-[1px_2px_6px_#00000028]'
                              : 'bg-white'
                          }`}
                        >
                          <div className="flex flex-col gap-[6px] mb-[50px] sm:mb-[70px] md:mb-[90px]">
                            <div className="flex flex-col gap-[6px] sm:gap-[8px] items-center">
                              <h4 className="text-[18px] sm:text-[20px] md:text-[25px] font-satoshi font-medium leading-[22px] sm:leading-[26px] md:leading-[34px] text-[#000000] text-center">
                                {plan.name}
                              </h4>
                              <div className="flex items-start">
                                <span className="text-[18px] sm:text-[20px] md:text-[25px] font-roboto font-normal leading-[22px] sm:leading-[24px] md:leading-[29px] tracking-[1px] text-[#000000] mt-[10px] sm:mt-[12px] md:mt-[16px]">
                                  ₹
                                </span>
                                <span
                                  className={`text-[36px] sm:text-[48px] md:text-[64px] font-serif font-semibold leading-[44px] sm:leading-[60px] md:leading-[80px] ${
                                    plan.isPopular
                                      ? 'bg-[linear-gradient(141deg,#085681_0%,#e34e49_50%,#fbbb17_100%)]'
                                      : 'bg-[linear-gradient(141deg,#41165a_0%,#e34e49_50%,#fbbb17_100%)]'
                                  } bg-clip-text text-transparent`}
                                >
                                  {plan.price}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] sm:gap-[10px] md:gap-[12px]">
                              {plan.features.map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px]"
                                >
                                  <Image
                                    src={
                                      plan.isPopular
                                        ? '/images/img_group_1116599827_amber_600.svg'
                                        : '/images/img_group_1116599827.svg'
                                    }
                                    alt="Check"
                                    width={20}
                                    height={20}
                                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[24px] md:h-[24px] flex-shrink-0"
                                  />
                                  <span
                                    className={`text-[13px] sm:text-[14px] md:text-[16px] font-inter leading-[16px] sm:leading-[18px] md:leading-[20px] ${
                                      featureIndex > 0 && plan.isPopular
                                        ? featureIndex === 1
                                          ? 'font-medium bg-[linear-gradient(135deg,#701960_0%,#fcbc19_100%)] bg-clip-text text-transparent'
                                          : 'font-semibold text-[#451661]'
                                        : 'font-medium text-[#000000]'
                                    }`}
                                  >
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

          {/* Translation Layout - Calculator + What's Included */}
          {activeTab === 'Translation' && pricingSections[activeTab] && (
            <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-[42px] px-4 sm:px-6 lg:px-[56px]">
              {/* Pricing Calculator */}
              {pricingSections[activeTab].calculator && (
                <div className="bg-[linear-gradient(136deg,#ffffff_0%,#f9f0ff_100%)] border-2 border-[#dfdfdf] rounded-[12px] p-[42px] flex-1 max-w-[600px] shadow-lg">
                  <div className="flex flex-col gap-[18px]">
                    <div className="flex flex-col gap-[26px]">
                      <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-inter font-medium leading-[22px] sm:leading-[24px] md:leading-[27px] text-[#000000]">
                        {pricingSections[activeTab].calculator.label}
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-[24px]">
                        {pricingSections[activeTab].calculator.fields.map((field, index) => (
                          <div key={index} className="flex flex-col gap-[24px] flex-1">
                            <div>
                              <label className="text-[16px] font-roboto font-normal leading-[19px] text-[#000000] block mb-[8px]">
                                {field.label}
                              </label>
                              {field.options ? (
                                <Dropdown
                                  placeholder={field.placeholder}
                                  options={field.options}
                                  value={selectedValues[field.label] || ''}
                                  onChange={(value) => handleFieldChange(field.label, value)}
                                  rightImage={{
                                    src: '/images/img_arrowdown_black_900.svg',
                                    width: 10,
                                    height: 8,
                                  }}
                                  className="mr-[22px]"
                                />
                              ) : (
                                <div className="border border-[#000000] rounded-[5px] p-[12px] bg-white flex justify-between items-center">
                                  <span className="text-[18px] font-inter font-medium leading-[22px] text-[#000000]">
                                    {field.placeholder}
                                  </span>
                                  {field.recommended && (
                                    <span className="text-[16px] font-inter font-normal leading-[20px] text-[#a4a4a4]">
                                      recommended
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      <p className="text-[16px] font-inter font-medium leading-[20px] text-[#000000]">
                        Your price
                      </p>
                      <div className="flex items-start gap-[8px] mt-[-6px]">
                        <span className="text-[24px] font-roboto font-normal leading-[29px] text-[#000000] mt-[18px]">
                          ₹
                        </span>
                        <span className="text-[48px] sm:text-[60px] md:text-[72px] font-serif font-semibold leading-[60px] sm:leading-[75px] md:leading-[91px] bg-[linear-gradient(90deg,#41165a_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                          {pricingSections[activeTab].calculator.price}
                        </span>
                        <span className="text-[16px] font-inter font-medium leading-[20px] text-[#000000] self-end mb-[24px] ml-[8px]">
                          {pricingSections[activeTab].calculator.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Vertical Divider */}
              <div className="w-[1px] h-[304px] bg-[#dfdfdf] hidden lg:block transition-smooth"></div>

              {/* What's Included */}
              <div className="flex flex-col gap-[22px] w-full max-w-[300px]">
                <div className="flex flex-col gap-[24px]">
                  <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-inter font-medium leading-[22px] sm:leading-[24px] md:leading-[27px] text-[#000000]">
                    What's Included
                  </h3>
                  <div className="flex flex-col gap-[18px]">
                    {[
                      'SEO-optimization',
                      '0% Plagiarism [With Report]',
                      '100% AI-free content',
                      'Free revisions',
                      'Upto 150+ languages',
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-[10px]">
                        <Image
                          src="/images/img_group_1116599827.svg"
                          alt="Check"
                          width={24}
                          height={24}
                        />
                        <span className="text-[16px] font-inter font-medium leading-[20px] text-[#000000]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="bg-[#42175b] hover:bg-[#5a1f73] text-white px-[34px] py-[6px] text-[18px] font-inter font-medium leading-[23px] rounded-[8px] transition-bounce"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-[80px]">
        <div className="bg-[linear-gradient(135deg,#42175b_0%,#7a00bd_100%)] border border-[#c1c1c1] rounded-[16px] p-[36px] flex flex-col sm:flex-row justify-between items-center gap-[24px]">
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-lato font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-white w-full sm:w-[42%]">
            Are you looking for personalized assistance?
          </h3>
          <Button
            variant="secondary"
            className="bg-white text-[#000000] px-[18px] pr-[36px] py-[10px] text-[20px] font-poppins font-normal leading-[30px] rounded-[5px] hover:bg-gray-100 transition-colors duration-200"
            rightImage={{
              src: '/images/img_arrowright.svg',
              width: 18,
              height: 18,
            }}
          >
            Talk to our experts
          </Button>
        </div>
      </section>
      {/* Features Section */}
      <section
        className="w-full py-[80px]"
        style={{
          backgroundImage: "url('/images/img_rectangle_34624179.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-[54px]">
          <div className="flex flex-col items-center gap-[76px]">
            <div className="flex flex-col items-center gap-[40px] px-4">
              {/* Section Heading */}
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-serif font-semibold text-center text-[#353535] max-w-[800px] leading-[32px] sm:leading-[44px] md:leading-[56px]">
                {/* Mobile heading */}
                <span className="block sm:hidden">
                  We offer you trust <br />
                  <span className="bg-[linear-gradient(90deg,#41175b_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                    and much more
                  </span>
                </span>

                {/* Desktop heading */}
                <span className="hidden sm:block">
                  Top Features of Content Whale's Content Writing Services
                </span>
              </h2>

              {/* Mobile extra description */}
              <p className="block sm:hidden text-center text-[14px] text-[#00000099] leading-[22px]">
                Pay as you like, starting as low as 1.5 rupees. <br />
                No commitments, No contracts
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center gap-3 px-2">
                  <Image
                    src="/images/img_fi_726455.svg"
                    alt="Fast Delivery"
                    width={56}
                    height={56}
                  />
                  <h3 className="text-[16px] sm:text-[20px] font-medium text-[#000] leading-tight">
                    <span className="sm:hidden">We delivery content 10x faster</span>
                    <span className="hidden sm:inline">
                      Blazing-Fast
                      <br /> Content Delivery
                    </span>
                  </h3>
                  <p className="text-[13px] sm:text-[16px] text-[#00000099]">
                    <span className="sm:hidden">
                      We create blog articles that are keyword-rich and plagiarism-free.
                    </span>
                    <span className="hidden sm:inline">
                      Our process-driven content writing and editing practices enable us to deliver
                      upto 20,000+ words in just 48 hours.
                    </span>
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center gap-3 px-2">
                  <Image
                    src="/images/img_fi_6467640.svg"
                    alt="Lead Generation"
                    width={56}
                    height={56}
                  />
                  <h3 className="text-[16px] sm:text-[20px] font-medium text-[#000] leading-tight">
                    <span className="sm:hidden">We boost your conversion</span>
                    <span className="hidden sm:inline">
                      TG-focused Content To Boost Lead Generation
                    </span>
                  </h3>
                  <p className="text-[13px] sm:text-[16px] text-[#00000099]">
                    <span className="sm:hidden">
                      We create blog articles that are keyword-rich and plagiarism-free.
                    </span>
                    <span className="hidden sm:inline">
                      We use data-driven content writing practices to drive traffic through
                      funneling and ascertain conversions.
                    </span>
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center gap-3 px-2">
                  <Image
                    src="/images/img_frame_white_a700.png"
                    alt="Original Content"
                    width={56}
                    height={56}
                  />
                  <h3 className="text-[16px] sm:text-[20px] font-medium text-[#000] leading-tight">
                    <span className="sm:hidden">Original Content that ranks you</span>
                    <span className="hidden sm:inline">
                      Original & Authoritative Content That Always Rank
                    </span>
                  </h3>
                  <p className="text-[13px] sm:text-[16px] text-[#00000099]">
                    <span className="sm:hidden">
                      We create blog articles that are keyword-rich and plagiarism-free.
                    </span>
                    <span className="hidden sm:inline">
                      Our SMEs and content editors follow Google's E-E-A-T guidelines to ensure
                      every piece of delivered content ranks!
                    </span>
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center text-center gap-3 px-2">
                  <Image
                    src="/images/img_fi_2875427.svg"
                    alt="Translation"
                    width={56}
                    height={56}
                  />
                  <h3 className="text-[16px] sm:text-[20px] font-medium text-[#000] leading-tight">
                    <span className="sm:hidden">Breaking all the language barrier</span>
                    <span className="hidden sm:inline">
                      Translate Your Brand Across All Languages
                    </span>
                  </h3>
                  <p className="text-[13px] sm:text-[16px] text-[#00000099]">
                    <span className="sm:hidden">
                      We create blog articles that are keyword-rich and plagiarism-free.
                    </span>
                    <span className="hidden sm:inline">
                      With 50+ certified multilingual translators and 1000+ global-to-local SME
                      translators, we help you connect globally.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col items-center gap-[32px] px-4 sm:px-6 lg:px-[92px]">
              {/* Section Heading */}
              <h2 className="text-[24px] sm:text-[36px] md:text-[40px] font-serif font-semibold leading-[32px] sm:leading-[45px] md:leading-[51px] text-center text-[#353535]">
                <span className="block sm:hidden text-[20px] sm:text-[3px] md:text-[30px]">The measurable impact we made</span>
                <span className="hidden sm:block">We are PROUD to say that we have:</span>
              </h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[32px] w-full">
                {/* Stat 1 */}
                <div className="flex flex-col items-center">
                  <p className="text-[20px] sm:text-[40px] md:text-[64px] font-satoshi font-medium leading-[28px] sm:leading-[54px] md:leading-[87px] bg-[linear-gradient(90deg,#41165a_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                    <span className="sm:hidden">50M+</span>
                    <span className="hidden sm:inline">100M+</span>
                  </p>
                  <p className="text-[12px] sm:text-[18px] md:text-[20px] font-inter font-medium leading-[18px] sm:leading-[27px] md:leading-[31px] text-center text-[#000000]">
                    Words <br className="sm:hidden" /> Written
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center">
                  <p className="text-[20px] sm:text-[40px] md:text-[64px] font-satoshi font-medium leading-[28px] sm:leading-[54px] md:leading-[87px] bg-[linear-gradient(90deg,#41165a_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                    <span className="sm:hidden">15+</span>
                    <span className="hidden sm:inline">15+</span>
                  </p>
                  <p className="text-[12px] sm:text-[18px] md:text-[20px] font-inter font-medium leading-[18px] sm:leading-[27px] md:leading-[31px] text-center text-[#000000]">
                    Countries <br className="sm:hidden" /> Catered
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center">
                  <p className="text-[20px] sm:text-[40px] md:text-[64px] font-satoshi font-medium leading-[28px] sm:leading-[54px] md:leading-[87px] bg-[linear-gradient(90deg,#41165a_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                    <span className="sm:hidden">12K+</span>
                    <span className="hidden sm:inline">100K+</span>
                  </p>
                  <p className="text-[12px] sm:text-[18px] md:text-[20px] font-inter font-medium leading-[18px] sm:leading-[27px] md:leading-[31px] text-center text-[#000000]">
                    Content <br className="sm:hidden" /> Pieces
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col items-center">
                  <p className="text-[20px] sm:text-[40px] md:text-[64px] font-satoshi font-medium leading-[28px] sm:leading-[54px] md:leading-[87px] bg-[linear-gradient(90deg,#41165a_0%,#e34e49_50%,#fbbb17_100%)] bg-clip-text text-transparent">
                    <span className="sm:hidden">1000+</span>
                    <span className="hidden sm:inline">3000+</span>
                  </p>
                  <p className="text-[12px] sm:text-[18px] md:text-[20px] font-inter font-medium leading-[18px] sm:leading-[27px] md:leading-[31px] text-center text-[#000000]">
                    Businesses <br className="sm:hidden" /> Supported
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Publications Section */}
      <section className="w-full px-4 sm:px-6 lg:px-[56px] py-[56px]">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center gap-[56px]">
            <div className="flex flex-col items-center gap-[30px] w-[78%]">
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-serif font-semibold leading-[40px] sm:leading-[50px] md:leading-[61px] text-center text-[#353535]">
                Featured Mentions & Publications
              </h2>
              <p className="text-[20px] sm:text-[24px] md:text-[28px] font-satoshi font-medium leading-[25px] sm:leading-[31px] md:leading-[37px] text-center text-[#42175b]">
                From AMA to Forbes, we have been mentioned in many reputed journals and
                publications.
              </p>
            </div>
            <div className="flex flex-col items-center gap-[40px] sm:gap-[60px] w-full max-w-[1200px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] sm:gap-[30px] md:gap-[40px] w-full">
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_get_prospect_logo.png"
                    alt="Get Prospect"
                    width={120}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_az_big_media_logo.png"
                    alt="AZ Big Media"
                    width={120}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_bulkly_logo.png"
                    alt="Bulkly"
                    width={120}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_featured_logo.png"
                    alt="Featured"
                    width={120}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] sm:gap-[30px] md:gap-[40px] w-full">
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_college_recruiter.png"
                    alt="College Recruiter"
                    width={120}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_all_business_logo.png"
                    alt="All Business"
                    width={120}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_vector_black_900.svg"
                    alt="Forbes"
                    width={80}
                    height={20}
                    className="w-auto h-[24px] sm:h-[28px] md:h-[32px] object-contain"
                  />
                </div>
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_shape.svg"
                    alt="Lensa"
                    width={80}
                    height={24}
                    className="w-auto h-[24px] sm:h-[28px] md:h-[32px] object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] sm:gap-[30px] md:gap-[40px] w-full">
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_group.svg"
                    alt="Circular Logo"
                    width={40}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_light_key_logo.png"
                    alt="Light Key"
                    width={120}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_lead_grow_develop.png"
                    alt="Lead Grow Develop"
                    width={120}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
                <div className="rounded-[8px] p-[8px] sm:p-[12px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_grit_daily_logo.png"
                    alt="Grit Daily"
                    width={120}
                    height={40}
                    className="w-auto h-[32px] sm:h-[40px] md:h-[48px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies Section */}
      <section
        className="w-full py-[106px]"
        style={{
          backgroundImage: "url('/images/img_rectangle_34624179.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-[48px]">
            {/* Left Content */}
            <div className="flex flex-col gap-[30px] w-full lg:w-[30%]">
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-serif font-semibold leading-[40px] sm:leading-[50px] md:leading-[60px] text-[#353535]">
                Expert Content Writing Solutions
              </h2>
              <p className="text-[18px] sm:text-[20px] font-inter font-normal leading-[22px] sm:leading-[24px] text-[#000000]">
                Providing real-world results. Few case studies to look at.
              </p>
              <Button
                variant="primary"
                className="bg-[#42175b] text-white px-[10px] py-[10px] text-[20px] font-poppins font-normal leading-[30px] rounded-[5px] w-fit hover:bg-[#5a1f73] transition-colors duration-200"
              >
                Want to Know More?
              </Button>
            </div>
            {/* Right Case Studies Slider */}
            <div className="w-full lg:w-[62%]">
              {/* Desktop: Show all cards */}
              <div className="hidden lg:flex gap-[24px]">
                {/* KhataBook Case Study */}
                <div className="w-[344px] bg-[linear-gradient(145deg,#ffffff_0%,#ffd4d4_100%)] border border-[#e2e2e2] rounded-[16px] overflow-hidden">
                  <div className="p-[32px] pt-[24px]">
                    <div className="flex flex-col gap-[24px]">
                      <div className="flex items-start gap-[18px]">
                        <Image
                          src="/images/img_frame_1116603076.svg"
                          alt="KhataBook icon"
                          width={38}
                          height={54}
                        />
                        <Image
                          src="/images/img_vector_red_900_01.svg"
                          alt="KhataBook logo"
                          width={152}
                          height={24}
                          className="mt-[12px]"
                        />
                      </div>
                      <p className="text-[18px] font-lato font-normal leading-[21px] text-[#2a2a2a] w-[84%]">
                        KhataBook's Transformation with Content Whale
                      </p>
                      <Button
                        variant="link"
                        className="text-[#42175b] font-inter font-medium leading-[21px] underline"
                      >
                        View Full Case Study
                      </Button>
                    </div>
                  </div>
                  <Image
                    src="/images/img_nothing_phone_1.png"
                    alt="KhataBook case study"
                    width={344}
                    height={400}
                    className="w-full"
                  />
                </div>
                {/* Heritage Hospitals Case Study */}
                <div className="w-[344px] bg-[linear-gradient(145deg,#ffffff_0%,#f3ffff_100%)] border border-[#e2e2e2] rounded-[16px] p-[26px] flex flex-col gap-[36px]">
                  <Image
                    src="/images/img_realistic_id_cards.png"
                    alt="Heritage Hospitals"
                    width={200}
                    height={418}
                    className="mx-auto"
                  />
                  <div className="flex flex-col gap-[16px] mb-[32px]">
                    <div className="flex items-start gap-[12px]">
                      <Image
                        src="/images/img_vector_light_blue_900.svg"
                        alt="Heritage icon"
                        width={30}
                        height={42}
                      />
                      <h3 className="text-[24px] sm:text-[26px] md:text-[30px] font-serif font-medium leading-[32px] sm:leading-[36px] md:leading-[42px] text-center text-[#085681]">
                        Heritage Hospitals
                      </h3>
                    </div>
                    <p className="text-[18px] font-lato font-normal leading-[21px] text-[#2a2a2a] w-[86%]">
                      Putting Heritage Hospitals on the Map
                    </p>
                    <Button
                      variant="link"
                      className="text-[#42175b] font-inter font-medium leading-[21px] underline"
                    >
                      View Full Case Study
                    </Button>
                  </div>
                </div>
                {/* KnowledgeHut Case Study */}
                <div className="w-[344px] bg-[linear-gradient(145deg,#ffffff_0%,#ffe8ff_100%)] border border-[#e2e2e2] rounded-[16px] p-[24px] flex flex-col">
                  <Image
                    src="/images/img_knowledde_hunt_1.png"
                    alt="KnowledgeHut logo"
                    width={150}
                    height={66}
                    className="mx-auto mt-[24px]"
                  />
                  <p className="text-[16px] font-inter font-normal leading-[19px] text-center text-[#000000] mt-[20px]">
                    Fintech | Website Content
                  </p>
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-serif font-semibold leading-[22px] sm:leading-[24px] md:leading-[27px] text-center mt-[16px]">
                    <span className="text-[#085681]"> </span>
                    <span className="text-[#000300]">Empowering </span>
                    <span className="bg-[linear-gradient(90deg,#ff8d1a_0%,#d90dbc_100%)] bg-clip-text text-transparent">
                      KNOWLEDGEHUT
                    </span>
                    <span className="text-[#085681]"> </span>
                    <span className="text-[#000000]">through Strategic</span>
                    <span className="text-[#085681]"> </span>
                    <span className="text-[#000000]">Content Marketing</span>
                  </h3>
                  <Image
                    src="/images/img_paper_shopping_ag.png"
                    alt="KnowledgeHut case study"
                    width={344}
                    height={290}
                    className="w-full mt-[78px]"
                  />
                </div>
              </div>

              {/* Mobile: Single card with pagination */}
              <div className="lg:hidden">
                <div className="relative">
                  {/* KhataBook Case Study */}
                  {currentCaseStudyIndex === 0 && (
                    <div className="w-full bg-[linear-gradient(145deg,#ffffff_0%,#ffd4d4_100%)] border border-[#e2e2e2] rounded-[16px] overflow-hidden">
                      <div className="p-[24px] pt-[20px]">
                        <div className="flex flex-col gap-[20px]">
                          <div className="flex items-start gap-[16px]">
                            <Image
                              src="/images/img_frame_1116603076.svg"
                              alt="KhataBook icon"
                              width={32}
                              height={46}
                            />
                            <Image
                              src="/images/img_vector_red_900_01.svg"
                              alt="KhataBook logo"
                              width={130}
                              height={20}
                              className="mt-[10px]"
                            />
                          </div>
                          <p className="text-[16px] font-lato font-normal leading-[19px] text-[#2a2a2a] w-full">
                            KhataBook's Transformation with Content Whale
                          </p>
                          <Button
                            variant="link"
                            className="text-[#42175b] font-inter font-medium leading-[19px] underline"
                          >
                            View Full Case Study
                          </Button>
                        </div>
                      </div>
                      <Image
                        src="/images/img_nothing_phone_1.png"
                        alt="KhataBook case study"
                        width={400}
                        height={300}
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  )}

                  {/* Heritage Hospitals Case Study */}
                  {currentCaseStudyIndex === 1 && (
                    <div className="w-full bg-[linear-gradient(145deg,#ffffff_0%,#f3ffff_100%)] border border-[#e2e2e2] rounded-[16px] p-[20px] flex flex-col gap-[24px]">
                      <Image
                        src="/images/img_realistic_id_cards.png"
                        alt="Heritage Hospitals"
                        width={180}
                        height={360}
                        className="mx-auto"
                      />
                      <div className="flex flex-col gap-[12px] mb-[20px]">
                        <div className="flex items-start gap-[10px]">
                          <Image
                            src="/images/img_vector_light_blue_900.svg"
                            alt="Heritage icon"
                            width={26}
                            height={36}
                          />
                          <h3 className="text-[20px] font-serif font-medium leading-[26px] text-center text-[#085681]">
                            Heritage Hospitals
                          </h3>
                        </div>
                        <p className="text-[16px] font-lato font-normal leading-[19px] text-[#2a2a2a] w-full text-center">
                          Putting Heritage Hospitals on the Map
                        </p>
                        <Button
                          variant="link"
                          className="text-[#42175b] font-inter font-medium leading-[19px] underline text-center"
                        >
                          View Full Case Study
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* KnowledgeHut Case Study */}
                  {currentCaseStudyIndex === 2 && (
                    <div className="w-full bg-[linear-gradient(145deg,#ffffff_0%,#ffe8ff_100%)] border border-[#e2e2e2] rounded-[16px] p-[20px] flex flex-col">
                      <Image
                        src="/images/img_knowledde_hunt_1.png"
                        alt="KnowledgeHut logo"
                        width={130}
                        height={56}
                        className="mx-auto mt-[20px]"
                      />
                      <p className="text-[14px] font-inter font-normal leading-[17px] text-center text-[#000000] mt-[16px]">
                        Fintech | Website Content
                      </p>
                      <h3 className="text-[18px] font-serif font-semibold leading-[22px] text-center mt-[12px]">
                        <span className="text-[#085681]"> </span>
                        <span className="text-[#000300]">Empowering </span>
                        <span className="bg-[linear-gradient(90deg,#ff8d1a_0%,#d90dbc_100%)] bg-clip-text text-transparent">
                          KNOWLEDGEHUT
                        </span>
                        <span className="text-[#085681]"> </span>
                        <span className="text-[#000000]">through Strategic</span>
                        <span className="text-[#085681]"> </span>
                        <span className="text-[#000000]">Content Marketing</span>
                      </h3>
                      <Image
                        src="/images/img_paper_shopping_ag.png"
                        alt="KnowledgeHut case study"
                        width={400}
                        height={250}
                        className="w-full h-[250px] object-cover mt-[60px]"
                      />
                    </div>
                  )}

                  {/* Pagination Dots */}
                  <div className="flex justify-center items-center gap-[8px] mt-[24px]">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCaseStudyIndex(index)}
                        className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                          currentCaseStudyIndex === index ? 'bg-[#42175b] w-[24px]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full py-[80px] relative overflow-hidden">
        {/* Organic S-Curve Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fef9e7] via-[#fef9e7] to-[#f8f8f8]">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z"
              fill="url(#curveGradient)"
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef9e7" />
                <stop offset="50%" stopColor="#f5f5f5" />
                <stop offset="100%" stopColor="#f8f8f8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-[40px] lg:flex-row lg:items-start lg:gap-[60px]">
            {/* Review Platform Ratings */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start order-1 lg:order-2">
              <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-serif font-semibold leading-[36px] sm:leading-[44px] md:leading-[48px] text-[#2a2a2a] text-center lg:text-left mb-[16px]">
                Don’t Just Take Our,<br/> Word for it
              </h2>
              <p className="text-[16px] sm:text-[18px] font-inter font-normal leading-[26px] text-[#666666] text-center lg:text-left mb-[32px] max-w-[500px]">
                We’ve been reviewed more than 20,000 times with an average of 4.5 out of 5 rating.
              </p>

              {/* Review Platforms */}
              <div className="flex flex-row justify-between items-center w-full text-center gap-2">
                {/* Clutch */}
                <div className="flex flex-col items-center flex-1">
                  <h3 className="text-[12px] md:text-[16px] font-inter font-semibold text-[#2a2a2a] mb-[2px]">
                    Clutch
                  </h3>
                  <p className="text-[18px] md:text-[24px] font-serif font-bold text-[#2a2a2a] mb-[4px]">
                    4.5
                  </p>
                  <div className="flex gap-[1px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-[#fbba18] text-[12px] md:text-[16px]">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* GoodFirms */}
                <div className="flex flex-col items-center flex-1">
                  <div className="flex items-center gap-[3px] mb-[2px]">
                    <div className="w-[16px] h-[16px] bg-[#0097ea] rounded-full flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">GF</span>
                    </div>
                    <h3 className="text-[12px] md:text-[16px] font-inter font-semibold text-[#0097ea]">
                      GoodFirms
                    </h3>
                  </div>
                  <p className="text-[18px] md:text-[24px] font-serif font-bold text-[#2a2a2a] mb-[4px]">
                    4.5
                  </p>
                  <div className="flex gap-[1px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-[#fbba18] text-[12px] md:text-[16px]">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trustpilot */}
                <div className="flex flex-col items-center flex-1">
                  <div className="flex items-center gap-[3px] mb-[2px]">
                    <div className="w-[16px] h-[16px] bg-[#00b67a] rounded-full flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">★</span>
                    </div>
                    <h3 className="text-[12px] md:text-[16px] font-inter font-semibold text-[#00b67a]">
                      Trustpilot
                    </h3>
                  </div>
                  <p className="text-[18px] md:text-[24px] font-serif font-bold text-[#2a2a2a] mb-[4px]">
                    4.5
                  </p>
                  <div className="flex gap-[1px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-[#fbba18] text-[12px] md:text-[16px]">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Carousel */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 px-4">
              <div className="relative max-w-[500px] w-full">
                {/* Testimonial Card */}
                <div className="bg-white rounded-[16px] p-[24px] sm:p-[40px] shadow-xl relative min-h-[320px] sm:min-h-[380px] flex flex-col justify-between">
                  {/* Quote Icon */}
                  <div className="absolute -top-[20px] -left-[20px] bg-[#42175b] rounded-full p-[14px] w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] flex items-center justify-center shadow-lg">
                    <Image
                      src="/images/Frame 1116600059.png"
                      alt="Quote"
                      width={28}
                      height={28}
                      className="sm:w-8 sm:h-8"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-[16px] sm:text-[18px] font-lato font-normal leading-[26px] sm:leading-[28px] text-[#2a2a2a] mb-[24px] mt-[12px]">
                      {testimonials[currentTestimonialIndex]?.content}
                    </p>
                  </div>

                  {/* Author and Date */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[18px] sm:text-[20px] font-lato font-semibold text-[#000000]">
                        {testimonials[currentTestimonialIndex]?.author}
                      </p>
                      <p className="text-[14px] sm:text-[16px] font-lato font-normal text-[#666666]">
                        {testimonials[currentTestimonialIndex]?.date}
                      </p>
                    </div>
                    <Button
                      variant="link"
                      className="text-[#42175b] font-inter font-medium leading-[21px] underline"
                    >
                      Read more
                    </Button>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => handleTestimonialChange('prev')}
                  className="absolute left-[-28px] sm:left-[-40px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-[8px] sm:p-[12px] shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Previous Testimonial"
                >
                  <span className="text-[#666666] text-[16px] sm:text-[18px]">‹</span>
                </button>
                <button
                  onClick={() => handleTestimonialChange('next')}
                  className="absolute right-[-28px] sm:right-[-40px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-[8px] sm:p-[12px] shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Next Testimonial"
                >
                  <span className="text-[#666666] text-[16px] sm:text-[18px]">›</span>
                </button>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-[6px] sm:gap-[8px] mt-[16px] sm:mt-[24px]">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      className={`h-[8px] rounded-full transition-all duration-300 ${
                        currentTestimonialIndex === index
                          ? 'bg-[#42175b] w-[20px] sm:w-[24px]'
                          : 'bg-gray-300 w-[8px]'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-[86px] py-[100px]">
  <div className="flex flex-col items-center gap-[100px]">
    {/* Desktop Heading */}
    <h2 className="hidden sm:block text-[32px] sm:text-[40px] md:text-[48px] font-serif font-semibold leading-[40px] sm:leading-[50px] md:leading-[61px] text-center text-[#353535]">
      Check Out Our Resources
    </h2>

    {/* Mobile Heading */}
    <h2 className="block sm:hidden text-[28px] font-serif font-semibold leading-[36px] text-center text-[#353535]">
      All of the resources we have
    </h2>

    {/* Desktop Grid */}
    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
      {featuredPosts.map((resource) => (
        <div
          key={resource.id}
          className="border rounded-[24px] p-[32px] flex flex-col gap-[16px]"
          style={{
            background: resource.gradient,
            borderColor: resource.titleColor,
          }}
        >
          <Image src={resource.image} alt={resource.title} width={56} height={56} />
          <h3
            className="text-[20px] sm:text-[22px] md:text-[24px] font-serif font-semibold leading-[26px] sm:leading-[28px] md:leading-[32px] w-[86%]"
            style={{ color: resource.titleColor }}
          >
            {resource.title}
          </h3>
          <p className="text-[16px] sm:text-[17px] md:text-[18px] font-lato font-normal leading-[21px] text-[#2a2a2a]">
            {resource.description}
          </p>
        </div>
      ))}
    </div>

    {/* Mobile Slider */}
    <div className="block md:hidden w-full">
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-[16px] pb-4">
        {/* Card 1 */}
        <div className="snap-center shrink-0 w-[85%] border rounded-[24px] p-[24px] flex flex-col gap-[12px] bg-gradient-to-r from-[#fefefe] to-[#f5f5f5]">
          <h3 className="text-[20px] font-serif font-semibold leading-[26px] text-[#41175b]">
            Blogs that rank in Google
          </h3>
          <p className="text-[15px] font-lato font-normal leading-[20px] text-[#2a2a2a]">
            Lorem ipsum dolor sit amet consectetur. Bibendum tellus ultricies lacinia pretium
          </p>
        </div>

        {/* Card 2 */}
        <div className="snap-center shrink-0 w-[85%] border rounded-[24px] p-[24px] flex flex-col gap-[12px] bg-gradient-to-r from-[#fefefe] to-[#f5f5f5]">
          <h3 className="text-[20px] font-serif font-semibold leading-[26px] text-[#e34e49]">
            Case studies for Everyone
          </h3>
          <p className="text-[15px] font-lato font-normal leading-[20px] text-[#2a2a2a]">
            Lorem ipsum dolor sit amet consectetur. Bibendum tellus ultricies lacinia pretium
          </p>
        </div>

        {/* Card 3 */}
        <div className="snap-center shrink-0 w-[85%] border rounded-[24px] p-[24px] flex flex-col gap-[12px] bg-gradient-to-r from-[#fefefe] to-[#f5f5f5]">
          <h3 className="text-[20px] font-serif font-semibold leading-[26px] text-[#fbbb17]">
            Samples which worked
          </h3>
          <p className="text-[15px] font-lato font-normal leading-[20px] text-[#2a2a2a]">
            Lorem ipsum dolor sit amet consectetur. Bibendum tellus ultricies lacinia pretium
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="hidden lg:block w-full py-[80px] bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-[60px]">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-serif font-semibold leading-[40px] sm:leading-[44px] md:leading-[48px] text-[#2a2a2a]">
              Content Writing Agency FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            {/* Left Column */}
            <div className="flex flex-col gap-[32px]">
              {/* Question 1 */}
              <div className="border-b border-[#e0e0e0] pb-[16px]">
                <div
                  className="flex items-center justify-between cursor-pointer hover:border-[#42175b] transition-colors duration-200"
                  onClick={() => handleFAQToggle(0)}
                >
                  <h3 className="text-[18px] sm:text-[20px] font-inter font-medium leading-[24px] sm:leading-[26px] text-[#42175b] pr-[20px]">
                    What Is Your Turn-Around-Time For Content Delivery?
                  </h3>
                  <span
                    className={`text-[#42175b] text-[20px] font-medium transition-transform duration-200 ${openFAQ === 0 ? 'rotate-180' : ''}`}
                  >
                    ⌄
                  </span>
                </div>
                <div
                  className={`mt-[16px] pl-[20px] overflow-hidden transition-all duration-500 ease-in-out lg:block ${openFAQ === 0 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} hidden`}
                >
                  <p className="text-[16px] font-inter font-normal leading-[24px] text-[#666666]">
                    We offer flexible delivery timelines based on your requirements. Standard
                    content delivery is within 48-72 hours for up to 5,000 words. For urgent
                    projects, we provide expedited delivery within 24 hours. Bulk orders (20,000+
                    words) are typically delivered within 5-7 business days.
                  </p>
                </div>
              </div>

              {/* Question 2 */}
              <div className="border-b border-[#e0e0e0] pb-[16px]">
                <div
                  className="flex items-center justify-between cursor-pointer hover:border-[#42175b] transition-colors duration-200"
                  onClick={() => handleFAQToggle(1)}
                >
                  <h3 className="text-[18px] sm:text-[20px] font-inter font-medium leading-[24px] sm:leading-[26px] text-[#42175b] pr-[20px]">
                    Agencies Have Problems Understanding Our Business, How Can We Trust Content
                    Whale?
                  </h3>
                  <span
                    className={`text-[#42175b] text-[20px] font-medium transition-transform duration-200 ${openFAQ === 1 ? 'rotate-180' : ''}`}
                  >
                    ⌄
                  </span>
                </div>
                <div
                  className={`mt-[16px] pl-[20px] overflow-hidden transition-all duration-500 ease-in-out lg:block ${openFAQ === 1 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} hidden`}
                >
                  <p className="text-[16px] font-inter font-normal leading-[24px] text-[#666666]">
                    Content Whale specializes in deep industry research and business understanding.
                    Our team includes subject matter experts from various industries, and we conduct
                    thorough research before writing. We also offer a free consultation call to
                    understand your business model, target audience, and industry-specific
                    requirements.
                  </p>
                </div>
              </div>

              {/* Question 3 */}
              <div className="border-b border-[#e0e0e0] pb-[16px]">
                <div
                  className="flex items-center justify-between cursor-pointer hover:border-[#42175b] transition-colors duration-200"
                  onClick={() => handleFAQToggle(2)}
                >
                  <h3 className="text-[18px] sm:text-[20px] font-inter font-medium leading-[24px] sm:leading-[26px] text-[#42175b] pr-[20px]">
                    Does Content Whale Serve My Niche?
                  </h3>
                  <span
                    className={`text-[#42175b] text-[20px] font-medium transition-transform duration-200 ${openFAQ === 2 ? 'rotate-180' : ''}`}
                  >
                    ⌄
                  </span>
                </div>
                <div
                  className={`mt-[16px] pl-[20px] overflow-hidden transition-all duration-500 ease-in-out lg:block ${openFAQ === 2 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} hidden`}
                >
                  <p className="text-[16px] font-inter font-normal leading-[24px] text-[#666666]">
                    Yes! We serve 50+ industries including Technology, Healthcare, Finance,
                    E-commerce, Education, Real Estate, Legal, Manufacturing, and more. Our diverse
                    team of writers includes industry experts and certified professionals. If you
                    have a unique niche, we'll assign specialized writers with relevant experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[32px]">
              {/* Question 4 */}
              <div className="border-b border-[#e0e0e0] pb-[16px]">
                <div
                  className="flex items-center justify-between cursor-pointer hover:border-[#42175b] transition-colors duration-200"
                  onClick={() => handleFAQToggle(3)}
                >
                  <h3 className="text-[18px] sm:text-[20px] font-inter font-medium leading-[24px] sm:leading-[26px] text-[#42175b] pr-[20px]">
                    How Much Does Content Cost At Content Whale?
                  </h3>
                  <span
                    className={`text-[#42175b] text-[20px] font-medium transition-transform duration-200 ${openFAQ === 3 ? 'rotate-180' : ''}`}
                  >
                    ⌄
                  </span>
                </div>
                <div
                  className={`mt-[16px] pl-[20px] overflow-hidden transition-all duration-500 ease-in-out lg:block ${openFAQ === 3 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} hidden`}
                >
                  <p className="text-[16px] font-inter font-normal leading-[24px] text-[#666666]">
                    Our pricing is transparent and competitive. Content writing starts at ₹1.5 per
                    word, SEO content at ₹2.5 per word, and translation services at ₹12 per word. We
                    offer volume discounts for bulk orders and custom packages for enterprise
                    clients. All prices include research, writing, editing, and unlimited revisions.
                  </p>
                </div>
              </div>

              {/* Question 5 */}
              <div className="border-b border-[#e0e0e0] pb-[16px]">
                <div
                  className="flex items-center justify-between cursor-pointer hover:border-[#42175b] transition-colors duration-200"
                  onClick={() => handleFAQToggle(4)}
                >
                  <h3 className="text-[18px] sm:text-[20px] font-inter font-medium leading-[24px] sm:leading-[26px] text-[#42175b] pr-[20px]">
                    Do You Provide Customized Or Personalized Content?
                  </h3>
                  <span
                    className={`text-[#42175b] text-[20px] font-medium transition-transform duration-200 ${openFAQ === 4 ? 'rotate-180' : ''}`}
                  >
                    ⌄
                  </span>
                </div>
                <div
                  className={`mt-[16px] pl-[20px] overflow-hidden transition-all duration-500 ease-in-out lg:block ${openFAQ === 4 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} hidden`}
                >
                  <p className="text-[16px] font-inter font-normal leading-[24px] text-[#666666]">
                    Absolutely! Every piece of content is customized to your brand voice, industry
                    requirements, and target audience. We create detailed content briefs based on
                    your input and conduct thorough research. Our writers adapt their style to match
                    your brand guidelines, ensuring consistency across all content pieces.
                  </p>
                </div>
              </div>

              {/* Question 6 */}
              <div className="border-b border-[#e0e0e0] pb-[16px]">
                <div
                  className="flex items-center justify-between cursor-pointer hover:border-[#42175b] transition-colors duration-200"
                  onClick={() => handleFAQToggle(5)}
                >
                  <h3 className="text-[18px] sm:text-[20px] font-inter font-medium leading-[24px] sm:leading-[26px] text-[#42175b] pr-[20px]">
                    How Can We Trust The Quality Of Your Content?
                  </h3>
                  <span
                    className={`text-[#42175b] text-[20px] font-medium transition-transform duration-200 ${openFAQ === 5 ? 'rotate-180' : ''}`}
                  >
                    ⌄
                  </span>
                </div>
                <div
                  className={`mt-[16px] pl-[20px] overflow-hidden transition-all duration-500 ease-in-out lg:block ${openFAQ === 5 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} hidden`}
                >
                  <p className="text-[16px] font-inter font-normal leading-[24px] text-[#666666]">
                    We maintain the highest quality standards through our 4-step process: Research,
                    Writing, Editing, and Quality Assurance. All content is checked for plagiarism,
                    SEO optimization, and readability. We provide free revisions and have a 100%
                    satisfaction guarantee. Our clients include Fortune 500 companies and we
                    maintain a 4.5+ rating across all platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-[40px] bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-[40px] max-w-[800px] mx-auto border-2 border-[#42175b] rounded-[16px] shadow-[0_8px_40px_rgba(66,23,91,0.12)]">
            {/* Phone Icon (different for mobile/desktop) */}
            <div className="flex justify-center mb-[20px]">
              {/* Desktop Icon */}
              <Image
                src="/images/fi_5585856.png"
                alt="Phone Icon Desktop"
                width={64}
                height={64}
                className="hidden sm:block w-[64px] h-[64px]"
                priority
              />
              {/* Mobile Icon */}
              <Image
                src="/images/fi_5585856 (1).png"
                alt="Phone Icon Mobile"
                width={64}
                height={64}
                className="block sm:hidden w-[64px] h-[64px]"
                priority
              />
            </div>

            {/* Main Heading */}
            <div className="text-center mb-[20px]">
              <h2 className="text-[20px] sm:text-[28px] md:text-[32px] font-serif font-semibold leading-[1.3] text-[#2a2a2a]">
                {/* Mobile Heading */}
                <span className="block sm:hidden">Ready to start your journey?</span>
                {/* Desktop Heading */}
                <span className="hidden sm:block">So, let’s start, shall we?</span>
              </h2>
            </div>

            {/* Call to Action Button */}
            <div className="flex justify-center mb-[32px]">
              <Button
                variant="primary"
                className="bg-[#42175b] hover:bg-[#5a1f73] text-white px-[24px] sm:px-[32px] py-[10px] sm:py-[12px] text-[14px] sm:text-[16px] font-inter font-medium leading-[22px] rounded-[10px] transition-all duration-300 hover:scale-105"
              >
                {/* Mobile Button Text */}
                <span className="block sm:hidden">Connect with your expert team</span>
                {/* Desktop Button Text */}
                <span className="hidden sm:block">Connect me to an expert!</span>
              </Button>
            </div>

            {/* Feature List */}

            <div className="flex justify-center items-center gap-6 py-2 flex-nowrap">
              {[
                { text: 'Best quality', icon: '/images/badge-check-1.svg' },
                { text: 'Top experts', icon: '/images/badge-check-1.svg' },
                { text: 'Quickest delivery', icon: '/images/badge-check-1.svg' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                    priority
                  />
                  <span className="text-[12px] sm:text-[14px] font-inter font-medium text-[#2a2a2a] whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentWhalePage;
