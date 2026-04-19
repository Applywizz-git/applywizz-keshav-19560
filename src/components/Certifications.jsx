import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { title: 'Risk Job Simulation', provider: 'Goldman Sachs' },
    { title: 'Technology Risk Simulation', provider: 'EY' },
    { title: 'CAMS Prep: AML Foundations', provider: 'LinkedIn Learning' },
    { title: 'Financial Crime Compliance', provider: 'LinkedIn Learning' },
    { title: 'Financial Risk Management', provider: 'Coursera' },
    { title: 'Banking Risk Management', provider: 'Coursera' }
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-sentinel-bg sentinel-grid">
      <div className="container mx-auto px-8 lg:px-24 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
           <div>
              <div className="flex items-center gap-4 mb-6">
                <Award size={20} className="text-sentinel-primary" />
                <span className="text-sentinel-primary text-[10px] uppercase font-mono tracking-widest">[VAULT::VERIFIED_CREDENTIALS]</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter">
                CREDIBILITY <br /> <span className="text-sentinel-primary">VALIDATED.</span>
              </h2>
           </div>
           <div className="hidden md:block w-32 h-[1px] bg-sentinel-primary/20 mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 bg-white/5 border border-white/5 hover:border-sentinel-primary/40 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="p-3 bg-sentinel-primary/10 rounded-sm group-hover:bg-sentinel-primary group-hover:text-sentinel-bg transition-all">
                  <ShieldCheck size={20} />
                </div>
                <div>
                   <h3 className="text-lg font-bold uppercase italic tracking-tighter group-hover:text-sentinel-primary transition-colors">{cert.title}</h3>
                   <span className="text-[10px] font-mono text-sentinel-slate uppercase tracking-widest">{cert.provider}</span>
                </div>
              </div>
              
              <CheckCircle2 size={16} className="text-sentinel-primary/20 group-hover:text-sentinel-primary transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
