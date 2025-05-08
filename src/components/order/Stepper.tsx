
import React from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StepProps {
  label: string;
  isCompleted: boolean;
  isActive: boolean;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ label, isCompleted, isActive, isLast }) => {
  return (
    <div className="items-center flex min-w-20 gap-0.5 flex-1 shrink basis-[0%] pr-0.5">
      <div className="self-stretch flex flex-col items-center text-xs text-[#32373E] font-normal whitespace-nowrap text-center tracking-[0.06px] w-5 my-auto">
        {isCompleted ? (
          <Check className="w-5 h-5 text-[#0072EF]" />
        ) : (
          <div className={`w-5 h-5 rounded-full ${isActive ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'}`} />
        )}
        <div className="text-[#32373E] mt-1">{label}</div>
      </div>
      {!isLast && (
        <div className="self-stretch min-w-20 flex-1 shrink basis-[0%] my-auto">
          <div className={`flex shrink-0 h-0.5 ${isCompleted ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'}`} />
        </div>
      )}
    </div>
  );
};

export const Stepper = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between w-full">
        <Button 
          variant="ghost" 
          className="flex items-center text-[#606A76] hover:text-[#0072EF] hover:bg-transparent"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </Button>
        
        <div className="items-center flex w-full max-w-2xl mx-auto">
          <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto">
            <div className="flex w-full gap-0.5 flex-wrap">
              <Step label="Account" isCompleted={true} isActive={false} />
              <Step label="Address" isCompleted={true} isActive={false} />
              <Step label="Prescription" isCompleted={true} isActive={false} />
              <Step label="Order" isCompleted={false} isActive={true} />
              <Step label="Done" isCompleted={false} isActive={false} isLast />
            </div>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          className="flex items-center text-[#606A76] hover:text-[#0072EF] hover:bg-transparent"
        >
          Skip
          <ChevronRight className="w-5 h-5 ml-1" />
        </Button>
      </div>
    </div>
  );
};
