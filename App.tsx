import React, { useEffect, useRef } from 'react';
import EnhancedNavbar from './components/EnhancedNavbar';
import EcosystemHero from './components/EcosystemHero';
import ProblemSlider from './components/ProblemSlider';
import TimelineSection from './components/TimelineSection';
import FeatureExplorer from './components/FeatureExplorer';
import Differentiation from './components/Differentiation';
import ImpactSection from './components/ImpactSection';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import { GridPattern } from './components/ui/grid-pattern';
import type { WaitlistFormHandle } from './components/WaitlistForm';

function App() {
  const waitlistFormRef = useRef<WaitlistFormHandle>(null);

  useEffect(() => {
    // Scroll to top on page load for fresh experience
    window.scrollTo(0, 0);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Focus the email input after a brief delay to allow the scroll to complete
      setTimeout(() => {
        waitlistFormRef.current?.focusEmailInput();
      }, 600);
    }
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-50">
          <GridPattern 
            className="absolute inset-0"
            width={40}
            height={40}
            strokeDasharray="0"
            x={0}
            y={0}
            strokeColor="rgb(30, 58, 138)"
          />
        </div>
        
        <EnhancedNavbar onScrollToWaitlist={scrollToWaitlist} />

        <main>
          <EcosystemHero onScrollToWaitlist={scrollToWaitlist} />
          <ProblemSlider />
          <TimelineSection />
          <FeatureExplorer />
          <Differentiation />
          <ImpactSection />
          <WaitlistForm ref={waitlistFormRef} />
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}

export default App;