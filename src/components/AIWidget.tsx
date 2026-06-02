import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  ArrowRight,
  Bot,
  Headphones,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  HelpCircle,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { apiRequest } from "../lib/api";

type WidgetView = "home" | "chat" | "schedule";

type Message = {
  id: string;
  from: "user" | "assistant";
  text: string;
  timestamp: Date;
};

type BookingForm = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  notes: string;
};

const initialBookingForm: BookingForm = {
  name: "",
  email: "",
  phone: "",
  topic: "Software Development",
  notes: "",
};

const quickQuestions = [
  "What services do you offer?",
  "How do I request a quote?",
  "Can I book a call?",
  "Do you offer website SEO?",
];

const services = [
  "Software Development",
  "Managed IT Services",
  "UI/UX Design",
  "SEO Optimization",
  "Consulting",
];

const timeSlots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

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

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const formatTime = (date: Date) =>
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const formatDateLabel = (date: Date | null) => {
  if (!date) return "Select a date";
  return date.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatApiDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const isSameDate = (first: Date, second: Date) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

const isPastDate = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value < today;
};

const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

const buildCalendarDays = (month: Date) => {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1);
  const lastDay = new Date(year, monthIndex + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const days: Array<Date | null> = [];

  for (let index = 0; index < startOffset; index += 1) {
    days.push(null);
  }

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    days.push(new Date(year, monthIndex, day));
  }

  return days;
};

const getLocalEmmaResponse = (message: string) => {
  const text = message.toLowerCase();

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey") ||
    text.includes("good morning") ||
    text.includes("good afternoon") ||
    text.includes("good evening")
  ) {
    return "Hello, welcome to EmmaTech. I can help you choose a service, request a quote, ask a support question, or book an intro call.";
  }

  if (text.includes("quote") || text.includes("price") || text.includes("cost")) {
    return "You can request a free quote from the quote page. Share your service type, budget range, timeline, and project details so EmmaTech can respond with a clearer next step.";
  }

  if (
    text.includes("time") ||
    text.includes("timeline") ||
    text.includes("how long") ||
    text.includes("duration")
  ) {
    return "Project timelines depend on scope. A simple website may be faster, while custom software or dashboards need planning, design, development, testing, and launch support.";
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("phone") ||
    text.includes("location")
  ) {
    return "You can contact EmmaTech by email at emmatech307@gmail.com, phone at +2348161770490, or through the contact page. We are based around Garriki, Enugu.";
  }

  if (text.includes("book") || text.includes("call") || text.includes("meeting")) {
    return "You can book an intro call inside this assistant. Pick a weekday, select a time, and leave your contact details. The form will confirm the request on the frontend for now.";
  }

  if (text.includes("seo")) {
    return "EmmaTech offers SEO optimization for service websites: page structure, metadata, technical checks, keyword-focused content, and local search improvements.";
  }

  if (text.includes("ui") || text.includes("ux") || text.includes("design")) {
    return "EmmaTech designs clean UI/UX for websites, dashboards, web apps, and digital products so users can understand and use the product more easily.";
  }

  if (text.includes("it") || text.includes("support") || text.includes("managed")) {
    return "EmmaTech provides managed IT services, technical support, maintenance, troubleshooting, and practical guidance for business systems.";
  }

  if (text.includes("software") || text.includes("app") || text.includes("website")) {
    return "EmmaTech builds custom software, web applications, dashboards, business tools, and websites around your workflow and growth goals.";
  }

  if (text.includes("service") || text.includes("offer")) {
    return "EmmaTech currently focuses on Software Development, Managed IT Services, UI/UX Design, SEO Optimization, and Consulting.";
  }

  if (
    text.includes("thank") ||
    text.includes("thanks") ||
    text.includes("okay") ||
    text.includes("ok")
  ) {
    return "You are welcome. When you are ready, I can guide you to a quote, contact form, or booking request.";
  }

  return "I can help with EmmaTech services, quotes, booking a call, software projects, UI/UX, SEO, managed IT support, and consulting. Tell me what you want to build or improve.";
};

