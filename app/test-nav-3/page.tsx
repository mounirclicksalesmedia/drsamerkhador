import Image from "next/image"

// TEST: Nav with logo + links (NO WhatsApp button)
export default function TestNav3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800">
      {/* Nav with Logo + Links */}
      <nav className="fixed top-0 w-full z-50 glass-indigo border-b border-indigo-200/30 m-0 rounded-none">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/Logowhite.png" alt="Logo" width={120} height={48} className="object-contain" />
          
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
          </div>
        </div>
      </nav>

      <div className="pt-32 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">TEST 3: Nav + Logo + Links</h1>
        <p className="text-xl mb-4">No WhatsApp button yet</p>
        <div className="inline-block px-6 py-3 bg-green-500 rounded-lg">
          ✅ If this works, links are fine
        </div>
      </div>
    </div>
  )
}

