import React from 'react';
import { motion } from 'framer-motion';

const Intro: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Background Ambience */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      {/* Light Effects */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-80"
      />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-sand font-light tracking-wide mb-6"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Không gian là <span className="text-gold italic">Nghệ thuật</span>
        </motion.h1>

        <motion.div
          className="h-[1px] bg-gold/50 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="mt-6 text-sm md:text-base text-gray-400 tracking-[0.2em] uppercase font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2, ease: "linear" }}
        >
          Nơi ý tưởng thăng hoa
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Intro;