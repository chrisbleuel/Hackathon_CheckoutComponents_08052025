
import React from 'react';
import { Check, ShoppingBasket, Truck, CreditCard } from 'lucide-react';

interface StepProps {
  label: string;
  isCompleted: boolean;
  isActive: boolean;
  isLast?: boolean;
  isOrder?: boolean;
  isPayment?: boolean;
}

const Step: React.FC<StepProps> = ({ label, isCompleted, isActive, isLast, isOrder, isPayment }) => {
  return (
    <div className="items-center flex min-w-20 gap-0.5 flex-1 shrink basis-[0%] pr-0.5">
      <div className="self-stretch flex flex-col items-center text-xs text-[#32373E] font-normal whitespace-nowrap text-center tracking-[0.06px] w-5 my-auto">
        {isCompleted ? (
          <div className="w-5 h-5 rounded-full bg-[#0072EF] flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-white" />
          </div>
        ) : isOrder && isActive ? (
          <div className="w-5 h-5 rounded-full bg-[#0072EF] flex items-center justify-center">
            <ShoppingBasket className="w-3 h-3 text-white" />
          </div>
        ) : isPayment && isActive ? (
          <div className="w-5 h-5 rounded-full bg-[#888888] flex items-center justify-center">
            <CreditCard className="w-3 h-3 text-white" />
          </div>
        ) : (
          <div className={`w-5 h-5 rounded-full ${isActive ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'} flex items-center justify-center`}>
            {isActive && <Truck className="w-3 h-3 text-white" />}
          </div>
        )}
        <div className="text-[#32373E] mt-1">{label}</div>
      </div>
      {!isLast && (
        <div className="self-stretch min-w-20 flex-1 shrink basis-[0%] my-auto relative">
          <div className={`absolute top-[-10px] w-full h-0.5 ${isCompleted ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'}`} />
        </div>
      )}
    </div>
  );
};

export const Stepper = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="items-center flex w-full max-w-2xl">
        <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto">
          <div className="flex w-full gap-0.5 flex-wrap">
            <Step label="Account" isCompleted={true} isActive={false} />
            <Step label="Address" isCompleted={true} isActive={false} />
            <Step label="Prescription" isCompleted={true} isActive={false} />
            <Step label="Order" isCompleted={false} isActive={false} />
            <Step label="Payment" isCompleted={false} isActive={true} isPayment={true} />
            <Step label="Done" isCompleted={false} isActive={false} isLast />
          </div>
        </div>
      </div>
    </div>
  );
};
