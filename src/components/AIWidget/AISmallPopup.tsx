import { motion } from "framer-motion";

interface Props {
  onClose: () => void;
}

export default function AIChatWindow({ onClose }: Props) {
  return (
    <motion.div
      className="w-80 h-96 bg-white text-black rounded-2xl shadow-lg flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-semibold">AI Assistant</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          ✖
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        <div className="bg-gray-100 p-2 rounded-lg self-start max-w-xs">
          Hello 👋 How can I help you today?
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t flex">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
        />
        <button className="ml-2 px-3 py-2 bg-blue-600 text-white rounded-lg">
          Send
        </button>
      </div>
    </motion.div>
  );
}
