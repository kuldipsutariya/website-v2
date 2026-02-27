"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Send, Terminal, Phone, Mail, MessageSquare, ChevronRight, Trash2 } from "lucide-react"

// --- ENTIRE DATASET (ALL LINES INCLUDED) ---
const chatDataRaw = [
  { id: 1, keywords: ["hi", "hello", "hey", "friday", "morning"], answer: "Systems online. Hello, I am FRIDAY. Ready to assist with your digital transformation. How can I help?", options: ["Services", "Pricing", "Contact"] },
  { id: 2, keywords: ["price", "cost", "money", "rupees", "investment", "charge"], answer: "Investment tiers: ₹6,999 (Starter), ₹10,999 (Growth), and ₹14,999 (Authority). For a full breakdown of what's included, please visit our services page.", options: ["Go to Services", "Contact Kuldip"] },
  { id: 3, keywords: ["services", "what you do", "offer"], answer: "We build high-performance digital assets: Doctor Portfolios, Consultant Suites, and Educational Institute sites.", options: ["Pricing", "Portfolio"] },
  { id: 4, keywords: ["contact", "call", "whatsapp", "reach", "number"], answer: "Connect with Kuldip directly at +91 93274 62866 or kuldipsutariya37@gmail.com. Would you like to start a WhatsApp chat?", options: ["WhatsApp Now", "Email"] },
  { id: 5, keywords: ["doctor", "medical", "clinic", "hospital"], answer: "We specialize in 'Medical Authority' sites designed to build patient trust with Apple-style aesthetics.", options: ["See Examples", "Pricing"] },
  { id: 6, keywords: ["time", "duration", "fast", "delivery", "long", "weeks"], answer: "Standard deployment is 1-2 weeks. We move at the speed of your business without compromising code quality.", options: ["Process", "Start"] },
  { id: 7, keywords: ["portfolio", "work", "example", "sample", "show"], answer: "Our work focuses on 'Functional Elegance'. We prioritize white space, typography, and high speed.", options: ["View Demos", "Pricing"] },
  { id: 8, keywords: ["seo", "google", "rank", "search"], answer: "Every site is SEO-optimized by default to ensure your brand is discoverable on Google.", options: ["Learn More", "Start"] },
  { id: 9, keywords: ["mobile", "responsive", "phone", "tablet"], answer: "Every pixel is optimized for mobile. Your site will feel like a native app on all devices.", options: ["See Demos"] },
  { id: 10, keywords: ["custom", "template", "unique"], answer: "No templates used. Every line of code is hand-crafted for your specific professional brand.", options: ["Process", "Contact"] },
  { id: 11, keywords: ["update", "edit", "change"], answer: "Our systems are scalable. You can easily update your content as your business grows.", options: ["Support Plan"] },
  { id: 12, keywords: ["security", "safe", "ssl", "hack"], answer: "Bank-grade security protocols, SSL certificates, and data protection are standard on all builds.", options: ["Technical Info"] },
  { id: 13, keywords: ["hosting", "domain", "server"], answer: "We handle the technical heavy lifting: Domain setup, high-speed hosting, and business emails.", options: ["Pricing"] },
  { id: 14, keywords: ["help", "support", "maintenance"], answer: "Protocol includes post-launch support to manage your digital health. We stay with you after launch.", options: ["Contact Kuldip"] },
  { id: 15, keywords: ["institute", "school", "academy", "education"], answer: "We build educational layouts that make your institute look like a global leader in its field.", options: ["Examples", "Start"] },
  { id: 16, keywords: ["consultant", "expert", "coach"], answer: "We turn expertise into a visual narrative that converts visits into high-ticket clients.", options: ["Get Started"] },
  { id: 17, keywords: ["modern", "apple", "clean", "minimal"], answer: "Our design language is inspired by Apple: Minimalist, intuitive, and premium aesthetics.", options: ["Portfolio"] },
  { id: 18, keywords: ["payment", "advance", "fees"], answer: "We work with a 50% initialization deposit, with the remaining due upon project deployment.", options: ["Start Project"] },
  { id: 19, keywords: ["revisions", "changes", "fix"], answer: "We offer unlimited iterations during the design phase until the vision is perfect for you.", options: ["Process"] },
  { id: 20, keywords: ["thanks", "bye", "cool", "done"], answer: "You're welcome, Boss. Systems standing by if you need further intelligence.", options: ["Main Menu"] }
];

