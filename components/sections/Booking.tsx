import React from 'react';
import { Check, Calendar, CreditCard, AlertCircle, FileText, Clock, Scale, Shield, PenTool } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <>
      {/* Section 16: Consultation Form */}
      <section id="booking" className="py-32 bg-charcoal-light relative scroll-mt-28">
        {/* Background Accent */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#151515] hidden md:block"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
             <div className="w-full md:w-1/2">
                <h2 className="font-serif text-5xl text-sand mb-6">Liên hệ</h2>
                <p className="text-gray-400 mb-8 font-light text-lg">
                    Bạn muốn kiến tạo văn phòng trong mơ hay trải nghiệm không gian có sẵn? Hãy để lại thông tin để được tư vấn chi tiết.
                </p>
                <div className="bg-white/5 p-6 border border-gold/20 mb-8">
                  <h4 className="text-gold flex items-center gap-2 font-serif text-xl mb-3"><PenTool size={20}/> Custom Design Service</h4>
                  <p className="text-gray-400 text-sm font-light">
                    Chúng tôi cung cấp dịch vụ cho thuê văn phòng trọn gói theo phong cách Paris, Tokyo, hoặc New York ngay tại Việt Nam.
                  </p>
                </div>
                <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-[1px] bg-gold"></div>
                        <p className="text-sand font-serif text-xl">Hotline: 096 259 6699</p>
                    </div>
                    <div className="flex gap-4 items-center">
                         <div className="w-12 h-[1px] bg-gold"></div>
                         <p className="text-sand font-serif text-xl">Email: tiepbuibds@gmail.com</p>
                    </div>
                </div>
             </div>

             <div className="w-full md:w-1/2">
                <form className="space-y-8 bg-charcoal p-8 border border-white/5 shadow-2xl backdrop-blur-sm">
                    <div className="relative z-0 w-full group">
                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" placeholder=" " required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Họ và tên</label>
                    </div>
                    <div className="relative z-0 w-full group">
                        <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" placeholder=" " required />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Số điện thoại</label>
                    </div>
                    <div className="relative z-0 w-full group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email doanh nghiệp</label>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative z-0 w-full group">
                          <select className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer">
                              <option className="bg-charcoal" value="" disabled selected>Nhu cầu của bạn?</option>
                              <option className="bg-charcoal">Thuê văn phòng có sẵn</option>
                              <option className="bg-charcoal">Thiết kế & Thi công mới</option>
                              <option className="bg-charcoal">Tư vấn cải tạo</option>
                          </select>
                      </div>
                      <div className="relative z-0 w-full group">
                          <select className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer">
                              <option className="bg-charcoal">Quy mô: 1 - 5 nhân sự</option>
                              <option className="bg-charcoal">Quy mô: 5 - 20 nhân sự</option>
                              <option className="bg-charcoal">Quy mô: 20+ nhân sự</option>
                          </select>
                      </div>
                    </div>

                    <button type="submit" className="w-full py-4 bg-gold text-charcoal font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300">
                        Gửi thông tin
                    </button>
                </form>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;