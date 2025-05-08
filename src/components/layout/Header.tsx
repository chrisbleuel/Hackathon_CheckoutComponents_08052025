import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';

export const Header = () => {
  return (
    <div className="flex w-full flex-col items-stretch justify-center">
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
        <div className="self-stretch flex min-w-60 w-full max-w-[1440px] items-center flex-wrap flex-1 shrink basis-[0%] my-auto">
          <Link to="/" className="justify-center items-center self-stretch flex w-12 my-auto py-[24px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/d3594334ba36efbe4d3ab0c6a39582426c65d943?placeholderIfAbsent=true" alt="ZEISS Logo" className="aspect-[1] object-contain w-12 self-stretch my-auto" />
          </Link>
          <nav className="items-center self-stretch flex min-w-60 gap-8 text-xl text-[#32373E] font-normal tracking-[0.1px] leading-[1.4] flex-wrap my-auto">
            <Link to="/shop" className="text-[#32373E] self-stretch gap-2 my-auto hover:text-[#0072EF]">
              Browse shop
            </Link>
            <Link to="/partners" className="text-[#32373E] self-stretch min-w-60 gap-2 my-auto hover:text-[#0072EF]">
              Authorized ZEISS retail partners
            </Link>
            <Link to="/lenses" className="text-[#32373E] self-stretch gap-2 my-auto hover:text-[#0072EF]">
              ZEISS premium lenses
            </Link>
            <Link to="/contact" className="text-[#32373E] self-stretch gap-2 my-auto hover:text-[#0072EF]">
              Help & contact
            </Link>
            <div className="items-center self-stretch flex gap-2 whitespace-nowrap my-auto cursor-pointer">
              <span className="text-[#32373E] self-stretch my-auto">More</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/9a2106237c773afdd7dee4392dc66644e5e585f9?placeholderIfAbsent=true" alt="Expand menu" className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto" />
            </div>
          </nav>
          <div className="items-center self-stretch flex h-7 gap-8 flex-1 shrink basis-24 my-auto justify-end">
            <button className="items-center self-stretch flex gap-2 w-5 my-auto" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="items-center self-stretch flex gap-2 w-5 my-auto" aria-label="Shopping cart">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="items-center self-stretch flex gap-2 w-10 my-auto" aria-label="User account">
              <User className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
