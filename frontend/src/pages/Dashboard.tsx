import React, { useState, useEffect } from 'react';
import { Brain, Trophy, Youtube, Target, Users, Sparkles, BookOpen, Star, Award, Rocket, Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Dashboard() { 
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80",
      content: "QuizPlay Learn transformed how I study programming. The AI-powered quizzes helped me master complex concepts quickly."
    },
    {
      name: "Michael Chen",
      role: "Data Science Professional",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80",
      content: "The platform's reward system keeps me motivated. I've learned more in 3 months than I did in a year of self-study."
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80",
      content: "The curated content is top-notch. It's like having a personal learning path designed just for you."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-2">
                  <Brain className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                    QuizPlay Learn
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">How it Works</a>
              <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Testimonials</a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              <button
    onClick={() => navigate('/signup')}
    className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg"
>
    Get Started
</button>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 

                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg py-4 px-6 space-y-4">
              <a href="#features" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Features</a>
              <a href="#how-it-works" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">How it Works</a>
              <a href="#testimonials" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Testimonials</a>
              <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-6 py-2 rounded-full hover:opacity-90">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-300 dark:bg-primary-900/50 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary-300 dark:bg-secondary-900/50 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-900/50 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="relative animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
              🚀 The Future of Learning is Here
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400 bg-clip-text text-transparent">
              Learn, Quiz,
              <br />
              Earn Rewards
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your learning journey with interactive quizzes, curated content, and exciting rewards.
              Master new skills while having fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <a href='http://localhost:5173/learn' > 
                <div className="relative bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all transform hover:scale-105">
                  Start Learning Now
                  
                </div>
                  </a>
              </button>
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 px-8 py-3 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all transform hover:scale-105">
                  Watch Demo
                </div>
              </button>
            </div>
          </div>

          {/* Stats with Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <StatCard number="1000+" label="Video Lessons" icon={<Youtube className="w-6 h-6 text-primary-600 dark:text-primary-400" />} />
            <StatCard number="50K+" label="Active Users" icon={<Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />} />
            <StatCard number="100+" label="Topics" icon={<BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />} />
            <StatCard number="5000+" label="Quizzes" icon={<Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary-600/[0.03] dark:bg-grid-white/[0.02] -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent mb-4">
              Why Choose QuizPlay Learn?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience a revolutionary learning platform that combines education with engagement
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Youtube className="w-12 h-12 text-primary-600 dark:text-primary-400" />}
              title="Curated Content"
              description="Access carefully selected YouTube playlists organized by topic and difficulty level."
            />
            <FeatureCard 
              icon={<Target className="w-12 h-12 text-primary-600 dark:text-primary-400" />}
              title="AI-Powered Quizzes"
              description="Smart quizzes that adapt to your learning pace and focus on key concepts."
            />
            <FeatureCard 
              icon={<Trophy className="w-12 h-12 text-primary-600 dark:text-primary-400" />}
              title="Earn Rewards"
              description="Get tokens for correct answers and consistent learning. Redeem for exciting rewards!"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
              Process
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get started with QuizPlay Learn in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <ProcessCard 
              number="1"
              icon={<BookOpen className="w-12 h-12 text-primary-600 dark:text-primary-400" />}
              title="Choose Your Topic"
              description="Browse through our extensive library of curated content and select your area of interest."
            />
            <ProcessCard 
              number="2"
              icon={<Youtube className="w-12 h-12 text-primary-600 dark:text-primary-400" />}
              title="Watch & Learn"
              description="Access high-quality video content from top educators and industry experts."
            />
            <ProcessCard 
              number="3"
              icon={<Star className="w-12 h-12 text-primary-600 dark:text-primary-400" />}
              title="Take Quizzes & Earn"
              description="Test your knowledge through interactive quizzes and earn rewards for your progress."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied learners who have transformed their education journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-700 dark:to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="animate-float">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already experiencing the future of interactive education.
            </p>
            <button className="group relative inline-flex items-center">
              <div className="absolute -inset-0.5 bg-white rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Get Started for Free</span>
                <Rocket className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
                QuizPlay Learn
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Terms</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Privacy</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
            © 2024 QuizPlay Learn. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ number, label, icon }:any) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition-all hover:scale-105 group dark:shadow-gray-700/30">
      <div className="flex items-center justify-center space-x-4">
        <div className="p-3 bg-primary-50 dark:bg-primary-900/50 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-800/50 transition-colors">
          {icon}
        </div>
        <div className="text-left">
          <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400">{number}</h3>
          <p className="text-gray-600 dark:text-gray-300">{label}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }:any) {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all hover:scale-105 hover:shadow-xl group">
      <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/50 rounded-lg inline-block group-hover:bg-primary-100 dark:group-hover:bg-primary-800/50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function ProcessCard({ number, icon, title, description }:any) {
  return (
    <div className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition-all hover:scale-105 group">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/50 rounded-lg inline-block group-hover:bg-primary-100 dark:group-hover:bg-primary-800/50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, role, image, content }:any) {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition-all hover:scale-105 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">{content}</p>
      <div className="mt-4 flex text-primary-600 dark:text-primary-400">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
      </div>
    </div>
  );
}

export default Dashboard;