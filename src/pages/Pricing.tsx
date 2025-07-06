
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

  const plans = [
    {
      name: 'Pro',
      price: '$5',
      period: 'per month',
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
      paddleProductId: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
      popular: true,
    },
    {
      name: 'Family',
      price: '$10',
      period: 'per month',
      description: 'Perfect for families and households.',
      features: [
        'Everything in Pro',
        'Unlimited family members',
        'Multiple shopping lists',
        'Family sharing & collaboration',
        'Meal planning integration',
        'Advanced notifications',
        'Dedicated account manager',
        'Custom integrations',
        'Lifetime access',
        'Future updates included',
        'Early access to new features',
      ],
      paddleProductId: 'pri_01gsz8z1q1n00f12qt82y31smh',
      popular: false,
    },
  ];

  // Initialize Paddle with the newer v2 API
  useEffect(() => {
    if (window.Paddle) {
      try {
        // For testing, we'll use a sandbox seller ID
        // Replace with your actual seller ID in production
        window.Paddle.Initialize({
          token: 'test_' + '33494', // This is a test format for sandbox
          sandbox: true // Enable sandbox mode for testing
        });
        setPaddleReady(true);
        console.log('Paddle v2 initialized successfully');
      } catch (error) {
        console.error('Paddle initialization failed:', error);
        // Fallback to basic display without checkout functionality
        setPaddleReady(false);
      }
    }
  }, []);

  // Callback to open a checkout
  const handleCheckout = (paddleProductId: string) => {
    if (window.Paddle && paddleReady) {
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
            // You might want to redirect to a success page or update user state
          },
          errorCallback: (error: any) => {
            console.error('Payment error:', error);
            // Handle payment errors here
          }
        });
      } catch (error) {
        console.error('Checkout failed:', error);
      }
    } else {
      console.log('Paddle not ready - showing fallback message');
      alert('Payment system is loading. Please try again in a moment.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. 14-day money-back guarantee for all paid plans.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
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
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${plan.popular ? 'bg-primary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => handleCheckout(plan.paddleProductId)}
                    disabled={!paddleReady}
                  >
                    {paddleReady ? 'Get Started' : 'Loading...'}
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
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions? We're here to help.
            </h2>
            <p className="text-gray-600 mb-8">
              We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied within the first 14 days, contact our support team for a full refund.
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
