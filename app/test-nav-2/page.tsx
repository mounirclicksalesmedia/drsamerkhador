import Image from "next/image"

// TEST: Nav with ONLY logo
export default function TestNav2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800">
      {/* Nav with Logo Only */}
      <nav className="fixed top-0 w-full z-50 glass-indigo border-b border-indigo-200/30 m-0 rounded-none">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Image src="/Logowhite.png" alt="Logo" width={120} height={48} className="object-contain" />
        </div>
      </nav>

      <div className="pt-32 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">TEST 2: Nav + Logo</h1>
        <p className="text-xl mb-4">Testing if logo/Image causes crash</p>
        <div className="inline-block px-6 py-3 bg-green-500 rounded-lg">
          ✅ If this works, logo is fine
        </div>
      </div>
    </div>
  )
}

