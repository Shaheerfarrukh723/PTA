import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Award, Clock, Star, CheckCircle, Mail, Phone, MapPin, ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react';

function HomePage() {
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
        
        .gradient-accent {
          background: linear-gradient(135deg, var(--accent-100), var(--accent-200));
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(63, 81, 181, 0.15);
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .fade-in-delay-1 { animation-delay: 0.1s; }
        .fade-in-delay-2 { animation-delay: 0.2s; }
        .fade-in-delay-3 { animation-delay: 0.3s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .pulse-custom {
          animation: pulseCustom 2s infinite;
        }
        
        @keyframes pulseCustom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold" style={{color: 'var(--text-100)'}}>MyTutorSource</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <Link 
                to="/application"
                className="gradient-primary text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 relative overflow-hidden" style={{backgroundColor: 'var(--bg-200)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight fade-in" style={{color: 'var(--text-100)'}}>
                Excellence in
                <span className="block gradient-primary bg-clip-text text-transparent">
                  Personalized Tutoring
                </span>
              </h1>
              <p className="text-xl leading-relaxed fade-in fade-in-delay-1" style={{color: 'var(--text-200)'}}>
                Unlock your academic potential with our expert tutors. We provide customized learning experiences 
                that help students achieve their goals and build confidence in their abilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-2">
                <Link 
                  to="/application"
                  className="gradient-primary text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center group"
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4 fade-in fade-in-delay-3">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: 'var(--primary-100)'}}>500+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: 'var(--primary-100)'}}>50+</div>
                  <div className="text-sm text-gray-600">Expert Tutors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: 'var(--primary-100)'}}>98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative fade-in fade-in-delay-2">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Student learning with tutor"
                  className="rounded-2xl shadow-2xl pulse-custom"
                />
              </div>
              <div className="absolute inset-0 gradient-primary opacity-10 rounded-2xl transform rotate-6"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 gradient-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--text-100)'}}>
              Our Tutoring Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-200)'}}>
              Comprehensive academic support across all subjects and grade levels, tailored to each student's unique learning style
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: "Academic Subjects",
                description: "Expert tutoring in Math, Science, English, History, and more. From elementary to college level.",
                features: ["K-12 Curriculum", "College Prep", "Homework Help", "Test Preparation"]
              },
              {
                icon: Target,
                title: "Test Preparation",
                description: "Specialized coaching for standardized tests including SAT, ACT, GRE, and professional exams.",
                features: ["SAT/ACT Prep", "AP Exams", "Professional Tests", "Study Strategies"]
              },
              {
                icon: TrendingUp,
                title: "Skill Development",
                description: "Build essential academic and life skills including study habits, time management, and critical thinking.",
                features: ["Study Skills", "Time Management", "Critical Thinking", "Academic Planning"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover-lift border border-gray-100">
                <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--text-100)'}}>{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20" style={{backgroundColor: 'var(--bg-200)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--text-100)'}}>
              Why Choose MyTutorSource?
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-200)'}}>
              We combine experienced educators, proven methodologies, and personalized attention to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Tutors",
                description: "Qualified educators with proven track records and subject expertise"
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "Learn at your pace with convenient timing that fits your lifestyle"
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "98% of our students see grade improvements within 3 months"
              },
              {
                icon: Star,
                title: "Personalized Learning",
                description: "Customized lesson plans tailored to your unique learning style"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--text-100)'}}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--text-100)'}}>
              What Our Students Say
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-200)'}}>
              Real stories from students who've achieved their academic goals with our help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "High School Student",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
                text: "My tutor helped me raise my SAT score by 200 points! The personalized approach made all the difference.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "College Student",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
                text: "I was struggling with calculus, but my tutor's clear explanations helped me not just pass, but excel.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Parent",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
                text: "My daughter's confidence in math has soared. The tutors are patient, skilled, and truly care about student success.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover-lift border border-gray-100">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold" style={{color: 'var(--text-100)'}}>{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{backgroundColor: 'var(--bg-200)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--text-100)'}}>
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-xl mb-8" style={{color: 'var(--text-200)'}}>
                Contact us today to schedule a free consultation and discover how we can help you achieve your academic goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold" style={{color: 'var(--text-100)'}}>Call Us</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold" style={{color: 'var(--text-100)'}}>Email Us</p>
                    <p className="text-gray-600">info@mytutorsource.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold" style={{color: 'var(--text-100)'}}>Visit Us</p>
                    <p className="text-gray-600">123 Education Ave, Learning City, LC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--text-100)'}}>
                Schedule a Free Consultation
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: 'var(--text-100)'}}>First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: 'var(--text-100)'}}>Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--text-100)'}}>Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--text-100)'}}>Subject of Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option>Select a subject</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                    <option>English</option>
                    <option>History</option>
                    <option>Test Preparation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--text-100)'}}>Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your learning goals..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full gradient-primary text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">MyTutorSource</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students to reach their full potential through personalized tutoring and expert guidance.
              </p>
              <p className="text-sm text-gray-500">
                © 2024 MyTutorSource. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>info@mytutorsource.com</li>
                <li>123 Education Ave<br />Learning City, LC 12345</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;