import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";

export default function Chatbot({ open, onClose }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! Welcome to VMSS Technologies." },
    { from: "bot", text: "How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  /* 🔊 Message sound */
  const sound = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3"
  );

  /* Auto scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!open) return null;

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    sound.play();

    /* Dummy Bot Reply */
    setTimeout(() => {
      const botReply = {
        from: "bot",
        text: getBotReply(input),
      };
      setMessages((prev) => [...prev, botReply]);
      sound.play();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Chat Box */}
      <div className="relative w-full sm:w-[380px] h-[520px] bg-[#0b1220] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-blue-500/30">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0e1a33] to-[#0b1220] border-b border-blue-500/30">
          <div>
            <h3 className="text-white font-semibold">VMSS Chatbot</h3>
            <p className="text-xs text-gray-400">Online • Typically replies instantly</p>
          </div>
          <button onClick={onClose} className="text-gray-300 hover:text-white">
            <X />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600/40">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] px-3 py-2 rounded-lg ${
                msg.from === "user"
                  ? "ml-auto bg-teal-600 text-white"
                  : "mr-auto bg-blue-600/20 text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-blue-500/30 flex gap-2 bg-[#0e1a33]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded bg-[#0b1220] text-white outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-teal-500 hover:bg-teal-600 text-white px-3 rounded flex items-center"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* 🤖 Dummy bot logic */
function getBotReply(text) {
  const msg = text.toLowerCase();

  if (msg.includes("course")) return "📚 We offer MERN, Python, AI & ML courses.";
  if (msg.includes("contact")) return "📞 You can contact us at support@vmss.in";
  if (msg.includes("price")) return "💰 Course prices start from ₹2999.";
  if (msg.includes("hello") || msg.includes("hi"))
    return "Hello 👋 How can I assist you?";
  if (msg.includes("internship"))
    return "🎓 Yes, we provide internship programs with certification.";

  return "🤖 Thanks for your message! Our team will respond shortly.";
}