import Image from "next/image"

// Ultra-minimal test page - ZERO React hooks, ZERO state, ZERO JavaScript
export default function TestPage() {
  return (
    <div style={{ 
      padding: "2rem", 
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", 
      color: "white", 
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>✅ Test Page</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        If you can see this page without refresh loops, the infrastructure works!
      </p>
      
      <div style={{ 
        background: "rgba(255,255,255,0.1)", 
        padding: "1.5rem", 
        borderRadius: "1rem",
        marginBottom: "2rem"
      }}>
        <h2 style={{ marginBottom: "1rem" }}>✓ Page loaded successfully</h2>
        <p>✓ No refresh loop</p>
        <p>✓ No crashes</p>
        <p>✓ Static HTML only</p>
      </div>
      
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1rem" }}>Test Image:</h3>
        <Image 
          src="/hero.jpeg" 
          alt="Test" 
          width={400} 
          height={300}
          style={{ borderRadius: "1rem" }}
        />
      </div>
      
      <a 
        href="https://wa.me/963123456789?text=Test from mobile"
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          display: "inline-block",
          marginTop: "1rem",
          padding: "1rem 2rem",
          background: "#25D366",
          color: "white",
          textDecoration: "none",
          borderRadius: "0.5rem",
          fontWeight: "bold"
        }}
      >
        📱 Test WhatsApp Link
      </a>
      
      <div style={{ marginTop: "3rem", padding: "1rem", background: "rgba(255,255,255,0.05)", borderRadius: "0.5rem" }}>
        <h3>Next Step:</h3>
        <p>If this page works, go back to the main page at <a href="/" style={{ color: "#00d9ff" }}>/</a></p>
      </div>
    </div>
  )
}

