import React from 'react';
import { Database, Settings, Brain, TestTube, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const About = () => {
  const workflowSteps = [
    {
      id: 1,
      title: "Dataset Collection",
      icon: <Database className="h-8 w-8 text-blue-600" />,
      description: "Comprehensive chest X-ray dataset sourced from Google Drive, containing thousands of images labeled as normal and pneumonia cases.",
      details: "Our dataset includes high-quality chest X-ray images from multiple medical institutions, ensuring diverse representation of pneumonia cases and normal lung conditions."
    },
    {
      id: 2,
      title: "Data Preprocessing",
      icon: <Settings className="h-8 w-8 text-green-600" />,
      description: "Advanced preprocessing pipeline handles class imbalance, applies data augmentation, and optimizes images for neural network training.",
      details: "Techniques include image normalization, rotation, scaling, and contrast adjustment. Class imbalance is addressed through strategic oversampling and weighted loss functions."
    },
    {
      id: 3,
      title: "Model Training",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      description: "Deep convolutional neural network trained on preprocessed data using state-of-the-art architectures and optimization techniques.",
      details: "Utilizes transfer learning with pre-trained models like ResNet and DenseNet, fine-tuned specifically for pneumonia detection with custom layers and regularization."
    },
    {
      id: 4,
      title: "Model Testing",
      icon: <TestTube className="h-8 w-8 text-orange-600" />,
      description: "Rigorous testing and validation using separate test datasets to ensure model accuracy, reliability, and generalization capability.",
      details: "Comprehensive evaluation includes accuracy, precision, recall, F1-score metrics, along with confusion matrix analysis and cross-validation testing."
    },
    {
      id: 5,
      title: "Prediction Deployment",
      icon: <Zap className="h-8 w-8 text-red-600" />,
      description: "Real-time prediction system deployed for healthcare professionals to upload X-rays and receive instant pneumonia detection results.",
      details: "User-friendly interface allows doctors to upload chest X-rays and receive immediate classification results with confidence scores and visual explanations."
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Workflow Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive pipeline behind our AI-powered pneumonia detection system, 
            from data collection to real-world deployment.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Pneumonia Detection Workflow
            </h2>
            
            {/* Visual Flow */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              {workflowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-blue-50 rounded-full mb-2">
                      {step.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center max-w-20">
                      {step.title}
                    </span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="flex-1 h-px bg-gray-300 mx-4"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="space-y-8">
          {workflowSteps.map((step, index) => (
            <Card key={step.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {step.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      Step {step.id}: {step.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {step.description}
                </CardDescription>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Details:</h4>
                  <p className="text-gray-700">{step.details}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Deep Learning</h4>
                  <p className="text-gray-600">TensorFlow, Keras, PyTorch</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Computer Vision</h4>
                  <p className="text-gray-600">OpenCV, PIL, Scikit-Image</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Data Processing</h4>
                  <p className="text-gray-600">NumPy, Pandas, Matplotlib</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
                  <p className="text-gray-600">Flask, React, FastAPI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;