import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, Zap, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    const response = await fetch("https://formspree.io/f/mzdjejoy", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEFT: THE DETAILS */}
        <div className="space-y-12">
          <div>
            <h1 className="text-7xl font-black uppercase italic tracking-tighter mb-8 text-white">
              GET IN <br /> <span className="text-brand-orange">TOUCH.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <ContactMethod 
                icon={<Phone size={24} />}
                label="Call today!"
                value="0771 4330 9383"
                href="tel:+447714309383"
                highlight={true}
              />
              <ContactMethod 
                icon={<MessageSquare size={24} />}
                label="WhatsApp"
                value="Instant Message"
                href="https://wa.me/447714309383"
              />
            </div>

            <ServiceMap />

            <div className="flex items-center gap-6 p-6 border-l-4 border-brand-orange bg-brand-orange/5 rounded-r-3xl mt-12">
                <Clock className="text-brand-orange" />
                <div>
                  <div className="text-white font-black uppercase italic text-lg">Reliable Field Support</div>
                  <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Available Mon–Sat | 8AM – 6PM</div>
                </div>
            </div>
          </div>
        </div>

        {/* RIGHT: THE INQUIRY FORM */}
        <div className="bg-[#121214] border border-white/5 p-10 rounded-[3rem] shadow-2xl h-fit sticky top-32 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {status === "SUCCESS" ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-black uppercase italic text-white mb-4 tracking-tighter">Message Received.</h3>
                <p className="text-zinc-400 max-w-xs mx-auto">We'll get back to you shortly to discuss your van.</p>
                <button 
                  onClick={() => setStatus("")}
                  className="mt-8 text-brand-orange font-black uppercase tracking-widest text-xs underline underline-offset-8"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                <h3 className="text-3xl font-black uppercase italic mb-8 text-white">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Your Name</label>
                      <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-orange transition-colors text-white placeholder:text-zinc-700" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Phone Number</label>
                      <input required name="phone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-orange transition-colors text-white placeholder:text-zinc-700" placeholder="07123 456 789" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Van Model / Reg</label>
                    <input required name="van_details" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-orange transition-colors text-white placeholder:text-zinc-700" placeholder="Mercedes Sprinter 2018" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">How can we help?</label>
                    <textarea required name="message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-orange transition-colors text-white placeholder:text-zinc-700" placeholder="Describe the fault or service needed..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-orange text-white py-6 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-[0_20px_40px_rgba(249,115,22,0.2)] active:scale-95">
                    {status === "SENDING" ? "Sending..." : "Send Inquiry"} <Send size={18} />
                  </button>
                  
                  {status === "ERROR" && (
                    <p className="text-red-500 text-xs font-bold text-center">Something went wrong. Please call us directly.</p>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// --- INTERNAL COMPONENTS ---

function ServiceMap() {
  const serviceAreas = ["Birmingham", "Wolverhampton", "Walsall", "Dudley", "Sandwell", "Solihull"];

  return (
    <div className="relative w-full h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-[#050505] shadow-2xl group flex flex-col">
      
      {/* 1. ACTUAL MAP IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/west-midlands-map.png" 
          alt="West Midlands Map" 
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
        />
        {/* Blue/Orange Heatmap Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/10 via-transparent to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* 2. RADAR & SCANNER OVERLAY */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        
        {/* HQ Pulse (Centered on the visual) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
                <div className="w-4 h-4 bg-brand-orange rounded-full shadow-[0_0_20px_rgba(249,115,22,1)]" />
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute top-0 left-0 w-4 h-4 rounded-full border border-brand-orange/50"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 20, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 4, delay: i * 1.3 }}
                    />
                ))}
            </div>
        </div>

        {/* Scanner Line */}
        <motion.div 
          className="absolute top-0 bottom-0 w-[2px] bg-brand-orange/30 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          animate={{ left: ['0%', '100%', '0%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 3. FLOATING CONTENT */}
      <div className="relative z-20 h-full p-8 flex flex-col justify-between pointer-events-none">
        
        {/* Top Card */}
        <div className="bg-[#121214]/90 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl w-fit pointer-events-auto">
          <div className="flex items-center gap-3 text-brand-orange font-black uppercase tracking-[0.3em] text-[10px] mb-4">
            <Zap size={14} fill="currentColor" /> Service map
          </div>
          <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-6 leading-none">
            WEST <br /> MIDLANDS
          </h3>
          <div className="flex flex-wrap gap-2 max-w-[220px]">
            {serviceAreas.map(area => (
              <span key={area} className="text-[9px] font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-zinc-400 uppercase tracking-widest">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Elements */}
        <div className="space-y-6 pointer-events-auto">
          <div className="flex items-center gap-4 bg-brand-orange text-white px-8 py-4 rounded-2xl w-fit shadow-[0_15px_40px_rgba(249,115,22,0.4)]">
            <MapPin size={18} fill="currentColor" />
            <span className="text-xs font-black uppercase tracking-widest italic leading-none text-white">HQ: Wednesbury</span>
          </div>
          
          <div className="bg-[#050505]/95 backdrop-blur-md p-6 rounded-3xl border border-white/10 max-w-sm">
            <p className="text-zinc-400 text-sm font-medium leading-relaxed italic">
              "Providing 100% mobile coverage for Sprinter and Vito vans across the entire Black Country and Greater Birmingham area. We may travel further for larger jobs or fleet contracts. Just ask!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactMethod({ icon, label, value, href, highlight = false }) {
  return (
    <a 
      href={href}
      className={`p-6 rounded-3xl border transition-all flex items-center gap-4 ${highlight ? 'bg-brand-orange border-brand-orange text-white' : 'bg-white/5 border-white/10 hover:border-brand-orange'}`}
    >
      <div className={highlight ? 'text-white' : 'text-brand-orange'}>{icon}</div>
      <div>
        <div className={`text-[10px] font-black uppercase tracking-widest ${highlight ? 'text-white/80' : 'text-zinc-500'}`}>{label}</div>
        <div className="text-lg font-black uppercase italic tracking-tight">{value}</div>
      </div>
    </a>
  );
}