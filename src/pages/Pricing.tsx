
import { useState } from 'react';
import { Header } from '@/components/Header';
import { usePaddle } from '@/hooks/usePaddle';
import { getPricingPlans } from '@/data/pricingPlans';
import { BillingToggle } from '@/components/pricing/BillingToggle';
import { PricingCard } from '@/components/pricing/PricingCard';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('year');
  const { paddleReady, handleCheckout } = usePaddle();
  const plans = getPricingPlans(billingPeriod);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Choose your plan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Simple, transparent pricing that grows with you. 14-day money-back guarantee.
            </p>

            <BillingToggle 
              billingPeriod={billingPeriod} 
              onBillingPeriodChange={setBillingPeriod} 
            />
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                billingPeriod={billingPeriod}
                paddleReady={paddleReady}
                onCheckout={handleCheckout}
              />
            ))}
          </div>

          <PricingFAQ />
        </div>
      </main>
    </div>
  );
};

export default Pricing;
