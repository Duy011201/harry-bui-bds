import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, ShieldCheck, Handshake, Building2, Briefcase } from 'lucide-react';

const AboutPhilosophy: React.FC = () => {
  const easeConfig: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const partners = [
    { name: "VinCapital", type: "Investment" },
    { name: "Masterise", type: "Real Estate" },
    { name: "Savills", type: "Management" },
    { name: "CBRE", type: "Consulting" },
    { name: "Techcombank", type: "Finance" },
    { name: "Coteccons", type: "Construction" }
  ];

  return (
    <>
      {/* Section 4: About - Story */}
      <section className="py-24 md:py-32 relative bg-charcoal overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            {/* Image Parallax */}
            <motion.div 
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: easeConfig }}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src="/image/harrybui.jpeg"
                  alt="Harry Bùi"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-charcoal/20" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: easeConfig }}
            >
              <h3 className="text-gold text-sm tracking-widest uppercase mb-4">Câu chuyện thương hiệu</h3>
              <h2 className="font-serif text-4xl md:text-5xl text-sand mb-8 leading-tight">
                Mỗi mét vuông là một <br/>
                <span className="italic text-gold-gradient">tác phẩm nghệ thuật</span>
              </h2>
              <p className="text-gray-400 font-light text-lg mb-6 leading-relaxed">
                Chúng tôi không chỉ cung cấp một vị trí để làm việc – chúng tôi kiến tạo không gian nơi cảm xúc được khơi nguồn và hiệu suất được nâng tầm.
              </p>
              <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                Với triết lý thiết kế tối giản tinh tế kết hợp cùng tiện nghi tiêu chuẩn doanh nhân, từng góc văn phòng đều được chăm chút tỉ mỉ nhằm tôn vinh vị thế thương hiệu và truyền cảm hứng cho những quyết định mang tầm chiến lược.
              </p>
              <div className="h-[1px] w-24 bg-gold mb-8" />
              <div className="flex gap-8">
                <div>
                  <span className="block text-3xl font-serif text-sand mb-1">10+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Năm kinh nghiệm</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-sand mb-1">100+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Doanh nghiệp Premium</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: Philosophy Statement (Dark Mode Intensity) */}
      <section className="py-32 bg-charcoal-light relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-transparent opacity-40" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: easeConfig }}
          >
            <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-8 opacity-80" strokeWidth={1} />
            <h2 className="font-serif text-3xl md:text-6xl text-sand leading-snug max-w-4xl mx-auto">
              "Không gian tối ưu hóa sáng tạo, kết hợp tiện ích, ánh sáng và trải nghiệm người dùng."
            </h2>
            <p className="mt-8 text-gold italic font-serif text-xl">— Triết lý thiết kế Harry Bùi</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPhilosophy;