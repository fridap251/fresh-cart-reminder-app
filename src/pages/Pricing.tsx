
import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

declare global {
  interface Window {
    Paddle: any;
  }
}

const Pricing = () => {
  const [paddleReady, setPaddleReady] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('year');

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 5,
      yearlyPrice: 4, // 20% savings
      period: billingPeriod,
      description: 'Perfect for individuals getting started.',
      features: [
        'Up to 50 grocery items',
        'Basic recurring patterns',
        'Standard categories',
        'Email notifications',
        'Mobile app access',
      ],
      paddleProductId: billingPeriod === 'month' ? 'pri_01jh4c3vz5twhe6rh5jxjzqxyz' : 'pri_01jh4c4f1wkzgv2m8q7nbpxqrs', // Replace with your actual Paddle price IDs
      popular: false,
    },
    {
      name: 'Pro',
      monthlyPrice: 10,
      yearlyPrice: 8, // 20% savings
      period: billingPeriod,
      description: 'Perfect for individuals who want advanced grocery planning.',
      features: [
        'Unlimited grocery items',
        'Advanced recurring patterns',
        'Custom categories & tags',
        'Shopping analytics',
        'Priority support',
        'Dark mode',
        'Export capabilities',
        'Mobile app access',
      ],
      paddleProductId: billingPeriod === 'month' ? 'pri_01jh4c5k9xwqj2n7r6smtzpqst' : 'pri_01jh4c6m8ywrv3k4q9tnulqrsx', // Replace with your actual Paddle price IDs
      popular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      period: billingPeriod,
      description: 'Bespoke pricing for large organizations.',
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Advanced integrations',
        'Custom branding',
        'Dedicated support',
        'Custom reporting',
        'API access',
        'SLA guarantee',
      ],
      paddleProductId: null,
      popular: false,
      isEnterprise: true,
    },
  ];

  // Initialize Paddle with your live token and customer ID
  useEffect(() => {
    if (window.Paddle) {
      try {
        window.Paddle.Initialize({
          token: 'live_7d279f61a3499fed520f7cd8c08',
          pwCustomer: {
            id: 'ctm_01gt25aq4b2zcfw12szwtjrbdt'
          }
        });
        setPaddleReady(true);
        console.log('Paddle v2 initialized successfully with live token and customer ID');
        // Add a toast notification for successful initialization
        if (typeof window !== 'undefined' && window.Paddle) {
          console.log('✅ Paddle is ready to process payments');
        }
      } catch (error) {
        console.error('Paddle initialization failed:', error);
        // Fallback to basic display without checkout functionality
        setPaddleReady(false);
      }
    }
  }, []);

  // Callback to open a checkout
  const handleCheckout = (paddleProductId: string) => {
    if (window.Paddle && paddleReady && paddleProductId) {
      try {
        window.Paddle.Checkout.open({
          items: [{ priceId: paddleProductId, quantity: 1 }],
          settings: {
            displayMode: 'overlay',
            theme: 'light',
            locale: 'en',
            variant: 'one-page'
          },
          successCallback: (data: any) => {
            console.log('Payment successful:', data);
            // Handle successful payment here
          },
          errorCallback: (error: any) => {
            console.error('Payment error:', error);
            // Handle payment errors here
          }
        });
      } catch (error) {
        console.error('Checkout failed:', error);
      }
    } else if (paddleProductId === null) {
      // Handle enterprise contact
      window.location.href = 'mailto:sales@groceryreminders.com?subject=Enterprise Inquiry';
    } else {
      console.log('Paddle not ready - showing fallback message');
      alert('Payment system is loading. Please try again in a moment.');
    }
  };

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.isEnterprise) return 'Contact us';
    const price = billingPeriod === 'month' ? plan.monthlyPrice : plan.yearlyPrice;
    return `$${price}`;
  };

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

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="billing"
                  value="month"
                  checked={billingPeriod === 'month'}
                  onChange={(e) => setBillingPeriod(e.target.value as 'month' | 'year')}
                  className="sr-only"
                />
                <span className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === 'month' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Monthly
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="billing"
                  value="year"
                  checked={billingPeriod === 'year'}
                  onChange={(e) => setBillingPeriod(e.target.value as 'month' | 'year')}
                  className="sr-only"
                />
                <span className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === 'year' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Yearly <sup className="text-xs">save 20%</sup>
                </span>
              </label>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-200'}`}
              >
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
                    <span className="text-4xl font-bold">{getPrice(plan)}</span>
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
                    onClick={() => handleCheckout(plan.paddleProductId)}
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
            ))}
          </div>

          {/* FAQ Section */}
          <div className="text-center border-t pt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions? We're here to help.
            </h2>
            <p className="text-gray-600 mb-8">
              We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied within the first 14 days, contact our support team for a full refund.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              For the tutorial, check out:{' '}
              <a href="https://developer.paddle.com/build/checkout/build-pricing-page?utm_source=dx&utm_medium=codepen" className="text-primary hover:underline">
                Build a pricing page
              </a>{' '}
              -{' '}
              <a href="https://developer.paddle.com/?utm_source=dx&utm_medium=codepen" className="text-primary hover:underline">
                developer.paddle.com
              </a>
            </p>
            <Button variant="outline">
              <a href="/faqs">View All FAQs</a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
