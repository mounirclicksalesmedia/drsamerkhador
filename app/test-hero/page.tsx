import Image from "next/image"

// TEST 2: HERO SECTION ONLY
export default function TestHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                ابتسامتك،
                <br />
                <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                  بكل إتقان
                </span>
              </h1>
              <p className="text-lg text-indigo-100 leading-relaxed">
                اختبر رعاية أسنان عالمية المستوى مع د. سامر خضور
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/963123456789?text=مرحباً، أرغب في حجز استشارة"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-400 text-white rounded-full font-bold text-center"
                >
                  احجز استشارة
                </a>
              </div>
            </div>

            {/* Doctor Card */}
            <div className="relative h-96">
              <div className="relative w-full h-96 overflow-hidden rounded-3xl">
                <Image
                  src="/hero.jpeg"
                  alt="د. سامر خضور"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 p-6 bg-green-500/20 rounded-lg max-w-2xl mx-auto">
          <p className="text-xl">✅ TEST: Hero Section Only</p>
          <p>If this works, hero is fine. Issue is in another section.</p>
        </div>
      </section>
    </div>
  )
}

