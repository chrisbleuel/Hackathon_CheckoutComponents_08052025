
import React from 'react';
import { Check, ShoppingBasket, Truck, CreditCard } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface StepProps {
  label: string;
  isCompleted: boolean;
  isActive: boolean;
  isLast?: boolean;
  isOrder?: boolean;
}

const Step: React.FC<StepProps> = ({ label, isCompleted, isActive, isLast, isOrder }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`items-center flex gap-0.5 flex-1 shrink basis-[0%] pr-0.5 ${isLast ? 'justify-end' : ''}`}>
      {!isLast && (
        <div className="self-stretch flex flex-col items-end text-xs text-[#32373E] font-normal whitespace-nowrap text-center tracking-[0.06px] w-5 my-auto">
          {isCompleted ? (
            <div className="w-5 h-5 rounded-full bg-[#0072EF] flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
          ) : isOrder && isActive ? (
            <div className="w-5 h-5 rounded-full bg-[#0072EF] flex items-center justify-center">
              <ShoppingBasket className="w-3 h-3 text-white" />
            </div>
          ) : (
            <div className={`w-5 h-5 rounded-full ${isActive ? 'bg-[#8E9196]' : 'bg-[#E6EBF0]'} flex items-center justify-center`}>
              {isActive && <Truck className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
            </div>
          )}
          <div className={`text-[#32373E] mt-1 ${isMobile ? 'text-[10px]' : ''}`}>{isMobile && label.length > 6 ? label.substring(0, 6) : label}</div>
        </div>
      )}
      
      {!isLast && (
        <div className={`self-stretch ${isMobile ? 'min-w-8' : 'min-w-20'} flex-1 shrink basis-[0%] my-auto relative`}>
          <div className={`absolute top-[-10px] w-full h-0.5 ${isCompleted ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'}`} />
        </div>
      )}

      {isLast && (
        <div className="flex items-center">
          <div className="self-stretch relative mr-3">
            <div className="absolute top-[-10px] right-0 w-full h-0.5 bg-[#E6EBF0]" />
          </div>
          <div className="flex flex-col items-start text-xs text-[#32373E] font-normal whitespace-nowrap text-center tracking-[0.06px] w-5 my-auto">
            <div className="w-5 h-5 rounded-full bg-[#E6EBF0] flex items-center justify-center" />
            <div className={`text-[#32373E] mt-1 ${isMobile ? 'text-[10px]' : ''}`}>{isMobile && label.length > 6 ? label.substring(0, 6) : 'Done'}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Stepper = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex w-full justify-center px-4 max-w-[1440px] mx-auto">
      <div className="items-center flex w-full">
        <div className="self-stretch w-full flex-1 shrink basis-[0%] my-auto">
          <div className="flex w-full gap-0.5 flex-wrap">
            <Step label="Account" isCompleted={true} isActive={false} />
            <Step label={isMobile ? "Addr" : "Address"} isCompleted={true} isActive={false} />
            <Step label={isMobile ? "Presc" : "Prescription"} isCompleted={true} isActive={false} />
            <Step label="Order" isCompleted={false} isActive={true} isOrder={true} />
            <Step label="Done" isCompleted={false} isActive={false} isLast />
          </div>
        </div>
      </div>
    </div>
  );
};
