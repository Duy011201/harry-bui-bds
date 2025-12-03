import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Unified easing
  const easeConfig: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://picsum.photos/id/1031/1920/1080"
          alt="Luxury Office"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.h2
          className="text-xs md:text-sm text-gold tracking-[0.3em] uppercase mb-6 mt-8 font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: easeConfig }}
        >
          Premium Workspace Collection
        </motion.h2>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: easeConfig }}
        >
          Khám Phá Không Gian <br />
          <span className="italic font-light">Sang Trọng Của Bạn</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: easeConfig }}
        >
          Một trải nghiệm văn phòng độc đáo, thiết kế dành riêng cho sự sáng tạo và hiệu quả đỉnh cao.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: easeConfig }}
        >
          {/* <button className="group relative px-8 py-4 bg-transparent border border-white/30 hover:border-gold transition-colors duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3 text-white group-hover:text-gold transition-colors">
              <Play size={16} /> Xem Video
            </span>
            <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button> */}

          <button className="px-8 py-4 bg-gold text-charcoal font-semibold tracking-widest hover:bg-white transition-colors duration-300 flex items-center gap-3">
            Liên hệ ngay <ArrowRight size={16} />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;