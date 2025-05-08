
import React from 'react';
import { Check, ShoppingBasket, Truck } from 'lucide-react';

interface StepProps {
  label: string;
  isCompleted: boolean;
  isActive: boolean;
  isLast?: boolean;
  isOrder?: boolean;
  isDone?: boolean;
  isFirst?: boolean;
}

const Step: React.FC<StepProps> = ({ label, isCompleted, isActive, isLast, isOrder, isDone, isFirst }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full">
        {/* Left connector line with 5px spacing */}
        {!isFirst && (
          <div className="flex-1 flex items-center">
            <div className={`h-0.5 w-full ${isCompleted ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'} mr-[5px]`} />
          </div>
        )}
        
        {/* Circle icon */}
        <div className="relative flex-shrink-0">
          {isCompleted ? (
            <div className="w-5 h-5 rounded-full bg-[#0072EF] flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
          ) : isOrder && isActive ? (
            <div className="w-5 h-5 rounded-full bg-[#0072EF] flex items-center justify-center">
              <ShoppingBasket className="w-3 h-3 text-white" />
            </div>
          ) : isDone ? (
            <div className={`w-5 h-5 rounded-full ${isActive ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'} flex items-center justify-center`}>
              <Truck className="w-3 h-3 text-white" />
            </div>
          ) : (
            <div className={`w-5 h-5 rounded-full ${isActive ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'}`} />
          )}
        </div>
        
        {/* Right connector line with 5px spacing */}
        {!isLast && (
          <div className="flex-1 flex items-center">
            <div className={`h-0.5 w-full ${isCompleted ? 'bg-[#0072EF]' : 'bg-[#E6EBF0]'} ml-[5px]`} />
          </div>
        )}
      </div>
      
      {/* Step label - centered under the icon */}
      <div className="text-xs text-[#32373E] mt-1 text-center">{label}</div>
    </div>
  );
};

export const Stepper = () => {
  const steps = [
    { label: "Account", isCompleted: true, isActive: false, isFirst: true },
    { label: "Address", isCompleted: true, isActive: false },
    { label: "Prescription", isCompleted: true, isActive: false },
    { label: "Order", isCompleted: false, isActive: true, isOrder: true },
    { label: "Done", isCompleted: false, isActive: false, isLast: true, isDone: true }
  ];
  
  return (
    <div className="flex w-full">
      <div className="flex w-full justify-between">
        {steps.map((step, index) => (
          <Step 
            key={index}
            label={step.label}
            isCompleted={step.isCompleted}
            isActive={step.isActive}
            isLast={step.isLast}
            isOrder={step.isOrder}
            isDone={step.isDone}
            isFirst={step.isFirst}
          />
        ))}
      </div>
    </div>
  );
};
