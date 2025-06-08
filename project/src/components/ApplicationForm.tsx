import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronDown, Menu, X } from 'lucide-react';

interface FormData {
  country: string;
  parentName: string;
  email: string;
  whatsappCountryCode: string;
  whatsappNumber: string;
  gradeLevel: string;
  subjects: string;
  urgency: string;
  comments: string;
}

function ApplicationForm() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    country: 'United States of America',
    parentName: '',
    email: '',
    whatsappCountryCode: 'AE +971',
    whatsappNumber: '',
    gradeLevel: '',
    subjects: '',
    urgency: '',
    comments: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const countries = [
    'United States of America',
    'United Kingdom',
    'Canada',
    'Australia',
    'United Arab Emirates',
    'India',
    'Singapore',
    'Other'
  ];

  const countryCodes = [
    'AE +971',
    'US +1',
    'UK +44',
    'CA +1',
    'AU +61',
    'IN +91',
    'SG +65'
  ];

  const gradeLevels = [
    'Pre-K',
    'Kindergarten',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10',
    'Grade 11',
    'Grade 12',
    'College/University',
    'Adult Learning'
  ];

  const urgencyOptions = [
    'Immediately',
    'Within a week',
    'Within 2 weeks',
    'Within a month',
    'Flexible timing'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required';
    }

    if (!formData.gradeLevel) {
      newErrors.gradeLevel = 'Grade/Level is required';
    }

    if (!formData.subjects.trim()) {
      newErrors.subjects = 'Please list the subjects';
    }

    if (!formData.urgency) {
      newErrors.urgency = 'Please select when you need a tutor';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      alert('Thank you for your application! We will contact you soon.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS Variables */}
      <style>{`
        :root {
          --primary-100: #3F51B5;
          --primary-200: #757de8;
          --primary-300: #dedeff;
          --accent-100: #2196F3;
          --accent-200: #003f8f;
          --text-100: #333333;
          --text-200: #5c5c5c;
          --bg-100: #FFFFFF;
          --bg-200: #f5f5f5;
          --bg-300: #cccccc;
        }
        
        .gradient-primary {
          background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
        }
        
        .form-input {
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(63, 81, 181, 0.15);
        }
        
        .error-input {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold" style={{color: 'var(--text-100)'}}>MyTutorSource</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Private Tutoring
              </a>
              <span className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
                Online Tutoring (Free Trial)
              </span>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                How it Works
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Home
                </Link>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Pricing
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Private Tutoring
                </a>
                <span className="text-blue-600 font-semibold">
                  Online Tutoring (Free Trial)
                </span>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  How it Works
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 min-h-screen" style={{backgroundColor: 'var(--bg-200)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Form Header */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl font-bold mb-4" style={{color: 'var(--text-100)'}}>
              Tuition Request Form
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Your information is kept confidential.
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 fade-in">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Country */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{color: 'var(--text-100)'}}>
                  Your Country <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input appearance-none bg-white"
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Parent/Guardian Name */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{color: 'var(--text-100)'}}>
                  Name of Parent/Guardian <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input ${
                    errors.parentName ? 'error-input' : 'border-gray-300'
                  }`}
                  placeholder="Enter parent or guardian's full name"
                />
                {errors.parentName && (
                  <p className="mt-2 text-sm text-red-600">{errors.parentName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{color: 'var(--text-100)'}}>
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input ${
                    errors.email ? 'error-input' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{color: 'var(--text-100)'}}>
                  WhatsApp# (Preferably Guardian's) <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  <div className="relative w-32">
                    <select
                      name="whatsappCountryCode"
                      value={formData.whatsappCountryCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input appearance-none bg-white text-sm"
                    >
                      {countryCodes.map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    className={`flex-1 px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input ${
                      errors.whatsappNumber ? 'error-input' : 'border-gray-300'
                    }`}
                    placeholder="Enter WhatsApp number"
                  />
                </div>
                {errors.whatsappNumber && (
                  <p className="mt-2 text-sm text-red-600">{errors.whatsappNumber}</p>
                )}
              </div>

              {/* Grade Level */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{color: 'var(--text-100)'}}>
                  Grade/Level of Student <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input appearance-none bg-white ${
                      errors.gradeLevel ? 'error-input' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select grade/level</option>
                    {gradeLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                {errors.gradeLevel && (
                  <p className="mt-2 text-sm text-red-600">{errors.gradeLevel}</p>
                )}
              </div>

              {/* Subjects */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{color: 'var(--text-100)'}}>
                  List of Subjects <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input ${
                    errors.subjects ? 'error-input' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Mathematics, Physics, Chemistry, English"
                />
                {errors.subjects && (
                  <p className="mt-2 text-sm text-red-600">{errors.subjects}</p>
                )}
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{color: 'var(--text-100)'}}>
                  How soon do you want a tutor? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input appearance-none bg-white ${
                      errors.urgency ? 'error-input' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select</option>
                    {urgencyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                {errors.urgency && (
                  <p className="mt-2 text-sm text-red-600">{errors.urgency}</p>
                )}
              </div>

              {/* Comments */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{color: 'var(--text-100)'}}>
                  Any comments (Optional)
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input resize-none"
                  placeholder="Please share any specific requirements, learning goals, or additional information that would help us find the perfect tutor for your child..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full gradient-primary text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--primary-100)'}}>
                What happens next?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team will review your application and match you with qualified tutors within 24 hours. 
                You'll receive a call to discuss your requirements and schedule a free trial session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;