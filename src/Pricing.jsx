import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Info, PhoneCall } from 'lucide-react';

export default function Pricing() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10"
    >
      {/* HEADER */}
      <div className="mb-20">
        <h1 className="text-7xl font-black uppercase italic tracking-tighter mb-6">
          FAIR RATES, <br /> <span className="text-brand-orange">ZERO GUESSWORK.</span>
        </h1>
        <p className="text-zinc-500 text-xl max-w-2xl leading-relaxed">
          At Dr. Sprinter, we believe in workmanship over markups. Because every repair is unique, we provide bespoke quotes based on the specific health of your vehicle.
        </p>
      </div>

      {/* THE "WHY NO FIXED PRICE" BOX */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] mb-16 flex flex-col md:flex-row gap-8 items-start">
        <div className="bg-brand-orange/20 p-4 rounded-2xl text-brand-orange">
          <Info size={32} />
        </div>
        <div>
          <h3 className="text-2xl font-black uppercase italic mb-2">Our Quoting Philosophy</h3>
          <p className="text-zinc-400 font-medium leading-relaxed">
            No two jobs are alike. We don't believe in "flat rates" that overcharge for simple fixes. We diagnose first, then provide a competitive, unbeatable price for the West Midlands. Our goal is top-notch workmanship that fits your budget.
          </p>
        </div>
      </div>

      {/* ESTIMATE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <EstimateCard 
          title="Diagnostics"
          price="65"
          desc="Full system scan using dealer-level Mercedes tools."
        />
        <EstimateCard 
          title="Interim Service"
          price="145"
          desc="Essential maintenance to keep your engine running smooth."
        />
        <EstimateCard 
          title="Full Service"
          price="220"
          desc="The complete health check and filter overhaul."
        />
      </div>

      {/* THE GUARANTEE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-10 rounded-[3rem] bg-brand-orange text-white">
          <ShieldCheck size={48} className="mb-6" />
          <h3 className="text-4xl font-black uppercase italic mb-4">The Dr. Sprinter Guarantee</h3>
          <p className="font-bold text-lg leading-relaxed opacity-90">
            Every repair is backed by a 12-month or 25,000-mile warranty. If our repair doesn't leave your van at 100%, we'll look at it again free of charge.
          </p>
        </div>
        
        <div className="p-10 rounded-[3rem] border border-white/10 bg-[#121214] flex flex-col justify-center">
          <h3 className="text-3xl font-black uppercase italic mb-4">Need a Quote?</h3>
          <p className="text-zinc-500 mb-8 font-medium">
            The fastest way to get an accurate price is to call us. We can usually give you an estimate over the phone once we hear the symptoms.
          </p>
          <a href="tel:+447444284428" className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all w-fit">
            <PhoneCall size={20} /> Contact us for Estimate
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function EstimateCard({ title, price, desc }) {
  return (
    <div className="p-10 rounded-[2.5rem] border border-white/5 bg-[#121214] group hover:border-brand-orange/50 transition-all">
      <div className="text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-2">
        <Zap size={14} className="text-brand-orange" /> Master Tech Service
      </div>
      <h3 className="text-3xl font-black uppercase italic mb-2">{title}</h3>
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-zinc-500 text-sm font-bold uppercase">From</span>
        <span className="text-5xl font-black italic text-brand-orange">£{price}</span>
      </div>
      <p className="text-zinc-500 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  );
}