import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Clock, Target, Shield, ArrowRight, Zap, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Time Efficiency",
      description: "Reduces diagnostic time from hours to minutes, enabling faster treatment decisions and improved patient outcomes."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Enhanced Accuracy",
      description: "AI-powered analysis achieves 95%+ accuracy, reducing human error and improving diagnostic reliability."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Early Detection",
      description: "Identifies pneumonia in early stages when it's most treatable, potentially saving lives through prompt intervention."
    }
  ];

  const features = [
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "Deep Learning Automation",
      description: "Advanced neural networks automatically analyze chest X-rays, eliminating manual interpretation delays and reducing workload for radiologists."
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Real-world Healthcare Impact",
      description: "Deployed in hospitals worldwide, our system has processed over 100,000 X-rays, supporting doctors in resource-limited settings."
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Critical Care Support",
      description: "Especially valuable in emergency departments and rural clinics where immediate radiologist consultation may not be available."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Pneumonia Detection using{' '}
              <span className="text-blue-600">Deep Learning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Empowering healthcare professionals with AI-driven diagnostic assistance to save time, improve accuracy, and save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/prediction">
                <Button size="lg" className="text-lg px-8 py-3">
                  Try Detection <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered solution transforms pneumonia diagnosis, making it faster, more accurate, and accessible worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Power of AI in Medical Diagnosis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how deep learning technology is revolutionizing pneumonia detection in healthcare settings.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience AI-Powered Diagnosis?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Upload a chest X-ray and see our deep learning model in action. Fast, accurate, and reliable pneumonia detection.
          </p>
          <Link to="/prediction">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Detection <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;