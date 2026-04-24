import { createRoot } from "react-dom/client"
import App from "./App"
import { ConfigProvider } from "./src/context/ConfigContext"
import { validateConfig } from "./src/utils/configValidator"

const root = createRoot(document.getElementById("root"))

// Load and validate config
async function initializeApp() {
  try {
    const response = await fetch("/config.json")
    if (!response.ok) {
      throw new Error("config.json not found. Please copy config.example.json to config.json and customize it.")
    }

    const config = await response.json()
    const validation = validateConfig(config)

    if (!validation.isValid) {
      throw new Error(
        "Invalid config file:\n" +
        validation.errors.map(err => `  - ${err}`).join("\n")
      )
    }

    // Config is valid, render the app
    root.render(
      <ConfigProvider config={config}>
        <App />
      </ConfigProvider>
    )
  } catch (error) {
    // Show error message in the app
    root.render(
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          textAlign: "center"
        }}>
          <h1 style={{ color: "#d32f2f", marginBottom: "20px" }}>Configuration Error</h1>
          <p style={{ color: "#666", lineHeight: "1.6", whiteSpace: "pre-wrap", textAlign: "left" }}>
            {error.message}
          </p>
          <p style={{ color: "#999", fontSize: "14px", marginTop: "20px" }}>
            Check the browser console for more details.
          </p>
        </div>
      </div>
    )
    console.error("App initialization error:", error)
  }
}

initializeApp()