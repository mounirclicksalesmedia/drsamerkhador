"use client"

import { Mail, Phone, MapPin, Award, Users, Zap, Heart, ArrowRight, CheckCircle, Star } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

// Google Ads Conversion Tracking - DISABLED for testing
// Will re-enable once we identify the Vercel/domain issue
function gtag_report_conversion() {
  // Temporarily disabled
}

// Before/After Slider Component
function BeforeAfterSlider({ before, after, title, description }: { before: string; after: string; title: string; description: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX)
  }

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-4/3 rounded-2xl overflow-hidden cursor-ew-resize select-none glass-indigo p-1"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After Image (Base) */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <Image 
            src={after} 
            alt="بعد" 
            fill 
            className="object-cover"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute top-4 left-4 bg-indigo-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
            بعد
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image 
            src={before} 
            alt="قبل" 
            fill 
            className="object-cover"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute top-4 right-4 bg-violet-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
            قبل
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-6 bg-indigo-500"></div>
              <div className="w-0.5 h-6 bg-indigo-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-indigo-200">{description}</p>
      </div>
    </div>
  )
}

export default function DentalClinicLanding() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const services = [
    {
      icon: "✨",
      title: "طب الأسنان التجميلي",
      description: "حوّل ابتسامتك مع علاجاتنا التجميلية الفاخرة",
      features: ["تبييض الأسنان", "القشور الخزفية", "تصميم الابتسامة"],
    },
    {
      icon: "🦷",
      title: "الرعاية الترميمية",
      description: "تقنيات الترميم المتقدمة لصحة الفم المثالية",
      features: ["زراعة الأسنان", "التيجان", "الجسور"],
    },
    {
      icon: "🔬",
      title: "علاج اللثة",
      description: "علاجات متخصصة لصحة اللثة والعظام",
      features: ["تنظيف عميق", "علاج الجذور", "ترقيع اللثة"],
    },
  ]

  const features = [
    { icon: Award, label: "25+ عام خبرة", value: "التميز" },
    { icon: Users, label: "10000+ عميل سعيد", value: "الثقة" },
    { icon: Zap, label: "أحدث التقنيات", value: "الابتكار" },
    { icon: Heart, label: "التركيز على المريض", value: "الرعاية" },
  ]

  const testimonials = [
    {
      name: "سارة أحمد",
      text: "د. خضور حوّل ابتسامتي بما يفوق توقعاتي. الاهتمام بالتفاصيل والرعاية استثنائية!",
      rating: 5,
      before: "/testimonials/sara/before.jpg",
      after: "/testimonials/sara/after.jpg",
    },
    {
      name: "شيخة محمد",
      text: "25 عاماً من الخبرة تظهر حقاً. محترف، لطيف، ونتائج تتحدث عن نفسها.",
      rating: 5,
      before: "/testimonials/shaikhah/before.jpg",
      after: "/testimonials/shaikhah/after.jpg",
    },
    {
      name: "ستيفان ويلسون",
      text: "أفضل رعاية أسنان تلقيتها على الإطلاق. تكنولوجيا حديثة مع خبرة لا تصدق.",
      rating: 5,
      before: "/testimonials/stafan/before.jpg",
      after: "/testimonials/stafan/after.jpg",
    },
  ]

  return (
    <div className="w-full bg-linear-to-b from-indigo-950 via-indigo-900 to-violet-950 min-h-screen overflow-hidden">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز موعد"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => gtag_report_conversion()}
        className="fixed bottom-6 right-6 z-50 group transition-transform hover:scale-110 active:scale-90"
      >
        {/* Pulsing Ring Animation - CSS only */}
        <div
          className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"
        />
        
        {/* Main Button */}
        <div className="relative w-16 h-16 bg-linear-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center">
          {/* WhatsApp Icon */}
          <svg
            className="w-9 h-9 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>

          {/* Notification Badge */}
          <div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-indigo-950 flex items-center justify-center animate-bounce"
          >
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white text-stone-900 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-semibold">
            تواصل عبر واتساب
            <div className="absolute top-full right-6 -mt-1">
              <div className="border-8 border-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      </a>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 glass-indigo border-b border-indigo-200/30 m-0 rounded-none transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="transition-opacity duration-500">
            <Image src="/Logowhite.png" alt="د. سامر خضور" width={120} height={48} className="object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-indigo-100 hover:text-indigo-300 transition luxury-text text-sm">
              الخدمات
            </a>
            <a href="#doctor" className="text-indigo-100 hover:text-indigo-300 transition luxury-text text-sm">
              عن الدكتور
            </a>
            <a href="#testimonials" className="text-indigo-100 hover:text-indigo-300 transition luxury-text text-sm">
              شهادات المرضى
            </a>
            <a href="#contact" className="text-indigo-100 hover:text-indigo-300 transition luxury-text text-sm">
              اتصل بنا
            </a>
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز موعد"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion()}
              className="px-6 py-2 bg-linear-to-r from-indigo-500 to-violet-400 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-sm inline-block hover:scale-105 active:scale-95"
            >
              احجز الآن
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Static Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 glass rounded-full transition-transform hover:scale-105">
                  <span className="text-indigo-200 text-sm font-semibold">✨ رعاية أسنان فاخرة</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white luxury-text leading-tight">
                  ابتسامتك،
                  <br />
                  <span className="bg-linear-to-r from-indigo-300 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                    بكل إتقان
                  </span>
                </h1>
              </div>
              <p className="text-lg text-indigo-100 luxury-text leading-relaxed">
                اختبر رعاية أسنان عالمية المستوى مع د. سامر خضور، خبير متميز في طب الأسنان الترميمي والتجميلي مع 25 عاماً من التميز من جامعة دمشق.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز استشارة مع د. سامر خضور"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => gtag_report_conversion()}
                  className="px-8 py-4 bg-linear-to-r from-indigo-500 to-violet-400 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 text-center hover:scale-105 active:scale-95"
                >
                  احجز استشارة
                </a>
                <a
                  href="https://wa.me/963123456789?text=مرحباً، أرغب في معرفة المزيد عن خدماتكم"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => gtag_report_conversion()}
                  className="px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/20 transition-all text-center hover:scale-105 active:scale-95"
                >
                  تواصل معنا
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-indigo-200/30">
                <div>
                  <p className="text-3xl font-bold text-indigo-300">10000+</p>
                  <p className="text-sm text-indigo-200">مريض سعيد</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-300">25+</p>
                  <p className="text-sm text-indigo-200">عام خبرة</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-300">99%</p>
                  <p className="text-sm text-indigo-200">نسبة الرضا</p>
                </div>
              </div>
            </div>

            {/* Doctor Card with Glass Effect */}
            <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center animate-fade-in-up animation-delay-200">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-violet-400 to-indigo-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative glass-indigo p-1 w-full h-96 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full h-full bg-linear-to-b from-indigo-900/50 to-violet-900/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/hero.jpeg"
                    alt="د. سامر خضور"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-indigo-950/90 via-indigo-900/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">د. سامر خضور</h3>
                    <p className="text-sm text-indigo-200">طب الأسنان الترميمي والتجميلي</p>
                    <div className="flex justify-start gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-indigo-400 text-indigo-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all text-center hover:scale-105 hover:-translate-y-1 duration-300"
                >
                  <Icon className="w-8 h-8 text-indigo-300 mx-auto mb-4" />
                  <p className="text-sm text-indigo-200 mb-2">{feature.label}</p>
                  <p className="text-2xl font-bold text-white">{feature.value}</p>
                </div>
              )
            })}
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في معرفة المزيد عن خدماتكم"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion()}
              className="inline-block px-8 py-4 bg-linear-to-r from-green-500 to-green-600 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              تواصل معنا عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white luxury-text">خدماتنا المميزة</h2>
            <p className="text-lg text-indigo-200 luxury-text">تميز طبي شامل مصمم خصيصاً لاحتياجاتك</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-indigo p-8 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-5xl mb-4 group-hover:rotate-360 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-indigo-200 mb-4 luxury-text">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2"
                    >
                      <CheckCircle size={16} className="text-indigo-300" />
                      <span className="text-sm text-indigo-100">{feature}</span>
                    </div>
                  ))}
                </div>
                {hoveredCard === index && (
                  <div className="mt-4 pt-4 border-t border-indigo-200/50 flex items-center gap-2 text-indigo-300 font-semibold text-sm animate-fade-in">
                    <ArrowRight size={16} className="rotate-180" />
                    اعرف المزيد
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في الاستفسار عن الخدمات المتاحة"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion()}
              className="inline-block px-8 py-4 bg-linear-to-r from-green-500 to-green-600 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              استفسر عن خدماتنا
            </a>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section
        id="doctor"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-indigo-900/50 to-violet-900/50 relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl hidden md:block animate-pulse"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white luxury-text">تعرّف على د. سامر خضور</h2>
              <p className="text-lg text-indigo-100 luxury-text leading-relaxed">
                خريج متميز من جامعة دمشق مع 25 عاماً من الخبرة في طب الأسنان الترميمي والتجميلي. يجمع د. خضور بين التميز الأكاديمي والإتقان السريري لتقديم رعاية أسنان متحولة.
              </p>

              <div className="space-y-4">
                <div className="glass p-4 rounded-xl transition-transform hover:translate-y-1 duration-300">
                  <p className="font-semibold text-white mb-1">🎓 التعليم والمؤهلات</p>
                  <p className="text-sm text-indigo-100">
                    دكتور في جراحة الأسنان (DDS)، دبلوم، ماجستير في العلوم (MDS)، ودكتوراه في طب الأسنان الترميمي والتجميلي - جامعة دمشق
                  </p>
                </div>
                <div className="glass p-4 rounded-xl transition-transform hover:translate-y-1 duration-300">
                  <p className="font-semibold text-white mb-1">🏆 الإنجازات</p>
                  <p className="text-sm text-indigo-100">
                    أستاذ مشارك في جامعة دمشق، عضو ومتحدث في الجمعية الدولية لأبحاث طب الأسنان (IADR) الولايات المتحدة، عضو في الأكاديمية الأمريكية لطب الأسنان التجميلي
                  </p>
                </div>
                <div className="glass p-4 rounded-xl transition-transform hover:translate-y-1 duration-300">
                  <p className="font-semibold text-white mb-1">💫 الفلسفة</p>
                  <p className="text-sm text-indigo-100">
                    الجمع بين المعرفة الأكاديمية المتقدمة والدقة الفنية لخلق ابتسامات جميلة ودائمة تحوّل الحياة
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-violet-400 to-indigo-400 rounded-3xl blur-2xl opacity-30"></div>
              <div className="glass-indigo p-1 rounded-3xl overflow-hidden relative hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-square bg-linear-to-br from-indigo-900 to-violet-900 rounded-3xl relative overflow-hidden">
                  <Image 
                    src="/dr.jpeg" 
                    alt="د. سامر خضور" 
                    fill 
                    className="object-cover rounded-3xl"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز استشارة مع د. سامر خضور"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion()}
              className="inline-block px-8 py-4 bg-linear-to-r from-green-500 to-green-600 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              احجز استشارة الآن
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials with Before/After */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white luxury-text">شهادات المرضى</h2>
          <p className="text-lg text-indigo-200 luxury-text">استمع لمن اختبروا التحول</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="space-y-4 hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Before/After Slider */}
                <BeforeAfterSlider
                  before={testimonial.before}
                  after={testimonial.after}
                  title={testimonial.name}
                  description=""
                />
                
                {/* Testimonial Card */}
                <div className="glass-indigo p-6 rounded-2xl">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-indigo-400 text-indigo-400" />
                    ))}
                  </div>
                  <p className="text-indigo-100 luxury-text italic text-sm">&ldquo;{testimonial.text}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في الحصول على ابتسامة مثالية"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion()}
              className="inline-block px-8 py-4 bg-linear-to-r from-green-500 to-green-600 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              ابدأ رحلتك للتحول الآن
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="glass-indigo p-12 rounded-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white luxury-text">جاهز للتحوّل؟</h2>
              <p className="text-lg text-indigo-100 luxury-text">
                تواصل مع فريقنا لحجز استشارتك الحصرية
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass p-6 rounded-2xl space-y-2 hover:translate-y-1 transition-transform duration-300">
                <Mail size={24} className="text-indigo-300" />
                <p className="font-semibold text-white">البريد الإلكتروني</p>
                <a href="mailto:info@drkhaddour.com" className="text-indigo-300 text-sm hover:underline">
                  info@drkhaddour.com
                </a>
              </div>
              <div className="glass p-6 rounded-2xl space-y-2 hover:translate-y-1 transition-transform duration-300">
                <Phone size={24} className="text-indigo-300" />
                <p className="font-semibold text-white">الهاتف</p>
                <a href="tel:+963123456789" className="text-indigo-300 text-sm hover:underline" dir="ltr">
                  +963 (12) 345-6789
                </a>
              </div>
              <div className="glass p-6 rounded-2xl space-y-2 hover:translate-y-1 transition-transform duration-300">
                <MapPin size={24} className="text-indigo-300" />
                <p className="font-semibold text-white">الموقع</p>
                <p className="text-indigo-100 text-sm">دمشق، سوريا</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-indigo-100 text-lg">
                تواصل معنا مباشرة عبر واتساب لحجز استشارتك
              </p>
              <a
                href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز استشارة مع د. سامر خضور"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtag_report_conversion()}
                className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-green-500 to-green-600 text-white rounded-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                احجز استشارتك عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950/95 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-indigo-600/20">
            <div>
              <h4 className="font-bold text-lg mb-4 text-indigo-300">د. سامر خضور</h4>
              <p className="text-indigo-200 text-sm">التميز في طب الأسنان الترميمي والتجميلي منذ 1999.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-indigo-300">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-indigo-200">
                <li>
                  <a href="#services" className="hover:text-indigo-300 transition">
                    الخدمات
                  </a>
                </li>
                <li>
                  <a href="#doctor" className="hover:text-indigo-300 transition">
                    عن د. خضور
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-indigo-300 transition">
                    شهادات المرضى
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-indigo-300 transition">
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-indigo-300">ساعات العمل</h4>
              <p className="text-sm text-indigo-200">
                الإثنين - الجمعة: 9 صباحاً - 6 مساءً
                <br />
                السبت: 10 صباحاً - 4 مساءً
                <br />
                الأحد: مغلق
              </p>
            </div>
          </div>
          <div className="text-center text-sm text-indigo-300">
            <p>&copy; 2025 د. سامر خضور. جميع الحقوق محفوظة. التميز في كل ابتسامة. 🦷✨</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
