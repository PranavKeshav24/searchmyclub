import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Predefined common questions
  const commonQuestions = [
    'What events are happening?',
    'How do I register for an event?',
    'Which clubs are available?',
    'Where can I find event details?',
  ];

  // Predefined chatbot responses
  const predefinedResponses = [
    {
      keywords: ['events', 'happening'],
      answer:
        '🎭 **Cultural Fest** - March 15th\n💻 **Hackathon** - March 20th\n🎤 **Open Mic Night** - March 18th',
    },
    {
      keywords: ['register', 'sign up', 'participate'],
      answer: 'You can register for events through the event page in our app.',
    },
    {
      keywords: ['clubs', 'club list', 'list', 'club'],
      answer:
        'Here’s a list of clubs:\n1️⃣ **Cultural Clubs**: Art, Music, Drama, Dance\n2️⃣ **Technical Clubs**: Coding, Robotics, AI, Electronics\n3️⃣ **Sports Clubs**: Football, Basketball, Chess, Cricket',
    },
    {
      keywords: ['details', 'event info', 'find'],
      answer:
        'You can find detailed information about events in the Events section of our app.',
    },
    {
      keywords: ['thank you', 'thanks'],
      answer: "You're welcome! Have a great day! 😊",
    },
    {
      keywords: ['platform', 'about', 'what is', 'this app'],
      answer:
        'Our platform helps colleges manage club events efficiently by providing tools for event creation, participant tracking, and communication.',
    },
    {
      keywords: ['how to use', 'how can', 'college use'],
      answer:
        'Colleges can sign up, create their club events, and manage participation seamlessly through our system.',
    },
    {
      keywords: ['multiple clubs', 'many clubs', 'college clubs'],
      answer:
        'Yes! Each college can have multiple clubs managing their events separately but under the same institution.',
    },
    {
      keywords: ['create event', 'add event', 'make event'],
      answer:
        'Simply log in, navigate to the event creation page, enter details like date, location, and description, then publish it for attendees to see.',
    },
    {
      keywords: ['track attendance', 'attendance', 'who joined'],
      answer:
        'Yes! Our platform allows organizers to track attendee responses and manage registrations.',
    },
    {
      keywords: ['register event', 'sign up for event', 'join event'],
      answer:
        'Each event will have a unique registration link that can be shared via email or social media.',
    },
    {
      keywords: ['send notifications', 'event updates', 'notify'],
      answer:
        'Yes, real-time updates and notifications can be sent regarding event changes or reminders.',
    },
    {
      keywords: ['analytics', 'event stats', 'tracking'],
      answer:
        'Yes, you can track attendance trends, engagement levels, and participant feedback through our dashboard.',
    },
    {
      keywords: ['mobile app', 'phone', 'android', 'ios'],
      answer:
        'Currently, we support web-based access, but a mobile app is in development.',
    },
    {
      keywords: ['technical support', 'help', 'assistance'],
      answer:
        "You can reach out to our support team through the 'Help' section in the app or email us at [support email].",
    },
  ];

  const greetings = [
    'hi',
    'hello',
    'hey',
    'good morning',
    'good afternoon',
    'good evening',
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = message => {
    if (!message.trim()) return;

    const lowerCaseInput = message.toLowerCase();
    setMessages([...messages, { text: message, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let response =
        'Sorry, I’m not sure about that. For more details, check **@cat.rnsit** on Instagram!';

      if (greetings.includes(lowerCaseInput)) {
        response = 'Hello! How can I assist you today?';
      } else {
        const matchedResponse = predefinedResponses.find(res =>
          res.keywords.some(keyword => lowerCaseInput.includes(keyword))
        );
        if (matchedResponse) response = matchedResponse.answer;
      }

      setMessages([
        ...messages,
        { text: message, sender: 'user' },
        { text: response, sender: 'bot' },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 flex items-center justify-center bg-[#4338CA] text-white text-2xl rounded-full shadow-lg hover:bg-[#372D8D] transition-transform transform hover:scale-110"
        >
          🗨️
        </button>
      )}

      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg border border-gray-300 transition-all transform scale-100">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between bg-[#4338CA] text-white rounded-t-lg">
            <span className="font-semibold">Chat Support</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold hover:text-gray-300 transition"
            >
              ❌
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-60 overflow-y-auto bg-gray-50 rounded-b-lg">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 mb-2 rounded-lg w-fit shadow-md text-sm ${
                  msg.sender === 'bot'
                    ? 'bg-[#4338CA] text-white'
                    : 'bg-gray-200 text-black self-end ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && <div className="text-gray-500 text-sm">Typing...</div>}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Common Questions */}
          <div className="p-2 bg-gray-100">
            <span className="text-sm font-semibold">Quick Questions:</span>
            <div className="flex flex-wrap mt-2">
              {commonQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(question)}
                  className="m-1 px-3 py-1 text-sm bg-blue-200 text-blue-800 rounded-md hover:bg-blue-300 transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input & Send Button */}
          <div className="flex border-t p-2 bg-white items-center rounded-b-lg">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Write a message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none"
              onKeyPress={e => e.key === 'Enter' && handleSendMessage(input)}
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="ml-2 p-2 bg-[#4338CA] text-white rounded-lg hover:bg-[#372D8D] flex items-center justify-center text-lg"
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
