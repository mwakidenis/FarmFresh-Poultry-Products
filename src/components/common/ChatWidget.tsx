import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! 🐔 Welcome to FarmFresh Poultry! I'm your AI assistant. How can I help you today? I can help you navigate our website, learn about our products, or answer questions about our poultry farm!",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Cleanup effect to prevent memory leaks
  useEffect(() => {
    return () => {
      // Clean up any pending timeouts when component unmounts
      if (messagesEndRef.current) {
        messagesEndRef.current = null;
      }
      if (chatContainerRef.current) {
        chatContainerRef.current = null;
      }
    };
  }, []);

  // Hardcoded AI responses for the poultry farm
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('product') || message.includes('chicken') || message.includes('egg')) {
      return "🐓 Great question! We offer a variety of premium poultry products including fresh chickens, farm-fresh eggs, and live chicks. You can browse our products by visiting our homepage or checking out specific categories. Would you like me to guide you to a particular product category?";
    }
    
    if (message.includes('order') || message.includes('buy') || message.includes('purchase')) {
      return "🛒 Placing an order is easy! Simply browse our products, add items to your cart, and proceed to checkout. We accept M-Pesa payments for your convenience. You can also create an account to track your orders. Need help with the checkout process?";
    }
    
    if (message.includes('delivery') || message.includes('shipping')) {
      return "🚚 We offer reliable delivery services to get your fresh poultry products right to your doorstep! Check our delivery page for areas we serve and delivery schedules. We ensure all products are handled with care to maintain freshness.";
    }
    
    if (message.includes('about') || message.includes('company') || message.includes('farm')) {
      return "🏡 FarmFresh Poultry is a family-owned farm committed to providing the highest quality poultry products. We take pride in our ethical farming practices and ensuring our chickens are raised in a healthy, natural environment. Visit our About page to learn more about our story and values!";
    }
    
    if (message.includes('contact') || message.includes('help') || message.includes('support')) {
      return "📞 Need to get in touch? You can reach us through our Contact page where you'll find our phone number, email, and location. We're always happy to help with any questions or concerns!";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('payment')) {
      return "💰 Our prices are competitive and reflect the premium quality of our products. You can see detailed pricing on each product page. We accept M-Pesa payments for secure and convenient transactions. Check out our products to see current pricing!";
    }
    
    if (message.includes('tour') || message.includes('visit')) {
      return "🚌 Would you like to visit our farm? We offer guided tours where you can see our farming operations firsthand! It's a great way to learn about sustainable poultry farming. Check our Book Tour page to schedule a visit!";
    }
    
    if (message.includes('fresh') || message.includes('quality')) {
      return "✨ Quality and freshness are our top priorities! All our products are carefully selected and handled to ensure you receive the freshest poultry products. We have strict quality control measures in place from farm to your table.";
    }
    
    if (message.includes('navigate') || message.includes('find') || message.includes('where')) {
      return "🧭 I can help you navigate our website! Use the main menu to browse categories like Chickens, Eggs, Chicks, and more. You can also use the search function to quickly find specific products. What are you looking for?";
    }

    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return "Hello! 😊 Welcome to FarmFresh Poultry! How can I assist you today? I'm here to help you with product information, orders, navigation, or any questions about our farm.";
    }

    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! 🙏 Is there anything else I can help you with today? I'm always here to assist with your poultry needs!";
    }
    
    // Default response
    return "🤔 That's an interesting question! I'm here to help you with information about our products, orders, delivery, or navigating our website. Could you tell me more specifically what you're looking for? You can also contact our support team directly if you need detailed assistance!";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500); // Random delay between 1-2.5 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
          </button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div 
            ref={chatContainerRef}
            className="bg-white rounded-lg shadow-2xl border border-gray-200 w-80 h-96 flex flex-col animate-in slide-in-from-bottom-8 duration-300"
            style={{ maxHeight: '500px', minHeight: '400px' }}
          >
            {/* Chat Header */}
            <div className="bg-amber-500 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="font-semibold text-lg">AI Assistant</h3>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-amber-500 text-white ml-4'
                        : 'bg-white border border-gray-200 text-gray-800 mr-4'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 text-gray-800 mr-4 max-w-xs p-3 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .chat-widget {
            width: calc(100vw - 2rem);
            height: calc(100vh - 8rem);
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ChatWidget;