import Kuldipcode from "@/components/home" // Adjust 'home' to your actual filename
import Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <main>
      {/* This renders your full portfolio content */}
      <Kuldipcode />

      {/* This renders the floating chatbot on top of the portfolio */}
      <Chatbot />
    </main>
  )
}