import { Button } from '@/components/ui/button';

export const PricingFAQ = () => {
  return (
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
  );
};