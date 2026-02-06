import React, { useState } from 'react';
import { Upload, FileImage, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const Prediction = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length === 0) return;
    
    const file = files[0];
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a JPEG or PNG image file.",
        variant: "destructive"
      });
      return;
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB.",
        variant: "destructive"
      });
      return;
    }
    
    setSelectedFile(file);
    setResult(null);
    toast({
      title: "File uploaded successfully",
      description: "Ready for pneumonia detection analysis.",
    });
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate API call with mock result
    setTimeout(() => {
      const mockResult = {
        prediction: Math.random() > 0.5 ? 'Pneumonia Detected' : 'Normal',
        confidence: (Math.random() * 0.3 + 0.7).toFixed(2), // 70-100% confidence
        processing_time: (Math.random() * 2 + 1).toFixed(1) // 1-3 seconds
      };
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setResult(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pneumonia Detection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload a chest X-ray image to analyze for pneumonia using our AI-powered detection system.
          </p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileImage className="h-6 w-6" />
              Upload Chest X-ray
            </CardTitle>
            <CardDescription>
              Supported formats: JPEG, PNG • Maximum size: 10MB
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!selectedFile ? (
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors duration-200 ${
                  dragActive
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Drop your X-ray image here
                </h3>
                <p className="text-gray-600 mb-4">
                  or click to browse from your computer
                </p>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button className="cursor-pointer">
                    Select Image
                  </Button>
                </label>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileImage className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{selectedFile.name}</p>
                      <p className="text-sm text-gray-600">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" onClick={resetUpload}>
                    Change Image
                  </Button>
                </div>
                
                {!isAnalyzing && !result && (
                  <Button onClick={simulateAnalysis} className="w-full">
                    Analyze for Pneumonia
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Loading State */}
        {isAnalyzing && (
          <Card className="mb-8">
            <CardContent className="p-8 text-center">
              <Loader className="mx-auto h-12 w-12 text-blue-600 animate-spin mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Analyzing X-ray...
              </h3>
              <p className="text-gray-600">
                Our AI model is processing the image. This may take a few moments.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Results Section */}
        {result && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {result.prediction === 'Normal' ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-red-600" />
                )}
                Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Prediction</h4>
                  <p className={`text-lg font-bold ${
                    result.prediction === 'Normal' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {result.prediction}
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Confidence</h4>
                  <p className="text-lg font-bold text-blue-600">
                    {(result.confidence * 100).toFixed(0)}%
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Processing Time</h4>
                  <p className="text-lg font-bold text-gray-600">
                    {result.processing_time}s
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Medical Disclaimer</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      This AI analysis is for educational purposes only and should not replace professional medical diagnosis. 
                      Always consult with qualified healthcare professionals for medical decisions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Image Requirements</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Clear chest X-ray images</li>
                  <li>• JPEG or PNG format</li>
                  <li>• Maximum file size: 10MB</li>
                  <li>• Front-facing chest view preferred</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Analysis Process</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Upload image via drag & drop or browse</li>
                  <li>• AI model processes the X-ray</li>
                  <li>• Receive prediction with confidence score</li>
                  <li>• Review results and disclaimers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Prediction;