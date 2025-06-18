
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with basic grocery planning.',
      features: [
        'Up to 50 grocery items',
        'Basic recurring reminders',
        'Mobile access',
        'Standard support',
      ],
      limitations: [
        'No advanced analytics',
        'No family sharing',
        'No custom categories',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$4.99',
      period: 'per month',
      description: 'For serious planners who want the complete experience.',
      features: [
        'Unlimited grocery items',
        'Advanced recurring patterns',
        'Family sharing (up to 5 members)',
        'Custom categories & tags',
        'Shopping analytics',
        'Priority support',
        'Dark mode',
        'Export capabilities',
      ],
      limitations: [],
      popular: true,
    },
    {
      name: 'Family',
      price: '$9.99',
      period: 'per month',
      description: 'Perfect for large families and households.',
      features: [
        'Everything in Pro',
        'Unlimited family members',
        'Multiple shopping lists',
        'Meal planning integration',
        'Advanced notifications',
        'Dedicated account manager',
        'Custom integrations',
      ],
      limitations: [],
      popular: false,
    },
  ];

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
              Choose the plan that fits your needs. Start free and upgrade when you're ready.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                  >
                    {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                  </Button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center opacity-60">
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
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
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions? We're here to help.
            </p>
            <Button variant="outline">
              View All FAQs
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
