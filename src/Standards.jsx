import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Clock, Scale, Target, Award, Gem } from 'lucide-react';

export default function Standards() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10"
    >
      {/* 1. Page Header */}
      <div className="mb-20 text-center flex flex-col items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-brand-orange font-black tracking-[0.4em] text-[10px] uppercase mb-4">
          <Zap size={12} fill="currentColor" /> Precision Engineering // Mon–Sat
        </motion.div>
        <h1 className="text-7xl font-black uppercase italic tracking-tighter mb-4">
          OPERATIONAL <span className="text-brand-orange">EXCELLENCE.</span>
        </h1>
        <p className="text-zinc-500 text-xl max-w-xl">
          We don't need to trick you to trust us. Our standards are built on 25 years of master-level mechanical execution.
        </p>
      </div>

      {/* 2. THE REFINED GLASS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
        
        <GlassCard 
          icon={<Target size={40}/>}
          title="Our Mission"
          tag="Precision"
          desc="To ensure customers receive expert automotive advice and master-tech repairs that keep their vehicles at peak 100% performance."
        />
        
        <GlassCard 
          icon={<Clock size={40}/>}
          title="Our Values"
          tag="Reliability"
          featured={true}
          desc="We prioritize your time. Our mobile service enhances convenience, ensuring your Sprinter is serviced without disrupting your daily logistics."
        />
        
        <GlassCard 
          icon={<Scale size={40}/>}
          title="Cost Effective"
          tag="Fairness"
          desc="We know times aren't easy. We offer unbeatable, competitive quotes for service and major repairs that beat any West Midlands garage."
        />
      </div>

      {/* 3. The Specialist (Keeping the Dad photo as it's the most important image) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative group">
              <div className="absolute -inset-2 bg-brand-orange opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
              <img 
                src="/dad-photo.jpg" 
                alt="The Specialist" 
                className="relative rounded-[3rem] border border-white/10 shadow-2xl grayscale brightness-110 hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-orange text-white p-10 rounded-3xl shadow-2xl rotate-3">
                <div className="text-4xl font-black italic">25+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest">Years Expertise</div>
              </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-[0.9]">
              ENGINEERING YOUR <br /> <span className="text-brand-orange">MOBILITY.</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg font-medium leading-relaxed">
                <p className="border-l-4 border-brand-orange pl-6 italic text-white text-xl">
                  "I don't just fix vans, I restore freedom. Every repair is a commitment to keeping the West Midlands moving."
                </p>
                <p>Built on a foundation of transparency and dealer-level precision, Dr. Sprinter specializes in the complex diagnostics that standard garages refuse.</p>
                <p>Based in Wednesbury, we bring main dealer expertise directly to your home or workplace.</p>
            </div>
          </div>
      </div>
    </motion.div>
  );
}

// THE NEW GLASS CARD COMPONENT (No Images Needed)
function GlassCard({ icon, title, tag, desc, featured = false }) {
  return (
    <div className={`group relative h-[450px] rounded-[3rem] overflow-hidden border transition-all duration-500 flex flex-col p-10 justify-between ${featured ? 'border-brand-orange bg-brand-orange/5 shadow-[0_0_50px_rgba(249,115,22,0.1)]' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05]'}`}>
      
      {/* Abstract Background Glow */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 blur-[100px] rounded-full transition-opacity duration-700 ${featured ? 'bg-brand-orange/20 opacity-100' : 'bg-brand-orange/10 opacity-0 group-hover:opacity-100'}`} />

      <div>
        <div className="text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
          {icon}
        </div>
        <div className="text-zinc-500 font-black uppercase tracking-[0.3em] text-[10px] mb-2">{tag}</div>
        <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-white leading-none">
          {title}
        </h3>
      </div>

      <p className="text-zinc-500 font-medium leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
        {desc}
      </p>

      {/* Decorative Corner Element */}
      <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
        <Zap size={16} className="text-brand-orange" />
      </div>
    </div>
  );
}