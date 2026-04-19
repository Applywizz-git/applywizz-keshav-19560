import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "AML / KYC Analyst",
      company: "Fifth Third Bank",
      duration: "Jan 2025 - Present",
      bullets: [
        "Reviewed 40–60 AML alerts weekly in Actimize and AML case management systems.",
        "Conducted suspicious activity investigations identifying typologies like layering.",
        "Prepared Suspicious Activity Reports (SARs) submitted to FinCEN with 16% escalation rate.",
        "Performed CDD and EDD reviews for 25+ high-risk customers monthly."
      ]
    },
    {
      role: "Financial Crime Risk Intern",
      company: "Goldman Sachs",
      duration: "Sep 2024 - Oct 2024",
      bullets: [
        "Reviewed 200+ structured records identifying abnormal leverage and liquidity gaps.",
        "Performed risk-based analysis improving high-risk profile identification by 15%.",
        "Conducted default exposure modeling reducing projected loss exposure by ~12%.",
        "Produced risk assessment reports summarizing key exposure indicators."
      ]
    },
    {
      role: "AML Technology Risk Intern",
      company: "EY",
      duration: "Jul 2024 - Aug 2024",
      bullets: [
        "Reviewed 150+ system records identifying excessive privileges in workflows.",
        "Validated data accuracy between source transaction datasets and monitoring outputs.",
        "Analyzed system logs with SQL reducing reporting discrepancies by ~16%.",
        "Tested technology controls supporting AML monitoring platforms."
      ]
    },
    {
      role: "Compliance Analyst",
      company: "HSBC",
      duration: "Jul 2021 - Dec 2023",
      bullets: [
        "Queried cross-border transactions using SQL to detect unusual spikes and structuring.",
        "Built dashboards tracking transaction patterns improving turnaround by 22%.",
        "Validated KYC onboarding datasets achieving 98% customer data accuracy.",
        "Automated data extraction workflows reducing manual prep time by 30%."
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Tab Select */}
          <div className="lg:w-5/12">
            <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase mb-10 block underline-offset-8 underline decoration-primary">02 / Journey</span>
            <h2 className="mb-16 uppercase">EXPERIENCE.</h2>
            
            <div className="flex flex-col gap-3">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left p-8 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    activeIndex === i ? 'bg-primary border-primary' : 'bg-white/[0.02] border-white/5 grayscale group-hover:grayscale-0'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest block mb-2 ${activeIndex === i ? 'text-white/60' : 'text-primary'}`}>
                      {exp.duration}
                    </span>
                    <h3 className={`text-xl font-bold transition-colors ${activeIndex === i ? 'text-white' : 'text-white/30'}`}>
                      {exp.company}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform ${
                    activeIndex === i ? 'border-white rotate-45' : 'border-white/10 text-white/10'
                  }`}>
                    →
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detailed View */}
          <div className="lg:w-7/12 flex items-center min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full glass-effect p-10 md:p-16 rounded-[40px] border-white/5 relative overflow-hidden flex flex-col justify-center"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8">Role Blueprint</div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  {experiences[activeIndex].role}
                </h3>
                <h4 className="text-secondary font-black text-xs tracking-widest uppercase mb-12 italic">{experiences[activeIndex].company}</h4>

                <ul className="space-y-6">
                  {experiences[activeIndex].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-6 text-lg text-text-secondary leading-relaxed font-medium group">
                      <span className="text-primary font-black">0{idx + 1}</span>
                      <span className="group-hover:text-white transition-colors">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
