import { useState, ChangeEvent, KeyboardEvent } from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/chatbot/Main.module.css";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput("");

    const botMessageText = await generateResponse(input);
    const botMessage: Message = { sender: "bot", text: botMessageText };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const generateResponse = async (userMessage: string): Promise<string> => {
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userMessage }),
    });

    const data = await response.json();
    return data.response || "Sorry, I could not process your request.";
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatbotHeader}>Chatbot</div>
      <div className={styles.chatbotMessages}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            {msg.sender === "bot" ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        ))}
      </div>
      <div className={styles.chatbotInputContainer}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className={styles.chatbotInput}
        />
        <button onClick={handleSend} className={styles.chatbotSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