export default function FridayBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "FRIDAY core active. How can I assist your business today?", options: ["Services", "Pricing", "Contact"] }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // 10-Second Auto Greeting Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowPrompt(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Auto Scroll to Bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Logic Engine with Fallback Contact
  const handleLogic = (userInput) => {
    const text = userInput.toLowerCase().trim();
    
    const match = chatDataRaw.find(item => 
      item.keywords.some(key => text.includes(key))
    );

    if (match) {
      return { content: match.answer, options: match.options };
    }

    // Fallback if question is not recognized
    return { 
      content: "I'm not quite sure about that. Please contact Kuldip directly at +91 93274 62866 for direct assistance.", 
      options: ["Contact Kuldip", "Pricing", "Services"] 
    };
  };

  const sendMessage = (text) => {
    const userText = text || input;
    if (!userText.trim()) return;

    // Handle Redirection to Services page
    if (userText === "Go to Services") {
      window.location.href = "/services"; 
      return;
    }

    const updatedMessages = [...messages, { role: "user", content: userText }];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = handleLogic(userText);
      setIsTyping(false);
      setMessages([...updatedMessages, { 
        role: "assistant", 
        content: response.content, 
        options: response.options 
      }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      
      {/* Non-Flashy 10s Prompt */}
      {showPrompt && !isOpen && (
        <div className="absolute bottom-20 right-0 w-64 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100">
          <div className="flex justify-between items-start mb-1">
            <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">Friday</p>
            <button onClick={() => setShowPrompt(false)}><X size={14} className="text-zinc-400 hover:text-zinc-900" /></button>
          </div>
          <p className="text-[13px] text-zinc-600 leading-tight font-medium">
            "Hey, my name is Friday. Do you need any help with your project?"
          </p>
          <button 
            onClick={() => { setIsOpen(true); setShowPrompt(false); }}
            className="mt-3 text-[10px] font-black text-blue-600 uppercase tracking-widest"
          >
            Open Chat →
          </button>
        </div>
      )}

      {/* Main Bot Button (Stable Design) */}
      {!isOpen && (
        <button 
          onClick={() => { setIsOpen(true); setShowPrompt(false); }}
          className="h-16 w-16 bg-zinc-900 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95"
        >
          <Bot className="text-white" size={28} />
        </button>
      )}

      {/* Responsive Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:absolute md:bottom-0 md:right-0 md:w-[380px] md:h-[600px] bg-white md:rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-zinc-900 flex items-center justify-center">
                <Terminal size={18} className="text-white" />
              </div>
              <h3 className="text-zinc-900 text-[11px] font-black uppercase tracking-widest">Friday OS</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-zinc-200 rounded-full text-zinc-400 transition-all"
            >
              <X size={22} />
            </button>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-6 bg-white">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                  msg.role === "user" 
                    ? "bg-blue-600 text-white rounded-tr-none" 
                    : "bg-zinc-100 text-zinc-800 rounded-tl-none"
                }`}>
                  {msg.content}
                </div>
                
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {msg.options.map((opt, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => sendMessage(opt)}
                        className="text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-lg border border-zinc-200 text-zinc-500 hover:bg-zinc-900 hover:text-white transition-all bg-white"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest ml-1 animate-pulse">
                Friday is thinking...
              </div>
            )}
          </div>

          {/* Input Panel */}
          <div className="p-5 border-t border-zinc-100 bg-white">
            <div className="relative flex items-center">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask your question..."
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-5 py-4 pr-12 text-[13px] text-zinc-900 outline-none focus:border-zinc-900 transition-all"
              />
              <button 
                onClick={() => sendMessage()}
                className="absolute right-2 p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md"
              >
                <Send size={16} />
              </button>
            </div>
            
            <div className="mt-4 flex justify-between items-center px-1 opacity-30">
              <p className="text-[8px] font-black text-zinc-900 uppercase tracking-[0.3em]">Friday Neural Link</p>
              <button onClick={() => setMessages([messages[0]])} className="text-[8px] font-black text-zinc-900 uppercase tracking-widest">Clear Chat</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}