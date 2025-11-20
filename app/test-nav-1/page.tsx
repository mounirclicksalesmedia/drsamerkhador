// TEST: Just the nav container (no content)
export default function TestNav1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800">
      {/* Empty Nav Container */}
      <nav className="fixed top-0 w-full z-50 glass-indigo border-b border-indigo-200/30 m-0 rounded-none">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-white">Empty Nav</p>
        </div>
      </nav>

      <div className="pt-32 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">TEST 1: Empty Nav Container</h1>
        <p className="text-xl mb-4">Just the nav shell with glass effect</p>
        <div className="inline-block px-6 py-3 bg-green-500 rounded-lg">
          ✅ If this works, nav container is fine
        </div>
      </div>
    </div>
  )
}

