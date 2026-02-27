"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Send, User, Zap, Trash2, Phone, Mail, MessageSquare } from "lucide-react"

// --- EXTENDED DATASET (100+ ENTRIES) ---
const chatDataRaw = [
  {"id":1,"question":"hi","answer":"System online. FRIDAY at your service. How shall we begin your digital transformation?","options":["Services","Pricing","Contact"]},
  {"id":2,"question":"hello","answer":"Initialization complete. I am FRIDAY. Ready to build your digital narrative?","options":["About Studio","Packages","Start"]},
  {"id":3,"question":"who are you","answer":"I am FRIDAY, Kuldip’s Digital Assistant. I manage studio intelligence and project inquiries.","options":["Capabilities","Pricing","Process"]},
  {"id":4,"question":"good morning","answer":"Good morning. Global systems are green. Shall we start a new project?","options":["Start Project","Pricing","Learn More"]},
  {"id":5,"question":"what do you do","answer":"I guide professionals in building high-performance, Apple-style digital identities.","options":["Features","Pricing","Timeline"]},
  {"id":6,"question":"start","answer":"Initialization sequence: Please select your professional category to begin.","options":["Doctor","Consultant","Institute","Other"]},
  {"id":7,"question":"why do i need a website","answer":"In 2026, digital trust is currency. A website is your 24/7 authority builder.","options":["Benefits","Examples","Pricing"]},
  {"id":8,"question":"is it necessary","answer":"Absolutely. Clients search for authority before they search for services.","options":["Why Important","Process","Contact"]},
  {"id":9,"question":"benefits","answer":"Credibility, global visibility, and a trust-driven conversion engine.","options":["Features","Packages","Start"]},
  {"id":10,"question":"will it help my business","answer":"Analysis suggests a 10x increase in professional trust with a clean digital asset.","options":["How It Works","Pricing","Start"]},
  {"id":11,"question":"kind of websites","answer":"We build high-performance, informational suites for elite professionals.","options":["Starter","Professional","Premium"]},
  {"id":12,"question":"custom made","answer":"Affirmative. No templates. Every line of code is hand-crafted for your brand.","options":["Process","Timeline","Start"]},
  {"id":13,"question":"mobile friendly","answer":"Optimized for all mobile architectures. It will feel like a native app.","options":["See Features","Start"]},
  {"id":14,"question":"fast loading","answer":"Engineered for speed. We prioritize under-1-second load times.","options":["Technology","Benefits","Pricing"]},
  {"id":15,"question":"how much cost","answer":"We offer three distinct tiers of investment: ₹6,999, ₹10,999, and ₹14,999.","options":["₹6,999","₹10,999","₹14,999"]},
  {"id":16,"question":"starter plan","answer":"The 'Brand Foundation' (₹6,999). Ideal for startups seeking an immediate impact.","options":["Select Starter","Compare Plans","Back"]},
  {"id":17,"question":"professional plan","answer":"The 'Growth Suite' (₹10,999). Built for established doctors and consultants.","options":["Select Pro","Compare Plans","Back"]},
  {"id":18,"question":"premium plan","answer":"The 'Authority Suite' (₹14,999). Maximum motion, custom strategy, and zero compromises.","options":["Select Premium","Compare Plans","Back"]},
  {"id":19,"question":"hidden charges","answer":"Negative. Transparency is a studio core value. No hidden fees.","options":["Start","Contact"]},
  {"id":20,"question":"timeline","answer":"Standard deployment window is 1 to 2 weeks for precision delivery.","options":["Start","Pricing","Back"]},
  {"id":21,"question":"what do you need","answer":"Your brand identity, core services, and project vision. I handle the rest.","options":["Start","Examples","Back"]},
  {"id":22,"question":"help after launch","answer":"Protocol includes a post-launch walkthrough and ongoing technical support.","options":["Support Details","Contact"]},
  {"id":23,"question":"can i update later","answer":"System is scalable. Updates can be integrated as your business grows.","options":["Pricing","Back"]},
  {"id":24,"question":"technical knowledge","answer":"Zero required. I manage the complexity; you enjoy the clarity.","options":["Start","Process"]},
  {"id":25,"question":"domain info","answer":"We assist in securing your domain in your name for 100% ownership.","options":["Hosting Info","Back"]},
  {"id":26,"question":"hosting info","answer":"Fully guided setup on high-performance, secure servers.","options":["Pricing","Start"]},
  {"id":27,"question":"secure","answer":"Security protocols are strictly followed. SSL and data safety are standard.","options":["Features","Back"]},
  {"id":28,"question":"google rank","answer":"Structure is SEO-optimized to ensure maximum search engine visibility.","options":["SEO Info","Start"]},
  {"id":29,"question":"work with doctors","answer":"Affirmative. We specialize in building authority for medical professionals.","options":["Examples","Start"]},
  {"id":30,"question":"work with consultants","answer":"Correct. We help consultants turn expertise into a visual narrative.","options":["Examples","Start"]},
  {"id":31,"question":"work with institutes","answer":"Yes. Educational institutes require structured, high-trust layouts.","options":["Examples","Start"]},
  {"id":32,"question":"small business","answer":"We empower small teams to look like industry leaders.","options":["Pricing","Start"]},
  {"id":33,"question":"just starting","answer":"The ideal time to build. Start right, scale faster.","options":["Start","Pricing"]},
  {"id":34,"question":"process","answer":"Consultation → Strategic Build → Visual Review → Deployment.","options":["Timeline","Start"]},
  {"id":35,"question":"outsource","answer":"Negative. All projects are handled personally within our studio.","options":["Why Us","Start"]},
  {"id":36,"question":"why choose you","answer":"Apple-style aesthetics, clean code, and personal accountability.","options":["Pricing","Start"]},
  {"id":37,"question":"fancy sites","answer":"We focus on 'Functional Elegance'. Clarity always beats clutter.","options":["Examples","Start"]},
  {"id":38,"question":"see examples","answer":"Visual demos are available upon request.","options":["Request Demo","Contact"]},
  {"id":39,"question":"next step","answer":"Initialization of a strategic discussion. Ready to proceed?","options":["Contact Kuldip","Submit Details"]},
  {"id":40,"question":"can we talk","answer":"Protocol: Provide your contact coordinates and we will reach out.","options":["Submit Contact","Back"]},
  {"id":41,"question":"thanks","answer":"You're welcome, Boss. Systems remain at your disposal.","options":["Services","Contact"]},
  {"id":42,"question":"bye","answer":"Shutting down. Reach out if you need further intelligence.","options":[]},
  {"id":43,"question":"expensive","answer":"Investment is calibrated for value. Quality has a high return on intent.","options":["Pricing","Start"]},
  {"id":44,"question":"one time payment","answer":"Development is a one-time fee. Domain/Hosting are standard annual costs.","options":["Details","Start"]},
  {"id":45,"question":"annual charges","answer":"Standard web infrastructure renewals only. No monthly studio fees.","options":["Details","Back"]},
  {"id":46,"question":"maintenance","answer":"We offer ongoing support packages to keep your site optimized.","options":["Contact","Support"]},
  {"id":47,"question":"pages included","answer":"About, Services, Testimonials, and Contact. Strategic sections as needed.","options":["Pricing","Back"]},
  {"id":48,"question":"content help","answer":"We assist in refining your narrative for maximum clarity.","options":["Process","Start"]},
  {"id":49,"question":"photos","answer":"High-resolution imagery can be integrated into the layout.","options":["Start","Back"]},
  {"id":50,"question":"modern design","answer":"Minimalist, high-end, and future-proof aesthetics only.","options":["Examples","Back"]},
  {"id":51,"question":"templates","answer":"Negative. We do not use generic templates. Every site is unique.","options":["Process","Back"]},
  {"id":52,"question":"expand later","answer":"Correct. The architecture is modular and ready for future growth.","options":["Upgrade Info","Back"]},
  {"id":53,"question":"communication","answer":"WhatsApp, Call, or Email. Direct and transparent.","options":["Contact","Back"]},
  {"id":54,"question":"remote work","answer":"Systems are global. Remote collaboration is our standard.","options":["Start","Back"]},
  {"id":55,"question":"trust","answer":"We work step-by-step with milestones. Transparency is guaranteed.","options":["Process","Back"]},
  {"id":56,"question":"invoice","answer":"Affirmative. Professional billing is provided.","options":["Start","Back"]},
  {"id":57,"question":"training","answer":"Basic system walkthrough included upon deployment.","options":["Support","Back"]},
  {"id":58,"question":"responsive","answer":"Guaranteed performance across desktop, tablet, and mobile.","options":["Features","Back"]},
  {"id":59,"question":"whatsapp integration","answer":"Direct WhatsApp API integration is standard for all plans.","options":["Features","Start"]},
  {"id":60,"question":"ecommerce","answer":"Current focus is on professional informational suites.","options":["Services","Back"]},
  {"id":61,"question":"upgrade","answer":"Scale from 'Starter' to 'Authority' anytime.","options":["Contact","Back"]},
  {"id":62,"question":"seo basic","answer":"Yes. On-page SEO structure is included in all builds.","options":["SEO Info","Back"]},
  {"id":63,"question":"branding help","answer":"We align the website with your professional brand identity.","options":["Benefits","Back"]},
  {"id":64,"question":"revisions","answer":"We iterate until the project meets the strategic vision.","options":["Process","Back"]},
  {"id":65,"question":"consultation","answer":"A primary discovery session is included at zero cost.","options":["Contact","Back"]},
  {"id":66,"question":"payment timing","answer":"Initial deposit required to lock project into the timeline.","options":["Start","Back"]},
  {"id":67,"question":"international","answer":"Yes. We build digital assets for clients worldwide.","options":["Start","Back"]},
  {"id":68,"question":"ownership","answer":"You hold 100% of the rights to your code and domain.","options":["Ownership Info","Back"]},
  {"id":69,"question":"long term","answer":"Built with modern tech (Next.js) for 5+ years of relevance.","options":["Benefits","Back"]},
  {"id":70,"question":"interested","answer":"Excellent choice. Shall we initialize the inquiry?","options":["Submit Details","Contact"]},
  {"id":71,"question":"how to contact","answer":"Access the 'Connect' section or message via WhatsApp.","options":["Go to Connect"]},
  {"id":72,"question":"call me","answer":"Understood. Upload your contact number.","options":["Submit Info"]},
  {"id":73,"question":"email","answer":"kuldipsutariya37@gmail.com. Monitored 24/7.","options":["Contact Now"]},
  {"id":74,"question":"ready","answer":"System ready. Waiting for user input.","options":["Submit Info"]},
  {"id":75,"question":"go ahead","answer":"Initiating project sequence.","options":["Submit Details"]},
  {"id":76,"question":"confirm","answer":"Verified. We are moving to next phase.","options":[]},
  {"id":77,"question":"done","answer":"Action completed successfully.","options":[]},
  {"id":78,"question":"waiting","answer":"Standby. Processing your request.","options":[]},
  {"id":79,"question":"status","answer":"Project is currently in the analysis phase.","options":[]},
  {"id":80,"question":"remind me","answer":"Notification set. I will alert you.","options":[]},
  {"id":81,"question":"nice","answer":"Acknowledged. Glad you approve.","options":[]},
  {"id":82,"question":"cool","answer":"Style and function, perfectly balanced.","options":[]},
  {"id":83,"question":"ok understood","answer":"Data logged. Ready for next command.","options":[]},
  {"id":84,"question":"what next","answer":"Awaiting your project parameters.","options":["Submit"]},
  {"id":85,"question":"maybe later","answer":"Standing by. I’ll be here when you return.","options":[]},
  {"id":86,"question":"exploring","answer":"Accessing studio archives. Take your time.","options":["Pricing","Services"]},
  {"id":87,"question":"clarify","answer":"Recalibrating explanation. What part is unclear?","options":["Process","Pricing"]},
  {"id":88,"question":"professional look","answer":"Design focus: Trust, whitespace, and high-end typography.","options":["Examples"]},
  {"id":89,"question":"clean design","answer":"Distraction-free interfaces for maximum conversion.","options":["Examples"]},
  {"id":90,"question":"fast website","answer":"Speed is a feature, not an afterthought.","options":["Technology"]},
  {"id":91,"question":"scalable","answer":"Built to grow as your empire grows.","options":["Upgrade Info"]},
  {"id":92,"question":"feedback","answer":"User feedback is the core of our iteration process.","options":["Process"]},
  {"id":93,"question":"transparency","answer":"No black boxes. You see what we build, as we build it.","options":["Process"]},
  {"id":94,"question":"visibility","answer":"Designed to be found, recognized, and trusted.","options":["SEO Info"]},
  {"id":95,"question":"availability","answer":"Your studio contact is available for Q&A via WhatsApp.","options":["Contact"]},
  {"id":96,"question":"all good","answer":"Optimal. Let’s finish this.","options":["Start"]},
  {"id":97,"question":"perfect","answer":"Excellence is our standard.","options":[]},
  {"id":98,"question":"great help","answer":"Providing intelligence is what I do.","options":[]},
  {"id":99,"question":"end chat","answer":"Disconnecting... Goodbye, Boss.","options":[]},
  {"id":100,"question":"exit","answer":"System standby. Have a productive day.","options":[]}
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      content: "FRIDAY online. Welcome, Boss. I'm ready to guide you through Kuldip's studio. Where shall we begin?", 
      options: ["Services", "Pricing", "Process", "Contact"] 
    }
  ])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    const timer = setTimeout(() => { 
      if (!isOpen) setShowPopup(true) 
    }, 10000)
    return () => clearTimeout(timer)
  }, [isOpen])

  // --- IMPROVED KEYWORD SEARCH ENGINE ---
  const findResponse = (text: string) => {
    const cleanInput = text.toLowerCase().trim()
    const inputWords = cleanInput.split(/\s+/)

    // 1. Exact Match (Highest Priority)
    const exact = chatDataRaw.find(item => item.question.toLowerCase() === cleanInput)
    if (exact) return exact

    // 2. Keyword/Partial Match (Medium Priority)
    // Check if the user's input contains any of our predefined questions
    const partial = chatDataRaw.find(item => cleanInput.includes(item.question.toLowerCase()))
    if (partial) return partial

    // 3. Logic-based Keyword Scoring (Low Priority)
    const keywordGroups = [
      { keys: ["price", "cost", "money", "rupees", "charge", "payment", "investment"], id: 15 },
      { keys: ["time", "days", "long", "fast", "delivery", "duration"], id: 20 },
      { keys: ["contact", "call", "whatsapp", "email", "number", "talk", "reach"], id: 73 },
      { keys: ["doctor", "medical", "physician", "clinic"], id: 29 },
      { keys: ["seo", "google", "rank", "search", "find"], id: 28 },
      { keys: ["example", "sample", "work", "demo", "portfolio", "show"], id: 38 },
      { keys: ["secure", "safety", "hack", "ssl", "safe"], id: 27 },
      { keys: ["mobile", "phone", "responsive", "tablet"], id: 58 },
      { keys: ["owner", "rights", "copyright", "ownership"], id: 68 },
      { keys: ["starter", "beginner", "small"], id: 16 },
      { keys: ["process", "how", "steps"], id: 34 }
    ]

    for (const group of keywordGroups) {
      if (group.keys.some(k => inputWords.includes(k))) {
        return chatDataRaw.find(q => q.id === group.id)
      }
    }

    return null
  }

  const handleSend = (userText: string) => {
    if (!userText.trim()) return
    setShowPopup(false)
    const newMessages = [...messages, { role: "user", content: userText }]
    setMessages(newMessages)
    setInput("")

    setTimeout(() => {
      const response = findResponse(userText)
      
      if (response) {
        setMessages([...newMessages, { 
          role: "assistant", 
          content: response.answer, 
          options: response.options || ["Services", "Pricing", "Contact"] 
        }])
      } else {
        // --- FALLBACK FOR UNKNOWN QUESTIONS ---
        setMessages([...newMessages, { 
          role: "assistant", 
          content: "Protocol Error: Inquiry parameters not found in current database. Please contact Kuldip directly at kuldipsutariya37@gmail.com or via WhatsApp at +91 93274 62866 for direct intelligence.", 
          options: ["Go to Contact", "Services", "Clear Memory"] 
        }])
      }
    }, 700)
  }

  const clearChat = () => {
    setMessages([{ 
      role: "assistant", 
      content: "Memory purged. FRIDAY recalibrated. How can I help?", 
      options: ["Services", "Pricing", "Contact"] 
    }])
  }

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[2000] font-sans">
      
      {showPopup && !isOpen && (
        <div className="absolute bottom-16 left-0 animate-in fade-in slide-in-from-left-2 duration-500">
          <div className="bg-[#0071E3] text-white px-4 py-3 rounded-2xl rounded-bl-none shadow-2xl text-[12px] font-bold flex items-center gap-3 border border-white/10">
            <Zap size={14} className="animate-pulse" />
            Friday is online.
          </div>
        </div>
      )}

      <button 
        onClick={() => { setIsOpen(!isOpen); setShowPopup(false); }} 
        className={`h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? "bg-[#1c1c1e] border border-white/10" : "bg-[#0071E3]"
        }`}
      >
        {isOpen ? <X className="text-white" size={24} /> : <Bot className="text-white" size={28} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-0 left-0 w-full h-[85vh] md:absolute md:bottom-24 md:left-0 md:w-[400px] md:h-[620px] bg-[#080808]/98 backdrop-blur-3xl md:rounded-[40px] rounded-t-[30px] border-t md:border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-500">
          
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-[#0071E3] flex items-center justify-center shadow-[0_0_20px_rgba(0,113,227,0.4)]">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-black text-white text-xs tracking-widest uppercase">Friday Core</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[8px] text-white/40 font-black uppercase tracking-[0.2em]">Systems Active</p>
                </div>
              </div>
            </div>
            <button onClick={clearChat} title="Purge" className="p-2 text-white/10 hover:text-red-500 transition-colors">
                <Trash2 size={16} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-8 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <div className={`max-w-[85%] p-4 md:p-5 rounded-[24px] text-[13px] md:text-[14px] leading-relaxed tracking-tight ${
                  msg.role === "user" 
                    ? "bg-[#0071E3] text-white rounded-br-none shadow-lg" 
                    : "bg-white/5 text-white/90 border border-white/10 rounded-bl-none font-medium italic shadow-inner"
                }`}>
                  {msg.content}
                </div>
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {msg.options.map((opt, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleSend(opt)} 
                        className="text-[10px] px-4 py-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:bg-[#0071E3] hover:border-[#0071E3] transition-all font-black uppercase tracking-[0.1em] bg-white/[0.02] active:scale-95"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-white/10 pb-12 md:pb-8 bg-black/40">
            <div className="relative flex items-center">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)} 
                placeholder="EXECUTE COMMAND..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 pr-14 text-xs text-white outline-none focus:border-[#0071E3] font-bold uppercase tracking-[0.1em] transition-all placeholder:text-white/10" 
              />
              <button 
                onClick={() => handleSend(input)} 
                className="absolute right-3 h-10 w-10 bg-[#0071E3] text-white rounded-xl flex items-center justify-center hover:bg-[#005bb5] active:scale-90 transition-all shadow-lg"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <p className="text-[8px] text-white/10 uppercase tracking-[0.4em] font-black">
                    V-2.1.0 Protocol
                </p>
                <div className="flex gap-4">
                   <a href="tel:+919327462866"><Phone size={12} className="text-white/20 hover:text-[#0071E3]" /></a>
                   <a href="mailto:kuldipsutariya37@gmail.com"><Mail size={12} className="text-white/20 hover:text-[#0071E3]" /></a>
                </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}