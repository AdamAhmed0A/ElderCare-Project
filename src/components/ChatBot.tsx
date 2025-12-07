import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const defaultMessages: Message[] = [
  {
    id: 1,
    text: "Hello! 👋 Welcome to CareConnect. How can I help you today?",
    isBot: true,
  },
];

const quickReplies = [
  "Find supplies",
  "Donate items",
  "Locate care homes",
  "Contact support",
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to explore our supplies or donation options.",
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: reply,
      isBot: false,
    };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      let response = "";
      switch (reply) {
        case "Find supplies":
          response = "You can browse our supplies catalog at the Supplies page. We have mobility aids, medical equipment, and daily living essentials!";
          break;
        case "Donate items":
          response = "That's wonderful! Visit our Donate page to submit items for elderly care homes. Every donation makes a difference!";
          break;
        case "Locate care homes":
          response = "Use our Nearby Homes feature to find elderly care facilities in your area using your location or zip code.";
          break;
        case "Contact support":
          response = "You can reach us at 1-800-CARE-NOW or email help@careconnect.org. Our team is available Monday-Friday, 9 AM - 6 PM.";
          break;
        default:
          response = "Thank you for reaching out! How else can I assist you today?";
      }
      const botResponse: Message = {
        id: messages.length + 2,
        text: response,
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-xl transition-all duration-300",
          "bg-primary text-primary-foreground hover:scale-110 hover:shadow-2xl",
          "flex items-center justify-center",
          "animate-bounce-gentle",
          isOpen && "rotate-0"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <div className={cn(
          "transition-transform duration-300",
          isOpen ? "rotate-180 scale-0" : "rotate-0 scale-100"
        )}>
          <MessageCircle className="w-7 h-7" fill="currentColor" />
        </div>
        <div className={cn(
          "absolute transition-transform duration-300",
          isOpen ? "rotate-0 scale-100" : "rotate-180 scale-0"
        )}>
          <X className="w-7 h-7" />
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)]",
          "bg-card rounded-2xl shadow-2xl border border-border overflow-hidden",
          "transition-all duration-300 origin-bottom-right",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-primary p-4 text-primary-foreground">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center animate-pulse-gentle">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">CareConnect Assistant</h3>
              <p className="text-sm text-primary-foreground/80 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Online now
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-muted/30">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={cn(
                "flex animate-fade-in",
                message.isBot ? "justify-start" : "justify-end"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-2xl text-sm",
                  message.isBot
                    ? "bg-card text-foreground rounded-bl-none shadow-sm"
                    : "bg-primary text-primary-foreground rounded-br-none"
                )}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies */}
        <div className="p-3 border-t border-border bg-card">
          <div className="flex flex-wrap gap-2 mb-3">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="px-3 py-1.5 text-xs font-medium bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors duration-200"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 h-10 text-sm"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="h-10 w-10 shrink-0"
              disabled={!inputValue.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
