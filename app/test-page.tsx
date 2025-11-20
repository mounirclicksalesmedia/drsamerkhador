import Image from "next/image"

// Ultra-minimal test page with ZERO JavaScript
export default function TestPage() {
  return (
    <div style={{ padding: "2rem", background: "#1a1a2e", color: "white", minHeight: "100vh" }}>
      <h1>Test Page - Mobile Check</h1>
      <p>If you can see this without refresh loops, the site works!</p>
      
      <div style={{ marginTop: "2rem" }}>
        <Image 
          src="/hero.jpeg" 
          alt="Test" 
          width={400} 
          height={300}
          style={{ borderRadius: "1rem" }}
        />
      </div>
      
      <a 
        href="https://wa.me/963123456789?text=Test"
        style={{ 
          display: "inline-block",
          marginTop: "2rem",
          padding: "1rem 2rem",
          background: "#25D366",
          color: "white",
          textDecoration: "none",
          borderRadius: "0.5rem"
        }}
      >
        WhatsApp Test
      </a>
    </div>
  )
}

