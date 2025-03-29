
import React from 'react';
import { CheckIcon, CrossIcon } from './FeatureIcons';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';
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

// Import SVG logos for partners
const partnersLogos = [
  "/lovable-uploads/305c860b-fdfd-438c-9165-121ec915c3e4.png"
];

const PartnerTable = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-montserrat">
      <h1 className="text-4xl font-semibold text-center mb-16 text-[#243D48] tracking-[10px]">PARTNER PROGRAMME</h1>
      
      <div className="grid grid-cols-4 gap-0">
        {/* Empty first cell for alignment */}
        <div className="col-span-1"></div>
        
        {/* Header Cells with proper border radius and colors */}
        <div className="bg-[#919EA3] text-white p-4 text-center rounded-tl-xl border-r border-[#E1E5E5]">
          <h3 className="font-semibold mb-1 tracking-[5px]">BRONZE PARTNER</h3>
          <p className="text-sm">0-750 MRR</p>
        </div>
        
        <div className="bg-[#243D48] text-white p-4 text-center border-r border-[#E1E5E5]">
          <h3 className="font-semibold mb-1 tracking-[5px]">SILVER PARTNER</h3>
          <p className="text-sm">750 TO 1500 MRR</p>
        </div>
        
        <div className="bg-[#919EA3] text-white p-4 text-center rounded-tr-xl">
          <h3 className="font-semibold mb-1 tracking-[5px]">GOLD PARTNER</h3>
          <p className="text-sm">1500+ MRR</p>
        </div>
      </div>
      
      {/* Features Grid with equal height rows */}
      <div className="border-collapse relative">
        {featureData.map((feature, index) => (
          <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className={`p-4 border-b border-gray-100 pr-6 col-span-1 text-left text-[#243D48] font-medium min-h-[70px] flex items-center border-r border-[#E1E5E5] ${isMobile ? 'text-xs' : ''}`} style={{ maxWidth: '280px' }}>
              <div className={isMobile ? '' : 'line-clamp-2'}>{feature.name}</div>
            </div>
            <div className="p-4 border-b border-gray-100 text-center min-h-[70px] flex items-center justify-center border-r border-[#E1E5E5]">
              {feature.bronze ? <CheckIcon /> : <CrossIcon />}
            </div>
            <div className="p-4 border-b border-gray-100 text-center min-h-[70px] flex items-center justify-center border-r border-[#E1E5E5]">
              {feature.silver ? <CheckIcon /> : <CrossIcon />}
            </div>
            <div className="p-4 border-b border-gray-100 text-center min-h-[70px] flex items-center justify-center">
              {feature.gold ? <CheckIcon /> : <CrossIcon />}
            </div>
          </div>
        ))}
      </div>
      
      {/* Commission Row with proper border radius on Silver column */}
      <div className="grid grid-cols-4">
        <div className="p-4 font-semibold text-[#243D48] text-left text-xl flex items-center tracking-[5px]">
          COMMISSION
        </div>
        <div className="p-4 text-4xl font-semibold text-center text-[#243D48] flex items-center justify-center">
          10%
        </div>
        <div className="p-4 text-5xl font-semibold text-center bg-[#243D48] text-white rounded-b-xl flex items-center justify-center">
          15%
        </div>
        <div className="p-4 text-4xl font-semibold text-center text-[#243D48] flex items-center justify-center">
          20%
        </div>
      </div>
      
      {/* Partner Logos - centered and aligned with title */}
      <div className="flex justify-center items-center gap-16 mt-20">
        <img src="/lovable-uploads/305c860b-fdfd-438c-9165-121ec915c3e4.png" alt="Partner Logos" className="h-12" />
      </div>
    </div>
  );
};

export default PartnerTable;
