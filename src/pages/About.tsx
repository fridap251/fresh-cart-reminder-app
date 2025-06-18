
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { List, Clock, Smartphone, Heart, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: List,
      title: 'Smart Lists',
      description: 'Create and manage your grocery lists with intelligent categorization and suggestions.',
    },
    {
      icon: Clock,
      title: 'Recurring Reminders',
      description: 'Set up automatic reminders for items you buy regularly - weekly, bi-weekly, or monthly.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Access your lists anywhere, anytime. Perfect for shopping on the go.',
    },
    {
      icon: Heart,
      title: 'Simple & Beautiful',
      description: 'Clean, intuitive design that makes grocery planning a joy instead of a chore.',
    },
    {
      icon: Users,
      title: 'Family Sharing',
      description: 'Share lists with family members and collaborate on shopping together.',
    },
    {
      icon: Zap,
      title: 'Smart Analytics',
      description: 'Track your shopping patterns and optimize your grocery budget.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <List className="h-12 w-12 text-primary" />
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
                Grocery Reminders
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Never forget an item again. Smart grocery lists with automatic reminders that adapt to your shopping habits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              14-day free trial • No credit card required
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Everything you need for smarter shopping
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to transform your grocery shopping?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of users who have already simplified their shopping routine.
            </p>
            <Link to="/signup">
              <Button size="lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <List className="h-8 w-8 text-primary" />
                  <span className="text-xl font-bold text-gray-900">Grocery Reminders</span>
                </div>
                <p className="text-gray-600 max-w-md">
                  Making grocery shopping simpler, smarter, and more efficient for everyone.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
                  <li><Link to="/faqs" className="hover:text-primary">FAQs</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
                  <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2024 Grocery Reminders. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default About;
