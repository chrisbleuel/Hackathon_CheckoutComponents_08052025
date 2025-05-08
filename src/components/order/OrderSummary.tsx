
import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PaymentLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="justify-center items-center flex w-12 h-8 border border-[#E6EBF0] bg-white p-2 rounded-[3px]">
    <img src={src} alt={alt} className="object-contain max-w-full max-h-full" />
  </div>
);

export const OrderSummary = () => {
  return (
    <div className="min-w-60 flex-1 shrink basis-[0%]">
      <div className="text-[#32373E] text-xl font-light leading-[1.4] tracking-[0.1px]">
        Summary
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#606A76] text-xs">LACOSTE TH6319</span>
          <span className="text-[#32373E] font-medium">₹ 5.000</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#606A76] text-xs">Delivery</span>
          <span className="text-[#32373E] font-medium">Free</span>
        </div>
        <div className="border-t border-[#C2CDD6] mt-4 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-[#606A76] text-xs">Total</span>
            <span className="text-[#32373E] font-medium">₹ 5.000</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-[#32373E] text-xl font-light mb-4">Delivery details</div>
        <div className="bg-white p-4 rounded">
          <div className="text-[#1C1B1F] font-medium">Anna Mathews</div>
          <div className="text-[#606A76] text-sm mt-1">
            37 Marshall St, Carnaby, London W1F 7EZ, Vereinigtes Königreich
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-[#32373E] text-xl font-light mb-4">Billing details</div>
        <div className="bg-white p-4 rounded">
          <div className="text-[#1C1B1F] font-medium">Anna Mathews</div>
          <div className="text-[#606A76] text-sm mt-1">
            37 Marshall St, Carnaby, London W1F 7EZ, Vereinigtes Königreich
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button className="w-full bg-[#0072EF] text-white font-medium h-12 rounded-[3px]">
          <span>Confirm and pay</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <div className="flex flex-wrap gap-2 p-4">
          {[
            'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/c444b40892030bf5d2c291bb3005cd50b1a1a8ce?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/1f4a9fce55e3bd8230055eeb388af75c4aa02ac4?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/1acf50de2262ba43a20b97b28b61600684fb6c96?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/1ba36fb09060a968da98da2f4d94f099478184ed?placeholderIfAbsent=true',
            'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/e0b3a3bea88b56dbfd28ac1578078dd0f100a7a1?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/e31522e1ef42512cdaf1d2d7c8fe212a317e830b?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/e885512322492c1bc0a74ddc1502826795dafee9?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/1c4272d330196603c803c40b4a19e954c6353899?placeholderIfAbsent=true',
            'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/24860f7153971388f6c14cb48bf29e95f9e355ac?placeholderIfAbsent=true'
          ].map((url, index) => (
            <PaymentLogo key={index} src={url} alt={`Payment method ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="mt-8 bg-[#F2F5F8] p-4">
        <div className="text-[#32373E] text-xl font-light mb-4">Got a discount code?</div>
        <div className="flex gap-2">
          <Input placeholder="Enter code" className="flex-1" />
          <Button variant="link" className="text-[#0065D1]">
            Apply <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

