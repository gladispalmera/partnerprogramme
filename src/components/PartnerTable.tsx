
import React from 'react';
import { CheckIcon, CrossIcon } from './FeatureIcons';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

// Feature data with availability for each tier
const featureData = [
  {
    name: "Joint training for your clients (CS)",
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    name: "Social media posts (Lk)",
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    name: "Certification badge",
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    name: "Newsletters you can share with your clients",
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    name: "Joint platform to see your clients' status and your commissions",
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    name: "Premium customer service (CS)",
    bronze: false,
    silver: true,
    gold: true,
  },
  {
    name: "Exclusive promotional campaigns for partners only",
    bronze: false,
    silver: true,
    gold: true,
  },
  {
    name: "Joint events and conferences",
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    name: "Include your logo in our website agency directory",
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    name: "Social media hype for pre-events and new launches",
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    name: "Success story",
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    name: "Early access to Alpha-Beta programmes",
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    name: "Early access to the whole Empathy.co family",
    bronze: false,
    silver: false,
    gold: true,
  },
];

const PartnerTable = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-montserrat">
      <h1 className={`${isMobile ? 'text-3xl tracking-[5px]' : 'text-4xl tracking-[10px]'} font-semibold text-center mb-16 text-[#243D48]`}>PARTNER PROGRAMME</h1>
      
      <div className="relative">
        {isMobile ? (
          // Mobile Layout
          <div className="grid grid-cols-[50%_50%]">
            {/* Feature name column - fixed width */}
            <div className="sticky left-0 z-10 bg-white">
              {/* Empty header for the feature column */}
              <div className="h-[76px]"></div>
              
              {/* Feature names */}
              {featureData.map((feature, index) => (
                <div 
                  key={index} 
                  className={`p-4 pr-2 border-b border-gray-100 text-left text-[#243D48] font-medium h-[70px] flex items-center text-base sticky left-0 z-10 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <div>{feature.name}</div>
                </div>
              ))}
              
              {/* Commission label */}
              <div className="p-4 font-semibold text-[#243D48] text-left flex items-center tracking-[5px] sticky left-0 z-10 bg-white">
                <span className="text-xs">COMMISSION</span>
              </div>
            </div>
            
            {/* Scrollable content */}
            <div className="overflow-x-auto pr-0 no-scrollbar">
              <div className="grid grid-cols-3 min-w-[600px]">
                {/* Headers for tiers */}
                <div className="bg-[#919EA3] text-white p-4 text-center rounded-tl-xl">
                  <h3 className="font-semibold mb-1 tracking-[5px] text-base">BRONZE PARTNER</h3>
                  <p className="text-sm tracking-[5px]">0-750 MRR</p>
                </div>
                
                <div className="bg-[#243D48] text-white p-4 text-center">
                  <h3 className="font-semibold mb-1 tracking-[5px] text-base">SILVER PARTNER</h3>
                  <p className="text-sm tracking-[5px]">750 TO 1500 MRR</p>
                </div>
                
                <div className="bg-[#919EA3] text-white p-4 text-center rounded-tr-xl">
                  <h3 className="font-semibold mb-1 tracking-[5px] text-base">GOLD PARTNER</h3>
                  <p className="text-sm tracking-[5px]">1500+ MRR</p>
                </div>
                
                {/* Feature availability for each tier */}
                {featureData.map((feature, index) => (
                  <React.Fragment key={index}>
                    <div className={`p-4 border-b border-gray-100 text-center h-[70px] flex items-center justify-center text-base ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      {feature.bronze ? <CheckIcon /> : <CrossIcon />}
                    </div>
                    <div className={`p-4 border-b border-gray-100 text-center h-[70px] flex items-center justify-center text-base ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      {feature.silver ? <CheckIcon /> : <CrossIcon />}
                    </div>
                    <div className={`p-4 border-b border-gray-100 text-center h-[70px] flex items-center justify-center text-base ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      {feature.gold ? <CheckIcon /> : <CrossIcon />}
                    </div>
                  </React.Fragment>
                ))}
                
                {/* Commission percentages */}
                <div className="p-4 font-semibold text-center text-[#243D48] flex items-center justify-center">
                  <span className="text-xl">10%</span>
                </div>
                <div className="p-4 font-semibold text-center bg-[#243D48] text-white flex items-center justify-center rounded-bl-xl rounded-br-xl">
                  <span className="text-xl">15%</span>
                </div>
                <div className="p-4 font-semibold text-center text-[#243D48] flex items-center justify-center">
                  <span className="text-xl">20%</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Desktop Layout
          <div>
            <div className="grid grid-cols-4 gap-0">
              {/* Empty space for the feature column */}
              <div className="bg-white"></div>
              
              {/* Header Cells for desktop */}
              <div className="bg-[#919EA3] text-white p-4 text-center rounded-tl-xl">
                <h3 className="font-semibold mb-1 tracking-[5px]">BRONZE PARTNER</h3>
                <p className="text-sm tracking-[5px]">0-750 MRR</p>
              </div>
              
              <div className="bg-[#243D48] text-white p-4 text-center">
                <h3 className="font-semibold mb-1 tracking-[5px]">SILVER PARTNER</h3>
                <p className="text-sm tracking-[5px]">750 TO 1500 MRR</p>
              </div>
              
              <div className="bg-[#919EA3] text-white p-4 text-center rounded-tr-xl">
                <h3 className="font-semibold mb-1 tracking-[5px]">GOLD PARTNER</h3>
                <p className="text-sm tracking-[5px]">1500+ MRR</p>
              </div>
            </div>
            
            {/* Features Grid with equal height rows */}
            <div className="border-collapse relative">
              {featureData.map((feature, index) => (
                <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  {/* Feature name column */}
                  <div className={`p-4 border-b border-gray-100 pr-6 text-left text-[#243D48] font-medium min-h-[70px] flex items-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div>{feature.name}</div>
                  </div>
                  
                  {/* Feature availability for each tier */}
                  <div className="p-4 border-b border-gray-100 text-center min-h-[70px] flex items-center justify-center">
                    {feature.bronze ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <div className="p-4 border-b border-gray-100 text-center min-h-[70px] flex items-center justify-center">
                    {feature.silver ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <div className="p-4 border-b border-gray-100 text-center min-h-[70px] flex items-center justify-center">
                    {feature.gold ? <CheckIcon /> : <CrossIcon />}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Commission Row */}
            <div className="grid grid-cols-4">
              <div className="p-4 font-semibold text-[#243D48] text-left text-xl flex items-center tracking-[5px]">
                COMMISSION
              </div>
              <div className="p-4 text-4xl font-semibold text-center text-[#243D48] flex items-center justify-center">
                10%
              </div>
              <div className="p-4 text-5xl font-semibold text-center bg-[#243D48] text-white flex items-center justify-center rounded-b-xl">
                15%
              </div>
              <div className="p-4 text-4xl font-semibold text-center text-[#243D48] flex items-center justify-center">
                20%
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Partner Logos - centered and aligned with title */}
      <div className="flex justify-center items-center mt-20">
        <img 
          src="/lovable-uploads/305c860b-fdfd-438c-9165-121ec915c3e4.png" 
          alt="Partner Logos" 
          className={`${isMobile ? 'h-12 w-auto object-contain' : 'h-10 w-auto object-contain'}`} 
        />
      </div>
    </div>
  );
};

// Add a custom utility class to hide scrollbar while allowing scrolling
const style = document.createElement('style');
style.textContent = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);

export default PartnerTable;
