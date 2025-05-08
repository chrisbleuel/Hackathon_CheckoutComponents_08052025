import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Stepper } from '@/components/order/Stepper';
import { OrderDetails } from '@/components/order/OrderDetails';
import { OrderSummary } from '@/components/order/OrderSummary';
export default function Index() {
  return <div className="bg-white">
      <Header />
      
      <main className="w-full">
        <div className="bg-white w-full">
          <div className="py-8 max-w-[1440px] mx-auto px-[32px]">
            <Stepper />
            
            <div className="mt-8">
              <h1 className="text-[#32373E] text-[32px] font-bold leading-none tracking-[0.48px]">
                Confirm your order.
              </h1>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap lg:flex-nowrap">
              <OrderDetails />
              <OrderSummary />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}