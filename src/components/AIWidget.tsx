import type React from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  ArrowRight,
  Headphones,
  CalendarDays,
  CheckCircle2,
  HelpCircle,
  Loader2,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { apiRequest, checkAiHealth, sendAiMessage } from "../lib/api";

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

type BookingResponse = {
  success: boolean;
  calendlyBookingUrl?: string;
  booking?: {
    id?: string;
    status?: string;
  };
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

const formatTime = (date: Date) =>
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function AIWidgetOnly() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<WidgetView>("home");
  const [showNudge, setShowNudge] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [aiAvailable, setAiAvailable] = useState(true);
  const [aiChecked, setAiChecked] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      from: "assistant",
      text: "Hi, I am Emma. I can help with services, quotes, support questions, and booking a call.",
      timestamp: new Date(),
    },
  ]);
  const [bookingForm, setBookingForm] = useState(initialBookingForm);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowNudge(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let active = true;

    checkAiHealth()
      .then((health) => {
        if (!active) return;
        setAiAvailable(Boolean(health.configured));
      })
      .catch(() => {
        if (!active) return;
        setAiAvailable(false);
      })
      .finally(() => {
        if (!active) return;
        setAiChecked(true);
      });

    return () => {
      active = false;
    };
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

  const sendMessage = async (value?: string) => {
    const text = (value || input).trim();
    if (!text || isTyping) return;

    if (text.length < 2) {
      toast.error("Message must be at least 2 characters.");
      return;
    }

    if (text.length > 2000) {
      toast.error("Message must be 2000 characters or less.");
      return;
    }

    if (!aiAvailable) {
      const assistantMessage: Message = {
        id: `${Date.now()}-assistant-unavailable`,
        from: "assistant",
        text: "The AI assistant is unavailable right now. Please try again later.",
        timestamp: new Date(),
      };

      setMessages((current) => [...current, assistantMessage]);
      return;
    }

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      from: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const answer = await sendAiMessage(text);
      const assistantMessage: Message = {
        id: `${Date.now()}-assistant`,
        from: "assistant",
        text: answer,
        timestamp: new Date(),
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      const assistantMessage: Message = {
        id: `${Date.now()}-assistant-error`,
        from: "assistant",
        text: "The AI assistant is unavailable right now. Please try again later.",
        timestamp: new Date(),
      };

      setMessages((current) => [...current, assistantMessage]);
      toast.error(error instanceof Error ? error.message : "AI assistant failed");
    } finally {
      setIsTyping(false);
    }
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
      const data = await apiRequest<BookingResponse>("/api/bookings", {
        method: "POST",
        body: JSON.stringify({
          name: bookingForm.name.trim(),
          email: bookingForm.email.trim(),
          phone: bookingForm.phone.trim(),
          service: bookingForm.topic,
          message: bookingForm.notes.trim(),
        }),
      });

      toast.success("Call request sent", {
        description: data.calendlyBookingUrl
          ? "Opening Calendly so you can choose your final call time."
          : "We will confirm your meeting soon.",
      });

      setMessages((current) => [
        ...current,
        {
          id: `${Date.now()}-booking`,
          from: "assistant",
          text: data.calendlyBookingUrl
            ? `Your request has been received. Please choose your final call date and time using the Calendly link.`
            : "Your request has been received. EmmaTech will follow up by email.",
          timestamp: new Date(),
        },
      ]);

      setCalendlyUrl(data.calendlyBookingUrl || "");
      setBookingForm(initialBookingForm);

      if (data.calendlyBookingUrl) {
        window.setTimeout(() => {
          window.location.assign(data.calendlyBookingUrl as string);
        }, 900);
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Request failed");
    } finally {
      setIsBookingSubmitting(false);
    }
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
                  src="/images/ceo.jpeg"
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
            src="/images/ceo.jpeg"
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
                      src="/images/ceo.jpeg"
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
                          Share your details, then choose the final slot in
                          Calendly.
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
                            disabled={!aiChecked || !aiAvailable || isTyping}
                            onClick={() => sendMessage(question)}
                            className="text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 disabled:opacity-50 disabled:hover:bg-blue-50 px-3 py-2"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 space-y-4 bg-slate-50">
                      {aiChecked && !aiAvailable && (
                        <div className="border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
                          AI assistant unavailable. Please try again later.
                        </div>
                      )}

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
                        disabled={!aiChecked || !aiAvailable || isTyping}
                        placeholder={
                          aiChecked && !aiAvailable
                            ? "AI assistant unavailable"
                            : "Ask Emma..."
                        }
                        className="min-w-0 flex-1 border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-400"
                      />
                      <button
                        type="submit"
                        disabled={
                          !input.trim() || !aiChecked || !aiAvailable || isTyping
                        }
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white flex items-center justify-center"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                )}

                {view === "schedule" && (
                  <form onSubmit={submitBooking} className="p-5 space-y-6">
                    {calendlyUrl && (
                      <div className="border border-emerald-200 bg-emerald-50 p-4">
                        <CheckCircle2 className="h-6 w-6 text-emerald-600 mb-3" />
                        <h3 className="font-bold text-emerald-950">
                          Your booking request has been received.
                        </h3>
                        <p className="text-sm text-emerald-800 mt-2 leading-relaxed">
                          Please choose your final call time using the link
                          below.
                        </p>
                        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                          <a
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 text-sm font-semibold transition-colors"
                          >
                            Choose Call Time
                            <ArrowRight className="h-4 w-4" />
                          </a>
                          <button
                            type="button"
                            onClick={() => setCalendlyUrl("")}
                            className="inline-flex items-center justify-center border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-800 hover:border-emerald-400"
                          >
                            Start Another Request
                          </button>
                        </div>
                      </div>
                    )}

                    <div>
                      <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                        Step 1
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2">
                        Tell us about your request
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Send your basic details first. Calendly will handle the
                        final date, time, calendar invite, meeting link,
                        reminders, and rescheduling.
                      </p>
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
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 text-white px-5 py-4 font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/15 disabled:cursor-wait"
                    >
                      {isBookingSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Saving request...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
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
