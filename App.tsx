import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Differentiation from './components/Differentiation';
import Credibility from './components/Credibility';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import { Button } from './components/ui/button';

function App() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-slate-900 tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
              SkillBridge
            </span>
            <Button 
              onClick={scrollToWaitlist}
              className="text-sm font-semibold"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <Hero onScrollToWaitlist={scrollToWaitlist} />
        <ProblemSection />
        <HowItWorks />
        <Differentiation />
        <Credibility />
        <WaitlistForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;