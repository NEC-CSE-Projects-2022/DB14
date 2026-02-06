import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { mockCreators } from '../data/mockData';

const Creators = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The talented individuals behind the pneumonia detection system, 
            combining expertise in AI, machine learning, and healthcare technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockCreators.map((creator, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 max-w-sm mx-auto">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-200">
                  <img 
                    src={creator.image} 
                    alt={creator.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-2xl font-bold text-blue-600">
                      {creator.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl">{creator.name}</CardTitle>
                <p className="text-blue-600 font-medium">{creator.role}</p>
              </CardHeader>
              <CardContent>
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2"
                    onClick={() => window.open(creator.linkedin, '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2"
                    onClick={() => window.open(creator.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Team Info */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Academic Excellence
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Our team represents a collaborative effort between experienced faculty guidance 
                  and dedicated student researchers at Narasaraopeta Engineering College. Together, 
                  we're exploring the intersection of artificial intelligence and healthcare to 
                  develop innovative solutions for medical diagnosis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Creators;