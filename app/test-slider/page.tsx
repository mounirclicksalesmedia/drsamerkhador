"use client"

import { useState, useRef } from "react"
import Image from "next/image"

// TEST 3: ONLY THE SLIDER (LIKELY THE PROBLEM!)
function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
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

        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-6 bg-indigo-500"></div>
              <div className="w-0.5 h-6 bg-indigo-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  )
}

export default function TestSlider() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 text-white">
          <h1 className="text-4xl font-bold mb-4">🧪 TEST: Slider Only</h1>
          <p className="text-xl mb-4">Testing the interactive before/after slider</p>
          <p className="text-lg text-yellow-300">⚠️ If this crashes on iPhone, the SLIDER is the problem!</p>
        </div>

        <BeforeAfterSlider
          before="/testimonials/sara/before.jpg"
          after="/testimonials/sara/after.jpg"
          title="Test Slider"
        />

        <div className="mt-8 p-6 bg-white/10 rounded-lg text-white text-center">
          <p>✅ If you can see this and drag the slider = SUCCESS</p>
          <p>❌ If page crashes = SLIDER IS THE PROBLEM</p>
        </div>
      </div>
    </div>
  )
}

