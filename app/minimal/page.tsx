import Image from "next/image"

// ABSOLUTE MINIMAL PAGE - NO SLIDER, NO STATE, NO HOOKS
export default function MinimalTest() {
  return (
    <div style={{ 
      padding: "2rem", 
      background: "#1a1a2e",
      color: "white",
      minHeight: "100vh" 
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>✅ Minimal Test</h1>
      <p style={{ marginBottom: "2rem" }}>If this works on iPhone, the problem is the slider!</p>
      
      {/* Just show 2 images side by side - NO INTERACTION */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "1rem", overflow: "hidden" }}>
          <Image 
            src="/testimonials/sara/before.jpg" 
            alt="Before" 
            fill 
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem", background: "rgba(139, 92, 246, 0.9)", color: "white", padding: "0.25rem 0.5rem", borderRadius: "9999px", fontSize: "0.75rem" }}>
            قبل
          </div>
        </div>
        <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "1rem", overflow: "hidden" }}>
          <Image 
            src="/testimonials/sara/after.jpg" 
            alt="After" 
            fill 
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", top: "0.5rem", left: "0.5rem", background: "rgba(99, 102, 241, 0.9)", color: "white", padding: "0.25rem 0.5rem", borderRadius: "9999px", fontSize: "0.75rem" }}>
            بعد
          </div>
        </div>
      </div>
      
      <a 
        href="https://wa.me/963123456789?text=Test"
        style={{
          display: "inline-block",
          padding: "1rem 2rem",
          background: "#25D366",
          color: "white",
          textDecoration: "none",
          borderRadius: "0.5rem",
          fontWeight: "bold"
        }}
      >
        📱 WhatsApp Test
      </a>
      
      <div style={{ marginTop: "2rem", padding: "1rem", background: "rgba(255,255,255,0.05)", borderRadius: "0.5rem" }}>
        <h3>Test Results:</h3>
        <p>✓ If this page works on iPhone without crashes</p>
        <p>✗ Then /test crashes</p>
        <p>= The SLIDER is causing the mobile crash!</p>
      </div>
    </div>
  )
}

