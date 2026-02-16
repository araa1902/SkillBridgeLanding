import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    // Scroll to top on page load for fresh experience
    window.scrollTo(0, 0);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <EnhancedNavbar onScrollToWaitlist={scrollToWaitlist} />

        <main>
          <EcosystemHero onScrollToWaitlist={scrollToWaitlist} />
          <ProblemSlider />
          <TimelineSection />
          <FeatureExplorer />
          <Differentiation />
          <ImpactSection />
          <WaitlistForm />
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}

export default App;