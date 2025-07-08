import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { PricingPlan } from '@/data/pricingPlans';

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: 'month' | 'year';
  paddleReady: boolean;
  onCheckout: (paddleProductId: string | null) => void;
}

export const PricingCard = ({ plan, billingPeriod, paddleReady, onCheckout }: PricingCardProps) => {
  const getPrice = () => {
    if (plan.isEnterprise) return 'Contact us';
    const price = billingPeriod === 'month' ? plan.monthlyPrice : plan.yearlyPrice;
    return `$${price}`;
  };

  return (
    <Card className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-200'}`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{getPrice()}</span>
          {!plan.isEnterprise && (
            <span className="text-gray-600 ml-1">
              / per user {billingPeriod === 'month' ? 'monthly' : 'yearly'}
            </span>
          )}
          {plan.isEnterprise && (
            <div className="text-gray-600 text-sm mt-1">bespoke pricing</div>
          )}
        </div>
        <p className="text-gray-600 mt-2">{plan.description}</p>
      </CardHeader>
      <CardContent>
        <Button 
          className={`w-full mb-6 ${plan.popular ? 'bg-primary' : ''}`}
          variant={plan.popular ? 'default' : 'outline'}
          onClick={() => onCheckout(plan.paddleProductId)}
          disabled={!paddleReady && !plan.isEnterprise}
        >
          {plan.isEnterprise 
            ? 'Inquire now' 
            : paddleReady 
              ? 'Sign up now' 
              : 'Loading...'
          }
        </Button>
        
        <div className="space-y-3">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};