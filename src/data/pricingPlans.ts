export interface PricingPlan {
  name: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  description: string;
  features: string[];
  paddleProductId: string | null;
  popular: boolean;
  isEnterprise?: boolean;
}

export const getPricingPlans = (billingPeriod: 'month' | 'year'): PricingPlan[] => [
  {
    name: 'Starter',
    monthlyPrice: 5,
    yearlyPrice: 4,
    description: 'Perfect for individuals getting started.',
    features: [
      'Up to 50 grocery items',
      'Basic recurring patterns',
      'Standard categories',
      'Email notifications',
      'Mobile app access',
    ],
    paddleProductId: billingPeriod === 'month' ? 'pri_01jh4c3vz5twhe6rh5jxjzqxyz' : 'pri_01jh4c4f1wkzgv2m8q7nbpxqrs',
    popular: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 10,
    yearlyPrice: 8,
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
    paddleProductId: billingPeriod === 'month' ? 'pri_01jh4c5k9xwqj2n7r6smtzpqst' : 'pri_01jh4c6m8ywrv3k4q9tnulqrsx',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
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