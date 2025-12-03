import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, Users, Lock, MapPin, Zap, Layers, Wind, ShieldCheck, Car } from 'lucide-react';

const SpacesServices: React.FC = () => {
  const easeConfig: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const specs = [
    { icon: <ShieldCheck />, title: "Chất lượng Hạng A", desc: "Tiêu chuẩn xây dựng quốc tế, sảnh đón sang trọng nâng tầm thương hiệu." },
    { icon: <Wind />, title: "Môi trường Xanh", desc: "Hệ thống lọc khí tươi, điều hòa trung tâm và ánh sáng tự nhiên tối ưu." },
    { icon: <Layers />, title: "Layout Linh hoạt", desc: "Dễ dàng tùy biến vách ngăn, sắp xếp nội thất theo văn hóa doanh nghiệp." },
    { icon: <Zap />, title: "Hạ tầng Ổn định", desc: "Điện dự phòng 100%, PCCC tiêu chuẩn, thang máy tốc độ cao." },
    { icon: <Car />, title: "Parking Rộng rãi", desc: "Hầm đỗ xe thông minh sức chứa lớn cho ô tô và xe máy." },
    { icon: <Wifi />, title: "Kết nối", desc: "Internet băng thông rộng, cáp quang doanh nghiệp đa luồng." },
  ];

  const features = [
    { icon: <Users />, title: "Meeting Lounge", desc: "Không gian họp chuẩn quốc tế" },
    { icon: <Coffee />, title: "Premium Pantry", desc: "Cà phê & trà thượng hạng 24/7" },
    { icon: <Lock />, title: "Private Suites", desc: "Bảo mật tuyệt đối, cách âm chuẩn" },
    { icon: <Wifi />, title: "Business Support", desc: "Hỗ trợ in ấn & văn phòng phẩm" },
  ];

  const spaces = [
    {
      title: "Executive Suite",
      capacity: "1–4 người",
      desc: "Văn phòng riêng tư với tầm nhìn panorama và nội thất cao cấp, tối ưu cho lãnh đạo cấp cao. Không gian yên tĩnh – chuẩn mực – thể hiện đẳng cấp doanh nghiệp.",
      img: "/public/image/anh1.jpg"
    },
    {
      title: "Open Creative Hub",
      capacity: "10–20 người",
      desc: "Không gian mở linh hoạt, thúc đẩy sáng tạo và tăng tính kết nối giữa các thành viên. Phù hợp cho đội ngũ đang phát triển và cần khả năng mở rộng nhanh.",
      img: "/public/image/anh2.jpg"
    },
    {
      title: "The Grand Hall",
      capacity: "Sự kiện 30+",
      desc: "Sảnh sự kiện sang trọng, được trang bị đầy đủ âm thanh – ánh sáng cho hội thảo, ra mắt sản phẩm và các buổi gặp gỡ chuyên nghiệp. Không gian tạo ấn tượng mạnh ngay từ khoảnh khắc đầu tiên.",
      img: "/public/image/anh3.jpg"
    }
  ];

  return (
    <>
      {/* NEW: Section 1 - Location (Vị trí) */}
      <section className="py-24 bg-charcoal border-b border-white/5 scroll-mt-28">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: easeConfig }}
            >
                <span className="text-gold text-xs tracking-[0.2em] uppercase block mb-4">Prime Location</span>
                <h2 className="font-serif text-4xl md:text-5xl text-sand mb-6 leading-tight">
                    Tọa độ Vàng <br/> <span className="text-gold-gradient italic">Kết nối Thịnh vượng</span>
                </h2>
                <div className="space-y-6 text-gray-400 font-light">
                    <p>
                        <strong className="text-white block mb-1">Giao thông huyết mạch:</strong>
                      Văn phòng nằm tại vị trí kết nối trực tiếp các tuyến giao thông trọng điểm, giúp di chuyển nhanh chóng và thuận tiện. Doanh nghiệp dễ dàng gặp gỡ đối tác và tối ưu hiệu suất làm việc hằng ngày.
                    </p>
                    <p>
                        <strong className="text-white block mb-1">Hệ sinh thái tiện ích:</strong>
                        Nằm trong khu vực an ninh cao, bao quanh bởi hệ thống ngân hàng, nhà hàng cao cấp và khách sạn 5 sao.
                    </p>
                    <p>
                        <strong className="text-white block mb-1">Định vị thương hiệu:</strong>
                        Đặt văn phòng tại tòa nhà hạng A là lời khẳng định uy tín và vị thế vững chắc của doanh nghiệp trên thị trường.
                    </p>
                </div>
            </motion.div>
            <motion.div 
                className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] bg-charcoal-light border border-white/10 p-2"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, delay: 0.2, ease: easeConfig }}
            >
                 <img src="https://picsum.photos/id/1048/800/600" alt="City Location" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute bottom-6 left-6 bg-charcoal/90 backdrop-blur-md p-4 border-l-2 border-gold max-w-xs">
                    <div className="flex items-center gap-2 text-gold mb-1"><MapPin size={16}/> Central District</div>
                    <p className="text-xs text-gray-400">Heart of the Financial District</p>
                 </div>
            </motion.div>
        </div>
      </section>

      {/* NEW: Section Building Specs (Cơ sở hạ tầng & Tiêu chuẩn) */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
            <motion.div 
                className="text-center mb-16 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeConfig }}
            >
                <h2 className="font-serif text-4xl text-sand mb-4">Tiêu chuẩn Kỹ thuật & Hạ tầng</h2>
                <p className="text-gray-400 font-light">
                    Mọi chi tiết kỹ thuật đều được tính toán để đảm bảo sự vận hành trơn tru, an toàn và chuyên nghiệp nhất.
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {specs.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        className="flex gap-4 items-start group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.8, ease: easeConfig }}
                    >
                        <div className="p-3 bg-white/5 rounded-none border border-white/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-sand mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                            <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Section 6: Signature Spaces */}
      <section id="spaces" className="py-24 bg-charcoal-light scroll-mt-28">
        <div className="container mx-auto px-6">
           <div className="mb-20">
            <h2 className="font-serif text-5xl text-sand mb-4">Không gian ấn tượng</h2>
            <p className="text-gray-400 font-light">Không gian được thiết kế theo dấu ấn riêng, tạo nên trải nghiệm làm việc mang tính nhận diện cao. Mỗi chi tiết đều được chọn lọc để truyền tải phong cách và giá trị thương hiệu.</p>
          </div>

          <div className="space-y-32">
            {spaces.map((space, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                  className="w-full md:w-3/5 group overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, ease: easeConfig }}
                >
                  <img 
                    src={space.img} 
                    alt={space.title} 
                    className="w-full h-[500px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  />
                </motion.div>

                <motion.div 
                  className="w-full md:w-2/5"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, delay: 0.2, ease: easeConfig }}
                >
                  <span className="text-gold text-xs tracking-[0.2em] uppercase block mb-4">Signature Collection</span>
                  <h3 className="font-serif text-4xl text-sand mb-4">{space.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-6 text-sm">
                    <Users size={14} /> <span>{space.capacity}</span>
                  </div>
                  <p className="text-gray-300 font-light mb-8 leading-relaxed">
                    {space.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Services Suite */}
      <section id="services" className="py-24 bg-charcoal scroll-mt-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="md:col-span-1">
                <h2 className="font-serif text-4xl text-sand leading-tight sticky top-32">
                    Dịch vụ <span className="text-gold-gradient italic">Toàn diện</span>
                </h2>
             </div>
             <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                {[
                    { title: "Lễ tân chuyên nghiệp", desc: "Đón tiếp khách hàng, xử lý thư từ và cuộc gọi với tác phong 5 sao." },
                    { title: "Hỗ trợ IT 24/7", desc: "Đội ngũ kỹ thuật luôn sẵn sàng xử lý mọi vấn đề hạ tầng mạng & server." },
                    { title: "Quản lý văn phòng", desc: "Duy trì sự sạch sẽ, ngăn nắp, bảo trì thiết bị và vận hành trơn tru mỗi ngày." },
                    { title: "Hỗ trợ pháp lý", desc: "Tư vấn đăng ký địa chỉ kinh doanh và các thủ tục hành chính liên quan." }
                ].map((svc, i) => (
                    <motion.div 
                        key={i}
                        className="group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8, ease: easeConfig }}
                    >
                        <span className="text-gold text-5xl font-serif block mb-4">0{i+1}</span>
                        <h4 className="text-xl text-sand mb-2 font-serif group-hover:text-gold transition-colors">{svc.title}</h4>
                        <p className="text-gray-500 font-light text-sm">{svc.desc}</p>
                    </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpacesServices;