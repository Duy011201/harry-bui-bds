import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PenTool } from 'lucide-react';

interface FormData {
    name: string;
    phone: string;
    email: string;
    service: string;
    scale: string;
}

// Interface cho object chứa lỗi
interface FormErrors {
    phone?: string;
    email?: string;
}

const Booking: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        service: '',
        scale: '1 - 5 nhân sự',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Hàm validate riêng biệt
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Vui lòng nhập email';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
            isValid = false;
        }

        // Validate Phone (Số điện thoại Việt Nam: bắt đầu bằng 0, theo sau là 3,5,7,8,9 và thêm 8 số nữa - tổng 10 số)
        const phoneRegex = /^(0)(3|5|7|8|9)([0-9]{8})$/;
        if (!formData.phone) {
            newErrors.phone = 'Vui lòng nhập số điện thoại';
            isValid = false;
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại không đúng định dạng (VD: 0912345678)';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Xóa lỗi của trường đang nhập (optional: giúp UI thân thiện hơn)
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Chạy validate trước khi gửi
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://n8n.ainova.vn/webhook/ea1d0e90-b3e0-4203-9217-c2783e6f130c', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Lỗi khi gửi dữ liệu');
            }

            const data = await response.json();
            console.log('Success:', data);
            setSubmitStatus('success');

            // Reset form và error
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                scale: '1 - 5 nhân sự',
            });
            setErrors({});

        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section id="booking" className="py-32 bg-charcoal-light relative scroll-mt-28">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-[#151515] hidden md:block"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16">
                        {/* Phần thông tin bên trái giữ nguyên */}
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
                                    <p className="text-sand font-serif text-xl">Email: buitiepbds@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Phần Form */}
                        <div className="w-full md:w-1/2">
                            <form onSubmit={handleSubmit} className="space-y-8 bg-charcoal p-8 border border-white/5 shadow-2xl backdrop-blur-sm">

                                {/* Input Họ tên */}
                                <div className="relative z-0 w-full group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Họ và tên</label>
                                </div>

                                {/* Input Số điện thoại - Có validation */}
                                <div className="relative z-0 w-full group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        // Thêm logic đổi màu viền nếu có lỗi
                                        className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer ${
                                            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-gold'
                                        }`}
                                        placeholder=" "
                                    />
                                    <label htmlFor="phone" className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                                        errors.phone ? 'text-red-500 peer-focus:text-red-500' : 'text-gray-500 peer-focus:text-gold'
                                    }`}>Số điện thoại</label>

                                    {/* Hiển thị lỗi */}
                                    {errors.phone && (
                                        <p className="mt-2 text-xs text-red-500 font-light">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Input Email - Có validation */}
                                <div className="relative z-0 w-full group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        // Thêm logic đổi màu viền nếu có lỗi
                                        className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer ${
                                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-gold'
                                        }`}
                                        placeholder=" "
                                    />
                                    <label htmlFor="email" className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                                        errors.email ? 'text-red-500 peer-focus:text-red-500' : 'text-gray-500 peer-focus:text-gold'
                                    }`}>Email doanh nghiệp</label>

                                    {/* Hiển thị lỗi */}
                                    {errors.email && (
                                        <p className="mt-2 text-xs text-red-500 font-light">{errors.email}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Select Nhu cầu */}
                                    <div className="relative z-0 w-full group">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer"
                                            required
                                        >
                                            <option className="bg-charcoal" value="" disabled>Nhu cầu của bạn?</option>
                                            <option className="bg-charcoal" value="rent">Thuê văn phòng có sẵn</option>
                                        </select>
                                    </div>

                                    {/* Select Quy mô */}
                                    <div className="relative z-0 w-full group">
                                        <select
                                            name="scale"
                                            value={formData.scale}
                                            onChange={handleChange}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer"
                                        >
                                            <option className="bg-charcoal" value="1-5">Quy mô: 1 - 5 nhân sự</option>
                                            <option className="bg-charcoal" value="5-20">Quy mô: 5 - 20 nhân sự</option>
                                            <option className="bg-charcoal" value="20+">Quy mô: 20 - 50 nhân sự</option>
                                            <option className="bg-charcoal" value="50+">Quy mô: 50 + nhân sự</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Thông báo trạng thái */}
                                {submitStatus === 'success' && (
                                    <div className="text-green-500 text-sm text-center">Cảm ơn bạn đã để lại thông!<br/>Chúng tôi sẽ liên hệ với bạn sớm nhất.</div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="text-red-500 text-sm text-center">Có lỗi xảy ra, vui lòng thử lại sau.</div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 bg-gold text-charcoal font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
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