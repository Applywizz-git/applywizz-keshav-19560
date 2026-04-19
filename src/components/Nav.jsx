import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Shield, Eye, Database, Terminal, GraduationCap, Award, Send, LayoutPanelLeft } from 'lucide-react';

const Nav = () => {
  const sections = [
    { title: 'Home', id: 'hero', icon: Shield },
    { title: 'Core', id: 'about', icon: Eye },
    { title: 'Logs', id: 'experience', icon: Database },
    { title: 'Projects', id: 'projects', icon: LayoutPanelLeft },
    { title: 'Toolkit', id: 'skills', icon: Terminal },
    { title: 'Education', id: 'education', icon: GraduationCap },
    { title: 'Credentials', id: 'certifications', icon: Award },
    { title: 'Secure', id: 'contact', icon: Send },
  ];

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
      <div className="flex flex-col gap-6 items-center">
        {/* Status Line */}
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-sentinel-primary/20 to-sentinel-primary/40"></div>
        
        {sections.map((section, index) => (
          <Link
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            activeClass="text-sentinel-primary bg-sentinel-primary/10 border-sentinel-primary shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            className="group relative w-12 h-12 border border-white/5 flex items-center justify-center transition-all cursor-pointer hover:border-sentinel-primary/50 text-white/40 hover:text-sentinel-primary"
          >
            <section.icon size={18} />
            
            {/* Tooltip */}
            <span className="absolute right-16 px-3 py-1 bg-sentinel-bg border border-sentinel-primary/20 text-[10px] uppercase tracking-[0.2em] font-mono text-sentinel-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              [ {section.title} ]
            </span>

            {/* Corner Accents (Corner HUD Effect) */}
            <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-sentinel-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-sentinel-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        ))}

        <div className="w-px h-20 bg-gradient-to-t from-transparent via-sentinel-primary/20 to-sentinel-primary/40"></div>
      </div>
    </nav>
  );
};

export default Nav;
