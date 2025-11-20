"use client"

import { Mail, Phone, MapPin, Award, Users, Zap, Heart, ArrowRight, CheckCircle, Star } from "lucide-react"
import Image from "next/image"

export default function DentalClinicLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Image
                src="/Logowhite.png"
                alt="Logo"
                width={50}
                height={50}
                className="w-12 h-12"
                priority
              />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#hero" className="text-sm font-medium hover:text-indigo-300 transition">
                الرئيسية
              </a>
              <a href="#about" className="text-sm font-medium hover:text-indigo-300 transition">
                من نحن
              </a>
              <a href="#services" className="text-sm font-medium hover:text-indigo-300 transition">
                الخدمات
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-indigo-300 transition">
                شهادات المرضى
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-indigo-300 transition">
                تواصل معنا
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز موعد"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-violet-400 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-sm inline-block"
              >
                احجز الآن
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero.jpeg"
            alt="Hero"
            fill
            className="object-cover opacity-20"
            priority
            quality={60}
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            د. سامر خضور
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              طب الأسنان التجميلي
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
            25 عاماً من الخبرة في تحويل الابتسامات وتحقيق الثقة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز استشارة مع د. سامر خضور"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-400 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 text-center"
            >
              احجز استشارة
            </a>
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في معرفة المزيد عن خدماتكم"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/20 transition-all text-center"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - SIMPLIFIED */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              خدماتنا المتخصصة
            </h2>
            <p className="text-xl text-indigo-200">
              حلول تجميلية متقدمة لابتسامة مثالية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-indigo p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">هوليوود سمايل</h3>
              <p className="text-indigo-200 mb-6">
                ابتسامة مثالية تجمع بين الجمال والوظيفة باستخدام أحدث التقنيات
              </p>
            </div>

            <div className="glass-indigo p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">تنظيف وتبييض</h3>
              <p className="text-indigo-200 mb-6">
                تنظيف عميق وتبييض احترافي لابتسامة مشرقة وصحية
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في الاستفسار عن الخدمات المتاحة"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300"
            >
              استفسر عن خدماتنا
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section - STATIC IMAGES ONLY */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              شهادات المرضى
            </h2>
            <p className="text-xl text-indigo-200">
              تحولات حقيقية، نتائج استثنائية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sara */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 glass-indigo p-1 rounded-2xl">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                  <Image 
                    src="/testimonials/sara/before.jpg" 
                    alt="قبل" 
                    fill 
                    className="object-cover"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute top-2 right-2 bg-violet-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                    قبل
                  </div>
                </div>
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                  <Image 
                    src="/testimonials/sara/after.jpg" 
                    alt="بعد" 
                    fill 
                    className="object-cover"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute top-2 left-2 bg-indigo-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                    بعد
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">سارة أحمد</h3>
              </div>
            </div>

            {/* Shaikhah */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 glass-indigo p-1 rounded-2xl">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                  <Image 
                    src="/testimonials/shaikhah/before.jpg" 
                    alt="قبل" 
                    fill 
                    className="object-cover"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute top-2 right-2 bg-violet-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                    قبل
                  </div>
                </div>
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                  <Image 
                    src="/testimonials/shaikhah/after.jpg" 
                    alt="بعد" 
                    fill 
                    className="object-cover"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute top-2 left-2 bg-indigo-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                    بعد
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">شيخة محمد</h3>
              </div>
            </div>

            {/* Stafan */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 glass-indigo p-1 rounded-2xl">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                  <Image 
                    src="/testimonials/stafan/before.jpg" 
                    alt="قبل" 
                    fill 
                    className="object-cover"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute top-2 right-2 bg-violet-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                    قبل
                  </div>
                </div>
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                  <Image 
                    src="/testimonials/stafan/after.jpg" 
                    alt="بعد" 
                    fill 
                    className="object-cover"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute top-2 left-2 bg-indigo-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                    بعد
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">ستيفان كريم</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-indigo p-8 md:p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ رحلتك نحو الابتسامة المثالية
            </h2>
            <p className="text-xl text-indigo-200 mb-8">
              احجز استشارتك المجانية الآن
            </p>
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز استشارة مع د. سامر خضور"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold hover:shadow-2xl transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              تواصل معنا عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 glass">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h3 className="text-xl font-bold mb-4">د. سامر خضور</h3>
              <p className="text-indigo-200">
                طب الأسنان التجميلي والترميمي
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <div className="space-y-2 text-indigo-200">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-5 h-5" />
                  963123456789+
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-5 h-5" />
                  info@drkhador.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">الموقع</h3>
              <p className="text-indigo-200 flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-5 h-5" />
                دمشق، سوريا
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-indigo-300">
            <p>&copy; 2024 د. سامر خضور. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز موعد"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </a>
    </div>
  )
}
