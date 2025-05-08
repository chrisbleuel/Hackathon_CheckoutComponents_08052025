import React from 'react';
import { Input } from '@/components/ui/Input';
export const OrderDetails = () => {
  return <div className="min-w-60 flex-1 shrink basis-[0%] rounded-lg">
      <div className="w-full">
        <div className="text-[#32373E] text-xl font-light leading-[1.4] tracking-[0.1px] py-[16px]">
          Sold by
        </div>
        <div className="text-[#07090D] text-base font-normal leading-6 tracking-[0.08px]">
          Our local partner: <span className="font-bold">Optocura</span>
        </div>
        <div className="text-[#07090D] text-base font-normal leading-6 tracking-[0.08px]">
          2005, 100 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038, India
        </div>
      </div>

      <div className="w-full mt-8">
        <div className="flex w-full">
          <div className="min-w-60 w-full flex-1 shrink basis-[0%] pb-2">
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/ca1e8554fcdf9927f3b798618d86d23266d9d260?placeholderIfAbsent=true" alt="Product" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="mt-4">
          <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/d6d514dd5c730731344aa1bdaf05ece4659c7e9d?placeholderIfAbsent=true" alt="Brand" className="h-[43px]" />
          <div className="text-[#32373E] text-base font-light leading-6 tracking-[0.08px]">
            Model: <span className="font-bold">TH6319</span>
          </div>
          <div className="text-[#32373E] text-base font-light leading-6 tracking-[0.08px]">
            Colour: <span className="font-bold">Blue Gradiant</span>
          </div>
          <div className="text-[#32373E] text-base font-light leading-6 tracking-[0.08px]">
            Size: <span className="font-bold">S</span>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex w-full items-stretch gap-4 overflow-hidden text-base text-[#32373E] font-bold whitespace-nowrap tracking-[0.08px] flex-wrap">
            <div className="text-[#32373E] text-ellipsis flex-1 shrink basis-[0%]">Right</div>
            <div className="text-[#32373E] text-ellipsis flex-1 shrink basis-[0%]">Left</div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="w-full">
              <div className="text-[#606A76] text-xs font-normal leading-[22px] tracking-[0.06px]">Sphere</div>
              <input value="+3.25" readOnly className="text-[#32373E] text-base font-medium tracking-[0.08px] w-full bg-transparent outline-none" />
              <div className="w-full gap-1">
                <div className="bg-[rgba(194,205,214,1)] flex min-h-px w-full" />
              </div>
            </div>
            <div className="w-full">
              <div className="text-[#606A76] text-xs font-normal leading-[22px] tracking-[0.06px]">Sphere</div>
              <input value="+3.25" readOnly className="text-[#32373E] text-base font-medium tracking-[0.08px] w-full bg-transparent outline-none" />
              <div className="w-full gap-1">
                <div className="bg-[rgba(194,205,214,1)] flex min-h-px w-full" />
              </div>
            </div>
            <div className="w-full">
              <div className="text-[#606A76] text-xs font-normal leading-[22px] tracking-[0.06px]">Cylinder</div>
              <input value="+3.25" readOnly className="text-[#32373E] text-base font-medium tracking-[0.08px] w-full bg-transparent outline-none" />
              <div className="w-full gap-1">
                <div className="bg-[rgba(194,205,214,1)] flex min-h-px w-full" />
              </div>
            </div>
            <div className="w-full">
              <div className="text-[#606A76] text-xs font-normal leading-[22px] tracking-[0.06px]">Cylinder</div>
              <input value="+3.25" readOnly className="text-[#32373E] text-base font-medium tracking-[0.08px] w-full bg-transparent outline-none" />
              <div className="w-full gap-1">
                <div className="bg-[rgba(194,205,214,1)] flex min-h-px w-full" />
              </div>
            </div>
            <div className="w-full">
              <div className="text-[#606A76] text-xs font-normal leading-[22px] tracking-[0.06px]">Axis</div>
              <input value="120°" readOnly className="text-[#32373E] text-base font-medium tracking-[0.08px] w-full bg-transparent outline-none" />
              <div className="w-full gap-1">
                <div className="bg-[rgba(194,205,214,1)] flex min-h-px w-full" />
              </div>
            </div>
            <div className="w-full">
              <div className="text-[#606A76] text-xs font-normal leading-[22px] tracking-[0.06px]">Axis</div>
              <input value="120°" readOnly className="text-[#32373E] text-base font-medium tracking-[0.08px] w-full bg-transparent outline-none" />
              <div className="w-full gap-1">
                <div className="bg-[rgba(194,205,214,1)] flex min-h-px w-full" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#32373E]">Frame</span>
              <span className="font-medium">₹ 2.500</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#606A76]">Lens</span>
              <span className="font-medium">₹ 2.500</span>
            </div>
            <div className="border-t border-[#C2CDD6] mt-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-[#606A76] text-xs">Total</span>
                <span className="font-medium">₹ 5.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};