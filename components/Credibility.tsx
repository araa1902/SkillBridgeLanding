import React from 'react';

const Credibility: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Backed by Research & Built by Students
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">87%</div>
                <p className="text-slate-600 text-sm">of students struggle to find verified early-career experience.</p>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l md:border-r border-slate-100">
                <div className="text-4xl font-bold text-slate-900 mb-2">Verified</div>
                <p className="text-slate-600 text-sm">University of Bath student-led initiative.</p>
            </div>
            <div className="p-6">
                 <div className="text-4xl font-bold text-slate-900 mb-2">2x</div>
                 <p className="text-slate-600 text-sm">Faster hiring for short-term projects vs. traditional recruiting.</p>
            </div>
        </div>

        <div className="mt-12 inline-block bg-slate-50 rounded-lg px-6 py-4 border border-slate-200">
            <p className="text-slate-700 italic">
                "The future of early-career hiring is project-based, not CV-based."
            </p>
        </div>
      </div>
    </section>
  );
};

export default Credibility;