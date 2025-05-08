
import React from 'react';
import { Check, ShoppingBasket, Truck } from 'lucide-react';

interface StepProps {
  label: string;
  isCompleted: boolean;
  isActive: boolean;
  isLast?: boolean;
  isOrder?: boolean;
}

const Step: React.FC<StepProps> = ({ label, isCompleted, isActive, isLast, isOrder }) => {
  return (
    <div className="flex flex-col items-center relative flex-1">
      <div className="flex flex-col items-center">
        {isCompleted ? (
          <div className="w-5 h-5 rounded-full bg-[#0072EF] flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-white" />
          </div>
        ) : isOrder && isActive ? (
          <div className="w-5 h-5 rounded-full bg-[#0072EF] flex items-center justify-center">
            <ShoppingBasket className="w-3 h-3 text-white" />
          </div>
        ) : (
          <div className={`w-5 h-5 rounded-full ${isActive ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'} flex items-center justify-center`}>
            {isActive && <Truck className="w-3 h-3 text-white" />}
          </div>
        )}
        <div className="text-[#32373E] text-xs mt-1">{label}</div>
      </div>
      
      {!isLast && (
        <div className="absolute top-[0.625rem] left-1/2 w-[calc(100%-1.25rem)] h-0.5" style={{ transform: 'translateX(50%)' }}>
          <div className={`w-full h-full ${isCompleted ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'}`}></div>
        </div>
      )}
    </div>
  );
};

export const Stepper = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative flex w-full">
          <Step label="Account" isCompleted={true} isActive={false} />
          <Step label="Address" isCompleted={true} isActive={false} />
          <Step label="Prescription" isCompleted={true} isActive={false} />
          <Step label="Order" isCompleted={false} isActive={true} isOrder={true} />
          <Step label="Done" isCompleted={false} isActive={false} isLast />
        </div>
      </div>
    </div>
  );
};