export default function AIWidgetOnly() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<WidgetView>("home");
  const [showNudge, setShowNudge] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      from: "assistant",
      text: "Hi, I am Emma. I can help with services, quotes, support questions, and booking a call.",
      timestamp: new Date(),
    },
  ]);
  const [visibleMonth, setVisibleMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingForm, setBookingForm] = useState(initialBookingForm);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [bookingNotice, setBookingNotice] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const calendarDays = useMemo(
    () => buildCalendarDays(visibleMonth),
    [visibleMonth],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setShowNudge(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (window.innerWidth < 640) return;

      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (launcherRef.current?.contains(target)) return;

      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const openWidget = (nextView: WidgetView = "home") => {
    setIsOpen(true);
    setView(nextView);
    setShowNudge(false);
  };

  const sendMessage = (value?: string) => {
    const text = (value || input).trim();
    if (!text) return;

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      from: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const assistantMessage: Message = {
        id: `${Date.now()}-assistant`,
        from: "assistant",
        text: getLocalEmmaResponse(text),
        timestamp: new Date(),
      };

      setMessages((current) => [...current, assistantMessage]);
      setIsTyping(false);
    }, 650);
  };

  const handleBookingChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setBookingForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const submitBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      setBookingNotice("Choose an available weekday date and time.");
      toast.error("Choose a date and time.");
      return;
    }

    if (!bookingForm.name.trim() || !bookingForm.email.trim()) {
      toast.error("Name and email are required.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(bookingForm.email.trim())) {
      toast.error("Enter a valid email.");
      return;
    }

    setIsBookingSubmitting(true);

    try {
      await apiRequest("/api/bookings", {
        method: "POST",
        body: JSON.stringify({
          name: bookingForm.name.trim(),
          email: bookingForm.email.trim(),
          phone: bookingForm.phone.trim(),
          service: bookingForm.topic,
          preferredDate: formatApiDate(selectedDate),
          preferredTime: selectedTime,
          message: bookingForm.notes.trim(),
        }),
      });

      toast.success("Call request sent", {
        description: "We will confirm your meeting soon.",
      });

      setMessages((current) => [
        ...current,
        {
          id: `${Date.now()}-booking`,
          from: "assistant",
          text: `Your call request is noted for ${formatDateLabel(selectedDate)} at ${selectedTime}. EmmaTech will confirm by email.`,
          timestamp: new Date(),
        },
      ]);

      setBookingForm(initialBookingForm);
      setSelectedDate(null);
      setSelectedTime("");
      setView("chat");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Request failed");
    } finally {
      setIsBookingSubmitting(false);
    }
  };

  const changeMonth = (direction: "previous" | "next") => {
    setVisibleMonth((current) => {
      const next = new Date(current);
      next.setMonth(current.getMonth() + (direction === "next" ? 1 : -1));
      return next;
    });
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && showNudge && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] max-w-xs bg-white border border-gray-100 shadow-2xl p-4"
          >
            <button
              type="button"
              onClick={() => setShowNudge(false)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-gray-200 shadow flex items-center justify-center"
              aria-label="Close assistant message"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>
            <div className="flex gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
                  alt="Emma AI support"
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Need help choosing a service?
                </p>
                <button
                  type="button"
                  onClick={() => openWidget("chat")}
                  className="text-sm font-semibold text-blue-600 mt-2"
                >
                  Talk to Emma
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        ref={launcherRef}
        type="button"
        onClick={() => openWidget("home")}
        className="fixed bottom-6 right-4 sm:right-6 z-40 group w-16 h-16 rounded-full bg-white border-4 border-white shadow-2xl overflow-visible hover:-translate-y-1 transition-all duration-200"
        aria-label="Open Emma AI assistant"
      >
        <span className="relative block w-full h-full rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
            alt="Emma AI support"
            className="w-full h-full object-cover rounded-full"
          />
        </span>
        <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow" />
        <span className="absolute right-[4.75rem] top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap bg-white border border-gray-100 shadow-lg px-3 py-2 text-left opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
          <span className="block text-xs font-bold text-gray-900">
            AI Support
          </span>
          <span className="block text-[11px] text-gray-500">Ask Emma</span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end justify-end bg-gray-950/35 p-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:block sm:w-[420px] sm:bg-transparent"
            onClick={() => setIsOpen(false)}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <motion.section
              ref={panelRef}
              initial={{ opacity: 0, y: 24, x: 72, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, x: 72, scale: 0.98 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="w-full h-[88vh] sm:w-[420px] sm:h-[680px] sm:max-h-[calc(100vh-8rem)] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.28)] border border-gray-200 flex flex-col min-h-0 overscroll-contain"
              aria-label="Emma AI assistant"
            >
              <div className="bg-gray-950 text-white p-5 flex items-center justify-between flex-shrink-0 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
                      alt="Emma AI support"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-gray-950" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Emma</h2>
                    <p className="text-sm text-blue-100">
                      AI support assistant
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white text-gray-900 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center shadow-lg transition-colors"
                  aria-label="Close assistant"
                >
                  <X className="h-5 w-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="grid grid-cols-3 border-b border-gray-200 flex-shrink-0 bg-white">
                {[
                  { id: "home", label: "Home", icon: Sparkles },
                  { id: "chat", label: "Chat", icon: MessageCircle },
                  { id: "schedule", label: "Book", icon: CalendarDays },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = view === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setView(item.id as WidgetView)}
                      className={`py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                        active
                          ? "text-blue-700 bg-blue-50"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
                {view === "home" && (
                  <div className="p-5 space-y-5">
                    <div className="bg-white border border-gray-200 p-5 shadow-sm">
                      <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                        How can I help?
                      </span>
                      <div className="flex items-center gap-3 mt-2 mb-3">
                        <Headphones className="h-6 w-6 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-900">
                        Get quick guidance before you contact us
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Emma can answer common service questions, guide you to a
                        quote, or help you request an intro call.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <button
                        type="button"
                        onClick={() => setView("chat")}
                        className="border border-gray-100 p-4 text-left hover:border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        <MessageCircle className="h-5 w-5 text-blue-600 mb-3" />
                        <h4 className="font-bold text-gray-900">Ask Emma</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Ask about services, timelines, SEO, IT support, or
                          project planning.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setView("schedule")}
                        className="border border-gray-100 p-4 text-left hover:border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        <CalendarDays className="h-5 w-5 text-blue-600 mb-3" />
                        <h4 className="font-bold text-gray-900">Book a call</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Choose a date, time, topic, and contact details.
                        </p>
                      </button>

                      <Link
                        to="/get-a-quote"
                        onClick={() => setIsOpen(false)}
                        className="border border-gray-100 p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-blue-600 mb-3" />
                        <h4 className="font-bold text-gray-900">
                          Get a free quote
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Use the full quote form for detailed project requests.
                        </p>
                      </Link>
                    </div>
                  </div>
                )}

                {view === "chat" && (
                  <div className="h-full min-h-0 flex flex-col">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {quickQuestions.map((question) => (
                          <button
                            key={question}
                            type="button"
                            onClick={() => sendMessage(question)}
                            className="text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 space-y-4 bg-slate-50">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.from === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[82%] px-4 py-3 ${
                              message.from === "user"
                                ? "bg-blue-600 text-white"
                                : "bg-white border border-gray-100 text-gray-800"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">
                              {message.text}
                            </p>
                            <span
                              className={`text-[11px] mt-2 block ${
                                message.from === "user"
                                  ? "text-blue-100"
                                  : "text-gray-400"
                              }`}
                            >
                              {formatTime(message.timestamp)}
                            </span>
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-white border border-gray-100 px-4 py-3">
                            <div className="flex gap-1">
                              {[0, 1, 2].map((item) => (
                                <span
                                  key={item}
                                  className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        sendMessage();
                      }}
                      className="p-4 border-t border-gray-100 bg-white flex gap-3"
                    >
                      <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask Emma..."
                        className="min-w-0 flex-1 border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                      />
                      <button
                        type="submit"
                        disabled={!input.trim()}
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white flex items-center justify-center"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                )}

                {view === "schedule" && (
                  <form onSubmit={submitBooking} className="p-5 space-y-6">
                    <div>
                      <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                        Book a Call
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2">
                        Request an intro meeting
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Pick a weekday and time. We will confirm the meeting
                        after reviewing your request.
                      </p>
                    </div>

                    <div className="border border-gray-100 p-4">
                      <div className="flex items-center justify-between mb-4">
                        <button
                          type="button"
                          onClick={() => changeMonth("previous")}
                          className="w-9 h-9 border border-gray-200 flex items-center justify-center"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <h4 className="font-bold text-gray-900">
                          {monthNames[visibleMonth.getMonth()]}{" "}
                          {visibleMonth.getFullYear()}
                        </h4>
                        <button
                          type="button"
                          onClick={() => changeMonth("next")}
                          className="w-9 h-9 border border-gray-200 flex items-center justify-center"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {dayNames.map((day) => (
                          <div
                            key={day}
                            className="text-[11px] font-semibold text-gray-500 py-2"
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((date, index) => {
                          if (!date) return <div key={`empty-${index}`} />;

                          const disabled = isPastDate(date);
                          const active =
                            selectedDate !== null &&
                            isSameDate(date, selectedDate);

                          return (
                            <button
                              key={date.toISOString()}
                              type="button"
                              disabled={disabled}
                              onClick={() => {
                                if (isWeekend(date)) {
                                  setBookingNotice(
                                    "Weekend bookings are not available. Please choose a weekday.",
                                  );
                                  toast.error("Weekend bookings are not available.", {
                                    description: "Please choose a weekday.",
                                  });
                                  return;
                                }

                                setSelectedDate(date);
                                setSelectedTime("");
                                setBookingNotice("");
                              }}
                              className={`h-10 text-sm font-semibold transition-colors ${
                                active
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-50 text-gray-800 hover:bg-blue-50"
                              } ${
                                disabled
                                  ? "opacity-35 cursor-not-allowed hover:bg-gray-50"
                                  : ""
                              }`}
                            >
                              {date.getDate()}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {bookingNotice && (
                      <div className="border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
                        {bookingNotice}
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 text-gray-900 font-semibold mb-3">
                        <Clock className="h-4 w-4 text-blue-600" />
                        {formatDateLabel(selectedDate)}
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            disabled={!selectedDate}
                            onClick={() => setSelectedTime(time)}
                            className={`px-3 py-2 border text-sm font-semibold transition-colors ${
                              selectedTime === time
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "border-gray-200 text-gray-700 hover:border-blue-300"
                            } disabled:opacity-40 disabled:hover:border-gray-200`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <InputField
                        icon={UserRound}
                        label="Full name"
                        name="name"
                        value={bookingForm.name}
                        onChange={handleBookingChange}
                        placeholder="Your name"
                      />
                      <InputField
                        icon={Mail}
                        label="Email"
                        type="email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleBookingChange}
                        placeholder="you@example.com"
                      />
                      <InputField
                        icon={HelpCircle}
                        label="Phone"
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleBookingChange}
                        placeholder="+234..."
                      />

                      <div>
                        <label
                          htmlFor="topic"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Topic
                        </label>
                        <select
                          id="topic"
                          name="topic"
                          value={bookingForm.topic}
                          onChange={handleBookingChange}
                          className="w-full border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                        >
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="notes"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Notes
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          value={bookingForm.notes}
                          onChange={handleBookingChange}
                          rows={4}
                          placeholder="Tell us what you want to discuss..."
                          className="w-full border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isBookingSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:hover:bg-blue-600 text-white px-5 py-4 font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      {isBookingSubmitting ? "Sending..." : "Request Call"}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </form>
                )}
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type InputFieldProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  placeholder: string;
  type?: string;
};

const InputField = ({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-200 pl-11 pr-4 py-3 outline-none focus:border-blue-500"
      />
    </div>
  </div>
);
