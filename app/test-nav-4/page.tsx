import Image from "next/image"

// TEST: FULL NAV with WhatsApp button
export default function TestNav4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800">
      {/* COMPLETE Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-indigo border-b border-indigo-200/30 m-0 rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <Image src="/Logowhite.png" alt="د. سامر خضور" width={120} height={48} className="object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-indigo-100 hover:text-indigo-300 transition text-sm">
              الخدمات
            </a>
            <a href="#doctor" className="text-indigo-100 hover:text-indigo-300 transition text-sm">
              عن الدكتور
            </a>
            <a href="#testimonials" className="text-indigo-100 hover:text-indigo-300 transition text-sm">
              شهادات المرضى
            </a>
            <a href="#contact" className="text-indigo-100 hover:text-indigo-300 transition text-sm">
              اتصل بنا
            </a>
            <a
              href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز موعد"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-violet-400 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-sm inline-block hover:scale-105 active:scale-95"
            >
              احجز الآن
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-32 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">TEST 4: FULL Navigation</h1>
        <p className="text-xl mb-4">Complete nav with WhatsApp button</p>
        <div className="inline-block px-6 py-3 bg-yellow-500 rounded-lg">
          ⚠️ If THIS crashes = WhatsApp button or transitions causing it!
        </div>
      </div>
    </div>
  )
}

