import { Header } from '@/components/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQs = () => {
  const faqs = [
    {
      question: 'How does Grocery Reminders work?',
      answer: 'Simply add items to your grocery list and set how often you need them (weekly, bi-weekly, monthly, or just once). Our app will automatically remind you when it\'s time to buy each item again based on your schedule.',
    },
    {
      question: 'Is Grocery Reminders free to use?',
      answer: 'We offer Pro and Family subscription plans. Check out our pricing page to see which plan fits your needs best.',
    },
    {
      question: 'Can I share my grocery lists with family members?',
      answer: 'With our Pro and Family plans, you can share your grocery lists with family members. Everyone can add items, mark them as purchased, and stay synchronized in real-time.',
    },
    {
      question: 'Does the app work offline?',
      answer: 'Yes, Grocery Reminders works offline. You can view and edit your lists even without an internet connection. Changes will sync automatically when you\'re back online.',
    },
    {
      question: 'How do I set up recurring reminders?',
      answer: 'When adding an item to your list, simply select the frequency (once, weekly, bi-weekly, or monthly). The app will automatically move purchased items back to your shopping list based on the schedule you set.',
    },
    {
      question: 'Can I categorize my grocery items?',
      answer: 'With our Pro and Family plans, you can create custom categories and tags for your grocery items. This makes it easier to organize your shopping and navigate the store efficiently.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use industry-standard encryption to protect your data. Your grocery lists and personal information are stored securely and are never shared with third parties.',
    },
    {
      question: 'Can I export my grocery lists?',
      answer: 'Yes, Pro and Family plan users can export their grocery lists in various formats (PDF, CSV, or plain text) for printing or sharing outside the app.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription at any time from your account settings. Your plan will remain active until the end of your current billing period, and you\'ll automatically be moved to the free plan.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for all paid plans. If you\'re not satisfied within the first 14 days, contact our support team for a full refund.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about Grocery Reminders
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="space-x-4">
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQs;
