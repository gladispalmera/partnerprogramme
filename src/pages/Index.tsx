
import PartnerTable from "@/components/PartnerTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="/lovable-uploads/e90ed570-4225-4378-a0e7-9b7fe65e58f0.png" 
          alt="Background Pattern" 
          className="w-full object-cover object-top max-w-full mx-auto"
        />
      </div>
      <div className="relative z-10">
        <PartnerTable />
      </div>
    </div>
  );
};

export default Index;
