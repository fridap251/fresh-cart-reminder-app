
import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
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
      paddleProductId: 'pri_01jy8xample1pro123', // Replace with your actual Paddle Pro product ID
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
      paddleProductId: 'pri_01jy8xample2fam456', // Replace with your actual Paddle Family product ID
      popular: false,
    },
  ];

  useEffect(() => {
    // Initialize Paddle v2
    const initializePaddle = () => {
      if (typeof window !== 'undefined' && (window as any).Paddle) {
        (window as any).Paddle.Environment.set('sandbox'); // Change to 'production' for live environment
        (window as any).Paddle.Initialize({
          token: 'test_your_client_side_token_here' // Replace with your actual Paddle client-side token
        });
      }
    };

    // Check if Paddle is already loaded
    if (typeof window !== 'undefined' && (window as any).Paddle) {
      initializePaddle();
    } else {
      // Wait for Paddle to load
      const checkPaddle = setInterval(() => {
        if (typeof window !== 'undefined' && (window as any).Paddle) {
          initializePaddle();
          clearInterval(checkPaddle);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkPaddle), 10000);
    }
  }, []);

  const handleCheckout = (paddleProductId: string) => {
    // Paddle v2 checkout integration
    if (typeof window !== 'undefined' && (window as any).Paddle) {
      (window as any).Paddle.Checkout.open({
        items: [
          {
            priceId: paddleProductId,
            quantity: 1
          }
        ],
        settings: {
          displayMode: 'overlay',
          theme: 'light',
          locale: 'en'
        },
        customer: {
          // Optional: pre-fill customer information
          // email: 'customer@example.com'
        }
      });
    } else {
      console.error('Paddle.js not loaded or not initialized');
      // Fallback: show error message to user
      alert('Payment system is currently unavailable. Please try again later.');
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
                  >
                    Get Started
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

      {/* Paddle v2 Script */}
      <script src="https://cdn.paddle.com/paddle/v2/paddle.js" />
    </div>
  );
};

export default Pricing;
