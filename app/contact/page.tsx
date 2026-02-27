"use client"

import { useState } from "react"
import { Mail, MessageSquare, ChevronDown, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
// --- IMPORT CHATBOT ---
import Chatbot from "@/components/chatbot"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState("")
  const [clientType, setClientType] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Initiating...");

    const formData = new FormData(e.currentTarget);
    
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (accessKey) {
      formData.append("access_key", accessKey);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! I will connect with you shortly.");
        (e.target as HTMLFormElement).reset();
        setClientType("");
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000] text-white selection:bg-[#0071E3]">
      <Navbar />
      
      <main className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-20 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0071E3] blur-[120px] opacity-10 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 md:gap-40 items-center relative z-10">
          
          {/* Left Side Content */}
          <div className="animate-on-scroll">
            <h2 className="text-[42px] md:text-[86px] font-black tracking-tighter leading-tight mb-6 md:mb-12 italic text-white/90">
              Let’s <br /> begin.
            </h2>
            <p className="text-lg md:text-2xl text-[#a1a1a6] mb-10 md:mb-16 leading-relaxed max-w-lg font-medium italic">
              If you’re looking for something thoughtful, lasting, and built with intention — let’s connect.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-[18px] bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#0071E3] transition-all duration-500">
                  <Mail className="text-[#0071E3] group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black opacity-30 uppercase tracking-[0.3em]">Inquiries</p>
                  <p className="text-[16px] md:text-[20px] font-bold">kuldipsutariya37@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-[18px] bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#25D366] transition-all duration-500">
                  <MessageSquare className="text-[#25D366] group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black opacity-30 uppercase tracking-[0.3em]">WhatsApp</p>
                  <p className="text-[16px] md:text-[20px] font-bold">+91 93274 62866</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#111] p-8 md:p-14 rounded-[40px] border border-white/10 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black opacity-40 uppercase tracking-[0.3em] ml-2">Identity</label>
                  <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-base outline-none focus:border-[#0071E3] transition-all" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black opacity-40 uppercase tracking-[0.3em] ml-2">Correspondence</label>
                  <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-base outline-none focus:border-[#0071E3] transition-all" placeholder="Email" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black opacity-40 uppercase tracking-[0.3em] ml-2">I am a...</label>
                <div className="relative">
                  <select 
                    name="client_type"
                    value={clientType}
                    onChange={(e) => setClientType(e.target.value)}
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-6 py-4 text-base outline-none focus:border-[#0071E3] appearance-none cursor-pointer"
                  >
                    <option value="">Select Type</option>
                    <option value="doctor">Doctor</option>
                    <option value="consultant">Consultant</option>
                    <option value="course-seller">Course Seller</option>
                    <option value="other">Other Business</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" size={18} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[9px] font-black opacity-40 uppercase tracking-[0.3em] ml-2">Project Intent</label>
                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-base outline-none focus:border-[#0071E3] resize-none" placeholder="Details..." />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-full bg-white text-black py-5 text-sm font-black shadow-xl hover:bg-[#0071E3] hover:text-white transition-all uppercase tracking-[0.3em] flex items-center justify-center gap-2 active:scale-95 duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
                {!isSubmitting && <Send size={16} />}
              </button>

              {result && (
                <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] font-bold text-[#0071E3] animate-pulse">
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
      {/* --- RENDER CHATBOT --- */}
      <Chatbot />
    </div>
  )
}