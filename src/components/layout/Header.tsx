import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
export const Header = () => {
  return <div className="flex w-full flex-col items-stretch justify-center">
      <div className="justify-center items-center flex min-h-6 w-full gap-20 overflow-hidden text-base text-white tracking-[0.08px] bg-[#32373E] pt-0 pb-[64px]">
        <div className="self-stretch flex min-w-60 w-full max-w-[1440px] items-center gap-[40px_80px] flex-wrap flex-1 shrink basis-[0%] my-auto">
          <div className="text-white font-bold self-stretch flex-1 shrink basis-[0%] my-auto">
            Website Name
          </div>
          <div className="self-stretch flex min-w-60 gap-6 font-normal text-right my-auto">
            <div className="items-center flex gap-2">
              <div className="text-white self-stretch gap-2 my-auto">
                Secondary Utility
              </div>
            </div>
            <div className="items-center flex gap-2">
              <div className="text-white self-stretch gap-2 my-auto">
                Secondary Utility
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center flex min-h-24 w-full bg-white pt-0 pb-[64px]">
        
      </div>
    </div>;
};