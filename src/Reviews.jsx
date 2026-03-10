import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    name: "Piotr P",
    role: "Google Reviewer",
    text: "Lovely man, very professional.",
    stars: 5,
    initial: "P"
  },
  {
    name: "okamigarden",
    role: "Google Reviewer",
    text: "Top notch repair, got my van up and running in the same week. Complete engine refurb, runs like new.",
    stars: 5,
    initial: "O"
  },
  {
    name: "Aimee Barnard",
    role: "Google Reviewer",
    text: "Amazing mechanic, very professional. Quick repair time, best quotes on the market!",
    stars: 5,
    initial: "A"
  },
  {
    name: "Alan B",
    role: "Facebook Commenter",
    text: "This man won't fail you",
    stars: 5,
    initial: "A"
  }
];

export default function Reviews() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 text-brand-orange font-black tracking-[0.4em] text-[10px] uppercase mb-4">
              <Star size={12} fill="currentColor" /> Verified Feedback
            </div>
            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none">
              TRUSTED BY THE <br /> <span className="text-brand-orange">COMMUNITY.</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
             <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                <div className="flex text-brand-orange">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="font-black italic uppercase tracking-tighter">5.0 Google Rating</span>
             </div>
          </div>
        </div>

        {/* Draggable Carousel Container */}
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -900 }} 
          className="flex gap-6 cursor-grab active:cursor-grabbing"
        >
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={index}
              className="min-w-[320px] md:min-w-[400px] p-10 rounded-[3rem] bg-[#121214] border border-white/5 relative group hover:border-brand-orange/30 transition-colors"
            >
              <Quote className="absolute top-10 right-10 text-brand-orange opacity-10 group-hover:opacity-40 transition-opacity" size={40} />
              
              <div className="flex text-brand-orange mb-6">
                {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-white text-lg md:text-xl font-medium leading-relaxed italic mb-8 min-h-[100px]">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange font-black">
                  {review.initial}
                </div>
                <div>
                  <div className="font-black uppercase italic tracking-tight text-white">{review.name}</div>
                  <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="mt-12 flex items-center gap-4 text-zinc-600 md:hidden justify-center">
          <ChevronLeft size={20} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest">Drag to see reviews</span>
          <ChevronRight size={20} className="animate-pulse" />
        </div>

      </div>
    </section>
  );
}