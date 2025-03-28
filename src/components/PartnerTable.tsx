
import React from 'react';
import { CheckIcon, CrossIcon } from './FeatureIcons';

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

// Partner logos
const partners = ["EMPATHY.CO", "motive", "visible privacy.", "APISEARCH"];

const PartnerTable = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-montserrat">
      <h1 className="text-4xl font-semibold text-center mb-16 text-silver tracking-wide">PARTNER PROGRAMME</h1>
      
      <div className="grid grid-cols-4 gap-0 mb-8">
        {/* Empty first cell for alignment */}
        <div className="col-span-1"></div>
        
        {/* Header Cells with proper border radius */}
        <div className="bg-bronze text-white p-4 text-center rounded-tl-xl">
          <h3 className="font-semibold mb-1">BRONZE PARTNER</h3>
          <p className="text-sm">0-750 MRR</p>
        </div>
        
        <div className="bg-silver text-white p-6 text-center rounded-t-xl -mt-4 shadow-lg z-10">
          <h3 className="font-semibold mb-1">SILVER PARTNER</h3>
          <p className="text-sm">750 TO 1500 MRR</p>
        </div>
        
        <div className="bg-gold text-white p-4 text-center rounded-tr-xl">
          <h3 className="font-semibold mb-1">GOLD PARTNER</h3>
          <p className="text-sm">1500+ MRR</p>
        </div>
      </div>
      
      {/* Features Grid with equal height rows */}
      <div className="border-collapse">
        {featureData.map((feature, index) => (
          <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="p-4 border-b border-gray-100 pr-12 col-span-1 text-left text-silver font-medium min-h-[70px] flex items-center" style={{ maxWidth: '280px' }}>
              {feature.name}
            </div>
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
      
      {/* Commission Row with proper border radius on Silver column */}
      <div className="grid grid-cols-4">
        <div className="p-4 font-semibold text-silver text-left text-xl flex items-center">
          COMMISSION
        </div>
        <div className="p-4 text-4xl font-semibold text-center text-silver flex items-center justify-center">
          10%
        </div>
        <div className="p-6 text-5xl font-semibold text-center bg-silver text-white rounded-b-xl flex items-center justify-center">
          15%
        </div>
        <div className="p-4 text-4xl font-semibold text-center text-silver flex items-center justify-center">
          20%
        </div>
      </div>
      
      {/* Partner Logos */}
      <div className="flex justify-center items-center gap-8 mt-20">
        {partners.map((partner, index) => (
          <div key={index} className="text-gray-500 font-semibold text-lg">
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerTable;
