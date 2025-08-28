// AIChatWidget.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // Fake AI response
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "ai", text: "Hello! How can I assist you today?" }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      <button
        className="bg-purple-700 hover:bg-purple-800 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 md:w-96 h-[500px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden mt-4"
          >
            {/* Header */}
            <div className="bg-purple-700 text-white p-4 flex justify-between items-center">
              <span className="font-semibold">Emma</span>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.from === "user" ? "bg-purple-100 self-end" : "bg-gray-100 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t flex space-x-2">
              <input
                type="text"
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
