import React from 'react';
import { motion } from 'framer-motion';

const PartnerLogo: React.FC<{ name: string; fontStyle: string }> = ({ name, fontStyle }) => (
  <div className="flex items-center justify-center min-w-[200px] md:min-w-[250px] mx-8 group cursor-pointer">
    <span className={`text-3xl md:text-4xl text-white/30 group-hover:text-gold transition-colors duration-500 whitespace-nowrap ${fontStyle}`}>
      {name}
    </span>
  </div>
);

export const Partners: React.FC = () => {
  const partners = [
    { name: "FORBES VIETNAM", fontStyle: "font-sans font-bold tracking-widest" },
    { name: "VinGroup", fontStyle: "font-serif italic font-bold" },
    { name: "Techcombank", fontStyle: "font-sans font-semibold tracking-tighter" },
    { name: "Viettel", fontStyle: "font-serif font-bold italic" },
  ];

  // Duplicate the list to ensure seamless looping
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-black border-t border-b border-white/5 relative overflow-hidden">

      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-80">
            Sự tin tưởng từ
        </span>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradients for fade effect on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Sliding Track */}
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, idx) => (
            <PartnerLogo key={idx} name={partner.name} fontStyle={partner.fontStyle} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};