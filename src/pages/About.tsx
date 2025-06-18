
import { Header } from '@/components/Header';
import { List, Clock, Smartphone, Heart } from 'lucide-react';

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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Grocery Reminders
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to make grocery shopping simpler, smarter, and more efficient. 
              No more forgotten items, no more emergency store runs - just organized, stress-free shopping.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Grocery Reminders?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
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

        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                Grocery Reminders was born from a simple frustration: constantly forgetting essential items 
                at the grocery store. We realized that most people struggle with the same problem - keeping 
                track of what they need, when they need it, and how often.
              </p>
              <p>
                Our team of passionate developers and design enthusiasts came together to create a solution 
                that's both powerful and beautifully simple. We believe that the best tools are the ones 
                you barely notice using - they just work, seamlessly integrating into your daily routine.
              </p>
              <p>
                Today, thousands of users rely on Grocery Reminders to keep their pantries stocked and 
                their shopping trips efficient. We're constantly improving and adding new features based 
                on user feedback, because your grocery shopping experience matters to us.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
