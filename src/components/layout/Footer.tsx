import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="justify-center items-stretch flex w-full flex-col bg-[#F2F5F8]">
      <div className="items-center flex w-full text-base tracking-[0.08px] bg-[#F2F5F8] py-[40px]">
        <div className="self-stretch flex min-w-60 w-full gap-6 flex-wrap flex-1 shrink basis-[0%] my-auto">
          {[1, 2, 3].map((columnIndex) => (
            <div key={columnIndex} className="max-w-[600px] min-w-60 text-[#32373E] whitespace-nowrap flex-1 shrink basis-[0%] gap-8">
              <div className="text-[#32373E] font-bold">Headline</div>
              <div className="w-full font-light gap-4 mt-8">
                <div className="w-full gap-4">
                  {[1, 2, 3, 4].map((linkIndex) => (
                    <div key={linkIndex} className="text-[#32373E] flex-1 shrink basis-[0%] w-full gap-2 mt-4 first:mt-0 hover:text-[#0072EF] cursor-pointer">
                      Link
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="max-w-[600px] min-w-60 flex-1 shrink basis-[0%] gap-8">
            <div className="text-[#32373E] font-bold">Headline</div>
            <div className="w-full font-light gap-4 mt-8">
              <div className="text-[#606A76] w-full leading-6 gap-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a augue augue.
              </div>
              <div className="w-full text-[#32373E] whitespace-nowrap gap-4 mt-4">
                <div className="text-[#32373E] flex-1 shrink basis-[0%] w-full gap-2 hover:text-[#0072EF] cursor-pointer">
                  Link
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between items-center flex min-h-9 w-full gap-[40px_100px] text-sm text-white tracking-[0.07px] leading-none flex-wrap bg-[#32373E] pt-0 pb-[64px]">
        <div className="text-white self-stretch font-bold my-auto">
          ZEISS International
        </div>
        <div className="items-center self-stretch flex min-w-60 gap-8 font-normal whitespace-nowrap text-right my-auto">
          {['Link', 'Link', 'Link', 'Link', 'Link', 'Link'].map((link, index) => (
            <div key={index} className="text-white self-stretch gap-2 my-auto hover:text-[#0072EF] cursor-pointer">
              {link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
