import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin, Maximize, DollarSign, Check, Calendar, ArrowRight } from 'lucide-react';

const GalleryTestimonials: React.FC = () => {
  const easeConfig: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // Updated data structure with rich details
  const galleryItems = [
    {
      id: 1,
      span: "col-span-1 md:col-span-1",
      h: "h-[450px]",
      name: "Central Tower",
      location: "Quận 1 – Nguyễn Huệ",
      area: "80m² – 250m²",
      price: "Từ $25/m²/tháng",
      amenities: ["View phố đi bộ", "Nội thất da cao cấp", "Sảnh đón Luxury"],
      term: "Tối thiểu 1 năm",
      image: "/image/anh4.jpeg"
    },
    {
      id: 2,
      span: "col-span-1 md:col-span-1",
      h: "h-[450px]",
      name: "Sapphire Office Hub",
      location: "Quận 3 – Võ Văn Tần",
      area: "50m² – 150m²",
      price: "Từ 20 triệu/tháng",
      amenities: ["Không gian xanh", "Phòng họp 24/7", "Pantry miễn phí"],
      term: "Tối thiểu 6 tháng",
      image: "/image/anh5.jpeg"
    },
    {
      id: 3,
      span: "col-span-1 md:col-span-1",
      h: "h-[450px]",
      name: "Artistry Workplace",
      location: "Thảo Điền – Quận 2",
      area: "100m² – 400m²",
      price: "Từ $18/m²/tháng",
      amenities: ["Thiết kế Creative", "Hồ bơi sân thượng", "Pet friendly"],
      term: "Tối thiểu 1 năm",
      image: "/image/anh6.jpeg"
    },
    {
      id: 4,
      span: "col-span-1 md:col-span-2",
      h: "h-[450px]",
      name: "Saigon Finance Center",
      location: "Quận 1 – Tôn Đức Thắng",
      area: "200m² – 1000m²",
      price: "Liên hệ báo giá",
      amenities: ["View sông Sài Gòn", "An ninh 3 lớp", "Hầm xe thông minh", "Helipad"],
      term: "Tối thiểu 2 năm",
      image: "/image/anh7.jpeg"
    },
    {
      id: 5,
      span: "col-span-1 md:col-span-1",
      h: "h-[450px]",
      name: "Zen Garden Office Center",
      location: "Phú Nhuận – Center Point",
      area: "60m² – 120m²",
      price: "Từ $22/m²/tháng",
      amenities: ["Sân vườn riêng", "Cách âm tuyệt đối", "Yoga Studio"],
      term: "Tối thiểu 1 năm",
      image: "/image/anh8.jpeg"
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Việc chuyển sang văn phòng mới không chỉ nâng tầm hình ảnh thương hiệu mà còn giúp chúng tôi cải thiện hiệu suất làm việc đáng kể. Đối tác khi đến đều ấn tượng ngay từ ánh nhìn đầu tiên.",
      author: "Nguyễn Minh Tuấn",
      role: "CEO, TechFlow Vietnam",
      avatar: "https://picsum.photos/id/64/200/200"
    },
    {
      id: 2,
      text: "Mỗi chi tiết thiết kế đều mang đến sự sáng tạo và cảm hứng. Không gian làm việc này giúp đội ngũ của tôi duy trì nguồn năng lượng tích cực và bứt phá trong từng dự án.",
      author: "Sarah Le",
      role: "Creative Director, ArtSpace",
      avatar: "https://picsum.photos/id/65/200/200"
    },
    {
      id: 3,
      text: "Dịch vụ đạt chuẩn quốc tế. Đội ngũ hỗ trợ luôn nhanh chóng và chu đáo. Đây là nơi tôi cảm thấy hoàn toàn yên tâm để tiếp đón nhà đầu tư và các đối tác chiến lược.",
      author: "David Chen",
      role: "Founder, Skyline Ventures",
      avatar: "https://picsum.photos/id/66/200/200"
    },
    {
      id: 4,
      text: "Từ ánh sáng, vật liệu đến cách bài trí, tất cả đều thể hiện tư duy kiến trúc hiện đại. Nhân viên của tôi cảm thấy như đang làm việc tại trụ sở của một tập đoàn toàn cầu.",
      author: "Trần Thu Hằng",
      role: "HR Manager, GlobalLink",
      avatar: "https://picsum.photos/id/67/200/200"
    },
    {
      id: 5,
      text: "Không gian văn phòng không chỉ là nơi làm việc, mà là nền tảng giúp doanh nghiệp thể hiện tầm nhìn và đẳng cấp. Đây là khoản đầu tư xứng đáng nhất mà chúng tôi từng thực hiện.",
      author: "Michael Roberts",
      role: "Regional Director, Pioneer Group",
      avatar: "https://picsum.photos/id/68/200/200"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Section 11: Gallery */}
      <section id="gallery" className="py-24 bg-charcoal scroll-mt-28">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-4xl text-sand">Không gian văn phòng</h2>
            <div className="h-[1px] w-20 bg-gold mt-4"></div>
          </div>
          {/* <button className="text-gold text-sm uppercase tracking-widest hover:text-white transition-colors">Xem tất cả</button> */}
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative group overflow-hidden ${item.span} ${item.h} border border-white/5`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: easeConfig }}
            >
              <img
                src={`${item.image}`}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                {/* Title & Price */}
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-sand mb-1">{item.name}</h3>
                  <div className="flex items-center gap-2 text-gold font-bold text-lg">
                    <DollarSign size={18} />
                    {item.price}
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Maximize size={16} className="text-gold flex-shrink-0" />
                    <span>{item.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gold flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Calendar size={16} className="text-gold flex-shrink-0" />
                    <span>Thuê: {item.term}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Tiện ích chính:</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {item.amenities.map((am, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={12} className="text-gold" /> {am}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-gold text-charcoal font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                    Liên hệ <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 12: Testimonials Slider */}
      <section className="py-32 bg-charcoal-light relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-5 pointer-events-none">
          <Quote size={300} className="text-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative min-h-[400px] flex items-center justify-center">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: easeConfig }}
                  className="text-center w-full"
                >
                  <div className="flex justify-center mb-8">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} className="text-gold fill-gold mx-1" />)}
                  </div>

                  <p className="font-serif text-2xl md:text-4xl text-sand italic leading-relaxed mb-12 px-4 md:px-12">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-700 mb-6 overflow-hidden border-2 border-gold p-1">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].author}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h4 className="text-gold text-xl font-serif mb-1">{testimonials[currentIndex].author}</h4>
                    <span className="text-gray-500 text-sm uppercase tracking-widest">{testimonials[currentIndex].role}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 border border-white/10 rounded-full text-gray-400 hover:text-gold hover:border-gold transition-all hidden md:block z-20 bg-charcoal/50 backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 border border-white/10 rounded-full text-gray-400 hover:text-gold hover:border-gold transition-all hidden md:block z-20 bg-charcoal/50 backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Mobile Dots */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-gold w-8' : 'bg-gray-600 w-2'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryTestimonials;