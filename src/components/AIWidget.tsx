import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Maximize2,
  Minimize2,
  Home,
  MessageCircle,
  Calendar,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Globe,
} from "lucide-react";

// TypeScript interfaces
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm";
  onClick?: () => void;
  disabled?: boolean;
  [key: string]: any;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

interface InputProps {
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  [key: string]: any;
}

// Tailwind Button Component
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline:
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  };

  const sizes: Record<string, string> = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Tailwind Card Component
const Card = ({ children, className = "", ...props }: CardProps) => (
  <div
    className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Tailwind Input Component
const Input = ({ className = "", type = "text", ...props }: InputProps) => (
  <input
    type={type}
    className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Message interface
interface Message {
  id: string;
  from: "user" | "ai";
  text: string;
  timestamp: Date;
}



export default function AIWidgetOnly() {
  // Add custom styles for the widget
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Tailwind CSS variables */
      :root {
        --background: hsl(0 0% 100%);
        --foreground: hsl(222.2 84% 4.9%);
        --card: hsl(0 0% 100%);
        --card-foreground: hsl(222.2 84% 4.9%);
        --primary: hsl(214 100% 40%);
        --primary-foreground: hsl(210 40% 98%);
        --muted-foreground: hsl(215.4 16.3% 46.9%);
        --accent: hsl(142 76% 36%);
        --accent-foreground: hsl(210 40% 98%);
        --border: hsl(214.3 31.8% 91.4%);
        --input: hsl(214.3 31.8% 91.4%);
        --ring: hsl(214 100% 40%);
      }

      /* Custom animations for AI widget */
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      @keyframes float {
        0%, 100% { 
          transform: translateY(0px); 
        }
        50% { 
          transform: translateY(-10px); 
        }
      }
      
      /* Chat bubble styles */
      .chat-bubble-user {
        background: linear-gradient(135deg, hsl(214 100% 40%) 0%, hsl(214 100% 50%) 100%);
      }
      
      .chat-bubble-ai {
        background: hsl(210 40% 96%);
        border: 1px solid hsl(214.3 31.8% 91.4%);
      }
      
      /* Typing indicator animation */
      .typing-indicator {
        display: inline-flex;
        align-items: center;
        gap: 2px;
      }
      
      .typing-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: hsl(215.4 16.3% 46.9%);
        animation: typing 1.4s infinite ease-in-out;
      }
      
      .typing-dot:nth-child(1) { 
        animation-delay: -0.32s; 
      }
      
      .typing-dot:nth-child(2) { 
        animation-delay: -0.16s; 
      }
      
      @keyframes typing {
        0%, 80%, 100% {
          transform: scale(0.8);
          opacity: 0.5;
        }
        40% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `;

    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  // Main widget states
  const [showMainModal, setShowMainModal] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [initialMessage, setInitialMessage] = useState("");

  // Floating avatar states
  const [showPopup, setShowPopup] = useState(false);
  const [showHiFive, setShowHiFive] = useState(false);

  // Chat states
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Modal states
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"home" | "chat">("home");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  // Floating avatar effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHiFive(true);
      setTimeout(() => setShowHiFive(false), 1000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Chat effects
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (showChatWidget) {
      const welcomeMessage: Message = {
        id: "welcome",
        from: "ai",
        text: "Hi there! I'm Emma, your business assistant. How can I help you grow your company today?",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);

      if (initialMessage) {
        setTimeout(() => {
          handleSendMessage(initialMessage);
        }, 1000);
      }
    }
  }, [showChatWidget, initialMessage]);

  // Helper functions
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: "Good morning", emoji: "☀️" };
    if (hour < 17) return { text: "Good afternoon", emoji: "🌤️" };
    return { text: "Good evening", emoji: "🌙" };
  };

  useEffect(() => {
  console.log("API Key:", import.meta.env.VITE_OPENAI_API_KEY ? "✅ Loaded" : "❌ Missing");
}, []);


  // const generateAIResponse = (userMessage: string): string => {
  //   const responses = [
  //     "That's a great question! Let me help you with that. Our team specializes in digital transformation and growth strategies.",
  //     "I understand your needs. We've helped many businesses achieve similar goals through our comprehensive approach.",
  //     "Excellent! We can definitely assist you with that. Would you like me to connect you with one of our specialists?",
  //     "Thank you for reaching out! We offer tailored solutions that can help boost your company's growth and efficiency.",
  //     "That sounds like something we can help you with. Our proven methodologies have delivered great results for our clients.",
  //   ];

  //   const lowerMessage = userMessage.toLowerCase();
  //   if (
  //     lowerMessage.includes("price") ||
  //     lowerMessage.includes("cost") ||
  //     lowerMessage.includes("budget")
  //   ) {
  //     return "Our pricing is flexible and depends on your specific needs. Would you like me to schedule a consultation to discuss a customized quote?";
  //   }
  //   if (
  //     lowerMessage.includes("service") ||
  //     lowerMessage.includes("what") ||
  //     lowerMessage.includes("help")
  //   ) {
  //     return "We offer comprehensive digital solutions including web development, eCommerce platforms, growth strategies, and business consulting. What specific area interests you most?";
  //   }
  //   if (
  //     lowerMessage.includes("time") ||
  //     lowerMessage.includes("when") ||
  //     lowerMessage.includes("schedule")
  //   ) {
  //     return "We can usually start projects within 1-2 weeks. For urgent requests, we have expedited options available. Would you like me to check our current availability?";
  //   }

  //   return responses[Math.floor(Math.random() * responses.length)];
  // };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Calendar helpers
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7;

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  // Event handlers
  const handleOpenChat = (message?: string) => {
    setInitialMessage(message || "");
    setShowChatWidget(true);
    setShowMainModal(false);
  };

  const handleNavigateHome = () => {
    setShowMainModal(false);
    setShowChatWidget(false);
  };

const handleSendMessage = async (messageText?: string) => {
  const text = messageText || input.trim();
  if (!text) return;

  const userMessage: Message = {
    id: Date.now().toString(),
    from: "user",
    text,
    timestamp: new Date(),
  };

  const updatedMessages = [...messages, userMessage];
  setMessages(updatedMessages);
  if (!messageText) setInput("");
  setIsTyping(true);

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // ✅ available in your account
        messages: [
          { role: "system", content: "You are Emma, a friendly AI business assistant." },
          ...updatedMessages.map((m) => ({
            role: m.from === "user" ? "user" : "assistant",
            content: m.text,
          })),
        ],
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error?.message || "API request failed");
    }

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      from: "ai",
      text: data.choices?.[0]?.message?.content?.trim() || "❌ Sorry, I couldn’t generate a response.",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiMessage]);
  } catch (err: any) {
    console.error("AI Error:", err);
    setMessages((prev) => [
      ...prev,
      {
        id: (Date.now() + 2).toString(),
        from: "ai",
        text: `⚠️ Error: ${err.message}`,
        timestamp: new Date(),
      },
    ]);
  } finally {
    setIsTyping(false);
  }
};

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const greeting = getTimeBasedGreeting();
  const days = getDaysInMonth(currentMonth);

  const caseStudies = [
    {
      title: "Award-Winning Digital Experience",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
    },
    {
      title: "eCommerce Growth Strategy",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
    },
  ];

  return (
    <div>
      {/* Floating Chat Avatar */}
      {!showChatWidget && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Popup Message */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="absolute bottom-20 right-0 mb-4"
              >
                <Card className="p-4 w-80 shadow-xl relative border border-border rounded-lg bg-white dark:bg-gray-800">
                  <button
                    className="absolute top-2 right-2 h-6 w-6 p-0 rounded-md hover:bg-gray-200 z-10 flex items-center justify-center"
                    onClick={() => setShowPopup(false)}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <X className="h-4 w-4" style={{ color: "#374151" }} />
                  </button>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A="
                        alt="Emma - Business Assistant"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground mb-1">
                        Hi, I'm Emma! Looking for a partner to boost your
                        company's growth?
                      </p>
                      <button
                        onClick={() => handleOpenChat("I want to talk to Emma")}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Talk to Emma
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Avatar Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMainModal(true)}
            className="w-16 h-16 rounded-full overflow-hidden shadow-xl border-4 border-white animate-float relative"
          >
            <AnimatePresence mode="wait">
              {showHiFive ? (
                <motion.div
                  key="hifive"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl"
                >
                  👋
                </motion.div>
              ) : (
                <motion.img
                  key="avatar"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src="https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A="
                  alt="Emma - Business Assistant"
                  className="w-full h-full object-cover"
                />
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}

      {/* Main Modal */}
      <AnimatePresence>
        {showMainModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4 top-10"
            onClick={() => setShowMainModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-white rounded-xl shadow-xl transition-all duration-300 ${
                isExpanded
                  ? "w-full h-full max-w-none max-h-none"
                  : "max-w-md w-full max-h-[90vh]"
              } overflow-y-auto`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10  flex items-center justify-center">
                    <img
                      src="/images/logo.png"
                      alt="Emma"
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowMainModal(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Hero Section */}
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A="
                      alt="Emma - Business Assistant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {greeting.text} {greeting.emoji}
                  </h2>
                  <p className="text-gray-600 mb-6">How can we help?</p>

                  {/* Action Buttons */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        onClick={() => handleOpenChat("I want to talk to Emma")}
                        className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg"
                      >
                        <img
                          src="https://pixabay.com/get/ge2807b6d37cff04e126e28a4a6a86877f4bc151540c6740599fe2678bb8706a351e478bd7494f8fbcfbf871e61912446661a80d91973fc5abdb57983bb974530_1280.jpg"
                          alt="Emma"
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span>Talk to Emma</span>
                      </Button>
                      <Button
                        onClick={() => handleOpenChat()}
                        variant="outline"
                        className="px-4 py-2 rounded-lg"
                      >
                        Chat
                      </Button>
                    </div>

                    <Button
                      onClick={() => setShowScheduleModal(true)}
                      variant="outline"
                      className="w-full flex items-center justify-center space-x-2 py-3"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Schedule a call</span>
                    </Button>

                    <Button
                      onClick={() => handleOpenChat("I have a question")}
                      variant="outline"
                      className="w-full flex items-center justify-center space-x-2 py-3"
                    >
                      <HelpCircle className="h-4 w-4" />
                      <span>Ask a question</span>
                    </Button>
                  </div>
                </div>

                {/* Discover Section */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Discover</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudies.map((study, index) => (
                      <Card
                        key={index}
                        className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {study.title}
                            </h4>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center space-x-8 mb-6">
                  <button
                    onClick={() => {
                      setActiveTab("home");
                      handleNavigateHome();
                    }}
                    className={`flex flex-col items-center space-y-1 ${
                      activeTab === "home" ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    <Home className="h-6 w-6" />
                    <span className="text-xs">Home</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("chat");
                      handleOpenChat();
                    }}
                    className={`flex flex-col items-center space-y-1 ${
                      activeTab === "chat" ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    <MessageCircle className="h-6 w-6" />
                    <span className="text-xs">Chat</span>
                  </button>
                </div>

                {/* Footer */}
                <div className="text-center">
                  <p className="text-xs text-gray-400">Powered by Hachly AI</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Schedule Modal */}
      <AnimatePresence>
        {showScheduleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowScheduleModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        scandiweb
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowScheduleModal(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    Scandiweb Development
                  </h2>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Intro Meeting with scandiweb's BD team
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span>⏱️ 45 min</span>
                    <span>
                      💻 Web conferencing details provided upon confirmation.
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Demo / Intro call to meet, greet and find out our potential
                    way forward.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Select a Date & Time
                  </h4>

                  <div className="flex items-center justify-between mb-4">
                    <Button variant="ghost" size="sm" onClick={prevMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <h5 className="font-medium">
                      {monthNames[currentMonth.getMonth()]}{" "}
                      {currentMonth.getFullYear()}
                    </h5>
                    <Button variant="ghost" size="sm" onClick={nextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {daysOfWeek.map((day) => (
                      <div
                        key={day}
                        className="text-center text-xs font-medium text-gray-500 py-2"
                      >
                        {day}
                      </div>
                    ))}
                    {days.map((day, index) => (
                      <div key={index} className="text-center">
                        {day && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 p-0 text-sm hover:bg-primary hover:text-white transition-colors"
                          >
                            {day}
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Globe className="h-4 w-4" />
                    <span>Time zone</span>
                  </div>
                  <p className="text-sm text-gray-900 mt-1">
                    West Africa Time (09:05)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <AnimatePresence>
        {showChatWidget && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] h-[600px] flex flex-col border border-gray-200"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://pixabay.com/get/ge2807b6d37cff04e126e28a4a6a86877f4bc151540c6740599fe2678bb8706a351e478bd7494f8fbcfbf871e61912446661a80d91973fc5abdb57983bb974530_1280.jpg"
                    alt="Emma - Business Assistant"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Emma</h3>
                    <p className="text-sm text-green-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      <span>Online</span>
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowChatWidget(false)}
                  className="hover:bg-red-100 hover:text-red-600 transition-colors rounded-full bg-white/50 border border-gray-300 shadow-sm"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </Button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.from === "user"
                        ? "justify-end"
                        : "items-start space-x-3"
                    }`}
                  >
                    {message.from === "ai" && (
                      <img
                        src="https://pixabay.com/get/ge2807b6d37cff04e126e28a4a6a86877f4bc151540c6740599fe2678bb8706a351e478bd7494f8fbcfbf871e61912446661a80d91973fc5abdb57983bb974530_1280.jpg"
                        alt="Emma"
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      />
                    )}
                    <div
                      className={`rounded-xl px-4 py-3 max-w-xs ${
                        message.from === "user"
                          ? "chat-bubble-user text-white"
                          : "chat-bubble-ai"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span
                        className={`text-xs mt-1 block ${
                          message.from === "user"
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://pixabay.com/get/ge2807b6d37cff04e126e28a4a6a86877f4bc151540c6740599fe2678bb8706a351e478bd7494f8fbcfbf871e61912446661a80d91973fc5abdb57983bb974530_1280.jpg"
                      alt="Emma"
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="bg-gray-100 rounded-xl px-4 py-3">
                      <div className="typing-indicator">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-border bg-white rounded-b-xl flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg px-3 py-2 shadow-md hover:shadow-lg min-w-[44px]"
                    disabled={!input.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
