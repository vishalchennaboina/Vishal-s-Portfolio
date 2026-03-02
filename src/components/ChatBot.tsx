import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
}

const quickReplies = [
  "Tell me about your projects",
  "What skills do you have?",
  "How can I contact you?",
  "What certifications do you hold?",
];

const botResponses: Record<string, string> = {
  projects:
    "I've built several projects including AI-powered apps, full-stack web platforms, and DevOps tools. Check out the Projects section above for details!",
  skills:
    "I'm proficient in React, TypeScript, Node.js, Python, and AI/ML frameworks like TensorFlow and PyTorch. See the Skills section for a full breakdown.",
  contact:
    "You can reach me through the Support & Contact form below, or connect via GitHub, LinkedIn, or email.",
  certifications:
    "I hold certifications in AWS, TensorFlow, and more. Scroll to the Certifications section to see them all!",
  default:
    "Thanks for your message! Feel free to explore the portfolio or use the quick replies below. For detailed inquiries, use the contact form in the Support section.",
};

const getBotResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("project")) return botResponses.projects;
  if (lower.includes("skill") || lower.includes("tech")) return botResponses.skills;
  if (lower.includes("contact") || lower.includes("reach") || lower.includes("email"))
    return botResponses.contact;
  if (lower.includes("cert")) return botResponses.certifications;
  return botResponses.default;
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      content: "Hi! 👋 I'm here to help you navigate the portfolio. Ask me anything or use a quick reply below.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: getBotResponse(text),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-foreground text-background shadow-2xl hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass flex flex-col overflow-hidden"
            style={{ maxHeight: "min(500px, 70vh)" }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-background" />
              </div>
              <div>
                <p className="text-sm font-mono font-semibold text-foreground">Portfolio Bot</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-3">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === "user"
                          ? "bg-foreground text-background"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Replies */}
              {messages.length <= 2 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {quickReplies.map((qr) => (
                    <button
                      key={qr}
                      onClick={() => sendMessage(qr)}
                      className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}
            </ScrollArea>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-xl bg-secondary/50 border-border h-10 text-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-xl bg-foreground text-background hover:bg-foreground/90 h-10 w-10 shrink-0"
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
