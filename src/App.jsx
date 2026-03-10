import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Wrench, Gauge, Shield, Zap, ArrowRight, CornerDownRight, ChevronDown, HelpCircle, Mail } from 'lucide-react';
import Reviews from './Reviews';
import { Analytics } from "@vercel/analytics/react";

// Page Imports
import Contact from './Contact';
import Pricing from './Pricing';
import Standards from './Standards';

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-100 selection:bg-brand-orange selection:text-white relative font-sans">
      
      {/* GLOBAL FIXED BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-[#050505] pointer-events-none">
        <div className="absolute inset-0">
          <img 
            src="/workshop.jpg" 
            alt="Workshop Background" 
            className="w-full h-full object-cover opacity-25 brightness-110 saturate-[0.9]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/30 to-[#050505]" />
      </div>

      {/* 1. THE EMERGENCY NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          
          {/* LOGO AREA */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src="/logo.webp" 
              alt="Dr Sprinter Logo" 
              className="w-10 h-auto group-hover:rotate-12 transition-transform" 
            />
            <div className="text-2xl font-black italic tracking-tighter">
              DR.<span className="text-brand-orange uppercase">Sprinter</span>
            </div>
          </Link>

          {/* MAIN MENU */}
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link to="/" className={`hover:text-brand-orange transition-colors ${location.pathname === '/' ? 'text-brand-orange' : ''}`}>Home</Link>
            <Link to="/standards" className={`hover:text-brand-orange transition-colors ${location.pathname === '/standards' ? 'text-brand-orange' : ''}`}>Standards</Link>
            <Link to="/pricing" className={`hover:text-brand-orange transition-colors ${location.pathname === '/pricing' ? 'text-brand-orange' : ''}`}>Pricing</Link>
            <Link to="/contact" className={`hover:text-brand-orange transition-colors ${location.pathname === '/contact' ? 'text-brand-orange' : ''}`}>Contact</Link>
          </div>

          <a href="tel:+447444284428" className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-black text-xs flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)]">
            <Phone size={14} fill="white" /> 07444 284 428
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col min-h-screen pt-20">
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/standards" element={<Standards />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="bg-[#050505] py-12 px-6 border-t border-white/5 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl font-black italic tracking-tighter">
              DR.<span className="text-brand-orange uppercase">Sprinter</span>
            </div>
            <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
              © 2026 Dr. Sprinter // West Midlands Mobile Mechanic
            </div>
            <div className="flex gap-6">
              <a href="mailto:drsprinter@hotmail.co.uk" className="text-zinc-400 hover:text-brand-orange transition-colors"><Mail size={20}/></a>
              <a href="tel:+447714309383" className="text-zinc-400 hover:text-brand-orange transition-colors"><Phone size={20}/></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute right-[-10%] top-[15%] w-[70%] opacity-10 pointer-events-none rotate-[-5deg] scale-125 z-0">
            <img src="/logo.webp" alt="Background Silhouette" className="w-full h-auto brightness-200" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-brand-orange font-black tracking-[0.4em] text-[10px] uppercase mb-6">
            <Zap size={12} fill="currentColor" /> Mercedes Specialist // Mobile Support // Mon-Sat
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-[14vw] md:text-[10vw] leading-[0.8] font-black tracking-tighter uppercase italic mb-8">
            MOBILE TESTING!!! <br /> <span className="text-brand-orange">MASTER.</span>
          </motion.h1>
          <p className="text-zinc-500 max-w-xl text-lg md:text-xl font-medium leading-relaxed mb-10">
            Expert mobile mechanical repairs brought to your door. From advanced diagnostics to full breakdowns—we restore mobility in the West Midlands.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+447714309383" className="bg-brand-orange text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-3 shadow-[0_15px_60px_rgba(249,115,22,0.2)]">
              Call Doctor Sprinter <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-4 px-8 py-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Operational: Active Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Gauge size={32} />} 
            title="Diagnostics" 
            desc="Full computer fault finding for all makes and models using dealer-level tools." 
          />
          <ServiceCard 
            icon={<Wrench size={32} />} 
            title="Mobile Repairs" 
            desc="Brakes, suspension, and engine work completed at your home or workplace." 
          />
          <ServiceCard 
            icon={<Shield size={32} />} 
            title="Fleet Care" 
            desc="Contracted maintenance for business Sprinters to keep your operation moving." 
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative group">
            <div className="absolute -inset-4 border border-brand-orange/20 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700" />
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img src="/dad-photo.jpg" alt="The Specialist" className="w-full h-auto object-cover transition-all duration-1000 ease-in-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-8 rounded-3xl shadow-2xl rotate-3">
              <div className="text-4xl font-black italic">25+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">Years Expertise</div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-brand-orange text-[10px] font-black uppercase tracking-widest">
              <Shield size={14} /> The Man Behind The Machine.
            </div>
            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-[0.9]">
              MEET THE <br /> <span className="text-brand-orange">SPECIALIST.</span>
            </h2>
            <p className="text-zinc-400 text-xl font-medium leading-relaxed italic border-l-4 border-brand-orange pl-6">
              "I don't just fix vans, I restore freedom. With every repair, I bring drivers back on the road."
            </p>
            <div className="space-y-4 text-zinc-500 font-medium text-sm md:text-base">
              <p>With over two decades of master-level mechanical experience, I've built Dr. Sprinter on the foundation of transparency and dealer-level precision.</p>
              <p>Based in Wednesbury, I specialize in the complex diagnostics and heavy-duty repairs that standard garages turn away.</p>
            </div>
          </div>
        </div>
      </section>

      <Reviews />

      {/* FAQ SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-[10px] font-black uppercase tracking-widest mb-8">
              <HelpCircle size={14} /> Knowledge Base
            </div>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-6 text-white">
              FREQUENTLY ASKED <br /> <span className="text-brand-orange">QUESTIONS.</span>
            </h2>
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group mb-8">
              <img src="/van-service.jpg" alt="Dr Sprinter Service" className="w-full h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-40" />
            </div>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="Which vehicles do you service?"
              answer="We specialise in mobile mechanic services for Sprinter vans. Vito and Viano models are taken on a case-by-case basis. While we are looking to expand, we do NOT currently support standard passenger cars."
            />
            <FAQItem 
              question="How can I contact customer support?"
              answer="Reach us at drsprinter@hotmail.co.uk or call +447714309383. You can enquire at any time during working hours for prompt solutions."
            />
            <FAQItem 
              question="What is your service guarantee?"
              answer="Our guarantee lasts up to 12 months or 25,000 miles. If our repair doesn't leave your van running at 100%, we'll look at it again free of charge."
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ServiceCard({ icon, title, desc, image }) {
  return (
    <Link to="/pricing" className="block group">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        className="relative overflow-hidden h-[450px] rounded-[2.5rem] border border-white/5 bg-white/[0.01] transition-all duration-700 ease-in-out group-hover:border-brand-orange/30 shadow-[0_15px_60px_rgba(0,0,0,0.2)]"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale opacity-20 brightness-75 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-40 group-hover:brightness-100" 
          />
          <div className="absolute inset-0 backdrop-blur-[15px] group-hover:backdrop-blur-[10px] transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent opacity-90" />
          <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between p-10">
          <div>
            <div className="mb-6 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange w-fit p-5 rounded-2xl group-hover:bg-white group-hover:text-brand-orange transition-colors duration-500 shadow-xl">
              {icon}
            </div>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-white leading-none">
              {title}
            </h3>
            <p className="text-zinc-500 font-medium leading-relaxed max-w-xs text-sm group-hover:text-zinc-300 transition-colors">
              {desc}
            </p>
          </div>
          <div className="text-brand-orange text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all border-t border-white/5 pt-6 group-hover:border-brand-orange/20">
            Explore Pricing <CornerDownRight size={14} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 pb-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex justify-between items-center text-left group">
        <span className={`text-xl font-black uppercase italic tracking-tight transition-colors ${isOpen ? 'text-brand-orange' : 'text-white group-hover:text-brand-orange/70'}`}>
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-brand-orange">
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="text-zinc-500 font-medium leading-relaxed pb-6 pr-12 text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <Analytics />
    </div>
  );
}